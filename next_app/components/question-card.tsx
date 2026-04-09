"use client"

import { GameQuestion } from "@/types/answer-entity";
import {
  BookOpen,
  Calendar,
  CheckCircle2,
  ClipboardCheck,
  Puzzle,
  Tag,
  Tv
} from "lucide-react";

export function QuestionCard({ data }: { data: GameQuestion }) {
  // Identificação do tipo de atividade pelas tags
  const isExam = data.tags.includes("exam");
  const isCrossword = data.tags.includes("crossword");
  const isTvQuiz = data.tags.includes("tv-quiz");

  // Configuração visual dinâmica (Vibe Persona)
  const config = {
    icon: BookOpen,
    color: "text-primary",
    bg: "bg-primary/10",
    border: "border-border hover:border-primary/40",
    label: "Aula"
  };

  if (isExam) {
    config.icon = ClipboardCheck;
    config.color = "text-amber-600 dark:text-amber-400";
    config.bg = "bg-amber-500/10";
    config.border = "border-amber-500/30 hover:border-amber-500/60 shadow-amber-500/5";
    config.label = "Exame";
  } else if (isCrossword) {
    config.icon = Puzzle;
    config.color = "text-sky-600 dark:text-sky-400";
    config.bg = "bg-sky-500/10";
    config.border = "border-sky-500/30 hover:border-sky-500/60 shadow-sky-500/5";
    config.label = "Palavras Cruzadas";
  } else if (isTvQuiz) {
    config.icon = Tv;
    config.color = "text-rose-600 dark:text-rose-400";
    config.bg = "bg-rose-500/10";
    config.border = "border-rose-500/30 hover:border-rose-500/60 shadow-rose-500/5";
    config.label = "Quiz da TV";
  }

  const Icon = config.icon;

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-US', { 
      month: 'long', 
      day: 'numeric', 
      timeZone: 'UTC' 
    });
  };

  return (
    <div className={`group relative overflow-hidden rounded-xl border bg-card transition-all hover:shadow-lg ${config.border}`}>
      <div className="flex items-start gap-4 p-4">
        {/* Ícone Lateral Dinâmico */}
        <div className={`relative h-12 w-12 shrink-0 rounded-lg flex items-center justify-center transition-colors ${config.bg} ${config.color}`}>
          <Icon className="h-6 w-6" />
        </div>

        <div className="flex-1 space-y-2">
          {/* Header: Data e Tags */}
          <div className="flex flex-wrap items-center gap-3">
            <div className={`flex items-center gap-1.5 text-xs font-bold ${config.color}`}>
              <Calendar size={12} />
              {formatDate(data.date)}
            </div>
            
            <div className="flex gap-1">
              {data.tags.map(tag => (
                <span key={tag} className="flex items-center gap-1 text-[10px] uppercase font-bold tracking-tighter bg-secondary/50 px-2 py-0.5 rounded text-muted-foreground border border-border/50">
                  <Tag size={10} />{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Pergunta */}
          <p className="text-sm font-medium leading-relaxed text-foreground/90">
            {data.q}
          </p>

          {/* Resposta */}
          <div className="flex items-center gap-2 rounded-lg bg-emerald-500/5 p-2.5 border border-emerald-500/10">
            <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
            <span className="text-base font-bold text-emerald-600 dark:text-emerald-400">
              {data.a}
            </span>
            
            {/* Indicador de Opção (se houver) */}
            {data.o !== undefined && data.o > 0 && (
              <span className="ml-auto text-[10px] font-bold bg-emerald-300 text-gray-800 px-2 py-0.5 rounded-full">
                # {data.o}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}