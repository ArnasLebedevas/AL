import { PERSONAL_SOCIALS } from "@/shared/constants/socials";
import Link from "next/link";

export default function Socials() {
  return (
  <div className="flex gap-6">
      {PERSONAL_SOCIALS.map((social) => (
        <Link
          key={social.path}
          href={social.path}
          aria-label={social.name}
          className="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:border-accent-hover hover:text-accent-hover transform transition duration-300 hover:-translate-y-1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <social.icon className="transition-transform duration-300 group-hover:-translate-y-1" />
        </Link>
      ))}
    </div>
  );
}
