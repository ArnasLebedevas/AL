"use client";

import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/shared/components/ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { NavLinks } from "./nav-links";
import { content } from "@/shared/constants/content";
import ResumeButton from "./resume-button";
import { MenuToggleIcon } from "./menu-toggle-icon";
import { useState } from "react";

export default function MobileNav({ activeSection }: { activeSection: string }) {
  const [isOpen, setOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setOpen}>
      <SheetTrigger
        aria-label="Toggle Menu"
        className="relative h-10 w-10 flex items-center justify-center outline-none"
      >
        <MenuToggleIcon isOpen={isOpen} />
      </SheetTrigger>

      <SheetContent
        aria-describedby={undefined}
        className="flex flex-col justify-center items-center gap-8"
      >
        <SheetTitle>
          <VisuallyHidden>Mobile Navigation</VisuallyHidden>
        </SheetTitle>
        <NavLinks
          className="flex-col items-center gap-5"
          linkClassName="text-xl"
          activeSection={activeSection}
          onClick={() => setOpen(false)}
        />
        <ResumeButton label={content.navigation.resume} />
      </SheetContent>
    </Sheet>
  );
}
