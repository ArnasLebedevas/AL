import { MotionProps } from "framer-motion";

export const hexagonMotionConfig: MotionProps = {
  initial: { opacity: 1, scale: 1 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.2 },
  transition: { duration: 0.2, ease: "easeIn" },
};
