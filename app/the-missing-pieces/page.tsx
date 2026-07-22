import type { Metadata } from "next";
import ChapterHero from "@/components/ChapterHero";
import Prose from "@/components/Prose";
import ChapterEndCTA from "@/components/ChapterEndCTA";

export const metadata: Metadata = {
  title:
    "From Phantom and GameStreamer to Savtira: The Missing Pieces Behind Platformz",
  description:
    "Gaming, digital distribution, media, cloud commerce, marketplaces, subscriptions, payments, multi-tenancy—and the expensive lessons that made the final architecture possible.",
};

const ventures = [
  {
    name: "Infinium Labs and Phantom",
    lessons: [
      "Consumer hardware",
      "Digital game delivery",
      "Living-room experiences",
      "Product launches",
      "Media attention",
      "Capital-market risk",
      "The danger of hype outrunning operational reality",
    ],
    quote:
      "“Phantom taught me that a product can capture the world’s imagination before the company is ready to carry the weight of that attention.”",
  },
  {
    name: "GameStreamer",
    lessons: [
      "White-label distribution",
      "Digital catalogs",
      "Multi-tenant platforms",
      "Partner-branded storefronts",
      "Publishers and rights holders",
      "Automated fulfillment of digital products",
    ],
    quote:
      "“GameStreamer showed me that one infrastructure platform could power many branded experiences without rebuilding the system for every partner.”",
  },
  {
    name: "Savtira",
    lessons: [
      "Cloud commerce",
      "Physical and digital product catalogs",
      "Marketplace models",
      "Payments",
      "Logistics",
      "Catalog orchestration",
      "Building too many layers at once",
    ],
    quote:
      "“Savtira expanded the vision beyond digital games. It also taught me how quickly a broad platform can become unmanageable without disciplined modular architecture.”",
  },
  {
    name: "StationDigital",
    lessons: [
      "Streaming media",
      "Advertising",
      "User engagement",
      "Content rights",
      "Recommendation systems",
      "Subscription economics",
      "Mobile distribution",
    ],
    quote: null,
  },
  {
    name: "HashingSpace and other ventures",
    lessons: [
      "Infrastructure ownership",
      "Regulatory risk",
      "Distributed systems",
      "Emerging markets",
      "The danger of confusing technical opportunity with durable economics",
    ],
    quote: null,
  },
];

const contributions = [
  ["Whackoland", "contributed community."],
  ["Savvis", "contributed networks."],
  ["Intira", "contributed managed infrastructure."],
  ["Phantom", "contributed consumer experience."],
  ["GameStreamer", "contributed white-label distribution."],
  ["Savtira", "contributed cloud commerce."],
  ["StationDigital", "contributed media and engagement."],
];

export default function MissingPiecesPage() {
  return (
    <>
      <ChapterHero
        eyebrow="Chapter Three"
        title="The Missing Pieces"
        subtitle={
          <p>
            Every Company Taught Me Something Platformz Would Eventually Need
          </p>
        }
      />

      <Prose>
        <p>
          After Savvis and Intira, I kept returning to the same underlying
          problem from different directions.
        </p>
        <p className="font-headline text-xl font-semibold text-archive-paper">
          How do you distribute a complicated digital experience without
          forcing the customer to understand the infrastructure beneath it?
        </p>
        <p>The product changed.</p>
        <p>The infrastructure problem remained.</p>

        {ventures.map((venture) => (
          <section key={venture.name} className="my-12">
            <h2>{venture.name}</h2>
            <p className="font-mono text-xs uppercase tracking-widest text-signal-blue">
              What it taught me
            </p>
            <ul>
              {venture.lessons.map((lesson) => (
                <li key={lesson}>{lesson}</li>
              ))}
            </ul>
            {venture.quote && (
              <blockquote className="mt-6 border-l-2 border-warm-copper pl-4 font-serif text-lg italic text-archive-paper/95">
                {venture.quote}
              </blockquote>
            )}
          </section>
        ))}

        <h2 className="text-center">
          None of These Companies Was the Final Platform.
          <br />
          Each One Delivered a Piece of It.
        </h2>

        <div className="my-8 space-y-2">
          {contributions.map(([company, contribution]) => (
            <p key={company} className="border-l-2 border-signal-blue/60 pl-4">
              <span className="font-mono text-sm font-semibold text-electric-cyan">
                {company}
              </span>{" "}
              {contribution}
            </p>
          ))}
        </div>

        <p>Every success contributed reusable ideas.</p>
        <p>Every failure contributed operating rules.</p>
        <p>Every conflict contributed governance lessons.</p>
        <p>Every financial crisis contributed discipline.</p>

        <p className="pt-6 font-headline text-xl font-semibold text-archive-paper">
          Then came FUR4.
        </p>
        <p>
          And for the first time, all the layers were required inside one real
          operating company.
        </p>
      </Prose>

      <ChapterEndCTA href="/platformz" label="Continue to Platformz" />
    </>
  );
}
