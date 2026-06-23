"use client";

import { cn } from "@/lib/utils";
import { scrollToSection } from "../utils/scroll-to-section";

interface Props {
  id: string;
  name: string;
  number: string;
  isActive?: boolean;
  className?: string;
  onClick?: () => void;
}

export default function NavLink({
  id,
  name,
  number,
  isActive,
  className,
  onClick,
}: Props) {
  return (
    <a
      href={`/#${id}`}
      onClick={(e) => {
        if (window.location.pathname === "/") {
          e.preventDefault();
          scrollToSection(id);
        }
        onClick?.();
      }}
      className={cn(
        "flex items-center gap-1 text-[12px]! font-medium capitalize transition-colors",
        "hover:text-accent",
        isActive && "text-accent",
        className
      )}
    >
      <span className="text-accent font-semibold">{number}</span>
      <span>{name}</span>
    </a>
  );
}
