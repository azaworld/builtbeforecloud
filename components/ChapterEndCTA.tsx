import CTAButton from "@/components/CTAButton";

export default function ChapterEndCTA({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  return (
    <div className="rv mx-auto max-w-3xl px-5 pb-24 text-center">
      <span aria-hidden className="hairline mx-auto mb-12 block w-full max-w-md" />
      <CTAButton href={href}>{label}</CTAButton>
      {/* Closing statement used throughout the site */}
      <p className="mt-14 font-serif text-lg italic leading-relaxed text-technical-gray">
        The cloud was not invented in a moment. It was built layer by layer.
        <br className="hidden sm:block" /> Platformz brings those layers
        together.
      </p>
    </div>
  );
}
