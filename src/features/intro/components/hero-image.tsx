import SpinningCircle from "@/features/animations/components/spinning-circle";
import { ProfileImage } from "@/shared/components/profile-image";

export function HeroImage() {
  return (
    <div className="order-1 md:order-none mb-8 md:mb-0">
      <ProfileImage
        alt="Profile"
        src="/images/profile.png"
        sizes="(min-width: 1200px) 498px, 289px"
        sizeClassName="hero-image-size"
        className="object-contain rounded-full"
      >
        <SpinningCircle />
      </ProfileImage>
    </div>
  );
}
