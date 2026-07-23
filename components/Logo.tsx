"use client";

import { useId } from "react";

/**
 * Built Before Cloud — the "Layered Emblem" mark.
 *
 * An ascending three-tier foundation (slate → teal → electric-cyan) resolving
 * into a single luminous cyan beacon at the apex: infrastructure built first,
 * layer by layer, with the signal — the cloud — rising from the top of it.
 * Minimal and geometric so it stays crisp from a 16px favicon up to large
 * header / print sizes, on dark navy and on paper.
 */
type LogoProps = {
  /** Sizes the mark (icon-only) or the whole lockup (withWordmark). */
  className?: string;
  /** Render the horizontal lockup: icon + "Built Before Cloud" wordmark. */
  withWordmark?: boolean;
  /** Wordmark treatment: "dark" for dark UI, "light" for paper / print. */
  tone?: "dark" | "light";
};

export default function Logo({
  className = "h-10 w-10",
  withWordmark = false,
  tone = "dark",
}: LogoProps) {
  // Unique gradient id so multiple marks can coexist on one page.
  const uid = useId().replace(/:/g, "");
  const glow = `bbc-glow-${uid}`;

  const icon = (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={withWordmark ? "h-full w-auto shrink-0" : className}
      role="img"
      aria-label={withWordmark ? undefined : "Built Before Cloud logo"}
      aria-hidden={withWordmark ? true : undefined}
    >
      <defs>
        <radialGradient id={glow} cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#40D9E8" stopOpacity="0.5" />
          <stop offset="0.55" stopColor="#40D9E8" stopOpacity="0.13" />
          <stop offset="1" stopColor="#40D9E8" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* The beacon's halo — the signal rising from the summit. */}
      <circle cx="32" cy="28.9" r="11" fill={`url(#${glow})`} />

      {/* The ascending foundation — built first, layer by layer. */}
      <polygon points="12,57 52,57 48,50.5 16,50.5" fill="#3D5568" />
      <polygon points="17.5,48.9 46.5,48.9 42.5,42.4 21.5,42.4" fill="#147EA3" />
      <polygon points="23,40.8 41,40.8 37,34.3 27,34.3" fill="#40D9E8" />

      {/* The luminous beacon at the apex. */}
      <circle cx="32" cy="28.9" r="3.8" fill="#40D9E8" />
    </svg>
  );

  if (!withWordmark) return icon;

  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      {icon}
      <span
        className="font-headline font-bold uppercase leading-none tracking-[0.24em]"
        style={{ color: tone === "light" ? "#081A2B" : "#F2EFE6" }}
      >
        Built Before Cloud
      </span>
    </span>
  );
}
