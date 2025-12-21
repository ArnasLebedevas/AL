import { ProfileImage } from "@/shared/components/profile-image";

export function AboutProfileImage() {
  return (
    <ProfileImage
      src="/images/about.jpg"
      alt="Profile"
      sizes="(min-width: 1200px) 300px, 280px"
      sizeClassName="relative h-[280px] w-[280px] md:h-[300px] md:w-[300px]"
      className="relative z-10 h-full w-full rounded-md object-cover"
    >
      <div className="absolute -right-3 -bottom-3 h-full w-full rounded-md border-2 border-accent" />
    </ProfileImage>
  );
}
