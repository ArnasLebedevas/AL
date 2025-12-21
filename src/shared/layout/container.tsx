import clsx from "clsx";
import { ReactNode } from "react";
import { ContainerSize } from "./types";

interface Props {
  size: ContainerSize;
  className?: string;
  children: ReactNode;
}

export default function Container({ size, className, children }: Props) {
  return (
    <div className={clsx(`mx-auto w-full px-7 container-${size}`, className)}>
      {children}
    </div>
  );
}
