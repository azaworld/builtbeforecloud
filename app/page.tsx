import type { Metadata } from "next";
import Link from "next/link";
import CTAButton from "@/components/CTAButton";
import TerminalBlock from "@/components/TerminalBlock";

export const metadata: Metadata = {
  title: "Tim Roberts: From Whackoland and Savvis to Intira and Platformz",
  description:
    "The firsthand, research-supported story of Timothy Munro Roberts (Tim Roberts)—from the Wacko Cracko Brothers and Whackoland BBS to Savvis, Intira’s NetSourcing model and Platformz, the enterprise operating infrastructure his entire life prepared him to build.",
};

const chapterCards = [
  {
    number: "00",
    kicker: "CHAPTER ZERO",
    title: "The Man Who Made Big Ideas Feel Normal",
    body: "How William Munro Roberts III exposed Tim to Ford, Young & Rubicam, Disney, Anheuser-Busch, Busch beer, motorsports, celebrities, large corporate projects and later a life of Episcopal ministry.",
    button: "Read the Origin",
    href: "/origin",
  },
  {
    number: "0P",
    kicker: "PROLOGUE",
    title: "The W(hack)o Cracko Brothers",
    body: "Two fourteen-year-old identical twins, one telephone line, Whackoland BBS, Commodore computers, TAP, Phrack and the St. Louis computer underground.",
    button: "Dial Into Whackoland",
    href: "/whackoland",
  },
  {
    number: "01",
    kicker: "CHAPTER ONE",
    title: "Savvis: Fixing the Road",
    body: "How DiamondNet became Savvis and attempted to engineer around the network bottlenecks preventing reliable media and enterprise Internet services.",
    button: "Read the Savvis Story",
    href: "/savvis",
  },
  {
    number: "02",
    kicker: "CHAPTER TWO",
    title: "Intira: Everything Beneath the Application",
    body: "How NetSourcing combined data centers, networks, servers, storage, security, monitoring and operations before cloud computing became standard terminology.",
    button: "Read the Intira Story",
    href: "/intira",
  },
  {
    number: "03",
    kicker: "CHAPTER THREE",
    title: "The Missing Pieces",
    body: "Gaming, digital distribution, media, cloud commerce, marketplaces, subscriptions, payments, multi-tenancy—and the expensive lessons that made the final architecture possible.",
    button: "See What Came Next",
    href: "/the-missing-pieces",
  },
  {
    number: "∞",
    kicker: "FINAL CHAPTER",
    title: "Platformz: The System Everything Was Leading Toward",
    body: "A reusable, system-agnostic operating foundation connecting commerce, distribution, software, operations, data and AI through one intelligent Control Tower.",
    button: "Enter Platformz",
    href: "/platformz",
  },
];

