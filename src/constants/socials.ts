import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

interface SocialLink {
  icon: React.ComponentType;
  path: string;
}

export const SOCIALS: SocialLink[] = [
  { icon: FaGithub, path: "test1" },
  {
    icon: FaLinkedin,
    path: "test2",
  },
  { icon: FaTwitter, path: "test3" },
];
