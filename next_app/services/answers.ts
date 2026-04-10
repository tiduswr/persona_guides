import {
  AnswerMetadataResponse,
  AnswersResponse,
} from "@/types/answer-entity";

export async function fetchAnswersMetadata(game: string): Promise<AnswerMetadataResponse> {
  const res = await fetch(`/api/answers/metadata?game=${game}`);
  if (!res.ok) throw new Error("Falha ao carregar metadados das respostas");
  return res.json();
}

export async function fetchAnswers(
  game: string,
  page: number = 1,
  search: string = "",
  tag: string = ""
): Promise<AnswersResponse> {
  const params = new URLSearchParams({
    game,
    page: page.toString(),
    q: search,
    tag: tag,
    limit: "10"
  });

  const response = await fetch(`/api/answers?${params}`);
  
  if (!response.ok) {
    throw new Error("Erro ao carregar dados da biblioteca de respostas");
  }

  return response.json();
}