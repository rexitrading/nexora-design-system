export type Stat = { value: string; label: string };

/** Horizontal numeric showcase strip. */
export function StatStrip({ stats }: { stats: Stat[] }) {
  return (
    <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((s) => (
        <div key={s.label} className="flex flex-col gap-1 bg-surface p-8">
          <div className="font-display text-4xl font-bold text-gradient-brand">{s.value}</div>
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{s.label}</div>
        </div>
      ))}
    </div>
  );
}
