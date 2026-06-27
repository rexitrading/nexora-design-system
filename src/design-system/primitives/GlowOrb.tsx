import { cn } from "@/lib/utils";

/** Ambient blurred orb used for cinematic background lighting. */
export function GlowOrb({
  tone = "purple",
  className,
  size = 500,
}: {
  tone?: "purple" | "blue" | "mint";
  className?: string;
  size?: number;
}) {
  const bg = {
    purple: "bg-primary/25",
    blue: "bg-neon/20",
    mint: "bg-cyan-accent/20",
  }[tone];
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none rounded-full blur-[140px]", bg, className)}
      style={{ width: size, height: size }}
    />
  );
}
