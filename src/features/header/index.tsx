"use client";

import { content } from "@/shared/constants/content";
import MobileNav from "./components/mobile-nav";
import { NavLinks } from "./components/nav-links";
import { motion } from "framer-motion";
import { useScrollDirection } from "@/features/header/hooks/use-scroll-direction.";
import Logo from "@/shared/icons/logo";
import Container from "@/shared/components/container";
import ResumeButton from "./components/resume-button";
import { headerMotion } from "../animations/config/motion";

export default function Header() {
  const isHeaderVisible = useScrollDirection();

  return (
    <motion.header
      {...headerMotion}
      animate={isHeaderVisible ? headerMotion.animate : headerMotion.exit}
      className="fixed top-0 z-[11] w-full bg-primary/10 backdrop-blur-md text-white"
    >
      <Container
        size="lg"
        className="flex justify-between items-center h-[80px]"
      >
        <Logo className="w-11 h-11 xl:w-12 xl:h-12" />
        <div className="hidden xl:flex items-center gap-8">
          <NavLinks className="gap-8" />
          <ResumeButton label={content.navigation.resume} />
        </div>
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </Container>
    </motion.header>
  );
}
