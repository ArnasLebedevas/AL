import { ExperienceItem } from "@/shared/types";
import { MarkerListItem } from "@/shared/components/marker-list-item";

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
          <MarkerListItem key={index} className="gap-3">
            <span className="body-md">{item}</span>
          </MarkerListItem>
        ))}
      </ul>
    </>
  );
}
