"use client";

import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "../../ui/sheet";
import { CiMenuFries } from "react-icons/ci";
import Link from "next/link";
import { NAV_LINKS } from "@/constants/navigation";
import Logo from "../logo";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

export default function MobileNav() {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent aria-describedby={undefined} className="flex flex-col">
        <SheetTitle>
          <VisuallyHidden>Mobile Navigation</VisuallyHidden>
        </SheetTitle>
        <div className="mt-32 mb-40 text-center text-2xl">
          <Logo className="w-16 h-16" />
        </div>
        <nav className="flex flex-col justify-center items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className={`${
                link.path === pathname && "text-accent border-b-2 border-accent"
              } text-xl capitalize hover:text-accent`}
              aria-current={pathname === link.path ? "page" : undefined}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
