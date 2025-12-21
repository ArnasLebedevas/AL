interface Props {
  name: string;
}

export function TechnologyItem({ name }: Props) {
  return (
    <li className="body-md flex basis-1/2 items-center gap-2 before:content-['▹'] before:text-accent before:text-lg">
      {name}
    </li>
  );
}
