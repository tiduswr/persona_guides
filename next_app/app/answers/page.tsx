import { AnswersGrid } from "@/components/answers-grid";
import { AnswersHeader } from "@/components/answers-header";

export default function LinkedEpisodes() {
  return (
    <div className="min-h-screen bg-background">
      <AnswersHeader />
      <AnswersGrid />
    </div>
  );
}