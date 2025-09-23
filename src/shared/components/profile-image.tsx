import Image from "next/image";
import { ReactNode } from "react";

interface ProfileImageProps {
  src: string;
  alt: string;
  sizes: string;
  sizeClassName: string;
  children: ReactNode;
  className: string;
}

export function ProfileImage({
  src,
  alt,
  sizes,
  className,
  sizeClassName,
  children,
}: ProfileImageProps) {
  return (
    <div className="relative">
      <div className={sizeClassName}>
        <Image
          src={src}
          alt={alt}
          fill
          priority
          sizes={sizes}
          className={className}
        />
      </div>
      {children}
    </div>
  );
}
