import clsx from "clsx";
import { NAV_LINKS } from "@/shared/constants/navigation";
import NavLink from "./nav-link";

interface NavLinksProps {
  className?: string;
  linkClassName?: string;
  onClick?: () => void;
}

export function NavLinks({ className, linkClassName, onClick }: NavLinksProps) {
  return (
    <nav className={clsx("flex", className)}>
      {NAV_LINKS.map((link) => (
        <NavLink
          key={link.id}
          id={link.id}
          name={link.name}
          number={link.number}
          className={linkClassName}
          onClick={onClick}
        />
      ))}
    </nav>
  );
}
