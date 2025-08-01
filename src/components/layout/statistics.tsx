"use client";

import { Statistic } from "@/constants/experience";
import CountUp from "react-countup";

interface Props {
  data: Statistic[];
}

export default function Statistics({ data }: Props) {
  return (
    <section>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center sm:justify-between gap-6 text-center md:text-left">
          {data.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center md:items-start sm:w-auto w-[40%] xl:items-center"
            >
              <CountUp
                end={stat.value}
                duration={4}
                suffix={stat.suffix}
                className="text-4xl xl:text-6xl font-extrabold text-white"
              />
              <p className="mt-2 md:mt-0 md:ml-3 text-sm text-white/80 leading-snug max-w-[100px]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}