const infrastructureAnswers = [
  {
    n: "01",
    place: "At Whackoland",
    answer:
      "the answer was a modem, a telephone line, a computer and someone willing to keep the community running.",
  },
  {
    n: "02",
    place: "At J&G Computer Solutions",
    answer:
      "it was getting incompatible computers and business systems to communicate.",
  },
  {
    n: "03",
    place: "At Savvis",
    answer:
      "it was a national network designed to reduce congestion, packet loss, latency and unnecessary handoffs.",
  },
  {
    n: "04",
    place: "At Intira",
    answer:
      "it was data centers, computing, storage, networking, security, monitoring and people operating the environment around the clock.",
  },
  {
    n: "05",
    place: "At later ventures",
    answer:
      "it was digital games, music, media, marketplaces, subscriptions, payments and cloud commerce.",
  },
  {
    n: "06",
    place: "At FUR4",
    answer:
      "it became the complete operating reality of a global product company: manufacturing, product information, marketplaces, retailers, tax, fulfillment, finance, customer experience and executive visibility.",
  },
  {
    n: "07",
    place: "At Platformz",
    answer: "every one of those layers finally connects.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="signal-grid relative overflow-hidden border-b border-white/[0.06]">
        <div className="relative z-10 mx-auto max-w-6xl px-5 pb-24 pt-24 sm:pt-32">
          <p className="eyebrow-lined mx-auto flex w-full justify-center font-mono text-[11px] uppercase tracking-[0.35em] text-electric-cyan">
            <span className="live-dot mr-3 self-center" aria-hidden />
            From 300 Baud to the Intelligent Enterprise
          </p>

          <h1 className="mt-10 text-center font-headline text-[clamp(2.5rem,6.2vw,4.9rem)] font-bold leading-[1.02] tracking-[-0.025em]">
            Before the Web.
            <br />
            Before Streaming Worked.
            <br />
            <span className="headline-gradient">
              Before the Cloud Had a Name.
            </span>
          </h1>

          <span aria-hidden className="hairline mx-auto mt-14 block w-48" />

          <div className="rv-children mx-auto mt-14 max-w-2xl space-y-4 text-lg leading-[1.8] text-archive-paper/95">
            <p className="first-letter:float-left first-letter:mr-3 first-letter:font-serif first-letter:text-[3.4rem] first-letter:leading-[0.85] first-letter:text-electric-cyan">
              My name is Timothy Munro Roberts.
            </p>
            <p>
              My technology story did not begin in Silicon Valley, inside a
              venture-capital firm or at a famous university.
            </p>
            <p>
              It began in St. Louis when my identical twin brother Peter and I
              were fourteen years old, connecting computers over ordinary
              telephone lines.
            </p>
            <p>We called ourselves:</p>
          </div>

          <p className="copper-gradient rv my-10 text-center font-headline text-[clamp(1.75rem,4vw,2.75rem)] font-bold tracking-[-0.01em]">
            The W(hack)o Cracko Brothers
          </p>

          <div className="rv-children mx-auto max-w-2xl space-y-4 text-lg leading-[1.8] text-archive-paper/95">
            <p>There was no public World Wide Web.</p>
            <p>
              There was no Google, YouTube, Reddit, Discord, Facebook, AWS or
              Azure.
            </p>
            <p className="font-headline font-semibold text-archive-paper">
              There were computers.
              <br />
              There were modems.
              <br />
              There were telephone lines.
            </p>
            <p>
              And there were two fourteen-year-old twins determined to discover
              what was waiting on the other end.
            </p>
            <p>
              Peter and I wrote software, exchanged games and technical
              information, explored remote systems and operated our own dial-up
              community:
            </p>
          </div>

          <div className="mx-auto max-w-2xl">
            <TerminalBlock lines={["WHACKOLAND BBS"]} />
          </div>

          <div className="rv-children mx-auto max-w-2xl space-y-4 text-lg leading-[1.8] text-archive-paper/95">
            <p>
              Whackoland had users, identities, passwords, permissions, private
              sections, downloadable software, message boards, community rules,
              security problems and two teenage administrators trying to keep
              everything running.
            </p>
            <p>We did not call it social media.</p>
            <p>We did not call it a digital platform.</p>
            <p>We did not call it a cloud community.</p>
            <p className="font-headline font-semibold text-archive-paper">
              We called it a BBS.
            </p>
            <p>
              Years later, I helped co-found Savvis, built around a better way
              to move Internet traffic: control more of the route, reduce
              unnecessary network handoffs, connect more directly to the
              networks carrying the traffic and engineer around the bottlenecks
              that prevented reliable audio, video and enterprise applications.
            </p>
            <p>
              I then helped create Intira, where we moved beneath the network
              and into the data center. Instead of forcing every company to
              assemble buildings, power, cooling, circuits, servers, storage,
              databases, firewalls, backups and specialized operating teams,
              Intira offered to build and manage the environment beneath the
              application.
            </p>
            <p className="border-l-2 border-electric-cyan/60 py-1 pl-5 font-headline text-xl font-semibold text-electric-cyan">
              Savvis helped improve the road.
              <br />
              Intira helped operate the destination.
            </p>
            <p>
              Every company after that taught me another part of the
              distribution problem.
            </p>
            <p>
              Today, those pieces have come together in Platformz—a reusable
              operating foundation designed to connect the systems, people,
              partners, workflows and intelligence required to operate a
              complex modern business.
            </p>
            <p>Platformz is not simply my newest company.</p>
            <p className="font-headline text-2xl font-semibold leading-snug text-archive-paper">
              It is the platform my entire life prepared me to build.
            </p>
          </div>

          <div className="rv mt-14 flex flex-wrap justify-center gap-4">
            <CTAButton href="/origin">Begin the Story</CTAButton>
            <CTAButton href="/platformz" variant="secondary">
              Jump to Platformz
            </CTAButton>
          </div>

          <p className="rv mx-auto mt-16 max-w-2xl border-t border-white/[0.06] pt-7 text-center font-mono text-[11px] leading-[1.9] tracking-wide text-technical-gray/80">
            Built Before Cloud combines public records, contemporary
            journalism, original documents, technical archives, interviews and
            Tim Roberts’s firsthand recollections. Significant claims are
            labeled so readers can distinguish documented history from personal
            memory.
          </p>
        </div>
      </section>

      {/* ============ ONE QUESTION SECTION ============ */}
      <section className="relative border-b border-white/[0.06]">
        <div className="mx-auto max-w-4xl px-5 py-28">
          <p className="eyebrow-lined mx-auto flex w-full justify-center text-center font-mono text-[11px] uppercase tracking-[0.35em] text-electric-cyan">
            One Question Has Followed Me My Entire Career
          </p>
          <h2 className="rv mx-auto mt-8 max-w-3xl text-center font-headline text-[clamp(1.9rem,4.5vw,3.25rem)] font-bold leading-[1.08] tracking-[-0.02em]">
            What Infrastructure Must Exist Before the Experience People Want
            Can Actually Work?
          </h2>

          <div className="rv-children mt-16 divide-y divide-white/[0.05]">
            {infrastructureAnswers.map((item) => (
              <div
                key={item.place}
                className="group grid gap-2 py-6 transition-colors sm:grid-cols-[3.5rem_15rem_1fr] sm:gap-6"
              >
                <span className="font-mono text-sm text-signal-blue/80 transition-colors group-hover:text-electric-cyan">
                  {item.n}
                </span>
                <span className="font-headline font-semibold text-archive-paper">
                  {item.place},
                </span>
                <span className="leading-relaxed text-technical-gray transition-colors group-hover:text-archive-paper/90">
                  {item.answer}
                </span>
              </div>
            ))}
          </div>

          <p className="rv mx-auto mt-16 max-w-2xl text-center font-headline text-2xl font-semibold leading-snug">
            Make complicated infrastructure behave like{" "}
            <span className="headline-gradient">
              one simple, intelligent operating system.
            </span>
          </p>
        </div>
      </section>

      {/* ============ CHAPTER CARDS ============ */}
      <section className="border-b border-white/[0.06]">
        <div className="mx-auto max-w-[88rem] px-5 py-28">
          <p className="eyebrow-lined mx-auto flex w-full justify-center font-mono text-[11px] uppercase tracking-[0.35em] text-electric-cyan">
            The Story, Chapter by Chapter
          </p>
          <h2 className="rv mt-8 text-center font-headline text-[clamp(1.9rem,4vw,3rem)] font-bold tracking-[-0.02em]">
            One Life. One Recurring Problem.
            <br />
            <span className="text-technical-gray">Six Chapters.</span>
          </h2>

          <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {chapterCards.map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className="rv panel panel-hover group relative flex flex-col overflow-hidden p-8"
              >
                <span
                  aria-hidden
                  className="ghost-glyph -right-4 -top-8 text-[9rem] transition-all duration-500 group-hover:-translate-y-2 group-hover:[-webkit-text-stroke-color:rgba(64,217,232,0.22)]"
                >
                  {card.number}
                </span>
                <p className="relative font-mono text-[10px] uppercase tracking-[0.3em] text-warm-copper">
                  {card.kicker}
                </p>
                <h3 className="relative mt-4 font-headline text-[1.4rem] font-bold leading-snug tracking-[-0.01em]">
                  {card.title}
                </h3>
                <p className="relative mt-4 flex-1 text-sm leading-[1.75] text-technical-gray">
                  {card.body}
                </p>
                <span className="relative mt-8 inline-flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-electric-cyan">
                  {card.button}
                  <span
                    aria-hidden
                    className="transition-transform duration-300 group-hover:translate-x-1.5"
                  >
                    →
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FINAL SECTION (above footer) ============ */}
      <section className="signal-grid relative overflow-hidden">
        <span
          aria-hidden
          className="ghost-glyph left-1/2 top-8 -translate-x-1/2 whitespace-nowrap text-[16vw]"
        >
          PLATFORMZ
        </span>
        <div className="relative z-10 mx-auto max-w-3xl px-5 py-28 text-center">
          <p className="eyebrow-lined mx-auto flex w-full justify-center font-mono text-[11px] uppercase tracking-[0.35em] text-warm-copper">
            The Final Chapter Is Happening Now
          </p>
          <h2 className="rv mt-8 font-headline text-[clamp(2.4rem,6vw,4.25rem)] font-bold tracking-[-0.02em]">
            Everything Led to <span className="headline-gradient">Platformz.</span>
          </h2>

          <div className="rv-children mt-12 space-y-2.5 text-lg leading-relaxed text-archive-paper/95">
            <p>The BBS taught community.</p>
            <p>J&amp;G taught integration.</p>
            <p>Savvis taught networks.</p>
            <p>Intira taught managed infrastructure.</p>
            <p>
              Later ventures taught distribution, multi-tenancy, commerce and
              resilience.
            </p>
            <p>FUR4 made every layer operate together in the real world.</p>
            <p className="pt-5 font-headline text-2xl font-semibold leading-snug text-electric-cyan">
              Platformz is where the lessons finally become one system.
            </p>
          </div>

          <div className="rv mt-12 flex flex-wrap justify-center gap-4">
            <CTAButton href="/platformz">Discover Platformz</CTAButton>
            <CTAButton href="/origin" variant="secondary">
              Start the Story From the Beginning
            </CTAButton>
          </div>

          <span aria-hidden className="hairline mx-auto mt-20 block w-full max-w-sm" />

          <p className="rv mt-12 font-serif text-xl italic leading-[2.1] text-technical-gray">
            One telephone line became a BBS.
            <br />
            One BBS led to a national network.
            <br />
            One network led to managed cloud infrastructure.
            <br />
            <span className="text-archive-paper">
              A lifetime of infrastructure led to Platformz.
            </span>
          </p>
        </div>
      </section>
    </>
  );
}
