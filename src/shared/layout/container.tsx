import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { ContainerSize } from "@/shared/types";

interface Props {
  size: ContainerSize;
  children: ReactNode;
  className?: string;
}

export default function Container({ size, className, children }: Props) {
  return (
    <div className={cn(`mx-auto w-full px-7 container-${size}`, className)}>
      {children}
    </div>
  );
}
