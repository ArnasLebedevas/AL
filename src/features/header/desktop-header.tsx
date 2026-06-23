import Logo from "@/shared/icons/logo";
import { NavLinks } from "./components/nav-links";
import ResumeButton from "./components/resume-button";
import { content } from "@/shared/constants/content";
import { HeaderBar } from "./components/header-bar";
import { motion } from "framer-motion";
import { headerMotion } from "../animations/config/motion";
import { cn } from "@/lib/utils";

interface Props {
  isVisible: boolean;
  isScrolled: boolean;
  activeSection: string;
}

export function DesktopHeader({ isVisible, isScrolled, activeSection }: Props) {
  return (
    <motion.header
      {...headerMotion}
      animate={isVisible ? headerMotion.animate : headerMotion.exit}
      className={cn(
        "fixed top-0 w-full z-40 backdrop-blur-sm bg-primary/10 transition-shadow duration-300",
        isScrolled && "shadow-header"
      )}
    >
      <HeaderBar>
        <Logo className="logo-size" />

        <div className="hidden md:flex items-center gap-8">
          <NavLinks className="gap-8" activeSection={activeSection} />
          <ResumeButton label={content.navigation.resume} />
        </div>
      </HeaderBar>
    </motion.header>
  );
}
