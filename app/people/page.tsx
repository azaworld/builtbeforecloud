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
        title="The People in the Story"
        subtitle={
          <p>
            Family, co-founders, investors, rivals and the St. Louis modem
            community. Each profile is labeled by evidence classification.
          </p>
        }
      />

      <div className="mx-auto max-w-5xl px-4 py-16">
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
