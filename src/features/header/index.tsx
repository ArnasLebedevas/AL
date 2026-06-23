"use client";

import { DesktopHeader } from "./desktop-header";
import { useHeaderVisibility } from "./hooks/use-header-visibility";
import { useScrolled } from "./hooks/use-scrolled";
import { useActiveSection } from "./hooks/use-active-section";
import { MobileHeader } from "./mobile-header";

export default function Header() {
  const isVisible = useHeaderVisibility();
  const isScrolled = useScrolled();
  const activeSection = useActiveSection();

  return (
    <>
      <DesktopHeader isVisible={isVisible} isScrolled={isScrolled} activeSection={activeSection} />
      <MobileHeader isVisible={isVisible} activeSection={activeSection} />
    </>
  );
}
