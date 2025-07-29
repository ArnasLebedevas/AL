import InfiniteIconSlider from "@/components/animations/infinite-carousel";
import { TECH_STACK } from "@/constants/tech-stack";

export default function Technologies() {
  return (
    <div className="xl:pb-24">
      <h2 className="text-accent text-center w-full mx-auto mb-4">
        Skills & Technologies
      </h2>
      <p className="text-center w-full mx-auto xl:mb-15 text-white/80">
        I work with a modern, proven tech stack to build reliable, responsive,
        and beautiful applications for web and mobile
      </p>
      <InfiniteIconSlider data={TECH_STACK} />
    </div>
  );
}
