import { SectionHeader } from "@/shared/components/section-header";
import { content } from "@/shared/constants/content";
import { ExperienceTabs } from "./components/experience-tabs";
import { Section } from "@/shared/layout/section";

export default function ExperienceSection() {
  const { id, number } = content.navigation.experience;
  const { items, title } = content.experience;

  return (
    <Section size="sm" id={id}>
      <SectionHeader number={number} title={title} />
      <ExperienceTabs items={items} />
    </Section>
  );
}
