export interface Demon {
  _id?: string;
  name: string;
  race: string;
  level: number;
  hp: number;
  mp: number;
  image: string;
  drops: string;
  appears: string;
  resistances: Record<string, string>;
}