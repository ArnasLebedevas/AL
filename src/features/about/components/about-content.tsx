import { SectionHeader } from "@/shared/components/section-header";
import { Technologies } from "./technologies";
import { Markdown } from "@/shared/components/markdown";

interface AboutContentProps {
  number: string;
  title: string;
  description: string[];
  technologies: string[];
}

export function AboutContent({
  number,
  title,
  description,
  technologies,
}: AboutContentProps) {
  return (
    <div className="flex-1">
      <SectionHeader number={number} title={title} />
      <div className="space-y-6 body-md">
        {description.map((paragraph) => (
          <Markdown key={paragraph} text={paragraph} />
        ))}
        <Technologies technologies={technologies} />
      </div>
    </div>
  );
}
