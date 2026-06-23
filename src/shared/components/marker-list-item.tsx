import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface MarkerListItemProps {
  children: ReactNode;
  className?: string;
}

export function MarkerListItem({ children, className }: MarkerListItemProps) {
  return (
    <li
      className={cn(
        "flex items-baseline gap-2 before:content-['▹'] before:text-accent before:text-lg",
        "transition-transform duration-200 hover:translate-x-1",
        className
      )}
    >
      {children}
    </li>
  );
}
