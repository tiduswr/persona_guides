import { ExamsGrid } from "@/components/exams-grid";
import { ExamsHeader } from "@/components/exams-header";

export default function ExamsPage() {
  return (
    <div className="min-h-screen bg-background">
      <ExamsHeader />
      <ExamsGrid />
    </div>
  );
}