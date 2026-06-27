import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Container } from "./Container";

/** Vertical rhythm wrapper. Optional numbered header matches brand-book sections. */
export function Section({
  children,
  className,
  bordered = true,
  containerSize,
  ...rest
}: HTMLAttributes<HTMLElement> & {
  bordered?: boolean;
  containerSize?: "narrow" | "default" | "wide";
}) {
  return (
    <section
      className={cn("relative", bordered && "border-b border-border", className)}
      {...rest}
    >
      <Container size={containerSize} className="py-20 md:py-24">
        {children}
      </Container>
    </section>
  );
}

/** Numbered heading used at the top of each brand-book section. */
export function SectionHeader({
  num,
  eyebrow,
  title,
  children,
}: {
  num?: string;
  eyebrow?: string;
  title: ReactNode;
  children?: ReactNode;
}) {
  return (
    <div className="mb-10 flex items-start justify-between gap-6 border-b border-border pb-6">
      <div className="flex items-baseline gap-6">
        {num && (
          <span className="font-display text-6xl font-bold text-gradient-brand md:text-7xl">
            {num}
          </span>
        )}
        <div>
          {eyebrow && (
            <div className="text-[10px] font-medium uppercase tracking-[0.25em] text-muted-foreground">
              {eyebrow}
            </div>
          )}
          <h2 className="mt-1 font-display text-3xl font-semibold tracking-tight md:text-4xl">
            {title}
          </h2>
          {children && <div className="mt-3 max-w-2xl text-sm text-muted-foreground">{children}</div>}
        </div>
      </div>
      <div className="hidden items-center gap-1 pt-4 sm:flex">
        <div className="h-px w-4 bg-gradient-brand" />
        <div className="h-px w-6 bg-gradient-brand opacity-60" />
        <div className="h-px w-8 bg-gradient-brand opacity-30" />
      </div>
    </div>
  );
}
