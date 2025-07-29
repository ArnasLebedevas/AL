import Experience from "@/features/home/experience";
import Hero from "@/features/home/hero";
import Technologies from "@/features/home/technologies";

export default function Home() {
  return (
    <section className="h-full">
      <Hero />
      <Experience />
      <Technologies />
    </section>
  );
}
