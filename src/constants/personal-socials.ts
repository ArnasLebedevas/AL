import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { IconType } from "react-icons";

export interface Social {
  icon: IconType;
  path: string;
}

export const PERSONAL_SOCIALS: Social[] = [
  { icon: FaGithub, path: "test1" },
  {
    icon: FaLinkedin,
    path: "test2",
  },
  { icon: FaTwitter, path: "test3" },
];
