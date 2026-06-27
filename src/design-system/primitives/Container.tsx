import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

/** 12-col max-width container with consistent gutters. */
export function Container({
  className,
  size = "default",
  ...rest
}: HTMLAttributes<HTMLDivElement> & { size?: "narrow" | "default" | "wide" }) {
  const sizes = {
    narrow: "max-w-4xl",
    default: "max-w-7xl",
    wide: "max-w-[88rem]",
  };
  return <div className={cn("mx-auto px-6", sizes[size], className)} {...rest} />;
}
