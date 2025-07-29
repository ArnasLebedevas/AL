"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function BouncingCircle({ onFinish }: { onFinish: () => void }) {
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
      initial={{ opacity: 1 }}
      animate={{ opacity: isAnimating ? 1 : 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 bg-primary flex items-center justify-center z-50"
    >
      <div className="relative flex items-end">
        <motion.div
          className="w-6 h-6 rounded-full bg-accent"
          initial={{ y: 0 }}
          animate={{
            y: [0, -80, 0, -40, 0, -10, 0],
            scaleY: [1, 1, 1.2, 0.9, 1, 1, 1],
            scaleX: [1, 1, 0.9, 1.1, 1, 1, 1],
          }}
          transition={{
            duration: 1.5,
            ease: "easeOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 left-0 right-0 mx-auto w-8 h-1 rounded-full bg-black/50"
          style={{ filter: "blur(2px)" }}
          initial={{ scale: 1, opacity: 0.4 }}
          animate={{
            scale: [1, 0.7, 1, 0.8, 1, 1, 1],
            opacity: [0.4, 0.2, 0.4, 0.3, 0.4, 0.4, 0.4],
          }}
          transition={{
            duration: 1.5,
            ease: "easeOut",
          }}
        />
      </div>
    </motion.div>
  );
}
