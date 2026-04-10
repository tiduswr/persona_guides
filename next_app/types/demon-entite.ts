export interface DemonMetadata {
  races: string[];
  locations: string[];
}

export interface Demon {
  _id: string;
  gameId: string;
  name: string;
  race: string;
  level: number;
  hp?: number;
  mp?: number;
  image?: string;
  resistances?: Record<string, string>;
  drops?: string;
  appears?: string;
}

export interface DemonResponse {
  data: Demon[];
  meta: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
}