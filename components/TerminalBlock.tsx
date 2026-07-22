"use client";

import { useEffect, useRef, useState } from "react";

export default function TerminalBlock({
  lines,
  caption,
}: {
  lines: string[];
  caption?: string;
}) {
  const full = lines.join("\n");
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);
  const [chars, setChars] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setStarted(true);
      setChars(full.length);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          io.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [full.length]);

  useEffect(() => {
    if (!started || chars >= full.length) return;
    const t = setTimeout(() => setChars((c) => Math.min(c + 2, full.length)), 28);
    return () => clearTimeout(t);
  }, [started, chars, full.length]);

  return (
    <figure ref={ref} className="rv my-12">
      <div className="crt p-6 sm:p-8">
        {/* Window chrome */}
        <div className="relative mb-6 flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-warm-copper/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-technical-gray/40" />
          <span className="h-2.5 w-2.5 rounded-full bg-electric-cyan/70" />
          <span className="ml-auto font-mono text-[10px] uppercase tracking-[0.25em] text-technical-gray/50">
            300/1200 BAUD · DIAL-UP
          </span>
        </div>
        <pre className="crt-text relative overflow-x-auto font-mono text-sm leading-loose sm:text-[15px]">
          {/* Invisible full text reserves final layout, no shift while typing */}
          <span aria-hidden className="invisible">
            {full}
          </span>
          <span className="absolute inset-0" aria-label={full}>
            {full.slice(0, chars)}
            <span className="cursor-blink">█</span>
          </span>
        </pre>
      </div>
      {caption && (
        <figcaption className="mt-4 text-center font-serif text-[15px] italic text-technical-gray">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
