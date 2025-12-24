"use client";

import { DesktopHeader } from "./desktop-header";
import { useScrollDirection } from "./hooks/use-scroll-direction.";
import { MobileHeader } from "./mobile-header";

export default function Header() {
  const isVisible = useScrollDirection();

  return (
    <>
      <DesktopHeader visible={isVisible} />
      <MobileHeader visible={isVisible} />
    </>
  );
}
