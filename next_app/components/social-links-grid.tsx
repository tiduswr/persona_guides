"use client"

import { SocialLinkCard } from "@/components/social-link-card";
import { getSocialLinks } from "@/services/social-links";
import { useQuery } from "@tanstack/react-query";
import { Search } from "lucide-react";
import { useState } from "react";
import { GameSelector } from "./game-selector";
import { TagFilter } from "./tag-filter";

const GAMES_NAMES = {
  p3r: 'Persona 3 Reload'
};

export function SocialLinksGrid() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<string | null>(null);
  const [currentGame, setCurrentGame] = useState("p3r");

  const { data: links = [], isLoading, isError } = useQuery({
    queryKey: ["social-links", currentGame],
    queryFn: () => getSocialLinks(currentGame),
    staleTime: 1000 * 60 * 5,
  });

  const filtered = links.filter((link) => {
    const matchesSearch =
      search === "" ||
      link.characterName.toLowerCase().includes(search.toLowerCase()) ||
      link.arcanaName.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === null || link.arcanaName === filter;
    return matchesSearch && matchesFilter;
  });

  const arcanaTags = Array.from(new Set(links.map((l) => l.arcanaName))).sort();

  return (
    <section className="mx-auto max-w-5xl px-4 pb-20 sm:px-6 lg:px-8">
      <GameSelector
        currentGame={currentGame}
        games={GAMES_NAMES}
        onSelect={(id) => {
          setCurrentGame(id);
          setSearch("");
          setFilter(null);
        }}
      />

      <div className="mb-8 space-y-4">
        {/* Barra de Busca */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Find by character or arcana..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-lg border border-border bg-input py-2.5 pl-10 pr-4 text-sm focus:ring-2 focus:ring-primary/50 outline-none transition-shadow"
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-4 items-end sm:items-center">
          <div className="w-full">
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-2 block">
              Arcana
            </label>
            <TagFilter
              items={arcanaTags}
              activeItem={filter}
              onItemClick={setFilter}
              allLabel="All Arcanas"
            />
          </div>
        </div>
      </div>

      <div className="space-y-3">
        {isLoading ? (
          <div className="flex flex-col items-center py-20 gap-4">
            <div className="h-10 w-10 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
            <p className="text-muted-foreground animate-pulse text-lg italic">Summoning Personas...</p>
          </div>
        ) : isError ? (
          <div className="rounded-xl border border-red-500/50 bg-red-500/10 p-12 text-center text-red-500">
            <p>Error loading data. Please try again later.</p>
          </div>
        ) : (
          <>
            {filtered.map((link) => (
              <SocialLinkCard key={link.id} link={link} />
            ))}
            {filtered.length === 0 && (
              <div className="rounded-xl border border-dashed border-border bg-card p-12 text-center">
                <p className="text-muted-foreground text-lg">No Social Links found.</p>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  )
}