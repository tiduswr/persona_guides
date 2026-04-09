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
  gameId: string
  id: string
  arcanaNumber: string
  arcanaName: string
  characterName: string
  startDate: string
  location: string | null
  requisites: string | null
  image: string
  rankUp: {
    time: "day" | "afternoon" | "night" | "all"
    available: {
      monday: boolean
      tuesday: boolean
      wednesday: boolean
      thursday: boolean
      friday: boolean
      saturday: boolean
      sunday: boolean
    }
    alwaysAvailableAfter: string | null
    availableInHolidays: boolean
  }
  ranks: Rank[]
}