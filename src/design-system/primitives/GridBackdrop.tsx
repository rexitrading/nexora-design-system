import { cn } from "@/lib/utils";
import { gradients } from "../tokens";

/** Full-bleed background variants for hero/feature sections. */
export function GridBackdrop({
  variant = "grid",
  className,
}: {
  variant?: "grid" | "mesh" | "radial" | "solid";
  className?: string;
}) {
  if (variant === "solid") {
    return <div aria-hidden className={cn("absolute inset-0 bg-background", className)} />;
  }
  if (variant === "radial") {
    return (
      <div
        aria-hidden
        className={cn("absolute inset-0", className)}
        style={{ background: gradients.hero }}
      />
    );
  }
  if (variant === "mesh") {
    return (
      <div aria-hidden className={cn("absolute inset-0", className)}>
        <div className="absolute inset-0" style={{ background: gradients.radial, opacity: 0.4 }} />
        <div className="grid-bg absolute inset-0 opacity-30" />
      </div>
    );
  }
  return <div aria-hidden className={cn("grid-bg absolute inset-0 opacity-40", className)} />;
}
