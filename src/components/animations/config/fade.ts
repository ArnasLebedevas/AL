import { MotionProps } from "framer-motion";

export const fadeInDelayed: MotionProps = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { delay: 2, duration: 0.1, ease: "easeInOut" },
};

export const fadeOutFast: MotionProps = {
  initial: { opacity: 1 },
  animate: { opacity: 0 },
  transition: { duration: 0.5 },
};
