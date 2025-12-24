import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "outline-none inline-flex items-center justify-center whitespace-nowrap rounded-[8px] text-base font-semibold ring-offset-white transition-colors cursor-pointer duration-300",
  {
    variants: {
      variant: {
        default: "bg-accent text-primary hover:bg-accent-hover",
        primary: "bg-primary text-white hover:bg-accent",
        outline:
          "border border-accent bg-transparent text-accent hover:border-accent-hover hover:text-accent-hover",
      },
      size: {
        default: "h-9 px-4 text-xs",
        lg: "xl:h-14 xl:px-8 h-12 px-6 text-sm uppercase tracking-[2px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
