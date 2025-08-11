import { content } from "@/constants/content";
import Link from "next/link";
import Image from "next/image";

interface Props {
  className: string;
}

export default function Logo({ className }: Props) {
  return (
    <Link
      href={content.navigation.home.path}
      className="flex items-center justify-center"
    >
      <div className={`relative ${className}`}>
        <Image
          src="/logo.svg"
          alt="AL Logo"
          fill
          className="object-contain"
          priority
        />
      </div>
    </Link>
  );
}
