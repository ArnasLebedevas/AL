"use client";

import { motion } from "framer-motion";

const HEXAGON_POINTS = "50,5 90,27.5 90,72.5 50,95 10,72.5 10,27.5";
const DEFAULT_STROKE_LENGTH = 300;
const DEFAULT_STROKE_WIDTH = 2;

interface Props {
  animated?: boolean;
  onAnimationComplete?: () => void;
  stroke?: string;
  strokeWidth?: number;
  fill?: string;
  animationDuration?: number;
}

export function Hexagon({
  animated = false,
  onAnimationComplete,
  stroke = "var(--accent)",
  strokeWidth = DEFAULT_STROKE_WIDTH,
  fill = "transparent",
  animationDuration = 3,
}: Props) {
  if (animated) {
    return (
      <motion.polygon
        points={HEXAGON_POINTS}
        stroke={stroke}
        strokeWidth={strokeWidth}
        fill={fill}
        initial={{
          strokeDasharray: DEFAULT_STROKE_LENGTH,
          strokeDashoffset: -DEFAULT_STROKE_LENGTH,
        }}
        animate={{ strokeDashoffset: 0 }}
        transition={{ duration: animationDuration, ease: "easeInOut" }}
        onAnimationComplete={onAnimationComplete}
      />
    );
  }

  return (
    <polygon
      points={HEXAGON_POINTS}
      stroke={stroke}
      strokeWidth={strokeWidth}
      fill={fill}
    />
  );
}
