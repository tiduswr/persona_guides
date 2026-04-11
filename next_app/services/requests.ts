import { VelvetRequestsPage } from "@/types/request-entity";

export const fetchRequests = async (
  game: string,
  page: number,
  query: string
): Promise<VelvetRequestsPage> => {
  const response = await fetch(
    `/api/requests?game=${game}&page=${page}&limit=10&q=${query}`
  );
  if (!response.ok) throw new Error("Erro ao carregar requests");
  return response.json();
};