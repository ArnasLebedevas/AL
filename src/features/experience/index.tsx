import { SectionHeader } from "@/shared/components/section-header";
import { content } from "@/shared/constants/content";
import { ExperienceTabs } from "./components/experience-tabs";
import { Section } from "@/shared/layout/section";
import FadeInUp from "@/features/animations/components/fade-in-up";

export default function ExperienceSection() {
  const { id, number } = content.navigation.experience;
  const { items, title } = content.experience;

  return (
    <Section size="sm" id={id}>
      <FadeInUp>
        <SectionHeader number={number} title={title} />
      </FadeInUp>
      <FadeInUp delay={0.15}>
        <ExperienceTabs items={items} />
      </FadeInUp>
    </Section>
  );
}
