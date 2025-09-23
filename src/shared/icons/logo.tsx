import { content } from "../constants/content";
import { Hexagon } from "./hexagon";
import { useRouter } from "next/navigation";

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
  const router = useRouter();

  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={() => router.push(content.navigation.home.path)}
      className={`cursor-pointer transition-colors duration-300 hover:[&>polygon:first-child]:stroke-[var(--accent-hover)] ${className}`}
    >
      <Hexagon animated={animated} onAnimationComplete={onAnimationComplete} />
      <text
        x="50%"
        y="52%"
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize="28"
        fill="white"
      >
        AL
      </text>
    </svg>
  );
}
