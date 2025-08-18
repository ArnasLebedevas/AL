"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { hexagonMotionConfig } from "../config/motion";
import Logo from "@/shared/icons/logo";
import { usePathname } from "next/navigation";

interface Props {
  children: React.ReactNode;
}

export default function HexagonLoader({ children }: Props) {
  const [isAnimating, setIsAnimating] = useState(true);
  const pathname = usePathname();
  
  return (
    <AnimatePresence mode="wait">
      {isAnimating && (
        <motion.div
          className="flex items-center justify-center h-screen w-screen overflow-hidden bg-[var(--primary)] fixed top-0 left-0 z-10"
          {...hexagonMotionConfig}
        >
          <Logo
            animated
            onAnimationComplete={() => setIsAnimating(false)}
            className="h-16 w-16 xl:h-20 xl:w-20"
          />
        </motion.div>
      )}
      <div key={pathname}>{children}</div>
    </AnimatePresence>
  );
}
