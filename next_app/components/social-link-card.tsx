"use client"

import type { SocialLink } from "@/types/social-links-entities"
import {
  AlertCircle,
  Bookmark,
  Calendar,
  ChevronDown, ChevronUp,
  Clock,
  MapPin,
  Star
} from "lucide-react"
import { useState } from "react"
import { DaySchedule } from "./day-schedule"
import { PointsBadge } from "./points-badge"
import { TagBadge } from "./tag-badge"

export function SocialLinkCard({ link }: { link: SocialLink }) {
  const [expanded, setExpanded] = useState(false)

  const rankData = link.rankUp;
  const isAutomatic = link.ranks.length === 0;

  return (
    <div className="group relative overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5">
      <button
        onClick={() => setExpanded(!expanded)}
        className="flex w-full cursor-pointer items-center gap-4 p-4 text-left transition-colors hover:bg-secondary/50"
      >
        <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-lg flex items-center justify-center bg-secondary/30">
          <img src={link.image} alt={link.characterName} className="h-full w-full object-contain p-1" />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className="inline-flex items-center justify-center rounded-md bg-primary/15 px-2 py-0.5 text-[11px] font-bold tracking-wider text-primary">
              {link.arcanaNumber}
            </span>
            <h3 className="truncate text-lg font-bold text-foreground uppercase">
              {link.characterName}
            </h3>
          </div>
          
          <div className="flex flex-wrap gap-2 items-center">
            <span className="inline-flex items-center gap-1 rounded-md bg-secondary/80 px-2 py-0.5 text-[10px] font-semibold text-muted-foreground uppercase border border-border">
              <Bookmark className="h-2.5 w-2.5" />
              {link.arcanaName}
            </span>
            {link.location && (
              <span className="inline-flex items-center gap-1 text-[10px] font-medium text-muted-foreground">
                <MapPin className="h-3 w-3 text-primary" />
                {link.location}
              </span>
            )}
          </div>

          {/* Meta Info (Days & Time) */}
          <div className="mt-3 flex flex-wrap items-center gap-4">
            {rankData?.available && <DaySchedule available={rankData.available} />}
            <div className="flex items-center gap-1.5 text-[10px] font-bold text-muted-foreground uppercase tracking-tight">
              <Clock className="h-3 w-3 text-primary" />
              {rankData?.time || "N/A"}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-end gap-2">
          {expanded ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
        </div>
      </button>

      {expanded && (
        <div className="border-t border-border bg-secondary/10 p-4 space-y-4">
          
          {/* Section: Requirements and Start Date */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="rounded-lg bg-background/50 border border-border p-3">
              <div className="flex items-center gap-2 mb-1 text-primary">
                <Calendar className="h-3.5 w-3.5" />
                <span className="text-[10px] font-black uppercase">Available from</span>
              </div>
              <p className="text-xs font-medium">
                {new Date(link.startDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC'})}
              </p>
            </div>
            
            {link.requisites && (
              <div className="rounded-lg bg-background/50 border border-border p-3">
                <div className="flex items-center gap-2 mb-1 text-amber-500">
                  <AlertCircle className="h-3.5 w-3.5" />
                  <span className="text-[10px] font-black uppercase">Requirements</span>
                </div>
                <p className="text-xs font-medium">{link.requisites}</p>
              </div>
            )}
          </div>

          {/* Section: Ranks & Responses */}
          {isAutomatic ? (
            <div className="py-4 text-center border-2 border-dashed border-border rounded-xl">
              <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest px-4">
                This Social Link progresses automatically through the main story.
              </p>
            </div>
          ) : (
            link.ranks.map((rank) => {
              const hasOptions = rank.responses.some((r) => r.options.length > 0)
              if (!hasOptions) return null

              return (
                <div key={rank.rank} className="mt-4">
                  <div className="mb-2 flex items-center gap-2">
                    <div className="flex items-center gap-0.5">
                      {Array.from({ length: Math.min(rank.rank, 10) }).map((_, i) => (
                        <Star key={i} className="h-3 w-3 fill-primary text-primary" />
                      ))}
                    </div>
                    <h4 className="text-sm font-black text-primary uppercase italic">Rank {rank.rank}</h4>
                  </div>

                  <div className="space-y-2">
                    {rank.responses.map((resp, idx) => {
                      if (resp.options.length === 0) return null
                      return (
                        <div key={idx} className="rounded-lg bg-card border border-border/50 p-3 shadow-sm">
                          <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground/70">
                            Choice {resp.response}
                          </p>
                          <div className="space-y-1.5">
                            {resp.options.map((opt, i) => {
                              const maxPoints = Math.max(...resp.options.map((o) => o.points))
                              const isBest = opt.points === maxPoints && opt.points > 0
                              return (
                                <div key={i} className={`flex items-center justify-between gap-2 rounded-md px-3 py-2 text-sm transition-colors ${
                                  isBest ? "bg-primary/5 border border-primary/20 text-foreground" : "bg-secondary/30 text-muted-foreground"
                                }`}>
                                  <div className="flex items-center gap-2 min-w-0">
                                    {isBest && <span className="shrink-0 text-[9px] bg-primary text-primary-foreground px-1.5 py-0.5 rounded font-black uppercase">Best</span>}
                                    <span className="truncate font-medium">{opt.text}</span>
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
            })
          )}
        </div>
      )}
    </div>
  )
}