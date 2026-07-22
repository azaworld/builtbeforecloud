import type { Metadata } from "next";
import ChapterHero from "@/components/ChapterHero";
import ClaimLabel, { type ClaimType } from "@/components/ClaimLabel";

export const metadata: Metadata = {
  title: "Sources",
  description:
    "How Built Before Cloud classifies evidence: the six claim labels used across every chapter of the project.",
};

const classifications: {
  type: ClaimType;
  name: string;
  definition: string;
}[] = [
  {
    type: "verified-public-record",
    name: "Verified Public Record",
    definition:
      "Supported by an official filing, contract, court record, authenticated corporate document or other primary source.",
  },
  {
    type: "contemporary-reporting",
    name: "Contemporary Reporting",
    definition:
      "Supported by journalism, technical archives or trade publications created close to the event.",
  },
  {
    type: "founder-recollection",
    name: "Founder Recollection",
    definition:
      "Tim’s personal memory that has not yet been independently verified.",
  },
  {
    type: "family-record",
    name: "Family Record",
    definition:
      "Information supplied by Tim or his family but not yet verified through external records.",
  },
  {
    type: "corroborated-recollection",
    name: "Corroborated Recollection",
    definition:
      "A firsthand account supported by another participant, photograph, email, agreement, calendar record or other evidence.",
  },
  {
    type: "disputed-or-incomplete",
    name: "Disputed or Incomplete",
    definition:
      "Sources conflict, key documents have not yet been found or another participant may provide a materially different account.",
  },
];

export default function SourcesPage() {
  return (
    <>
      <ChapterHero
        eyebrow="Sources"
        title="The Editorial Standard"
        subtitle={
          <p>
            This site is intended to be entertaining, personal and positive
            without turning Tim’s life into unsupported founder mythology.
            Every major historical claim displays one of these classifications.
          </p>
        }
      />

      <div className="mx-auto max-w-3xl px-4 py-16">
        <div className="space-y-6">
          {classifications.map((c) => (
            <div
              key={c.type}
              className="rounded-sm border border-signal-blue/30 bg-infra-navy/50 p-6"
            >
              <ClaimLabel type={c.type} />
              <h2 className="mt-3 font-headline text-xl font-bold">
                {c.name}
              </h2>
              <p className="mt-2 text-technical-gray">{c.definition}</p>
            </div>
          ))}
        </div>

        <p className="mt-12 font-mono text-xs leading-relaxed text-technical-gray">
          Built Before Cloud combines public records, contemporary journalism,
          original documents, technical archives, interviews and Tim
          Roberts’s firsthand recollections. Significant claims are labeled so
          readers can distinguish documented history from personal memory.
        </p>
      </div>
    </>
  );
}
