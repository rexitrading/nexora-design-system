import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Check, Copy, Sparkles, Layers, Type, Palette, Grid3x3,
  Zap, Hexagon, Cpu, Shield, Cloud, Headphones, BarChart3,
  Settings, Brain, ArrowUpRight, Circle
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nexora — Brand Guidelines & Visual Identity System" },
      { name: "description", content: "Intelligent solutions. Limitless possibilities. The complete Nexora brand system: logo, color, typography, motion and applications." },
      { property: "og:title", content: "Nexora — Visual Identity System" },
      { property: "og:description", content: "AI-powered solutions for a smarter future. Complete brand guidelines v1.0." },
    ],
  }),
  component: BrandKit,
});

// ============= NEXORA LOGO (slanted N with gradient) =============
function NexoraMark({ className = "", monochrome }: { className?: string; monochrome?: "white" | "dark" }) {
  const stops = monochrome === "white"
    ? [["0%", "#ffffff"], ["100%", "#ffffff"]]
    : monochrome === "dark"
    ? [["0%", "#000F14"], ["100%", "#000F14"]]
    : [["0%", "#7A4DFF"], ["50%", "#5A3DFF"], ["100%", "#2962FF"]];
  const id = `nx-${monochrome ?? "grad"}-${Math.random().toString(36).slice(2, 7)}`;
  return (
    <svg viewBox="0 0 80 80" fill="none" className={className} aria-hidden>
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
          {stops.map(([o, c]) => <stop key={o} offset={o} stopColor={c} />)}
        </linearGradient>
      </defs>
      {/* Left slanted bar (italic vertical) */}
      <path d="M14 68 L26 12 L40 12 L28 68 Z" fill={`url(#${id})`} opacity="0.95" />
      {/* Right slanted bar — the diagonal of the N */}
      <path d="M44 12 L66 12 L52 68 L30 68 Z" fill={`url(#${id})`} opacity="0.7" />
      {/* Diagonal accent connecting them */}
      <path d="M28 68 L60 12 L66 12 L34 68 Z" fill={`url(#${id})`} opacity="1" />
    </svg>
  );
}

function NexoraLogo({ className = "", monochrome }: { className?: string; monochrome?: "white" | "dark" }) {
  const txt = monochrome === "dark" ? "text-background" : "text-foreground";
  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      <NexoraMark className="size-10" monochrome={monochrome} />
      <span className={`font-display text-2xl font-bold tracking-[0.2em] ${monochrome === "white" ? "text-white" : txt}`}>
        NEXORA
      </span>
    </div>
  );
}

// ============= DATA =============
const colors = [
  { name: "Brand Purple", hex: "#5A3DFF", role: "Primary identity", token: "primary" },
  { name: "Neon Blue", hex: "#2962FF", role: "Gradient endpoint / links", token: "neon" },
  { name: "Mint Pulse", hex: "#00E5C3", role: "Supporting accent", token: "cyan-accent" },
  { name: "Deep Night", hex: "#000F14", role: "Background base", token: "background" },
  { name: "Ice White", hex: "#F2F4F7", role: "Typography / surfaces", token: "foreground" },
];

const contents = [
  ["01", "Brand Overview"], ["02", "Logo Suite"], ["03", "Colors"],
  ["04", "Typography"], ["05", "Patterns & Graphics"], ["06", "Iconography"],
  ["07", "Brand Applications"], ["08", "Stationery"], ["09", "Social Media"],
  ["10", "Brand Voice"], ["11", "Imagery"], ["12", "Thank You"],
];

const brandValues = [
  { word: "Innovative", icon: Sparkles },
  { word: "Reliable", icon: Shield },
  { word: "Intelligent", icon: Brain },
  { word: "Future-Ready", icon: Cpu },
  { word: "Human-Centric", icon: Circle },
];

const iconography = [
  { i: Brain, l: "Artificial Intelligence" },
  { i: Settings, l: "Automation" },
  { i: BarChart3, l: "Analytics" },
  { i: Shield, l: "Security" },
  { i: Cloud, l: "Cloud Computing" },
  { i: Headphones, l: "Support" },
];

