import Link from "next/link";

export default function CTAButton({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "tertiary";
}) {
  const styles = {
    primary:
      "bg-electric-cyan text-network-black shadow-[0_0_0_0_rgba(64,217,232,0)] hover:shadow-[0_12px_40px_-8px_rgba(64,217,232,0.55)] hover:-translate-y-0.5",
    secondary:
      "border border-electric-cyan/70 text-electric-cyan hover:bg-electric-cyan hover:text-network-black hover:shadow-[0_12px_40px_-8px_rgba(64,217,232,0.4)] hover:-translate-y-0.5",
    tertiary:
      "border border-white/15 text-technical-gray hover:border-electric-cyan/60 hover:text-electric-cyan hover:-translate-y-0.5",
  }[variant];

  return (
    <Link
      href={href}
      className={`group relative inline-flex items-center gap-2.5 overflow-hidden rounded-full px-7 py-3.5 font-mono text-[12px] font-semibold uppercase tracking-[0.16em] transition-all duration-300 ease-out ${styles}`}
    >
      {/* Light sweep on hover */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 -translate-x-[120%] skew-x-[-18deg] bg-white/25 transition-transform duration-700 ease-out group-hover:translate-x-[120%]"
      />
      <span className="relative">{children}</span>
      <span
        aria-hidden
        className="relative transition-transform duration-300 group-hover:translate-x-1"
      >
        →
      </span>
    </Link>
  );
}
