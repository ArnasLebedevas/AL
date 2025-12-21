import { ExperienceItem } from "@/shared/constants/experience";

interface Props {
  experience: ExperienceItem;
}

export function ExperienceItemView({ experience }: Props) {
  return (
    <>
      <h3 className="text-lg font-semibold">{experience.role}</h3>
      <p className="mt-1 text-sm font-mono text-slate-400">
        {experience.period}
      </p>
      <ul className="mt-6 gap-4 flex flex-col">
        {experience.highlights.map((item, index) => (
          <li
            key={index}
            className="flex items-baseline gap-3 before:content-['▹'] before:text-accent before:text-lg"
          >
            <span className="body-md ">{item}</span>
          </li>
        ))}
      </ul>
    </>
  );
}
