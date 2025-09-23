import { useEffect, useRef, useState, useCallback } from "react";

const SCROLL_THRESHOLD = 5;
const SCROLL_OFFSET = 10;

export const useScrollDirection = () => {
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const isTicking = useRef(false);

  const shouldBeVisible = useCallback(
    (currentY: number): boolean => {
      if (currentY <= SCROLL_OFFSET) return true;

      const hasScrolledEnough =
        Math.abs(currentY - lastScrollY.current) > SCROLL_THRESHOLD;
      if (!hasScrolledEnough) return isVisible;

      const isScrollingUp = currentY < lastScrollY.current;
      lastScrollY.current = currentY;

      return isScrollingUp;
    },
    [isVisible]
  );

  const updateScroll = useCallback(() => {
    const currentY = window.scrollY;
    setIsVisible(shouldBeVisible(currentY));
    isTicking.current = false;
  }, [shouldBeVisible]);

  const handleScroll = useCallback(() => {
    if (!isTicking.current) {
      window.requestAnimationFrame(updateScroll);
      isTicking.current = true;
    }
  }, [updateScroll]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return isVisible;
};
