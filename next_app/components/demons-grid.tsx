"use client"

import { Demon } from "@/types/demon-entite";
import { useQuery } from "@tanstack/react-query";
import { AlertCircle, Filter, Ghost, Plus, Search } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { DemonCard } from "./demon-card";

export function DemonsGrid() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<string | null>(null);
  const [currentGame, setCurrentGame] = useState("p3r");
  
  const ITEMS_PER_PAGE = 20;
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

  const { data: demons = [], isLoading, isError } = useQuery<Demon[]>({
    queryKey: ["demons", currentGame],
    queryFn: async () => {
      const res = await fetch(`/api/demons?game=${currentGame}`);
      if (!res.ok) throw new Error("Failed to breach the Dark Hour");
      const data = await res.json();
      // Garante que sempre retornamos um array para evitar erros de .map()
      return Array.isArray(data) ? data : [];
    },
    // Evita que o erro de uma aba quebre a outra
    retry: 1 
  });

  useEffect(() => {
    setVisibleCount(ITEMS_PER_PAGE);
  }, [search, filter, currentGame]);

  const filtered = useMemo(() => {
    // Adicionamos o optional chaining (?.) para evitar erros se os campos forem nulos
    return demons.filter(d => {
      const name = d.name?.toLowerCase() || "";
      const race = d.race?.toLowerCase() || "";
      const searchTerm = search.toLowerCase();

      const matchesSearch = name.includes(searchTerm) || race.includes(searchTerm);
      const matchesFilter = !filter || d.race === filter;
      
      return matchesSearch && matchesFilter;
    });
  }, [demons, search, filter]);

  const visibleDemons = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;
  
  // Proteção extra na geração das raças
  const races = useMemo(() => {
    return Array.from(new Set(demons.map(d => d.race).filter(Boolean))).sort();
  }, [demons]);

  return (
    <section className="mx-auto max-w-5xl px-4 pb-20 sm:px-6 lg:px-8">
      {/* Seleção de Jogo */}
      <div className="mb-6 flex gap-2">
        {["p3r", "p5r"].map((game) => (
          <button 
            key={game}
            onClick={() => { 
              setCurrentGame(game); 
              setFilter(null); 
            }}
            className={`px-4 py-2 rounded-md border transition-all ${
              currentGame === game 
                ? 'bg-primary text-primary-foreground border-primary shadow-md scale-105' 
                : 'bg-card hover:bg-accent opacity-80'
            }`}
          >
            {game === 'p3r' ? 'Persona 3 Reload' : 'Persona 5 Royal'}
          </button>
        ))}
      </div>

      {/* Search and Filters */}
      <div className="mb-8 space-y-4">
        <div className="relative group">
          <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500 group-focus-within:text-cyan-400 transition-colors" />
          <input
            type="text"
            placeholder="Search shadow by name or arcana..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-xl border border-white/5 bg-black/40 py-3.5 pl-12 pr-4 text-sm text-slate-200 focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 outline-none transition-all"
          />
        </div>

        <div className="flex flex-wrap gap-2 items-center">
          <Filter className="h-3 w-3 text-slate-500 mr-2" />
          <button
            onClick={() => setFilter(null)}
            className={`px-4 py-1.5 text-[10px] font-black uppercase tracking-widest rounded-full border transition-all ${
                !filter ? 'bg-cyan-500/20 border-cyan-500 text-cyan-400' : 'bg-white/5 border-transparent text-slate-500 hover:bg-white/10'
            }`}
          >
            All Arcanas
          </button>
          {races.map(race => (
            <button
              key={race}
              onClick={() => setFilter(filter === race ? null : race)}
              className={`px-4 py-1.5 text-[10px] font-black uppercase tracking-widest rounded-full border transition-all ${
                filter === race ? 'bg-cyan-500/20 border-cyan-500 text-cyan-400' : 'bg-white/5 border-transparent text-slate-500 hover:bg-white/10'
              }`}
            >
              {race}
            </button>
          ))}
        </div>
      </div>

      {/* Grid List with Error Handling */}
      <div className="space-y-4">
        {isLoading ? (
          <div className="py-20 text-center text-cyan-500/50 font-black italic uppercase tracking-tighter animate-pulse">
            Scanning for hostile entities...
          </div>
        ) : isError ? (
          <div className="py-20 text-center border border-red-500/20 bg-red-500/5 rounded-3xl">
            <AlertCircle className="mx-auto mb-4 text-red-500" size={40} />
            <p className="text-red-400 font-bold uppercase tracking-widest text-xs">Connection to Tartarus Lost</p>
            <p className="text-slate-500 text-sm mt-2">Check your database credentials or network connection.</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 gap-4">
                {visibleDemons.map(demon => <DemonCard key={demon.name} demon={demon} />)}
            </div>

            {hasMore && (
              <div className="pt-8 flex justify-center">
                <button
                  onClick={() => setVisibleCount(prev => prev + ITEMS_PER_PAGE)}
                  className="flex items-center gap-2 px-8 py-3 rounded-xl bg-white/5 border border-white/10 text-slate-400 font-black uppercase text-[11px] tracking-[0.2em] hover:bg-cyan-500/10 hover:border-cyan-500/30 hover:text-cyan-400 transition-all"
                >
                  <Plus size={16} /> Load More Entities
                </button>
              </div>
            )}

            {filtered.length === 0 && (
              <div className="text-center py-32 border border-dashed rounded-3xl border-white/5 bg-black/20">
                <Ghost className="mx-auto mb-4 text-slate-700" size={48} />
                <p className="text-slate-500 font-medium tracking-tight">No shadows detected in this sector.</p>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  )
}