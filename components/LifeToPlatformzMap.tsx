"use client";

import { useState } from "react";

/** Interactive “Life to Platformz” map: select a chapter to see what it contributed. */
const chapters: { chapter: string; capability: string }[] = [
  { chapter: "Monty Roberts", capability: "Scale, storytelling, confidence and ecosystem thinking" },
  { chapter: "Whackoland", capability: "Identity, permissions, communities and remote service" },
  { chapter: "J&G", capability: "Cross-system integration" },
  { chapter: "Savvis", capability: "Network orchestration, reliability and monitoring" },
  { chapter: "Intira", capability: "Managed infrastructure and service accountability" },
  { chapter: "Phantom", capability: "Product experience and launch risk" },
  { chapter: "GameStreamer", capability: "White-label and multi-tenant distribution" },
  { chapter: "Savtira", capability: "Cloud commerce and marketplace infrastructure" },
  { chapter: "StationDigital", capability: "Streaming, engagement and subscriptions" },
  { chapter: "FUR4", capability: "Global commerce, operations and real-world proof" },
  { chapter: "Platformz", capability: "Unified enterprise orchestration and intelligence" },
];

export default function LifeToPlatformzMap() {
  const [selected, setSelected] = useState(chapters.length - 1);

  return (
    <div className="panel panel-cyan p-7 sm:p-9">
      <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-electric-cyan">
        Interactive · Life to Platformz
      </p>
      <p className="mt-2 text-sm text-technical-gray">
        Select a chapter to see what it contributed to Platformz.
      </p>

      <div className="mt-7 flex flex-wrap gap-2">
        {chapters.map((c, i) => (
          <button
            key={c.chapter}
            type="button"
            onClick={() => setSelected(i)}
            className={`rounded-full border px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.1em] transition-all duration-300 ${
              selected === i
                ? "border-electric-cyan bg-electric-cyan text-network-black shadow-[0_0_24px_rgba(64,217,232,0.4)]"
                : "border-white/15 text-technical-gray hover:border-electric-cyan/60 hover:text-electric-cyan"
            }`}
          >
            {c.chapter}
          </button>
        ))}
      </div>

      <div className="mt-8 border-l-2 border-warm-copper pl-5" aria-live="polite">
        <p className="font-headline text-xl font-bold text-archive-paper">
          {chapters[selected].chapter}
        </p>
        <p className="mt-1.5 leading-relaxed text-technical-gray">
          Platformz capability:{" "}
          <span className="text-archive-paper/90">
            {chapters[selected].capability}
          </span>
        </p>
      </div>
    </div>
  );
}
