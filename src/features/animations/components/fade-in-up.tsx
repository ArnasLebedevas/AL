"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { fadeInUp } from "../config/fade";

interface Props {
  children: ReactNode;
  delay: number;
  duration?: number;
}

export default function FadeInUp({
  children,
  delay,
  duration = 1,
}: Props) {
  const animation = fadeInUp(delay, duration);
  return <motion.div {...animation}>{children}</motion.div>;
}
