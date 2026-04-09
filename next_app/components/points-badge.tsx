export function PointsBadge({ points }: { points: number }) {
  if (points === 0) return <span className="text-xs font-mono text-muted-foreground">+0</span>
  if (points < 0) return <span className="text-xs font-mono text-red-500 font-bold">{points}</span>
  if (points >= 3) return <span className="text-xs font-mono text-emerald-500 font-bold">+{points}</span>
  return <span className="text-xs font-mono text-sky-500 font-bold">+{points}</span>
}