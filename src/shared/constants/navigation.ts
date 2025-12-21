import { content } from "./content";

interface NavLink {
  id: string;
  name: string;
  number: string;
}

export const NAV_LINKS: NavLink[] = [
  { ...content.navigation.about },
  { ...content.navigation.experience },
  { ...content.navigation.contact },
];
