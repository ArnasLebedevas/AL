import ContactButton from "@/shared/components/contact-button";
import Container from "@/shared/components/container";
import { SectionHeader } from "@/shared/components/section-header";
import { content } from "@/shared/constants/content";

export default function ContactSection() {
  return (
    <section id={content.navigation.contact.id}>
      <Container
        size="sm"
        className="text-center justify-center flex flex-col items-center xl:py-[100px] py-[50px]"
      >
        <SectionHeader
          number={content.navigation.contact.number}
          title={content.contact.title}
          hasDivider={false}
          className="text-accent text-sm mb-7"
          align="center"
        />
        <p className="text-white mb-5 xl:text-3xl text-2xl font-bold">
          {content.contact.subtitle}
        </p>
        <p className="text-white/80 mb-7 text-xs xl:text-sm leading-[1.7]">
          {content.contact.description}
        </p>
        <ContactButton label={content.contact.button} size="default" />
      </Container>
    </section>
  );
}
