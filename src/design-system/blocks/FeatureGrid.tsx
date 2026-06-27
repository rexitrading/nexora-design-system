import type { ComponentType, ReactNode } from "react";
import { cn } from "@/lib/utils";

export type Feature = {
  icon?: ComponentType<{ className?: string }>;
  title: string;
  description: ReactNode;
};

/** Responsive feature grid. Defaults to 3 columns. */
export function FeatureGrid({
  features,
  columns = 3,
  className,
}: {
  features: Feature[];
  columns?: 2 | 3 | 4;
  className?: string;
}) {
  const cols = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-3",
    4: "md:grid-cols-2 lg:grid-cols-4",
  }[columns];
  return (
    <div className={cn("grid gap-4", cols, className)}>
      {features.map((f) => (
        <div
          key={f.title}
          className="group relative overflow-hidden rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-border-strong"
        >
          {f.icon && (
            <div className="mb-5 inline-flex size-10 items-center justify-center rounded-lg border border-border bg-background">
              <f.icon className="size-5 text-primary" />
            </div>
          )}
          <div className="font-display text-lg font-semibold">{f.title}</div>
          <p className="mt-2 text-sm text-muted-foreground">{f.description}</p>
        </div>
      ))}
    </div>
  );
}
