"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { NAV_LINKS } from "@/shared/constants/navigation";

type NavLinksProps = {
  className?: string;
  linkClassName?: string;
};

export function NavLinks({ className, linkClassName }: NavLinksProps) {
  const pathname = usePathname();

  return (
    <nav className={clsx("flex gap-8", className)}>
      {NAV_LINKS.map((link) => {
        const isActive = pathname === link.path;
        return (
          <Link
            key={link.path}
            href={link.path}
            aria-current={isActive ? "page" : undefined}
            className={clsx(
              "capitalize font-medium transition-all hover:text-accent",
              isActive && "text-accent border-b-2 border-accent",
              linkClassName
            )}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
}
