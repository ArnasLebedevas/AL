import { content } from "./content";

export interface Statistic {
  label: string;
  value: number;
}

export const EXPERIENCES: Statistic[] = content.experience;
