import { content } from "@/shared/constants/content";

export function Technologies() {
  return (
    <ul className="mt-6 flex flex-wrap gap-y-2 text-xs xl:text-sm text-white/80">
      {content.about.technologies.map((tech) => (
        <li
          key={tech}
          className="flex basis-1/2 items-center gap-2 before:content-['▹'] before:text-accent before:text-lg"
        >
          {tech}
        </li>
      ))}
    </ul>
  );
}
