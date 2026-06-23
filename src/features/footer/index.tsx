import { PERSONAL_SOCIALS } from "@/shared/constants/socials";
import Container from "@/shared/layout/container";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="py-8 border-t border-white/5">
      <Container size="lg">
        <div className="flex flex-col items-center gap-5">
          <div className="flex gap-5">
            {PERSONAL_SOCIALS.map((social) => (
              <Link
                key={social.path}
                href={social.path}
                aria-label={social.name}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-accent transition-colors duration-300"
              >
                <social.icon className="text-lg" />
              </Link>
            ))}
          </div>
          <p className="text-xs text-white/30 font-mono">
            Designed & Built by Arnas Lebedevas
          </p>
        </div>
      </Container>
    </footer>
  );
}
