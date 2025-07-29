import { SOCIALS } from "@/constants/socials";
import Link from "next/link";

interface Props {
  containerStyles: string;
  iconStyles: string;
}

export default function Social({ containerStyles, iconStyles }: Props) {
  return (
    <div className={containerStyles}>
      {SOCIALS.map((social) => (
        <Link key={social.path} href={social.path} className={iconStyles}>
          <social.icon />
        </Link>
      ))}
    </div>
  );
}
