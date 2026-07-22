import type { Metadata } from "next";
import ChapterHero from "@/components/ChapterHero";
import Prose from "@/components/Prose";
import FounderQuote from "@/components/FounderQuote";
import ClaimLabel from "@/components/ClaimLabel";
import ChapterEndCTA from "@/components/ChapterEndCTA";

export const metadata: Metadata = {
  title: "Savvis: Fixing the Road Before Streaming Arrived",
  description:
    "How Tim Roberts (Timothy Munro Roberts) co-founded Savvis: DiamondNet's transformation and the attempt to engineer around the network bottlenecks preventing reliable media and enterprise Internet services.",
};

export default function SavvisPage() {
  return (
    <>
      <ChapterHero
        eyebrow="Chapter One"
        ghost="01"
        title={
          <>
            Savvis: Fixing the Road
            <br />
            Before Streaming Arrived
          </>
        }
      />

      <Prose>
        <p>The early Internet was a network of networks.</p>
        <p>That was its genius.</p>
        <p>It was also its weakness.</p>
        <p>
          Traffic could cross multiple providers, public exchanges and routes
          nobody controlled from end to end.
        </p>
        <p>
          A customer could buy a fast circuit and still have a terrible
          experience.
        </p>

        <FounderQuote>
          “The industry was selling customers faster driveways. I was focused
          on the traffic jam at the highway entrance.”
        </FounderQuote>

        <h2>J&amp;G Computer Solutions</h2>
        <p>
          <ClaimLabel type="founder-recollection" />
        </p>
        <p>
          At J&amp;G, Tim worked with Apple, Novell, Windows, routers and
          business systems that did not naturally communicate.
        </p>

        <FounderQuote>
          “At Whackoland, I learned to connect remote people to one computer.
          At J&amp;G, I learned to connect computers inside a company. Savvis
          began when I started asking how to connect entire companies—and
          eventually a country—more intelligently.”
        </FounderQuote>

        <h2>Andrew Gladney and DiamondNet</h2>
        <p>
          <ClaimLabel type="founder-recollection" />
        </p>
        <p>
          Tim met Andrew Graves Gladney while working at J&amp;G.
        </p>
        <p>Andrew supplied early financial capability.</p>
        <p>Tim supplied the network and operating vision.</p>
        <p>
          The company began as DiamondNet and later became Savvis.
        </p>
        <p>
          Tim recalls Andrew telling him that the company would close before
          Tim completed the Apple relationship.
        </p>

        <h2>Apple</h2>
        <p>
          <ClaimLabel type="founder-recollection" />
        </p>
        <p>
          Tim’s account is that an approach involving Steve Jobs opened the
          path, followed by enterprise sales and technical work involving
          Apple personnel.
        </p>

        <FounderQuote>
          “Apple did not merely provide revenue. Apple kept the company alive.
          Before Apple, we had an architecture and an argument. After Apple, we
          had proof that a respected technology company would trust the
          network.”
        </FounderQuote>

        <h2>Gateway Venture Partners</h2>
        <p>
          <ClaimLabel type="founder-recollection" />
        </p>
        <p>Tim’s father introduced him to Dick Ford.</p>
        <p>
          Tim arranged the meeting between Dick Ford and Andrew Gladney.
        </p>
        <p>Gateway supplied institutional capital.</p>
        <p>
          Bob Murphy later joined as CFO and helped build a more sophisticated
          financial operation.
        </p>

        <div className="my-8 panel p-6">
          <div className="mb-3">
            <ClaimLabel type="disputed-or-incomplete" />
          </div>
          <p className="text-archive-paper/90">
            All exact investment and fundraising figures remain labeled until
            supporting documents are archived.
          </p>
        </div>

        <h2>The Founder Dispute</h2>
        <FounderQuote>
          “As Savvis became more valuable, Andrew and I began fighting over
          ownership and control. I believed he was attempting to squeeze me out
          for his own financial benefit. Litigation followed, the matter
          settled and I left the company.”
        </FounderQuote>

        <div className="my-8 panel panel-copper p-6">
          <p className="font-mono text-xs uppercase tracking-widest text-warm-copper">
            Permanent Right-of-Response Notice
          </p>
          <p className="mt-3 text-sm leading-relaxed text-technical-gray">
            This section presents Tim Roberts’s account of a disputed period.
            Andrew Gladney or his representatives are permanently invited to
            provide their account, corrections or supporting documents, which
            will be reviewed and published alongside this chapter. Contact
            options are available on the{" "}
            <a href="/corrections" className="text-electric-cyan hover:underline">
              Corrections
            </a>{" "}
            page.
          </p>
        </div>

        <h2>Bridge and the IPO</h2>
        <p>
          <ClaimLabel type="verified-public-record" />
        </p>
        <p>Savvis continued after Tim’s departure.</p>
        <p>Bridge Information Systems acquired control.</p>
        <p>
          The company later completed a public offering and eventually expanded
          into managed hosting, colocation and cloud services.
        </p>

        <FounderQuote heading="Founder reflection">
          “My chapter was the beginning. The company that eventually became
          part of CenturyLink was built by thousands of people over many years.
          I can be proud of the foundation without claiming ownership of
          everything that followed.”
        </FounderQuote>
      </Prose>

      <ChapterEndCTA href="/intira" label="Continue to Intira" />
    </>
  );
}
