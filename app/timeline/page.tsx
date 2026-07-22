import type { Metadata } from "next";
import ChapterHero from "@/components/ChapterHero";
import ClaimLabel, { type ClaimType } from "@/components/ClaimLabel";

export const metadata: Metadata = {
  title: "Timeline",
  description:
    "The Timothy Munro Roberts (Tim Roberts) timeline: from Whackoland BBS and the St. Louis modem community through Savvis, Intira, digital distribution and Platformz—one connected story.",
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
    body: "William Munro “Monty” Roberts III—Ford, Lincoln-Mercury, Young & Rubicam, the Walt Disney account, Anheuser-Busch and the Busch Clash, later an ordained Episcopal minister—exposes Tim to projects with capital, machinery and moving parts at national scale.",
    claim: "family-record",
  },
  {
    era: "Early 1980s",
    title: "Tim and Peter enter the modem world",
    body: "Identical twins Tim and Peter Roberts begin writing software and exploring bulletin boards, telecommunications and remote computer systems.",
    claim: "founder-recollection",
  },
  {
    era: "Nov 17, 1985",
    title: "Phrack is released from Metal Shop",
    body: "The first issue of Phrack is released under editor Taran King and distributed as electronic files from Metal Shop BBS. (Phrack)",
    claim: "contemporary-reporting",
  },
  {
    era: "Feb 1986",
    title: "Whackoland is publicly documented",
    body: "Phrack identifies Whackoland as a 300/1200-baud BBS operated by the W(hack)o Cracko Brothers with 40 megabytes of storage and a 100-user limit. (Phrack)",
    claim: "contemporary-reporting",
  },
  {
    era: "Mar 1986",
    title: "The proposed TAP revival",
    body: "Phrack reports plans for the W(hack)o Cracko Brothers to participate in restarting TAP while questioning whether the name had formally been transferred. (Phrack)",
    claim: "contemporary-reporting",
  },
  {
    era: "Early 1990s",
    title: "J&G Computer Solutions",
    body: "Tim works with Apple, Novell, Windows, routers and cross-platform business systems—learning to make incompatible systems communicate inside a company.",
    claim: "family-record",
  },
  {
    era: "1995",
    title: "Savvis is co-founded",
    body: "SEC biographies identify Tim Roberts as a Savvis co-founder and place the company’s founding in 1995.",
    claim: "verified-public-record",
  },
  {
    era: "1996–1997",
    title: "Apple becomes a defining customer",
    body: "Tim recalls completing the Apple relationship after being told the company could close. Public reporting later lists Apple among Savvis customers. (Internet News)",
    claim: "contemporary-reporting",
  },
  {
    era: "Feb 1997",
    title: "The Savvis Digital Broadcasting Network",
    body: "A NANOG archive post identifies Tim as Savvis vice president of emerging technologies and R&D and references the Savvis Digital Broadcasting Network. (SecLists)",
    claim: "contemporary-reporting",
  },
  {
    era: "Nov 1997",
    title: "Savvis records the 4.905-second result",
    body: "Savvis leads the reported Keynote and Boardwatch backbone-performance comparison. (Forbes)",
    claim: "contemporary-reporting",
  },
  {
    era: "1997–1998",
    title: "Tim leaves Savvis and begins Intira",
    body: "Public biographies state that Tim left Savvis approximately two years after co-founding it to begin Intira.",
    claim: "verified-public-record",
  },
  {
    era: "1998",
    title: "Digital Broadcast Network begins",
    body: "Forbes identifies Tim Roberts, Mark Ivie and Rich Skoba as the original founders of the company that became Intira. (Forbes)",
    claim: "contemporary-reporting",
  },
  {
    era: "1999",
    title: "Digital Broadcast Network becomes Intira",
    body: "Intira introduces the NetSourcing category and expands into New York while operating a broader North American network. (Tech Monitor)",
    claim: "contemporary-reporting",
  },
  {
    era: "1999–2001",
    title: "High-density data centers are designed and built",
    body: "Tim’s account is that the Intira facilities in St. Louis, Pleasanton and New York were designed around approximately seven times the electrical and cooling capability of the legacy data-center models being benchmarked.",
    claim: "founder-recollection",
  },
  {
    era: "Feb 2000",
    title: "Savvis completes its IPO",
    body: "Savvis sells 17 million shares at $24, raises approximately $408 million and reaches a reported market value of approximately $2.2 billion.",
    claim: "verified-public-record",
  },
  {
    era: "2000",
    title: "NetSourcing supports enterprise applications",
    body: "Intira provides complete managed environments for customers and projects including Games.com, Emerson, Armstrong and DoveBid.",
    claim: "contemporary-reporting",
  },
  {
    era: "2001",
    title: "Intira enters bankruptcy proceedings",
    body: "Divine agrees to acquire substantially all Intira assets through the bankruptcy process.",
    claim: "verified-public-record",
  },
  {
    era: "2000s",
    title: "Consumer platforms and digital distribution",
    body: "Tim’s later ventures explore game delivery, consumer hardware, white-label distribution, media and cloud commerce.",
    claim: "contemporary-reporting",
  },
  {
    era: "2011",
    title: "CenturyLink acquires Savvis",
    body: "Savvis becomes part of a global managed-hosting, colocation, network and cloud-services operation.",
    claim: "verified-public-record",
  },
  {
    era: "2023",
    title: "Platformz is formed",
    body: "Platformz is established to productize a lifetime of platform architecture, integration, multi-tenant software and operating experience into one reusable enterprise foundation.",
    claim: "corroborated-recollection",
  },
  {
    era: "2025–2026",
    title: "Platformz becomes production infrastructure",
    body: "FUR4, Rockerz and DMV Rawfeeders become proving environments for Platformz portals, integrations, workflows, data and control surfaces.",
    claim: "corroborated-recollection",
  },
  {
    era: "Today",
    title: "The complete architecture becomes visible",
    body: "Platformz positions DIaaS as its flagship product, Looking Glass as its executive command layer and SaaS Foundry as the path for creating new client-owned software companies.",
    claim: "corroborated-recollection",
  },
];

