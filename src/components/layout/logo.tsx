import { content } from "@/constants/content";
import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href={content.navigation.home.path} className="flex items-center justify-center">
      <Image src="/logo.svg" alt="AL Logo" width={54} height={54} priority />
    </Link>
  );
}
