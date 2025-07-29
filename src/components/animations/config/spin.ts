import { MotionProps } from "framer-motion";

export const spinningStroke: MotionProps = {
  initial: { strokeDasharray: "24 10 0 0" },
  animate: {
    strokeDasharray: ["15 120 25 25", "16 25 92 72", "15 120 25 25"],
    rotate: 360,
  },
  transition: {
    duration: 20,
    repeat: Infinity,
    ease: "linear",
  },
};
