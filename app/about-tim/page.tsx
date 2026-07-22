import type { Metadata } from "next";
import ChapterHero from "@/components/ChapterHero";
import Prose from "@/components/Prose";
import FounderQuote from "@/components/FounderQuote";
import ChapterEndCTA from "@/components/ChapterEndCTA";

export const metadata: Metadata = {
  title: "About Tim: Timothy Munro Roberts",
  description:
    "From Whackoland to Platformz—Timothy Munro Roberts (Tim Roberts) has spent most of his life building the layer beneath the next digital experience.",
};

export default function AboutTimPage() {
  return (
    <>
      <ChapterHero
        eyebrow="About Tim"
        title="Timothy Munro Roberts"
        subtitle={<p>From Whackoland to Platformz</p>}
      />

      <Prose>
        <p>
          I have spent most of my life building the layer beneath the next
          digital experience.
        </p>
        <div className="my-8 space-y-2">
          <p className="border-l-2 border-signal-blue/60 pl-4">
            <span className="font-mono text-sm font-semibold text-electric-cyan">
              At Whackoland,
            </span>{" "}
            it was a bulletin board.
          </p>
          <p className="border-l-2 border-signal-blue/60 pl-4">
            <span className="font-mono text-sm font-semibold text-electric-cyan">
              At Savvis,
            </span>{" "}
            it was the network.
          </p>
          <p className="border-l-2 border-signal-blue/60 pl-4">
            <span className="font-mono text-sm font-semibold text-electric-cyan">
              At Intira,
            </span>{" "}
            it was managed computing infrastructure.
          </p>
          <p className="border-l-2 border-signal-blue/60 pl-4">
            <span className="font-mono text-sm font-semibold text-electric-cyan">
              At later ventures,
            </span>{" "}
            it was games, media, marketplaces, subscriptions and digital
            commerce.
          </p>
          <p className="border-l-2 border-signal-blue/60 pl-4">
            <span className="font-mono text-sm font-semibold text-electric-cyan">
              At Platformz,
            </span>{" "}
            it is the operating foundation connecting the entire business.
          </p>
        </div>

        <FounderQuote heading="Founder statement">
          “I have been early enough to look brilliant and early enough to look
          completely wrong. Sometimes the difference was only time. Platformz
          does not erase the mistakes or failures that came before it. It is
          stronger because of them.”
        </FounderQuote>
      </Prose>

      <ChapterEndCTA href="/origin" label="Begin the Story" />
    </>
  );
}
