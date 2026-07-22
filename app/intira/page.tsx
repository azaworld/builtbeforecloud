import type { Metadata } from "next";
import ChapterHero from "@/components/ChapterHero";
import Prose from "@/components/Prose";
import FounderQuote from "@/components/FounderQuote";
import ClaimLabel from "@/components/ClaimLabel";
import VideoFigure from "@/components/VideoFigure";
import ChapterEndCTA from "@/components/ChapterEndCTA";

export const metadata: Metadata = {
  title: "Intira: Everything Beneath the Application",
  description:
    "How Tim Roberts (Timothy Munro Roberts) co-founded Intira: NetSourcing, three private data-center markets, blade servers, virtualization and facilities designed around seven times the electrical and cooling capacity of legacy data centers—before the AI data center had a name.",
};

const managedStack = [
  "Secure data-center facilities",
  "Network connectivity",
  "Servers",
  "Operating systems",
  "Databases",
  "Storage",
  "Backup",
  "Firewalls and security",
  "Monitoring",
  "Capacity planning",
  "Engineering",
  "Implementation",
  "Incident response",
  "Continuous operations",
  "Service-level commitments",
];

const facilityRedesign = [
  "Electrical service",
  "Transformers",
  "Switchgear",
  "Power distribution",
  "Uninterruptible power systems",
  "Battery capacity",
  "Generators",
  "Cooling plants",
  "Airflow",
  "Redundancy",
  "Raised floors or distribution paths",
  "Equipment placement",
  "Cable pathways",
  "Monitoring",
  "Expansion capacity",
  "Maintenance access",
  "Operating procedures",
];

const powerChain = [
  "Commercial utility service",
  "Transformers",
  "Switchgear",
  "Distribution panels",
  "Uninterruptible power supplies",
  "Battery systems",
  "Generators",
  "Transfer switches",
  "Redundant circuits",
  "Monitoring",
  "Maintenance access",
  "Expansion capacity",
];

const fortressOneVideoJsonLd = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  name: "HashingSpace Fortress One Data Center Tour",
  description:
    "Founder-supplied presentation of the Fortress One data center designed by Timothy Munro Roberts (Tim Roberts), founder of Platformz: sustainable hydroelectric power and seven times the electric and cooling capacity of traditional facilities, built for high-density crypto and AI-class hosting before the AI-data-center category existed.",
  embedUrl: "https://www.youtube-nocookie.com/embed/0LDF9qTTie4",
  contentUrl: "https://www.youtube.com/watch?v=0LDF9qTTie4",
  thumbnailUrl: "https://i.ytimg.com/vi/0LDF9qTTie4/hqdefault.jpg",
  uploadDate: "2015-08-04",
  duration: "PT2M14S",
};

