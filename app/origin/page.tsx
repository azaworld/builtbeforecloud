import type { Metadata } from "next";
import ChapterHero from "@/components/ChapterHero";
import Prose from "@/components/Prose";
import FounderQuote from "@/components/FounderQuote";
import ClaimLabel from "@/components/ClaimLabel";
import ChapterEndCTA from "@/components/ChapterEndCTA";

export const metadata: Metadata = {
  title: "The Origin: The Man Who Made Big Ideas Feel Normal",
  description:
    "How William Munro 'Monty' Roberts III—Ford, Young & Rubicam, Anheuser-Busch, motorsports and later Episcopal ministry—taught Tim Roberts (Timothy Munro Roberts) to think at scale.",
};

export default function OriginPage() {
  return (
    <>
      <ChapterHero
        eyebrow="Chapter Zero"
        ghost="00"
        title={
          <>
            The Man Who Made
            <br />
            Big Ideas Feel Normal
          </>
        }
        subtitle={<p className="font-mono">William Munro Roberts III</p>}
      />

      <Prose>
        <p>
          Before I tried to build national Internet backbones, private data
          centers, cloud platforms or global commerce infrastructure, I watched
          my father turn ambitious corporate ideas into things people could
          see, hear, visit and remember.
        </p>
        <p>
          His name was William Munro Roberts III, although nearly everyone
          called him Monty.
        </p>

        <div className="my-8 panel p-6">
          <div className="mb-3">
            <ClaimLabel type="family-record" />
          </div>
          <p className="text-archive-paper/90">
            William Munro “Monty” Roberts III was a Ford, Young &amp; Rubicam,
            Anheuser-Busch, marketing, entertainment and motorsports executive
            who later became an ordained Episcopal minister.{" "}
            <strong>He was not the horse trainer of the same name.</strong>
          </p>
        </div>

        <p>My father did not think in small campaigns.</p>
        <p>He thought in experiences.</p>

        <ul className="font-headline text-lg text-archive-paper">
          <li>Race teams.</li>
          <li>Race cars.</li>
          <li>Blimps.</li>
          <li>Hot-air balloons.</li>
          <li>Theme parks.</li>
          <li>Celebrities.</li>
          <li>National brands.</li>
          <li>Major events.</li>
        </ul>

        <p>
          Projects with enough money, machinery and moving parts to intimidate
          most people before they began.
        </p>
        <p>
          To the companies he worked for, these were serious capital
          investments in marketing, entertainment and public attention.
        </p>
        <p>To me, they were childhood.</p>

        <FounderQuote>
          “My father made enormous projects seem normal. I watched him manage
          budgets and teams capable of building race programs, entertainment
          properties, promotional aircraft and large public experiences. I grew
          up believing that if an idea mattered, you found the people,
          organized the capital and built it.”
        </FounderQuote>

        <h2>Young &amp; Rubicam and Disney</h2>
        <p>
          <ClaimLabel type="family-record" />
        </p>
        <p>
          Family records identify my father as working at Young &amp; Rubicam,
          where he managed work connected with the Walt Disney account.
        </p>
        <p>Disney was not merely selling films or theme-park tickets.</p>
        <p>
          It was building an entire connected universe around the customer:
        </p>
        <ul>
          <li>Stories</li>
          <li>Characters</li>
          <li>Physical destinations</li>
          <li>Merchandise</li>
          <li>Service</li>
          <li>Visual identity</li>
          <li>Memory</li>
        </ul>

        <FounderQuote>
          “Through my father, I saw that Disney was not one product. It was an
          ecosystem. Every public detail had to feel connected to the same
          promise. That became central to how I later thought about technology
          platforms: the user should experience one coherent environment even
          when dozens of systems and operating teams are working behind it.”
        </FounderQuote>

        <h2>Confidence Around Powerful People</h2>
        <p>
          My childhood included racetracks, executives, wealthy families,
          professional drivers, actors, team owners and major corporate
          programs.
        </p>
        <p>They remained impressive.</p>
        <p>They did not seem unreachable.</p>

        <FounderQuote>
          “I watched my father speak with people most children knew only from
          television. That removed a fear barrier from me. It helped me call
          Steve Jobs, approach Andrew Gladney, sit with venture capitalists and
          ask major companies to finance ideas that did not yet fit an
          established category.”
        </FounderQuote>

        <p>His contacts created introductions.</p>
        <p>His example created confidence.</p>

        <h2>Ministry</h2>
        <p>
          <ClaimLabel type="family-record" />
        </p>
        <p>
          Later in life, my father became an ordained Episcopal minister and,
          according to family records, served or led three churches in New
          York.
        </p>

        <FounderQuote>
          “At first, corporate marketing and ministry look like completely
          different lives. The more I think about it, the more continuity I
          see. In both worlds, my father communicated a vision, managed
          resources, brought people together and built community around
          something larger than himself. He taught me to think at scale. His
          ministry reminded me that scale without purpose is empty.”
        </FounderQuote>
      </Prose>

      <ChapterEndCTA href="/whackoland" label="Continue to Whackoland" />
    </>
  );
}
