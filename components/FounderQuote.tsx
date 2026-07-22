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
    <figure className="rv panel panel-copper relative my-12 overflow-hidden p-8 sm:p-10">
      {/* Oversized quotation ornament */}
      <span
        aria-hidden
        className="pointer-events-none absolute -top-7 right-4 select-none font-serif text-[9rem] italic leading-none text-warm-copper/[0.12]"
      >
        “
      </span>
      <div className="relative mb-5 flex flex-wrap items-center gap-3">
        <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-warm-copper">
          {heading} — {attribution}
        </span>
        <ClaimLabel type={claim} />
      </div>
      <blockquote className="relative font-serif text-xl leading-[1.65] text-archive-paper italic sm:text-[1.35rem]">
        {children}
      </blockquote>
      <span
        aria-hidden
        className="mt-6 block h-px w-16 bg-gradient-to-r from-warm-copper/70 to-transparent"
      />
    </figure>
  );
}
