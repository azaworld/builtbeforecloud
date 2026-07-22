/**
 * Editorial-standard claim classification labels.
 * Every major historical claim on the site displays one of these.
 */
export type ClaimType =
  | "verified-public-record"
  | "contemporary-reporting"
  | "founder-recollection"
  | "family-record"
  | "corroborated-recollection"
  | "disputed-or-incomplete";

const CLAIM_META: Record<
  ClaimType,
  { label: string; classes: string; dot: string }
> = {
  "verified-public-record": {
    label: "Verified Public Record",
    classes: "border-electric-cyan/50 bg-electric-cyan/[0.07] text-electric-cyan",
    dot: "bg-electric-cyan",
  },
  "contemporary-reporting": {
    label: "Contemporary Reporting",
    classes: "border-signal-blue/60 bg-signal-blue/10 text-[#4db3d4]",
    dot: "bg-signal-blue",
  },
  "founder-recollection": {
    label: "Founder Recollection",
    classes: "border-warm-copper/60 bg-warm-copper/[0.08] text-warm-copper",
    dot: "bg-warm-copper",
  },
  "family-record": {
    label: "Family Record",
    classes: "border-warm-copper/40 bg-warm-copper/[0.05] text-warm-copper/90",
    dot: "bg-warm-copper/70",
  },
  "corroborated-recollection": {
    label: "Corroborated Recollection",
    classes: "border-archive-paper/40 bg-archive-paper/[0.06] text-archive-paper/90",
    dot: "bg-archive-paper/80",
  },
  "disputed-or-incomplete": {
    label: "Disputed or Incomplete",
    classes: "border-technical-gray/50 bg-technical-gray/[0.08] text-technical-gray",
    dot: "bg-technical-gray",
  },
};

export default function ClaimLabel({ type }: { type: ClaimType }) {
  const meta = CLAIM_META[type];
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] ${meta.classes}`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${meta.dot}`} aria-hidden />
      {meta.label}
    </span>
  );
}
