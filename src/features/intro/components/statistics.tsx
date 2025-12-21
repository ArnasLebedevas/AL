"use client";

import { content } from "@/shared/constants/content";
import CountUp from "react-countup";

export default function Statistics() {
  return (
    <div className="px-4 flex flex-wrap justify-center sm:justify-between gap-6 text-center md:text-left">
      {content.statistics.map((stat, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row items-center md:items-start sm:w-auto w-[40%] xl:items-center"
        >
          <CountUp
            end={stat.value}
            duration={8}
            enableScrollSpy
            scrollSpyOnce
            className="text-4xl xl:text-5xl font-extrabold text-white"
          />
          <p className="mt-2 md:mt-0 md:ml-3 max-w-[100px] body-md">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}
