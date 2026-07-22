import type { Metadata } from "next";
import Prose from "@/components/Prose";
import FounderQuote from "@/components/FounderQuote";
import CTAButton from "@/components/CTAButton";
import PlatformzHeroAnimation from "@/components/PlatformzHeroAnimation";
import LifeToPlatformzMap from "@/components/LifeToPlatformzMap";

export const metadata: Metadata = {
  title:
    "Platformz: The Enterprise Operating System Tim Roberts Spent a Lifetime Building",
  description:
    "Discover how lessons from Whackoland, Savvis, Intira, digital distribution, cloud commerce and FUR4 converged into Platformz, a reusable operating foundation for complex businesses.",
};

const contributed = [
  ["My father taught me scale.", "He showed me that capital, talent, storytelling and execution could turn ambitious ideas into physical reality."],
  ["Whackoland taught me platforms.", "Users, identities, permissions, content, support, community, security and uptime."],
  ["J&G taught me integration.", "A business cannot operate efficiently when its systems cannot communicate."],
  ["Savvis taught me network orchestration.", "The complete route matters more than the advertised speed of one component."],
  ["Intira taught me managed infrastructure.", "Customers want outcomes, not a collection of boxes they must operate themselves."],
  ["Later ventures taught me digital distribution.", "One reusable infrastructure can power many products, brands, customers and business models."],
  ["Failure taught me discipline.", "Architecture alone does not create a durable company. Governance, focus, economics, capital structure and execution matter just as much."],
  ["FUR4 taught me the modern operating problem.", "The enterprise is now surrounded by specialized software, service providers, marketplaces, fulfillment centers, tax systems, product platforms and data silos. The systems may be individually capable. The business remains fragmented."],
];

const systemList = [
  "ERP", "Product information", "Digital assets", "Ecommerce", "Marketplaces",
  "Retail and EDI", "Inventory", "Order management", "Warehouses", "Freight",
  "Tax", "Payments", "CRM", "Customer service", "Marketing", "Reporting",
  "Projects", "Identity", "AI",
];

const notList = [
  "Another storefront",
  "Another ERP",
  "A generic website agency",
  "A collection of disconnected point integrations",
  "A rigid SaaS product that forces every business into the same workflow",
  "A dashboard that reports problems after they have already happened",
  "A one-time custom-development project that starts from zero for every client",
];

const diaasScope = [
  "Commerce", "Marketplaces", "Retailers", "Dealers", "Partners", "Catalog",
  "Inventory", "Orders", "Fulfillment", "Freight", "Tax", "Payments",
  "Customer service", "Referral programs", "Data", "Automation",
  "Executive visibility",
];

const architectureLayers = [
  {
    number: "1",
    name: "Experience Layer",
    lede: "The interfaces used by different people:",
    items: [
      "Customer portals", "Dealer portals", "Wholesale portals",
      "Retailer portals", "Vendor portals", "Referral portals",
      "Creator portals", "Employee portals", "Executive portals",
      "Administrative environments",
    ],
  },
  {
    number: "2",
    name: "Operating Layer",
    lede: "The mechanisms that coordinate the business:",
    items: [
      "Identity and permissions", "Workflow automation", "Approvals",
      "Business rules", "Integration orchestration", "Exception management",
      "Monitoring", "Process controls", "Notifications", "Audit history",
    ],
  },
  {
    number: "3",
    name: "Business Modules",
    lede: "The capabilities required to operate:",
    items: [
      "Catalog and product information", "Commerce", "Orders",
      "Marketplaces and channels", "Inventory", "Procurement",
      "Manufacturing", "Logistics", "Fulfillment", "Compliance", "Payments",
      "Customer operations", "Finance and reconciliation",
      "Projects and service delivery",
    ],
  },
  {
    number: "4",
    name: "Data and AI Layer",
    lede: "The intelligence beneath the operation:",
    items: [
      "Unified event streams", "Analytics", "Forecasting",
      "Anomaly detection", "Predictive alerts", "AI recommendations",
      "Executive questions", "Cross-system correlation",
      "Historical learning",
    ],
  },
];

