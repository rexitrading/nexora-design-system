import type { ReactNode } from "react";
import { Container } from "../primitives/Container";
import { DisplayHeading } from "../primitives/DisplayHeading";
import { GridBackdrop } from "../primitives/GridBackdrop";

/** Full-bleed conversion section with gradient backdrop. */
export function CTASection({
  title,
  description,
  actions,
}: {
  title: ReactNode;
  description?: ReactNode;
  actions?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-y border-border">
      <GridBackdrop variant="mesh" />
      <Container className="relative py-24 text-center">
        <DisplayHeading level={2} className="mx-auto max-w-3xl">
          {title}
        </DisplayHeading>
        {description && (
          <p className="mx-auto mt-6 max-w-xl text-base text-muted-foreground">{description}</p>
        )}
        {actions && <div className="mt-10 flex flex-wrap justify-center gap-3">{actions}</div>}
      </Container>
    </section>
  );
}