// ============= UI HELPERS =============
function CopyBtn({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={() => { navigator.clipboard.writeText(text); setCopied(true); setTimeout(() => setCopied(false), 1400); }}
      className="inline-flex items-center gap-1.5 rounded-md border border-border bg-white/[0.03] px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground transition-colors hover:border-border-strong hover:text-foreground"
    >
      {copied ? <Check className="size-3" /> : <Copy className="size-3" />}
      {copied ? "Copied" : text}
    </button>
  );
}

function SectionNum({ num, title, eyebrow }: { num: string; title: string; eyebrow?: string }) {
  return (
    <div className="mb-10 flex items-start justify-between gap-6 border-b border-border pb-6">
      <div className="flex items-baseline gap-6">
        <span className="font-display text-7xl font-bold text-gradient-brand md:text-8xl">{num}</span>
        <div>
          {eyebrow && <div className="text-[10px] font-medium uppercase tracking-[0.25em] text-muted-foreground">{eyebrow}</div>}
          <h2 className="mt-1 font-display text-3xl font-semibold tracking-tight md:text-4xl">{title}</h2>
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

// ============= MAIN =============
function BrandKit() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      {/* ambient glows */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-primary/25 blur-[140px] animate-pulse-glow" />
        <div className="absolute top-1/3 -right-40 h-[450px] w-[450px] rounded-full bg-neon/20 blur-[140px] animate-pulse-glow" style={{ animationDelay: "2s" }} />
      </div>

      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2.5">
            <NexoraMark className="size-7" />
            <span className="font-display text-sm font-bold tracking-[0.2em]">NEXORA</span>
            <span className="hidden text-xs text-muted-foreground sm:inline">/ Brand Guidelines v1.0</span>
          </div>
          <nav className="hidden items-center gap-6 text-xs text-muted-foreground lg:flex">
            {contents.slice(0, 9).map(([n, t]) => (
              <a key={n} href={`#s${n}`} className="transition-colors hover:text-foreground">{t}</a>
            ))}
          </nav>
          <button className="inline-flex items-center gap-1.5 rounded-full bg-gradient-brand px-4 py-2 text-xs font-medium text-white glow-purple transition-transform hover:scale-105">
            Download <ArrowUpRight className="size-3.5" />
          </button>
        </div>
      </header>

      {/* HERO — matches the cover slide */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="grid-bg absolute inset-0 opacity-40" />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 30% 50%, rgba(90,61,255,0.25), transparent 60%)" }} />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-2 lg:py-32">
          <div>
            <div className="flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.3em] text-muted-foreground">
              <span>Brand Guidelines</span>
              <span className="h-px w-8 bg-gradient-brand" />
              <span>Version 1.0</span>
            </div>
            <div className="mt-12">
              <NexoraMark className="size-32 md:size-40" />
            </div>
            <h1 className="mt-8 font-display text-6xl font-bold leading-none tracking-[0.15em] md:text-8xl">NEXORA</h1>
            <p className="mt-6 font-display text-lg tracking-[0.4em] text-muted-foreground md:text-xl">
              INTELLIGENT SOLUTIONS.<br />LIMITLESS POSSIBILITIES.
            </p>
            <div className="mt-10 inline-flex items-center gap-2 border-t border-gradient-brand pt-3">
              <div className="h-px w-12 bg-gradient-brand" />
              <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-muted-foreground">Visual Identity System</span>
            </div>
          </div>

          {/* Hero mockup card */}
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-surface">
              <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #14172A 0%, #0D0F1D 100%)" }} />
              <div className="absolute inset-0 grid-bg opacity-30" />
              {/* fake "laptop" hero screen */}
              <div className="absolute inset-x-12 top-12 bottom-12 rounded-xl border border-border-strong bg-background/80 p-8 backdrop-blur">
                <div className="flex items-center gap-1.5">
                  <div className="size-2 rounded-full bg-destructive/60" />
                  <div className="size-2 rounded-full bg-cyan-accent/60" />
                  <div className="size-2 rounded-full bg-primary/60" />
                </div>
                <div className="mt-12 flex flex-col items-center">
                  <NexoraMark className="size-20" />
                  <div className="mt-4 font-display text-3xl font-bold tracking-[0.2em]">NEXORA</div>
                  <div className="mt-2 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                    AI-powered solutions<br/>for a smarter future
                  </div>
                  <div className="mt-6 h-1 w-12 rounded-full bg-gradient-brand" />
                </div>
              </div>
              {/* glow */}
              <div className="absolute -bottom-20 right-0 size-64 rounded-full bg-primary/30 blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* CONTENTS — matches the TOC slide */}
      <section className="border-b border-border bg-foreground text-background">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="flex items-baseline gap-6">
            <h2 className="font-display text-4xl font-bold tracking-tight text-background md:text-5xl">CONTENTS</h2>
            <div className="h-px flex-1 bg-background/20" />
          </div>
          <div className="mt-12 grid gap-x-12 gap-y-4 sm:grid-cols-2">
            {contents.map(([n, t]) => (
              <a key={n} href={`#s${n}`} className="group flex items-center gap-6 border-b border-background/10 py-3 transition-colors hover:border-primary">
                <span className="font-mono text-sm text-primary">{n}</span>
                <span className="font-display text-base font-medium text-background">{t}</span>
                <ArrowUpRight className="ml-auto size-4 text-background/30 opacity-0 transition-opacity group-hover:opacity-100" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 01 BRAND OVERVIEW */}
      <section id="s01" className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <SectionNum num="01" eyebrow="Foundation" title="Brand Overview" />
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="space-y-6 lg:col-span-7">
              <p className="font-display text-2xl leading-relaxed text-foreground md:text-3xl">
                Nexora is a forward-thinking technology company delivering <span className="text-gradient-brand">AI-powered solutions</span> that help businesses automate, innovate, and scale with confidence.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                The brand sits at the intersection of intelligence and craft — cinematic, restrained, deeply engineered. Every surface is dark, every accent purposeful, every motion calibrated to make complex systems feel calm.
              </p>
            </div>
            <div className="relative aspect-square overflow-hidden rounded-2xl border border-border bg-surface lg:col-span-5">
              <div className="absolute inset-0" style={{ background: "var(--gradient-radial)" }} />
              <div className="absolute inset-0 grid-bg opacity-30" />
              <div className="relative flex h-full items-center justify-center">
                <NexoraMark className="size-40 animate-float-slow" />
              </div>
              <div className="absolute bottom-6 left-6 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                The Nexora mark
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 02 LOGO SUITE */}
      <section id="s02" className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <SectionNum num="02" eyebrow="Identity" title="Logo Suite" />
          <div className="grid gap-6 md:grid-cols-2">
            <div className="flex aspect-[4/3] flex-col items-center justify-center rounded-2xl border border-border bg-surface p-12">
              <NexoraLogo />
              <div className="mt-3 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Intelligent Solutions</div>
              <div className="mt-12 text-[10px] uppercase tracking-[0.2em] text-primary">Primary lockup</div>
            </div>
            <div className="flex aspect-[4/3] flex-col items-center justify-center rounded-2xl border border-border bg-surface p-12">
              <NexoraMark className="size-32" />
              <div className="mt-12 text-[10px] uppercase tracking-[0.2em] text-primary">Icon / Mark</div>
            </div>
          </div>

          <div className="mt-6">
            <div className="mb-4 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Logo variations</div>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="flex aspect-[16/9] items-center justify-center rounded-2xl border border-border bg-surface">
                <NexoraLogo className="scale-90" />
              </div>
              <div className="flex aspect-[16/9] items-center justify-center rounded-2xl border border-border" style={{ background: "var(--gradient-brand)" }}>
                <NexoraLogo monochrome="white" className="scale-90" />
              </div>
              <div className="flex aspect-[16/9] items-center justify-center rounded-2xl border border-border bg-foreground">
                <NexoraLogo monochrome="dark" className="scale-90" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 03 COLORS */}
      <section id="s03" className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <SectionNum num="03" eyebrow="Palette" title="Colors" />
          <div className="grid gap-6 lg:grid-cols-12">
            <div className="grid grid-cols-5 gap-3 lg:col-span-7">
              {colors.map(c => (
                <div key={c.hex} className="overflow-hidden rounded-xl border border-border bg-surface">
                  <div className="relative h-32" style={{ backgroundColor: c.hex }}>
                    {(c.hex === "#000F14") && <div className="grid-bg absolute inset-0 opacity-40" />}
                  </div>
                  <div className="space-y-1 p-3">
                    <div className="font-mono text-[10px] text-foreground">{c.hex}</div>
                    <div className="text-[10px] text-muted-foreground">{c.name}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="space-y-4 lg:col-span-5">
              <p className="text-base leading-relaxed text-muted-foreground">
                A bold and futuristic palette that reflects <span className="text-foreground">innovation, trust, and cutting-edge technology</span>. Deep night anchors the system while electric purple carries the brand voice.
              </p>
              <div className="space-y-2">
                {colors.map(c => (
                  <div key={c.hex} className="flex items-center justify-between border-b border-border py-2 text-sm">
                    <div className="flex items-center gap-3">
                      <div className="size-4 rounded border border-border-strong" style={{ backgroundColor: c.hex }} />
                      <span>{c.name}</span>
                    </div>
                    <CopyBtn text={c.hex} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Gradient feature */}
          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            <div className="relative h-48 overflow-hidden rounded-2xl border border-border lg:col-span-2">
              <div className="absolute inset-0 bg-gradient-brand" />
              <div className="absolute inset-0 grid-bg opacity-20" />
              <div className="relative flex h-full flex-col justify-between p-6">
                <div className="text-[10px] font-medium uppercase tracking-[0.25em] text-white/80">Signature gradient</div>
                <code className="font-mono text-[11px] text-white/90">
                  linear-gradient(135deg, #5A3DFF, #4B5BFF, #2962FF)
                </code>
              </div>
            </div>
            <div className="relative h-48 overflow-hidden rounded-2xl border border-border bg-surface">
              <div className="absolute inset-0" style={{ background: "var(--gradient-radial)" }} />
              <div className="relative flex h-full flex-col justify-between p-6">
                <div className="text-[10px] font-medium uppercase tracking-[0.25em] text-white/80">Radial halo</div>
                <div className="font-display text-xl font-semibold">Neural Glow</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 04 TYPOGRAPHY */}
      <section id="s04" className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <SectionNum num="04" eyebrow="Type system" title="Typography" />
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-border bg-surface p-8">
              <div className="flex items-center justify-between">
                <div className="text-[10px] font-medium uppercase tracking-[0.25em] text-primary">Primary font</div>
                <CopyBtn text="Sora" />
              </div>
              <div className="mt-4 font-display text-3xl font-semibold">Sora</div>
              <div className="mt-6 font-display text-[140px] font-bold leading-none tracking-tighter">Aa</div>
              <div className="mt-6 space-y-1 font-display text-[13px] text-muted-foreground">
                <div>ABCDEFGHIJKLMNOPQRSTUVWXYZ</div>
                <div>abcdefghijklmnopqrstuvwxyz</div>
                <div>0123456789</div>
              </div>
            </div>
            <div className="rounded-2xl border border-border bg-surface p-8" style={{ fontFamily: "Inter" }}>
              <div className="flex items-center justify-between">
                <div className="text-[10px] font-medium uppercase tracking-[0.25em] text-primary" style={{ fontFamily: "Sora" }}>Secondary font</div>
                <CopyBtn text="Inter" />
              </div>
              <div className="mt-4 text-3xl font-semibold">Inter</div>
              <div className="mt-6 text-[140px] font-medium leading-none tracking-tight">Aa</div>
              <div className="mt-6 space-y-1 text-[13px] text-muted-foreground">
                <div>ABCDEFGHIJKLMNOPQRSTUVWXYZ</div>
                <div>abcdefghijklmnopqrstuvwxyz</div>
                <div>0123456789</div>
              </div>
            </div>
          </div>

          {/* Hierarchy */}
          <div className="mt-6 overflow-hidden rounded-2xl border border-border bg-surface">
            <div className="border-b border-border px-8 py-4 text-[10px] font-medium uppercase tracking-[0.25em] text-muted-foreground">
              Type scale
            </div>
            <div className="divide-y divide-border">
              {[
                { label: "H1 · Display", sample: "Build the future.", class: "font-display text-6xl md:text-7xl font-bold" },
                { label: "H2 · Section", sample: "Intelligent systems", class: "font-display text-4xl font-semibold" },
                { label: "H3 · Subhead", sample: "Composable by design", class: "font-display text-2xl font-medium text-primary" },
                { label: "Lead", sample: "A measured introduction that sets context without overstating.", class: "text-lg" },
                { label: "Body", sample: "Documentation paragraph at default reading size, generous in line-height.", class: "text-base text-muted-foreground" },
                { label: "Caption", sample: "Metadata · Label · Eyebrow", class: "text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground" },
              ].map(r => (
                <div key={r.label} className="grid grid-cols-12 items-center gap-6 px-8 py-6">
                  <div className="col-span-3 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{r.label}</div>
                  <div className={`col-span-9 ${r.class}`}>{r.sample}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 05 PATTERNS & GRAPHICS */}
      <section id="s05" className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <SectionNum num="05" eyebrow="Visual language" title="Patterns & Graphics" />
          <p className="mb-8 max-w-2xl text-sm text-muted-foreground">
            Modern visual elements that communicate technology, movement, and connectivity. Every motif derives from neural networks, computation, and data flow.
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { l: "Dot grid", el: <div className="grid h-full grid-cols-8 gap-2 p-4">{[...Array(48)].map((_, i) => <div key={i} className="size-1 rounded-full bg-primary/60" />)}</div> },
              { l: "Diagonal bars", el: <div className="diagonal-bars h-full w-full" /> },
              { l: "Radial glow", el: <div className="h-full w-full" style={{ background: "radial-gradient(circle at 50% 50%, #5A3DFF, transparent 70%)" }} /> },
              { l: "Wireframe cube", el: <div className="flex h-full items-center justify-center"><Hexagon className="size-20 text-primary" strokeWidth={1} /></div> },
              { l: "Grid mesh", el: <div className="grid-bg h-full w-full" /> },
              { l: "Particle field", el: <div className="relative h-full w-full">{[...Array(24)].map((_, i) => <div key={i} className="absolute size-1 rounded-full bg-primary" style={{ top: `${(i * 37) % 100}%`, left: `${(i * 53) % 100}%`, opacity: 0.2 + (i % 5) * 0.15 }} />)}</div> },
              { l: "Cut corners", el: <div className="flex h-full items-center justify-center"><div className="size-24 border border-primary/60" style={{ clipPath: "polygon(15% 0, 100% 0, 100% 85%, 85% 100%, 0 100%, 0 15%)" }} /></div> },
              { l: "3D cube glow", el: <div className="relative flex h-full items-center justify-center"><div className="absolute size-24 rounded-2xl bg-primary/30 blur-2xl" /><div className="relative size-16 rotate-45 border border-primary/80" /></div> },
            ].map(item => (
              <div key={item.l} className="overflow-hidden rounded-xl border border-border bg-surface">
                <div className="h-40 overflow-hidden">{item.el}</div>
                <div className="border-t border-border px-4 py-3 text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground">{item.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 06 ICONOGRAPHY */}
      <section id="s06" className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <SectionNum num="06" eyebrow="Symbol system" title="Iconography" />
          <p className="mb-8 max-w-2xl text-sm text-muted-foreground">
            Clean and minimal icons designed for clarity and consistency across all platforms. Line icons, 1.5px stroke, rounded corners.
          </p>
          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {iconography.map(({ i: Icon, l }) => (
              <div key={l} className="flex flex-col items-center gap-3 rounded-xl border border-border bg-surface p-6 transition-colors hover:border-primary/40">
                <div className="relative flex size-16 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
                  <Icon className="size-7 text-primary" strokeWidth={1.5} />
                </div>
                <div className="text-center text-xs">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 07 BRAND APPLICATIONS */}
      <section id="s07" className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <SectionNum num="07" eyebrow="In context" title="Brand Applications" />
          <div className="grid gap-4 md:grid-cols-3">
            {/* Mobile mockup */}
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-border bg-surface p-6">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
              <div className="relative flex h-full flex-col justify-between">
                <NexoraMark className="size-8" />
                <div>
                  <div className="font-display text-3xl font-bold leading-tight">Smart Solutions. Real Impact.</div>
                  <button className="mt-6 rounded-full bg-gradient-brand px-4 py-2 text-xs font-medium text-white">Get started</button>
                </div>
              </div>
            </div>
            {/* Billboard */}
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-border bg-background p-6">
              <div className="absolute inset-0 grid-bg opacity-20" />
              <div className="absolute -bottom-10 -right-10 size-48 rounded-full bg-primary/40 blur-3xl" />
              <div className="relative flex h-full flex-col justify-between">
                <NexoraMark className="size-8" />
                <div className="font-display text-2xl font-bold leading-tight">
                  Intelligence <br />That Drives <br /><span className="text-gradient-brand">Innovation.</span>
                </div>
              </div>
            </div>
            {/* Business card */}
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-border bg-surface p-6">
              <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #14172A 0%, #0D0F1D 100%)" }} />
              <div className="relative flex h-full flex-col justify-between">
                <div className="flex items-center justify-between">
                  <NexoraMark className="size-6" />
                  <span className="font-display text-[10px] font-bold tracking-[0.2em]">NEXORA</span>
                </div>
                <div>
                  <div className="font-display text-sm font-semibold">Jordan Smith</div>
                  <div className="text-[10px] text-muted-foreground">CEO &amp; Founder</div>
                  <div className="mt-3 space-y-0.5 text-[10px] text-muted-foreground">
                    <div>jordan@nexora.ai</div>
                    <div>+1 555 010 0123</div>
                    <div>nexora.ai</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 08 STATIONERY */}
      <section id="s08" className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <SectionNum num="08" eyebrow="Print system" title="Stationery" />
          <div className="grid gap-4 md:grid-cols-3">
            {/* Letterhead */}
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-border bg-foreground p-8 text-background md:col-span-2">
              <div className="flex items-center justify-between border-b border-background/10 pb-4">
                <NexoraLogo monochrome="dark" className="scale-75 origin-left" />
                <div className="text-[9px] uppercase tracking-[0.2em] text-background/60">Letterhead · A4</div>
              </div>
              <div className="mt-12 space-y-3 text-[11px] leading-relaxed text-background/80">
                <div>Dear partner,</div>
                <div className="h-px w-full bg-background/10" />
                <div className="h-px w-3/4 bg-background/10" />
                <div className="h-px w-full bg-background/10" />
                <div className="h-px w-5/6 bg-background/10" />
              </div>
              <div className="absolute inset-x-8 bottom-8 flex items-center justify-between border-t border-background/10 pt-4 text-[9px] text-background/60">
                <span>nexora.ai</span>
                <span>San Francisco · London · Singapore</span>
              </div>
            </div>
            {/* Envelope + card stack */}
            <div className="space-y-4">
              <div className="relative aspect-square overflow-hidden rounded-2xl border border-border bg-background p-6">
                <NexoraMark className="absolute right-6 top-6 size-6" />
                <div className="absolute bottom-6 left-6 font-display text-xs font-bold tracking-[0.2em]">NEXORA</div>
              </div>
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-border bg-surface p-4">
                <NexoraMark className="absolute left-4 top-4 size-5" />
                <div className="absolute right-4 top-4 text-[8px] uppercase tracking-[0.2em] text-muted-foreground">Card</div>
                <div className="absolute bottom-4 left-4 font-display text-[10px] font-bold tracking-[0.2em]">NEXORA</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 09 SOCIAL MEDIA */}
      <section id="s09" className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <SectionNum num="09" eyebrow="Editorial templates" title="Social Media" />
          <div className="grid gap-4 md:grid-cols-3">
            {[
              { h: "Automate. Innovate. Elevate.", g: "bg-primary/40" },
              { h: "Building Smarter Tomorrow", g: "bg-neon/40" },
              { h: "AI Solutions That Scale With You", g: "bg-cyan-accent/30" },
            ].map((post, i) => (
              <div key={i} className="relative aspect-square overflow-hidden rounded-2xl border border-border bg-background p-6">
                <div className="absolute inset-0 grid-bg opacity-30" />
                <div className={`absolute -bottom-20 -right-20 size-64 rounded-full blur-3xl ${post.g}`} />
                <div className="relative flex h-full flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <NexoraMark className="size-6" />
                    <span className="text-[9px] uppercase tracking-[0.25em] text-muted-foreground">@nexora.ai</span>
                  </div>
                  <div>
                    <div className="font-display text-2xl font-bold leading-tight md:text-3xl">{post.h}</div>
                    <div className="mt-4 h-1 w-12 rounded-full bg-gradient-brand" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10 BRAND VOICE */}
      <section id="s10" className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <SectionNum num="10" eyebrow="Tone & values" title="Brand Voice" />
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="grid grid-cols-2 gap-4 lg:col-span-7 sm:grid-cols-5">
              {brandValues.map(({ word, icon: Icon }) => (
                <div key={word} className="flex flex-col items-center gap-3 rounded-xl border border-border bg-surface p-5 text-center">
                  <div className="relative flex size-12 items-center justify-center rounded-full bg-gradient-brand">
                    <Icon className="size-5 text-white" strokeWidth={1.5} />
                  </div>
                  <div className="text-xs font-medium">{word}</div>
                </div>
              ))}
            </div>
            <div className="space-y-4 lg:col-span-5">
              <p className="font-display text-xl leading-relaxed">
                We communicate with <span className="text-gradient-brand">clarity, confidence,</span> and a vision for the future.
              </p>
              <div className="space-y-3 text-sm">
                <div className="rounded-xl border border-border bg-surface p-4">
                  <div className="text-[10px] uppercase tracking-[0.2em] text-primary">We are</div>
                  <div className="mt-1 text-foreground/90">Expert consultant · Senior engineer · Trusted partner</div>
                </div>
                <div className="rounded-xl border border-border bg-surface p-4">
                  <div className="text-[10px] uppercase tracking-[0.2em] text-primary">We are not</div>
                  <div className="mt-1 text-foreground/90">Loud · Playful · Trend-chasing · Vague</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11 IMAGERY */}
      <section id="s11" className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <SectionNum num="11" eyebrow="Photography & art direction" title="Imagery" />
          <p className="mb-8 max-w-2xl text-sm text-muted-foreground">
            Dark environments, side lighting, glass and metal surfaces, reflective monitors. Subjects placed in shadow with electric purple as the only light source.
          </p>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              "Dark ambience",
              "Side lighting",
              "Glass & metal",
              "Cinematic depth",
            ].map((label, i) => (
              <div key={label} className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border bg-surface">
                <div className="absolute inset-0" style={{ background: `linear-gradient(${135 + i * 30}deg, #14172A 0%, #000F14 80%)` }} />
                <div className="absolute inset-0" style={{ background: `radial-gradient(circle at ${i * 30}% 60%, rgba(90,61,255,0.5), transparent 60%)` }} />
                <div className="absolute inset-0 grid-bg opacity-20" />
                <div className="absolute bottom-4 left-4 text-[10px] uppercase tracking-[0.2em] text-foreground/80">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12 THANK YOU */}
      <section id="s12" className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-gradient-brand opacity-95" />
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="absolute -bottom-40 -right-20 size-[600px] rounded-full bg-white/10 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-32 lg:grid-cols-2">
          <div>
            <div className="flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.3em] text-white/70">
              <span>12</span><span className="h-px w-8 bg-white/40" /><span>Closing</span>
            </div>
            <h2 className="mt-8 font-display text-6xl font-bold leading-none tracking-tight text-white md:text-8xl">
              THANK <br />YOU
            </h2>
            <p className="mt-8 max-w-md text-base text-white/80">
              Thank you for being part of the Nexora journey. The complete brand kit — Figma library, design tokens, motion specs, social templates — production-ready and yours to ship.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <button className="inline-flex items-center gap-1.5 rounded-full bg-background px-6 py-3 text-sm font-medium text-foreground">
                Download brand kit <ArrowUpRight className="size-4" />
              </button>
              <button className="rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-medium text-white backdrop-blur">
                Open in Figma
              </button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <NexoraMark className="size-72 animate-float-slow" monochrome="white" />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <NexoraMark className="size-5" />
            <span className="font-display text-xs font-bold tracking-[0.2em]">NEXORA</span>
            <span className="text-xs text-muted-foreground">/ Brand Guidelines v1.0 — 2026</span>
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
