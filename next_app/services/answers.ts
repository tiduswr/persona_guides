
export async function fetchAnswers(game: string, page: number = 1, search: string = "") {
  const response = await fetch(`/api/answers?game=${game}&page=${page}&limit=10&q=${search}`);
  if (!response.ok) throw new Error("Erro ao carregar dados");
  const result = await response.json();
  return result; 
}