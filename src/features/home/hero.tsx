import ProfileImage from "@/components/layout/profile-image";
import { Button } from "@/components/ui/button";
import { IoMdDownload } from "react-icons/io";
import SocialLinks from "./social-links";

export default function Hero() {
  return (
    <div className="container mx-auto h-full">
      <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
        <div className="text-center xl:text-left order-2 xl:order-none">
          <div className="mb-4">Software Developer</div>
          <h1 className="mb-4">
            Hello I&apos;m <br />
            <span className="text-accent">Arnas Lebedevas</span>
          </h1>
          <p className="max-w-[500px] text-white/80 mb-7">
            I&apos;m a software developer with a passion for creating innovative
            solutions.
          </p>
          <div className="flex flex-col xl:flex-row items-center gap-5">
            <Button
              variant="outline"
              size="lg"
              className="uppercase flex items-center gap-2"
            >
              <span>Download CV</span>
              <IoMdDownload className="text-xl" />
            </Button>
            <SocialLinks />
          </div>
        </div>
        <div className="order-1 xl:order-none mb-8 xl:mb-0">
          <ProfileImage />
        </div>
      </div>
    </div>
  );
}
