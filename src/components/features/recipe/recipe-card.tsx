import { Link } from "react-router";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tag } from "@/components/ui/tag";
import RecipeMeta from "@/components/common/recipe-meta";

type RecipeCardProps = {
  id: string;
  image: string;
  name: string;
  cuisine: string;
  mealType: string[];
  difficulty: "Easy" | "Medium" | "Hard";
  cookTimeMinutes: number;
  tags: string[];
  onDelete: (id: string) => void;
};

export default function RecipeCard({id, image, name, cuisine, mealType, difficulty, cookTimeMinutes, tags, onDelete}: RecipeCardProps) {
  return (
    <Card className="group flex h-full flex-col transition-shadow hover:shadow-md hover:shadow-espresso/10">
      <div className="h-52 overflow-hidden bg-paper">
        <img src={image} alt={name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
      </div>

      <div className="flex flex-1 flex-col gap-4 p-5">
        <h3 className="font-display text-xl tracking-tight">{name}</h3>

        <RecipeMeta
          cuisine={cuisine}
          mealType={mealType}
          difficulty={difficulty}
          cookTimeMinutes={cookTimeMinutes}
        />

        <div className="flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>

        <div className="mt-auto grid grid-cols-2 gap-2 pt-2">
          <Link to={`/recipe/${id}`}>
            <Button className="w-full">View</Button>
          </Link>
          <Button variant="danger" onClick={() => onDelete(id)}>
            Delete
          </Button>
        </div>
      </div>
    </Card>
  );
}
