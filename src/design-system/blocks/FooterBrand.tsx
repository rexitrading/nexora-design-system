import { Container } from "../primitives/Container";
import { NexoraLogo } from "../brand/NexoraLogo";

/** Minimal brand footer with column links. */
export function FooterBrand({
  columns = [],
  legal,
}: {
  columns?: { title: string; links: { label: string; href: string }[] }[];
  legal?: string;
}) {
  return (
    <footer className="border-t border-border bg-surface">
      <Container className="py-16">
        <div className="grid gap-12 lg:grid-cols-4">
          <div>
            <NexoraLogo />
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              Intelligent solutions. Limitless possibilities.
            </p>
          </div>
          {columns.map((c) => (
            <div key={c.title}>
              <div className="text-[10px] font-medium uppercase tracking-[0.25em] text-muted-foreground">
                {c.title}
              </div>
              <ul className="mt-4 space-y-2 text-sm">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="text-foreground/80 hover:text-foreground">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6 text-xs text-muted-foreground">
          <span>{legal ?? "© Nexora. All rights reserved."}</span>
          <span>v1.0 · Design System</span>
        </div>
      </Container>
    </footer>
  );
}
