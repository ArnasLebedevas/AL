import ContactButton from "@/shared/components/contact-button";
import Socials from "./socials";
import { content } from "@/shared/constants/content";

export function HeroInfo() {
  const hero = content.home.hero;
  
  return (
    <div className="order-2 md:order-none text-center md:text-left">
      <div className="body-md mb-4">{hero.subtitle}</div>

      <h1 className="heading-xl mb-4">
        {hero.title.greeting} <br />
        <span className="text-accent">{hero.title.name}</span>
      </h1>

      <p className="body-md max-w-[500px] mb-7">{hero.description}</p>

      <div className="flex flex-col md:flex-row items-center gap-5">
        <ContactButton label={hero.ctaButton} size="lg" />
        <Socials />
      </div>
    </div>
  );
}
