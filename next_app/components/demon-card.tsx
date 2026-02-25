"use client"

import { Demon } from "@/types/demon-entite";
import { Bookmark, ChevronDown, ChevronUp, Gift, MapPin, ShieldAlert } from "lucide-react";
import { useState } from "react";

const elementIcons: Record<string, string> = {
  slash: "/images/slash.png",
  strike: "/images/strike.png",
  pierce: "/images/pierce.png",
  fire: "/images/fire.png",
  ice: "/images/ice.png",
  elec: "/images/thunder.png", 
  wind: "/images/wind.png",
  light: "/images/light.png",
  dark: "/images/dark.png",
  almighty: "/images/almighty.png",
};

export function DemonCard({ demon }: { demon: Demon }) {
  const [expanded, setExpanded] = useState(false)

  const getResistStyle = (val: string) => {
    switch (val) {
      case "wk": return "bg-red-500/20 text-red-400 border-red-500/30"
      case "nu": return "bg-slate-500/20 text-slate-400 border-slate-500/30"
      case "rs": return "bg-blue-500/20 text-blue-400 border-blue-500/30"
      case "rp": return "bg-purple-500/20 text-purple-400 border-purple-500/30"
      case "ab": return "bg-emerald-500/20 text-emerald-400 border-emerald-500/30"
      default: return "bg-white/5 text-white/30 border-transparent"
    }
  }

  return (
    <div className="group relative overflow-hidden rounded-xl border border-cyan-900/30 bg-[#051115] transition-all hover:border-cyan-500/50">
      <button
        onClick={() => setExpanded(!expanded)}
        className="flex w-full items-center gap-5 p-5 text-left transition-all hover:bg-cyan-950/20 cursor-pointer"
      >
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3 mb-1.5">
            <span className="bg-[#0f2d35] text-cyan-400 text-[11px] font-black px-2 py-0.5 rounded-md tracking-tighter border border-cyan-500/20">
              {demon.level.toString().padStart(2, '0')}
            </span>
            <span className="flex items-center gap-1 bg-black/40 border border-white/10 text-slate-400 text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-widest">
              <Bookmark size={10} className="fill-current" />
              {demon.race}
            </span>
          </div>
          
          <h3 className="truncate text-xl font-medium text-slate-100 tracking-tighter leading-none uppercase">
            {demon.name}
          </h3>
          
          <div className="mt-4 flex gap-4">
            <div className="flex font-black text-emerald-400 mb-1 uppercase tracking-tighter">
                <span className="mr-2">HP:</span>
                <span>{demon.hp}</span>
            </div>
            <div className="flex font-black text-blue-400 mb-1 uppercase tracking-tighter">
                <span className="mr-2">MP:</span>
                <span>{demon.mp}</span>
            </div>
          </div>
        </div>

        <div className="text-slate-500 group-hover:text-cyan-400 transition-colors">
          {expanded ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
        </div>
      </button>

      {expanded && (
        <div className="border-t border-white/5 bg-black/20 p-6 space-y-6">
          <div>
            <div className="flex items-center gap-2 mb-4 text-[10px] font-black uppercase tracking-[0.2em] text-cyan-500/80">
              <ShieldAlert size={14} /> 
              Resistances
            </div>
            <div className="grid grid-cols-5 gap-2 sm:grid-cols-10">
              {Object.entries(demon.resistances).map(([type, val]) => (
                <div 
                  key={type} 
                  className={`flex flex-col items-center rounded-lg border p-2 transition-all ${getResistStyle(val)}`}
                >
                  <div className="relative w-8 h-8 opacity-90">
                    <img
                      src={elementIcons[type] || elementIcons['almighty']}
                      alt={type}
                      className="object-contain"
                    />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-tighter">
                    {val === "no" ? "-" : val}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-white/5">
            <div className="flex items-center gap-3 rounded-xl bg-white/5 p-3 border border-white/5">
              <div className="bg-cyan-500/10 p-2 rounded-lg text-cyan-400">
                <Gift size={16} />
              </div>
              <div>
                <p className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">Potential Drops</p>
                <p className="text-sm font-bold text-slate-200">{demon.drops || "None"}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-white/5 p-3 border border-white/5">
              <div className="bg-cyan-500/10 p-2 rounded-lg text-cyan-400">
                <MapPin size={16} />
              </div>
              <div>
                <p className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">Location</p>
                <p className="text-sm font-bold text-slate-200">{demon.appears || "Unknown"}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}