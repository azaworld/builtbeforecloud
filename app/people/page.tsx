import type { Metadata } from "next";
import Link from "next/link";
import ChapterHero from "@/components/ChapterHero";
import ClaimLabel from "@/components/ClaimLabel";
import { people } from "@/lib/people";

export const metadata: Metadata = {
  title: "People",
  description:
    "The people of the Built Before Cloud story—family, co-founders, investors and the St. Louis modem community.",
};

export default function PeoplePage() {
  return (
    <>
      <ChapterHero
        eyebrow="People"
        title="The People Who Built It"
        subtitle={
          <p>
            Family, co-founders, investors, rivals and the St. Louis modem
            community. Each profile is labeled by evidence classification.
          </p>
        }
      />

      <div className="mx-auto max-w-5xl px-4 py-16">
        <div className="rv mx-auto mb-14 max-w-3xl space-y-4 text-lg leading-[1.8] text-archive-paper/95">
          <p>Companies are not built by founder mythology.</p>
          <p>
            Savvis and Intira required founders, engineers, operators,
            executives, customers, investors, vendors, advisers and families
            willing to absorb uncertainty.
          </p>
          <p>
            Built Before Cloud will not make one person enormous by making
            everyone else invisible.
          </p>
          <p>
            The record also includes the Apple personnel who evaluated Savvis,
            the Gateway investors who financed it, the Savvis engineers who
            built and operated the network, the Intira engineers who built
            NetSourcing, the construction and engineering teams who made the
            data centers physical, and the customers willing to trust young
            companies with important infrastructure.
          </p>
          <p>
            Every participant is invited to contribute records, offer an
            interview, correct a factual error, dispute an interpretation or
            add context.
          </p>
          <p className="font-headline text-xl font-semibold text-archive-paper">
            A company may have founders.
            <br />
            <span className="text-electric-cyan">
              A network always has a crew.
            </span>
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {people.map((person) => (
            <Link
              key={person.slug}
              href={`/people/${person.slug}`}
              className="group panel p-6 panel-hover"
            >
              <h2 className="font-headline text-xl font-bold group-hover:text-electric-cyan">
                {person.name}
              </h2>
              {person.alias && (
                <p className="mt-1 font-mono text-xs text-warm-copper">
                  {person.alias}
                </p>
              )}
              <p className="mt-2 text-sm text-technical-gray">{person.role}</p>
              <div className="mt-4">
                <ClaimLabel type={person.claim} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
