import InfiniteCarousel from "@/components/animations/infinite-carousel";
import { content } from "@/constants/content";
import { TECH_STACK } from "@/constants/tech-stack";

export default function Technologies() {
  const technologies = content.home.technologies;

  return (
    <div className="xl:pb-24">
      <h2 className="text-accent text-center w-full mx-auto mb-4">
        {technologies.title}
      </h2>
      <p className="text-center w-full mx-auto xl:mb-15 text-white/80">
        {technologies.subtitle}
      </p>
      <InfiniteCarousel data={TECH_STACK} />
    </div>
  );
}
