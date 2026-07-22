import Image from "next/image";
import ClaimLabel, { type ClaimType } from "@/components/ClaimLabel";

/**
 * Archival image figure. Presents historical photographs and documents
 * inside the panel system with a caption, an optional editorial claim
 * label and the standing third-party-trademark notice styling.
 */
export default function ImageFigure({
  src,
  alt,
  width,
  height,
  caption,
  credit,
  claim,
  frame = "dark",
  priority = false,
  maxWidth,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: React.ReactNode;
  credit?: string;
  claim?: ClaimType;
  /** "dark" keeps the image on the panel background; "light" mats it on paper for print artifacts */
  frame?: "dark" | "light";
  priority?: boolean;
  /** optional utility class such as "max-w-xl" to keep small artifacts from over-scaling */
  maxWidth?: string;
}) {
  return (
    <figure className={`rv panel my-12 overflow-hidden ${maxWidth ?? ""} ${maxWidth ? "mx-auto" : ""}`}>
      <div
        className={
          frame === "light"
            ? "bg-[#f4f1ea] p-4 sm:p-6"
            : "bg-black/30 p-2 sm:p-3"
        }
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          className="h-auto w-full rounded-[3px]"
          sizes="(min-width: 1024px) 720px, 100vw"
        />
      </div>
      {(caption || credit || claim) && (
        <figcaption className="border-t border-white/[0.06] px-5 py-4 sm:px-6">
          {caption && (
            <div className="text-sm leading-relaxed text-archive-paper/85">
              {caption}
            </div>
          )}
          <div className="mt-2 flex flex-wrap items-center gap-3">
            {claim && <ClaimLabel type={claim} />}
            {credit && (
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-technical-gray/80">
                {credit}
              </span>
            )}
          </div>
        </figcaption>
      )}
    </figure>
  );
}
