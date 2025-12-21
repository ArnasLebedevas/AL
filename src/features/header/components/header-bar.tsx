import Container from "@/shared/layout/container";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export function HeaderBar({ children }: Props) {
  return (
    <Container size="lg">
      <div className="header-bar">{children}</div>
    </Container>
  );
}
