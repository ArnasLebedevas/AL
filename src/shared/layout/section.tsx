import { cn } from "@/lib/utils";
import Container from "./container";
import { ReactNode } from "react";
import { ContainerSize } from "@/shared/types";

type SectionLayout = "stack" | "split";
type SectionAlign = "start" | "center";
type SectionVariant = "default" | "hero";

interface Props {
  id?: string;
  children: ReactNode;
  size?: ContainerSize;
  layout?: SectionLayout;
  align?: SectionAlign;
  variant?: SectionVariant;
  className?: string;
}

export function Section({
  id,
  children,
  size = "md",
  layout = "stack",
  align = "start",
  variant = "default",
}: Props) {
  return (
    <section
      id={id}
      className={cn("section-padding", variant === "hero" && "section-hero")}
    >
      <Container size={size}>
        <div
          className={cn(
            "section-inner",
            layout === "split" && "section-split",
            align === "center" && "section-center"
          )}
        >
          {children}
        </div>
      </Container>
    </section>
  );
}
