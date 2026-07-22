import type { Metadata } from "next";
import ChapterHero from "@/components/ChapterHero";
import ClaimLabel, { type ClaimType } from "@/components/ClaimLabel";

export const metadata: Metadata = {
  title: "Timeline",
  description:
    "From Whackoland BBS and the St. Louis modem community through Savvis, Intira, digital distribution and Platformz—one connected timeline.",
};

type Entry = {
  era: string;
  title: string;
  body: string;
  claim: ClaimType;
};

const entries: Entry[] = [
  {
    era: "1970s",
    title: "The man who made big ideas feel normal",
    body: "William Munro “Monty” Roberts III—Ford, Young & Rubicam, Anheuser-Busch, marketing, entertainment and motorsports executive, later an ordained Episcopal minister—exposes Tim to projects with capital, machinery and moving parts at national scale.",
    claim: "family-record",
  },
  {
    era: "Early 1980s",
    title: "The W(hack)o Cracko Brothers",
    body: "At fourteen, identical twins Tim and Peter Roberts connect computers over ordinary telephone lines in St. Louis and operate Whackoland BBS: users, identities, passwords, permissions, private sections, downloadable software and two teenage administrators keeping everything running.",
    claim: "founder-recollection",
  },
  {
    era: "1985",
    title: "Phrack launches",
    body: "Out of the St. Louis modem community that included Metal Shop BBS and Whackoland, Phrack launches. The proposed New TAP project emerges afterward; Tim recalls deciding not to proceed after concluding the legal and operational risks were too large.",
    claim: "contemporary-reporting",
  },
  {
    era: "Late 1980s–1990s",
    title: "J&G Computer Solutions",
    body: "Tim works with Apple, Novell, Windows, routers and business systems that did not naturally communicate—learning to make incompatible systems talk inside a company.",
    claim: "founder-recollection",
  },
  {
    era: "1990s",
    title: "DiamondNet becomes Savvis",
    body: "Tim meets Andrew Gladney; the company begins as DiamondNet and later becomes Savvis, built around controlling more of the route, reducing unnecessary network handoffs and engineering around the bottlenecks preventing reliable audio, video and enterprise applications.",
    claim: "founder-recollection",
  },
  {
    era: "Late 1990s",
    title: "Bridge and the Savvis IPO",
    body: "After Tim’s departure, Bridge Information Systems acquires control. Savvis later completes a public offering and expands into managed hosting, colocation and cloud services.",
    claim: "verified-public-record",
  },
  {
    era: "Late 1990s–2000s",
    title: "Intira and NetSourcing",
    body: "Digital Broadcast Network becomes Intira. NetSourcing delivers networking, computing, storage, security, monitoring and operations as a recurring managed service from privately operated data centers in St. Louis, Pleasanton and New York City—an important commercial precursor to cloud computing.",
    claim: "founder-recollection",
  },
  {
    era: "2000s",
    title: "Digital distribution and consumer platforms",
    body: "Tim builds and participates in ventures involving game delivery, consumer hardware, white-label storefronts and digital distribution.",
    claim: "contemporary-reporting",
  },
  {
    era: "2010s",
    title: "Commerce, streaming and emerging infrastructure",
    body: "The operating model expands into cloud commerce, media, subscriptions, payments and distributed infrastructure.",
    claim: "contemporary-reporting",
  },
  {
    era: "2023",
    title: "Platformz is formed",
    body: "Platformz is established to productize a lifetime of architecture, integration, multi-tenant software and operating experience into one reusable enterprise foundation. Internal planning describes the company as a horizontal operating layer rather than a traditional agency or isolated commerce product.",
    claim: "corroborated-recollection",
  },
  {
    era: "2025–2026",
    title: "The platform becomes production infrastructure",
    body: "FUR4, Rockerz and DMV Rawfeeders provide active operating environments where Platformz’s portals, integrations, workflows and control surfaces are tested against real business complexity.",
    claim: "corroborated-recollection",
  },
  {
    era: "Today",
    title: "The complete architecture becomes visible",
    body: "Platformz positions DIaaS as its flagship product, Looking Glass as its executive command layer and SaaS Foundry as the path for creating new client-owned software businesses.",
    claim: "corroborated-recollection",
  },
];

export default function TimelinePage() {
  return (
    <>
      <ChapterHero
        eyebrow="Timeline"
        title="Built Layer by Layer"
        subtitle={
          <p>
            From one telephone line in St. Louis to a reusable enterprise
            operating foundation.
          </p>
        }
      />

      <div className="mx-auto max-w-3xl px-4 py-16">
        <ol className="relative border-l border-signal-blue/40 pl-8">
          {entries.map((entry) => (
            <li key={entry.era + entry.title} className="mb-12 last:mb-0">
              <span className="absolute -left-[5px] mt-2 h-2.5 w-2.5 rounded-full bg-electric-cyan" />
              <p className="font-mono text-sm font-semibold text-electric-cyan">
                {entry.era}
              </p>
              <h2 className="mt-1 font-headline text-xl font-bold">
                {entry.title}
              </h2>
              <p className="mt-2 leading-relaxed text-technical-gray">
                {entry.body}
              </p>
              <div className="mt-3">
                <ClaimLabel type={entry.claim} />
              </div>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}
