"use client"

import { SocialLinkCard } from "@/components/social-link-card";
import { getSocialLinks } from "@/services/social-links";
import { useQuery } from "@tanstack/react-query";
import { Filter, Search } from "lucide-react";
import { useState } from "react";

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

        {/* Tags de Arcana */}
        <div className="flex flex-wrap gap-2 items-center">
          <Filter className="h-4 w-4 text-muted-foreground mr-1" />
          <button
            onClick={() => setFilter(null)}
            className={`px-3 py-1 text-xs rounded-full border transition-all ${
              filter === null 
                ? 'bg-primary/20 border-primary text-primary font-bold' 
                : 'bg-muted border-transparent hover:border-border'
            }`}
          >
            All
          </button>
          {arcanaTags.map(arcana => (
            <button
              key={arcana}
              onClick={() => setFilter(filter === arcana ? null : arcana)}
              className={`px-3 py-1 text-xs rounded-full border transition-all ${
                filter === arcana 
                  ? 'bg-primary/20 border-primary text-primary font-bold' 
                  : 'bg-muted border-transparent hover:border-border'
              }`}
            >
              {arcana}
            </button>
          ))}
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