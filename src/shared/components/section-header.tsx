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
        "flex items-center gap-4 mb-8 md:mb-12",
        align === "center" && "justify-center text-center mb-5!"
      )}
    >
      <h2 className={cn("heading-lg", className)}>
        <span className="text-accent mr-2">{number}</span>
        {title}
      </h2>
      {hasDivider && align === "left" && (
        <div className="flex-grow border-t border-accent/20" />
      )}
    </div>
  );
}