const controlTowerScope = [
  "Revenue", "Orders", "Inventory", "Financial performance", "Fulfillment",
  "Shipping delays", "Marketplace activity", "Customer experience",
  "Integration health", "System incidents", "Projects", "Compliance",
  "Operational risk", "AI-generated recommendations",
];

const saasIdeas = [
  "A vertical SaaS platform", "A marketplace", "A dealer or partner network",
  "A subscription business", "A referral ecosystem",
  "An internal operating system", "A multi-brand commerce platform",
  "A logistics platform", "A workflow product",
  "An AI-native business application",
];

const clientOwns = [
  "Its brand", "Its customer experience", "Its business model", "Its data",
  "Its roadmap", "Its economics",
];

const fur4Coordination = [
  "Product design", "Manufacturing", "Suppliers",
  "Catalog and product information", "Digital assets", "Global tax",
  "Commerce", "Marketplaces", "Retailers", "EDI", "Inventory", "Warehouses",
  "Freight", "Customer service", "Dealers", "Veterinarians",
  "Professional groomers", "Referrals", "Creators", "Payments",
  "Executive reporting",
];

const foundation = [
  "Identity", "Portals", "Integrations", "Workflows", "Automation", "Data",
  "Monitoring", "Control", "AI",
];

const thesis = [
  "Know which system owns each piece of data",
  "Understand how one system affects another",
  "Detect failures before they become large operational problems",
  "Coordinate workflows across company boundaries",
  "Let new channels and partners connect more quickly",
  "Give executives one view of the operating reality",
  "Use AI to recommend and eventually execute appropriate actions",
  "Preserve the customer’s ability to replace underlying vendors without rebuilding the whole company",
];

function Pills({ items }: { items: string[] }) {
  return (
    <div className="my-6 flex flex-wrap gap-2">
      {items.map((item) => (
        <span
          key={item}
          className="rounded-sm border border-signal-blue/30 bg-infra-navy/60 px-3 py-1.5 font-mono text-xs text-technical-gray"
        >
          {item}
        </span>
      ))}
    </div>
  );
}

