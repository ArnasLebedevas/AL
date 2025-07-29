import { ROUTES } from "./app-routes";

interface NavLink {
  path: string;
  name: string;
}

export const NAV_LINKS: NavLink[] = [
  { path: ROUTES.HOME, name: "Home" },
  { path: ROUTES.RESUME, name: "Resume" },
  { path: ROUTES.ABOUT, name: "About" },
];
