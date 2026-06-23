import { Section } from "@/shared/layout/section";
import FadeInUp from "@/features/animations/components/fade-in-up";
import { content } from "@/shared/constants/content";
import Link from "next/link";
import { Button } from "@/shared/components/ui/button";

export default function NotFound() {
  const { label, title, description, button } = content.notFound;

  return (
    <Section variant="hero" size="xs" align="center">
      <FadeInUp>
        <span className="text-accent body-md mb-4 block">{label}</span>
      </FadeInUp>

      <FadeInUp delay={0.1}>
        <h1 className="heading-xl mb-4">{title}</h1>
      </FadeInUp>

      <FadeInUp delay={0.2}>
        <p className="body-md max-w-[460px] mb-8">{description}</p>
      </FadeInUp>

      <FadeInUp delay={0.3}>
        <Link href="/">
          <Button variant='outline' size="lg">{button}</Button>
        </Link>
      </FadeInUp>
    </Section>
  );
}
