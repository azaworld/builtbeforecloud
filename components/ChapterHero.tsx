export default function ChapterHero({
  eyebrow,
  title,
  subtitle,
  ghost,
}: {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  ghost?: string;
}) {
  return (
    <section className="signal-grid relative overflow-hidden border-b border-white/[0.06]">
      {/* Ghost chapter glyph */}
      {ghost && (
        <span
          aria-hidden
          className="ghost-glyph left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[26rem] sm:text-[34rem]"
        >
          {ghost}
        </span>
      )}

      <div className="relative z-10 mx-auto max-w-4xl px-5 py-24 text-center sm:py-36">
        <p className="eyebrow-lined font-mono text-[11px] uppercase tracking-[0.35em] text-electric-cyan">
          {eyebrow}
        </p>
        <h1 className="mt-8 font-headline text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-[1.02] tracking-[-0.02em]">
          {title}
        </h1>
        {subtitle && (
          <div className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-technical-gray">
            {subtitle}
          </div>
        )}
        <span aria-hidden className="hairline mx-auto mt-14 block w-40" />
      </div>
    </section>
  );
}
