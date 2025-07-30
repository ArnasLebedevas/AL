"use client";

import { VscAzure } from "react-icons/vsc";
import { IconType } from "react-icons";
import {
  SiDotnet,
  SiApollographql,
  SiNextdotjs,
  SiPostgresql,
  SiUmbraco,
  SiReact,
  SiFlutter,
  SiFigma,
  SiTypescript,
  SiAngular,
  SiTailwindcss,
} from "react-icons/si";

export interface TechStack {
  icon: IconType;
  name: string;
}

export const TECH_STACK: TechStack[] = [
  { icon: SiDotnet, name: "Dotnet" },
  { icon: SiApollographql, name: "Apollo GraphQL" },
  { icon: SiNextdotjs, name: "Next.js" },
  { icon: SiPostgresql, name: "PostgreSQL" },
  { icon: SiUmbraco, name: "Umbraco" },
  { icon: SiReact, name: "React" },
  { icon: SiFlutter, name: "Flutter" },
  { icon: VscAzure, name: "Azure" },
  { icon: SiFigma, name: "Figma" },
  { icon: SiAngular, name: "Angular" },
  { icon: SiTypescript, name: "TypeScript" },
  { icon: SiTailwindcss, name: "Tailwind CSS" },
];