export default function IntiraPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(fortressOneVideoJsonLd),
        }}
      />
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
        <p>The company began as Digital Broadcast Network.</p>
        <p>The founding group included:</p>
        <ul className="font-headline text-lg text-archive-paper">
          <li>Timothy Roberts</li>
          <li>Mark Ivie</li>
          <li>Rich Skoba</li>
        </ul>
        <p>
          <ClaimLabel type="contemporary-reporting" />
        </p>
        <p>
          Contemporary Forbes reporting identified the three of us as Intira’s
          founders and described the company beginning in St. Louis before
          moving its headquarters to California. (Forbes)
        </p>
        <p>
          SEC biographies use 1997 as the beginning of my Intira period, while
          Forbes placed the company’s start in 1998. The precise chronology
          remains an open archival question.
        </p>

        <h2>Tim, Rich and Mark</h2>
        <p className="font-headline text-lg font-semibold text-archive-paper">
          A Network Vision Needed a Server Vision
        </p>

        <FounderQuote>
          “I brought the networking experience. I understood how traffic
          moved, where it failed and how to build a national delivery
          architecture. But the next company could not stop at the network. It
          needed servers, storage, databases, operating systems, security and
          disciplined data-center operations. Rich brought complementary
          knowledge around the computing side of the environment. Mark helped
          move the founding vision into an operating business. The service
          required all of it.”
        </FounderQuote>

        <p>
          I remember bringing Rich into the partnership because I had the
          network knowledge and needed someone with strong server and
          enterprise-computing knowledge to help fulfill the larger vision.
        </p>
        <p>
          Some later public records place a documented HP Services role for
          Rich after Intira, so the exact chronology of his HP experience
          should remain open until his complete résumé or employment records
          are obtained.
        </p>
        <p>
          What is independently supported is that Rich helped shape the
          NetSourcing vision and provided strategic direction across product
          development, engineering and operations.
        </p>

        <h2>Ascend Communications and the Next Bet</h2>
        <p>I did not leave Savvis intending to build a small hosting company.</p>
        <p>
          <ClaimLabel type="founder-recollection" />
        </p>
        <p>
          My recollection is that Ascend Communications had agreed to support
          the next venture with a financing package of approximately $30
          million, combining equipment or lease financing with an equity
          component and technology associated with Ascend and Cascade
          Communications.
        </p>

        <FounderQuote>
          “That commitment allowed us to think beyond rented cages and
          individual servers. We could build private data centers, a network
          and an operating platform around the customer’s application.”
        </FounderQuote>

        <p>
          My manuscript describes approximately $3 million in equity combined
          with a roughly $30 million hardware lease facility. These amounts
          and structures remain Founder Recollection until the original
          financing documents are placed in the archive.
        </p>

        <h2>Three Private Data-Center Markets</h2>
        <p className="font-headline text-lg font-semibold text-archive-paper">
          Before the Cloud Became Invisible, It Was Extremely Heavy
        </p>
        <p>The Intira story centered on three major data-center markets:</p>

        <div className="my-8 space-y-4">
          <div className="panel p-5">
            <p className="font-headline font-semibold text-electric-cyan">
              St. Louis, Missouri
            </p>
            <p className="mt-1 text-archive-paper/90">
              The company’s birthplace and an early technical and operational
              center.
            </p>
          </div>
          <div className="panel p-5">
            <p className="font-headline font-semibold text-electric-cyan">
              Pleasanton, California
            </p>
            <p className="mt-1 text-archive-paper/90">
              The principal West Coast facility and later corporate base.
              Contemporary Forbes reporting described the Pleasanton facility
              as unusually hardened, with reinforced construction,
              bullet-resistant windows and seismic design intended to protect
              critical infrastructure. (Forbes)
            </p>
          </div>
          <div className="panel p-5">
            <p className="font-headline font-semibold text-electric-cyan">
              New York City
            </p>
            <p className="mt-1 text-archive-paper/90">
              The East Coast facility announced as the company formally
              introduced and expanded the NetSourcing model.
            </p>
          </div>
        </div>

        <p>
          <ClaimLabel type="contemporary-reporting" />
        </p>
        <p>
          An October 1999 industry report described Intira launching its New
          York data center, operating a network with 35 U.S. points of
          presence and three in Canada, serving around 40 customers and
          receiving approximately $100 million in funding from investors and
          strategic partners including Lucent, Chase Capital, Mayfield,
          Spectrum and HP. (Tech Monitor)
        </p>

        <FounderQuote>
          “People now think about infrastructure as buttons on a screen. We
          thought about generators, batteries, redundant fiber entrances, fire
          suppression, cooling, floor loading, access control, spare equipment
          and whether one construction crew could accidentally disconnect a
          customer. The customer saw a service. We saw everything that could
          go wrong.”
        </FounderQuote>

        <h2>C. Rallo and Ross &amp; Baruzzini</h2>
        <p>
          <ClaimLabel type="founder-recollection" />
        </p>
        <p>
          I hired C. Rallo Construction and Ross &amp; Baruzzini to help turn
          the data-center concept into physical infrastructure.
        </p>

        <FounderQuote>
          “To my recollection, neither group had built the exact kind of
          commercial Internet data center we were envisioning. That sounds
          risky until you understand that almost nobody had built this
          particular model. We were combining construction, electrical
          systems, cooling, physical security, telecommunications, server
          environments, storage, monitoring and around-the-clock operations
          into one engineered service.”
        </FounderQuote>

        <p>
          C. Rallo had to translate the technical requirements into the
          building. Ross &amp; Baruzzini had to help engineer electrical and
          mechanical infrastructure capable of keeping the computing
          environment alive.
        </p>
        <p>The facility had to behave more like a machine than an office.</p>
        <p>Every design decision produced another question.</p>
        <ul>
          <li>What happens if commercial power fails?</li>
          <li>What happens if cooling stops?</li>
          <li>What happens if a carrier’s fiber is cut?</li>
          <li>What happens if a server dies?</li>
          <li>What happens if smoke is detected?</li>
          <li>What happens if a customer suddenly needs twice the capacity?</li>
        </ul>

        <FounderQuote>
          “The cloud looked abstract to the customer. To us, it was concrete,
          copper, glass, diesel fuel, batteries, chillers and people.”
        </FounderQuote>

        <p className="font-mono text-sm text-technical-gray">
          Evidence: Founder Recollection pending construction contracts,
          engineering plans, permits and participant interviews
        </p>

        <h2>Digital Broadcast Network Becomes Intira</h2>
        <p>The original name reflected the media-distribution problem.</p>
        <p>Audio and video did not require only a network.</p>
        <p>
          They required servers. Storage. Databases. Security. Monitoring.
          Operations.
        </p>
        <p>The opportunity was much broader than broadcasting.</p>
        <p>Digital Broadcast Network became:</p>
        <p className="font-headline text-3xl font-bold tracking-tight text-archive-paper">
          INTIRA
        </p>
        <p>The service became:</p>
        <p className="font-headline text-3xl font-bold tracking-tight text-electric-cyan">
          NETSOURCING
        </p>
        <p>
          <ClaimLabel type="contemporary-reporting" />
        </p>
        <p>
          Contemporary reporting described NetSourcing as a combination of the
          network and the corporate data center. Intira supplied the server,
          database, automated backup and private network while the customer
          supplied the application. Entry-level contracts were reported around
          $5,000 to $10,000 per month, with average customer revenue around
          $30,000 per month at the time. (Tech Monitor)
        </p>
        <p className="border-l-2 border-electric-cyan/60 py-1 pl-5 font-headline text-xl font-semibold text-electric-cyan">
          The Customer Brought the Application.
          <br />
          Intira Operated Everything Underneath It.
        </p>

        <h2>What NetSourcing Sold</h2>
        <p className="font-headline text-lg font-semibold text-archive-paper">
          Not a Rack. Not a Server. Responsibility.
        </p>
        <p>Intira’s managed environment could include:</p>
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
        <p>
          <ClaimLabel type="contemporary-reporting" />
        </p>
        <p>
          A 2001 Computerworld interview described Intira as building
          everything beneath the customer’s application—including servers,
          storage, security and networking—and then engineering, implementing,
          operating and managing it. Customers discussed in contemporary
          coverage included Emerson Electric and Armstrong, and Deloitte
          invested in the company. (Computerworld)
        </p>

        <FounderQuote>
          “The customer did not want a router. The customer did not want a
          server. The customer did not want a storage array. The customer
          wanted its application to work. NetSourcing accepted responsibility
          for almost everything below the application line.”
        </FounderQuote>

        <p>
          <ClaimLabel type="verified-public-record" />
        </p>
        <p>
          A surviving September 2000 NetSourcing agreement with DoveBid
          provides contractual evidence of the model. Intira agreed to provide
          hosting, data management, Internet access, security and associated
          services around DoveBid’s applications.
        </p>
        <p>The customer retained ownership of the application.</p>
        <p>Intira operated the infrastructure beneath it.</p>
        <p>The division was clear:</p>
        <p className="font-headline font-semibold leading-relaxed text-archive-paper">
          The customer built the business experience.
          <br />
          Intira operated the machinery required to deliver it.
        </p>

        <h2>Hasbro and Games.com</h2>
        <p>
          <ClaimLabel type="contemporary-reporting" />
        </p>
        <p>
          Hasbro selected Intira to support Games.com with network
          infrastructure, server and networking hardware, software, backup,
          Internet connectivity, monitoring and management.
        </p>
        <p>
          The environment was intended to support online versions of
          well-known games including Monopoly, Scrabble, Battleship, Centipede
          and Tetris. (Computerworld)
        </p>
        <p>
          This mattered because it demonstrated the service in terms consumers
          could understand.
        </p>
        <p>The game appeared simple on the screen.</p>
        <p>The infrastructure behind it was not.</p>

        <FounderQuote>
          “The best infrastructure disappears. The user experiences the game.
          The operator experiences everything required to keep the game
          available.”
        </FounderQuote>

        <h2>NetSourcing as a Precursor to Cloud Computing</h2>
        <p>Intira did not invent remote computing.</p>
        <p>It did not invent hosting.</p>
        <p>It did not invent data centers.</p>
        <p>It did not invent outsourcing.</p>
        <p>
          Its historical significance was in packaging a broad enterprise
          environment—facilities, networks, computing, storage, databases,
          security, backup, monitoring, implementation and operations—as one
          managed service beneath the customer’s application.
        </p>
        <p>
          <ClaimLabel type="verified-public-record" />
        </p>
        <p>
          SEC biographies described Intira as providing outsourced
          network-based computing and communication services so customers
          could focus on their businesses rather than building and supporting
          their own infrastructure.
        </p>

        <div className="my-8 panel panel-cyan p-6">
          <p className="font-mono text-xs uppercase tracking-widest text-electric-cyan">
            Primary Historical Positioning
          </p>
          <p className="mt-3 text-archive-paper/90">
            Intira’s NetSourcing service was an important commercial precursor
            to cloud computing. It separated the customer’s application from
            the physical infrastructure and delivered networking, computing,
            storage, security, monitoring and operations as a recurring
            managed service from privately operated data centers.
          </p>
          <p className="mt-3 text-sm text-technical-gray">
            It was not identical to a modern hyperscale cloud. The vision
            arrived before today’s level of automated provisioning, elastic
            capacity, software-defined infrastructure and API-based
            self-service.
          </p>
        </div>

        <FounderQuote>
          “We had a cloud-service concept before the industry had modern cloud
          economics. We understood what the customer wanted. The harder
          problem was delivering it repeatedly, quickly and profitably with
          the technology available at the time.”
        </FounderQuote>

        <h2>Designing the AI Data Center Before the Category Existed</h2>
        <p className="font-headline text-lg font-semibold text-archive-paper">
          I Was Designing for the Physical Reality of AI Infrastructure Before
          “AI Data Center” Became a Commercial Term
        </p>
        <p>I want this claim stated precisely.</p>
        <p>Intira was not training modern large language models.</p>
        <p>There were no racks filled with today’s GPUs.</p>
        <p>
          Nobody was talking about tokens, generative AI factories or
          megawatt-scale accelerator racks.
        </p>
        <p>But we were designing for the same underlying physical trend:</p>
        <ul>
          <li>Computing would become dramatically denser.</li>
          <li>More workloads would be consolidated into less space.</li>
          <li>Servers would operate at higher utilization.</li>
          <li>
            Virtualization would separate the logical workload from the
            individual physical machine.
          </li>
          <li>Customers would consume computing remotely as a service.</li>
          <li>
            The building would need far more electrical and cooling capacity
            than legacy data-center designs assumed.
          </li>
        </ul>
        <p>My design target was approximately:</p>
        <p className="my-8 text-center font-headline text-[clamp(1.5rem,3.4vw,2.25rem)] font-bold leading-snug tracking-[-0.01em]">
          <span className="copper-gradient">
            Seven Times the Electrical and Cooling Capacity
          </span>
          <br />
          <span className="text-archive-paper">
            of the Legacy Data Centers We Were Benchmarking
          </span>
        </p>
        <p>
          That did not mean installing a larger air conditioner in a
          conventional computer room.
        </p>
        <p>It required redesigning the complete facility:</p>
        <div className="my-8 flex flex-wrap gap-2">
          {facilityRedesign.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 font-mono text-xs text-technical-gray transition-colors hover:border-warm-copper/50 hover:text-warm-copper"
            >
              {item}
            </span>
          ))}
        </div>
        <p>
          The data center could no longer be treated as an office building
          with a computer room added to it.
        </p>
        <p className="font-headline text-lg font-semibold text-archive-paper">
          The building itself had to become part of the computing platform.
        </p>

        <FounderQuote>
          “I did not believe the data centers of that era were prepared for
          where computing was going. We were planning to place far more
          processing power into the same physical footprint. That meant the
          traditional electrical and cooling designs would fail long before
          the computing vision did. I designed the Intira facilities around
          roughly seven times the power and cooling capacity of the legacy
          environments we were comparing ourselves with. We were building for
          the next generation of computing before the market had a name for
          that generation.”
        </FounderQuote>

        <div className="my-8 panel panel-copper p-6">
          <p className="font-mono text-xs uppercase tracking-widest text-warm-copper">
            Evidence: Founder Recollection and Founder-Supplied Video Record
          </p>
          <p className="mt-3 text-sm leading-relaxed text-technical-gray">
            The founder-supplied data-center presentation below is preserved
            alongside the historical record, and should eventually sit beside
            the original drawings, engineering plans, equipment schedules and
            construction records in the{" "}
            <a href="/archive" className="text-electric-cyan hover:underline">
              Built Before Cloud Archive
            </a>
            .
          </p>
        </div>

        <VideoFigure
          videoId="0LDF9qTTie4"
          title="Fortress One Data Center Tour — seven times the power and cooling of traditional facilities"
          caption={
            <>
              <strong>Watch the founder-supplied data-center presentation.</strong>{" "}
              Tim’s Fortress One design (Washington State, planned 2015–2016):
              a facility powered by sustainable hydroelectric power with{" "}
              <em>seven times the electric and cooling capacity of traditional
              facilities</em>—109,000 square feet of data-center floor, 1,500
              rack cabinets, up to 30&nbsp;kW per rack, N+1 power and 12,000
              tons of cooling. Designed for high-density crypto and AI-class
              hosting years before “AI data center” became a commercial term.
            </>
          }
          credit="Founder-supplied video record"
          claim="corroborated-recollection"
        />

        <h2>Why the AI Comparison Matters</h2>
        <p>
          Modern AI infrastructure is forcing the data-center industry to
          confront the same fundamental design problem at a much larger scale.
        </p>
        <p>
          Traditional enterprise facilities were often designed around far
          lower rack densities and more intermittent workloads.
        </p>
        <p>
          Modern AI environments demand tightly coordinated computing,
          networking, storage, electrical distribution and thermal management.
        </p>
        <p>
          <ClaimLabel type="contemporary-reporting" />
        </p>
        <p>
          NVIDIA now describes power infrastructure as a primary constraint on
          the scale and feasibility of future AI factories and is promoting a
          fundamental move toward 800-volt direct-current distribution for
          next-generation high-density facilities. (NVIDIA)
        </p>
        <p>
          NVIDIA technical material describes current AI racks moving beyond
          200 kilowatts and future designs approaching one megawatt per rack,
          requiring major changes in power conversion, copper distribution,
          rack architecture and cooling. (NVIDIA Developer)
        </p>
        <p>The terminology is new.</p>
        <p>The engineering principle is not:</p>
        <p className="border-l-2 border-electric-cyan/60 py-1 pl-5 font-headline text-lg font-semibold text-archive-paper">
          The computing architecture and the physical facility must be
          designed together.
        </p>
        <p>That was the principle behind the Intira facilities.</p>
        <p>We were not building today’s GPU-based AI factory.</p>
        <p>
          We were building an early high-density, virtualized
          managed-computing environment around many of the same physical
          realities:
        </p>
        <ul>
          <li>Compute density drives electrical design.</li>
          <li>Compute density drives thermal design.</li>
          <li>Sustained utilization changes the power profile.</li>
          <li>Networking, storage and computing must be planned together.</li>
          <li>
            Legacy facilities can become impossible or uneconomical to
            retrofit.
          </li>
          <li>
            The physical building determines how far the computing platform
            can scale.
          </li>
        </ul>

        <FounderQuote>
          “I was not predicting ChatGPT. I was predicting that computing would
          become denser, more centralized, more virtualized and more
          continuously consumed as a service. That prediction forced us to
          redesign the physical infrastructure. When I look at what the
          AI-data-center industry is solving today—power density, cooling
          density, networking density and full-stack operational control—I
          recognize the problem immediately. We were working on an earlier
          version of it more than two decades ago.”
        </FounderQuote>

        <h2>Seven Times the Infrastructure Was Not Seven Times the Simplicity</h2>
        <p>
          Designing for substantially greater electrical and cooling capacity
          created a chain reaction throughout the building.
        </p>
        <div className="my-8 space-y-0 font-headline text-archive-paper/90">
          {[
            "More computing created more heat.",
            "More heat required greater cooling capacity.",
            "Greater cooling required more electrical power.",
            "More electrical power required more robust distribution.",
            "More infrastructure created more potential failure points.",
            "More failure points required additional redundancy, monitoring and operational discipline.",
          ].map((line, i) => (
            <p
              key={line}
              className="border-l-2 border-warm-copper/50 py-2 pl-5"
              style={{ marginLeft: `${i * 0.75}rem` }}
            >
              {line}
            </p>
          ))}
        </div>
        <p>Every improvement affected another layer.</p>

        <FounderQuote>
          “You could not design the servers first and ask the building to
          catch up later. The servers, power, cooling, networking, storage,
          security and operations had to be designed as one product. The
          facility was not a place where the platform happened to live. The
          facility was part of the platform.”
        </FounderQuote>

        <p>
          Modern AI platforms are now explicitly designed as coordinated
          systems spanning compute, networking, cooling, power and the larger
          data-center ecosystem. (NVIDIA)
        </p>

        <h2>Power Was Part of the Product</h2>
        <p>A traditional customer thought it was buying a server environment.</p>
        <p>We had to think about the power path behind every server.</p>
        <div className="my-8 flex flex-wrap gap-2">
          {powerChain.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 font-mono text-xs text-technical-gray transition-colors hover:border-electric-cyan/50 hover:text-electric-cyan"
            >
              {item}
            </span>
          ))}
        </div>
        <p>
          The customer never wanted to hear that an application was
          unavailable because the building’s electrical design had reached its
          limit.
        </p>
        <p>The complete power chain had to support the service promise.</p>

        <FounderQuote>
          “The customer saw an application. Behind that application was an
          electrical system that had to work every second of every day. If the
          server was redundant but the power distribution was not, the
          application was not truly redundant. Reliability had to exist
          through the complete chain.”
        </FounderQuote>

        <p>
          Today’s AI facilities face the same principle at much greater scale.
          NVIDIA says the AI revolution is causing data centers to outgrow
          legacy power-delivery methods, requiring new facility-level
          architectures capable of packing more computing into the same
          physical footprint. (NVIDIA)
        </p>

        <h2>Cooling Was Part of the Product</h2>
        <p>
          The cooling system was not there to make the room comfortable.
        </p>
        <p>
          Its job was to remove the heat generated by continuously operating
          computing equipment.
        </p>
        <p>
          That required answering questions far beyond the normal design of an
          office building:
        </p>
        <ul>
          <li>How much heat would each rack generate?</li>
          <li>How would cold air reach the equipment?</li>
          <li>How would hot air leave it?</li>
          <li>Where would hotspots form?</li>
          <li>What happened when a cooling component failed?</li>
          <li>Could the facility keep operating during maintenance?</li>
          <li>How would the design adapt as density increased?</li>
          <li>Could the electrical system support the cooling load?</li>
          <li>
            Was there enough capacity for the next generation of equipment?
          </li>
        </ul>

        <FounderQuote>
          “A data center can have empty floor space and still be full. It can
          have empty racks and still be full. It is full when it runs out of
          usable power or when it can no longer remove the heat. The real
          capacity of the facility was not measured only in square feet. It
          was measured in electrical and cooling capacity.”
        </FounderQuote>

        <p>
          <ClaimLabel type="contemporary-reporting" />
        </p>
        <p>
          The U.S. Department of Energy has estimated that cooling can
          represent up to 40% of overall data-center energy use, underscoring
          why thermal management must be treated as a primary architectural
          system rather than a secondary building utility. (Energy.gov)
        </p>

        <h2>Dense Computing Before Dense Computing Became Normal</h2>
        <p>
          The Intira facilities were being designed during the transition from
          conventional individual servers toward denser and more consolidated
          computing systems.
        </p>
        <p>Blade servers represented an important step in that direction.</p>
        <p>
          A blade architecture places multiple compact computing modules
          inside a shared chassis, allowing power, management, cooling and
          networking resources to be consolidated.
        </p>
        <p>The advantage was obvious:</p>
        <p className="font-headline font-semibold text-archive-paper">
          More computing in less space.
        </p>
        <p>The challenge was equally obvious:</p>
        <p className="font-headline font-semibold text-archive-paper">
          More electrical load and more heat concentrated in the same physical
          footprint.
        </p>
        <p>
          That was why the facility could not follow the assumptions of a
          conventional computer room.
        </p>
        <p>The computing system was changing.</p>
        <p>The physical infrastructure had to change with it.</p>

        <h2>Virtual Machines Changed the Meaning of a Server</h2>
        <p>
          The traditional model often treated one physical machine as one
          computing environment.
        </p>
        <p>
          Virtualization began separating the logical workload from the
          physical hardware.
        </p>
        <p>
          A single physical system could support multiple isolated virtual
          environments.
        </p>
        <p>That created the foundation for:</p>
        <ul>
          <li>Better hardware utilization.</li>
          <li>Faster provisioning.</li>
          <li>Centralized management.</li>
          <li>Workload portability.</li>
          <li>Greater consolidation.</li>
          <li>Private cloud environments.</li>
          <li>More computing per rack.</li>
          <li>More demanding electrical and cooling requirements.</li>
        </ul>

        <FounderQuote>
          “Once the customer’s computing environment was no longer permanently
          tied to one physical server, the data center could become a pool of
          managed computing capacity. That was much closer to the model I
          wanted Intira to sell. The customer should consume the environment.
          We should manage the machines.”
        </FounderQuote>

        <p>
          My account is that Intira was among the earliest providers to sell
          blade-based systems running virtual machines from privately operated
          commercial data centers.
        </p>
        <p>That potentially important historical claim still requires:</p>
        <ul>
          <li>Dated hardware invoices.</li>
          <li>Blade-server makes and models.</li>
          <li>Virtualization software licenses.</li>
          <li>Customer statements of work.</li>
          <li>Architecture diagrams.</li>
          <li>Deployment dates.</li>
          <li>Testimony from the engineers involved.</li>
        </ul>

        <div className="my-8 panel panel-copper p-6">
          <div className="mb-3">
            <ClaimLabel type="founder-recollection" />
          </div>
          <p className="text-archive-paper/90">
            Until those records are recovered, the claim should remain: Intira
            operated at the leading edge of high-density servers, virtualized
            computing environments and remotely managed infrastructure.
            Timothy Roberts recalls Intira selling blade-based systems running
            virtual machines from its private data centers. Research continues
            into the exact deployments and whether a first-to-market claim can
            be independently established.
          </p>
        </div>

        <h2>The Most Important Design Decision</h2>
        <p>
          The most important decision was not a particular generator, cooling
          unit, blade chassis or virtualization product.
        </p>
        <p className="font-headline text-lg font-semibold text-archive-paper">
          It was the decision to design the complete environment as one
          system.
        </p>
        <div className="my-8 space-y-0 font-headline text-archive-paper/90">
          {[
            "The application depended on the virtual machine.",
            "The virtual machine depended on the physical server.",
            "The server depended on the network and storage.",
            "The hardware depended on power and cooling.",
            "The power and cooling depended on the building.",
            "The building depended on monitoring and people capable of responding when any layer failed.",
          ].map((line, i) => (
            <p
              key={line}
              className="border-l-2 border-electric-cyan/50 py-2 pl-5"
              style={{ marginLeft: `${i * 0.75}rem` }}
            >
              {line}
            </p>
          ))}
        </div>
        <p>
          That is increasingly how the AI industry describes the modern AI
          factory—not as a room full of servers, but as a coordinated
          production system spanning the facility, power, cooling, computing,
          networking, storage, software and operations. (NVIDIA Developer)
        </p>
        <p>It was also the foundation of NetSourcing.</p>
        <p className="font-headline text-xl font-semibold text-electric-cyan">
          Everything Beneath the Application Was Part of the Service.
        </p>

        <h2>Being Early Was Expensive</h2>
        <p>
          The seven-times electrical and cooling design reflected ambition.
        </p>
        <p>It also reflected expense.</p>
        <p>
          Every additional unit of computing capacity required capital before
          the customer consumed it.
        </p>
        <ul>
          <li>The building had to be constructed.</li>
          <li>The power had to be available.</li>
          <li>The cooling equipment had to be installed.</li>
          <li>The redundancy had to exist.</li>
          <li>The engineers had to be hired.</li>
          <li>The hardware had to be purchased or financed.</li>
          <li>
            Customer demand had to arrive quickly enough to pay for it.
          </li>
        </ul>

        <FounderQuote>
          “We were designing for where computing was going. The financial
          problem was that we had to pay for parts of that future before the
          market arrived. That is the brutal tradeoff of being early.
          Underbuild, and the vision cannot scale. Overbuild, and the company
          may run out of money before customers fill the capacity.”
        </FounderQuote>

        <p>
          Modern AI infrastructure faces the same tension at a far larger
          scale. The engineering can be correct. The timing and capital
          structure still determine whether the company survives.
        </p>

        <h2>The Market Did Not Pause</h2>
        <p>
          <ClaimLabel type="verified-public-record" />
        </p>
        <p>
          A later SEC biography documents a deeply personal turning point.
        </p>
        <p>
          After Intira hired a chief financial officer, I was involved in a
          boating accident that placed me in intensive care for six weeks and
          required a long recovery. During my absence, the board moved the CFO
          into the CEO and chairman roles. The filing states that I left
          Intira on good terms.
        </p>

        <FounderQuote>
          “Entrepreneurs like to believe the company runs on their energy. An
          accident teaches you quickly that the world does not negotiate with
          your plans. One day, I was trying to build a category. Then I was
          trying to survive. The market did not pause because I was in
          intensive care. The company had to continue without waiting for me
          to recover.”
        </FounderQuote>

        <p>That experience changed how I thought about:</p>
        <ul>
          <li>Succession.</li>
          <li>Governance.</li>
          <li>Control.</li>
          <li>Insurance.</li>
          <li>Leadership depth.</li>
          <li>Key-person risk.</li>
        </ul>
        <p>
          A company is not truly resilient when one person’s emergency can
          destabilize its future.
        </p>

        <h2>The End of Intira</h2>
        <p>
          <ClaimLabel type="verified-public-record" />
        </p>
        <p>Intira ultimately entered bankruptcy proceedings.</p>
        <p>
          In July 2001, divine agreed to purchase substantially all Intira
          assets for $1 million in cash, provide a $6.8 million
          debtor-in-possession credit facility and assume certain obligations.
          The public filing described Intira as a Pleasanton-based provider of
          IT and network infrastructure supporting online applications.
        </p>
        <p>
          Its facilities, technology, employees and other assets moved through
          a complicated series of later transactions.
        </p>
        <p>
          The history should not be reduced to a neat but unsupported arrow
          saying: <em>Intira became Terremark.</em>
        </p>
        <div className="my-8 panel p-6">
          <div className="mb-3">
            <ClaimLabel type="disputed-or-incomplete" />
          </div>
          <p className="text-archive-paper/90">
            Contemporary records document substantial assets moving through
            divine. Later biographical accounts describe relationships
            involving Data Return, Terremark and Verizon. Those accounts may
            refer to different assets, teams, facilities, transactions or
            periods. Built Before Cloud will preserve that uncertainty until
            the original transaction records establish the precise lineage.
          </p>
        </div>

        <FounderQuote>
          “Being directionally right does not guarantee survival. Timing
          matters. Capital structure matters. Governance matters. Automation
          matters. Unit economics matter. A company has to survive long enough
          for the future it predicted to become ordinary.”
        </FounderQuote>

        <h2>Too Early. Capital-Intensive. Directionally Right.</h2>
        <p>Intira was not a simple victory.</p>
        <p>
          It was a technical thesis. A major construction effort. An operating
          company. An ambitious financing strategy. A new service category. A
          personal health crisis. And ultimately a business that did not
          survive to own the future it had anticipated.
        </p>
        <p>That is why the story matters.</p>
        <p>
          History becomes less useful when every founder chapter is rewritten
          as a victory.
        </p>
        <p className="font-headline text-lg font-semibold text-archive-paper">
          The harder lessons often contribute more to what comes next.
        </p>
      </Prose>

      <ChapterEndCTA
        href="/the-missing-pieces"
        label="Continue to the Missing Pieces"
      />
    </>
  );
}
