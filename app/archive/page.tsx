import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ChapterHero from "@/components/ChapterHero";
import ClaimLabel from "@/components/ClaimLabel";
import { archiveItems } from "@/lib/archive";

export const metadata: Metadata = {
  title: "Archive",
  description:
    "The Built Before Cloud evidence archive—documents, reconstructions and records from the BBS era through Savvis, Intira and Platformz.",
};

export default function ArchivePage() {
  return (
    <>
      <ChapterHero
        eyebrow="The Built Before Cloud Archive"
        title="Do Not Just Trust the Story. Open the Files."
        subtitle={
          <p>
            Documents, reconstructions and records—each labeled by evidence
            classification. Items marked “seeking” are open requests for
            documents and participant accounts.
          </p>
        }
      />

      <div className="mx-auto max-w-5xl px-4 py-16">
        <div className="rv mx-auto mb-12 max-w-3xl space-y-3 text-lg leading-[1.8] text-archive-paper/95">
          <p>A founder can remember the correct event in the wrong year.</p>
          <p>
            A press release can omit the person who originated an idea.
          </p>
          <p>
            A résumé can compress a complicated transaction into one sentence.
          </p>
          <p>A legal filing can be accurate and incomplete.</p>
          <p>
            A competitor’s publication can preserve history while also
            preserving rivalry, gossip and exaggeration.
          </p>
          <p className="font-headline font-semibold text-archive-paper">
            The archive places the evidence beside the narrative. It does not
            exist to prove every memory correct. It exists so the record can
            be examined rather than merely believed.
          </p>
        </div>

        <figure className="rv mx-auto mb-12 max-w-xl">
          <div className="panel overflow-hidden">
            <div className="bg-[#f4f1ea] p-6">
              <Image
                src="/images/bbc-wordmark.png"
                alt="Built Before The Cloud wordmark from the original manuscript cover"
                width={1427}
                height={599}
                className="h-auto w-full"
                sizes="(min-width: 640px) 576px, 100vw"
              />
            </div>
            <figcaption className="border-t border-white/[0.06] px-5 py-4 text-sm leading-relaxed text-archive-paper/85">
              The wordmark from the original Built Before Cloud manuscript
              cover—the document from which this living archive grew.
            </figcaption>
          </div>
        </figure>

        <p className="mb-10 panel p-4 font-mono text-xs leading-relaxed text-technical-gray">
          Historical images and documents may display third-party trademarks.
          Their inclusion does not imply endorsement, sponsorship, ownership
          or current affiliation. All trademarks and logos remain the property
          of their respective owners.
        </p>

        <div className="grid gap-6 sm:grid-cols-2">
          {archiveItems.map((item) => (
            <Link
              key={item.slug}
              href={`/archive/${item.slug}`}
              className="group flex flex-col panel p-6 panel-hover"
            >
              <div className="flex items-center justify-between gap-2">
                <span className="font-mono text-xs text-signal-blue">
                  {item.era} · {item.category}
                </span>
                <span
                  className={`font-mono text-[10px] uppercase tracking-widest ${
                    item.status === "seeking"
                      ? "text-warm-copper"
                      : "text-electric-cyan"
                  }`}
                >
                  {item.status === "seeking" ? "Seeking Documents" : "Archived"}
                </span>
              </div>
              <h2 className="mt-3 font-headline text-lg font-bold leading-snug group-hover:text-electric-cyan">
                {item.title}
              </h2>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-technical-gray">
                {item.description}
              </p>
              <div className="mt-4">
                <ClaimLabel type={item.claim} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
