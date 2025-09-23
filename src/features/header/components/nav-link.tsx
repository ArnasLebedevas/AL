import clsx from "clsx";
import { scrollToSection } from "../utils/scroll-to-section";

interface Props {
  id: string;
  name: string;
  number: string;
  className?: string;
  onClick?: () => void;
}

export default function NavLink({ id, name, number, className, onClick }: Props) {
  return (
    <a
      href={`#${id}`}
      onClick={() => {
        scrollToSection(id);
        onClick?.();
      }}
      className={clsx(
        "flex items-center gap-1 text-[12px] font-medium capitalize transition-colors",
        "hover:text-accent",
        className
      )}
    >
      <span className="text-accent font-semibold">{number}</span>
      <span>{name}</span>
    </a>
  );
}
