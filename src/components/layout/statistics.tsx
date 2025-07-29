"use client";

import CountUp from "react-countup";

const stats = [
  { label: "Years of experience", value: 5 },
  { label: "Projects completed", value: 6 },
  { label: "Technologies mastered", value: 10 },
  { label: "Commits made", value: 500 },
];

export default function Statistics() {
  return (
    <section>
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 mx-auto xl:max-w-none justify-between">
          {stats.map((stat, index) => (
            <div className="flex gap-4 items-center" key={index}>
              <CountUp
                end={stat.value}
                duration={5}
                delay={2}
                className="text-4xl xl:text-6xl font-extrabold"
              />
              <p
                className={`${
                  stat.label.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                } leading-snug text-white/80`}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
