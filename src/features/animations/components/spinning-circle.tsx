"use client";

import { motion } from "framer-motion";
import { spinningStroke } from "../config/spin";

export default function SpinningCircle() {
  return (
    <motion.svg
      className="w-[290px] h-[300px] md:w-[350px] md:h-[359px] lg:w-[400px] lg:h-[409px] xl:w-[450px] xl:h-[459px]"
      fill="transparent"
      viewBox="0 0 506 506"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.circle
        cx="253"
        cy="253"
        r="250"
        className="stroke-[var(--accent)]"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...spinningStroke}
      />
    </motion.svg>
  );
}
