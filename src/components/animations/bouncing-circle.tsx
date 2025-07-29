"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { bouncingBall, bouncingShadow } from "./config/bounce";
import { fadeOutFast } from "./config/fade";

interface Props {
  onFinish: () => void;
}

export default function BouncingCircle({ onFinish }: Props) {
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
      onFinish();
    }, 1800);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <motion.div
      className="fixed inset-0 bg-primary flex items-center justify-center z-50"
      {...(isAnimating ? {} : fadeOutFast)}
    >
      <div className="relative flex items-end">
        <motion.div {...bouncingBall} />
        <motion.div
          className="absolute bottom-0 left-0 right-0 mx-auto w-8 h-1 rounded-full bg-black/50"
          style={{ filter: "blur(2px)" }}
          {...bouncingShadow}
        />
      </div>
    </motion.div>
  );
}
