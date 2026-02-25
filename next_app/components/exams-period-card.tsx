"use client"

import { ExamPeriod } from "@/types/exams-entities"
import { Calendar, CheckCircle2, ChevronDown, ChevronUp, GraduationCap } from "lucide-react"
import { useState } from "react"

export function ExamPeriodCard({ exam }: { exam: ExamPeriod }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="group relative overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5">
      <button
        onClick={() => setExpanded(!expanded)}
        className="flex w-full items-center gap-4 p-4 text-left transition-colors hover:bg-secondary/50"
      >
        <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-lg bg-primary/10 flex items-center justify-center text-primary">
          <GraduationCap className="h-7 w-7" />
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="truncate text-lg font-bold text-foreground">
            {exam.period}
          </h3>
          <p className="text-sm text-muted-foreground">{exam.questions.length} Questions</p>
        </div>

        <div className="flex items-center gap-2">
          {expanded ? (
            <ChevronUp className="h-5 w-5 text-muted-foreground" />
          ) : (
            <ChevronDown className="h-5 w-5 text-muted-foreground" />
          )}
        </div>
      </button>

      {expanded && (
        <div className="border-t border-border bg-secondary/10">
          <div className="divide-y divide-border/50">
            {exam.questions.map((q, idx) => (
              <div key={idx} className="p-4 hover:bg-secondary/20 transition-colors">
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex shrink-0 items-center gap-1.5 text-xs font-bold text-primary">
                    <Calendar size={12} />
                    {q.date}
                  </div>
                  <div className="flex-1 space-y-2">
                    <p className="text-sm font-medium leading-relaxed text-muted-foreground">
                      {q.question}
                    </p>
                    <div className="flex items-center gap-2 font-bold text-foreground">
                      <CheckCircle2 size={16} className="text-emerald-500" />
                      <span className="text-base">{q.answer}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}