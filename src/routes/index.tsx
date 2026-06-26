import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Check, Copy, Sparkles, Layers, Type, Palette, Grid3x3,
  Zap, Hexagon, Box, Cpu, Shield, Rocket, ArrowUpRight,
  Circle, Square, Triangle, Minus
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nexus — AI Brand System & Design Guidelines" },
      { name: "description", content: "Complete brand identity, design tokens, typography, color system and motion language for the Nexus AI platform." },
      { property: "og:title", content: "Nexus — AI Brand System" },
      { property: "og:description", content: "Futuristic premium AI SaaS branding kit. Dark mode design system with electric purple gradients." },
    ],
  }),
  component: BrandKit,
});

const colors = [
  { name: "Deep Black", hex: "#03040C", role: "Primary background", token: "background" },
  { name: "Night Blue", hex: "#0A0D1E", role: "Elevated surfaces", token: "surface" },
  { name: "Brand Purple", hex: "#6A3DFF", role: "Identity / Primary", token: "primary" },
  { name: "Electric Violet", hex: "#7D4DFF", role: "Highlights / Hover", token: "electric" },
  { name: "Neon Blue", hex: "#3268FF", role: "Gradients / Links", token: "neon" },
  { name: "Cyan Pulse", hex: "#2EC6D3", role: "Supporting accent", token: "cyan-accent" },
  { name: "Ice White", hex: "#F2F4F7", role: "Typography", token: "foreground" },
  { name: "Cloud Grey", hex: "#D8D8DE", role: "Light surfaces", token: "muted-foreground" },
];

const tokens = {
  radius: [
    { name: "sm", value: "6px" },
    { name: "md", value: "12px" },
    { name: "lg", value: "20px" },
    { name: "xl", value: "28px" },
  ],
  spacing: ["8", "16", "24", "32", "48", "64"],
};

function CopyBtn({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={() => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 1400);
      }}
      className="inline-flex items-center gap-1.5 rounded-md border border-border bg-white/[0.03] px-2 py-1 text-[10px] font-medium uppercase tracking-wider text-muted-foreground transition-colors hover:border-border-strong hover:text-foreground"
    >
      {copied ? <Check className="size-3" /> : <Copy className="size-3" />}
      {copied ? "Copied" : text}
    </button>
  );
}

function SectionLabel({ num, children }: { num: string; children: React.ReactNode }) {
  return (
    <div className="mb-6 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
      <span className="text-gradient-brand font-mono">{num}</span>
      <span className="h-px w-8 bg-border" />
      {children}
    </div>
  );
}

function NexusMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden>
      <defs>
        <linearGradient id="nx-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#7A3EFF" />
          <stop offset="50%" stopColor="#5A5EFF" />
          <stop offset="100%" stopColor="#2D8CFF" />
        </linearGradient>
      </defs>
      <path
        d="M14 50 V14 L32 32 L50 14 V50"
        stroke="url(#nx-grad)"
        strokeWidth="6"
        strokeLinecap="square"
        strokeLinejoin="miter"
        fill="none"
      />
      <circle cx="32" cy="32" r="3" fill="url(#nx-grad)" />
    </svg>
  );
}

