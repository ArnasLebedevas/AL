import { content } from "@/shared/constants/content";
import Socials from "@/features/intro/components/socials";
import Statistics from "./statistics";
import Container from "@/shared/components/container";
import ContactButton from "@/shared/components/contact-button";
import { ProfileImage } from "@/shared/components/profile-image";
import SpinningCircle from "@/features/animations/components/spinning-circle";

export default function Hero() {
  const hero = content.home.hero;

  return (
    <Container
      size="lg"
      className="h-full flex justify-center flex-col min-h-screen xl:py-[100px] pt-[100px] py-[50px]"
    >
      <div className="flex flex-col xl:flex-row items-center justify-between xl:mt-8 xl:mb-24">
        <div className="text-center xl:text-left order-2 xl:order-none">
          <div className="mb-4 text-xs xl:text-sm">{hero.subtitle}</div>
          <h1 className="mb-4">
            {hero.title.greeting} <br />
            <span className="text-accent">{hero.title.name}</span>
          </h1>
          <p className="max-w-[500px] text-white/80 mb-7 text-xs xl:text-sm leading-[1.7]">
            {hero.description}
          </p>
          <div className="flex flex-col xl:flex-row items-center gap-5">
            <ContactButton label={hero.ctaButton} size="lg" />
            <div className="mb-7 xl:mb-0">
              <Socials />
            </div>
          </div>
        </div>
        <div className="order-1 xl:order-none mb-8 xl:mb-0">
          <ProfileImage
            alt="Profile"
            src="/images/profile.png"
            sizes="(min-width: 1200px) 498px, 289px"
            sizeClassName="w-[289px] h-[289px] xl:w-[450px] xl:h-[445px] absolute"
            className="object-contain rounded-full"
          >
            <SpinningCircle />
          </ProfileImage>
        </div>
      </div>
      <Statistics />
    </Container>
  );
}
