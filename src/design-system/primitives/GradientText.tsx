import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

/** Inline text painted with the signature brand gradient. */
export function GradientText({ className, ...rest }: HTMLAttributes<HTMLSpanElement>) {
  return <span className={cn("text-gradient-brand", className)} {...rest} />;
}
