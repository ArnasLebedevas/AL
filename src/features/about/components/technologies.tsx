import { TechnologyItem } from "./technology-item";

interface Props {
  technologies: string[];
}

export function Technologies({ technologies }: Props) {
  return (
    <ul className="mt-6 flex flex-wrap gap-y-2">
      {technologies.map((tech) => (
        <TechnologyItem key={tech} name={tech} />
      ))}
    </ul>
  );
}
