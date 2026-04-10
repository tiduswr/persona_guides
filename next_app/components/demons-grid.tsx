"use client"

import { useDebounce } from "@/hooks/use-debounce";
import { fetchDemons, fetchDemonsMetadata } from "@/services/fetchDemons";
import { DemonMetadata, DemonResponse } from "@/types/demon-entite";
import { useQuery } from "@tanstack/react-query";
import { AlertCircle, Ghost, Search } from "lucide-react";
import { useEffect, useState } from "react";
import { DemonCard } from "./demon-card";
import { GameSelector } from "./game-selector";
import { PaginationControls } from "./pagination-controls";
import { TagFilter } from "./tag-filter";

export function DemonsGrid() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<string | null>(null);
  const [currentGame, setCurrentGame] = useState("p3r");
  const [locationFilter, setLocationFilter] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const ITEMS_PER_PAGE = 10;

  const debouncedSearch = useDebounce(search, 300);

  // Resetar página ao mudar filtros
  useEffect(() => {
    setPage(1);
  }, [currentGame, debouncedSearch, filter, locationFilter]);

  const { data: metadata } = useQuery<DemonMetadata>({
    queryKey: ["demons-metadata", currentGame],
    queryFn: () => fetchDemonsMetadata(currentGame),
    staleTime: 1000 * 60 * 60,
  });

  const { data: apiResponse, isLoading, isError } = useQuery<DemonResponse>({
    queryKey: ["demons", currentGame, page, debouncedSearch, filter, locationFilter],
    queryFn: () => fetchDemons(currentGame, page, debouncedSearch, filter || "", locationFilter || ""),
  });

  const demons = apiResponse?.data || [];
  const meta = apiResponse?.meta;

  const locations = metadata?.locations || [];
  const races = metadata?.races || [];

  const GAMES_NAMES = {
    p3r: 'Persona 3 Reload'
  };

  return (
    <section className="mx-auto max-w-5xl px-4 pb-20 sm:px-6 lg:px-8">
      <GameSelector
        currentGame={currentGame}
        games={GAMES_NAMES}
        onSelect={(id) => {
          setCurrentGame(id);
          setSearch("");
          setFilter(null);
          setLocationFilter(null);
          setPage(1);
        }}
      />

      {/* Search and Filters - Mantendo seu estilo */}
      <div className="mb-8 space-y-4">
        <div className="relative group">
          <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500 group-focus-within:text-cyan-400 transition-colors" />
          <input
            type="text"
            placeholder="Search enemy by name or arcana..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-xl border border-white/5 bg-black/40 py-3.5 pl-12 pr-4 text-sm text-slate-200 focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 outline-none transition-all"
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-4 items-end sm:items-center">
          <div className="w-full">
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-2 block">
              Current Location / Sector
            </label>
            <select
              value={locationFilter || ""}
              onChange={(e) => setLocationFilter(e.target.value || null)}
              className="w-full rounded-xl border border-white/5 bg-black/40 py-2.5 px-4 text-sm text-slate-200 focus:border-cyan-500/50 outline-none appearance-none cursor-pointer hover:bg-white/5 transition-all"
            >
              <option value="">All Locations</option>
              {locations.map((loc) => (
                <option key={loc} value={loc} className="bg-slate-900">{loc}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 items-end sm:items-center">
          <div className="w-full">
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-2 block">
              Arcana
            </label>
            <TagFilter
              items={races}
              activeItem={filter}
              onItemClick={setFilter}
              allLabel="All Arcanas"
            />
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {isLoading ? (
          <div className="py-20 text-center text-cyan-500/50 font-black italic uppercase tracking-tighter animate-pulse">
            Scanning for hostile entities...
          </div>
        ) : isError ? (
          <div className="py-20 text-center border border-red-500/20 bg-red-500/5 rounded-3xl">
            <AlertCircle className="mx-auto mb-4 text-red-500" size={40} />
            <p className="text-red-400 font-bold uppercase tracking-widest text-xs">Connection Lost</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 gap-4">
                {demons.map((demon: any) => <DemonCard key={demon._id} demon={demon} />)}
            </div>

            <PaginationControls
              page={page}
              totalPages={meta?.totalPages || 0}
              onPageChange={(newPage) => setPage(newPage)}
              label="Sector"
            />

            {demons.length === 0 && (
              <div className="text-center py-32 border border-dashed rounded-3xl border-white/5 bg-black/20">
                <Ghost className="mx-auto mb-4 text-slate-700" size={48} />
                <p className="text-slate-500 font-medium tracking-tight">No enemy detected in this sector.</p>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  )
}