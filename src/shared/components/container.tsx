import clsx from "clsx";
import { ReactNode } from "react";

interface Props {
  size: "sm" | "md" | "lg";
  className?: string;
  children: ReactNode;
}

const sizes = {
  sm: "max-w-3xl",
  md: "max-w-5xl",
  lg: "max-w-[1350px]",
};

export default function Container({ size, className, children }: Props) {
  return (
    <div className={clsx(`mx-auto w-full px-7 ${sizes[size]}`, className)}>
      {children}
    </div>
  );
}
