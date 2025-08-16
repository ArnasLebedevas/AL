import Link from "next/link";
import { Button } from "../../shared/components/ui/button";
import { env } from "@/lib/env";
import BrandLogo from "../../shared/components/brand/brand-logo";
import { content } from "@/shared/constants/content";
import MobileNav from "./mobile-nav";
import { NavLinks } from "./nav-links";

export default function Header() {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <BrandLogo className="w-11 h-11 xl:w-15 xl:h-15" />
        <div className="hidden xl:flex items-center gap-8">
          <NavLinks />
          <Link href={`mailto:${env.contactEmail}`}>
            <Button>{content.navigation.contact}</Button>
          </Link>
        </div>
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
