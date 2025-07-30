"use client";

import { NAV_LINKS } from "@/constants/navigation";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DesktopNav() {
  const pathname = usePathname();

  return (
    <nav className="flex gap-8">
      {NAV_LINKS.map((link) => (
        <Link
          key={link.path}
          href={link.path}
          className={`${
            link.path === pathname &&
            "text-accent border-b-2 border-accent duration-0"
          } capitalize font-medium hover:text-accent transition-all`}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
}
