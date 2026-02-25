export interface DialogueOption {
  text: string
  points: number
  tag?: string
}

export interface RankResponse {
  response: number
  options: DialogueOption[]
}

export interface Rank {
  rank: number
  responses: RankResponse[]
}

export interface SocialLink {
  id: string
  arcanaNumber: string
  arcanaName: string
  characterName: string
  image: string
  ranks: Rank[]
}