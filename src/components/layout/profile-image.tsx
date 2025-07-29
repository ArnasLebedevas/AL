"use client";

import Image from "next/image";
import SpinningCircle from "../animations/spinning-circle";
import Fade from "../animations/fade";

export default function ProfileImage() {
  return (
    <div className="w-full h-full relative">
      <Fade>
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
      </Fade>
    </div>
  );
}
