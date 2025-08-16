import BrandText from "../components/brand/brand-text";
import { Hexagon } from "./hexagon";

interface Props {
  animated?: boolean;
  onAnimationComplete?: () => void;
  className: string;
}

export default function Logo({
  animated,
  onAnimationComplete,
  className,
}: Props) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`transition-colors duration-300 hover:[&>polygon:first-child]:stroke-[var(--accent-hover)] ${className}`}
    >
      <Hexagon animated={animated} onAnimationComplete={onAnimationComplete} />
      <BrandText />
    </svg>
  );
}
