import { useEffect } from "react";

export function useScrollToHash(enabled: boolean) {
  useEffect(() => {
    if (!enabled) return;

    const hash = window.location.hash.replace("#", "");
    if (!hash) return;

    const element = document.getElementById(hash);
    element?.scrollIntoView({ behavior: "smooth", block: "center" });
  }, [enabled]);
}
