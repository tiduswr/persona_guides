"use client"

import { ExamResponse } from "@/types/exams-entities";
import { useQuery } from "@tanstack/react-query";
import { Search } from "lucide-react";
import { useState } from "react";
import { ExamPeriodCard } from "./exams-period-card";

const fetchExams = async (game: string): Promise<ExamResponse> => {
  const response = await fetch(`/api/exams?game=${game}`);
  if (!response.ok) throw new Error("Erro ao carregar exames");
  return response.json();
};

export function ExamsGrid() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<string | null>(null);
  const [currentGame, setCurrentGame] = useState("p3r");

  const { data, isLoading, isError } = useQuery({
    queryKey: ["exams", currentGame],
    queryFn: () => fetchExams(currentGame),
    staleTime: 1000 * 60 * 30,
  });

  const periods = data?.exams || [];

  const filtered = periods.filter((exam) => {
    const matchesSearch =
      search === "" ||
      exam.period.toLowerCase().includes(search.toLowerCase()) ||
      exam.questions.some(q => q.question.toLowerCase().includes(search.toLowerCase()));
    const matchesFilter = filter === null || exam.period === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <section className="mx-auto max-w-5xl px-4 pb-20 sm:px-6 lg:px-8">
      {/* Seleção de Jogo */}
      <div className="mb-6 flex gap-2">
        {["p3r", "p5r"].map((game) => (
          <button 
            key={game}
            onClick={() => { setCurrentGame(game); setFilter(null); }}
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
            placeholder="Buscar por período ou pergunta..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-lg border border-border bg-input py-2.5 pl-10 pr-4 text-sm focus:ring-2 focus:ring-primary/50 outline-none transition-shadow"
          />
        </div>
      </div>

      <div className="space-y-3">
        {isLoading ? (
          <div className="flex flex-col items-center py-20 gap-4">
            <div className="h-10 w-10 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
            <p className="text-muted-foreground animate-pulse text-lg italic">Consultando arquivos escolares...</p>
          </div>
        ) : isError ? (
          <div className="rounded-xl border border-red-500/50 bg-red-500/10 p-12 text-center text-red-500">
            <p>Erro ao carregar os exames. Verifique sua conexão.</p>
          </div>
        ) : (
          <>
            {filtered.map((exam) => (
              <ExamPeriodCard key={exam.period} exam={exam} />
            ))}
            {filtered.length === 0 && (
              <div className="rounded-xl border border-dashed border-border bg-card p-12 text-center">
                <p className="text-muted-foreground text-lg">Nenhum exame encontrado.</p>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  )
}