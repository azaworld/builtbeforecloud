import type { Metadata } from "next";
import ChapterHero from "@/components/ChapterHero";
import Prose from "@/components/Prose";
import FounderQuote from "@/components/FounderQuote";
import ClaimLabel from "@/components/ClaimLabel";
import ImageFigure from "@/components/ImageFigure";
import PhotoGallery from "@/components/PhotoGallery";
import ChapterEndCTA from "@/components/ChapterEndCTA";

export const metadata: Metadata = {
  title: "The Origin: The Man Who Made Big Ideas Feel Normal",
  description:
    "How William Munro 'Monty' Roberts III—Ford, Lincoln-Mercury, Young & Rubicam, the Walt Disney account, Anheuser-Busch, the Busch Clash, Ontario Motor Speedway and later Episcopal ministry—taught Tim Roberts (Timothy Munro Roberts) to think at scale.",
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
          centers, digital distribution platforms or global commerce
          infrastructure, I watched my father turn ambitious corporate ideas
          into things people could see, hear, visit and remember.
        </p>
        <p>
          His name was William Munro Roberts III, although nearly everyone
          called him Monty.
        </p>

        <ImageFigure
          src="/images/monty-marketing-sheet.jpg"
          alt="Up, Down & Strange marketing sheet listing the disciplines and experience of Monty Roberts, with testimonial quotes headlined 'Not Just a Pretty Face' and 'Superb Mind…'"
          width={1083}
          height={1400}
          frame="light"
          caption={
            <>
              A surviving “Up, Down &amp; Strange — Post-Modern Marketing”
              sheet documenting Monty Roberts’s disciplines and experience,
              with testimonials from executives at Anheuser-Busch, Aegon,
              Muhleman Marketing and Texas Governor Mark White.
            </>
          }
          credit="Family archive"
          claim="family-record"
        />

        <div className="my-8 panel p-6">
          <div className="mb-3">
            <ClaimLabel type="family-record" />
          </div>
          <p className="text-archive-paper/90">
            William Munro “Monty” Roberts III was a marketing,
            public-relations, entertainment and motorsports executive whose
            career included work connected with Ford, Lincoln-Mercury, Young
            &amp; Rubicam, the Walt Disney account, Anheuser-Busch and the
            Busch beer brand. Later in life, he followed a spiritual calling
            and became an ordained Episcopal minister.{" "}
            <strong>
              He was not the horse trainer who shares the Monty Roberts name.
            </strong>{" "}
            They were entirely different people with unrelated careers.
          </p>
        </div>

        <p>
          The drive did not begin with my father. It was already in the family
          name.
        </p>

        <ImageFigure
          src="/images/munro-roberts-i-1927.jpg"
          alt="The St. Louis Star, June 15, 1927: Employe in Star Mailing Room Becomes a Lawyer — portrait of William Munro Roberts I"
          width={526}
          height={701}
          frame="light"
          maxWidth="max-w-xl"
          caption={
            <>
              <em>The St. Louis Star</em>, June 15, 1927 — “Employe in Star
              Mailing Room Becomes a Lawyer.” William Munro Roberts I, Tim’s
              great-grandfather: orphaned at eight, working in a shoe factory
              at eleven, out of school at fourteen to work as a bundle boy —
              then sixteen years in newspaper mail rooms, president of the St.
              Louis Mailers’ Union, night classes at the City College of Law
              three nights a week, and the state bar examination passed. The
              family pattern—outworking the circumstances—starts here.
            </>
          }
          credit="Family archive · The St. Louis Star"
          claim="family-record"
        />

        <p>
          To the companies he worked for, my father was an executive trusted
          with nationally visible brands, major programs, influential
          relationships and substantial corporate resources.
        </p>
        <p>To me, he was Dad.</p>
        <p>And Dad made enormous ideas look like ordinary work.</p>

        <ImageFigure
          src="/images/busch-monty-elliman.jpg"
          alt="August Busch III, William (Monty) Munro Roberts III and Yvonne Elliman in conversation at a formal event"
          width={1200}
          height={950}
          frame="light"
          caption={
            <>
              August Busch III, William (Monty) Munro Roberts III and singer
              Yvonne Elliman at a corporate event.
            </>
          }
          credit="Family archive"
          claim="family-record"
        />

        <h2>
          He Did Not Think in Advertisements.
          <br />
          He Thought in Experiences.
        </h2>
        <p>
          My father understood that people might forget an advertisement, but
          they would remember an experience.
        </p>
        <p>They would remember the roar of a race car.</p>
        <p>They would remember looking up and seeing a blimp.</p>
        <p>
          They would remember a theme park, a celebrity, a famous driver, a
          major event or a brand becoming part of the culture around them.
        </p>
        <p>His world included:</p>
        <ul className="font-headline text-lg text-archive-paper">
          <li>Race teams.</li>
          <li>Race cars.</li>
          <li>Professional drivers.</li>
          <li>Major speedways.</li>
          <li>Blimps.</li>
          <li>Hot-air balloons.</li>
          <li>Theme parks.</li>
          <li>Celebrities.</li>
          <li>Corporate hospitality.</li>
          <li>National brands.</li>
          <li>Large promotional budgets.</li>
        </ul>
        <p>
          Projects with enough machinery, money and moving parts to intimidate
          most people before they began.
        </p>

        <FounderQuote>
          “My father did not come home talking about small campaigns. He
          talked about race teams, race cars, blimps, balloons, theme parks,
          celebrities, national brands, major events and the capital required
          to make all of it happen. I grew up believing that when an
          organization had a big enough idea, you assembled the right people,
          allocated the resources and built it.”
        </FounderQuote>

        <p>That became part of my own operating system.</p>
        <p>
          When I imagined Savvis, I did not imagine a small local Internet
          provider. I imagined a national network.
        </p>
        <p>
          When I imagined Intira, I did not imagine a room filled with rented
          servers. I imagined purpose-built data centers delivering a complete
          managed-computing environment.
        </p>
        <p>
          When I imagine Platformz, I do not see another software application.
          I see the operating infrastructure connecting the complete business.
        </p>
        <p>Large-scale thinking did not feel unnatural to me.</p>
        <p className="font-headline font-semibold text-archive-paper">
          It felt familiar.
        </p>

        <h2>Ford, Lincoln-Mercury and Motorsports</h2>
        <ImageFigure
          src="/images/mercury-racing.jpg"
          alt="Illustrated Mercury Cougar racing advertisement titled 'Mercury's Racing — Mercurys Got It!' featuring a message from William (Monty) Munro Roberts III"
          width={1600}
          height={1065}
          frame="light"
          caption={
            <>
              “I told Warnock that if you’re not in racing, you’re not in the
              automobile business.” A Mercury racing piece carrying a message
              from William (Monty) Munro Roberts III, who served as General
              Manager of Mercury Division Sales and Marketing and Head of
              Public Relations.
            </>
          }
          credit="Family archive"
          claim="family-record"
        />

        <PhotoGallery
          title="The Ford Years"
          credit="Family archive · founder-supplied photographs"
          claim="corroborated-recollection"
          photos={[
            {
              src: "/images/ford-lotus-gt40-studio.jpg",
              alt: "Studio portrait with a Lotus Powered by Ford Indy car numbered 82 and a Ford GT40 numbered 1",
              width: 417,
              height: 584,
              caption:
                "Ford’s racing heritage in one frame: a Lotus “Powered by Ford” open-wheel car (#82) beside a Ford GT40 (#1)—the motorsports world Monty Roberts worked inside as a Ford and Lincoln-Mercury public-relations executive.",
            },
            {
              src: "/images/ford-gt40-lemans-pits.jpg",
              alt: "Ford GT40 and Mark IV race cars lined up in the pit lane at Le Mans, with FORD pit signs and Goodyear, Firestone and Autolite sponsor boards",
              width: 590,
              height: 455,
              caption:
                "Ford GT40s and Mark IVs lined up in the Le Mans pit lane—the era when Ford proved engineering on the world stage, and when brand storytelling, press kits and racing programs had to move as one system.",
            },
          ]}
        />

        <p>
          My father worked in an era when automobile manufacturers used racing
          to demonstrate engineering, build excitement and make brands feel
          alive.
        </p>
        <p>
          <ClaimLabel type="contemporary-reporting" />
        </p>
        <p>
          Veteran motorsports journalist Denise McCluggage remembered him as
          an innovative Ford public-relations executive and an early creator
          of the racing press kit—folders filled with written information and
          photography designed to help journalists tell a driver’s and
          manufacturer’s story. She also described him as one of the people
          who helped bring Anheuser-Busch deeply into automobile racing.
          (Autoweek)
        </p>
        <p>
          Published automotive history identifies him as Lincoln-Mercury’s
          public-relations chief and credits him with winning approval for
          Mercury’s 1967 Trans-Am racing program. That program involved
          competition director Fran Hernandez, team owner Bud Moore and
          drivers including Dan Gurney and Parnelli Jones. (Hemmings)
        </p>
        <p>The work involved much more than placing a logo on a car.</p>
        <p>It meant coordinating:</p>
        <ul>
          <li>Corporate executives.</li>
          <li>Engineers.</li>
          <li>Drivers.</li>
          <li>Team owners.</li>
          <li>Fabricators.</li>
          <li>Track operators.</li>
          <li>Journalists.</li>
          <li>Television organizations.</li>
          <li>Sponsors.</li>
          <li>Dealers.</li>
          <li>Hospitality teams.</li>
          <li>Public-relations departments.</li>
        </ul>

        <FounderQuote>
          “My father taught me that winning the race was only half the job.
          The other half was making sure people understood who won, why it
          mattered and what the result said about the brand. Technical
          achievement and storytelling had to work together.”
        </FounderQuote>

        <p>That lesson appeared repeatedly in my career.</p>
        <ul>
          <li>DiamondNet needed a stronger identity and became Savvis.</li>
          <li>Savvis needed a defining customer and won Apple.</li>
          <li>
            A complicated Internet-routing problem needed a number people
            could understand and became 4.905 seconds.
          </li>
          <li>
            Intira needed language for an unfamiliar managed-infrastructure
            service and introduced NetSourcing.
          </li>
          <li>
            Platformz needs to be understood not as another development
            agency, but as operating infrastructure for complex businesses.
          </li>
        </ul>
        <p>
          A brilliant product can remain invisible when nobody knows how to
          explain it. A brilliant story eventually collapses when the product
          beneath it does not work.
        </p>
        <p className="font-headline font-semibold text-archive-paper">
          Both must be real.
        </p>

        <h2>Ontario Motor Speedway</h2>
        <ImageFigure
          src="/images/ontario-motor-speedway.jpg"
          alt="Monty Roberts walks with driver Swede Savage, Sheryl and Swede's mother Joetta through the garage area of Ontario Motor Speedway in Ontario, California"
          width={1400}
          height={1291}
          frame="light"
          caption={
            <>
              “Marketing genius” Monty Roberts (left) walks with Swede Savage,
              Sheryl, and Swede’s mother, Joetta, through the garage area of
              Ontario Motor Speedway in Ontario, California. Roberts formed a
              syndicate to help fund some of Swede’s early auto racing rides.
            </>
          }
          credit="Family archive"
          claim="family-record"
        />
        <p>
          <ClaimLabel type="contemporary-reporting" />
        </p>
        <p>
          Public statements from my later career identified my father as an
          amateur racer who oversaw Ford’s racing activities, helped manage
          Ontario Motor Speedway and later introduced automobile racing into
          Anheuser-Busch relationships involving people such as Paul Newman
          and Mario Andretti. (Motorsport.com)
        </p>

        <ImageFigure
          src="/images/monty-sunday-chatterbox-newman.jpg"
          alt="Sunday Chatterbox newspaper column by Margie Schlachter with a photograph captioned Paul Newman look alike attracted a lot of attention, featuring William (Monty) Munro Roberts III"
          width={701}
          height={1024}
          frame="light"
          caption={
            <>
              “Sunday Chatterbox” by Margie Schlachter — covering the
              Firecracker 400 social scene at Daytona’s Indigo party. The
              photograph is captioned “PAUL NEWMAN LOOK ALIKE ATTRACTED A LOT
              OF ATTENTION.” The look-alike at center is William (Monty) Munro
              Roberts III; the column notes the real Paul Newman was not there
              that year.
            </>
          }
          credit="Sunday Chatterbox · Margie Schlachter · family archive"
          claim="contemporary-reporting"
        />

        <p>
          For a child, a major speedway is not an organizational chart or a
          capital expenditure.
        </p>
        <p>It is noise. Heat. Fuel. Crowds. Famous faces.</p>
        <p>
          Transporters filled with machinery. Teams moving with urgency. The
          vibration of engines felt through concrete.
        </p>

        <FounderQuote>
          “My childhood did not teach me that large projects were impossible.
          It taught me that large projects had budgets, schedules, vendors,
          engineers, promoters, celebrities, executives and somebody
          responsible for making all of it work. When your father works around
          race programs and major speedways, ‘big’ does not remain abstract.
          You can stand inside it.”
        </FounderQuote>

        <h2>Young &amp; Rubicam and the Walt Disney Account</h2>
        <p>
          <ClaimLabel type="family-record" />
        </p>
        <p>
          Family records identify my father as working at Young &amp; Rubicam,
          where he managed work associated with the Walt Disney account.
        </p>
        <p>Disney represented a different kind of scale.</p>
        <p>
          It was not simply a film company, a theme-park operator or a
          merchandise business.
        </p>
        <p>
          It was a connected world of stories, characters, destinations,
          service, design, entertainment and memory.
        </p>

        <FounderQuote>
          “Through my father, I saw that Disney was not selling one product.
          It was building a complete world around the customer. The story,
          visual identity, physical experience, employees, merchandise and
          memory all had to feel connected. That influenced how I later
          thought about technology platforms. The user should experience one
          coherent environment even when dozens of technologies and operating
          teams are working behind it.”
        </FounderQuote>

        <p>That idea would eventually become central to Platformz.</p>
        <p>
          The customer should not have to understand every ERP, warehouse,
          marketplace, tax engine, payment system, data source or integration
          operating behind the experience.
        </p>
        <p>The complexity should be coordinated behind the scenes.</p>
        <p className="font-headline font-semibold text-archive-paper">
          The experience should feel whole.
        </p>

        <h2>Busch Beer and the Busch Clash</h2>
        <ImageFigure
          src="/images/busch-racing-1980.jpg"
          alt="Busch Racing 1980 media guide spread with the Busch pole-award sign, Cale Yarborough's number 11 Busch car and a signed letter from Monty Roberts, W. Munro Roberts III, Marketing Director"
          width={1400}
          height={1277}
          frame="light"
          caption={
            <>
              The Busch Racing 1980 media guide, signed “Monty Roberts — W.
              Munro Roberts III, Marketing Director,” covering the Busch Pole
              competition, the Busch Clash and the Busch Racing Team of Junior
              Johnson and Cale Yarborough.
            </>
          }
          credit="Family archive"
          claim="family-record"
        />
        <p>
          At Anheuser-Busch, my father became closely associated with the
          Busch beer brand and the company’s expanding presence in
          motorsports.
        </p>
        <p>
          <ClaimLabel type="contemporary-reporting" />
        </p>
        <p>
          Contemporary motorsports histories credit Busch beer brand manager
          Monty Roberts with creating the original Busch Clash, a short
          invitation-only race for the previous season’s pole winners. The
          inaugural 1979 event ran for 50 miles and offered $50,000 to the
          winner, making the purse unusually large on a per-mile basis. (Belly
          Up Sports)
        </p>
        <p>The idea was elegant:</p>
        <ul>
          <li>Take the fastest qualifiers in the sport.</li>
          <li>Put them in a short race.</li>
          <li>Remove the need for a complicated explanation.</li>
          <li>Place the Busch brand at the center of the excitement.</li>
        </ul>

        <FounderQuote>
          “My father understood that the biggest ideas often require the
          clearest explanation. People did not need a fifty-page strategy
          document to understand the Busch Clash. Put the fastest drivers
          together and let them race.”
        </FounderQuote>

        <ImageFigure
          src="/images/monty-hoyt-axton.jpg"
          alt="Hoyt Axton and William (Monty) Munro Roberts III standing together at a racetrack"
          width={1024}
          height={685}
          frame="light"
          caption={
            <>
              Hoyt Axton (actor and country singer, left) with William (Monty)
              Munro Roberts III (right), after Monty hired Axton to be the
              voice of Busch beer’s “Head for the Mountains of Busch, Beer”
              commercial.
            </>
          }
          credit="Family archive"
          claim="family-record"
        />

        <PhotoGallery
          title="The Busch Years"
          credit="Family archive"
          claim="family-record"
          photos={[
            {
              src: "/images/busch-balloon-poster.jpg",
              alt: "Busch beer hot air balloon poster for the U.S. National Hot Air Balloon Championship, Indianola, Iowa, August 3–11, 1979",
              width: 766,
              height: 1024,
              caption:
                "The Busch beer balloon on the poster for the U.S. National Hot Air Balloon Championship — Indianola, Iowa, August 3–11, 1979. Putting the brand in the sky, decades before anyone talked about ‘the cloud.’",
            },
            {
              src: "/images/busch-blimp.jpg",
              alt: "The Busch beer blimp flying over a field, with the Head for the Mountains advertisement inset",
              width: 586,
              height: 480,
              caption:
                "“Head for the mountains.” Monty gave the contract for the first hot-air blimps for Busch to Sid Citter. The blimp program did not succeed—this blimp is now in the Hot Air Balloon Museum.",
            },
            {
              src: "/images/busch-dominics-1980.jpg",
              alt: "Salute Anheuser-Busch caricature poster from Dominic's, March 1980, listing brand managers including William (Monty) Munro Roberts III for Busch",
              width: 512,
              height: 640,
              caption:
                "“Salute Anheuser-Busch” — a caricature poster from Dominic’s, March 1980, listing the Anheuser-Busch brands and brand managers of 1980: William (Monty) Munro Roberts III for Busch, alongside the brand managers for Budweiser, Michelob, Natural Light and Bud Light.",
            },
            {
              src: "/images/monty-family-busch-years.jpg",
              alt: "Monty Roberts in a Busch crew shirt laughing with family at an outdoor event",
              width: 1024,
              height: 815,
              caption:
                "A family snapshot from the Busch years — Monty in a Busch crew shirt at an outdoor event.",
            },
          ]}
        />

        <p>That principle stayed with me.</p>
        <div className="my-8 space-y-4">
          <div className="panel p-5">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-electric-cyan">
              Savvis
            </p>
            <p className="mt-2 text-archive-paper/90">
              The Internet should perform better because traffic should avoid
              unnecessary bottlenecks and handoffs.
            </p>
          </div>
          <div className="panel p-5">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-electric-cyan">
              Intira
            </p>
            <p className="mt-2 text-archive-paper/90">
              The customer should bring the application while we operate
              everything beneath it.
            </p>
          </div>
          <div className="panel p-5">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-electric-cyan">
              Platformz
            </p>
            <p className="mt-2 text-archive-paper/90">
              All the systems required to run a business should operate as one
              connected environment.
            </p>
          </div>
        </div>

        <h2>Growing Up Around Celebrities and Powerful People</h2>
        <p>
          My childhood included time around racetracks, race cars,
          professional drivers, actors, team owners, executives, wealthy
          families and major corporate programs.
        </p>
        <p>
          People I might otherwise have seen only on television appeared in
          the working world around my father.
        </p>
        <p>That changed my perception of status.</p>
        <p>
          Famous people remained impressive, but they did not feel
          unreachable.
        </p>
        <p>
          Wealthy families remained influential, but they were still families.
        </p>
        <p>
          Corporate leaders still had to evaluate ideas, make decisions and
          decide whom to trust.
        </p>

        <FounderQuote>
          “I grew up watching my father work with people most children knew
          only from television. I watched him negotiate with them, challenge
          them, entertain them and build projects with them. That removed a
          fear barrier from me very early.”
        </FounderQuote>

        <p>It mattered later when I called Steve Jobs.</p>
        <p>It mattered when I approached Andrew Gladney.</p>
        <p>
          It mattered when I sat across from venture capitalists and asked
          them to finance a national network.
        </p>
        <p>
          It mattered when I asked major technology companies to support a
          service category that did not yet have an accepted name.
        </p>
        <p>My father’s Rolodex created some introductions.</p>
        <p>His example created something more valuable:</p>
        <p className="font-headline font-semibold text-archive-paper">
          The confidence to make the approach.
        </p>

        <FounderQuote>
          “A relationship can arrange the meeting. It cannot make the meeting
          successful. You still need an idea worth hearing, the courage to
          explain it and the ability to deliver.”
        </FounderQuote>

        <h2>The Visionary Gene</h2>
        <p>
          I believe I inherited my father’s tendency to see what something
          could become before other people could see it.
        </p>
        <p>
          He looked beyond an advertisement toward the complete experience
          surrounding a brand.
        </p>
        <p>
          I later looked beyond an Internet connection toward the complete
          network supporting an application.
        </p>
        <p>
          Then beyond the network toward the complete data-center and
          computing environment.
        </p>
        <p>
          Then toward digital games, media, commerce, marketplaces, payments
          and eventually Platformz.
        </p>

        <FounderQuote>
          “My father taught me that the first version of an idea should not
          define its ultimate scale. A beer promotion could become a national
          racing program. A sponsorship could become a permanent event. A
          local Internet provider could become a national backbone. A
          managed-hosting business could become an early cloud platform. Once
          you grow up watching large ideas become physical reality, it becomes
          difficult to think small.”
        </FounderQuote>

        <h2>From Corporate Executive to Episcopal Ministry</h2>
        <p>
          <ClaimLabel type="family-record" />
        </p>
        <p>Later in life, my father followed a spiritual calling.</p>
        <p>
          He became an ordained Episcopal minister and, according to our
          family records, served or led three churches in New York.
        </p>
        <p>At first, those careers can appear completely different.</p>
        <p>The more I think about them, the more continuity I see.</p>
        <p>
          In the corporate world, he communicated a vision, managed resources,
          brought people together and created experiences around a shared
          purpose.
        </p>
        <p>
          In ministry, he communicated faith, managed resources, brought
          people together and created community around a shared purpose.
        </p>

        <FounderQuote>
          “My father taught me to think at scale. His ministry reminded me
          that scale without purpose is empty. It is not enough to ask whether
          something can become large. You also have to ask who it serves, what
          it improves and what remains after the attention disappears.”
        </FounderQuote>

        <h2>What My Father Gave Me</h2>
        <p>My father gave me access to an extraordinary childhood.</p>
        <p>
          But his greatest influence was not celebrity, race cars, wealth,
          theme parks or corporate entertainment.
        </p>
        <p className="font-headline text-xl font-semibold leading-[1.7] text-archive-paper">
          It was scale.
          <br />
          Confidence.
          <br />
          Imagination.
          <br />
          Purpose.
        </p>
        <p>He taught me that large ideas are built from practical components:</p>
        <ul>
          <li>A clear vision.</li>
          <li>The right people.</li>
          <li>Capital.</li>
          <li>Technical expertise.</li>
          <li>Storytelling.</li>
          <li>Persistence.</li>
          <li>Stewardship.</li>
          <li>Accountability.</li>
          <li>The confidence to begin.</li>
        </ul>

        <FounderQuote>
          “Before I built technology companies, I watched my father build
          experiences. Before I raised institutional capital, I watched him
          manage major corporate resources. Before I approached famous
          founders and wealthy families, I watched him treat powerful people
          like people. Before I learned to think big, big thinking was simply
          the atmosphere in which I grew up.”
        </FounderQuote>
      </Prose>

      <ChapterEndCTA href="/whackoland" label="Continue to Whackoland" />
    </>
  );
}
