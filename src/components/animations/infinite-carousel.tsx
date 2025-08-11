"use client";

import React from "react";
import { motion } from "framer-motion";
import { TechStack } from "@/constants/tech-stack";
import { infiniteScroll } from "./config/scroll";

interface Props {
  data: TechStack[];
}

export default function InfiniteCarousel({ data }: Props) {
  const items = [...data, ...data];

  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute left-0 top-0 h-full xl:w-30 w-15 bg-gradient-to-r from-primary to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 h-full xl:w-30 w-15 bg-gradient-to-l from-primary to-transparent z-10" />
      <motion.div className="flex w-max" {...infiniteScroll}>
        {items.map((tech, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center flex-shrink-0 w-20 xl:w-30 mx-4 text-5xl xl:text-6xl"
          >
            <tech.icon />
            <span className="mt-2 text-sm text-center text-white/80">{tech.name}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
