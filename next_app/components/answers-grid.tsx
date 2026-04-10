"use client"

import { useDebounce } from "@/hooks/use-debounce";
import { fetchAnswers, fetchAnswersMetadata } from "@/services/answers";
import { AnswerMetadataResponse, AnswersResponse } from "@/types/answer-entity";
import { useQuery } from "@tanstack/react-query";
import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import { GameSelector } from "./game-selector";
import { PaginationControls } from "./pagination-controls";
import { QuestionCard } from "./question-card";
import { TagFilter } from "./tag-filter";

export function AnswersGrid() {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [currentGame, setCurrentGame] = useState("p3r");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const debouncedSearch = useDebounce(search, 300);

  useEffect(() => {
    setPage(1);
  }, [currentGame, debouncedSearch, selectedTag]);

  const { data: metadata } = useQuery<AnswerMetadataResponse>({
    queryKey: ["answers-metadata", currentGame],
    queryFn: () => fetchAnswersMetadata(currentGame),
    staleTime: 1000 * 60 * 60,
  });

  const { data: apiResponse, isLoading, isError } = useQuery<AnswersResponse>({
    queryKey: ["answers", currentGame, page, debouncedSearch, selectedTag],
    queryFn: () => fetchAnswers(currentGame, page, debouncedSearch, selectedTag || ""),
    staleTime: 1000 * 60 * 5,
  });

  const questions = apiResponse?.data || [];
  const meta = apiResponse?.meta;
  const tags = metadata?.tags || [];

  const GAMES_NAMES = {
    p3r: 'Persona 3 Reload'
  };

  return (
    <section className="mx-auto max-w-5xl px-4 pb-20 sm:px-6 lg:px-8">
      <GameSelector
        currentGame={currentGame as any}
        games={GAMES_NAMES}
        onSelect={(id) => {
          setCurrentGame(id);
          setSearch("");
          setSelectedTag(null);
          setPage(1);
        }}
      />

      <div className="mb-8 space-y-4">
        {/* Barra de Busca */}
        <div className="relative group">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors" />
          <input
            type="text"
            placeholder="Find by question, tag, answer..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-xl border border-border bg-input py-3 pl-10 pr-4 text-sm focus:ring-2 focus:ring-primary/50 outline-none transition-all shadow-sm"
          />
        </div>

        {/* Filtro de Tags Dinâmico */}
        <TagFilter 
          items={tags} 
          activeItem={selectedTag} 
          onItemClick={setSelectedTag} 
          allLabel="All Periods"
        />
      </div>

      {/* Lista de Resultados */}
      <div className="space-y-4">
        {isLoading ? (
          <div className="flex flex-col items-center py-20 gap-4">
            <div className="h-10 w-10 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
            <p className="text-muted-foreground animate-pulse font-bold tracking-widest uppercase text-xs">
              Consulting library...
            </p>
          </div>
        ) : isError ? (
          <div className="rounded-xl border border-destructive/50 bg-destructive/10 p-12 text-center text-destructive">
            <p className="font-bold">Error loading school records.</p>
            <p className="text-sm opacity-70">Check your connection to the Metaverse.</p>
          </div>
        ) : (
          <>
            <div className="grid gap-3">
              {questions.map((question) => (
                <QuestionCard key={question._id} data={question} />
              ))}
            </div>

            {/* Empty State */}
            {questions.length === 0 && (
              <div className="rounded-xl border border-dashed border-border bg-card p-20 text-center">
                <p className="text-muted-foreground italic">No answers found in this timeline.</p>
              </div>
            )}

            {/* Paginação Reutilizável */}
            <PaginationControls
              page={page}
              totalPages={meta?.totalPages || 0}
              onPageChange={setPage}
              label="Period"
            />
          </>
        )}
      </div>
    </section>
  )
}