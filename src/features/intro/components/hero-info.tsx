import ContactButton from "@/shared/components/contact-button";
import Socials from "./socials";
import { content } from "@/shared/constants/content";
import FadeInUp from "@/features/animations/components/fade-in-up";

export function HeroInfo() {
  const hero = content.home.hero;
  
  return (
    <div className="order-2 md:order-none text-center md:text-left">
      <FadeInUp delay={0.1}>
        <div className="body-md mb-4">{hero.subtitle}</div>
      </FadeInUp>

      <FadeInUp delay={0.2}>
        <h1 className="heading-xl mb-4">
          {hero.title.greeting} <br />
          <span className="text-accent">{hero.title.name}</span>
        </h1>
      </FadeInUp>

      <FadeInUp delay={0.3}>
        <p className="body-md max-w-[500px] mb-7">{hero.description}</p>
      </FadeInUp>

      <FadeInUp delay={0.4}>
        <div className="flex flex-col md:flex-row items-center gap-5">
          <ContactButton label={hero.ctaButton} size="lg" />
          <Socials />
        </div>
      </FadeInUp>
    </div>
  );
}
