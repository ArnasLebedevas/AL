"use client";

import { DesktopHeader } from "./desktop-header";
import { useHeaderVisibility } from "./hooks/use-header-visibility";
import { useScrolled } from "./hooks/use-scrolled";
import { MobileHeader } from "./mobile-header";

export default function Header() {
  const isVisible = useHeaderVisibility();
  const isScrolled = useScrolled();

  return (
    <>
      <DesktopHeader isVisible={isVisible} isScrolled={isScrolled} />
      <MobileHeader isVisible={isVisible} />
    </>
  );
}
