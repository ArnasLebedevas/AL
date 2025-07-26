import Social from "@/components/sections/social";
import { Button } from "@/components/ui/button";
import { IoMdDownload } from "react-icons/io";

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div>
            <span>Software Developer</span>
            <h1>
              Hello I&apos;m <br />{" "}
              <span className="text-accent">Arnas Lebedevas</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I&apos;m a software developer with a passion for creating
              innovative solutions.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-2">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <span>Download CV</span>
                <IoMdDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social />
              </div>
            </div>
          </div>
          <div>photo</div>
        </div>
      </div>
    </section>
  );
}
