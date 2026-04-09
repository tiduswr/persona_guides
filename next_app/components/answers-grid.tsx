"use client"

import { useDebounce } from "@/hooks/use-debounce";
import { fetchAnswers } from "@/services/answers";
import { useQuery } from "@tanstack/react-query";
import { ChevronLeft, ChevronRight, Search } from "lucide-react";
import { useEffect, useState } from "react";
import { QuestionCard } from "./question-card";

export function AnswersGrid() {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [currentGame, setCurrentGame] = useState("p3r");

  const debouncedSearch = useDebounce(search, 300);

  useEffect(() => {
    setPage(1);
  }, [currentGame, debouncedSearch]);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["answers", currentGame, page, debouncedSearch],
    queryFn: () => fetchAnswers(currentGame, page, debouncedSearch),
    staleTime: 1000 * 60 * 5,
  });

  const questions = data?.data || [];
  const meta = data?.meta;

  return (
    <section className="mx-auto max-w-5xl px-4 pb-20 sm:px-6 lg:px-8">
      {/* Seleção de Jogo - Agora com P5R */}
      <div className="mb-6 flex gap-3">
        {[
          { id: "p3r", label: "Persona 3 Reload" }
        ].map((game) => (
          <button 
            key={game.id}
            onClick={() => setCurrentGame(game.id)}
            className={`px-4 py-2 rounded-lg border text-sm font-bold transition-all ${
              currentGame === game.id 
                ? 'bg-primary text-primary-foreground border-primary shadow-lg scale-105' 
                : 'bg-card hover:bg-accent border-border opacity-70'
            }`}
          >
            {game.label}
          </button>
        ))}
      </div>

      {/* Barra de Busca */}
      <div className="mb-8">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Find by question, tag, answer..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-xl border border-border bg-input py-3 pl-10 pr-4 text-sm focus:ring-2 focus:ring-primary/50 outline-none transition-all shadow-sm"
          />
        </div>
      </div>

      {/* Grid de Perguntas */}
      <div className="space-y-4">
        {isLoading ? (
          <div className="flex flex-col items-center py-20 gap-4">
            <div className="h-10 w-10 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
            <p className="text-muted-foreground animate-pulse">Consulting database...</p>
          </div>
        ) : isError ? (
          <div className="rounded-xl border border-destructive/50 bg-destructive/10 p-12 text-center text-destructive">
            <p>Error loading data. Check your connection.</p>
          </div>
        ) : (
          <>
            <div className="grid gap-3">
              {questions.map((question: any, idx: number) => (
                <QuestionCard key={`${question._id || idx}`} data={question} />
              ))}
            </div>

            {/* Mensagem de Vazio */}
            {questions.length === 0 && (
              <div className="rounded-xl border border-dashed border-border bg-card p-12 text-center">
                <p className="text-muted-foreground">No answers found for this search.</p>
              </div>
            )}

            {/* Paginação */}
            {meta && meta.totalPages > 1 && (
              <div className="mt-8 flex items-center justify-center gap-4">
                <button
                  onClick={() => setPage(p => Math.max(1, p - 1))}
                  disabled={page === 1}
                  className="p-2 rounded-lg border border-border bg-card disabled:opacity-30 hover:bg-accent transition-colors"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                
                <span className="text-sm font-medium">
                  Página <span className="text-primary">{page}</span> de {meta.totalPages}
                </span>

                <button
                  onClick={() => setPage(p => Math.min(meta.totalPages, p + 1))}
                  disabled={page === meta.totalPages}
                  className="p-2 rounded-lg border border-border bg-card disabled:opacity-30 hover:bg-accent transition-colors"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  )
}