"use client";

import { motion } from "framer-motion";
import { fadeInDelayed } from "./config/fade";

interface Props {
  children: React.ReactNode;
}

export default function Fade({ children }: Props) {
  return <motion.div {...fadeInDelayed}>{children}</motion.div>;
}
