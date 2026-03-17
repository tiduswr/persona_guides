import { LinkedEpisodesGrid } from "@/components/linked-episodes-grid";
import { LinkedEpisodesHeader } from "@/components/linked-episodes-header";

export default function ExamsPage() {
  return (
    <div className="min-h-screen bg-background">
      <LinkedEpisodesHeader />
      <LinkedEpisodesGrid />
    </div>
  );
}