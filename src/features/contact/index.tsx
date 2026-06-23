import ContactButton from "@/shared/components/contact-button";
import { Section } from "@/shared/layout/section";
import { SectionHeader } from "@/shared/components/section-header";
import { content } from "@/shared/constants/content";
import FadeInUp from "@/features/animations/components/fade-in-up";

export default function ContactSection() {
  const { id, number } = content.navigation.contact;
  const { title, subtitle, description, button } = content.contact;

  return (
    <Section id={id} size="xs" align="center">
      <FadeInUp>
        <SectionHeader
          number={number}
          title={title}
          hasDivider={false}
          className="text-accent text-sm"
          align="center"
        />
      </FadeInUp>
      <FadeInUp delay={0.1}>
        <span className="heading-md mb-5 block">{subtitle}</span>
      </FadeInUp>
      <FadeInUp delay={0.2}>
        <p className="body-md mb-7">{description}</p>
      </FadeInUp>
      <FadeInUp delay={0.3}>
        <ContactButton label={button} size="default" />
      </FadeInUp>
    </Section>
  );
}
