"use client";

import { useId } from "react";

/**
 * Built Before Cloud — the "Strata-Built Cloud" mark.
 *
 * The cloud silhouette is literally CONSTRUCTED from stacked horizontal
 * infrastructure strata. The layers rise in tone — slate at the base, through
 * teal, into electric-cyan at the crest — so the cloud reads as the outcome of
 * infrastructure that was built first, layer by layer. Reads cleanly from a
 * 16px favicon up to large header / print sizes, on dark navy and on paper.
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
  // Unique clip id so multiple marks can coexist on one page.
  const cid = useId().replace(/:/g, "");
  const clip = `bbc-cloud-${cid}`;

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
        {/* The cloud outline, assembled from overlapping volumes. */}
        <clipPath id={clip}>
          <rect x="10" y="34" width="44" height="15" rx="6" />
          <circle cx="32" cy="27" r="15" />
          <circle cx="19" cy="36" r="11" />
          <circle cx="46" cy="35" r="12" />
          <circle cx="25" cy="25" r="9.5" />
          <circle cx="41" cy="25" r="10" />
        </clipPath>
      </defs>

      {/* Soft glow of emergence behind the cloud. */}
      <ellipse cx="32" cy="27" rx="24" ry="19" fill="#40D9E8" opacity="0.08" />

      {/* Infrastructure strata, clipped into the cloud — slate → teal → cyan. */}
      <g clipPath={`url(#${clip})`}>
        <rect x="0" y="47.9" width="64" height="4.6" fill="#3D5568" />
        <rect x="0" y="41.5" width="64" height="4.6" fill="#3D5568" />
        <rect x="0" y="35.1" width="64" height="4.6" fill="#147EA3" />
        <rect x="0" y="28.7" width="64" height="4.6" fill="#147EA3" />
        <rect x="0" y="22.3" width="64" height="4.6" fill="#147EA3" />
        <rect x="0" y="15.9" width="64" height="4.6" fill="#40D9E8" />
        <rect x="0" y="9.5" width="64" height="4.6" fill="#40D9E8" />
      </g>
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
