"use client";

import { Statistic } from "@/constants/experience";
import CountUp from "react-countup";

interface Props {
  data: Statistic[];
}

export default function Statistics({ data }: Props) {
  return (
    <section>
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 mx-auto xl:max-w-none justify-between">
          {data.map((stat, index) => (
            <div
              className="flex gap-4 items-center text-left "
              key={index}
            >
              <CountUp
                end={stat.value}
                duration={5}
                suffix={stat.suffix}
                className="text-4xl xl:text-6xl font-extrabold"
              />
              <p className={` leading-snug text-white/80 w-min`}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
