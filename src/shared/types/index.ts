import { IconType } from "react-icons";

export interface NavLink {
  id: string;
  name: string;
  number: string;
}

export interface Social {
  name: string;
  icon: IconType;
  path: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  highlights: string[];
}

export type ContainerSize = "xs" | "sm" | "md" | "lg" | "xl";
