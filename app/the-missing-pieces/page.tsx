import type { Metadata } from "next";
import Link from "next/link";
import ChapterHero from "@/components/ChapterHero";
import Prose from "@/components/Prose";
import FounderQuote from "@/components/FounderQuote";
import ClaimLabel from "@/components/ClaimLabel";
import VideoFigure from "@/components/VideoFigure";
import ImageFigure from "@/components/ImageFigure";
import PhotoGallery from "@/components/PhotoGallery";
import ChapterEndCTA from "@/components/ChapterEndCTA";

export const metadata: Metadata = {
  title:
    "From Phantom and GameStreamer to Savtira: The Missing Pieces Behind Platformz",
  description:
    "Tim Roberts's ventures between Intira and Platformz: Broadband Investment Group, Infinium Labs and Phantom, GameStreamer, Savtira, StationDigital, HashingSpace—and the expensive lessons, including serious failure, that made the final architecture possible.",
};

const contributions = [
  ["Whackoland", "contributed community."],
  ["J&G", "contributed integration."],
  ["Savvis", "contributed networks."],
  ["Intira", "contributed managed infrastructure."],
  ["The AI-ready data-center designs", "contributed full-stack facility thinking."],
  ["BIG", "contributed shared operating infrastructure."],
  ["Phantom", "contributed consumer experience and launch risk."],
  ["GameStreamer", "contributed white-label and multi-tenant distribution."],
  ["Savtira", "contributed cloud commerce and marketplace architecture."],
  ["StationDigital", "contributed media, subscriptions and engagement."],
  ["HashingSpace", "contributed another education in emerging infrastructure and regulatory risk."],
  ["Success", "contributed confidence."],
  ["Failure", "contributed controls."],
];

const cryptoHashOneVideoJsonLd = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  name: "CryptoHash One (Planned)",
  description:
    "Founder-supplied presentation of CryptoHash One, a Tier 1 Bitcoin data center with in-row cooling and 5 megawatts of power, designed by Timothy Munro Roberts (Tim Roberts), founder of Platformz—AI-class compute density before AI was a thing.",
  embedUrl: "https://www.youtube-nocookie.com/embed/Uu3Cwb14gn8",
  contentUrl: "https://www.youtube.com/watch?v=Uu3Cwb14gn8",
  thumbnailUrl: "https://i.ytimg.com/vi/Uu3Cwb14gn8/hqdefault.jpg",
  uploadDate: "2015-08-27",
  duration: "PT1M16S",
};

