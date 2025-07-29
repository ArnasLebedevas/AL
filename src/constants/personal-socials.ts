import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IconType } from "react-icons";
import { FaXTwitter } from "react-icons/fa6";
import { content } from "./content";

export interface Social {
  icon: IconType;
  path: string;
}

export const PERSONAL_SOCIALS: Social[] = [
  { icon: FaGithub, path: content.socials.github },
  { icon: FaLinkedin, path: content.socials.linkedin },
  { icon: FaXTwitter, path: content.socials.twitter },
];
