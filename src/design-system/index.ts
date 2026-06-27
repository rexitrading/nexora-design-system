/**
 * Nexora Design System — single import surface.
 *
 *   import { Hero, FeatureGrid, NexoraLogo, colors } from "@/design-system";
 *
 * Tokens live in src/styles.css (CSS vars) and tokens.ts (TS mirror).
 */
export * from "./tokens";

// primitives
export { Container } from "./primitives/Container";
export { Eyebrow } from "./primitives/Eyebrow";
export { GradientText } from "./primitives/GradientText";
export { DisplayHeading } from "./primitives/DisplayHeading";
export { GlowOrb } from "./primitives/GlowOrb";
export { GridBackdrop } from "./primitives/GridBackdrop";
export { Section, SectionHeader } from "./primitives/Section";

// brand
export { NexoraLogo, NexoraMark } from "./brand/NexoraLogo";

// blocks
export { Hero } from "./blocks/Hero";
export { FeatureGrid, type Feature } from "./blocks/FeatureGrid";
export { LogoCloud } from "./blocks/LogoCloud";
export { StatStrip, type Stat } from "./blocks/StatStrip";
export { CTASection } from "./blocks/CTASection";
export { FooterBrand } from "./blocks/FooterBrand";