export default function PlatformzPage() {
  return (
    <>
      {/* ============ CHAPTER HERO ============ */}
      <section className="signal-grid border-b border-signal-blue/20 bg-infra-navy/40">
        <div className="mx-auto max-w-4xl px-4 py-20 text-center sm:py-24">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-warm-copper">
            The Final Chapter Is Still Being Written
          </p>
          <h1 className="mt-6 font-headline text-5xl font-bold sm:text-6xl">
            Platformz
          </h1>
          <p className="mt-4 font-headline text-2xl text-electric-cyan">
            Everything Finally Connects.
          </p>
          <div className="mt-12">
            <PlatformzHeroAnimation />
          </div>
        </div>
      </section>

      <Prose>
        <p>
          For most of my life, I viewed my companies as separate chapters.
        </p>
        <ul>
          <li>A BBS.</li>
          <li>An Internet backbone.</li>
          <li>A cloud-infrastructure provider.</li>
          <li>A game console.</li>
          <li>A digital distribution network.</li>
          <li>A commerce platform.</li>
          <li>A streaming-media business.</li>
          <li>A blockchain-infrastructure company.</li>
        </ul>
        <p>Only recently did I recognize the pattern.</p>
        <p>
          I had spent my entire life building different parts of the same
          system.
        </p>
        <p>The user sees one experience.</p>
        <p>
          Behind that experience are dozens of networks, applications,
          databases, vendors, people, rules, payments, fulfillment systems and
          operational dependencies.
        </p>
        <p>The central problem has always been fragmentation.</p>
        <p>
          Platformz is my attempt to solve that problem at the business level.
        </p>
        <p className="font-headline text-xl font-semibold text-electric-cyan">
          Platformz is the operating system I have been trying to build my
          entire life.
        </p>

        {/* ============ WHAT EACH CHAPTER CONTRIBUTED ============ */}
        <h2>What Each Chapter Contributed</h2>
        <div className="my-8 space-y-6">
          {contributed.map(([lead, detail]) => (
            <div key={lead} className="border-l-2 border-signal-blue/60 pl-4">
              <p className="font-headline font-semibold text-archive-paper">
                {lead}
              </p>
              <p className="mt-1 text-technical-gray">{detail}</p>
            </div>
          ))}
        </div>

        <div className="my-10">
          <LifeToPlatformzMap />
        </div>

        {/* ============ WHAT PLATFORMZ IS ============ */}
        <h2>What Platformz Is</h2>
        <p>
          Platformz is the reusable operating foundation for complex
          businesses.
        </p>
        <p>
          It is designed to sit across the systems a company already depends on
          and make them operate as one connected environment.
        </p>
        <p>
          Platformz does not require the business to throw away every ERP,
          marketplace, PIM, warehouse provider, CRM, tax engine or commerce
          platform.
        </p>
        <p>It connects them.</p>
        <p>
          It applies common identity, workflows, automation, data, monitoring
          and intelligence across them.
        </p>
        <p>
          It gives customers, partners, employees, vendors and executives the
          correct view of the same operating reality.
        </p>
        <p>
          Internal Platformz strategy defines the company as broader than any
          one product, customer or industry. Its flagship commercial offering
          is Distribution Infrastructure as a Service, while the underlying
          platform also supports reusable applications, industry blueprints
          and entirely new client-owned SaaS products.
        </p>

        <h3 className="text-center">The Simplest Explanation</h3>
        <p className="text-center font-headline text-2xl font-bold text-electric-cyan">
          Platformz Makes All the Systems Required to Run a Business Behave
          Like One System.
        </p>
        <p>A modern company may use separate systems for:</p>
        <Pills items={systemList} />
        <p>Each tool solves part of the problem.</p>
        <p>The executive still has to operate the whole business.</p>
        <p>
          Platformz creates the operating layer above and between them.
        </p>

        {/* ============ WHAT PLATFORMZ IS NOT ============ */}
        <h2>What Platformz Is Not</h2>
        <p>Platformz is not:</p>
        <ul>
          {notList.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p>Platformz is a reusable, modular operating foundation.</p>
        <p>
          Every connector, portal, workflow, automation, monitoring rule and AI
          capability created for one deployment can strengthen future
          deployments.
        </p>
        <p>
          The internal business plan describes this as a compounding model:
          every implementation adds integrations, workflows, operating rules,
          analytics patterns and reusable intelligence back into the framework.
        </p>

        {/* ============ DIaaS ============ */}
        <h2>DIaaS — Distribution Infrastructure as a Service</h2>
        <p className="font-headline text-lg font-semibold text-archive-paper">
          The Product That Brings the Platform to Market
        </p>
        <p>DIaaS is the flagship Platformz product.</p>
        <p>
          It gives a brand or distributor one connected operating layer across:
        </p>
        <Pills items={diaasScope} />
        <p>
          The customer does not have to rebuild every foundational capability
          from scratch.
        </p>
        <p>
          Platformz provides reusable architecture, applications, connectors,
          workflows and operating patterns that can be configured around the
          customer’s business.
        </p>
        <p>This is the same evolution Tim pursued at Intira:</p>
        <p className="border-l-2 border-warm-copper pl-4 font-serif text-lg italic">
          The customer should focus on the business it is trying to build. The
          infrastructure beneath it should already know how to operate.
        </p>

        {/* ============ ARCHITECTURE ============ */}
        <h2>The Platformz Architecture</h2>
        <p>Platformz is illustrated as four connected layers.</p>
        <div className="my-8 space-y-4">
          {architectureLayers.map((layer) => (
            <div
              key={layer.number}
              className="rounded-sm border border-signal-blue/30 bg-infra-navy/60 p-6"
            >
              <p className="font-mono text-xs uppercase tracking-widest text-signal-blue">
                Layer {layer.number}
              </p>
              <h3 className="mt-1 font-headline text-xl font-bold text-archive-paper">
                {layer.name}
              </h3>
              <p className="mt-2 text-technical-gray">{layer.lede}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {layer.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-sm border border-technical-gray/30 px-2 py-1 font-mono text-[11px] text-technical-gray"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <p>
          This layered model is designed to let new portals, systems and
          business modules be added without rebuilding the whole environment.
        </p>

        {/* ============ LOOKING GLASS ============ */}
        <h2>Looking Glass Control Tower</h2>
        <p className="font-headline text-lg font-semibold text-archive-paper">
          See the Entire Business. Act From One Intelligent Command Layer.
        </p>
        <p>Most executives still run companies through:</p>
        <ul>
          <li>Delayed reports</li>
          <li>Spreadsheets</li>
          <li>Emails</li>
          <li>Meetings</li>
          <li>Separate vendor dashboards</li>
          <li>Partial information</li>
          <li>Problems discovered after customers notice them</li>
        </ul>
        <p>
          Platformz’s Looking Glass Control Tower is designed to sit above the
          operating environment and provide one role-based command layer.
        </p>
        <p>It is not intended to be another passive dashboard.</p>
        <p>It should allow leadership to understand:</p>
        <Pills items={controlTowerScope} />
        <p>
          The Control Tower architecture is intended to correlate technical
          events to business consequences. A failing integration should not
          remain only an API error; leadership should be able to see the
          affected orders, customers, inventory, revenue and operational risk.
          Platformz’s internal plan describes this as moving executives from
          reactive reporting to proactive operational control.
        </p>

        <FounderQuote heading="Founder statement">
          “At Savvis, I wanted visibility into the entire network path. At
          Intira, I wanted responsibility for the complete infrastructure
          beneath the application. Platformz extends that idea across the
          business itself. The executive should not have to guess which
          disconnected system contains the truth. The operating environment
          should explain what is happening, what it affects and what action
          should be taken.”
        </FounderQuote>

        {/* ============ CLIENT-OWNED SAAS ============ */}
        <h2>Client-Owned SaaS</h2>
        <p>
          Platformz is also designed to help companies create software they
          own.
        </p>
        <p>A customer may use Platformz to build:</p>
        <ul>
          {saasIdeas.map((idea) => (
            <li key={idea}>{idea}</li>
          ))}
        </ul>
        <p>
          Platformz provides reusable foundations while allowing the client to
          own:
        </p>
        <Pills items={clientOwns} />
        <p>
          The Platformz website blueprint calls this engagement model the SaaS
          Foundry and intentionally keeps it beside DIaaS so the company
          remains broader than one commerce product.
        </p>

        {/* ============ FUR4 ============ */}
        <h2>FUR4: The First Complete Proof</h2>
        <p className="font-headline text-lg font-semibold text-archive-paper">
          Platformz Needed a Real Business, Not a Demonstration.
        </p>
        <p>
          FUR4 became the environment where the theory had to survive reality.
        </p>
        <p>It required Platformz to coordinate:</p>
        <Pills items={fur4Coordination} />
        <p>FUR4 is not one storefront.</p>
        <p>
          It is a growing network of role-based portals and operating
          environments sharing a common foundation.
        </p>
        <p>
          Platformz’s internal operating plan describes FUR4 as the flagship
          proof point: a live multi-portal environment proving DTC commerce,
          B2B ordering, referrals, administration, catalog, inventory, channels
          and future vendor workflows from one reusable framework.
        </p>

        <FounderQuote heading="Founder statement">
          “FUR4 forced Platformz to become real. A slide deck can make every
          architecture look clean. A real global product company introduces
          late shipments, missing data, marketplace rules, tax requirements,
          warehouse exceptions, product changes, customer questions and dozens
          of vendors that all operate differently. Every difficult edge case
          made Platformz stronger.”
        </FounderQuote>

        {/* ============ DIFFERENT INDUSTRIES ============ */}
        <h2>Different Industries. The Same Foundation.</h2>
        <p>FUR4 proves the model in pet products.</p>
        <p>
          Rockerz proves that the same foundation can be configured for
          skating, action sports, dealers, communities and specialty retail.
        </p>
        <p>
          DMV Raw Feeders proves another operating pattern involving
          subscriptions, delivery routes and customer workflows.
        </p>
        <p>The product, audience and commercial model change.</p>
        <p>The reusable foundation remains:</p>
        <Pills items={foundation} />
        <p>
          Platformz’s internal materials identify FUR4, Rockerz and DMV
          Rawfeeders as production proof that the architecture can be adapted
          across industries rather than being limited to a single vertical.
        </p>

        {/* ============ WHY NOW ============ */}
        <h2>Why Platformz Exists Now</h2>
        <p className="font-headline text-lg font-semibold text-archive-paper">
          The Enterprise Still Has the Same Problem the Early Internet Had.
        </p>
        <p>
          The early Internet consisted of separate networks that worked
          individually but produced a poor end-to-end experience.
        </p>
        <p>
          The modern enterprise consists of separate software systems that work
          individually but produce a fragmented operating experience.
        </p>
        <p>The parallel is direct.</p>
        <p>At Savvis, the bottlenecks were between networks.</p>
        <p>
          At Platformz, the bottlenecks are between systems, companies,
          workflows and people.
        </p>
        <p>The customer does not care which vendor failed.</p>
        <p>
          The executive does not care which database contains the truth.
        </p>
        <p>
          The warehouse does not care which marketplace created the order.
        </p>
        <p>The business needs the whole journey to work.</p>

        <FounderQuote heading="Founder statement">
          “Platformz is Savvis applied to the enterprise. It is Intira applied
          to business operations. It is Whackoland rebuilt for customers,
          employees, vendors, partners and executives. It is everything I
          learned about distribution, infrastructure, software and operating
          companies placed into one reusable framework.”
        </FounderQuote>

        {/* ============ THESIS ============ */}
        <h2>The Platformz Thesis</h2>
        <p className="font-headline text-lg font-semibold text-archive-paper">
          The Next Great Enterprise Platform Will Not Be Another Isolated
          Application.
        </p>
        <p>
          It will be the intelligence and orchestration layer connecting the
          applications a business already uses.
        </p>
        <p>It will:</p>
        <ul>
          {thesis.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p>Platformz is deliberately system-agnostic.</p>
        <p>The ERP can change.</p>
        <p>The warehouse can change.</p>
        <p>The marketplace mix can change.</p>
        <p>The commerce engine can change.</p>
        <p className="font-headline font-semibold text-electric-cyan">
          The Platformz operating model remains.
        </p>

        {/* ============ CLOSING ============ */}
        <h2 className="text-center">I Finally Understand What I Have Been Building.</h2>
        <p>
          At fourteen, I built a system that let remote people connect to one
          computer.
        </p>
        <p>
          At Savvis, I helped build a network that connected companies and
          applications more reliably.
        </p>
        <p>
          At Intira, I helped build environments that operated the
          infrastructure beneath enterprise applications.
        </p>
        <p>In every company afterward, I added another piece:</p>
        <p className="font-mono text-sm leading-loose text-technical-gray">
          Digital distribution.
          <br />
          White-label platforms.
          <br />
          Commerce.
          <br />
          Streaming.
          <br />
          Subscriptions.
          <br />
          Payments.
          <br />
          Marketplaces.
          <br />
          Multi-tenancy.
          <br />
          Automation.
          <br />
          Data.
          <br />
          AI.
        </p>
        <p>For years, I thought these were separate ventures.</p>
        <p>Now I see the complete architecture.</p>

        <FounderQuote heading="Founder statement">
          “Platformz is the first time all the pieces have existed in one
          place. It combines my father’s belief in thinking at scale, the
          platform lessons of Whackoland, the integration work I learned at
          J&amp;G, the network intelligence of Savvis, the managed-infrastructure
          model of Intira and every distribution lesson that followed. My
          entire life was not a straight line. But every turn contributed
          something Platformz needed. This is the platform I have been trying
          to build all along.”
        </FounderQuote>
      </Prose>

      {/* ============ FINAL CTA ============ */}
      <div className="mx-auto max-w-3xl px-4 pb-20 text-center">
        <div className="flex flex-wrap justify-center gap-4">
          <CTAButton href="/platformz/technology">Explore Platformz</CTAButton>
          <CTAButton href="/archive/platformz-fur4-deployment" variant="secondary">
            See Platformz in Operation
          </CTAButton>
          <CTAButton href="/contact" variant="tertiary">
            Start a Blueprint
          </CTAButton>
        </div>
      </div>
    </>
  );
}
