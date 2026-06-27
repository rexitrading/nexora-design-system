import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Brain, Cpu, Shield, Zap, Cloud, BarChart3 } from "lucide-react";
import {
  Hero,
  Section,
  SectionHeader,
  FeatureGrid,
  LogoCloud,
  StatStrip,
  CTASection,
  FooterBrand,
  NexoraMark,
  NexoraLogo,
  GradientText,
  Container,
  GlowOrb,
} from "@/design-system";

export const Route = createFileRoute("/showcase")({
  head: () => ({
    meta: [
      { title: "Showcase — Nexora Design System in action" },
      {
        name: "description",
        content:
          "A reference landing page composed entirely from @/design-system primitives and blocks.",
      },
      { property: "og:title", content: "Nexora Design System — Showcase" },
      {
        property: "og:description",
        content: "Drop-in primitives and blocks for fast, on-brand landing pages.",
      },
    ],
  }),
  component: Showcase,
});

function PrimaryCTA({ children }: { children: React.ReactNode }) {
  return (
    <button className="inline-flex items-center gap-1.5 rounded-full bg-gradient-brand px-5 py-2.5 text-sm font-medium text-white glow-purple transition-transform hover:scale-[1.03]">
      {children} <ArrowUpRight className="size-4" />
    </button>
  );
}

function GhostCTA({ children }: { children: React.ReactNode }) {
  return (
    <button className="inline-flex items-center gap-1.5 rounded-full border border-border-strong bg-white/[0.03] px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-white/[0.06]">
      {children}
    </button>
  );
}

function Showcase() {
  return (
    <div className="relative min-h-screen bg-background text-foreground antialiased">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <GlowOrb tone="purple" className="absolute -top-40 -left-40 animate-pulse-glow" />
        <GlowOrb
          tone="blue"
          className="absolute top-1/3 -right-40 animate-pulse-glow"
          size={450}
        />
      </div>

      <header className="sticky top-0 z-50 border-b border-border bg-background/70 backdrop-blur-xl">
        <Container className="flex items-center justify-between py-4">
          <NexoraLogo size="sm" />
          <nav className="hidden items-center gap-6 text-xs text-muted-foreground md:flex">
            <a href="#features" className="hover:text-foreground">Features</a>
            <a href="#stats" className="hover:text-foreground">Stats</a>
            <a href="/" className="hover:text-foreground">Brand book</a>
          </nav>
          <PrimaryCTA>Get started</PrimaryCTA>
        </Container>
      </header>

      <Hero
        eyebrow="Built on the Nexora Design System"
        title={
          <>
            Ship cinematic landing pages
            <br />
            <GradientText>in minutes, not days.</GradientText>
          </>
        }
        description="Every block on this page is imported from @/design-system. Compose primitives, swap tokens, keep the visual language consistent across every surface."
        actions={
          <>
            <PrimaryCTA>Start building</PrimaryCTA>
            <GhostCTA>View components</GhostCTA>
          </>
        }
        visual={
          <div className="relative aspect-square overflow-hidden rounded-2xl border border-border bg-surface">
            <div
              className="absolute inset-0"
              style={{ background: "var(--gradient-radial)" }}
            />
            <div className="grid-bg absolute inset-0 opacity-30" />
            <div className="relative flex h-full items-center justify-center">
              <NexoraMark className="size-40 animate-float-slow" />
            </div>
          </div>
        }
      />

      <Section bordered>
        <LogoCloud
          label="Trusted by teams shipping at frontier speed"
          logos={["Linear", "Vercel", "Stripe", "Runway", "ElevenLabs", "Synthesia"]}
        />
      </Section>

      <Section id="features">
        <SectionHeader eyebrow="What's inside" title="Primitives that compose">
          Eleven blocks and primitives engineered around the same tokens — drop them in, override
          props, ship.
        </SectionHeader>
        <FeatureGrid
          features={[
            { icon: Brain, title: "Intelligent defaults", description: "Sensible variants for tone, size, and backdrop powered by CSS tokens." },
            { icon: Zap, title: "Zero-config motion", description: "Float, pulse and shimmer keyframes baked into the global stylesheet." },
            { icon: Shield, title: "Type-safe props", description: "Every block exposes a strict API. No magic class strings." },
            { icon: Cpu, title: "Edge-ready", description: "SSR-friendly, no client-only globals, no runtime style injection." },
            { icon: Cloud, title: "One import surface", description: "Everything lives behind @/design-system. Refactors stay local." },
            { icon: BarChart3, title: "Design tokens", description: "OKLCH colors, Sora + Inter typography, signature gradient — all overridable." },
          ]}
        />
      </Section>

      <Section id="stats" bordered>
        <SectionHeader eyebrow="Numbers" title="Measured in milliseconds">
          The system is engineered for performance and consistency at every breakpoint.
        </SectionHeader>
        <StatStrip
          stats={[
            { value: "12+", label: "Reusable blocks" },
            { value: "3", label: "Backdrop variants" },
            { value: "100%", label: "Token-driven" },
            { value: "0ms", label: "Runtime style cost" },
          ]}
        />
      </Section>

      <CTASection
        title={<>Build your next launch on <GradientText>Nexora</GradientText></>}
        description="Fork this showcase, swap the copy, and you have a production landing page ready for review."
        actions={
          <>
            <PrimaryCTA>Open the brand book</PrimaryCTA>
            <GhostCTA>Read the docs</GhostCTA>
          </>
        }
      />

      <FooterBrand
        columns={[
          {
            title: "Product",
            links: [
              { label: "Components", href: "#" },
              { label: "Tokens", href: "#" },
              { label: "Templates", href: "#" },
            ],
          },
          {
            title: "Brand",
            links: [
              { label: "Brand book", href: "/" },
              { label: "Logo", href: "/" },
              { label: "Voice", href: "/" },
            ],
          },
          {
            title: "Resources",
            links: [
              { label: "Showcase", href: "/showcase" },
              { label: "Changelog", href: "#" },
              { label: "Support", href: "#" },
            ],
          },
        ]}
      />
    </div>
  );
}