export default function TimelinePage() {
  return (
    <>
      <ChapterHero
        eyebrow="Timeline"
        title="From 300 Baud to Platformz"
        subtitle={
          <p>
            From one telephone line in St. Louis to a reusable enterprise
            operating foundation.
          </p>
        }
      />

      <div className="mx-auto max-w-4xl px-5 py-20">
        <ol className="rv-children relative">
          {/* Spine */}
          <span
            aria-hidden
            className="absolute bottom-4 left-[7px] top-4 w-px bg-gradient-to-b from-electric-cyan/50 via-signal-blue/30 to-transparent sm:left-[10.35rem]"
          />
          {entries.map((entry) => (
            <li
              key={entry.era + entry.title}
              className="group relative grid gap-3 pb-14 pl-10 last:pb-0 sm:grid-cols-[8.5rem_1fr] sm:gap-8 sm:pl-0"
            >
              {/* Node */}
              <span
                aria-hidden
                className="absolute left-0 top-[7px] h-[15px] w-[15px] rounded-full border border-electric-cyan/60 bg-network-black transition-all duration-300 group-hover:border-electric-cyan group-hover:shadow-[0_0_16px_rgba(64,217,232,0.6)] sm:left-[9.9rem]"
              >
                <span className="absolute inset-[4px] rounded-full bg-electric-cyan/70" />
              </span>
              <p className="pt-0.5 font-mono text-sm font-semibold tracking-wide text-electric-cyan sm:text-right">
                {entry.era}
              </p>
              <div className="sm:pl-10">
                <h2 className="font-headline text-[1.35rem] font-bold leading-snug tracking-[-0.01em]">
                  {entry.title}
                </h2>
                <p className="mt-3 leading-[1.8] text-technical-gray">
                  {entry.body}
                </p>
                <div className="mt-4">
                  <ClaimLabel type={entry.claim} />
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}
