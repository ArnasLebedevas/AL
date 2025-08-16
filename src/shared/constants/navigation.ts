import { content } from "./content";

interface NavLink {
  path: string;
  name: string;
}

export const NAV_LINKS: NavLink[] = [
  { path: content.navigation.home.path, name: content.navigation.home.name },
];
