import type { Metadata } from "next";
import Link from "next/link";
import ChapterHero from "@/components/ChapterHero";
import Prose from "@/components/Prose";
import FounderQuote from "@/components/FounderQuote";
import ClaimLabel from "@/components/ClaimLabel";
import ImageFigure from "@/components/ImageFigure";
import TerminalBlock from "@/components/TerminalBlock";
import ChapterEndCTA from "@/components/ChapterEndCTA";

export const metadata: Metadata = {
  title: "Whackoland BBS: The W(hack)o Cracko Brothers",
  description:
    "How Tim Roberts (Timothy Munro Roberts) and his twin Peter ran Whackoland BBS: two fourteen-year-old identical twins, one telephone line, Commodore computers, TAP, Phrack, Metal Shop and the St. Louis computer underground.",
};

export default function WhackolandPage() {
  return (
    <>
      <ChapterHero
        eyebrow="Prologue"
        ghost="0P"
        title="The W(hack)o Cracko Brothers"
        subtitle={
          <p>Two Fourteen-Year-Old Twins and One Telephone Line</p>
        }
      />

      <Prose>
        <p>
          Peter and I were identical twins, collaborators, competitors and
          occasionally each other’s worst technical-support problem.
        </p>
        <p>
          At fourteen, we became obsessed with computers, modems, software,
          bulletin boards, video games, VAX/VMS systems and
          telecommunications.
        </p>
        <p>We learned by experimenting.</p>
        <p>We learned by taking things apart.</p>
        <p>We learned at night.</p>
        <p>Sometimes we learned by fixing what we had broken.</p>

        <ImageFigure
          src="/images/modem-years.jpg"
          alt="A teenager with curly hair sits at a Commodore computer setup surrounded by floppy disks, a joystick, disk drives and posters"
          width={1189}
          height={1400}
          caption={
            <>
              The modem years: a Commodore setup, stacked disk drives, floppy
              disks and a telephone line that doubled as the front door of a
              community.
            </>
          }
          credit="Family archive"
          claim="family-record"
        />

        <FounderQuote>
          “Peter and I were not thinking about careers. We were trying to
          understand a new world most adults did not know existed. School
          started early. The modem world did not close.”
        </FounderQuote>

        <p>
          Our working family manuscript describes those BBS years as the
          beginning of the brothers’ technical story and as the foundation for
          much of what followed. It is also clear that the manuscript remains
          a draft requiring continued fact-checking and legal review.
        </p>

        <ImageFigure
          src="/images/whacko-cracko-logo.jpg"
          alt="Illustrated emblem reading 'The W(h)acko Cracko Brothers' surrounded by a retro computer, pirate flags, a padlock, a floppy disk and tangled cables"
          width={1003}
          height={731}
          frame="light"
          maxWidth="max-w-xl"
          caption={
            <>
              A modern illustrated emblem of the W(hack)o Cracko Brothers—the
              handle Tim and Peter Roberts used across the St. Louis BBS
              scene.
            </>
          }
          credit="Built Before Cloud illustration"
        />

        <h2>Whackoland BBS</h2>
        <p className="font-headline text-lg font-semibold text-archive-paper">
          Before Websites, You Dialed the Computer Itself
        </p>
        <p>
          A caller’s modem dialed directly into the telephone line connected
          to our computer.
        </p>
        <p>
          If another user was already connected, the next person received a
          busy signal.
        </p>
        <p>
          If the computer failed, the community disappeared until we repaired
          it.
        </p>
        <p>There was no cloud provider.</p>
        <p>There was no automated failover.</p>
        <p>There was no trust-and-safety department.</p>
        <p className="font-headline font-semibold text-archive-paper">
          There was a sysop.
        </p>
        <p>
          The system operator installed the software, created accounts,
          managed permissions, organized message boards, reviewed uploads,
          removed disruptive users, backed up the system, maintained the
          computer and modem, and decided what kind of community the system
          would become.
        </p>

        <ImageFigure
          src="/images/whackoland-bbs-screen.jpg"
          alt="Recreated Whackoland BBS welcome screen in Commodore 64 style, with pirate-themed ASCII art, system details listing a 10MB hard drive and Hayes 300bps modem, and a menu asking 'What shall we plunder today?'"
          width={1402}
          height={1122}
          caption={
            <>
              A recreated Whackoland BBS welcome screen in Commodore 64 style.
              “We don’t hack for profit, we hack for the love of it!” — The
              W(h)acko Cracko Bros.
            </>
          }
          credit="Built Before Cloud recreation"
        />

        <p>
          <ClaimLabel type="contemporary-reporting" />
        </p>
        <p>
          A February 1986 Phrack entry documented Whackoland as a
          300/1200-baud BBS operated by the W(hack)o Cracko Brothers, with 40
          megabytes of storage, customized features, private sections and an
          intentionally exclusive limit of 100 users. (Phrack)
        </p>

        <TerminalBlock
          lines={[
            "CONNECT 1200",
            "",
            "WELCOME TO WHACKOLAND",
            "",
            "SYSOPS:",
            "THE W(HACK)O CRACKO BROTHERS",
            "",
            "300/1200 BAUD",
            "40 MEGABYTES",
            "CUSTOM MODIFICATIONS",
            "PRIVATE SECTIONS",
            "",
            "ONLY 100 USERS WILL BE RETAINED",
          ]}
          caption="Today, platforms celebrate their millionth user. We advertised that we only wanted 100. Apparently, scarcity marketing came naturally."
        />

        <FounderQuote>
          “Running Whackoland taught me that technology and community could
          not be separated. You could build a technically brilliant system and
          still create a terrible community. You could attract wonderful users
          and lose everything if the hardware failed. Whackoland was the first
          time I was operating a platform for other people.”
        </FounderQuote>

        <h2>Metal Shop and Phrack</h2>
        <p>Whackoland was not the only important St. Louis system.</p>
        <p>
          <Link href="/people/taran-king" className="text-electric-cyan hover:underline">
            Randy Tischler, known as Taran King
          </Link>
          , operated Metal Shop BBS.
        </p>
        <p>
          <Link href="/people/knight-lightning" className="text-electric-cyan hover:underline">
            Craig Neidorf, known as Knight Lightning
          </Link>
          , became his collaborator and co-editor.
        </p>
        <p>
          <ClaimLabel type="contemporary-reporting" />
        </p>
        <p>
          The first issue of Phrack was released on November 17, 1985. It
          described itself as a collection of electronic files based at Metal
          Shop, encouraged other bulletin boards to redistribute the material
          and invited writers and groups to submit future articles. (Phrack)
        </p>

        <ImageFigure
          src="/images/phrack-ascii.jpg"
          alt="Phrack e-zine ASCII art masthead above the Phrack 72 call for papers, noting that 2025 marks 40 years since Phrack first appeared online"
          width={800}
          height={1097}
          frame="light"
          maxWidth="max-w-xl"
          caption={
            <>
              Phrack is still publishing. The Phrack 72 call for papers marks
              40 years since the e-zine first appeared online from Metal Shop
              BBS in St. Louis. “Here’s to Phorty more years :))”
            </>
          }
          credit="Phrack.org"
          claim="contemporary-reporting"
        />

        <p>This was digital-native publishing before the Web.</p>
        <ul>
          <li>Electronic files instead of web pages.</li>
          <li>Bulletin boards instead of websites.</li>
          <li>Handles instead of public identities.</li>
          <li>Dial-up distribution instead of a content-delivery network.</li>
          <li>ASCII instead of responsive design.</li>
        </ul>

        <FounderQuote>
          “Randy, Craig, Peter and I were young, competitive, opinionated and
          convinced our system mattered more than the other system. In other
          words, we were already behaving like technology founders. We
          competed for users, information, contributors, recognition and
          technical credibility. Together, we helped make St. Louis an
          unlikely center of early digital culture.”
        </FounderQuote>

        <div className="my-8 panel p-6">
          <div className="mb-3 flex items-center gap-3">
            <span className="font-mono text-xs uppercase tracking-widest text-signal-blue">
              The Chronology Matters
            </span>
            <ClaimLabel type="contemporary-reporting" />
          </div>
          <ol className="list-decimal space-y-1 pl-6 text-archive-paper/90">
            <li>Phrack launched before the proposed TAP revival.</li>
            <li>
              Whackoland and Metal Shop were competing systems within the same
              St. Louis scene.
            </li>
            <li>
              The TAP discussions intensified the rivalry, but they did not
              cause Randy and Craig to create Phrack.
            </li>
          </ol>
        </div>

        <h2>TAP Magazine</h2>
        <p className="font-headline text-lg font-semibold text-archive-paper">
          A Teenage Media Acquisition That Almost Happened
        </p>
        <p>Before Phrack, there was TAP.</p>
        <p>
          Its roots reached back to the technological counterculture
          surrounding the Youth International Party Line and people including
          Abbie Hoffman. A later TAP editor used the handle{" "}
          <Link href="/people/cheshire-catalyst" className="text-electric-cyan hover:underline">
            Cheshire Catalyst
          </Link>
          .
        </p>
        <p>
          Peter and I initially discussed creating the Whackoland Gazette.
        </p>
        <p>
          Then we became involved in conversations about reviving TAP.
        </p>
        <p>
          <ClaimLabel type="contemporary-reporting" />
        </p>
        <p>
          A March 1986 Phrack report stated that the W(hack)o Cracko Brothers
          were planning to take over or restart TAP, but the article openly
          questioned whether Cheshire Catalyst had formally transferred the
          name. It listed proposed regional editors, staff members,
          subscription rates, online access and an ambitious plan for a
          monthly 30-to-40-page color magazine. (Phrack)
        </p>
        <p>The proposed participants included:</p>
        <div className="my-8 flex flex-wrap gap-2">
          {[
            "The W(hack)o Cracko Brothers",
            "Knight Lightning",
            "Taran King",
            "Susan Thunder",
            "Scan Man",
            "The Firelord",
            "Final Impulse",
            "Ninja NYC",
            "Sigmund Fraud",
            "Silver Spy",
            "The Bootleg",
            "The Cracker",
            "Surfer Bill",
            "The Marauder",
          ].map((handle) => (
            <span
              key={handle}
              className="rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 font-mono text-xs text-archive-paper/85 transition-colors hover:border-electric-cyan/40 hover:text-electric-cyan"
            >
              {handle}
            </span>
          ))}
        </div>
        <p>We were teenagers.</p>
        <p>We had a BBS.</p>
        <p>
          We were discussing a national magazine, a Unix service, memberships
          and a convention.
        </p>
        <p className="font-headline font-semibold text-archive-paper">
          What could possibly go wrong?
        </p>

        <FounderQuote>
          “My memory is that Cheshire Catalyst and Abbie Hoffman were prepared
          to let us carry the TAP name forward. At first, it sounded
          extraordinary. Then I began thinking about the legal exposure, the
          material, the attention and the responsibility. I decided the risk
          was larger than we were prepared to manage and chose not to
          continue.”
        </FounderQuote>

        <p>
          The documented record supports the existence of the discussions and
          proposed project. My recollection involving direct approval from
          Abbie Hoffman remains a Founder Recollection until correspondence or
          another participant corroborates it.
        </p>
        <p>The project did not launch as announced.</p>
        <p>
          Phrack continued and became one of the most durable publications in
          hacker and computer-security culture.
        </p>
        <p>
          The New TAP experience taught me an early lesson I would relearn in
          much larger companies:
        </p>
        <p className="font-headline text-lg font-semibold leading-relaxed text-archive-paper">
          Seeing the opportunity is not enough. The organization, funding,
          legal structure, timing and execution all have to survive the idea.
        </p>

        <h2>Curiosity and Consequences</h2>
        <p>The early modem years included genuine technical discovery.</p>
        <p>
          They also included actions that crossed legal and ethical
          boundaries.
        </p>
        <p>
          <ClaimLabel type="contemporary-reporting" />
        </p>
        <p>
          The February 1986 Phrack report included a colorful account of the
          Roberts twins attracting telecommunications and law-enforcement
          attention, losing computer equipment and receiving probation and
          community-service requirements. The same article mixed firsthand
          information, scene gossip, humor and unverified allegations, so it
          should be treated as a period artifact rather than a complete legal
          history. (Phrack)
        </p>

        <FounderQuote>
          “Curiosity is powerful. Curiosity without judgment can become
          destructive. Peter and I learned both lessons early. The positive
          part was discovering networks, software, communities and the
          enormous possibilities of connected computers. The harder lesson was
          that being able to do something does not make it responsible,
          ethical or legal.”
        </FounderQuote>

        <p>Built Before Cloud does not romanticize illegal conduct.</p>
        <p>
          The important story is how a teenage obsession with connected
          systems became a lifelong effort to build legitimate infrastructure
          at increasingly larger scales.
        </p>
        <p>
          <ClaimLabel type="founder-recollection" />
        </p>
        <p>
          My manuscript also describes a later full-circle relationship with{" "}
          <Link href="/people/kevin-yarborough" className="text-electric-cyan hover:underline">
            Kevin Yarborough
          </Link>
          , whom I remember as the telecommunications-security professional
          involved in tracing the activity that brought the teenage
          experiments to the attention of authorities. Years later, I hired
          him. That account remains a founder recollection until Kevin or
          original records corroborate it.
        </p>

        <h2>What Whackoland Taught Me</h2>
        <div className="my-8 space-y-3">
          {[
            ["Digital identity", "Users had names, passwords, permissions and reputations."],
            ["Remote service", "People depended on a machine located somewhere else."],
            ["Content", "Files and messages had to be organized, reviewed and maintained."],
            ["Security", "Every open connection created opportunity and risk."],
            ["Community", "The technology could attract people, but the rules determined what the community became."],
            ["Uptime", "Users did not care whether the modem, software, telephone line or disk drive failed. They knew only that they could not connect."],
            ["Distribution", "Software and information could move without a store, truck or physical package."],
          ].map(([term, lesson]) => (
            <div key={term} className="panel flex flex-col gap-1 p-5 sm:flex-row sm:gap-6">
              <span className="w-40 shrink-0 font-headline font-semibold text-electric-cyan">
                {term}
              </span>
              <span className="text-archive-paper/90">{lesson}</span>
            </div>
          ))}
        </div>

        <FounderQuote>
          “Whackoland was not the Internet. But it taught me how the Internet
          would feel. Remote users. Digital identities. Online communities.
          Distributed software. Information moving faster than institutions.
          Technology collapsing geography.”
        </FounderQuote>

        <h2>From Whackoland to J&amp;G Computer Solutions</h2>
        <p>Whackoland connected people to one computer.</p>
        <p>My next education involved connecting computers to one another.</p>
        <p>
          At J&amp;G Computer Solutions, I worked with Apple computers, Novell
          networks, Windows systems, routers, printers and business
          applications that were not naturally designed to communicate.
        </p>
        <p>Today, integration is expected.</p>
        <p>
          Then, making different computing environments cooperate could be
          difficult and highly specialized.
        </p>

        <FounderQuote>
          “At Whackoland, I learned to connect remote people to one computer.
          At J&amp;G, I learned to connect different computers inside a
          company. Savvis began when I started asking how to connect entire
          companies—and eventually a country—more intelligently.”
        </FounderQuote>

        <p>
          My historical manuscripts identify the J&amp;G period as the bridge
          between the teenage BBS years and the creation of DiamondNet, later
          Savvis.
        </p>

        <h2 className="text-center">
          Whackoland Connected One User at a Time.
          <br />
          Savvis Needed to Connect a Country.
        </h2>
      </Prose>

      <ChapterEndCTA href="/savvis" label="Continue to Savvis" />
    </>
  );
}
