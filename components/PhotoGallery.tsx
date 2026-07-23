"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import ClaimLabel, { type ClaimType } from "@/components/ClaimLabel";

export type GalleryPhoto = {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
};

export default function PhotoGallery({
  photos,
  title,
  credit,
  claim,
}: {
  photos: GalleryPhoto[];
  title?: string;
  credit?: string;
  claim?: ClaimType;
}) {
  const [active, setActive] = useState<number | null>(null);
  const [dir, setDir] = useState<"next" | "prev">("next");
  const touchX = useRef<number | null>(null);
  const thumbsRef = useRef<HTMLDivElement>(null);

  const close = useCallback(() => setActive(null), []);
  const step = useCallback(
    (d: 1 | -1) => {
      setDir(d === 1 ? "next" : "prev");
      setActive((i) =>
        i === null ? null : (i + d + photos.length) % photos.length
      );
    },
    [photos.length]
  );

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active, close, step]);

  // Keep the active thumbnail scrolled into view
  useEffect(() => {
    if (active === null || !thumbsRef.current) return;
    const el = thumbsRef.current.children[active] as HTMLElement | undefined;
    el?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  }, [active]);

  return (
    <figure className="rv panel my-12 overflow-hidden">
      {title && (
        <div className="flex items-center justify-between gap-4 border-b border-white/[0.06] px-5 py-4 sm:px-6">
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-electric-cyan/90">
            {title}
          </span>
          <span className="hidden font-mono text-[10px] uppercase tracking-[0.18em] text-technical-gray/70 sm:block">
            {photos.length} photographs · click to open
          </span>
        </div>
      )}

      {/* Grid — feature the first photo only when the set is large enough */}
      <div
        className={`grid gap-2 p-2 sm:gap-3 sm:p-3 ${
          photos.length >= 5 ? "grid-cols-2 sm:grid-cols-3" : "grid-cols-1 sm:grid-cols-2"
        }`}
      >
        {photos.map((p, i) => (
          <button
            key={p.src}
            type="button"
            onClick={() => {
              setDir("next");
              setActive(i);
            }}
            className={`group relative overflow-hidden rounded-[4px] bg-black/40 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-electric-cyan ${
              photos.length >= 5 && i === 0
                ? "col-span-2 row-span-2 sm:col-span-2 sm:row-span-2"
                : ""
            }`}
            aria-label={`Open photo ${i + 1} of ${photos.length}: ${p.alt}`}
          >
            <Image
              src={p.src}
              alt={p.alt}
              width={p.width}
              height={p.height}
              sizes={
                photos.length < 5 || i === 0
                  ? "(min-width: 1024px) 480px, 66vw"
                  : "(min-width: 1024px) 240px, 33vw"
              }
              className={`w-full transition-transform duration-500 ease-out group-hover:scale-[1.05] ${
                photos.length >= 5 ? "h-full object-cover" : "h-auto"
              }`}
            />
            {/* Hover veil */}
            <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            {/* Zoom hint */}
            <span className="pointer-events-none absolute right-2.5 top-2.5 grid h-8 w-8 scale-75 place-items-center rounded-full border border-white/25 bg-black/50 text-sm text-archive-paper opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
              ⤢
            </span>
            <span className="pointer-events-none absolute bottom-2.5 left-3 right-3 line-clamp-2 text-[11px] leading-snug text-archive-paper opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              {p.caption ?? p.alt}
            </span>
          </button>
        ))}
      </div>

      {(credit || claim) && (
        <figcaption className="flex flex-wrap items-center gap-3 border-t border-white/[0.06] px-5 py-4 sm:px-6">
          {claim && <ClaimLabel type={claim} />}
          {credit && (
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-technical-gray/80">
              {credit}
            </span>
          )}
        </figcaption>
      )}

      {/* ============ Slider lightbox (portal escapes transformed ancestors) ============ */}
      {active !== null &&
        createPortal(
        <div
          role="dialog"
          aria-modal="true"
          aria-label={photos[active].alt}
          className="fixed inset-0 z-[100] flex flex-col bg-[#02060a]/95 backdrop-blur-md"
          style={{ animation: "lightbox-in 0.3s ease-out" }}
          onClick={close}
          onTouchStart={(e) => {
            touchX.current = e.touches[0].clientX;
          }}
          onTouchEnd={(e) => {
            if (touchX.current === null) return;
            const dx = e.changedTouches[0].clientX - touchX.current;
            if (Math.abs(dx) > 48) step(dx < 0 ? 1 : -1);
            touchX.current = null;
          }}
        >
          {/* Top bar */}
          <div
            className="flex items-center justify-between gap-4 px-5 py-4 sm:px-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="min-w-0">
              {title && (
                <p className="truncate font-mono text-[10px] uppercase tracking-[0.24em] text-electric-cyan/80 sm:text-[11px]">
                  {title}
                </p>
              )}
            </div>
            <div className="flex shrink-0 items-center gap-4">
              <span className="font-mono text-[11px] tracking-[0.2em] text-technical-gray">
                {String(active + 1).padStart(2, "0")} /{" "}
                {String(photos.length).padStart(2, "0")}
              </span>
              <button
                type="button"
                onClick={close}
                aria-label="Close slideshow"
                className="grid h-9 w-9 place-items-center rounded-full border border-white/15 bg-white/[0.05] text-sm text-archive-paper transition-all hover:rotate-90 hover:border-electric-cyan hover:text-electric-cyan"
              >
                ✕
              </button>
            </div>
          </div>

          {/* Stage */}
          <div className="relative flex min-h-0 flex-1 items-center justify-center px-4 sm:px-20">
            <div
              key={active}
              className="flex max-h-full max-w-5xl flex-col items-center"
              style={{
                animation: `${dir === "next" ? "slide-from-right" : "slide-from-left"} 0.4s cubic-bezier(0.22,1,0.36,1)`,
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={photos[active].src}
                alt={photos[active].alt}
                width={photos[active].width}
                height={photos[active].height}
                sizes="100vw"
                priority
                className="max-h-[62vh] w-auto rounded-[6px] object-contain shadow-[0_30px_90px_rgba(0,0,0,0.7),0_0_0_1px_rgba(64,217,232,0.15)]"
              />
              <p className="mt-5 max-w-2xl px-2 text-center text-sm leading-relaxed text-archive-paper/90">
                {photos[active].caption ?? photos[active].alt}
              </p>
            </div>

            {/* Arrows */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                step(-1);
              }}
              aria-label="Previous photo"
              className="group absolute left-2 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-white/15 bg-black/50 text-2xl text-archive-paper/80 backdrop-blur-sm transition-all hover:border-electric-cyan hover:text-electric-cyan sm:left-6"
            >
              <span className="transition-transform duration-200 group-hover:-translate-x-0.5">
                ‹
              </span>
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                step(1);
              }}
              aria-label="Next photo"
              className="group absolute right-2 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-white/15 bg-black/50 text-2xl text-archive-paper/80 backdrop-blur-sm transition-all hover:border-electric-cyan hover:text-electric-cyan sm:right-6"
            >
              <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                ›
              </span>
            </button>
          </div>

          {/* Thumbnail strip */}
          <div
            className="border-t border-white/[0.06] bg-black/40 px-4 py-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              ref={thumbsRef}
              className="mx-auto flex max-w-4xl gap-2 overflow-x-auto pb-1 [scrollbar-width:thin]"
            >
              {photos.map((p, i) => (
                <button
                  key={p.src}
                  type="button"
                  onClick={() => {
                    setDir(i > active ? "next" : "prev");
                    setActive(i);
                  }}
                  aria-label={`Go to photo ${i + 1}`}
                  aria-current={i === active}
                  className={`relative h-14 w-20 shrink-0 overflow-hidden rounded-[3px] transition-all duration-300 ${
                    i === active
                      ? "opacity-100 ring-2 ring-electric-cyan shadow-[0_0_14px_rgba(64,217,232,0.45)]"
                      : "opacity-45 hover:opacity-90"
                  }`}
                >
                  <Image
                    src={p.src}
                    alt=""
                    width={160}
                    height={112}
                    sizes="80px"
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>,
        document.body
      )}
    </figure>
  );
}
