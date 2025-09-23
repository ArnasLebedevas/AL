"use client";

import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "../../../shared/components/ui/sheet";
import { CiMenuFries } from "react-icons/ci";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { NavLinks } from "./nav-links";
import { content } from "@/shared/constants/content";
import ResumeButton from "./resume-button";
import { useState } from "react";

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent
        aria-describedby={undefined}
        onOpenAutoFocus={(event) => event.preventDefault()}
        className="flex flex-col justify-center items-center"
      >
        <SheetTitle>
          <VisuallyHidden>Mobile Navigation</VisuallyHidden>
        </SheetTitle>
        <NavLinks
          className="flex-col items-center gap-5"
          linkClassName="text-xl"
          onClick={() => setOpen(false)}
        />
        <ResumeButton label={content.navigation.resume} />
      </SheetContent>
    </Sheet>
  );
}
