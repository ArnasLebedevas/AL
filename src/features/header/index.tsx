"use client";

import { content } from "@/shared/constants/content";
import MobileNav from "./components/mobile-nav";
import { NavLinks } from "./components/nav-links";
import { motion } from "framer-motion";
import { useScrollDirection } from "@/features/header/hooks/use-scroll-direction.";
import Logo from "@/shared/icons/logo";
import ResumeButton from "./components/resume-button";
import { headerMotion } from "../animations/config/motion";
import { HeaderBar } from "./components/header-bar";

export default function Header() {
  const isHeaderVisible = useScrollDirection();

  return (
    <motion.header
      {...headerMotion}
      animate={isHeaderVisible ? headerMotion.animate : headerMotion.exit}
      className="fixed top-0 z-[11] w-full bg-primary/10 backdrop-blur-md text-white"
    >
      <HeaderBar>
        <Logo className="logo-size" />
        <div className="hidden md:flex items-center gap-8">
          <NavLinks className="gap-8" />
          <ResumeButton label={content.navigation.resume} />
        </div>
        <div className="md:hidden">
          <MobileNav />
        </div>
      </HeaderBar>
    </motion.header>
  );
}
