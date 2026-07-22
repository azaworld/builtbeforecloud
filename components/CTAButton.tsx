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
      "bg-electric-cyan text-network-black hover:bg-archive-paper",
    secondary:
      "border border-electric-cyan text-electric-cyan hover:bg-electric-cyan hover:text-network-black",
    tertiary:
      "border border-technical-gray/50 text-technical-gray hover:border-electric-cyan hover:text-electric-cyan",
  }[variant];

  return (
    <Link
      href={href}
      className={`inline-block rounded-sm px-6 py-3 font-mono text-sm font-semibold uppercase tracking-wider transition-colors ${styles}`}
    >
      {children}
    </Link>
  );
}
