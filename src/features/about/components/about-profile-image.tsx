"use client";

import { ProfileImage } from "@/shared/components/profile-image";
import { motion } from "framer-motion";

const borderVariants = {
  initial: { x: 18, y: 18 },
  hover: { x: 12, y: 12 },
};

export function AboutProfileImage() {
  return (
    <motion.div initial="initial" whileHover="hover" className="inline-block">
      <ProfileImage
        src="/images/about.jpg"
        alt="Profile"
        sizes="(min-width: 1200px) 300px, 280px"
        sizeClassName="relative h-[280px] w-[280px] md:h-[300px] md:w-[300px]"
        className="relative z-10 h-full w-full rounded-md object-cover"
      >
        <motion.div
          variants={borderVariants}
          transition={{
            duration: 0.35,
            ease: [0.25, 0.8, 0.25, 1],
          }}
          className="absolute inset-0 rounded-md border-2 border-accent"
        />
      </ProfileImage>
    </motion.div>
  );
}
