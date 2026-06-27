import { useId } from "react";
import { cn } from "@/lib/utils";

type Mono = "white" | "dark";

/** The slanted-N brand mark. Use `monochrome` for single-color treatments. */
export function NexoraMark({
  className,
  monochrome,
}: {
  className?: string;
  monochrome?: Mono;
}) {
  const id = useId();
  const stops =
    monochrome === "white"
      ? [["0%", "#ffffff"], ["100%", "#ffffff"]]
      : monochrome === "dark"
        ? [["0%", "#000F14"], ["100%", "#000F14"]]
        : [["0%", "#7A4DFF"], ["50%", "#5A3DFF"], ["100%", "#2962FF"]];
  return (
    <svg viewBox="0 0 80 80" fill="none" className={className} aria-hidden>
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
          {stops.map(([o, c]) => (
            <stop key={o} offset={o} stopColor={c} />
          ))}
        </linearGradient>
      </defs>
      <path d="M14 68 L26 12 L40 12 L28 68 Z" fill={`url(#${id})`} opacity="0.95" />
      <path d="M44 12 L66 12 L52 68 L30 68 Z" fill={`url(#${id})`} opacity="0.7" />
      <path d="M28 68 L60 12 L66 12 L34 68 Z" fill={`url(#${id})`} opacity="1" />
    </svg>
  );
}

/** Mark + wordmark lockup. */
export function NexoraLogo({
  className,
  monochrome,
  size = "md",
}: {
  className?: string;
  monochrome?: Mono;
  size?: "sm" | "md" | "lg";
}) {
  const ms = { sm: "size-6", md: "size-10", lg: "size-14" }[size];
  const ts = { sm: "text-sm", md: "text-2xl", lg: "text-3xl" }[size];
  const color =
    monochrome === "white"
      ? "text-white"
      : monochrome === "dark"
        ? "text-background"
        : "text-foreground";
  return (
    <div className={cn("inline-flex items-center gap-3", className)}>
      <NexoraMark className={ms} monochrome={monochrome} />
      <span className={cn("font-display font-bold tracking-[0.2em]", ts, color)}>NEXORA</span>
    </div>
  );
}
