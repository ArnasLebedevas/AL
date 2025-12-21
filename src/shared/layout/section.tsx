import clsx from "clsx";
import Container from "./container";
import { ReactNode } from "react";
import { ContainerSize } from "./types";

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
      className={clsx("section-padding", variant === "hero" && "section-hero")}
    >
      <Container size={size}>
        <div
          className={clsx(
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
