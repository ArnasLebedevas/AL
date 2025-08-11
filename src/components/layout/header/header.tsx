import Link from "next/link";
import { Button } from "../../ui/button";
import DesktopNav from "./desktop-nav";
import MobileNav from "./mobile-nav";
import { env } from "@/lib/env";
import Logo from "../logo";
import { content } from "@/constants/content";

export default function Header() {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Logo className="w-11 h-11 xl:w-15 xl:h-15" />
        <div className="hidden xl:flex items-center gap-8">
          <DesktopNav />
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
