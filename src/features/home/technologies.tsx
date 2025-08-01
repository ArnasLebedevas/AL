import InfiniteCarousel from "@/components/animations/infinite-carousel";
import { content } from "@/constants/content";
import { TECH_STACK } from "@/constants/tech-stack";

export default function Technologies() {
  const technologies = content.home.technologies;

  return (
    <div className="container mx-auto">
      <h2 className="text-accent text-center w-full mx-auto mb-5">
        {technologies.title}
      </h2>
      <p className="text-center w-full mx-auto mb-10 text-white/80">
        {technologies.subtitle}
      </p>
      <div className="mb-10">
        <InfiniteCarousel data={TECH_STACK} />
      </div>
    </div>
  );
}
