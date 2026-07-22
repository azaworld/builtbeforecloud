import type { Metadata } from "next";
import ChapterHero from "@/components/ChapterHero";
import Prose from "@/components/Prose";
import FounderQuote from "@/components/FounderQuote";
import ClaimLabel from "@/components/ClaimLabel";
import ChapterEndCTA from "@/components/ChapterEndCTA";

export const metadata: Metadata = {
  title: "Intira: Everything Beneath the Application",
  description:
    "How Tim Roberts (Timothy Munro Roberts) co-founded Intira, whose NetSourcing service combined data centers, networks, servers, storage, security, monitoring and operations before cloud computing became standard terminology.",
};

const managedStack = [
  "Data-center facilities",
  "Power and cooling",
  "Networking",
  "Servers",
  "Operating systems",
  "Storage",
  "Databases",
  "Backup",
  "Security",
  "Monitoring",
  "Engineering",
  "Incident response",
  "Continuous operations",
  "Service-level commitments",
];

export default function IntiraPage() {
  return (
    <>
      <ChapterHero
        eyebrow="Chapter Two"
        ghost="02"
        title={
          <>
            Intira: Everything
            <br />
            Beneath the Application
          </>
        }
      />

      <Prose>
        <p>
          Savvis addressed the path between the application and the user.
        </p>
        <p>Intira addressed nearly everything beneath the application.</p>

        <p>The founding group included:</p>
        <ul>
          <li>Timothy Roberts</li>
          <li>Mark Ivie</li>
          <li>Rich Skoba</li>
        </ul>

        <FounderQuote>
          “I brought the networking experience. Rich brought complementary
          knowledge around computing, servers, storage and enterprise
          infrastructure. Mark helped move the founding vision into an
          operating company. The service required all of it.”
        </FounderQuote>

        <h2>NetSourcing</h2>
        <p>Digital Broadcast Network became Intira.</p>
        <p>The service became:</p>
        <p className="font-headline text-2xl font-bold text-electric-cyan">
          NetSourcing
        </p>
        <p>The customer supplied the application.</p>
        <p>Intira managed the environment underneath it:</p>

        <div className="my-8 flex flex-wrap gap-2">
          {managedStack.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 font-mono text-xs text-technical-gray transition-colors hover:border-electric-cyan/50 hover:text-electric-cyan"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="my-8 panel panel-cyan p-6">
          <p className="font-mono text-xs uppercase tracking-widest text-electric-cyan">
            Primary Historical Positioning
          </p>
          <p className="mt-3 text-archive-paper/90">
            Intira’s NetSourcing service was an important commercial precursor
            to cloud computing. It separated the customer’s application from
            the physical infrastructure and delivered networking, computing,
            storage, security, monitoring and operations as a recurring managed
            service from privately operated data centers.
          </p>
          <p className="mt-3 font-mono text-xs text-technical-gray">
            This site does not claim that Tim single-handedly invented cloud
            computing.
          </p>
        </div>

        <h2>Data Centers</h2>
        <p>
          <ClaimLabel type="founder-recollection" />
        </p>
        <p>The Intira story centers on facilities in:</p>
        <ul>
          <li>St. Louis</li>
          <li>Pleasanton, California</li>
          <li>New York City</li>
        </ul>
        <p>Tim recalls hiring:</p>
        <ul>
          <li>C. Rallo Construction</li>
          <li>Ross &amp; Baruzzini</li>
        </ul>

        <FounderQuote>
          “The customer saw a service. We saw generators, batteries, cooling,
          fire suppression, fiber entrances, cable pathways, servers, storage
          and everything that could fail.”
        </FounderQuote>

        <h2>Blade Servers and Virtual Machines</h2>
        <div className="my-8 panel panel-copper p-6">
          <div className="mb-3">
            <ClaimLabel type="founder-recollection" />
          </div>
          <p className="text-archive-paper/90">
            Tim recalls Intira selling blade-based environments running virtual
            machines from its privately operated data centers. Built Before
            Cloud is seeking hardware invoices, software licenses, customer
            statements of work and deployment diagrams to document the exact
            architecture and determine whether a first-to-market claim can be
            independently supported.
          </p>
        </div>

        <h2>Closing</h2>
        <p>Intira anticipated much of the cloud customer promise.</p>
        <p>
          It did not have modern cloud automation or hyperscale economics.
        </p>

        <FounderQuote heading="Founder reflection">
          “We had a cloud-service concept before the industry had modern cloud
          economics. Being right about the future does not guarantee that the
          company survives long enough to own it.”
        </FounderQuote>
      </Prose>

      <ChapterEndCTA
        href="/the-missing-pieces"
        label="Continue to the Missing Pieces"
      />
    </>
  );
}
