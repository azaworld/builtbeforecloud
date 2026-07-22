"use client";

import { useEffect, useState } from "react";

/**
 * Platformz chapter hero animation: every earlier chapter converging.
 * Stages fade in sequentially — modem pair → Whackoland → network map →
 * Savvis backbone → Intira data centers → distribution branches →
 * disconnected enterprise nodes → Platformz connections → Control Tower.
 */
const stages = [
  "Two modem-connected computers appear.",
  "The connection expands into Whackoland.",
  "Whackoland becomes a network map.",
  "The network becomes the Savvis backbone.",
  "The backbone enters three Intira data centers.",
  "Computing, storage and security layers appear.",
  "Digital games, media, commerce and marketplaces branch outward.",
  "ERP, PIM, DAM, marketplaces, warehouses, tax and payments appear as disconnected nodes.",
  "Platformz draws connections between them.",
  "The connections resolve into the Looking Glass Control Tower.",
];

export default function PlatformzHeroAnimation() {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    if (stage >= stages.length) return;
    const t = setTimeout(() => setStage((s) => s + 1), 900);
    return () => clearTimeout(t);
  }, [stage]);

  const visible = (i: number) =>
    stage > i ? "opacity-100" : "opacity-0";

  return (
    <div className="mx-auto max-w-2xl">
      <svg
        viewBox="0 0 400 260"
        className="w-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Animation of every chapter converging into Platformz"
      >
        {/* Stage 0: two modem-connected computers */}
        <g className={`transition-opacity duration-700 ${visible(0)}`}>
          <rect x="30" y="220" width="24" height="16" rx="2" stroke="#40D9E8" strokeWidth="1.5" />
          <rect x="90" y="220" width="24" height="16" rx="2" stroke="#40D9E8" strokeWidth="1.5" />
          <path d="M54 228h36" stroke="#147EA3" strokeWidth="1.5" strokeDasharray="3 3" />
        </g>
        {/* Stage 1–2: Whackoland → network map */}
        <g className={`transition-opacity duration-700 ${visible(1)}`}>
          <circle cx="72" cy="190" r="10" stroke="#40D9E8" strokeWidth="1.5" />
          <text x="72" y="194" textAnchor="middle" fill="#40D9E8" fontSize="7" fontFamily="monospace">BBS</text>
          <path d="M60 222l10-22M100 222l-24-22" stroke="#147EA3" strokeWidth="1" />
        </g>
        <g className={`transition-opacity duration-700 ${visible(2)}`}>
          <circle cx="140" cy="180" r="4" fill="#9BA7B0" />
          <circle cx="170" cy="200" r="4" fill="#9BA7B0" />
          <circle cx="165" cy="160" r="4" fill="#9BA7B0" />
          <path d="M82 188l54-6m4 18l-58-12m60-26l-58 32" stroke="#147EA3" strokeWidth="1" />
        </g>
        {/* Stage 3: Savvis backbone */}
        <g className={`transition-opacity duration-700 ${visible(3)}`}>
          <path d="M140 180C200 150 240 150 300 160" stroke="#40D9E8" strokeWidth="2.5" />
          <text x="220" y="145" textAnchor="middle" fill="#9BA7B0" fontSize="8" fontFamily="monospace">SAVVIS BACKBONE</text>
        </g>
        {/* Stage 4–5: Intira data centers + layers */}
        <g className={`transition-opacity duration-700 ${visible(4)}`}>
          <rect x="280" y="170" width="30" height="20" rx="2" stroke="#147EA3" strokeWidth="1.5" />
          <rect x="318" y="170" width="30" height="20" rx="2" stroke="#147EA3" strokeWidth="1.5" />
          <rect x="356" y="170" width="30" height="20" rx="2" stroke="#147EA3" strokeWidth="1.5" />
        </g>
        <g className={`transition-opacity duration-700 ${visible(5)}`}>
          <path d="M285 175h20M285 180h20M285 185h20M323 175h20M323 180h20M323 185h20M361 175h20M361 180h20M361 185h20" stroke="#40D9E8" strokeWidth="1" />
        </g>
        {/* Stage 6: distribution branches */}
        <g className={`transition-opacity duration-700 ${visible(6)}`}>
          <path d="M300 165c-20-40-60-60-100-70M320 165c0-40 10-70 20-90M340 168c20-30 30-50 34-78" stroke="#C77B50" strokeWidth="1" strokeDasharray="3 3" />
        </g>
        {/* Stage 7: disconnected enterprise nodes */}
        <g className={`transition-opacity duration-700 ${visible(7)}`}>
          {[
            ["ERP", 60, 80],
            ["PIM", 120, 55],
            ["DAM", 180, 75],
            ["MKT", 240, 50],
            ["WHS", 300, 72],
            ["TAX", 350, 55],
            ["PAY", 388, 85],
          ].map(([label, x, y]) => (
            <g key={label as string}>
              <circle cx={x as number} cy={y as number} r="12" stroke="#9BA7B0" strokeWidth="1.2" />
              <text x={x as number} y={(y as number) + 3} textAnchor="middle" fill="#9BA7B0" fontSize="7" fontFamily="monospace">
                {label}
              </text>
            </g>
          ))}
        </g>
        {/* Stage 8: Platformz draws connections */}
        <g className={`transition-opacity duration-700 ${visible(8)}`}>
          <path
            d="M60 80L120 55M120 55l60 20M180 75l60-25M240 50l60 22M300 72l50-17M350 55l38 30M60 80l140 -60M388 85L200 20"
            stroke="#40D9E8"
            strokeWidth="1"
            opacity="0.8"
          />
        </g>
        {/* Stage 9: Looking Glass Control Tower */}
        <g className={`transition-opacity duration-1000 ${visible(9)}`}>
          <circle cx="200" cy="20" r="10" fill="#40D9E8" />
          <circle cx="200" cy="20" r="16" stroke="#40D9E8" strokeWidth="1" opacity="0.5" />
          <text x="200" y="42" textAnchor="middle" fill="#F2EFE6" fontSize="8" fontFamily="monospace">
            LOOKING GLASS CONTROL TOWER
          </text>
        </g>
      </svg>

      <p
        className={`mt-4 text-center font-mono text-sm text-electric-cyan transition-opacity duration-1000 ${
          stage >= stages.length ? "opacity-100" : "opacity-0"
        }`}
      >
        Everything connects here.
      </p>
      <p className="mt-2 min-h-5 text-center font-mono text-xs text-technical-gray">
        {stage > 0 && stage <= stages.length ? stages[stage - 1] : "\u00A0"}
      </p>
    </div>
  );
}
