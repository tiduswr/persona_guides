"use client";

import { Calendar, Gift, Info } from "lucide-react";

import { VelvetRequestData } from "@/types/request-entity";

interface RequestCardProps {
  req: VelvetRequestData;
}

export function RequestCard({ req }: RequestCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/5 bg-slate-900/40 hover:bg-slate-900/60 hover:border-cyan-500/30 transition-all duration-300">
      <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-cyan-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

      <div className="p-5 md:p-6 space-y-5">
        <div className="flex flex-col md:flex-row justify-between items-start gap-4">
          <div className="flex gap-4">
            <div className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10 text-sm font-black text-cyan-400 border border-cyan-500/20 shadow-[0_0_15px_rgba(34,211,238,0.1)]">
              {req.order}
            </div>

            <div className="space-y-1">
              <h3 className="text-xl font-black text-slate-100 uppercase tracking-tight group-hover:text-cyan-400 transition-colors">
                {req.title}
              </h3>
              {req.unlock && (
                <div className="flex items-center gap-1.5 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                  <Calendar size={12} className="text-cyan-500/70" />
                  Unlock: <span className="text-slate-300">{req.unlock}</span>
                </div>
              )}
            </div>
          </div>

          <div className="w-full md:w-auto flex items-center gap-3 bg-black/60 px-4 py-2.5 rounded-xl border border-white/5 backdrop-blur-sm">
            <Gift size={18} className="text-yellow-500 shrink-0" />
            <div className="text-xs">
              <p className="text-slate-500 uppercase font-black tracking-[0.2em] text-[8px]">
                Reward
              </p>
              <p className="text-yellow-500/90 font-bold">{req.reward}</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-2 top-0 h-full w-0.5 bg-white/10" />
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-cyan-500/80">
              <Info size={14} />
              Mission Objective
            </div>
            <p className="text-sm leading-relaxed text-slate-300 bg-white/[0.02] p-3 rounded-lg border border-white/[0.05]">
              {req.solution}
            </p>
          </div>
        </div>

        {req.deadline && (
          <div className="flex items-center gap-2 pt-2 text-[10px] text-red-400/90 font-black uppercase tracking-[0.2em]">
            <div className="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse" />
            Deadline: {new Date(req.deadline).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC'})}
          </div>
        )}
      </div>
    </div>
  );
}
