import { DemonMetadata, DemonResponse } from "@/types/demon-entite";

export async function fetchDemonsMetadata(game: string): Promise<DemonMetadata> {
  const res = await fetch(`/api/demons/metadata?game=${game}`);
  if (!res.ok) throw new Error("Falha ao escanear metadados do Tártaro");
  return res.json();
}

export async function fetchDemons(
  game: string,
  page: number = 1,
  search: string = "",
  race: string = "",
  location: string = ""
): Promise<DemonResponse> {
  const params = new URLSearchParams({
    game,
    page: page.toString(),
    q: search,
    race: race || "",
    location: location || "",
    limit: "10"
  });

  const res = await fetch(`/api/demons?${params}`);
  if (!res.ok) throw new Error("Falha ao acessar o registro de entidades");
  return res.json();
}