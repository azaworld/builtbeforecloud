import type { Metadata } from "next";
import ChapterHero from "@/components/ChapterHero";
import Prose from "@/components/Prose";

export const metadata: Metadata = {
  title: "Legal",
  description:
    "Legal notices for Built Before Cloud: non-affiliation, trademarks, historical materials and identity clarifications.",
};

export default function LegalPage() {
  return (
    <>
      <ChapterHero eyebrow="Legal" title="Legal Notices" />

      <Prose>
        <h2>Non-Affiliation</h2>
        <p>
          Built Before Cloud is an independent historical and educational
          project created by Timothy Munro Roberts. It is not sponsored,
          endorsed by or currently affiliated with Savvis, CenturyLink, Lumen
          Technologies, Intira, Terremark, Verizon or any of their current or
          former parents, subsidiaries, successors or affiliates.
        </p>

        <h2>Trademarks</h2>
        <p>
          All company names, trademarks, logos and service marks belong to
          their respective owners and are used solely for historical,
          editorial, documentary or educational reference. Third-party logos
          are never used as the Built Before Cloud logo, favicon, social
          avatar or store identity.
        </p>

        <h2>Historical Materials</h2>
        <p>
          Historical material displayed for documentary and educational
          purposes. All trademarks and logos remain the property of their
          respective owners. No endorsement or current affiliation is implied.
        </p>

        <h2>Identity Clarification</h2>
        <p>
          William Munro “Monty” Roberts III, referenced throughout this
          project, was a marketing, entertainment and motorsports executive
          and later an ordained Episcopal minister. He was not the horse
          trainer of the same name, and this project makes no connection
          between the two.
        </p>

        <h2>Evidence Standard and Right of Response</h2>
        <p>
          Major historical claims are labeled by evidence classification (see{" "}
          <a href="/sources" className="text-electric-cyan hover:underline">
            Sources
          </a>
          ). Every person named in the project holds a permanent right of
          response through the{" "}
          <a href="/corrections" className="text-electric-cyan hover:underline">
            Corrections
          </a>{" "}
          process.
        </p>
      </Prose>
    </>
  );
}
