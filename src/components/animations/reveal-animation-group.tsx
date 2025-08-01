"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  delayChildren?: number;
  staggerChildren?: number;
}

export default function RevealAnimationGroup({
  children,
  delayChildren = 0.2,
  staggerChildren = 0.2,
}: Props) {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren,
            delayChildren,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}