import { PageHeader } from "@/components/common/page-header";
import { AdminRecipes } from "@/components/features/admin/admin-recipes";
import { Section } from "@/components/ui/section";

export default function AdminRecipesPage() {
  return (
    <Section>
      <PageHeader
        eyebrow="Catalog"
        title="All recipes"
        description="Browse recipes across every account, including owner details."
      />
      <AdminRecipes />
    </Section>
  );
}
