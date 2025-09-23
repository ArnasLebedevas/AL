import { cn } from "@/lib/utils";

interface Props {
  number: string;
  title: string;
  hasDivider?: boolean;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  number,
  title,
  className,
  hasDivider = true,
  align = "left",
}: Props) {
  return (
    <div
      className={cn(
        "flex items-center gap-4",
        align === "center" && "justify-center text-center"
      )}
    >
      <h2 className={cn("text-xl font-semibold text-white", className)}>
        <span className="text-accent mr-2">{number}</span>
        {title}
      </h2>
      {hasDivider && align === "left" && (
        <div className="flex-grow border-t border-accent" />
      )}
    </div>
  );
}
