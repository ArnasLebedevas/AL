import { Social } from "@/shared/constants/socials";
import Link from "next/link";

interface Props {
  data: Social[];
}

export default function Socials({ data }: Props) {
  return (
    <div className="flex gap-6">
      {data.map((social) => (
        <Link
          key={social.path}
          href={social.path}
          className="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary duration-300"
          target="_blank"
        >
          <social.icon />
        </Link>
      ))}
    </div>
  );
}
