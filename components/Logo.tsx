/**
 * Built Before Cloud mark.
 * A cloud resting on three foundation layers that widen downward —
 * the infrastructure that was built first, layer by layer, before
 * the cloud could exist. Reads clearly from 16px favicon to print.
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
      {/* The cloud — the outcome, drawn light */}
      <g transform="translate(4.2 -1.5) scale(0.88)">
        <path
          d="M42.5 30.1h-16a11.4 11.4 0 1 1 1.6-22.7A13.3 13.3 0 0 1 53.4 13a8.55 8.55 0 0 1-1.9 17z"
          fill="rgba(64,217,232,0.10)"
          stroke="#40D9E8"
          strokeWidth="3.4"
          strokeLinejoin="round"
        />
      </g>
      {/* The foundation — three layers built before it, widening downward */}
      <rect x="21" y="36" width="22" height="5.5" rx="2.75" fill="#40D9E8" />
      <rect x="16" y="45" width="32" height="5.5" rx="2.75" fill="#147EA3" />
      <rect x="11" y="54" width="42" height="5.5" rx="2.75" fill="#3D5568" />
    </svg>
  );
}
