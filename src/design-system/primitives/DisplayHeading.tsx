import type { HTMLAttributes, ElementType } from "react";
import { cn } from "@/lib/utils";

type Level = 1 | 2 | 3 | 4;
const sizes: Record<Level, string> = {
  1: "text-5xl md:text-7xl font-bold leading-[0.95]",
  2: "text-4xl md:text-5xl font-semibold",
  3: "text-2xl md:text-3xl font-semibold",
  4: "text-xl md:text-2xl font-medium",
};

/** Sora display headline with consistent tracking. */
export function DisplayHeading({
  level = 2,
  as,
  className,
  ...rest
}: HTMLAttributes<HTMLHeadingElement> & { level?: Level; as?: ElementType }) {
  const Tag = (as ?? (`h${level}` as ElementType));
  return (
    <Tag
      className={cn(
        "font-display tracking-tight text-foreground",
        sizes[level],
        className,
      )}
      {...rest}
    />
  );
}
