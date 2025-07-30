import Link from "next/link";
import { Button } from "../../ui/button";
import { ROUTES } from "@/constants/app-routes";
import DesktopNav from "./desktop-nav";
import MobileNav from "./mobile-nav";

export default function Header() {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          href={ROUTES.HOME}
          className="text-5xl font-semibold flex items-center gap-2"
        >
          <span>AL<span className="text-accent">.</span></span>
        </Link>
        <div className="hidden xl:flex items-center gap-8">
          <DesktopNav />
          <Link href={ROUTES.CONTACT}>
            <Button>Contact me</Button>
          </Link>
        </div>
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
