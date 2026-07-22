import type { Metadata } from "next";
import Link from "next/link";
import CTAButton from "@/components/CTAButton";
import TerminalBlock from "@/components/TerminalBlock";

export const metadata: Metadata = {
  title: "Tim Roberts: From Whackoland and Savvis to Intira and Platformz",
  description:
    "The firsthand, research-supported story of Timothy Roberts—from the Wacko Cracko Brothers and Whackoland BBS to Savvis, Intira’s NetSourcing model and Platformz, the enterprise operating infrastructure his entire life prepared him to build.",
};

const chapterCards = [
  {
    kicker: "CHAPTER ZERO",
    title: "The Man Who Made Big Ideas Feel Normal",
    body: "How William Munro Roberts III exposed Tim to Ford, Young & Rubicam, Disney, Anheuser-Busch, Busch beer, motorsports, celebrities, large corporate projects and later a life of Episcopal ministry.",
    button: "Read the Origin",
    href: "/origin",
  },
  {
    kicker: "PROLOGUE",
    title: "The W(hack)o Cracko Brothers",
    body: "Two fourteen-year-old identical twins, one telephone line, Whackoland BBS, Commodore computers, TAP, Phrack and the St. Louis computer underground.",
    button: "Dial Into Whackoland",
    href: "/whackoland",
  },
  {
    kicker: "CHAPTER ONE",
    title: "Savvis: Fixing the Road",
    body: "How DiamondNet became Savvis and attempted to engineer around the network bottlenecks preventing reliable media and enterprise Internet services.",
    button: "Read the Savvis Story",
    href: "/savvis",
  },
  {
    kicker: "CHAPTER TWO",
    title: "Intira: Everything Beneath the Application",
    body: "How NetSourcing combined data centers, networks, servers, storage, security, monitoring and operations before cloud computing became standard terminology.",
    button: "Read the Intira Story",
    href: "/intira",
  },
  {
    kicker: "CHAPTER THREE",
    title: "The Missing Pieces",
    body: "Gaming, digital distribution, media, cloud commerce, marketplaces, subscriptions, payments, multi-tenancy—and the expensive lessons that made the final architecture possible.",
    button: "See What Came Next",
    href: "/the-missing-pieces",
  },
  {
    kicker: "FINAL CHAPTER",
    title: "Platformz: The System Everything Was Leading Toward",
    body: "A reusable, system-agnostic operating foundation connecting commerce, distribution, software, operations, data and AI through one intelligent Control Tower.",
    button: "Enter Platformz",
    href: "/platformz",
  },
];

