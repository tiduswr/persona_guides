"use client";

import { GameSelector } from "@/components/game-selector";
import { PaginationControls } from "@/components/pagination-controls";
import { fetchRequests } from "@/services/requests";
import { useQuery } from "@tanstack/react-query";
import { Search, X } from "lucide-react";
import { useEffect, useState } from "react";
import { RequestCard } from "./requests-card";

export function RequestsGrid() {
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [currentGame, setCurrentGame] = useState<string>("p3r");

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
      setCurrentPage(1);
    }, 500);
    return () => clearTimeout(timer);
  }, [search]);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["requests", currentGame, currentPage, debouncedSearch],
    queryFn: () => fetchRequests(currentGame, currentPage, debouncedSearch),
    staleTime: 1000 * 60 * 5,
  });

  const requests = data?.data || [];
  const meta = data?.meta;

  return (
    <section className="mx-auto max-w-5xl px-4 pb-20 sm:px-6 lg:px-8">
      <GameSelector
        currentGame={currentGame}
        games={{ p3r: "Persona 3 Reload", p3rea: "P3R: Episode Aigis" }}
        onSelect={(id) => {
          setCurrentGame(id);
          setCurrentPage(1);
        }}
      />

      <div className="mb-8 relative group">
        <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500 group-focus-within:text-cyan-400" />
        <input
          type="text"
          placeholder="Search requests by title, solution or reward..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-xl border border-white/10 bg-black/40 py-3.5 pl-12 pr-10 text-sm text-slate-200 outline-none focus:border-cyan-500/50 transition-all"
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

      <div className="grid grid-cols-1 gap-4">
        {isLoading ? (
          <div className="py-20 text-center text-cyan-500 animate-pulse font-black uppercase tracking-tighter">
            Accessing Velvet Registry...
          </div>
        ) : isError ? (
          <div className="py-10 text-center text-red-400 border border-red-500/20 bg-red-500/5 rounded-2xl">
            Failed to connect to the SEES terminal.
          </div>
        ) : (
          <>
            {requests.map((req) => (
              <RequestCard key={req._id} req={req} />
            ))}

            {meta && (
              <PaginationControls
                page={currentPage}
                totalPages={meta.totalPages}
                onPageChange={setCurrentPage}
                label="Request Block"
              />
            )}

            {requests.length === 0 && (
              <div className="py-24 text-center border border-dashed border-white/10 rounded-3xl text-slate-600 italic font-medium">
                No data retrieved from the registry.
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
