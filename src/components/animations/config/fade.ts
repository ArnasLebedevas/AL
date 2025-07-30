import { MotionProps } from "framer-motion";

export const fadeInUp = (delay = 0, duration = 0.6): MotionProps => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: {
    delay,
    duration,
    ease: "easeOut",
  },
});
