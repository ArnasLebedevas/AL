"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { hexagonMotionConfig } from "../config/motion";
import Logo from "@/shared/icons/logo";

interface Props {
  children: React.ReactNode;
}

export default function HexagonLoader({ children }: Props) {
  const [isAnimating, setIsAnimating] = useState(true);

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {isAnimating && (
          <motion.div
            className="flex items-center justify-center h-screen w-screen bg-[var(--primary)]"
            {...hexagonMotionConfig}
          >
            <Logo
              className="h-20 w-20 xl:h-25 xl:w-25"
              animated
              onAnimationComplete={() => setIsAnimating(false)}
            />
          </motion.div>
        )}
      </AnimatePresence>
      {!isAnimating && children}
    </div>
  );
}
