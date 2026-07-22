/**
 * Original Built Before Cloud mark.
 * Visual progression: Community → Network → Infrastructure → Distribution → Intelligence.
 * Two twin nodes, a modem line, a BBS node cluster, a congestion point with a
 * route around it, three stacked infrastructure layers, and systems converging
 * into one Control Tower point.
 */
export default function Logo({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Built Before Cloud logo"
    >
      {/* Twin nodes (Tim and Peter) joined by a telephone line */}
      <circle cx="8" cy="56" r="3" fill="#40D9E8" />
      <circle cx="20" cy="56" r="3" fill="#40D9E8" />
      <path d="M11 56h6" stroke="#147EA3" strokeWidth="1.5" />
      {/* Modem signal rising */}
      <path
        d="M14 53c0-6 6-8 10-12"
        stroke="#147EA3"
        strokeWidth="1.5"
        strokeDasharray="2 2"
      />
      {/* BBS node cluster */}
      <circle cx="26" cy="38" r="2" fill="#9BA7B0" />
      <circle cx="33" cy="42" r="2" fill="#9BA7B0" />
      <circle cx="31" cy="33" r="2" fill="#9BA7B0" />
      <path d="M26 38l5-5m0 0l2 9m-7-4l7 4" stroke="#147EA3" strokeWidth="1" />
      {/* Congestion point and route around the bottleneck */}
      <circle cx="40" cy="28" r="2.5" fill="#C77B50" />
      <path
        d="M33 33c2-2 3-3 4.5-4"
        stroke="#147EA3"
        strokeWidth="1.5"
      />
      <path
        d="M35 30c1-5 6-7 10-6"
        stroke="#40D9E8"
        strokeWidth="1.5"
      />
      {/* Three stacked data-center layers */}
      <rect x="42" y="14" width="16" height="4" rx="1" stroke="#40D9E8" strokeWidth="1.5" />
      <rect x="42" y="20" width="16" height="4" rx="1" stroke="#147EA3" strokeWidth="1.5" />
      <rect x="42" y="26" width="16" height="4" rx="1" stroke="#9BA7B0" strokeWidth="1.5" />
      {/* Systems converging into one Control Tower apex */}
      <path
        d="M44 14L50 4m6 10L50 4M38 26l12-22"
        stroke="#40D9E8"
        strokeWidth="1"
        opacity="0.7"
      />
      <circle cx="50" cy="4" r="2.5" fill="#40D9E8" />
    </svg>
  );
}
