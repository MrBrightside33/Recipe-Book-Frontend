type RecipeMetaProps = {
  cuisine: string;
  mealType: string[];
  difficulty: string;
  cookTimeMinutes: number;
};

export default function RecipeMeta({ cuisine, mealType, difficulty, cookTimeMinutes }: RecipeMetaProps) {
  return (
    <dl className="grid grid-cols-2 gap-x-4 gap-y-3 text-sm">
      <div><dt className="text-xs text-ink-muted">Cuisine</dt><dd className="mt-1 font-medium">{cuisine}</dd></div>
      <div><dt className="text-xs text-ink-muted">Meal type</dt><dd className="mt-1 font-medium">{mealType.join(", ")}</dd></div>
      <div><dt className="text-xs text-ink-muted">Difficulty</dt><dd className="mt-1 font-medium">{difficulty}</dd></div>
      <div><dt className="text-xs text-ink-muted">Cook time</dt><dd className="mt-1 font-medium">{cookTimeMinutes} mins</dd></div>
    </dl>
  );
}
