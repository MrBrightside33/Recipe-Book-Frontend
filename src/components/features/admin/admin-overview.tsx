import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router";
import { getAllRecipesService } from "@/services/recipe-service";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tag } from "@/components/ui/tag";
import type { AdminRecipe } from "./admin-recipes-table";

export function AdminOverview() {
  const [recipes, setRecipes] = useState<AdminRecipe[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(function fetchRecipes() {
    let active = true;

    async function load() {
      setLoading(true);
      setError("");
      try {
        const rows = await getAllRecipesService();
        if (active) setRecipes(rows);
      } catch {
        if (active) setError("Unable to load dashboard data. Please try again.");
      } finally {
        if (active) setLoading(false);
      }
    }

    load();
    return () => {
      active = false;
    };
  }, []);

  const stats = useMemo(() => {
    const owners = new Set(recipes.map((recipe) => recipe.userId));
    const cuisines = new Set(recipes.map((recipe) => recipe.cuisine).filter(Boolean));
    const difficulties = recipes.reduce(
      (counts, recipe) => {
        counts[recipe.difficulty] = (counts[recipe.difficulty] ?? 0) + 1;
        return counts;
      },
      {} as Record<string, number>,
    );

    return {
      total: recipes.length,
      owners: owners.size,
      cuisines: cuisines.size,
      difficulties,
      recent: recipes.slice(0, 6),
    };
  }, [recipes]);

  if (error) {
    return <p role="alert" className="rounded-xl bg-rose-50 p-4 text-rose-700">{error}</p>;
  }

  return (
    <div className="space-y-8">
      <div className="grid gap-4 sm:grid-cols-3">
        <StatCard label="Recipes" value={loading ? "—" : String(stats.total)} hint="Saved across every account" />
        <StatCard label="Cooks" value={loading ? "—" : String(stats.owners)} hint="Unique recipe owners" />
        <StatCard label="Cuisines" value={loading ? "—" : String(stats.cuisines)} hint="Distinct cuisine labels" />
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="p-6 lg:col-span-1">
          <h2 className="font-display text-xl">Difficulty mix</h2>
          <p className="mt-1 text-sm text-ink-muted">How challenging the catalog is overall.</p>
          <ul className="mt-6 space-y-4">
            {(["Easy", "Medium", "Hard"] as const).map((level) => (
              <li key={level} className="flex items-center justify-between text-sm">
                <span>{level}</span>
                <Tag>{loading ? "—" : stats.difficulties[level] ?? 0}</Tag>
              </li>
            ))}
          </ul>
        </Card>

        <Card className="p-6 lg:col-span-2">
          <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
            <div>
              <h2 className="font-display text-xl">Latest recipes</h2>
              <p className="mt-1 text-sm text-ink-muted">A quick look at what people have added.</p>
            </div>
            <Link to="/admin/recipes">
              <Button variant="secondary">View all</Button>
            </Link>
          </div>

          {loading ? (
            <p className="text-sm text-ink-muted">Loading recipes…</p>
          ) : stats.recent.length === 0 ? (
            <p className="text-sm text-ink-muted">No recipes have been created yet.</p>
          ) : (
            <ul className="divide-y divide-line">
              {stats.recent.map((recipe) => (
                <li key={recipe.id} className="flex items-center gap-3 py-3">
                  <img src={recipe.image} alt="" className="h-12 w-12 rounded-lg object-cover" />
                  <div className="min-w-0 flex-1">
                    <p className="truncate font-medium">{recipe.name}</p>
                    <p className="truncate text-xs text-ink-muted">{recipe.ownerName || "Unnamed user"} · {recipe.cuisine}</p>
                  </div>
                  <Tag>{recipe.difficulty}</Tag>
                </li>
              ))}
            </ul>
          )}
        </Card>
      </div>
    </div>
  );
}

function StatCard({ label, value, hint }: { label: string; value: string; hint: string }) {
  return (
    <Card className="p-6">
      <p className="text-xs font-semibold tracking-[0.18em] text-terracotta uppercase">{label}</p>
      <p className="mt-3 font-display text-4xl tracking-tight">{value}</p>
      <p className="mt-2 text-sm text-ink-muted">{hint}</p>
    </Card>
  );
}
