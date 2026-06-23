"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { fadeInUp } from "../config/fade";

interface Props {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

export default function FadeInUp({
  children,
  delay = 0,
  duration = 0.6,
  className,
}: Props) {
  const animation = fadeInUp(delay, duration);
  return (
    <motion.div {...animation} className={className}>
      {children}
    </motion.div>
  );
}
