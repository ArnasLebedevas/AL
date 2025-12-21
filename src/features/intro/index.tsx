import Statistics from "./components/statistics";
import { Section } from "@/shared/layout/section";
import { HeroImage } from "./components/hero-image";
import { HeroInfo } from "./components/hero-info";

export default function HeroSection() {
  return (
    <Section variant="hero" layout="stack" size="lg">
      <div className="flex flex-col md:flex-row items-center justify-between md:mt-8 md:mb-24 py-7 md:gap-4">
        <HeroInfo />
        <HeroImage />
      </div>
      <Statistics />
    </Section>
  );
}
