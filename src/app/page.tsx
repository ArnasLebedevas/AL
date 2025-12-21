import AboutSection from "@/features/about";
import ContactSection from "@/features/contact";
import ExperienceSection from "@/features/experience";
import HeroSection from "@/features/intro";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ContactSection />
    </>
  );
}
