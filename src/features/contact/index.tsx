import ContactButton from "@/shared/components/contact-button";
import { Section } from "@/shared/layout/section";
import { SectionHeader } from "@/shared/components/section-header";
import { content } from "@/shared/constants/content";

export default function ContactSection() {
  const { id, number } = content.navigation.contact;
  const { title, subtitle, description, button } = content.contact;

  return (
    <Section id={id} size="xs" align="center">
      <SectionHeader
        number={number}
        title={title}
        hasDivider={false}
        className="text-accent text-sm"
        align="center"
      />
      <span className="heading-md mb-5">{subtitle}</span>
      <p className="body-md mb-7">{description}</p>
      <ContactButton label={button} size="default" />
    </Section>
  );
}
