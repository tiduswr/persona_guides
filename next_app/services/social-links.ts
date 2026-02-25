import { SocialLink } from "@/types/social-links-entities";

export const getSocialLinks = async (game: string): Promise<SocialLink[]> => {
  const response = await fetch(`/api/social-links?game=${game}`);
  if (!response.ok) throw new Error("Falha ao buscar Social Links");
  return response.json();
};