const infrastructureAnswers = [
  {
    place: "At Whackoland",
    answer:
      "the answer was a modem, a telephone line, a computer and someone willing to keep the community running.",
  },
  {
    place: "At J&G Computer Solutions",
    answer:
      "it was getting incompatible computers and business systems to communicate.",
  },
  {
    place: "At Savvis",
    answer:
      "it was a national network designed to reduce congestion, packet loss, latency and unnecessary handoffs.",
  },
  {
    place: "At Intira",
    answer:
      "it was data centers, computing, storage, networking, security, monitoring and people operating the environment around the clock.",
  },
  {
    place: "At later ventures",
    answer:
      "it was digital games, music, media, marketplaces, subscriptions, payments and cloud commerce.",
  },
  {
    place: "At FUR4",
    answer:
      "it became the complete operating reality of a global product company: manufacturing, product information, marketplaces, retailers, tax, fulfillment, finance, customer experience and executive visibility.",
  },
  {
    place: "At Platformz",
    answer: "every one of those layers finally connects.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="signal-grid border-b border-signal-blue/20">
        <div className="mx-auto max-w-4xl px-4 py-20 sm:py-28">
          <p className="text-center font-mono text-xs uppercase tracking-[0.3em] text-signal-blue">
            From 300 Baud to the Intelligent Enterprise
          </p>

          <h1 className="mt-8 text-center font-headline text-4xl font-bold leading-tight sm:text-6xl">
            Before the Web.
            <br />
            Before Streaming Worked.
            <br />
            <span className="text-electric-cyan">
              Before the Cloud Had a Name.
            </span>
          </h1>

          <div className="mt-12 space-y-4 text-lg leading-relaxed text-archive-paper/90">
            <p>My name is Timothy Munro Roberts.</p>
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

          <p className="my-8 text-center font-headline text-2xl font-bold text-warm-copper sm:text-3xl">
            The W(hack)o Cracko Brothers
          </p>

          <div className="space-y-4 text-lg leading-relaxed text-archive-paper/90">
            <p>There was no public World Wide Web.</p>
            <p>
              There was no Google, YouTube, Reddit, Discord, Facebook, AWS or
              Azure.
            </p>
            <p>There were computers.</p>
            <p>There were modems.</p>
            <p>There were telephone lines.</p>
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

          <TerminalBlock lines={["WHACKOLAND BBS"]} />

          <div className="space-y-4 text-lg leading-relaxed text-archive-paper/90">
            <p>
              Whackoland had users, identities, passwords, permissions, private
              sections, downloadable software, message boards, community rules,
              security problems and two teenage administrators trying to keep
              everything running.
            </p>
            <p>We did not call it social media.</p>
            <p>We did not call it a digital platform.</p>
            <p>We did not call it a cloud community.</p>
            <p>We called it a BBS.</p>
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
            <p className="font-headline font-semibold text-electric-cyan">
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
            <p className="font-headline text-xl font-semibold text-archive-paper">
              It is the platform my entire life prepared me to build.
            </p>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <CTAButton href="/origin">Begin the Story</CTAButton>
            <CTAButton href="/platformz" variant="secondary">
              Jump to Platformz
            </CTAButton>
          </div>

          <p className="mt-10 border-t border-signal-blue/20 pt-6 text-center font-mono text-xs leading-relaxed text-technical-gray">
            Built Before Cloud combines public records, contemporary
            journalism, original documents, technical archives, interviews and
            Tim Roberts’s firsthand recollections. Significant claims are
            labeled so readers can distinguish documented history from personal
            memory.
          </p>
        </div>
      </section>

      {/* ============ ONE QUESTION SECTION ============ */}
      <section className="border-b border-signal-blue/20 bg-infra-navy/40">
        <div className="mx-auto max-w-4xl px-4 py-20">
          <p className="text-center font-mono text-xs uppercase tracking-[0.3em] text-signal-blue">
            One Question Has Followed Me My Entire Career
          </p>
          <h2 className="mt-6 text-center font-headline text-3xl font-bold leading-tight sm:text-4xl">
            What Infrastructure Must Exist Before the Experience People Want
            Can Actually Work?
          </h2>

          <div className="mt-12 space-y-6">
            {infrastructureAnswers.map((item) => (
              <div
                key={item.place}
                className="flex flex-col gap-1 border-l-2 border-signal-blue/60 pl-4 sm:flex-row sm:gap-3"
              >
                <span className="shrink-0 font-mono text-sm font-semibold text-electric-cyan">
                  {item.place},
                </span>
                <span className="text-archive-paper/90">{item.answer}</span>
              </div>
            ))}
          </div>

          <p className="mt-12 text-center font-headline text-xl font-semibold text-archive-paper">
            Make complicated infrastructure behave like one simple, intelligent
            operating system.
          </p>
        </div>
      </section>

      {/* ============ CHAPTER CARDS ============ */}
      <section className="border-b border-signal-blue/20">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <h2 className="text-center font-headline text-3xl font-bold">
            The Story, Chapter by Chapter
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {chapterCards.map((card) => (
              <article
                key={card.href}
                className="flex flex-col rounded-sm border border-signal-blue/30 bg-infra-navy/50 p-6 transition-colors hover:border-electric-cyan/60"
              >
                <p className="font-mono text-xs uppercase tracking-[0.25em] text-warm-copper">
                  {card.kicker}
                </p>
                <h3 className="mt-3 font-headline text-xl font-bold leading-snug">
                  {card.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-technical-gray">
                  {card.body}
                </p>
                <Link
                  href={card.href}
                  className="mt-6 font-mono text-xs font-semibold uppercase tracking-wider text-electric-cyan hover:text-archive-paper"
                >
                  {card.button} →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FINAL SECTION (above footer) ============ */}
      <section className="signal-grid">
        <div className="mx-auto max-w-3xl px-4 py-20 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-warm-copper">
            The Final Chapter Is Happening Now
          </p>
          <h2 className="mt-6 font-headline text-4xl font-bold">
            Everything Led to Platformz.
          </h2>

          <div className="mt-10 space-y-2 text-lg text-archive-paper/90">
            <p>The BBS taught community.</p>
            <p>J&amp;G taught integration.</p>
            <p>Savvis taught networks.</p>
            <p>Intira taught managed infrastructure.</p>
            <p>
              Later ventures taught distribution, multi-tenancy, commerce and
              resilience.
            </p>
            <p>FUR4 made every layer operate together in the real world.</p>
            <p className="pt-4 font-headline text-xl font-semibold text-electric-cyan">
              Platformz is where the lessons finally become one system.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <CTAButton href="/platformz">Discover Platformz</CTAButton>
            <CTAButton href="/origin" variant="secondary">
              Start the Story From the Beginning
            </CTAButton>
          </div>

          <p className="mt-16 font-serif text-lg italic leading-loose text-technical-gray">
            One telephone line became a BBS.
            <br />
            One BBS led to a national network.
            <br />
            One network led to managed cloud infrastructure.
            <br />
            A lifetime of infrastructure led to Platformz.
          </p>
        </div>
      </section>
    </>
  );
}
