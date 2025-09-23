import { MotionProps } from "framer-motion";

export const headerMotion: MotionProps = {
  initial: { y: 0 },
  animate: { y: 0 },
  exit: { y: -120 },
  transition: { duration: 0.3, ease: "easeInOut" },
};
