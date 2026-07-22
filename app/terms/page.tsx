import type { Metadata } from "next";
import ChapterHero from "@/components/ChapterHero";
import Prose from "@/components/Prose";

export const metadata: Metadata = {
  title: "Terms",
  description: "Terms of use for BuiltBeforeCloud.com.",
};

export default function TermsPage() {
  return (
    <>
      <ChapterHero eyebrow="Terms" title="Terms of Use" />

      <Prose>
        <p className="font-mono text-xs text-technical-gray">
          Last updated: July 2026
        </p>

        <h2>The Nature of This Project</h2>
        <p>
          Built Before Cloud is an independent historical, documentary and
          educational project. Content combines verified records, contemporary
          reporting and personal recollection, and each major claim is labeled
          accordingly. Content labeled as recollection or family record has
          not been independently verified and should not be relied on as
          established fact.
        </p>

        <h2>Use of Content</h2>
        <p>
          Original text, design and the Built Before Cloud mark belong to the
          project. You may quote reasonable excerpts with attribution and a
          link. Third-party trademarks and historical materials remain the
          property of their respective owners.
        </p>

        <h2>No Professional Advice</h2>
        <p>
          Nothing on this site is investment, legal or business advice.
          Descriptions of Platformz, DIaaS, Looking Glass and SaaS Foundry are
          informational.
        </p>

        <h2>Corrections</h2>
        <p>
          We correct errors. See{" "}
          <a href="/corrections" className="text-electric-cyan hover:underline">
            Corrections
          </a>{" "}
          for the process and the permanent right of response extended to every
          person named in the project.
        </p>
      </Prose>
    </>
  );
}
