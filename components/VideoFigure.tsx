import ClaimLabel, { type ClaimType } from "@/components/ClaimLabel";

/**
 * Archival video figure. Embeds a YouTube video inside the panel system
 * with a caption, credit line and optional editorial claim label.
 */
export default function VideoFigure({
  videoId,
  title,
  caption,
  credit,
  claim,
}: {
  videoId: string;
  title: string;
  caption?: React.ReactNode;
  credit?: string;
  claim?: ClaimType;
}) {
  return (
    <figure className="rv panel my-12 overflow-hidden">
      <div className="relative aspect-video bg-black/40">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}`}
          title={title}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
          className="absolute inset-0 h-full w-full"
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
