import SpinningCircle from "@/features/animations/components/spinning-circle";
import { ProfileImage } from "@/shared/components/profile-image";
import FadeInUp from "@/features/animations/components/fade-in-up";

export function HeroImage() {
  return (
    <FadeInUp delay={0.3} className="order-1 md:order-none mb-8 md:mb-0">
      <ProfileImage
        alt="Profile"
        src="/images/profile.png"
        sizes="(min-width: 1200px) 498px, 289px"
        sizeClassName="hero-image-size"
        className="object-contain rounded-full"
      >
        <SpinningCircle />
      </ProfileImage>
    </FadeInUp>
  );
}
