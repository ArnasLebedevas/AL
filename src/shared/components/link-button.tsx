import { Button, buttonVariants } from "@/shared/components/ui/button";
import { cn } from "@/lib/utils";
import type { VariantProps } from "class-variance-authority";

interface LinkButtonProps extends VariantProps<typeof buttonVariants> {
  href: string;
  label: string;
  external?: boolean;
  download?: boolean;
  className?: string;
}

export function LinkButton({
  href,
  label,
  external = false,
  download = false,
  variant = "outline",
  size = "default",
  className,
}: LinkButtonProps) {
  return (
    <a
      href={href}
      {...(external && {
        target: "_blank",
        rel: "noopener noreferrer",
      })}
      {...(download && { download: true })}
      className={cn("inline-flex", className)}
    >
      <Button variant={variant} size={size}>
        {label}
      </Button>
    </a>
  );
}
