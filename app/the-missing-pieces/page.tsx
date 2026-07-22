import type { Metadata } from "next";
import Link from "next/link";
import ChapterHero from "@/components/ChapterHero";
import Prose from "@/components/Prose";
import FounderQuote from "@/components/FounderQuote";
import ClaimLabel from "@/components/ClaimLabel";
import VideoFigure from "@/components/VideoFigure";
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
