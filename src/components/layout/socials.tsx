import { Social } from "@/constants/personal-socials";
import Link from "next/link";

interface Props {
  data: Social[];
  containerStyles: string;
  iconStyles: string;
}

export default function Socials({ containerStyles, iconStyles, data }: Props) {
  return (
    <div className={containerStyles}>
      {data.map((social) => (
        <Link key={social.path} href={social.path} className={iconStyles}>
          <social.icon />
        </Link>
      ))}
    </div>
  );
}
