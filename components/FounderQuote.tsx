import ClaimLabel, { type ClaimType } from "@/components/ClaimLabel";

export default function FounderQuote({
  children,
  attribution = "Tim Roberts",
  heading = "Founder recollection",
  claim = "founder-recollection",
}: {
  children: React.ReactNode;
  attribution?: string;
  heading?: string;
  claim?: ClaimType;
}) {
  return (
    <figure className="my-8 border-l-2 border-warm-copper bg-infra-navy/60 p-6">
      <div className="mb-3 flex flex-wrap items-center gap-3">
        <span className="font-mono text-xs uppercase tracking-widest text-warm-copper">
          {heading} — {attribution}
        </span>
        <ClaimLabel type={claim} />
      </div>
      <blockquote className="font-serif text-lg leading-relaxed text-archive-paper/95 italic">
        {children}
      </blockquote>
    </figure>
  );
}
