export interface GameQuestion {
  gameId: string;       // "p3r", "p5r", etc.
  category: string[];   // ["school"], ["leblanc"]
  tags: string[];       // ["class"], ["exam"], ["crossword"], ["tv-quiz"]
  date: string;         // "2009-04-08" ou "04-12"
  o?: number;           // Opcional (?) pois Crosswords/TV Quiz não têm opções
  q: string;            // Pergunta
  a: string;            // Resposta
}

export interface PaginationMeta {
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export interface GameQuestionsResponse {
  data: GameQuestion[];
  meta: PaginationMeta;
}