function BrandKit() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      {/* ambient glows */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-primary/20 blur-[120px] animate-pulse-glow" />
        <div className="absolute top-1/3 -right-40 h-[400px] w-[400px] rounded-full bg-neon/20 blur-[120px] animate-pulse-glow" style={{ animationDelay: "2s" }} />
      </div>

      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2.5">
            <NexusMark className="size-7" />
            <span className="font-display text-sm font-semibold tracking-tight">Nexus</span>
            <span className="hidden text-xs text-muted-foreground sm:inline">/ Brand System v1.0</span>
          </div>
          <nav className="hidden items-center gap-7 text-xs text-muted-foreground md:flex">
            <a href="#colors" className="transition-colors hover:text-foreground">Color</a>
            <a href="#typography" className="transition-colors hover:text-foreground">Type</a>
            <a href="#logo" className="transition-colors hover:text-foreground">Logo</a>
            <a href="#components" className="transition-colors hover:text-foreground">Components</a>
            <a href="#social" className="transition-colors hover:text-foreground">Social</a>
            <a href="#tokens" className="transition-colors hover:text-foreground">Tokens</a>
          </nav>
          <button className="inline-flex items-center gap-1.5 rounded-full bg-gradient-brand px-4 py-2 text-xs font-medium text-white glow-purple transition-transform hover:scale-105">
            Download Kit <ArrowUpRight className="size-3.5" />
          </button>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="grid-bg absolute inset-0 opacity-40" />
        <div className="relative mx-auto max-w-7xl px-6 py-28 md:py-40">
          <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
            <Sparkles className="size-3.5 text-primary" />
            The Nexus AI Brand System
          </div>
          <h1 className="mt-8 font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl lg:text-8xl">
            A design system for <br />
            <span className="text-gradient-brand">intelligent software.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Visual identity, motion language, and engineering tokens for building premium B2B AI products.
            Built for clarity. Tuned for trust. Engineered for the future.
          </p>
          <div className="mt-12 flex flex-wrap gap-3">
            {["Futuristic", "Premium", "Minimal", "Technological", "Human-Centric", "B2B AI"].map(t => (
              <span key={t} className="rounded-full border border-border bg-white/[0.03] px-3.5 py-1.5 text-xs text-muted-foreground">
                {t}
              </span>
            ))}
          </div>

          {/* hero artwork */}
          <div className="mt-20 grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              { icon: Cpu, label: "Intelligence" },
              { icon: Shield, label: "Reliability" },
              { icon: Rocket, label: "Velocity" },
              { icon: Sparkles, label: "Craft" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="group relative overflow-hidden rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-border-strong">
                <div className="absolute -right-6 -top-6 size-24 rounded-full bg-primary/10 blur-2xl transition-opacity group-hover:opacity-100" />
                <Icon className="size-5 text-primary" strokeWidth={1.5} />
                <div className="mt-12 text-sm font-medium">{label}</div>
                <div className="mt-1 text-xs text-muted-foreground">core principle</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 01 — POSITIONING */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <SectionLabel num="01">Positioning</SectionLabel>
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <h2 className="font-display text-4xl font-semibold leading-tight md:text-5xl">
                Built for the <span className="text-gradient-brand">enterprise AI era.</span>
              </h2>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                Nexus speaks the language of cinematic technology — restrained, geometric, deeply confident.
                Every surface is dark, deliberate, and engineered to make complex intelligence feel calm.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
              {[
                { k: "We are", v: "Innovative · Reliable · Intelligent · Future-Ready" },
                { k: "We are not", v: "Loud · Playful · Trend-chasing · Vague" },
                { k: "Voice", v: "Expert consultant. Senior engineer. Trusted partner." },
                { k: "Audience", v: "CTOs, ML teams, product leaders at scaling companies." },
              ].map(({ k, v }) => (
                <div key={k} className="rounded-xl border border-border bg-surface p-5">
                  <div className="text-[10px] font-medium uppercase tracking-[0.2em] text-primary">{k}</div>
                  <div className="mt-3 text-sm leading-relaxed text-foreground/90">{v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 02 — COLOR */}
      <section id="colors" className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <SectionLabel num="02"><Palette className="size-3.5" /> Color architecture</SectionLabel>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <h2 className="font-display text-4xl font-semibold md:text-5xl">The palette</h2>
            <p className="max-w-md text-sm text-muted-foreground">
              Deep black grounds the system. Electric purple carries identity. Neon blue extends gradients.
              Cyan and ice white finish the spectrum.
            </p>
          </div>

          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {colors.map(c => (
              <div key={c.hex} className="group overflow-hidden rounded-2xl border border-border bg-surface transition-colors hover:border-border-strong">
                <div className="relative h-32" style={{ backgroundColor: c.hex }}>
                  {c.hex === "#03040C" || c.hex === "#0A0D1E" ? (
                    <div className="grid-bg absolute inset-0 opacity-50" />
                  ) : null}
                </div>
                <div className="space-y-2 p-4">
                  <div className="flex items-center justify-between">
                    <div className="font-display text-sm font-semibold">{c.name}</div>
                    <CopyBtn text={c.hex} />
                  </div>
                  <div className="text-xs text-muted-foreground">{c.role}</div>
                  <div className="font-mono text-[10px] text-muted-foreground/70">--{c.token}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Gradient feature */}
          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            <div className="relative h-64 overflow-hidden rounded-2xl border border-border lg:col-span-2">
              <div className="absolute inset-0 bg-gradient-brand" />
              <div className="absolute inset-0 grid-bg opacity-20" />
              <div className="relative flex h-full flex-col justify-between p-6">
                <div className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/80">Signature gradient</div>
                <div>
                  <div className="font-display text-2xl font-semibold text-white">Aurora Pulse</div>
                  <code className="mt-2 block font-mono text-[11px] text-white/70">
                    linear-gradient(90deg, #7A3EFF, #5A5EFF, #2D8CFF)
                  </code>
                </div>
              </div>
            </div>
            <div className="relative h-64 overflow-hidden rounded-2xl border border-border bg-surface">
              <div className="absolute inset-0" style={{ background: "var(--gradient-radial)" }} />
              <div className="relative flex h-full flex-col justify-between p-6">
                <div className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/80">Radial glow</div>
                <div className="font-display text-2xl font-semibold">Neural Halo</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 03 — TYPOGRAPHY */}
      <section id="typography" className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <SectionLabel num="03"><Type className="size-3.5" /> Typography</SectionLabel>

          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border border-border bg-surface p-8">
              <div className="flex items-center justify-between">
                <div className="text-[10px] font-medium uppercase tracking-[0.2em] text-primary">Display · Headlines</div>
                <CopyBtn text="Sora" />
              </div>
              <div className="font-display text-[120px] font-bold leading-none tracking-tighter">Aa</div>
              <div className="mt-2 font-display text-2xl font-semibold">Sora</div>
              <p className="mt-3 text-sm text-muted-foreground">
                Geometric, technological, modern. The voice of headlines and identity moments.
              </p>
              <div className="mt-6 flex flex-wrap gap-2 text-[10px] uppercase text-muted-foreground">
                {["300", "400", "500", "600", "700", "800"].map(w => (
                  <span key={w} className="rounded border border-border px-2 py-1 font-mono">{w}</span>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-surface p-8">
              <div className="flex items-center justify-between">
                <div className="text-[10px] font-medium uppercase tracking-[0.2em] text-primary">Body · Interface</div>
                <CopyBtn text="Inter" />
              </div>
              <div className="text-[120px] font-medium leading-none tracking-tight" style={{ fontFamily: "Inter" }}>Aa</div>
              <div className="mt-2 text-2xl font-medium" style={{ fontFamily: "Inter" }}>Inter</div>
              <p className="mt-3 text-sm text-muted-foreground">
                Optimized for screens and density. Carries documentation, UI, dashboards, microcopy.
              </p>
              <div className="mt-6 flex flex-wrap gap-2 text-[10px] uppercase text-muted-foreground">
                {["300", "400", "500", "600"].map(w => (
                  <span key={w} className="rounded border border-border px-2 py-1 font-mono">{w}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Hierarchy */}
          <div className="mt-12 overflow-hidden rounded-2xl border border-border bg-surface">
            <div className="border-b border-border px-8 py-4 text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Type scale
            </div>
            <div className="divide-y divide-border">
              {[
                { label: "H1 · Display", size: "text-6xl md:text-7xl", weight: "font-bold", class: "font-display", sample: "Build the future." },
                { label: "H2 · Section", size: "text-4xl", weight: "font-semibold", class: "font-display", sample: "Intelligent systems" },
                { label: "H3 · Subhead", size: "text-2xl", weight: "font-medium", class: "font-display text-primary", sample: "Composable by design" },
                { label: "Lead", size: "text-lg", weight: "font-normal", class: "", sample: "A measured introduction that sets context without overstating." },
                { label: "Body", size: "text-base", weight: "font-normal", class: "text-muted-foreground", sample: "Documentation paragraph at the default reading size, generous in line-height." },
                { label: "Caption", size: "text-xs", weight: "font-medium uppercase tracking-[0.2em]", class: "text-muted-foreground", sample: "Metadata · Label · Eyebrow" },
              ].map(row => (
                <div key={row.label} className="grid grid-cols-12 items-center gap-6 px-8 py-6">
                  <div className="col-span-3 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{row.label}</div>
                  <div className={`col-span-9 ${row.size} ${row.weight} ${row.class}`}>{row.sample}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 04 — LOGO */}
      <section id="logo" className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <SectionLabel num="04"><Hexagon className="size-3.5" /> Logo system</SectionLabel>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-4xl font-semibold md:text-5xl">The Nexus mark.</h2>
              <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
                Constructed from 45° diagonals, hard corners, and a single neural pulse at the intersection.
                It scales from favicon to billboard with no loss of intent.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  { label: "Construction", v: "45° angles only" },
                  { label: "Clear space", v: "= 1 stroke width" },
                  { label: "Minimum size", v: "16px digital" },
                  { label: "Color modes", v: "Gradient · Mono · Inverted" },
                ].map(i => (
                  <div key={i.label} className="rounded-xl border border-border bg-surface p-4">
                    <div className="text-[10px] font-medium uppercase tracking-[0.2em] text-primary">{i.label}</div>
                    <div className="mt-2 text-sm">{i.v}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex aspect-square flex-col items-center justify-center rounded-2xl border border-border bg-surface p-8">
                <NexusMark className="size-32" />
                <div className="mt-6 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Primary mark</div>
              </div>
              <div className="flex aspect-square flex-col items-center justify-center rounded-2xl border border-border" style={{ background: "var(--gradient-brand)" }}>
                <svg viewBox="0 0 64 64" fill="none" className="size-32">
                  <path d="M14 50 V14 L32 32 L50 14 V50" stroke="white" strokeWidth="6" strokeLinejoin="miter" fill="none"/>
                  <circle cx="32" cy="32" r="3" fill="white" />
                </svg>
                <div className="mt-6 text-[10px] uppercase tracking-[0.2em] text-white/70">On gradient</div>
              </div>
              <div className="flex aspect-square flex-col items-center justify-center rounded-2xl border border-border bg-foreground p-8">
                <svg viewBox="0 0 64 64" fill="none" className="size-32">
                  <path d="M14 50 V14 L32 32 L50 14 V50" stroke="#03040C" strokeWidth="6" strokeLinejoin="miter" fill="none"/>
                  <circle cx="32" cy="32" r="3" fill="#03040C" />
                </svg>
                <div className="mt-6 text-[10px] uppercase tracking-[0.2em] text-background">Inverted</div>
              </div>
              <div className="flex aspect-square items-center justify-center rounded-2xl border border-border bg-surface">
                <div className="flex items-center gap-3">
                  <NexusMark className="size-12" />
                  <span className="font-display text-3xl font-semibold tracking-tight">Nexus</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 05 — GRAPHIC LANGUAGE */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <SectionLabel num="05"><Layers className="size-3.5" /> Graphic language</SectionLabel>
          <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
            {[
              { label: "Thin lines", el: <div className="flex h-full w-full flex-col justify-end gap-2 p-6">{[...Array(8)].map((_,i)=><div key={i} className="h-px bg-foreground/40" style={{width: `${30 + i*8}%`}}/>)}</div> },
              { label: "Diagonal bars", el: <div className="diagonal-bars h-full w-full" /> },
              { label: "Grid mesh", el: <div className="grid-bg h-full w-full" /> },
              { label: "Hex modules", el: <div className="flex h-full items-center justify-center"><Hexagon className="size-20 text-primary" strokeWidth={1}/></div> },
              { label: "Wireframe cube", el: <div className="flex h-full items-center justify-center"><Box className="size-20 text-primary" strokeWidth={1}/></div> },
              { label: "Radial glow", el: <div className="h-full w-full" style={{background: "radial-gradient(circle at 50% 50%, #7A3EFF55, transparent 60%)"}}/> },
              { label: "Particle field", el: <div className="relative h-full w-full">{[...Array(20)].map((_,i)=><div key={i} className="absolute size-1 rounded-full bg-primary/60" style={{top:`${(i*37)%100}%`, left:`${(i*53)%100}%`, opacity: 0.3 + (i%5)*0.15}}/>)}</div> },
              { label: "Cut corners", el: <div className="flex h-full items-center justify-center"><div className="size-24 border border-foreground/40" style={{clipPath:"polygon(15% 0, 100% 0, 100% 85%, 85% 100%, 0 100%, 0 15%)"}}/></div> },
            ].map(item => (
              <div key={item.label} className="overflow-hidden rounded-xl border border-border bg-surface">
                <div className="h-40 overflow-hidden">{item.el}</div>
                <div className="border-t border-border px-4 py-3 text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 06 — COMPONENTS */}
      <section id="components" className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <SectionLabel num="06"><Grid3x3 className="size-3.5" /> UI components</SectionLabel>

          <div className="grid gap-6 lg:grid-cols-2">
            {/* Buttons */}
            <div className="rounded-2xl border border-border bg-surface p-8">
              <div className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground">Buttons</div>
              <div className="mt-6 flex flex-wrap gap-3">
                <button className="rounded-full bg-gradient-brand px-5 py-2.5 text-sm font-medium text-white glow-purple">Primary</button>
                <button className="rounded-full border border-border-strong bg-white/[0.04] px-5 py-2.5 text-sm font-medium">Secondary</button>
                <button className="rounded-full px-5 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground">Ghost</button>
                <button className="inline-flex items-center gap-1.5 rounded-full border border-primary/40 px-5 py-2.5 text-sm font-medium text-primary">
                  <Zap className="size-3.5" /> Action
                </button>
              </div>
            </div>

            {/* Badge / Pills */}
            <div className="rounded-2xl border border-border bg-surface p-8">
              <div className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground">Tags & badges</div>
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="rounded-full bg-primary/15 px-3 py-1 text-xs font-medium text-primary">New</span>
                <span className="rounded-full bg-neon/15 px-3 py-1 text-xs font-medium text-neon">Beta</span>
                <span className="rounded-full bg-cyan-accent/15 px-3 py-1 text-xs font-medium text-cyan-accent">Stable</span>
                <span className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">Deprecated</span>
                <span className="inline-flex items-center gap-1 rounded-full bg-foreground/10 px-3 py-1 text-xs">
                  <Circle className="size-1.5 fill-primary text-primary" /> Live
                </span>
              </div>
            </div>

            {/* Card */}
            <div className="rounded-2xl border border-border bg-surface p-8 lg:col-span-2">
              <div className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground">Product card</div>
              <div className="mt-6 grid gap-4 md:grid-cols-3">
                {[
                  { t: "Inference", d: "Sub-50ms response across 14 regions." },
                  { t: "Vector store", d: "Billion-scale semantic memory." },
                  { t: "Agents", d: "Composable workflows with full observability." },
                ].map(card => (
                  <div key={card.t} className="group relative overflow-hidden rounded-xl border border-border bg-background p-5 transition-colors hover:border-primary/40">
                    <div className="absolute -right-8 -top-8 size-24 rounded-full bg-primary/0 blur-2xl transition-colors group-hover:bg-primary/30" />
                    <Sparkles className="size-4 text-primary" strokeWidth={1.5} />
                    <div className="mt-10 font-display text-base font-semibold">{card.t}</div>
                    <div className="mt-1 text-xs text-muted-foreground">{card.d}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 07 — SOCIAL */}
      <section id="social" className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <SectionLabel num="07"><Square className="size-3.5" /> Social media system</SectionLabel>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <h2 className="font-display text-4xl font-semibold md:text-5xl">One headline. <br/>One glow. <br/>One pulse.</h2>
            <p className="max-w-md text-sm text-muted-foreground">
              Posts run black-first, with a single radial glow, oversized type, and a quiet 3D element.
              Restraint is the brand on social.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {[
              { headline: "Shipping intelligence,", sub: "at engineering speed.", accent: "primary" },
              { headline: "Inference, redefined.", sub: "Now live in 14 regions.", accent: "neon" },
              { headline: "From prompt to product.", sub: "In a single sprint.", accent: "cyan" },
            ].map((post, i) => (
              <div key={i} className="relative aspect-square overflow-hidden rounded-2xl border border-border bg-background p-6">
                <div className="absolute inset-0 grid-bg opacity-30" />
                <div className={`absolute -bottom-20 -right-20 size-64 rounded-full blur-3xl ${post.accent === "primary" ? "bg-primary/40" : post.accent === "neon" ? "bg-neon/40" : "bg-cyan-accent/40"}`} />
                <div className="relative flex h-full flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <NexusMark className="size-6" />
                    <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">@nexus.ai</span>
                  </div>
                  <div>
                    <div className="font-display text-2xl font-bold leading-tight md:text-3xl">{post.headline}</div>
                    <div className="mt-2 text-sm text-muted-foreground">{post.sub}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 08 — MOTION */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <SectionLabel num="08"><Zap className="size-3.5" /> Motion identity</SectionLabel>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              { t: "Glow pulse", d: "Slow opacity breathing on accents. 4s ease.", el: <div className="size-16 rounded-full bg-primary animate-pulse-glow"/> },
              { t: "Float drift", d: "Subtle Y-axis float for 3D objects. 8s ease.", el: <div className="size-16 rounded-xl bg-gradient-brand animate-float-slow"/> },
              { t: "Linear ease", d: "Cubic-bezier(0.16, 1, 0.3, 1) — confident, restrained.", el: <div className="h-1 w-full rounded-full bg-gradient-brand"/> },
            ].map(m => (
              <div key={m.t} className="rounded-2xl border border-border bg-surface p-6">
                <div className="flex h-32 items-center justify-center">{m.el}</div>
                <div className="mt-4 font-display text-sm font-semibold">{m.t}</div>
                <div className="mt-1 text-xs text-muted-foreground">{m.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 09 — TOKENS */}
      <section id="tokens" className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <SectionLabel num="09"><Minus className="size-3.5" /> Design tokens</SectionLabel>
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-border bg-surface p-8">
              <div className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground">Radius</div>
              <div className="mt-6 flex flex-wrap gap-4">
                {tokens.radius.map(r => (
                  <div key={r.name} className="flex flex-col items-center gap-2">
                    <div className="size-16 border border-border-strong bg-white/[0.04]" style={{ borderRadius: r.value }} />
                    <div className="font-mono text-[10px] text-muted-foreground">{r.name} · {r.value}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-border bg-surface p-8">
              <div className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground">Spacing scale (px)</div>
              <div className="mt-6 space-y-3">
                {tokens.spacing.map(s => (
                  <div key={s} className="flex items-center gap-4">
                    <div className="w-10 font-mono text-[11px] text-muted-foreground">{s}</div>
                    <div className="h-2 rounded-full bg-gradient-brand" style={{ width: `${Number(s) * 2}px` }} />
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-border bg-surface p-8 lg:col-span-2">
              <div className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground">CSS variables</div>
              <pre className="mt-6 overflow-x-auto rounded-xl border border-border bg-background p-5 font-mono text-[11px] leading-relaxed text-muted-foreground">
{`:root {
  --background:   #03040C;
  --surface:      #0A0D1E;
  --primary:      #6A3DFF;
  --electric:     #7D4DFF;
  --neon:         #3268FF;
  --cyan-accent:  #2EC6D3;
  --foreground:   #F2F4F7;

  --gradient-brand:
    linear-gradient(90deg, #7A3EFF 0%, #5A5EFF 45%, #2D8CFF 100%);
  --shadow-glow:
    0 0 80px -10px rgba(122, 62, 255, 0.5);

  --radius-sm: 6px;
  --radius-md: 12px;
  --radius-lg: 20px;
}`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-gradient-brand opacity-90" />
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="relative mx-auto max-w-7xl px-6 py-32 text-center">
          <h2 className="font-display text-5xl font-bold leading-tight text-white md:text-7xl">
            Ship a brand <br/>worth trusting.
          </h2>
          <p className="mx-auto mt-8 max-w-xl text-base text-white/80">
            The complete Nexus brand kit — Figma library, design tokens, motion specs, social templates.
            One download. Production-ready.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <button className="inline-flex items-center gap-1.5 rounded-full bg-background px-6 py-3 text-sm font-medium text-foreground">
              Download brand kit <ArrowUpRight className="size-4" />
            </button>
            <button className="rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-medium text-white backdrop-blur">
              Open in Figma
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <NexusMark className="size-5" />
            <span className="font-display text-xs font-semibold tracking-tight">Nexus</span>
            <span className="text-xs text-muted-foreground">/ Brand System v1.0 — 2026</span>
          </div>
          <div className="flex items-center gap-6 text-xs text-muted-foreground">
            <a href="#" className="hover:text-foreground">Guidelines</a>
            <a href="#" className="hover:text-foreground">Assets</a>
            <a href="#" className="hover:text-foreground">Contact brand</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
