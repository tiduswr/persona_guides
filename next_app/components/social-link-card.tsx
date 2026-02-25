"use client"

import type { SocialLink } from "@/types/social-links-entities"
import { Bookmark, ChevronDown, ChevronUp, Heart, Star, Users } from "lucide-react"
import { useState } from "react"

function PointsBadge({ points }: { points: number }) {
  if (points === 0) return <span className="text-xs font-mono text-muted-foreground">+0</span>
  if (points < 0)
    return <span className="text-xs font-mono text-red-500 font-bold">{points}</span>
  if (points >= 3)
    return <span className="text-xs font-mono text-emerald-500 font-bold">+{points}</span>
  return <span className="text-xs font-mono text-sky-500 font-bold">+{points}</span>
}

function TagBadge({ tag }: { tag: string }) {
  const isRomance = tag.toLowerCase().includes("romance")
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${
        isRomance
          ? "bg-pink-500/20 text-pink-300"
          : "bg-sky-500/20 text-sky-300"
      }`}
    >
      {isRomance ? <Heart className="h-2.5 w-2.5" /> : <Users className="h-2.5 w-2.5" />}
      {tag}
    </span>
  )
}

export function SocialLinkCard({ link }: { link: SocialLink }) {
  const [expanded, setExpanded] = useState(false)

  const hasContent = link.ranks.some((r) =>
    r.responses.some((resp) => resp.options.length > 0)
  )

  return (
    <div className="group relative overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5">
      <button
        onClick={() => setExpanded(!expanded)}
        className="flex w-full cursor-pointer items-center gap-4 p-4 text-left transition-colors hover:bg-secondary/50"
      >
        <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg flex items-center justify-center bg-transparent">
          <img
            src={link.image}
            alt={link.characterName}
            className="h-full w-full object-contain"
            style={{ 
                imageRendering: 'smooth',
            }}
          />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className="inline-flex items-center justify-center rounded-md bg-primary/15 px-2 py-0.5 text-[11px] font-bold tracking-wider text-primary">
              {link.arcanaNumber}
            </span>
            <h3 className="truncate text-lg font-bold text-foreground">
              {link.characterName}
            </h3>
          </div>
          <span className="inline-flex items-center gap-1 rounded-md bg-secondary/80 px-2 py-0.5 text-[10px] font-semibold text-muted-foreground uppercase border border-border">
              <Bookmark className="h-2.5 w-2.5" />
              {link.arcanaName}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="hidden text-xs text-muted-foreground sm:block">
            {link.ranks.length} Ranks
          </span>
          {expanded ? (
            <ChevronUp className="h-5 w-5 text-muted-foreground" />
          ) : (
            <ChevronDown className="h-5 w-5 text-muted-foreground" />
          )}
        </div>
      </button>

      {expanded && hasContent && (
        <div className="border-t border-border px-4 pb-4 bg-secondary/10">
          {link.ranks.map((rank) => {
            const hasOptions = rank.responses.some((r) => r.options.length > 0)
            if (!hasOptions) return null

            return (
              <div key={rank.rank} className="mt-4">
                <div className="mb-2 flex items-center gap-2">
                  <div className="flex items-center gap-0.5">
                    {Array.from({ length: Math.min(rank.rank, 10) }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-3 w-3 fill-primary text-primary"
                      />
                    ))}
                  </div>
                  <h4 className="text-sm font-black text-primary uppercase italic">
                    Rank {rank.rank}
                  </h4>
                </div>

                <div className="space-y-2">
                  {rank.responses.map((resp, idx) => {
                    if (resp.options.length === 0) return null
                    return (
                      <div
                        key={idx}
                        className="rounded-lg bg-card border border-border/50 p-3 shadow-sm"
                      >
                        <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground/70">
                          Escolha {resp.response}
                        </p>
                        <div className="space-y-1.5">
                          {resp.options.map((opt, i) => {
                            const maxPoints = Math.max(...resp.options.map((o) => o.points))
                            const isBest = opt.points === maxPoints && opt.points > 0
                            
                            return (
                              <div
                                key={i}
                                className={`flex items-center justify-between gap-2 rounded-md px-3 py-2 text-sm transition-colors ${
                                  isBest
                                    ? "bg-primary/5 border border-primary/20 text-foreground"
                                    : "bg-secondary/30 text-muted-foreground"
                                }`}
                              >
                                <div className="flex items-center gap-2 min-w-0">
                                  {isBest && (
                                    <span className="shrink-0 text-[9px] bg-primary text-primary-foreground px-1.5 py-0.5 rounded font-black uppercase">
                                      Best
                                    </span>
                                  )}
                                  <span className="truncate font-medium">
                                    {opt.text}
                                  </span>
                                  {opt.tag && <TagBadge tag={opt.tag} />}
                                </div>
                                <PointsBadge points={opt.points} />
                              </div>
                            )
                          })}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}