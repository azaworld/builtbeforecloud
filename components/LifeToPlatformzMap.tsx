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
    <div className="rounded-sm border border-signal-blue/30 bg-infra-navy/60 p-6">
      <p className="font-mono text-xs uppercase tracking-widest text-signal-blue">
        Interactive: Life to Platformz
      </p>
      <p className="mt-2 text-sm text-technical-gray">
        Select a chapter to see what it contributed to Platformz.
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {chapters.map((c, i) => (
          <button
            key={c.chapter}
            type="button"
            onClick={() => setSelected(i)}
            className={`rounded-sm border px-3 py-1.5 font-mono text-xs uppercase tracking-wider transition-colors ${
              selected === i
                ? "border-electric-cyan bg-electric-cyan text-network-black"
                : "border-technical-gray/40 text-technical-gray hover:border-electric-cyan hover:text-electric-cyan"
            }`}
          >
            {c.chapter}
          </button>
        ))}
      </div>

      <div className="mt-6 border-l-2 border-warm-copper pl-4">
        <p className="font-headline text-lg font-semibold text-archive-paper">
          {chapters[selected].chapter}
        </p>
        <p className="mt-1 text-technical-gray">
          Platformz capability: {chapters[selected].capability}
        </p>
      </div>
    </div>
  );
}
