import { PageHeader } from "@/components/common/page-header";
import { AdminOverview } from "@/components/features/admin/admin-overview";
import { Section } from "@/components/ui/section";

export default function AdminPage() {
  return (
    <Section>
      <PageHeader
        eyebrow="Dashboard"
        title="Kitchen overview"
        description="See recipe volume, cooks, and the latest additions across every account."
      />
      <AdminOverview />
    </Section>
  );
}
