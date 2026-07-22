import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ClaimLabel from "@/components/ClaimLabel";
import { getPerson, people } from "@/lib/people";

export function generateStaticParams() {
  return people.map((p) => ({ name: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ name: string }>;
}): Promise<Metadata> {
  const { name } = await params;
  const person = getPerson(name);
  if (!person) return { title: "Person Not Found" };
  return {
    title: person.name,
    description: person.bio,
  };
}

export default async function PersonPage({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const { name } = await params;
  const person = getPerson(name);
  if (!person) notFound();

  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <Link
        href="/people"
        className="font-mono text-xs uppercase tracking-wider text-signal-blue hover:text-electric-cyan"
      >
        ← All People
      </Link>

      <h1 className="mt-6 font-headline text-4xl font-bold">{person.name}</h1>
      {person.alias && (
        <p className="mt-2 font-mono text-sm text-warm-copper">
          {person.alias}
        </p>
      )}
      <p className="mt-2 text-lg text-technical-gray">{person.role}</p>

      <div className="mt-6">
        <ClaimLabel type={person.claim} />
      </div>

      <p className="mt-8 leading-relaxed text-archive-paper/90">
        {person.bio}
      </p>

      <div className="mt-10 border-t border-signal-blue/20 pt-6">
        <p className="font-mono text-xs uppercase tracking-widest text-signal-blue">
          Appears In
        </p>
        <p className="mt-2 text-technical-gray">
          {person.chapters.join(" · ")}
        </p>
      </div>

      <div className="mt-10 panel panel-copper p-6">
        <p className="font-mono text-xs uppercase tracking-widest text-warm-copper">
          Right of Response
        </p>
        <p className="mt-3 text-sm leading-relaxed text-technical-gray">
          Built Before Cloud invites every person named in this project to
          provide their own account, corrections or supporting documents.
          Submissions are reviewed and published through the{" "}
          <Link href="/corrections" className="text-electric-cyan hover:underline">
            Corrections
          </Link>{" "}
          process.
        </p>
      </div>
    </div>
  );
}
