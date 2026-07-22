import type { Metadata } from "next";
import Link from "next/link";
import ChapterHero from "@/components/ChapterHero";
import Prose from "@/components/Prose";
import FounderQuote from "@/components/FounderQuote";
import ClaimLabel from "@/components/ClaimLabel";
import TerminalBlock from "@/components/TerminalBlock";
import ChapterEndCTA from "@/components/ChapterEndCTA";

export const metadata: Metadata = {
  title: "Whackoland BBS: The W(hack)o Cracko Brothers",
  description:
    "How Tim Roberts (Timothy Munro Roberts) and his twin Peter ran Whackoland BBS: two fourteen-year-old identical twins, one telephone line, Commodore computers, TAP, Phrack and the St. Louis computer underground.",
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
          bulletin boards, games, VAX/VMS systems and telecommunications.
        </p>
        <p>We operated:</p>
        <p className="font-headline text-2xl font-bold text-electric-cyan">
          Whackoland BBS
        </p>

        <p>A BBS was a tiny private Internet.</p>
        <p>Users dialed directly into the computer.</p>
        <p>One caller at a time.</p>
        <p>
          When someone was connected, everyone else received a busy signal.
        </p>
        <p>
          If the machine failed, the community disappeared until we repaired
          it.
        </p>

        <FounderQuote>
          “Whackoland was the first time I was not merely using technology. I
          was operating a platform for other people. It taught me identity,
          permissions, content, security, moderation, support, uptime and the
          fact that users do not care which component failed.”
        </FounderQuote>

        <h2>Terminal Experience</h2>
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
          caption="Today, platforms celebrate their millionth user. We advertised that we only wanted 100."
        />

        <h2>Phrack, Metal Shop and TAP</h2>
        <p>The St. Louis modem community also included:</p>
        <ul>
          <li>
            <Link href="/people/taran-king" className="text-electric-cyan hover:underline">
              Randy Tischler, known as Taran King
            </Link>
          </li>
          <li>
            <Link href="/people/knight-lightning" className="text-electric-cyan hover:underline">
              Craig Neidorf, known as Knight Lightning
            </Link>
          </li>
          <li>Metal Shop BBS</li>
          <li>Phrack</li>
          <li>
            <Link href="/people/cheshire-catalyst" className="text-electric-cyan hover:underline">
              Robert “Ozzie” Osband, known as Cheshire Catalyst
            </Link>
          </li>
          <li>The legacy of TAP and Abbie Hoffman</li>
        </ul>

        <div className="my-8 panel p-6">
          <div className="mb-3 flex items-center gap-3">
            <span className="font-mono text-xs uppercase tracking-widest text-signal-blue">
              Chronology
            </span>
            <ClaimLabel type="contemporary-reporting" />
          </div>
          <ol className="list-decimal space-y-1 pl-6 text-archive-paper/90">
            <li>Metal Shop existed.</li>
            <li>Phrack launched in 1985.</li>
            <li>Whackoland operated within the same competitive community.</li>
            <li>The proposed New TAP project emerged afterward.</li>
            <li>The rivalry intensified.</li>
          </ol>
        </div>

        <FounderQuote>
          “We were teenagers competing for users, information, contributors,
          reputation and technical credibility. In other words, we were already
          behaving like technology founders.”
        </FounderQuote>

        <p>
          <ClaimLabel type="founder-recollection" />
        </p>
        <p>
          Tim recalls deciding not to proceed with the proposed TAP revival
          after concluding that the legal and operational risks were too large.
        </p>
        <p>
          This site does not romanticize illegal activity from the period. The
          positive lesson is curiosity and technical discovery. The harder
          lesson is responsibility.
        </p>

        <h2 className="text-center">
          Whackoland Connected One User at a Time.
          <br />
          Savvis Needed to Connect a Country.
        </h2>
        <p className="text-center">
          The BBS years showed me what people would do once computers could
          communicate.
          <br />
          The next challenge was making that communication dependable at
          national scale.
        </p>
      </Prose>

      <ChapterEndCTA href="/savvis" label="Continue to Savvis" />
    </>
  );
}
