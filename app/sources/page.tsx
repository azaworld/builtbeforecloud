import type { Metadata } from "next";
import ChapterHero from "@/components/ChapterHero";
import ClaimLabel, { type ClaimType } from "@/components/ClaimLabel";

export const metadata: Metadata = {
  title: "Sources: The Public Record Behind Timothy Munro Roberts's Story",
  description:
    "The editorial standard and direct weblinks behind the Tim Roberts story—Phrack archives, SEC filings, Forbes, Wired and contract records covering Whackoland, Savvis, Intira and Platformz.",
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

type SourceLink = { label: string; url: string };
type SourceGroup = { heading: string; links: SourceLink[]; note?: string };

const sourceGroups: SourceGroup[] = [
  {
    heading: "William Munro Roberts III, Ford and Motorsports",
    links: [
      {
        label: "Autoweek — “Beer Booster”",
        url: "https://www.autoweek.com/news/a2034936/beer-booster/",
      },
      {
        label:
          "Hemmings — Monty Roberts and the 1967 Mercury Cougar Trans-Am program",
        url: "https://www.hemmings.com/stories/the-sign-of-the-cat-1967-mercury-cougar/",
      },
      {
        label:
          "Motorsport.com — Tim Roberts on his father, Ford, Ontario Motor Speedway, Anheuser-Busch, Paul Newman and Mario Andretti",
        url: "https://au.motorsport.com/indycar/news/irl-treadway-racing-forms-partnership-with-phoenix-networks/1805451/",
      },
    ],
    note: "The Autoweek source is the strongest currently available public biography of Monty Roberts’s Ford, Busch beer and Busch Clash work.",
  },
  {
    heading: "Whackoland, the W(hack)o Cracko Brothers, Metal Shop and Phrack",
    links: [
      {
        label:
          "Phrack Volume 1, Issue 1 — First Phrack issue, November 17, 1985",
        url: "http://phrack.org/issues/1/1.html",
      },
      {
        label:
          "Phrack Volume 1, Issue 3, File 10 — W(hack)o Cracko Brothers and Whackoland-era material",
        url: "http://phrack.org/issues/3/10.html",
      },
      {
        label:
          "Phrack Volume 1, Issue 4, File 10 — TAP Revival and New TAP discussions",
        url: "http://phrack.org/issues/4/10.html",
      },
      {
        label:
          "Phrack Issue 20, File 3 — Metal Shop, Phrack and Whackoland chronology",
        url: "http://phrack.org/issues/20/3.html",
      },
      {
        label: "Phrack Issue 32, File 2 — Knight Lightning retrospective",
        url: "http://phrack.org/issues/32/2.html",
      },
      {
        label:
          "Phrack Issue 35, File 1 — Phrack’s growth from BBS files to Internet distribution",
        url: "http://phrack.org/issues/35/1.html",
      },
    ],
    note: "These links establish the chronology: Phrack launched in November 1985, Whackoland appeared in the documented timeline in February 1986, and the New TAP discussions followed.",
  },
  {
    heading: "Timothy Roberts Public SEC Biographies",
    links: [
      {
        label:
          "SEC biography covering Savvis, Intira, Broadband Investment Group and the boating accident",
        url: "https://www.sec.gov/Archives/edgar/data/1145019/000114420405015035/v018100_sb-2a.htm",
      },
      {
        label: "Additional SEC annual filing with Savvis and Intira history",
        url: "https://www.sec.gov/Archives/edgar/data/1145019/000114420405012193/v016511_10ksb.htm",
      },
      {
        label:
          "Later SEC biography describing NetSourcing and virtualized hosting",
        url: "https://www.sec.gov/Archives/edgar/data/1578731/000164033415000096/hshs-2015may31_10k.htm",
      },
    ],
    note: "These are public filings, but the biographical language was supplied by the filing companies. Use them as public records of the claims, not as independent verification of every “first” assertion.",
  },
  {
    heading: "Andrew Gladney and Savvis Origins",
    links: [
      {
        label:
          "Riverfront Times — Andrew Gladney, Seven-Up family and early Savvis financing",
        url: "https://www.riverfronttimes.com/fizzled-out-andrew-gladney-heir-to-the-7-up-fortune-is-off-to-a-federal-penitentiary/",
      },
    ],
    note: "This source is used only for the relevant family and Savvis background. The article also discusses unrelated later legal and personal matters that are not repeated in the Built Before Cloud narrative.",
  },
  {
    heading: "Savvis Network Architecture and Performance",
    links: [
      {
        label: "Forbes — “Savvy Speed Surfing,” December 1997",
        url: "https://www.forbes.com/1997/12/15/feat.html",
      },
      {
        label:
          "Wired — Internet backbone bottlenecks and the 4.905-second Savvis result",
        url: "https://www.wired.com/1997/11/backbones-wheel-and-deal-to-keep-net-moving/",
      },
      {
        label:
          "InternetNews — Apple, CDNow, PointCast and Omron listed as Savvis customers",
        url: "https://www.internetnews.com/archive/savvis-acquires-pacific-northwest-isp/",
      },
      {
        label: "Lightwave — Omron Electronics national intranet through Savvis",
        url: "https://www.lightwaveonline.com/home/article/16652156/omron-electronics-inc",
      },
      {
        label:
          "Channel Futures — Bridge acquisition and the expanded Savvis network",
        url: "https://www.channelfutures.com/unified-communications/savvis-debuts-global-network-for-vpns",
      },
    ],
    note: "The Forbes and InternetNews articles are particularly useful because they document Savvis’s private-network strategy and publicly identify Apple and other early customers.",
  },
  {
    heading: "Savvis IPO and Later Acquisition",
    links: [
      {
        label:
          "Wired — Savvis IPO, $408 million raised and approximately $2.2 billion market value",
        url: "https://www.wired.com/2000/02/savvis-gets-ipo-savvy",
      },
      {
        label: "Official CenturyLink–Savvis acquisition announcement",
        url: "https://ir.centurylink.com/news/news-details/2011/CenturyLink-and-Savvis-Complete-Merger/default.aspx",
      },
      {
        label: "SEC filing covering CenturyLink’s acquisition of Savvis",
        url: "https://www.sec.gov/Archives/edgar/data/18926/000104746911009154/a2206088z10-q.htm",
      },
      {
        label: "SEC-filed CenturyLink–Savvis merger announcement",
        url: "https://www.sec.gov/Archives/edgar/data/18926/000095012311040198/y91042exv99w1.htm",
      },
    ],
    note: "The Wired article documents the IPO figures, while CenturyLink and SEC records document the later acquisition.",
  },
  {
    heading: "Intira Founders and NetSourcing",
    links: [
      {
        label: "Forbes — “Intira’s Netsourcery,” February 2000",
        url: "https://www.forbes.com/2000/02/23/feat.html",
      },
      {
        label:
          "Tech Monitor — Digital Broadcast Network becomes Intira and introduces NetSourcing",
        url: "https://www.techmonitor.ai/technology/dbn_now_intira_claims_slice_of_20bn_netsourcing_market",
      },
      {
        label:
          "Computerworld — Intira operated everything beneath the application",
        url: "https://www.computerworld.com/article/1568403/intira-provides-the-platform-for-enterprise-applications.html",
      },
    ],
    note: "These sources identify Tim Roberts, Mark Ivie and Rich Skoba as Intira’s original founders and describe NetSourcing as a managed environment covering servers, storage, security, networking and operations.",
  },
  {
    heading: "Intira Customer and Contract Evidence",
    links: [
      {
        label: "Original Intira–DoveBid NetSourcing agreement",
        url: "https://contracts.justia.com/companies/dovebid-inc-80296/contract/858358/",
      },
      {
        label: "Computerworld — Hasbro selects Intira for Games.com",
        url: "https://www.computerworld.com/article/1359551/hasbro-chooses-intira-to-support-games-com.html",
      },
    ],
    note: "The DoveBid agreement is one of the strongest sources because it documents NetSourcing as an actual contracted service with infrastructure responsibilities and service-level commitments.",
  },
  {
    heading: "Intira Bankruptcy and Asset Sale",
    links: [
      {
        label:
          "SEC filing on divine’s agreement to acquire substantially all Intira assets",
        url: "https://www.sec.gov/Archives/edgar/data/1097516/000091205701532389/a2059376z424b3.htm",
      },
      {
        label: "Additional SEC Intira asset-purchase filing",
        url: "https://www.sec.gov/Archives/edgar/data/1097516/000091205701532404/a2059381z424b3.htm",
      },
    ],
    note: "These records are used instead of claiming that Intira simply became Data Return or Terremark. The documented asset history is more complicated.",
  },
  {
    heading: "Tim Roberts’s Historical Intira Data-Center Video",
    links: [
      {
        label: "Founder-supplied data-center presentation",
        url: "https://www.youtube.com/watch?v=0LDF9qTTie4",
      },
    ],
    note: "This is the direct video link supporting Tim’s recollection about the next-generation data-center design, electrical capacity, cooling capacity and the architecture behind the facilities. Until the original engineering drawings and calculations are published, the seven-times power-and-cooling figure is identified as a founder-supplied claim.",
  },
  {
    heading: "Modern AI Data-Center Comparison Sources",
    links: [
      {
        label:
          "NVIDIA — 800 VDC architecture for next-generation AI factories",
        url: "https://www.nvidia.com/en-us/data-center/technologies/800-vdc-architecture/",
      },
      {
        label:
          "NVIDIA Developer Blog — Building the 800 VDC ecosystem for AI factories",
        url: "https://developer.nvidia.com/blog/building-the-800-vdc-ecosystem-for-efficient-scalable-ai-factories/",
      },
      {
        label: "NVIDIA MGX data-center architecture",
        url: "https://www.nvidia.com/en-us/data-center/products/mgx/",
      },
      {
        label:
          "U.S. Department of Energy — Data-center cooling efficiency ($40 million for more efficient cooling)",
        url: "https://www.energy.gov/articles/doe-announces-40-million-more-efficient-cooling-data-centers",
      },
      {
        label: "NIST definition of cloud computing",
        url: "https://csrc.nist.gov/pubs/sp/800/145/final",
      },
    ],
    note: "These sources provide modern technical context for power density, cooling, integrated infrastructure and cloud definitions. They do not independently verify Intira’s historical design or imply that NVIDIA endorses the comparison.",
  },
  {
    heading: "Platformz Public Links",
    links: [
      { label: "Platformz homepage", url: "https://platformz.us/" },
      { label: "About Platformz", url: "https://platformz.us/about" },
      {
        label: "Platformz packages and engagement models",
        url: "https://platformz.us/packages",
      },
      { label: "Contact Platformz", url: "https://platformz.us/contact" },
    ],
    note: "The current Platformz site publicly describes the company as building operating systems behind modern brands and connecting portals, commerce, workflows, logistics, data and automation.",
  },
  {
    heading: "Platformz Production Proof Through FUR4",
    links: [
      { label: "FUR4 main site", url: "https://fur4.com/" },
      { label: "FUR4 Dealer Portal", url: "https://dealer.fur4.com/" },
      { label: "FUR4 Retailer Portal", url: "https://retailer.fur4.com/" },
      { label: "FUR4 Veterinary Portal", url: "https://vet.fur4.com/" },
      {
        label: "FUR4 Professional Groomer Portal",
        url: "https://pro.fur4.com/",
      },
      {
        label: "FUR4 Wholesale and Distributor Portal",
        url: "https://wholesale.fur4.com/",
      },
      { label: "FUR4 Referral Platform", url: "https://refer.fur4.com/" },
    ],
    note: "These live portals provide public proof of the multi-portal model described in the Platformz chapter.",
  },
];

const openClaims = [
  "William Munro Roberts III’s exact Young & Rubicam title.",
  "His precise responsibility for the Walt Disney account.",
  "His exact Busch Entertainment responsibilities.",
  "His management of blimp, balloon or theme-park budgets.",
  "His Episcopal ordination.",
  "The names of the three New York churches.",
  "Graves Capital’s legal formation and investment records.",
  "The Savvis founder litigation and settlement.",
  "The exact Apple contract value and term.",
  "The seven-times electrical and cooling calculations.",
  "Intira’s blade-server and virtual-machine deployment dates.",
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
            Every major historical claim displays one of these
            classifications, and the public record behind the story is linked
            below.
          </p>
        }
      />

      <div className="mx-auto max-w-3xl px-4 py-16">
        {/* ============ CLASSIFICATIONS ============ */}
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

        {/* ============ DIRECT WEBLINKS ============ */}
        <h2 className="mt-20 text-center font-headline text-3xl font-bold">
          Direct Weblinks
        </h2>
        <p className="mt-4 text-center text-technical-gray">
          The public sources currently supporting the Built Before Cloud
          narrative, grouped by chapter and subject.
        </p>

        <div className="mt-12 space-y-10">
          {sourceGroups.map((group) => (
            <section
              key={group.heading}
              className="rounded-sm border border-signal-blue/30 bg-infra-navy/50 p-6"
            >
              <h3 className="font-headline text-lg font-bold text-archive-paper">
                {group.heading}
              </h3>
              <ul className="mt-4 space-y-3">
                {group.links.map((link) => (
                  <li key={link.url}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm leading-relaxed text-electric-cyan hover:underline"
                    >
                      {link.label}
                    </a>
                    <p className="mt-0.5 break-all font-mono text-[11px] text-technical-gray/70">
                      {link.url}
                    </p>
                  </li>
                ))}
              </ul>
              {group.note && (
                <p className="mt-4 border-t border-signal-blue/20 pt-4 font-serif text-sm italic leading-relaxed text-technical-gray">
                  {group.note}
                </p>
              )}
            </section>
          ))}
        </div>

        {/* ============ OPEN CLAIMS ============ */}
        <section className="mt-16 rounded-sm border border-warm-copper/40 bg-infra-navy/60 p-6">
          <h2 className="font-headline text-xl font-bold text-warm-copper">
            Claims That Still Need Public Weblinks
          </h2>
          <p className="mt-3 text-sm text-technical-gray">
            Reliable public web sources have not yet been located for:
          </p>
          <ul className="mt-4 list-disc space-y-1.5 pl-6 text-sm text-archive-paper/90">
            {openClaims.map((claim) => (
              <li key={claim}>{claim}</li>
            ))}
          </ul>
          <p className="mt-4 border-t border-warm-copper/20 pt-4 text-sm leading-relaxed text-technical-gray">
            Those sections continue using{" "}
            <ClaimLabel type="family-record" /> or{" "}
            <ClaimLabel type="founder-recollection" /> labels until the
            relevant records are digitized and published. If you can help,{" "}
            <a href="/contribute" className="text-electric-cyan hover:underline">
              contribute to the archive
            </a>
            .
          </p>
        </section>

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
