"use client"

import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  page: number;
  totalPages: number;
  onPageChange: (newPage: number) => void;
  label?: string;
}

export function PaginationControls({ 
  page, 
  totalPages, 
  onPageChange, 
  label = "Sector" 
}: PaginationProps) {
  
  if (totalPages <= 1) return null;

  return (
    <div className="mt-12 flex items-center justify-center gap-6">
      <button
        onClick={() => onPageChange(Math.max(1, page - 1))}
        disabled={page === 1}
        className="p-3 rounded-xl bg-white/5 border border-white/10 text-slate-400 disabled:opacity-20 hover:text-cyan-400 hover:border-cyan-500/30 transition-all cursor-pointer disabled:cursor-not-allowed"
      >
        <ChevronLeft size={20} />
      </button>

      <div className="text-center min-w-[80px]">
        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">
          {label}
        </p>
        <p className="text-lg font-black text-cyan-500">
          {page} <span className="text-slate-700 mx-1">/</span> {totalPages}
        </p>
      </div>

      <button
        onClick={() => onPageChange(Math.min(totalPages, page + 1))}
        disabled={page === totalPages}
        className="p-3 rounded-xl bg-white/5 border border-white/10 text-slate-400 disabled:opacity-20 hover:text-cyan-400 hover:border-cyan-500/30 transition-all cursor-pointer disabled:cursor-not-allowed"
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
}