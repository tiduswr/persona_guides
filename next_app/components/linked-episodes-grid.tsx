"use client"

import { GameSelector } from "@/components/game-selector";
import { LinkedEpisode } from "@/types/linked-episodes";
import { useQuery } from "@tanstack/react-query";
import { Calendar, Gift, MapPin, Search, X } from "lucide-react";
import { useMemo, useState } from "react";
import { TagFilter } from "./tag-filter";

const fetchEpisodes = async (game: string): Promise<LinkedEpisode[]> => {
  const response = await fetch(`/api/linked-episodes?game=${game}`);
  if (!response.ok) throw new Error("Erro ao carregar episódios");
  return response.json();
};

const GAMES_NAMES = {
  p3r: 'Persona 3 Reload'
};

export function LinkedEpisodesGrid() {
  const [search, setSearch] = useState("");
  const [characterFilter, setCharacterFilter] = useState<string | null>(null);
  const [currentGame, setCurrentGame] = useState<string>("p3r");

  const { data: episodes = [], isLoading, isError } = useQuery({
    queryKey: ["linkedEpisodes", currentGame],
    queryFn: () => fetchEpisodes(currentGame),
    staleTime: 1000 * 60 * 30,
  });

  const characters = useMemo(() => {
    return Array.from(new Set(episodes.map(e => e.character))).sort();
  }, [episodes]);

  const filtered = useMemo(() => {
    return episodes.filter((ep) => {
      const matchesSearch =
        search === "" ||
        ep.character.toLowerCase().includes(search.toLowerCase()) ||
        ep.location.toLowerCase().includes(search.toLowerCase()) ||
        ep.reward.toLowerCase().includes(search.toLowerCase());
      const matchesFilter = !characterFilter || ep.character === characterFilter;
      return matchesSearch && matchesFilter;
    });
  }, [episodes, search, characterFilter]);

  return (
    <section className="mx-auto max-w-5xl px-4 pb-20 sm:px-6 lg:px-8">

      <GameSelector
        currentGame={currentGame}
        games={GAMES_NAMES}
        onSelect={(id) => {
          setCurrentGame(id);
          setSearch("");
          setCharacterFilter(null);
        }}
      />

      <div className="mb-8 space-y-4">
        <div className="relative group">
          <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500 group-focus-within:text-cyan-400 transition-colors" />
          <input
            type="text"
            placeholder="Find by character, local or reward..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-xl border border-white/10 bg-black/40 py-3.5 pl-12 pr-10 text-sm text-slate-200 focus:border-cyan-500/50 outline-none transition-all"
          />
          {search && (
            <button 
              onClick={() => setSearch("")} 
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white transition-colors"
            >
              <X size={16} />
            </button>
          )}
        </div>

        {/* Filtro de Personagens usando o componente TagFilter */}
        <div className="w-full">
          <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-2 block">
            Members
          </label>
          <TagFilter
            items={characters}
            activeItem={characterFilter}
            onItemClick={setCharacterFilter}
            allLabel="All Members"
          />
        </div>
      </div>

      {/* Listagem de Episódios */}
      <div className="grid grid-cols-1 gap-4">
        {isLoading ? (
          <div className="py-20 text-center text-cyan-500 animate-pulse font-black uppercase tracking-tighter">
            Syncing Linked Episodes...
          </div>
        ) : isError ? (
          <div className="py-10 text-center text-red-400 border border-red-500/20 bg-red-500/5 rounded-2xl">
            Failed to connect to the SEES terminal.
          </div>
        ) : (
          <>
            {filtered.map((ep) => (
              <div key={ep._id} className="group relative overflow-hidden rounded-2xl border border-white/5 bg-slate-900/50 p-5 hover:border-cyan-500/30 transition-all">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  {/* Info Principal */}
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-black text-slate-100 uppercase tracking-tight">{ep.character}</h3>
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${ep.time === 'Day' ? 'bg-orange-500/20 text-orange-400' : 'bg-indigo-500/20 text-indigo-400'}`}>
                        {ep.time}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-slate-400">
                      <div className="flex items-center gap-1.5">
                        <Calendar size={14} className="text-cyan-500" />
                        <span>{new Date(ep.available).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC'})}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin size={14} className="text-cyan-500" />
                        <span className="truncate max-w-[200px] sm:max-w-none">{ep.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Recompensas */}
                  <div className="flex items-center gap-3 bg-black/40 p-3 rounded-xl border border-white/5 min-w-[180px]">
                    <Gift size={18} className="text-yellow-500 shrink-0" />
                    <div className="text-xs">
                      <p className="text-slate-500 uppercase font-black tracking-widest text-[9px]">Reward</p>
                      <p className="text-slate-200 font-medium">{ep.reward}</p>
                    </div>
                  </div>
                </div>

                {/* Deadline Badge */}
                {ep.deadline && (
                  <div className="mt-3 pt-3 border-t border-white/5 text-[10px] text-red-400/80 font-bold uppercase tracking-widest">
                    Deadline: {new Date(ep.deadline).toLocaleDateString('en-US', { day: '2-digit', month: 'long', timeZone: 'UTC' })}
                  </div>
                )}
              </div>
            ))}

            {filtered.length === 0 && (
              <div className="py-32 text-center border border-dashed border-white/10 rounded-3xl">
                <p className="text-slate-600 italic">No events registered for this member in this sector.</p>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}