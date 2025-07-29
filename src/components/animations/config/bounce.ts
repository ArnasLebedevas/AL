import { MotionProps } from "framer-motion";

export const bouncingBall: MotionProps = {
  initial: { y: 0 },
  animate: {
    y: [0, -80, 0, -40, 0, -10, 0],
    scaleY: [1, 1, 1.2, 0.9, 1, 1, 1],
    scaleX: [1, 1, 0.9, 1.1, 1, 1, 1],
  },
  transition: {
    duration: 1.5,
    ease: "easeOut",
  },
};

export const bouncingShadow: MotionProps = {
  initial: { scale: 1, opacity: 0.4 },
  animate: {
    scale: [1, 0.7, 1, 0.8, 1, 1, 1],
    opacity: [0.4, 0.2, 0.4, 0.3, 0.4, 0.4, 0.4],
  },
  transition: {
    duration: 1.5,
    ease: "easeOut",
  },
};
