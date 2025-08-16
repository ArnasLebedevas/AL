import { MotionProps } from "framer-motion";

export const infiniteScroll: MotionProps = {
  animate: {
    x: ["0%", "-50%"],
  },
  transition: {
    repeat: Infinity,
    ease: "linear",
    duration: 20,
  },
};
