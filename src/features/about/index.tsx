import Container from "@/shared/components/container";
import { content } from "@/shared/constants/content";
import { Technologies } from "./components/technologies";
import { SectionHeader } from "@/shared/components/section-header";
import { Markdown } from "@/shared/components/markdown";
import { ProfileImage } from "@/shared/components/profile-image";

export default function AboutSection() {
  return (
    <section id={content.navigation.about.id}>
      <Container
        size="md"
        className="flex gap-12 items-center text-left xl:flex-row flex-col md:gap-16 xl:py-[100px] py-[50px]"
      >
        <div className="flex-1">
          <SectionHeader
            number={content.navigation.about.number}
            title={content.about.title}
          />
          <div className="mt-7 space-y-6 text-xs xl:text-sm leading-[1.7]">
            {content.about.description.map((paragraph, key) => (
              <Markdown key={key} text={paragraph} />
            ))}
            <Technologies />
          </div>
        </div>
        <ProfileImage
          src="/images/about.jpg"
          alt="Profile"
          sizes="(min-width: 1200px) 300px, 280px"
          sizeClassName="relative h-[280px] w-[280px] md:h-[300px] md:w-[300px]"
          className="relative z-10 h-full w-full rounded-md object-cover"
        >
          <div className="absolute -right-3 -bottom-3 h-full w-full rounded-md border-2 border-accent" />
        </ProfileImage>
      </Container>
    </section>
  );
}
