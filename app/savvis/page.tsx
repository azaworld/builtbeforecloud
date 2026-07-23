import type { Metadata } from "next";
import ChapterHero from "@/components/ChapterHero";
import Prose from "@/components/Prose";
import FounderQuote from "@/components/FounderQuote";
import ClaimLabel from "@/components/ClaimLabel";
import ImageFigure from "@/components/ImageFigure";
import PhotoGallery from "@/components/PhotoGallery";
import ChapterEndCTA from "@/components/ChapterEndCTA";

export const metadata: Metadata = {
  title: "Savvis: Fixing the Road Before Streaming Arrived",
  description:
    "How Tim Roberts (Timothy Munro Roberts) co-founded Savvis: DiamondNet, Andrew Gladney, the Apple deal, Gateway Venture Partners, the 4.905-second Keynote/Boardwatch result, the founder dispute, Bridge and the $408 million IPO.",
};

export default function SavvisPage() {
  return (
    <>
      <ChapterHero
        eyebrow="Chapter One"
        ghost="01"
        title={
          <>
            Savvis: Fixing the Road
            <br />
            Before Streaming Arrived
          </>
        }
      />

      <Prose>
        <p>The early Internet was a network of networks.</p>
        <p>That was its genius.</p>
        <p>It was also its weakness.</p>
        <p>
          A packet could leave a customer, enter a regional provider, cross a
          public exchange point, move onto a national backbone, transfer to
          another network, encounter congestion, change routes and finally
          reach the user.
        </p>
        <p>Every participant could be operating its own network correctly.</p>
        <p>The combined customer experience could still be terrible.</p>
        <p>Savvis was built around a different idea:</p>
        <p className="border-l-2 border-electric-cyan/60 py-1 pl-5 font-headline text-lg font-semibold leading-relaxed text-archive-paper">
          Control more of the journey. Reduce avoidable handoffs. Connect more
          directly to the networks carrying the traffic. Measure what the user
          experiences. Engineer around congestion instead of merely selling a
          larger circuit.
        </p>
        <p>
          <ClaimLabel type="verified-public-record" />
        </p>
        <p>
          Public SEC biographies identify me as a Savvis co-founder, place the
          company’s founding in 1995 and state that I left approximately two
          years later to begin Intira.
        </p>

        <ImageFigure
          src="/images/savvis-centurylink-logo.png"
          alt="Savvis logo with red starburst mark and the words 'A CenturyLink Company'"
          width={499}
          height={199}
          frame="light"
          maxWidth="max-w-md"
          caption={
            <>
              The company that began as DiamondNet in St. Louis ultimately
              became Savvis, “A CenturyLink Company,” in a 2011 acquisition
              valued at approximately $2.5 billion plus debt.
            </>
          }
          credit="Historical trademark — editorial reference"
          claim="verified-public-record"
        />

        <h2>Meeting Andrew Gladney</h2>
        <p>
          <ClaimLabel type="founder-recollection" />
        </p>
        <p>
          While I was working at J&amp;G Computer Solutions, I met Andrew
          Graves Gladney.
        </p>
        <p>
          Andrew came from a prominent St. Louis family associated with the
          Seven-Up business. His mother had recently died, and my recollection
          is that he had formed an investment vehicle called Graves Capital.
        </p>

        <FounderQuote>
          “Andrew had access to capital. I had the architecture and operating
          vision. We believed we could build something neither of us could
          build alone.”
        </FounderQuote>

        <p>The company began as DiamondNet.</p>
        <p>
          The immediate business could have remained a local Internet-access
          provider.
        </p>
        <p>The ambition was much larger:</p>
        <ul>
          <li>A national backbone.</li>
          <li>Private and controlled network paths.</li>
          <li>Better performance visibility.</li>
          <li>Fewer avoidable bottlenecks.</li>
          <li>Support for media and serious enterprise applications.</li>
          <li>Accountability for the customer experience.</li>
        </ul>

        <FounderQuote>
          “DiamondNet sounded like a local Internet provider. We wanted to
          sell something more valuable: performance, visibility,
          accountability and trust.”
        </FounderQuote>

        <p>
          Andrew’s role as an essential early financial backer and co-founder
          belongs in the story. The exact Graves Capital structure, investment
          amount, capitalization percentages and founder agreements remain
          Founder Recollection until the original records are added to the
          archive.
        </p>

        <h2>The Bigger-Pipe Myth</h2>
        <p>
          The telecommunications industry often described performance through
          the size of the customer’s access circuit.
        </p>
        <p>A larger connection could move more data.</p>
        <p>But the access circuit was only one part of the route.</p>
        <p>
          Once traffic left that circuit, it could encounter congestion,
          inefficient routing, overloaded exchange points, weak
          interconnections and unnecessary handoffs among providers that did
          not share responsibility for the final experience.
        </p>
        <p>
          <ClaimLabel type="contemporary-reporting" />
        </p>
        <p>
          Contemporary reporting on Savvis described a private ATM network
          designed to avoid public network-access-point bottlenecks by
          connecting more deeply and directly into other networks. By late
          1997, the company had around 60 employees, more than $10 million in
          venture funding and customers including PointCast and CDNow.
          (Forbes)
        </p>

        <FounderQuote>
          “The industry was selling customers faster driveways. I was focused
          on the traffic jam at the highway entrance. The speed of the
          driveway did not matter when every car reached the same blocked
          intersection.”
        </FounderQuote>

        <p>Audio and video exposed the problem immediately.</p>
        <p>A webpage could arrive late and remain usable.</p>
        <p>Continuous media had deadlines.</p>
        <p>
          Packets arriving too late could be nearly as useless as packets that
          never arrived.
        </p>
        <p>
          A network problem became silence. Stuttering. A frozen image. A
          broken experience.
        </p>

        <FounderQuote>
          “The application did not care how impressive the carrier’s network
          map looked. It cared whether the next packet arrived in time.”
        </FounderQuote>

        <h2>Building the Network</h2>
        <p>The architecture required more than a good idea.</p>
        <p>
          It needed circuits, routers, network access points, transit
          relationships, software, monitoring, operating procedures and
          engineers capable of making emerging technologies work under real
          customer traffic.
        </p>
        <p>
          <ClaimLabel type="founder-recollection" />
        </p>
        <p>
          I recruited Gary Zimmerman from SBC to help turn the architecture
          into an operating network.
        </p>
        <p>
          <ClaimLabel type="contemporary-reporting" />
        </p>
        <p>
          NANOG archive material from the period discusses Savvis’s use of
          early high-performance routing equipment and ATM, HSSI and FDDI
          technologies, along with the challenges of network quality of
          service, traffic engineering and transit capacity. (SecLists)
        </p>
        <p>
          Savvis also operated a 24-hour network operations center with
          dedicated controllers monitoring the environment. (SecLists)
        </p>

        <FounderQuote>
          “The diagram was the easy part. We were ordering circuits,
          installing equipment, testing routes, debugging production behavior,
          negotiating with carriers and discovering how emerging hardware
          behaved under load. The network did not care what the presentation
          promised.”
        </FounderQuote>

        <p>The broader principle was simple:</p>
        <ul>
          <li>Keep traffic under managed control for more of its journey.</li>
          <li>Avoid unnecessary public bottlenecks where possible.</li>
          <li>
            Build stronger direct connections into the networks carrying the
            traffic.
          </li>
          <li>
            Monitor actual performance instead of relying only on theoretical
            capacity.
          </li>
          <li>
            Design the network around what the application and customer
            experienced.
          </li>
        </ul>

        <h2>The Digital Broadcasting Vision</h2>
        <p>
          <ClaimLabel type="contemporary-reporting" />
        </p>
        <p>
          A surviving February 1997 NANOG message identifies me as Savvis’s
          vice president of emerging technologies and research and development
          and references the Savvis Digital Broadcasting Network. (SecLists)
        </p>
        <p>That title reflects what we were trying to solve.</p>
        <p>The Internet had been built for data that could tolerate delay.</p>
        <p>
          The next generation of applications would include audio, video and
          interactive services that exposed every weakness in the route.
        </p>

        <FounderQuote>
          “Streaming was not simply another application. It was a stress test
          for the architecture of the Internet.”
        </FounderQuote>

        <h2>The Day the Company Almost Closed</h2>
        <p>
          <ClaimLabel type="founder-recollection" />
        </p>
        <p>
          At one point, according to my recollection, Andrew told me he was
          closing the business.
        </p>
        <p>We had spent money.</p>
        <p>We had an ambitious architecture.</p>
        <p>
          We did not yet have the major customer that could prove a young St.
          Louis company belonged on a national stage.
        </p>

        <FounderQuote>
          “I did not accept that the story was over. I kept selling.”
        </FounderQuote>

        <p className="font-headline text-xl font-semibold text-archive-paper">
          Then came Apple.
        </p>

        <h2>Apple</h2>
        <p>
          <ClaimLabel type="founder-recollection" />
        </p>
        <p>
          My account is that a call involving Steve Jobs, then at NeXT, opened
          the first door.
        </p>
        <p>That call did not magically produce a contract.</p>
        <p>Enterprise selling is rarely that clean.</p>
        <p>
          There were technical evaluations, requirements, internal advocates,
          negotiations and people inside Apple who had to decide whether a
          young company in St. Louis could be trusted.
        </p>
        <p>
          People involved in the broader process included David Zimmerman,
          Marty Suzuki and my longtime friend Sam Wood.
        </p>
        <p>
          The executed agreement is not yet in the public archive, so its
          exact term, value and scope remain founder recollection.
        </p>
        <p>
          <ClaimLabel type="contemporary-reporting" />
        </p>
        <p>
          What is independently documented is that Apple became a Savvis
          customer. A January 1998 industry report listed Apple, CDNow,
          PointCast and Omron Electronics among companies receiving Savvis
          services and reported that the company had expanded to eight private
          network access points and points of presence in 11 cities. (Internet
          News)
        </p>

        <FounderQuote>
          “Apple did not merely provide revenue. Apple kept the company alive.
          Andrew had told me the business was closing. I closed Apple, and
          suddenly we had a customer whose name changed how investors,
          vendors, recruits and other customers viewed us. Before Apple, we
          had a theory. After Apple, we had proof.”
        </FounderQuote>

        <p>Apple also taught me something I had learned from my father:</p>
        <p className="font-headline text-lg font-semibold leading-relaxed text-archive-paper">
          Important people are still people. Make the call. Explain the idea.
          Accept that most doors may remain closed. You need only the right
          one to open.
        </p>
        <p>
          My manuscripts consistently identify Apple as the defining early
          customer and describe David Zimmerman, Marty Suzuki and Sam Wood as
          participants in the broader relationship.
        </p>

        <h2>Omron and Enterprise Networking</h2>
        <p>Savvis was not only addressing public Internet performance.</p>
        <p>
          <ClaimLabel type="contemporary-reporting" />
        </p>
        <p>
          A 1997 Omron announcement described a Savvis-built national
          corporate intranet initially connecting ten cities through ATM
          infrastructure using DS-3 and OC-3 capacity. (Lightwave Online)
        </p>
        <p>
          This mattered because it demonstrated that the architecture could
          support serious enterprise communication, not only emerging media
          companies.
        </p>
        <p>The same network principles applied:</p>
        <ul>
          <li>Control the path.</li>
          <li>Measure performance.</li>
          <li>Reduce unnecessary transitions.</li>
          <li>Accept responsibility for the complete experience.</li>
        </ul>

        <h2>My Father, Dick Ford and Gateway Venture Partners</h2>
        <p>Closing Apple solved one problem.</p>
        <p>Scaling the company created ten more.</p>
        <p>
          We needed working capital, equipment, financial controls,
          experienced leadership and investors capable of supporting a
          national buildout.
        </p>
        <p>
          <ClaimLabel type="founder-recollection" />
        </p>
        <p>
          My father introduced me to Dick Ford at Gateway Venture Partners.
        </p>
        <p>I arranged the meeting between Dick and Andrew.</p>

        <FounderQuote>
          “The architecture showed the opportunity. Apple showed that a major
          customer would buy it. Gateway brought the institutional capital and
          financial credibility required to build a real national company.”
        </FounderQuote>

        <p>
          My recollection places Gateway’s initial investment at approximately
          $2 million to $2.2 million. That precise amount remains a Founder
          Recollection until the term sheet, stock-purchase agreement or
          capitalization records are placed in the archive.
        </p>
        <p>The underlying lesson is larger than the number:</p>
        <p className="border-l-2 border-warm-copper/60 py-1 pl-5 font-headline font-semibold leading-[1.8] text-archive-paper">
          My father’s relationship created the introduction.
          <br />
          Apple created the credibility.
          <br />
          The network architecture created the opportunity.
          <br />
          All three were necessary.
        </p>

        <h2>Bob Murphy Builds the Financial Engine</h2>
        <p>
          After Gateway became involved, Bob Murphy joined the company as
          chief financial officer.
        </p>

        <FounderQuote>
          “Gateway did not only write a check. It helped professionalize the
          business. Bob built a financial organization capable of supporting a
          company growing beyond its original founders. In my recollection, he
          helped raise roughly another $30 million and brought financial
          discipline to an aggressive technical vision.”
        </FounderQuote>

        <p>
          The exact total and financing sequence remain founder recollection
          pending the original documents.
        </p>
        <p>But the larger point is important:</p>
        <p>
          A network architecture cannot become a national business without a
          financial architecture capable of supporting it.
        </p>
        <p>
          The routers required capital. The circuits required contracts. The
          employees required payroll. The customers required confidence that
          the company would still exist tomorrow.
        </p>

        <h2>4.905 Seconds</h2>
        <p className="font-headline text-lg font-semibold text-archive-paper">
          The Number That Made People Pay Attention
        </p>

        <ImageFigure
          src="/images/boardwatch-1997.jpg"
          alt="Boardwatch Magazine Internet Service Providers directory cover, July/August 1997, advertising performance tests for 29 Internet backbone providers with a bar chart of average download times"
          width={453}
          height={590}
          frame="light"
          maxWidth="max-w-md"
          caption={
            <>
              Boardwatch Magazine’s Internet Service Providers directory,
              July/August 1997: “Performance tests for 29 Internet backbone
              providers.” The Keynote/Boardwatch measurements gave backbone
              performance a public scoreboard.
            </>
          }
          credit="Boardwatch Magazine — historical artifact"
          claim="contemporary-reporting"
        />

        <p>
          <ClaimLabel type="contemporary-reporting" />
        </p>
        <p>
          In November 1997, a Keynote Systems and Boardwatch study measured
          page-download performance across 34 Internet backbone providers.
        </p>
        <p>Savvis ranked first with a reported average download time of:</p>
        <p className="my-8 text-center font-mono text-[clamp(2.4rem,7vw,4.5rem)] font-bold tracking-tight text-electric-cyan">
          4.905<span className="text-[0.5em] text-technical-gray"> SECONDS</span>
        </p>
        <p>
          The result gave a young St. Louis company a measurable performance
          story against much larger telecommunications providers.
          Contemporary Forbes reporting highlighted Savvis’s speed advantage
          and attributed it to the company’s private network and deeper direct
          connections. (Forbes)
        </p>

        <FounderQuote>
          “Before the measurement, we told people the architecture should
          perform better. After the measurement, the sales team had a number.
          Engineers could debate the methodology. Customers could test the
          network. Investors could see that a small company had designed
          something capable of competing with much larger names.”
        </FounderQuote>

        <p>
          The methodology was debated within the networking community,
          including questions about testing endpoints and server
          configuration. That debate belongs in the story.
        </p>
        <p>A credible history does not hide the argument.</p>
        <p>
          It explains why the result mattered while acknowledging that
          real-world performance testing is complicated.
        </p>

        <h2>Success Did Not Repair the Partnership</h2>
        <p>
          As Savvis gained customers, investors, employees and value, the
          relationship between Andrew and me deteriorated.
        </p>
        <FounderQuote>
          “Andrew and I began fighting over ownership, control and who would
          benefit financially from what we had created. I believed Andrew was
          trying to squeeze me out for his personal financial gain. What began
          as a partnership became litigation. The matter ultimately settled,
          and I left the company I had helped create. I did not leave because
          I stopped believing in the network. I left because I no longer
          believed the founder relationship could be repaired.”
        </FounderQuote>

        <p>
          <ClaimLabel type="verified-public-record" />
        </p>
        <p>
          Public biographies confirm that I left Savvis approximately two
          years after co-founding it to begin Intira. They do not
          independently establish the details or causes of the ownership
          dispute.
        </p>

        <div className="my-8 panel panel-copper p-6">
          <p className="font-mono text-xs uppercase tracking-widest text-warm-copper">
            Permanent Right-of-Response Notice
          </p>
          <p className="mt-3 text-sm leading-relaxed text-technical-gray">
            This is Timothy Roberts’s firsthand account of a founder and
            ownership dispute. Andrew Gladney or his representatives may hold
            a different account. Built Before Cloud welcomes relevant records,
            corrections and a response from Andrew or his representatives,
            which will be reviewed and published alongside this chapter.
            Contact options are available on the{" "}
            <a href="/corrections" className="text-electric-cyan hover:underline">
              Corrections
            </a>{" "}
            page.
          </p>
        </div>

        <h2>Bridge Information Systems</h2>
        <p>Savvis continued growing after my departure.</p>
        <p>
          <ClaimLabel type="contemporary-reporting" />
        </p>
        <p>
          Bridge Information Systems acquired Savvis in April 1999 and
          combined Savvis’s 18-city network with Bridge’s broader global
          infrastructure, creating an 87-city IP and ATM network. (Channel
          Dive)
        </p>
        <p>
          The company that followed was much larger than the original founding
          partnership.
        </p>
        <p>
          Bridge brought capital, customers, global reach and enormous
          concentration risk.
        </p>
        <p>It also created the path toward the public market.</p>

        <h2>The Savvis IPO</h2>
        <p>
          <ClaimLabel type="verified-public-record" />
        </p>
        <p>
          On February 15, 2000, Savvis sold 17 million shares at $24 per
          share.
        </p>
        <p>
          The offering raised approximately $408 million and produced a
          reported market value of approximately $2.2 billion. Bridge owned
          roughly 69% before the offering and was expected to provide more
          than 80% of Savvis’s first-year revenue.
        </p>
        <div className="my-8 panel p-6 text-center font-headline font-bold leading-[1.9]">
          <p className="text-2xl text-electric-cyan">$408 MILLION RAISED</p>
          <p className="text-xl text-archive-paper">
            APPROXIMATELY $2.2 BILLION IN REPORTED MARKET VALUE
          </p>
          <p className="text-lg text-warm-copper">
            ONE ENORMOUS CUSTOMER-CONCENTRATION RISK
          </p>
        </div>

        <FounderQuote>
          “The IPO was validating and strange. The company Andrew and I
          started had become worth billions. Neither of us controlled it. That
          is one of the hardest truths about venture-backed companies:
          creating the original value does not guarantee that you will own or
          control the final outcome.”
        </FounderQuote>

        <h2>Savvis Becomes Managed Infrastructure</h2>
        <p>
          <ClaimLabel type="verified-public-record" />
        </p>
        <p>
          Savvis survived the collapse of Bridge and continued evolving.
        </p>
        <p>
          The company expanded beyond Internet access into managed hosting,
          colocation, network services and cloud infrastructure.
        </p>
        <p>
          In 2004, it acquired Cable &amp; Wireless America assets that
          included a Tier 1 network, 15 enterprise hosting centers and more
          than 5,000 customers.
        </p>
        <p>
          By 2005, the company described itself as serving more than 5,000
          enterprise customers across 47 countries through 24 data centers.
        </p>
        <p>
          CenturyLink completed its acquisition of Savvis in July 2011. The
          announced transaction valued Savvis at approximately $2.5 billion
          plus around $700 million of net debt, while final accounting
          recorded aggregate consideration of approximately $2.38 billion.
        </p>

        <FounderQuote heading="Founder reflection">
          “The company CenturyLink acquired was built by thousands of people
          over many years. My chapter was the beginning. I am proud of the
          foundation without claiming ownership of everything that followed.”
        </FounderQuote>

        <h2>Naming Rights, Headquarters and St. Louis Legacy</h2>
        <p>
          <ClaimLabel type="corroborated-recollection" />
        </p>
        <p>
          Beyond the backbone and the IPO, Savvis left a physical imprint on
          St. Louis: arena naming rights, a corporate campus, a street named
          for the company, and a headquarters story that ran through Brooks
          Fiber, WorldCom and a Broadband Investment Group lease.
        </p>

        <PhotoGallery
          title="Savvis — The Founder Archive"
          credit="Founder-supplied photographs · Savvis / St. Louis corporate archive"
          claim="corroborated-recollection"
          photos={[
            {
              src: "/images/savvis-center-exterior.jpg",
              alt: "Exterior of Savvis Center in St. Louis with LED marquee, Boeing logo, SAVVIS CENTER signage, American flags and parked cars",
              width: 1024,
              height: 507,
              caption:
                "Savvis Center, St. Louis—the downtown arena that carried the company name. The LED marquee reads “Savvis Center / Stadium St. Louis / Home of the Blues Hockey Team,” with Boeing sponsorship and SAVVIS CENTER signage above the glass facade and American flags at street level.",
            },
            {
              src: "/images/savvis-lobby.jpg",
              alt: "Savvis lobby and reception desk with large SAVVIS wall letters and red square starburst logo beside glass entrance doors",
              width: 604,
              height: 453,
              caption:
                "Savvis lobby and reception: oversized metallic SAVVIS letters and the red-square starburst mark dominate the stone wall behind the desk, with glass entrance doors opening to the parking court—everyday corporate branding for a network company that had become a St. Louis institution.",
            },
            {
              src: "/images/savvis-world-headquarters.jpg",
              alt: "Composite of front and rear views of Savvis World Headquarters, the former Brooks Fiber building in St. Louis",
              width: 1024,
              height: 768,
              caption:
                "Savvis World Headquarters—front and rear views of the former Brooks Fiber building in St. Louis, sold to WorldCom before Savvis acquired it after Tim Roberts, on behalf of BIG (Broadband Investment Group), secured the building on a 99-year lease with a $1 buyout option.",
            },
            {
              src: "/images/savvis-pkwy-sign.jpg",
              alt: "Outdoor SAVVIS monument sign with SAVVIS PKWY street sign and autumn trees in the background",
              width: 604,
              height: 453,
              caption:
                "Savvis Pkwy monument sign: the white starburst-on-square mark and SAVVIS wordmark on a brick base, with the municipal street sign “SAVVIS PKWY” visible behind autumn trees—corporate presence written into the suburb’s map.",
            },
          ]}
        />

        <p>Savvis began with a network-performance thesis.</p>
        <p>
          It ultimately became valuable for the managed infrastructure,
          hosting, colocation and cloud capabilities built on top of that
          network.
        </p>
        <p>
          The company had followed the same direction I was already pursuing
          elsewhere.
        </p>

        <h2 className="text-center">
          Savvis Worked on the Road.
          <br />
          Intira Would Operate Everything Beneath the Application.
        </h2>
      </Prose>

      <ChapterEndCTA href="/intira" label="Continue to Intira" />
    </>
  );
}
