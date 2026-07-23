"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
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

  const close = useCallback(() => setActive(null), []);
  const step = useCallback(
    (dir: 1 | -1) =>
      setActive((i) =>
        i === null ? null : (i + dir + photos.length) % photos.length
      ),
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

  return (
    <figure className="rv panel my-12 overflow-hidden">
      {title && (
        <div className="border-b border-white/[0.06] px-5 py-4 sm:px-6">
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-electric-cyan/90">
            {title}
          </span>
        </div>
      )}

      <div className="grid grid-cols-2 gap-2 p-2 sm:grid-cols-3 sm:gap-3 sm:p-3">
        {photos.map((p, i) => (
          <button
            key={p.src}
            type="button"
            onClick={() => setActive(i)}
            className={`group relative overflow-hidden rounded-[4px] bg-black/40 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-electric-cyan ${
              i === 0 ? "col-span-2 row-span-2 sm:col-span-2 sm:row-span-2" : ""
            }`}
            aria-label={`Enlarge photo: ${p.alt}`}
          >
            <Image
              src={p.src}
              alt={p.alt}
              width={p.width}
              height={p.height}
              sizes={i === 0 ? "(min-width: 1024px) 480px, 66vw" : "(min-width: 1024px) 240px, 33vw"}
              className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
            />
            <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <span className="pointer-events-none absolute bottom-2 left-3 right-3 line-clamp-2 text-[11px] leading-snug text-archive-paper opacity-0 transition-opacity duration-300 group-hover:opacity-100">
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

      {/* Lightbox */}
      {active !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={photos[active].alt}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={close}
        >
          <div
            className="relative mx-4 max-h-[88vh] w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={photos[active].src}
              alt={photos[active].alt}
              width={photos[active].width}
              height={photos[active].height}
              sizes="100vw"
              className="mx-auto max-h-[78vh] w-auto rounded-[4px] object-contain"
              priority
            />
            <p className="mt-4 text-center text-sm leading-relaxed text-archive-paper/90">
              {photos[active].caption ?? photos[active].alt}
            </p>
            <p className="mt-1 text-center font-mono text-[11px] uppercase tracking-[0.2em] text-technical-gray">
              {active + 1} / {photos.length}
            </p>

            <button
              type="button"
              onClick={close}
              aria-label="Close"
              className="absolute -top-2 right-0 grid h-10 w-10 -translate-y-full place-items-center rounded-full border border-white/20 bg-white/[0.06] text-archive-paper transition-colors hover:border-electric-cyan hover:text-electric-cyan"
            >
              ✕
            </button>
            <button
              type="button"
              onClick={() => step(-1)}
              aria-label="Previous photo"
              className="absolute left-0 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/20 bg-black/60 text-xl text-archive-paper transition-colors hover:border-electric-cyan hover:text-electric-cyan sm:-left-14"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={() => step(1)}
              aria-label="Next photo"
              className="absolute right-0 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/20 bg-black/60 text-xl text-archive-paper transition-colors hover:border-electric-cyan hover:text-electric-cyan sm:-right-14"
            >
              ›
            </button>
          </div>
        </div>
      )}
    </figure>
  );
}
