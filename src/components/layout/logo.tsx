import { content } from "@/constants/content";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href={content.navigation.home.path}>
      <h1 className="text-5xl font-semibold">
        AL<span className="text-accent">.</span>
      </h1>
    </Link>
  );
}
