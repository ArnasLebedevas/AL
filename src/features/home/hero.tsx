import ProfileImage from "@/components/layout/profile-image";
import PersonalSocials from "./personal-socials";
import { content } from "@/constants/content";
import ContactButton from "@/components/ui/contact-button";
import FadeInUp from "@/components/animations/fade-in-up";

export default function Hero() {
  const hero = content.home.hero;

  return (
    <div className="container mx-auto h-full">
      <div className="flex flex-col xl:flex-row items-center justify-between xl:mt-8 xl:mb-24">
        <div className="text-center xl:text-left order-2 xl:order-none">
          <FadeInUp>
            <div className="mb-4">{hero.subtitle}</div>
          </FadeInUp>
          <FadeInUp delay={0.1}>
            <h1 className="mb-4">
              {hero.title.greeting} <br />
              <span className="text-accent">{hero.title.name}</span>
            </h1>
          </FadeInUp>
          <FadeInUp delay={0.2}>
            <p className="max-w-[500px] text-white/80 mb-7">
              {hero.description}
            </p>
          </FadeInUp>
          <FadeInUp delay={0.3}>
            <div className="flex flex-col xl:flex-row items-center gap-5">
              <ContactButton label={hero.contactButton} />
              <PersonalSocials />
            </div>
          </FadeInUp>
        </div>
        <FadeInUp delay={0.4}>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <ProfileImage />
          </div>
        </FadeInUp>
      </div>
    </div>
  );
}
