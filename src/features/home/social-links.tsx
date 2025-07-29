import Socials from "@/components/layout/socials";
import { PERSONAL_SOCIALS } from "@/constants/personal-socials";

export default function SocialLinks() {
  return (
    <div className="mb-8 xl:mb-0">
      <Socials
        data={PERSONAL_SOCIALS}
        containerStyles="flex gap-6"
        iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary"
      />
    </div>
  );
}
