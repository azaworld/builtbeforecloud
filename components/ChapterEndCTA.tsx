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
    </div>
  );
}
