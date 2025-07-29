import InfiniteIconSlider from "@/components/animations/infinite-carousel";
import ProfileImage from "@/components/layout/profile-image";
import Social from "@/components/layout/social";
import Statistics from "@/components/layout/statistics";
import { Button } from "@/components/ui/button";
import { TECHNOLOGIES } from "@/constants/technologies";
import { IoMdDownload } from "react-icons/io";

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <div className="mb-4">Software Developer</div>
            <h1 className="mb-4">
              Hello I&apos;m <br />
              <span className="text-accent">Arnas Lebedevas</span>
            </h1>
            <p className="max-w-[500px]  text-white/80 mb-7">
              I&apos;m a software developer with a passion for creating
              innovative solutions.
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
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary"
                />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <ProfileImage />
          </div>
        </div>
      </div>
      <div className="pb-32">
        <Statistics />
      </div>
      <InfiniteIconSlider items={TECHNOLOGIES} />
    </section>
  );
}
