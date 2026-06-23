import { SectionHeader } from "@/shared/components/section-header";
import { Technologies } from "./technologies";
import { Markdown } from "@/shared/components/markdown";
import FadeInUp from "@/features/animations/components/fade-in-up";

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
      <FadeInUp>
        <SectionHeader number={number} title={title} />
      </FadeInUp>
      <div className="space-y-6 body-md">
        {description.map((paragraph, index) => (
          <FadeInUp key={paragraph} delay={0.1 * (index + 1)}>
            <Markdown text={paragraph} />
          </FadeInUp>
        ))}
        <FadeInUp delay={0.1 * (description.length + 1)}>
          <Technologies technologies={technologies} />
        </FadeInUp>
      </div>
    </div>
  );
}
