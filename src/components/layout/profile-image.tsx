"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SpinningCircle from "../animations/spinning-circle";

export default function ProfileImage() {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        transition={{ delay: 2, duration: 0.1, ease: "easeInOut" }}
        animate={{ opacity: 1 }}
      >
        <div className="w-[289px] h-[289px] xl:w-[498px] xl:h-[498px] absolute">
          <Image
            src="/profile.png"
            priority
            fill
            alt="Profile"
            className="object-contain rounded-full"
          />
        </div>
        <SpinningCircle />
      </motion.div>
    </div>
  );
}
