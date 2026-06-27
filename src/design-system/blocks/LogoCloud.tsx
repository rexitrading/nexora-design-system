import { Eyebrow } from "../primitives/Eyebrow";

/** Plain-text "as seen in" logo strip. Pass brand names. */
export function LogoCloud({ label, logos }: { label?: string; logos: string[] }) {
  return (
    <div className="flex flex-col items-center gap-6 py-8">
      {label && <Eyebrow>{label}</Eyebrow>}
      <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 opacity-60">
        {logos.map((l) => (
          <span key={l} className="font-display text-lg font-medium tracking-wide">
            {l}
          </span>
        ))}
      </div>
    </div>
  );
}
