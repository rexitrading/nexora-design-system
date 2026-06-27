import type { ReactNode } from "react";
import { Container } from "../primitives/Container";
import { GridBackdrop } from "../primitives/GridBackdrop";
import { Eyebrow } from "../primitives/Eyebrow";
import { DisplayHeading } from "../primitives/DisplayHeading";

/**
 * Cinematic hero. Slot `visual` for the right-side artwork; defaults to a
 * mesh backdrop. Use `actions` for CTAs.
 */
export function Hero({
  eyebrow,
  title,
  description,
  actions,
  visual,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  actions?: ReactNode;
  visual?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <GridBackdrop variant="grid" />
      <GridBackdrop variant="radial" />
      <Container className="relative grid gap-12 py-24 lg:grid-cols-2 lg:py-32">
        <div className="flex flex-col justify-center">
          {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
          <DisplayHeading level={1} className="mt-6">
            {title}
          </DisplayHeading>
          {description && (
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">{description}</p>
          )}
          {actions && <div className="mt-8 flex flex-wrap gap-3">{actions}</div>}
        </div>
        {visual && <div className="relative">{visual}</div>}
      </Container>
    </section>
  );
}
