import { content } from "./content";

export interface Statistic {
  label: string;
  value: number;
  suffix?: string;
}

export const EXPERIENCES: Statistic[] = content.experience;
