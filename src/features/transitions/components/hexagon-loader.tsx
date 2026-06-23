"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { hexagonMotionConfig } from "../config/motion";
import { useScrollToHash } from "../hooks/use-scroll-to-hash";
import Logo from "@/shared/icons/logo";

interface Props {
  children: React.ReactNode;
}

export default function HexagonLoader({ children }: Props) {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useScrollToHash(showContent);

  return (
    <>
      <AnimatePresence mode="wait" onExitComplete={() => setShowContent(true)}>
        {isLoading && (
          <motion.div
            className="flex items-center justify-center h-screen w-screen overflow-hidden bg-[var(--primary)] fixed top-0 left-0 z-10"
            {...hexagonMotionConfig}
          >
            <Logo
              animated
              onAnimationComplete={() => setIsLoading(false)}
              className="h-16 w-16 xl:h-20 xl:w-20"
            />
          </motion.div>
        )}
      </AnimatePresence>
      {showContent && children}
    </>
  );
}
