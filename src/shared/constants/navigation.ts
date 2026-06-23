import { content } from "./content";
import { NavLink } from "@/shared/types";

export const NAV_LINKS: NavLink[] = [
  { ...content.navigation.about },
  { ...content.navigation.experience },
  { ...content.navigation.contact },
];
