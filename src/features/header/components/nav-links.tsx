import { cn } from "@/lib/utils";
import { NAV_LINKS } from "@/shared/constants/navigation";
import NavLink from "./nav-link";

interface NavLinksProps {
  className?: string;
  linkClassName?: string;
  activeSection?: string;
  onClick?: () => void;
}

export function NavLinks({ className, linkClassName, activeSection, onClick }: NavLinksProps) {
  return (
    <nav className={cn("flex", className)}>
      {NAV_LINKS.map((link) => (
        <NavLink
          key={link.id}
          id={link.id}
          name={link.name}
          number={link.number}
          isActive={activeSection === link.id}
          className={linkClassName}
          onClick={onClick}
        />
      ))}
    </nav>
  );
}
