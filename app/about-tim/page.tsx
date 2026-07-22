import type { Metadata } from "next";
import ChapterHero from "@/components/ChapterHero";
import Prose from "@/components/Prose";
import FounderQuote from "@/components/FounderQuote";
import ImageFigure from "@/components/ImageFigure";
import ChapterEndCTA from "@/components/ChapterEndCTA";

export const metadata: Metadata = {
  title: "About Tim: Timothy Munro Roberts",
  description:
    "From Whackoland to Platformz—Timothy Munro Roberts (Tim Roberts) has spent most of his life building the layer beneath the next digital experience: BBSs, networks, data centers, digital distribution, cloud commerce and the operating foundation now powering Platformz and FUR4.",
};

const layers = [
  ["At Whackoland,", "it was a bulletin board."],
  ["At Savvis,", "it was the network."],
  ["At Intira,", "it was the data center and managed infrastructure."],
  ["At Phantom,", "it was digital game delivery to the living room."],
  ["At GameStreamer,", "it was white-label distribution."],
  ["At Savtira,", "it was cloud commerce."],
  ["At StationDigital,", "it was digital media."],
  ["At HashingSpace,", "it was emerging distributed infrastructure."],
  ["At Platformz,", "it is the operating foundation connecting the complete business."],
];

const distribution = [
  "Distributing messages.",
  "Distributing software.",
  "Distributing Internet traffic.",
  "Distributing applications.",
  "Distributing games.",
  "Distributing music.",
  "Distributing physical products.",
  "Distributing intelligence.",
];

export default function AboutTimPage() {
  return (
    <>
      <ChapterHero
        eyebrow="About Tim"
        title="Timothy Munro Roberts"
        subtitle={<p>From Whackoland to Platformz</p>}
      />

      <Prose>
        <ImageFigure
          src="/images/tim-roberts.jpg"
          alt="Timothy Munro Roberts wearing sunglasses and a mint-green polo shirt, photographed outdoors in warm evening light"
          width={900}
          height={1200}
          maxWidth="max-w-md"
          caption={<>Timothy Munro Roberts.</>}
          credit="Founder-supplied photograph"
          priority
        />

        <p>
          I have spent most of my life building the layer beneath the next
          digital experience.
        </p>
        <div className="my-8 space-y-2">
          {layers.map(([place, thing]) => (
            <p key={place} className="border-l-2 border-signal-blue/60 pl-4">
              <span className="font-mono text-sm font-semibold text-electric-cyan">
                {place}
              </span>{" "}
              {thing}
            </p>
          ))}
        </div>
        <p>
          My current professional record describes more than 25 years building
          high-availability, multi-tenant commerce and media systems,
          including the modular commerce and portal foundation now powering
          Platformz and FUR4.
        </p>

        <h2>It Has Always Been About Distribution</h2>
        <div className="my-8 space-y-1.5 font-headline text-lg text-archive-paper/90">
          {distribution.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
        <p>The technologies changed.</p>
        <p>The underlying challenge did not:</p>
        <p className="border-l-2 border-electric-cyan/60 py-1 pl-5 font-headline text-xl font-semibold leading-relaxed text-archive-paper">
          How do you connect people, systems and infrastructure so the user
          receives one simple, dependable experience?
        </p>

        <h2>Not a Perfect Founder Story</h2>
        <p>I have built companies that succeeded.</p>
        <p>I have built companies that failed.</p>
        <p>
          I have raised money. Lost control. Survived serious injury. Watched
          markets collapse.
        </p>
        <p>Made decisions I would repeat.</p>
        <p>Made decisions I would never make again.</p>

        <FounderQuote heading="Founder statement">
          “I have been early enough to look brilliant and early enough to look
          completely wrong. Sometimes the difference was only time. Built
          Before Cloud is not intended to turn my life into a perfect founder
          story. It is intended to preserve the curiosity, the architecture,
          the people, the mistakes, the successes, the failures and the
          lessons.”
        </FounderQuote>

        <div className="my-8 space-y-2 font-serif text-lg italic leading-relaxed text-archive-paper/90">
          <p>Vision without execution is a speech.</p>
          <p>Execution without governance can become chaos.</p>
          <p>Growth without controls can magnify the wrong things.</p>
          <p>
            Technology without timing can become an expensive preview of
            someone else’s future.
          </p>
        </div>
        <p>
          Platformz does not erase the mistakes or failures that came before
          it.
        </p>
        <p className="font-headline text-lg font-semibold text-archive-paper">
          It is stronger because of them.
        </p>
      </Prose>

      <ChapterEndCTA href="/origin" label="Begin the Story" />
    </>
  );
}
