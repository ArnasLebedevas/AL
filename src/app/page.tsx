import Statistics from "@/features/home/statistics";
import Hero from "@/features/home/hero";
import Technologies from "@/features/home/technologies";
import { EXPERIENCES } from "@/shared/constants/experience";

export default function Home() {
  return (
    <section className="h-full">
      <Hero />
      <Statistics data={EXPERIENCES} />
      <Technologies />
    </section>
  );
}
