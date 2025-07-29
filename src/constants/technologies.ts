"use client";

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
  SiTailwindcss,
} from "react-icons/si";

interface Technology {
  icon: React.ComponentType;
  name: string;
}

export const TECHNOLOGIES: Technology[] = [
  { icon: SiDotnet, name: "Dotnet" },
  { icon: SiApollographql, name: "Apollo GraphQL" },
  { icon: SiNextdotjs, name: "Next.js" },
  { icon: SiPostgresql, name: "PostgreSQL" },
  { icon: SiUmbraco, name: "Umbraco" },
  { icon: SiReact, name: "React" },
  { icon: SiFlutter, name: "Flutter" },
  { icon: SiFigma, name: "Figma" },
  { icon: SiTypescript, name: "TypeScript" },
  { icon: SiTailwindcss, name: "Tailwind CSS" },
];
