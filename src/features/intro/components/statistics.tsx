"use client";

import { content } from "@/shared/constants/content";
import CountUp from "react-countup";
import FadeInUp from "@/features/animations/components/fade-in-up";

export default function Statistics() {
  return (
    <div className="border-t border-white/5 pt-10 mt-4">
      <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-6 text-center w-full place-items-center">
        {content.statistics.map((stat, index) => (
          <FadeInUp key={index} delay={0.1 * index}>
            <div className="flex flex-col md:flex-row items-center md:items-center md:gap-8 gap-3" role="group" aria-label={`${stat.value} ${stat.label}`}>
              <CountUp
                end={stat.value}
                duration={8}
                enableScrollSpy
                scrollSpyOnce
                className="text-4xl xl:text-5xl font-extrabold text-white"
              />
              <p className="max-w-[120px] body-md md:text-left">
                {stat.label}
              </p>
            </div>
          </FadeInUp>
        ))}
      </div>
    </div>
  );
}
