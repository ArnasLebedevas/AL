"use client";

import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "../../ui/sheet";
import { CiMenuFries } from "react-icons/ci";
import Link from "next/link";
import { ROUTES } from "@/constants/app-routes";
import { NAV_LINKS } from "@/constants/navigation";

export default function MobileNav() {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <SheetTitle className="sr-only">Mobile Navigation</SheetTitle>
        <div className="mt-32 mb-40 text-center text-2xl">
          <Link href={ROUTES.HOME}>
            <h1 className="text-4xl font-semibold">AL</h1>
          </Link>
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
