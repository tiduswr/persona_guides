import { RequestsGrid } from "@/components/requests-grid";
import { RequestsHeader } from "@/components/requests-header";

export default function RequestsPage() {
  return (
    <div className="min-h-screen bg-background">
      <RequestsHeader />
      <RequestsGrid />
    </div>
  );
}