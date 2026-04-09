import { Heart, Users } from "lucide-react"

export function TagBadge({ tag }: { tag: string }) {
  const isRomance = tag.toLowerCase().includes("romance")
  return (
    <span className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${
      isRomance ? "bg-pink-500/20 text-pink-300" : "bg-sky-500/20 text-sky-300"
    }`}>
      {isRomance ? <Heart className="h-2.5 w-2.5" /> : <Users className="h-2.5 w-2.5" />}
      {tag}
    </span>
  )
}