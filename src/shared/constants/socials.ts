import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { content } from "./content";
import { Social } from "@/shared/types";

export const PERSONAL_SOCIALS: Social[] = [
  { name: "GitHub", icon: FaGithub, path: content.socials.github },
  { name: "LinkedIn", icon: FaLinkedin, path: content.socials.linkedin },
  { name: "X (Twitter)", icon: FaXTwitter, path: content.socials.twitter },
];
