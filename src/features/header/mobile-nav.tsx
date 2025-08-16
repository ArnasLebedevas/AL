"use client";

import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "../../shared/components/ui/sheet";
import { CiMenuFries } from "react-icons/ci";
import BrandLogo from "../../shared/components/brand/brand-logo";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { NavLinks } from "./nav-links";

export default function MobileNav() {
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
          <BrandLogo className="w-16 h-16" />
        </div>
        <NavLinks
          className="flex-col items-center gap-8"
          linkClassName="text-xl"
        />
      </SheetContent>
    </Sheet>
  );
}
