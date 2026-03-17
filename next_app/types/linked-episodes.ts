export interface LinkedEpisode {
  _id: string;
  gameId: string;
  character: string;
  time: string;
  available: string;
  deadline: string | null;
  location: string;
  reward: string;
  persona: string;
}