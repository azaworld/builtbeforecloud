"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const eras = [
  {
    year: "1970s",
    label: "The Origin",
    title: "Scale Is Learned at the Dinner Table",
    body: "William 'Monty' Roberts III runs marketing empires—motorsports, Disney, Anheuser-Busch. His sons learn that capital, storytelling and execution can turn ambitious ideas into physical reality.",
    lesson: "Think at scale.",
    href: "/origin",
    accent: "#c77b50",
  },
  {
    year: "1983",
    label: "Whackoland",
    title: "A 14-Year-Old Runs a Platform From His Bedroom",
    body: "The Whackoland BBS: users, identities, permissions, content, community, uptime—every platform problem Platformz solves today, first encountered at 300 baud.",
    lesson: "Community is infrastructure.",
    href: "/whackoland",
    accent: "#40d9e8",
  },
  {
    year: "1995",
    label: "Savvis",
    title: "The Complete Route Beats the Bigger Pipe",
    body: "Savvis Communications proves the network's intelligence matters more than any single component—4.905 seconds against the industry's best. NASDAQ: SVVS. Later acquired into CenturyLink for ~$3.4B.",
    lesson: "Orchestrate the whole journey.",
    href: "/savvis",
    accent: "#147ea3",
  },
  {
    year: "1998",
    label: "Intira",
    title: "Cloud Computing Before the Word Existed",
    body: "Intira's NetSourcing delivers computing, storage, networking and operations as a managed service—and its data centers are designed with seven times the power and cooling of legacy facilities, before 'AI data center' was a category.",
    lesson: "Customers buy outcomes, not boxes.",
    href: "/intira",
    accent: "#40d9e8",
  },
  {
    year: "2003–18",
    label: "The Missing Pieces",
    title: "Every Venture Adds a Layer",
    body: "Phantom, GameStreamer, Savtira, StationDigital, HashingSpace—consumer launches, white-label distribution, cloud commerce, streaming media, emerging infrastructure. Including the failures. Especially the failures.",
    lesson: "Failure is also infrastructure.",
    href: "/the-missing-pieces",
    accent: "#c77b50",
  },
  {
    year: "Today",
    label: "Platformz",
    title: "The System a Lifetime Prepared Him to Build",
    body: "Platformz makes all the systems required to run a business behave like one system: DIaaS, the Looking Glass Control Tower, the SaaS Foundry. Everything connects here.",
    lesson: "One life. One operating system.",
    href: "/platformz",
    accent: "#40d9e8",
  },
];

export default function JourneyExplorer() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  // Gentle auto-advance until the visitor interacts
  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setActive((i) => (i + 1) % eras.length), 6000);
    return () => clearInterval(id);
  }, [paused]);

  const era = eras[active];

  return (
    <div
      className="mx-auto max-w-5xl"
      onMouseEnter={() => setPaused(true)}
      onTouchStart={() => setPaused(true)}
    >
      {/* Era track */}
      <div
        role="tablist"
        aria-label="Explore the journey of Timothy Munro Roberts"
        className="relative flex items-start justify-between gap-1"
      >
        <span
          aria-hidden
          className="absolute left-4 right-4 top-[9px] h-px bg-white/10"
        />
        <span
          aria-hidden
          className="absolute left-4 top-[9px] h-px bg-electric-cyan shadow-[0_0_10px_rgba(64,217,232,0.8)] transition-all duration-500"
          style={{
            width: `${(active / (eras.length - 1)) * 100 * ((100 - 8) / 100)}%`,
          }}
        />
        {eras.map((e, i) => (
          <button
            key={e.label}
            role="tab"
            aria-selected={i === active}
            onClick={() => {
              setActive(i);
              setPaused(true);
            }}
            className="group relative z-10 flex min-w-0 flex-1 flex-col items-center gap-3 focus:outline-none"
          >
            <span
              className={`h-[18px] w-[18px] rounded-full border-2 transition-all duration-300 ${
                i === active
                  ? "scale-110 border-electric-cyan bg-electric-cyan shadow-[0_0_16px_rgba(64,217,232,0.8)]"
                  : i < active
                    ? "border-electric-cyan/60 bg-electric-cyan/30"
                    : "border-white/25 bg-[#081a2b] group-hover:border-electric-cyan/60"
              }`}
            />
            <span
              className={`font-mono text-[10px] uppercase tracking-[0.14em] transition-colors sm:text-[11px] ${
                i === active
                  ? "text-electric-cyan"
                  : "text-technical-gray/70 group-hover:text-archive-paper"
              }`}
            >
              {e.year}
            </span>
            <span
              className={`hidden text-center font-headline text-xs font-semibold leading-tight transition-colors sm:block ${
                i === active ? "text-archive-paper" : "text-technical-gray/60"
              }`}
            >
              {e.label}
            </span>
          </button>
        ))}
      </div>

      {/* Detail panel */}
      <div
        ref={panelRef}
        role="tabpanel"
        key={era.label}
        className="panel relative mt-10 overflow-hidden p-8 sm:p-10"
        style={{ animation: "journey-in 0.45s cubic-bezier(0.22,1,0.36,1)" }}
      >
        <span
          aria-hidden
          className="absolute inset-x-0 top-0 h-[3px]"
          style={{
            background: `linear-gradient(90deg, transparent, ${era.accent}, transparent)`,
          }}
        />
        <div className="flex flex-wrap items-baseline justify-between gap-3">
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-warm-copper">
            {era.year} — {era.label}
          </p>
          <p
            className="font-mono text-[11px] uppercase tracking-[0.2em]"
            style={{ color: era.accent }}
          >
            Lesson: {era.lesson}
          </p>
        </div>
        <h3 className="mt-5 font-headline text-2xl font-bold leading-snug tracking-[-0.01em] sm:text-3xl">
          {era.title}
        </h3>
        <p className="mt-4 max-w-3xl leading-[1.8] text-technical-gray">
          {era.body}
        </p>
        <Link
          href={era.href}
          className="mt-7 inline-flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-electric-cyan transition-colors hover:text-archive-paper"
        >
          Read this chapter
          <span aria-hidden>→</span>
        </Link>
      </div>
    </div>
  );
}
