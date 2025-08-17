"use client";

import Image from "next/image";
import SpinningCircle from "../animations/components/spinning-circle";

export default function ProfileImage() {
  return (
    <div className="w-full h-full relative">
      <div className="w-[289px] h-[289px] xl:w-[500px] xl:h-[495px] absolute">
        <Image
          src="/profile.png"
          priority
          fill
          alt="Profile"
          sizes="(min-width: 1200px) 498px, 289px"
          className="object-contain rounded-full"
        />
      </div>
      <SpinningCircle />
    </div>
  );
}
