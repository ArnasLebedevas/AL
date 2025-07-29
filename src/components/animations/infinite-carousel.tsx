"use client";

import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

interface Props {
  items: { icon: React.ComponentType; name: string }[];
}

export default function InfiniteCarousel({ items }: Props) {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      x: "-100%",
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "linear",
        },
      },
    });
  }, [controls]);

  const duplicatedSlides = [...items, ...items];

  return (
    <div className="relative h-full overflow-hidden  mx-auto container">
      <motion.div
        className="flex gap-30"
        animate={{
          x: ["0%", "-100%"],
          transition: {
            ease: "linear",
            duration: 15,
            repeat: Infinity,
          },
        }}
      >
        {duplicatedSlides.map((slide, index) => {
          const Icon = slide.icon;

          return (
            <div
              key={index}
              className="flex-shrink-0"
              style={{ width: `${100 / items.length}%` }}
            >
              <div className="flex items-center justify-center h-full text-[60px]">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Icon />
                  </TooltipTrigger>
                  <TooltipContent side="top">{slide.name}</TooltipContent>
                </Tooltip>
              </div>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}
