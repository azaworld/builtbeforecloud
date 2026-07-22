import type { Metadata } from "next";
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
        eyebrow="Archive"
        title="The Evidence Archive"
        subtitle={
          <p>
            Documents, reconstructions and records—each labeled by evidence
            classification. Items marked “seeking” are open requests for
            documents and participant accounts.
          </p>
        }
      />

      <div className="mx-auto max-w-5xl px-4 py-16">
        <p className="mb-10 rounded-sm border border-signal-blue/30 bg-infra-navy/60 p-4 font-mono text-xs leading-relaxed text-technical-gray">
          Historical material displayed for documentary and educational
          purposes. All trademarks and logos remain the property of their
          respective owners. No endorsement or current affiliation is implied.
        </p>

        <div className="grid gap-6 sm:grid-cols-2">
          {archiveItems.map((item) => (
            <Link
              key={item.slug}
              href={`/archive/${item.slug}`}
              className="group flex flex-col rounded-sm border border-signal-blue/30 bg-infra-navy/50 p-6 transition-colors hover:border-electric-cyan/60"
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
