import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

/** Small uppercase tracked label used above headings. */
export function Eyebrow({ className, ...rest }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "text-[10px] font-medium uppercase tracking-[0.3em] text-muted-foreground",
        className,
      )}
      {...rest}
    />
  );
}