export default function MissingPiecesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(cryptoHashOneVideoJsonLd),
        }}
      />
      <ChapterHero
        eyebrow="Chapter Three"
        ghost="03"
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

        <h2>Broadband Investment Group</h2>
        <p>
          Broadband Investment Group was an attempt to create a shared
          operating and investment structure around multiple communications
          and technology companies.
        </p>
        <p>The vision was not simply to invest money.</p>
        <p>
          It was to give portfolio companies shared infrastructure,
          leadership, talent, facilities and strategic support.
        </p>
        <ImageFigure
          src="/images/big-logo.jpg"
          alt="Broadband Investment Group (BIG) logo — a stylized letter B with an orbit swoosh and a small runner figure"
          width={432}
          height={216}
          frame="light"
          maxWidth="max-w-sm"
          caption="the Broadband Investment Group (BIG) logo"
          claim="corroborated-recollection"
        />
        <p>
          <ClaimLabel type="founder-recollection" />
        </p>
        <p>
          My manuscript describes an approximately $18 million investment
          involving prominent families, rapid growth to more than 200
          employees and a portfolio model inspired by the large Internet
          holding companies of the era. Those figures remain founder-supplied
          until original financing and corporate records are added to the
          archive.
        </p>
        <PhotoGallery
          title="BIG in the Press"
          credit="St. Louis Post-Dispatch · founder-supplied clipping"
          claim="contemporary-reporting"
          photos={[
            {
              src: "/images/big-worldcom-post-dispatch.jpg",
              alt: "St. Louis Post-Dispatch clipping: Purchase will allow BIG — WorldCom sells building for $35 million in cash and stock",
              width: 480,
              height: 590,
              caption:
                "St. Louis Post-Dispatch — “Purchase will allow BIG.” WorldCom took an equity stake in Broadband Investment Group as part of a $35 million deal in which BIG bought the WorldCom building on Highway 40 (Interstate 64) for $37.35 million. “We pulled it off,” said Broadband chairman and chief visionary officer Tim Roberts. “It’s a big deal.” The purchase opened the way for BIG—then 125 employees—to hire 400 more over the following 90 days.",
            },
          ]}
        />

        <PhotoGallery
          title="Broadband Investment Group — The Founder Archive"
          credit="Founder-supplied photographs · Broadband Investment Group"
          claim="corroborated-recollection"
          photos={[
            {
              src: "/images/big-network-operations-center.jpg",
              alt: "BIG Network Operations Center with wall monitors showing US maps and status logs, curved white operator desk",
              width: 800,
              height: 600,
              caption:
                "BIG Network Operations Center (later Savvis acquired building)",
            },
            {
              src: "/images/savvis-world-headquarters.jpg",
              alt: "Front and rear views of the former Brooks Fiber building that became Savvis World Headquarters after BIG secured the lease",
              width: 1024,
              height: 768,
              caption:
                "Savvis World Headquarters — front and rear views of the former Brooks Fiber building in St. Louis. Tim Roberts, on behalf of BIG (Broadband Investment Group), secured the building on a 99-year lease with a $1 buyout option before WorldCom and later Savvis held the asset.",
            },
          ]}
        />

        <p>BIG taught me:</p>
        <ul>
          <li>Shared services can accelerate many companies.</li>
          <li>Centralized capability can create efficiency.</li>
          <li>
            A holding company can become fragile when every portfolio business
            depends on the same capital environment.
          </li>
          <li>Rapid growth magnifies both strengths and weaknesses.</li>
        </ul>

        <h2>Peter Roberts, Wanforce and Phoenix Networks</h2>
        <p>Peter’s story did not end with Whackoland.</p>
        <p>
          He built his own technical career and contributed to communications
          and network businesses including Wanforce and Phoenix Networks.
        </p>
        <p>Our lives moved together, apart and together again.</p>
        <p>We were twins. Competitors. Collaborators.</p>
        <p>
          Two people shaped by the same early modem world but not destined to
          follow identical paths forever.
        </p>
        <p>
          <ClaimLabel type="family-record" />
        </p>
        <p>
          Peter’s death at a young age gave the larger story a permanent sense
          of unfinished conversation. My working manuscripts describe his life
          and death as a central emotional part of the broader W(hack)o
          Cracko story.
        </p>

        <h2>Infinium Labs and Phantom</h2>
        <p>
          Phantom explored the delivery of digital games into the living room.
        </p>
        <p>The concept combined:</p>
        <ul>
          <li>Consumer hardware.</li>
          <li>Software.</li>
          <li>Digital game delivery.</li>
          <li>Subscriptions.</li>
          <li>Entertainment interfaces.</li>
          <li>Publisher relationships.</li>
          <li>Online distribution.</li>
        </ul>
        <p>
          The company recruited experienced industry figures, including Kevin
          Bachus from the original Microsoft Xbox effort, and demonstrated the
          Phantom platform at E3.
        </p>
        <p>
          It also attracted enormous attention before the company had the
          operating maturity and capital structure required to carry the full
          weight of that attention.
        </p>

        <FounderQuote>
          “Phantom taught me that a product can capture the world’s
          imagination before the company is ready. Attention is not the same
          thing as operational readiness. Hype can create opportunity, but it
          can also multiply every weakness.”
        </FounderQuote>

        <PhotoGallery
          title="Phantom at E3 — The Founder Archive"
          credit="Founder-supplied photographs · Infinium Labs / Phantom Entertainment"
          claim="corroborated-recollection"
          photos={[
            {
              src: "/images/phantom/phantom-team.jpg",
              alt: "Phantom Entertainment leadership team beside the Phantom console prototype",
              width: 1024,
              height: 768,
              caption:
                "The Phantom Entertainment team — left to right: Royal Obrian; Tim Roberts, CEO of Phantom Entertainment; Kevin Bachus, President and COO (co-founder of the original Microsoft Xbox effort); and Rob Shambro, Sales — with the Phantom console prototype.",
            },
            {
              src: "/images/phantom/phantom-booth-front.jpg",
              alt: "The Phantom Gaming Service booth at E3",
              width: 500,
              height: 381,
              caption:
                "The Phantom Gaming Service booth at E3 — 'Any game. Any time.'",
            },
            {
              src: "/images/phantom/phantom-billboard.jpg",
              alt: "Any Game Any Time billboard outside the E3 convention center",
              width: 590,
              height: 443,
              caption:
                "The 'Any Game, Any Time' billboard over the E3 convention-center entrance, South Hall Booth #746.",
            },
            {
              src: "/images/phantom/phantom-net-visor.jpg",
              alt: "Phantom.net branding on the console industrial design",
              width: 590,
              height: 228,
              caption:
                "Phantom.net — the service brand rendered into the console's industrial design.",
            },
            {
              src: "/images/phantom/phantom-indy-car.jpg",
              alt: "Indy car sponsored by Phantom Gaming Service on display at E3",
              width: 604,
              height: 453,
              caption:
                "The Phantom-liveried Indy car displayed outside the show floor.",
            },
            {
              src: "/images/phantom/phantom-crowd-overhead.jpg",
              alt: "Overhead view of crowds inside the Phantom booth at E3",
              width: 604,
              height: 453,
              caption:
                "Show-floor crowds moving through the Phantom booth at E3.",
            },
            {
              src: "/images/phantom/phantom-booth-blue.jpg",
              alt: "The two-story Phantom booth structure in blue lighting",
              width: 500,
              height: 357,
              caption:
                "The two-story booth structure — a small building erected inside the convention hall.",
            },
            {
              src: "/images/phantom/phantom-booth-aerial.jpg",
              alt: "Aerial view of the Phantom booth meeting area",
              width: 357,
              height: 500,
              caption: "The booth's meeting area, seen from the second level.",
            },
            {
              src: "/images/phantom/phantom-booth-desk.jpg",
              alt: "Reception desk of the Phantom booth at E3",
              width: 500,
              height: 375,
              caption: "The booth reception desk on the E3 show floor.",
            },
            {
              src: "/images/phantom/phantom-showfloor-crowd.jpg",
              alt: "Attendees around the Phantom demo stations at E3",
              width: 500,
              height: 375,
              caption: "Attendees around the Phantom demo stations.",
            },
            {
              src: "/images/phantom/phantom-crowd-stairs.jpg",
              alt: "Crowds filling the Phantom booth seen from the staircase",
              width: 500,
              height: 336,
              caption: "The booth at capacity, seen from the internal staircase.",
            },
            {
              src: "/images/phantom/phantom-staff.jpg",
              alt: "Phantom booth staff at E3",
              width: 604,
              height: 453,
              caption: "Booth staff during the E3 exhibition.",
            },
            {
              src: "/images/phantom/phantom-demo-session.jpg",
              alt: "Press and attendees gathered for a Phantom demo session",
              width: 604,
              height: 453,
              caption:
                "Press and attendees gathered in the booth lounge for a demonstration session.",
            },
            {
              src: "/images/phantom/phantom-booth-lounge.jpg",
              alt: "Lounge seating and demo screen inside the Phantom booth",
              width: 500,
              height: 357,
              caption: "Lounge seating and a live demo screen inside the booth.",
            },
            {
              src: "/images/phantom/phantom-vip-demo-room.jpg",
              alt: "VIP Demo Room 1 inside the Phantom booth",
              width: 500,
              height: 357,
              caption:
                "VIP Demo Room 1 — private demonstration space for press and partners.",
            },
          ]}
        />

        <p>Phantom contributed lessons in:</p>
        <ul>
          <li>Consumer product design.</li>
          <li>Digital entertainment.</li>
          <li>Living-room interfaces.</li>
          <li>Product launches.</li>
          <li>Media scrutiny.</li>
          <li>Public-company finance.</li>
          <li>The danger of a story moving faster than execution.</li>
        </ul>
        <div className="my-8 panel p-6">
          <div className="mb-3">
            <ClaimLabel type="disputed-or-incomplete" />
          </div>
          <p className="text-archive-paper/90">
            Personal drafts from this period contain allegations and
            characterizations involving investors, advisers and market
            participants that require substantial legal and factual review
            before any public use. They are not published as established fact
            merely because they appear in a working manuscript.
          </p>
        </div>

        <h2>GameStreamer</h2>
        <p>GameStreamer focused on white-label digital distribution.</p>
        <p>
          One reusable infrastructure could power multiple branded
          storefronts, partners, catalogs and customer experiences.
        </p>

        <FounderQuote>
          “GameStreamer showed me that the same foundation could serve many
          brands without rebuilding the complete system every time.”
        </FounderQuote>

        <p>GameStreamer contributed:</p>
        <ul>
          <li>Multi-tenancy.</li>
          <li>White-label software.</li>
          <li>Digital catalogs.</li>
          <li>Publisher integrations.</li>
          <li>Partner-branded experiences.</li>
          <li>Automated digital fulfillment.</li>
          <li>Reusable commerce infrastructure.</li>
        </ul>
        <p>
          It also reinforced the importance of clear partnership agreements,
          intellectual-property ownership and alignment among founders and
          capital partners.
        </p>

        <PhotoGallery
          title="GameStreamer — The Founder Archive"
          credit="Founder-supplied photographs · GameStreamer"
          claim="corroborated-recollection"
          photos={[
            {
              src: "/images/gamestreamer/tim-roberts-michael-andretti-indycar.jpg",
              alt: "Tim Roberts of GameStreamer with Indy driver Michael Andretti at an IZOD IndyCar hospitality event",
              width: 831,
              height: 1024,
              caption:
                "Tim Roberts, GameStreamer and Michael Andretti, Indy Driver",
            },
            {
              src: "/images/gamestreamer/tim-roberts-dave-hunter-sega-london.jpg",
              alt: "Tim Roberts and Dave Hunter at a GameStreamer platforms meeting with SEGA London",
              width: 1024,
              height: 768,
              caption:
                "Tim Roberts and Dave Hunter, GameStreamer meeting with SEGA London",
            },
            {
              src: "/images/gamestreamer/tim-roberts-savvis-case-study-interview.jpg",
              alt: "Tim Roberts being interviewed on camera for a Savvis customer case study while working for GameStreamer",
              width: 1024,
              height: 768,
              caption:
                "Tim Roberts being interviewed for a customer case study while working for GameStreamer by Savvis. GameStreamer was a large and valued Savvis customer.",
            },
          ]}
        />

        <h2>Savtira</h2>
        <p>
          Savtira expanded the vision beyond games into broader cloud
          commerce.
        </p>
        <ul>
          <li>Physical and digital products.</li>
          <li>Marketplaces.</li>
          <li>Payments.</li>
          <li>Logistics.</li>
          <li>Catalogs.</li>
          <li>Subscriptions.</li>
          <li>Partner ecosystems.</li>
        </ul>
        <p>
          <ClaimLabel type="contemporary-reporting" />
        </p>
        <p>
          A 2011 profile described me saying that Savtira felt like the
          culmination of my life at that time—a platform combining much of the
          experience gained through Savvis, Intira and digital distribution.
          (CloudCow)
        </p>

        <FounderQuote>
          “Savtira showed me both the power and danger of a platform vision. A
          platform can connect enormous opportunities. It can also become
          impossible to manage when too many layers are built at once without
          disciplined boundaries.”
        </FounderQuote>

        <p>Savtira contributed:</p>
        <ul>
          <li>Cloud commerce.</li>
          <li>Marketplace architecture.</li>
          <li>Catalog orchestration.</li>
          <li>Physical and digital fulfillment.</li>
          <li>Broad platform thinking.</li>
          <li>
            A permanent respect for modular design, financial controls and
            operating discipline.
          </li>
        </ul>

        <PhotoGallery
          title="Savtira in Ybor City — The Founder Archive"
          credit="Founder-supplied photograph · Savtira, Ybor City (Tampa)"
          claim="corroborated-recollection"
          photos={[
            {
              src: "/images/savtira-ybor-city-guavaween.jpg",
              alt: "Joe Heinzen, Michael Avina and Tim Roberts in a vintage costume shop near the Savtira headquarters in Ybor City, preparing for Guavaween",
              width: 1024,
              height: 768,
              caption:
                "Left to right: Joe Heinzen, Michael Avina and Tim Roberts with Savtira in Ybor City—the headquarters neighborhood—outfitted in costume-shop finery (Tim in a playing-card jacket and cowboy hat) while preparing for Guavaween, Ybor City's Halloween street festival.",
            },
          ]}
        />

        <h3>Earlier Recognition: The Savvis and Intira Years</h3>
        <p>
          Two framed honors from around the turn of the millennium predate
          Savtira by more than a decade—they belong to the Savvis and Intira
          era, when Tim Roberts was in his late twenties. They are collected
          here as part of the founder archive, accurately dated to their own
          time rather than the Savtira years.
        </p>
        <PhotoGallery
          title="Recognition — 30 Under 30 &amp; 40 Under 40 (January 2000)"
          credit="FastForward Magazine and St. Louis Business Journal · founder-supplied clippings"
          claim="contemporary-reporting"
          photos={[
            {
              src: "/images/tim-roberts-fastforward-30-under-30.jpg",
              alt: "FastForward magazine 'The 30 Under 30 Issue,' January 2000, with a framed photo of Tim Roberts and a '30 Under 30 · Tim Roberts · Fast Forward Magazine · January 2000' label",
              width: 604,
              height: 453,
              caption:
                "FastForward magazine's “The 30 Under 30 Issue” (January 2000). The framed display names Tim Roberts among the honorees—“30 Under 30 · Tim Roberts · Fast Forward Magazine · January 2000.” A Savvis/Intira-era recognition, years before Savtira.",
            },
            {
              src: "/images/tim-roberts-40-under-40-business-journal.jpg",
              alt: "St. Louis Business Journal '40 under forty' framed clipping (January 2000) listing Tim Roberts, 29, among 40 overachievers under 40",
              width: 604,
              height: 453,
              caption:
                "St. Louis Business Journal's “40 under forty” (January 2000)—“40 overachievers under 40.” The profile at lower right features “Tim Roberts, 29.” Another Savvis/Intira-era honor predating Savtira.",
            },
          ]}
        />

        <h2>StationDigital</h2>
        <p>StationDigital expanded the experience into:</p>
        <ul>
          <li>Streaming media.</li>
          <li>Advertising.</li>
          <li>Subscriptions.</li>
          <li>Recommendations.</li>
          <li>User engagement.</li>
          <li>Mobile distribution.</li>
          <li>Content rights.</li>
        </ul>
        <p>
          It reinforced the lesson that content, commerce, identity, data and
          customer experience are not isolated products.
        </p>
        <p className="font-headline font-semibold text-archive-paper">
          They become stronger when coordinated through a common platform.
        </p>

        <PhotoGallery
          title="StationDigital — The Founder Archive"
          credit="Founder-supplied photographs · StationDigital Corporation"
          claim="corroborated-recollection"
          photos={[
            {
              src: "/images/stationdigital/stationdigital-rolling-stone.jpg",
              alt: "Timothy Munro Roberts and Andrew Gladney at Rolling Stone headquarters in Manhattan",
              width: 590,
              height: 443,
              caption:
                "Timothy Munro Roberts and Andrew Gladney (heir to the 7up fortune) at Rolling Stone headquarters in Manhattan for a StationDigital interview—the same partnership that started Savvis, reunited a media generation later.",
            },
            {
              src: "/images/stationdigital/stationdigital-nasdaq-times-square.jpg",
              alt: "StationDigital on the NASDAQ tower in Times Square",
              width: 480,
              height: 590,
              caption:
                "StationDigital.com on the NASDAQ tower in Times Square—the streaming-media venture announced to the public markets.",
            },
          ]}
        />

        <h2>HashingSpace and Emerging Infrastructure</h2>
        <p>
          Blockchain infrastructure introduced another version of the same
          pattern:
        </p>
        <ul>
          <li>A technical system with substantial promise.</li>
          <li>A rapidly changing market.</li>
          <li>Regulatory uncertainty.</li>
          <li>Capital intensity.</li>
          <li>
            A difference between technical capability and durable business
            economics.
          </li>
        </ul>

        <FounderQuote>
          “Emerging technology can be real and still be surrounded by
          unrealistic expectations. The technology thesis and the company
          economics must both work.”
        </FounderQuote>

        <h3>
          In the Press: yBitcoin Names Him “Bitcoin’s Mr. Infrastructure”
        </h3>
        <p>
          At the height of the HashingSpace era, <em>yBitcoin</em> magazine
          (Volume 2, Issue 3) ran a multi-page feature titled{" "}
          <strong>
            “Bitcoin’s Mr. Infrastructure: HashingSpace Corporation’s Timothy
            Roberts.”
          </strong>{" "}
          The cover story billing read: “HashingSpace Sets Out to Build
          Infrastructure for Global Adoption.”
        </p>
        <p>The article documented, in print, the pattern this site traces:</p>
        <ul>
          <li>
            <strong>The same instinct, a new industry.</strong> “I bought a
            machine and started mining to see what it was all about. That led
            to five machines, then ten, then to plans for building a large
            network once I realized this is essentially what I had been doing
            for the past 25 years.”
          </li>
          <li>
            <strong>The economics of infrastructure.</strong> “Paying 30 cents
            per kilowatt hour for power/hosting really put the squeeze on solo
            miners. That’s when it became apparent to me that they needed data
            centers with more and cheaper available power than they could get
            alone.”
          </li>
          <li>
            <strong>Wenatchee, Washington.</strong> HashingSpace hosted ASIC
            miners from its data center in Wenatchee—home to cheap
            hydroelectric power and cool weather—offering hashing power at
            eight cents an hour through bulk purchases negotiated with
            northwest power providers.
          </li>
          <li>
            <strong>The full-stack ambition.</strong> Mining, wallets,
            exchanges, ATMs and transaction processing—“the enterprise-grade
            infrastructure Bitcoin needs for global adoption” (OTCQB: HSHS).
          </li>
          <li>
            <strong>The backstory in print.</strong> The article retold the
            arc: the St. Louis childhood with a twin brother pulling
            all-nighters on early computers, the father who was an accomplished
            Anheuser-Busch executive, Savvis launched at 22 (“We ran the
            fastest Internet in the world for ten years”), its
            multi-billion-dollar public-market history and eventual absorption
            into CenturyLink.
          </li>
          <li>
            <strong>The Steve Jobs phone call.</strong> “My dad knew Jobs, and
            one day I asked him if he could arrange an introduction for me. My
            dad said, ‘You don’t need an introduction, just pick up the phone;
            he’ll talk to you.’ So I did, reached his assistant, and a minute
            later I was talking to Jobs himself.”
          </li>
        </ul>

        <PhotoGallery
          title="yBitcoin Feature — Volume 2, Issue 3"
          credit="yBitcoin magazine · sponsored feature · founder-supplied copy"
          claim="contemporary-reporting"
          photos={[
            {
              src: "/images/hashingspace/ybitcoin-page-4.jpg",
              alt: "yBitcoin article: Bitcoin's Mr. Infrastructure — HashingSpace Corporation's Timothy Roberts",
              width: 1154,
              height: 1400,
              caption:
                "The feature opener: “Bitcoin’s Mr. Infrastructure: HashingSpace Corporation’s Timothy Roberts” — the mining economics, the Wenatchee hydroelectric data center, and the 25-year pattern behind it.",
            },
            {
              src: "/images/hashingspace/ybitcoin-page-5.jpg",
              alt: "yBitcoin article second page with Timothy Roberts at an electrical substation",
              width: 1154,
              height: 1400,
              caption:
                "Page two: Tim at the power infrastructure. Savvis at 22, the Steve Jobs phone call, and “you have to be willing to lead.”",
            },
            {
              src: "/images/hashingspace/ybitcoin-page-1.jpg",
              alt: "yBitcoin magazine cover — Introducing the Future of Money",
              width: 1154,
              height: 1400,
              caption:
                "The cover of yBitcoin, Volume 2, Issue 3: “Introducing the Future of Money,” with the HashingSpace feature billed on the front.",
            },
            {
              src: "/images/hashingspace/ybitcoin-page-2.jpg",
              alt: "yBitcoin table of contents listing the HashingSpace feature on page 68",
              width: 1154,
              height: 1400,
              caption:
                "In This Issue: “68 — HashingSpace Sets Out to Build Infrastructure for Global Adoption.”",
            },
            {
              src: "/images/hashingspace/ybitcoin-page-3.jpg",
              alt: "HashingSpace advertisement: A Blueprint for the Bitcoin Ecosystem",
              width: 1154,
              height: 1400,
              caption:
                "“A Blueprint for the Bitcoin Ecosystem — Mining. Wallets. Exchanges. ATMs. Transaction Processing.” The HashingSpace ad from the same issue (OTCQB: HSHS).",
            },
          ]}
        />

        <p>
          <a
            href="/docs/ybitcoin-hashingspace-tim-roberts.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 font-mono text-[12px] font-semibold uppercase tracking-[0.16em] text-electric-cyan underline decoration-electric-cyan/40 underline-offset-4 transition-colors hover:text-archive-paper"
          >
            Read the original yBitcoin feature (PDF, 5 pages) ↗
          </a>
        </p>

        <p>
          The HashingSpace era also produced the clearest surviving video
          record of the high-density design philosophy that began at Intira.
        </p>

        <VideoFigure
          videoId="Uu3Cwb14gn8"
          title="CryptoHash One — Tier 1 Bitcoin data center with in-row cooling and 5 megawatts of power"
          caption={
            <>
              <strong>CryptoHash One (planned, 2015).</strong> The smaller
              crypto facility: a Tier 1 Bitcoin data center with in-row
              cooling, a cooling-with-heat SLA and 5 megawatts of power. This
              was AI-class density before AI was a thing—designed for the
              sustained, concentrated compute loads that the AI-data-center
              industry now treats as standard.
            </>
          }
          credit="Founder-supplied video record"
          claim="corroborated-recollection"
        />

        <p>
          The larger companion design—Fortress One, with seven times the
          electrical and cooling capacity of traditional facilities and
          sustainable hydroelectric power—is preserved in the{" "}
          <Link href="/intira" className="text-electric-cyan hover:underline">
            Intira chapter
          </Link>{" "}
          beside the seven-times design account it corroborates.
        </p>

        <h2>Failure Was Also Infrastructure</h2>
        <p>Every successful company contributed reusable ideas.</p>
        <p>Every failure contributed operating rules.</p>
        <p>Every dispute contributed governance lessons.</p>
        <p>Every financial crisis contributed discipline.</p>
        <p>Every public mistake contributed humility.</p>
        <p>
          Every legal consequence became part of understanding that technical
          intelligence does not exempt a founder from responsibility.
        </p>
        <p className="font-headline text-lg font-semibold text-archive-paper">
          My life story includes serious failures and a federal prison
          sentence.
        </p>
        <p>
          Built Before Cloud should not hide that chapter or rewrite it into
          victim mythology.
        </p>
        <p>The responsible version is more useful:</p>

        <FounderQuote>
          “I made decisions that caused real consequences. Intelligence does
          not replace judgment. Vision does not excuse poor governance.
          Believing in the future does not allow a founder to ignore the rules
          of the present. Platformz must be stronger not only because of what
          I built correctly, but because of everything I learned the hardest
          possible way.”
        </FounderQuote>

        <h2>Every Chapter Added a Layer</h2>
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

        <p className="pt-6 font-headline text-xl font-semibold text-archive-paper">
          Then came FUR4.
        </p>
        <p>
          And for the first time, nearly every layer was required inside one
          real operating company.
        </p>

        <h2 className="text-center">
          None of Those Companies Was the Final Platform.
          <br />
          Each One Delivered a Piece of It.
        </h2>
      </Prose>

      <ChapterEndCTA href="/platformz" label="Continue to Platformz" />
    </>
  );
}
