import { content } from "@/shared/constants/content";
import { AboutContent } from "./components/about-content";
import { AboutProfileImage } from "./components/about-profile-image";
import { Section } from "@/shared/layout/section";

export default function AboutSection() {
  const { id, number } = content.navigation.about;
  const { title, description, technologies } = content.about;

  return (
    <Section id={id} layout="split">
      <AboutContent
        number={number}
        title={title}
        description={description}
        technologies={technologies}
      />
      <AboutProfileImage />
    </Section>
  );
}
