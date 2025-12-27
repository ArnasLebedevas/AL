import { motion } from "framer-motion";
import { headerMotion } from "@/features/animations/config/motion";
import MobileNav from "./components/mobile-nav";

interface Props {
  isVisible: boolean;
}

export function MobileHeader({ isVisible }: Props) {
  return (
    <motion.div
      {...headerMotion}
      className="fixed top-5 right-0 z-50 md:hidden pointer-events-auto"
      animate={isVisible ? headerMotion.animate : headerMotion.exit}
    >
      <div className="flex items-center justify-between px-4">
        <MobileNav />
      </div>
    </motion.div>
  );
}
