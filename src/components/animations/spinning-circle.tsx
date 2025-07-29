import { motion } from "framer-motion";
import { spinningStroke } from "./config/spin";

export default function SpinningCircle() {
  return (
    <motion.svg
      className="w-[300px] xl:w-[506px] h-[300px] xl:h-[506px]"
      fill="transparent"
      viewBox="0 0 506 506"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.circle
        cx="253"
        cy="253"
        r="250"
        stroke="#00ff99"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...spinningStroke}
      />
    </motion.svg>
  );
}
