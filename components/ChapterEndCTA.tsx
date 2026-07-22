import CTAButton from "@/components/CTAButton";

export default function ChapterEndCTA({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  return (
    <div className="mx-auto max-w-3xl px-4 pb-20 text-center">
      <CTAButton href={href}>{label}</CTAButton>
      {/* Closing statement used throughout the site */}
      <p className="mt-12 border-t border-signal-blue/20 pt-8 font-serif text-base italic leading-relaxed text-technical-gray">
        The cloud was not invented in a moment. It was built layer by layer.
        Platformz brings those layers together.
      </p>
    </div>
  );
}
