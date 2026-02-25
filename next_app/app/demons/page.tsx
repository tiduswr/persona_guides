import { DemonsGrid } from "@/components/demons-grid";
import { DemonsHeader } from "@/components/demons-header";

export default function ExamsPage() {
  return (
    <div className="min-h-screen bg-background">
      <DemonsHeader />
      <DemonsGrid />
    </div>
  );
}