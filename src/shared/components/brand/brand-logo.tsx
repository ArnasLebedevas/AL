import { content } from "@/shared/constants/content";
import Link from "next/link";
import Logo from "../../icons/logo";

interface Props {
  className: string;
}

export default function BrandLogo({ className }: Props) {
  return (
    <Link
      href={content.navigation.home.path}
      className="flex items-center justify-center"
    >
      <Logo className={className} />
    </Link>
  );
}
