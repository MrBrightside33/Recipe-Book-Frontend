import { PageHeader } from "@/components/common/page-header";
import { RecipeCollection } from "@/components/features/recipe/recipe-collection";
import { Section } from "@/components/ui/section";

export default function HomePage() {
  return (
    <Section>
      <PageHeader
        eyebrow="Your kitchen companion"
        title="My recipes"
        description="Keep family classics and new experiments in one place."
      />
      <RecipeCollection />
    </Section>
  );
}
