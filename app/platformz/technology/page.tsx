import type { Metadata } from "next";
import Link from "next/link";
import ChapterHero from "@/components/ChapterHero";
import Prose from "@/components/Prose";
import CTAButton from "@/components/CTAButton";

export const metadata: Metadata = {
  title: "What Is Platformz? DIaaS, Looking Glass and Client-Owned SaaS",
  description:
    "Platformz is a reusable, system-agnostic operating foundation for complex businesses: DIaaS as the flagship product, Looking Glass as the executive command layer and SaaS Foundry for client-owned software.",
};

const products = [
  {
    name: "DIaaS",
    full: "Distribution Infrastructure as a Service",
    body: "The flagship Platformz product. One connected operating layer across commerce, marketplaces, retailers, dealers, partners, catalog, inventory, orders, fulfillment, freight, tax, payments, customer service, referral programs, data, automation and executive visibility. The customer does not have to rebuild every foundational capability from scratch.",
  },
  {
    name: "Looking Glass",
    full: "The Control Tower",
    body: "One role-based command layer above the operating environment. Not another passive dashboard: it correlates technical events to business consequences, so a failing integration is not just an API error—leadership sees the affected orders, customers, inventory, revenue and operational risk. Reactive reporting becomes proactive operational control.",
  },
  {
    name: "SaaS Foundry",
    full: "Client-Owned SaaS",
    body: "Platformz helps companies create software they own: vertical SaaS platforms, marketplaces, dealer networks, subscription businesses, referral ecosystems, internal operating systems, logistics platforms and AI-native business applications. Platformz supplies the reusable foundation; the client owns its brand, customer experience, business model, data, roadmap and economics.",
  },
];

const proofPoints = [
  {
    name: "FUR4",
    body: "The flagship proof point: a live multi-portal environment proving DTC commerce, B2B ordering, referrals, administration, catalog, inventory, channels and future vendor workflows from one reusable framework—in pet products.",
  },
  {
    name: "Rockerz",
    body: "The same foundation configured for skating, action sports, dealers, communities and specialty retail.",
  },
  {
    name: "DMV Raw Feeders",
    body: "Another operating pattern involving subscriptions, delivery routes and customer workflows.",
  },
];

export default function PlatformzTechnologyPage() {
  return (
    <>
      <ChapterHero
        eyebrow="Platformz Technology"
        title="What Is Platformz?"
        subtitle={
          <p>
            A reusable, system-agnostic operating foundation that makes all
            the systems required to run a business behave like one system.
          </p>
        }
      />

      <Prose>
        <h2>The Operating Layer Above and Between Your Systems</h2>
        <p>
          Platformz does not require the business to throw away every ERP,
          marketplace, PIM, warehouse provider, CRM, tax engine or commerce
          platform. It connects them. It applies common identity, workflows,
          automation, data, monitoring and intelligence across them—and gives
          customers, partners, employees, vendors and executives the correct
          view of the same operating reality.
        </p>
        <p>
          The platform is deliberately system-agnostic. The ERP can change.
          The warehouse can change. The marketplace mix can change. The
          commerce engine can change. The Platformz operating model remains.
        </p>

        <h2>Three Ways to Engage</h2>
        <div className="my-8 space-y-4">
          {products.map((product) => (
            <div
              key={product.name}
              className="panel p-6"
            >
              <h3 className="font-headline text-xl font-bold text-electric-cyan">
                {product.name}
              </h3>
              <p className="font-mono text-xs uppercase tracking-widest text-warm-copper">
                {product.full}
              </p>
              <p className="mt-3 text-technical-gray">{product.body}</p>
            </div>
          ))}
        </div>

        <h2>A Compounding Model</h2>
        <p>
          Every connector, portal, workflow, automation, monitoring rule and
          AI capability created for one deployment can strengthen future
          deployments. Every implementation adds integrations, workflows,
          operating rules, analytics patterns and reusable intelligence back
          into the framework.
        </p>

        <h2>Production Proof</h2>
        <div className="my-8 space-y-4">
          {proofPoints.map((proof) => (
            <div
              key={proof.name}
              className="border-l-2 border-signal-blue/60 pl-4"
            >
              <p className="font-headline font-semibold text-archive-paper">
                {proof.name}
              </p>
              <p className="mt-1 text-technical-gray">{proof.body}</p>
            </div>
          ))}
        </div>
        <p>
          The product, audience and commercial model change. The reusable
          foundation—identity, portals, integrations, workflows, automation,
          data, monitoring, control and AI—remains.
        </p>

        <p>
          For the full story of how a lifetime of infrastructure led here,
          read the{" "}
          <Link href="/platformz" className="text-electric-cyan hover:underline">
            final chapter
          </Link>
          .
        </p>
      </Prose>

      <div className="mx-auto max-w-3xl px-4 pb-20 text-center">
        <div className="flex flex-wrap justify-center gap-4">
          <CTAButton href="/contact">Start a Blueprint</CTAButton>
          <CTAButton href="/platformz" variant="secondary">
            Read the Final Chapter
          </CTAButton>
        </div>
      </div>
    </>
  );
}
