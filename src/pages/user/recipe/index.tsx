import { Link, useParams } from "react-router";
import { Section } from "@/components/ui/section";
import { RecipeDetails } from "@/components/features/recipe/recipe-details";

export default function RecipePage() {
  const { id } = useParams();

  return (
    <Section>
      <Link to="/user" className="text-sm font-medium text-terracotta hover:text-terracotta-dark">
        ← Back to recipes
      </Link>

      {id && <RecipeDetails key={id} id={id} />}
    </Section>
  );
}
