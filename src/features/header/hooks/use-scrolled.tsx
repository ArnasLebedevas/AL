import { useEffect, useState } from "react";

const SROLL_OFFSET = 30;

export const useScrolled = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > SROLL_OFFSET);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return scrolled;
};
