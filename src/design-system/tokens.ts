/**
 * Nexora design tokens — TypeScript mirror of CSS custom properties
 * defined in src/styles.css. Use CSS vars in components; use these
 * constants only when you need raw JS values (SVG fills, canvas, charts).
 */
export const colors = {
  brandPurple: "#5A3DFF",
  electric: "#7A4DFF",
  neonBlue: "#2962FF",
  mintPulse: "#00E5C3",
  deepNight: "#000F14",
  surface: "#0D0F1D",
  surfaceElevated: "#14172A",
  iceWhite: "#F2F4F7",
} as const;

export const gradients = {
  brand: "linear-gradient(135deg, #5A3DFF 0%, #4B5BFF 50%, #2962FF 100%)",
  radial: "radial-gradient(circle at 50% 50%, #5A3DFF 0%, #0D0F1D 70%)",
  hero: "radial-gradient(ellipse at 30% 50%, rgba(90,61,255,0.25), transparent 60%)",
} as const;

export const fonts = {
  display: '"Sora", sans-serif',
  sans: '"Inter", sans-serif',
} as const;

export const radius = {
  sm: "0.5rem",
  md: "0.625rem",
  lg: "0.75rem",
  xl: "1rem",
  "2xl": "1.25rem",
} as const;

export const shadows = {
  glow: "0 0 80px -10px rgba(122, 62, 255, 0.5)",
  glowBlue: "0 0 60px -10px rgba(50, 104, 255, 0.45)",
} as const;

export const motion = {
  easeOut: "cubic-bezier(0.16, 1, 0.3, 1)",
  durations: { fast: "150ms", base: "240ms", slow: "480ms" },
} as const;

export type BrandTone = "purple" | "blue" | "mint" | "neutral";
