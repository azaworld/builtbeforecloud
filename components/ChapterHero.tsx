export default function ChapterHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
}) {
  return (
    <section className="signal-grid border-b border-signal-blue/20 bg-infra-navy/40">
      <div className="mx-auto max-w-4xl px-4 py-20 text-center sm:py-28">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-signal-blue">
          {eyebrow}
        </p>
        <h1 className="mt-6 font-headline text-4xl font-bold leading-tight sm:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <div className="mt-6 text-lg leading-relaxed text-technical-gray">
            {subtitle}
          </div>
        )}
      </div>
    </section>
  );
}
