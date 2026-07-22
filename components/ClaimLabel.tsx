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

const CLAIM_META: Record<ClaimType, { label: string; classes: string }> = {
  "verified-public-record": {
    label: "Verified Public Record",
    classes: "border-electric-cyan/60 text-electric-cyan",
  },
  "contemporary-reporting": {
    label: "Contemporary Reporting",
    classes: "border-signal-blue/70 text-signal-blue",
  },
  "founder-recollection": {
    label: "Founder Recollection",
    classes: "border-warm-copper/70 text-warm-copper",
  },
  "family-record": {
    label: "Family Record",
    classes: "border-warm-copper/50 text-warm-copper/90",
  },
  "corroborated-recollection": {
    label: "Corroborated Recollection",
    classes: "border-archive-paper/50 text-archive-paper/90",
  },
  "disputed-or-incomplete": {
    label: "Disputed or Incomplete",
    classes: "border-technical-gray/60 text-technical-gray",
  },
};

export default function ClaimLabel({ type }: { type: ClaimType }) {
  const meta = CLAIM_META[type];
  return (
    <span
      className={`inline-block rounded-sm border px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest ${meta.classes}`}
    >
      {meta.label}
    </span>
  );
}
