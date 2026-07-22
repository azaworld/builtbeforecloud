import type { Metadata } from "next";
import ChapterHero from "@/components/ChapterHero";
import Prose from "@/components/Prose";

export const metadata: Metadata = {
  title: "Corrections",
  description:
    "Built Before Cloud publishes corrections and alternative accounts. Every person named in this project holds a permanent right of response.",
};

export default function CorrectionsPage() {
  return (
    <>
      <ChapterHero
        eyebrow="Corrections"
        title="Getting the History Right"
        subtitle={
          <p>
            This is a living historical project. When the record improves, the
            site improves.
          </p>
        }
      />

      <Prose>
        <h2>Our Commitment</h2>
        <p>
          Built Before Cloud labels every major historical claim by evidence
          classification. When new documents, participant accounts or
          contemporaneous records change what we can support, we update the
          text and the label, and note the change.
        </p>

        <h2>Permanent Right of Response</h2>
        <p>
          Every person named in this project—including Andrew Gladney and his
          representatives regarding the Savvis founder dispute—holds a
          permanent invitation to provide their own account, corrections or
          supporting documents. Materially different accounts are reviewed and
          published alongside the relevant chapter.
        </p>

        <h2>Submit a Correction</h2>
        <p>
          Email{" "}
          <a
            href="mailto:corrections@builtbeforecloud.com"
            className="text-electric-cyan hover:underline"
          >
            corrections@builtbeforecloud.com
          </a>{" "}
          with:
        </p>
        <ul>
          <li>The page and passage in question</li>
          <li>What you believe is inaccurate or incomplete</li>
          <li>Any documents, records or firsthand knowledge you can share</li>
          <li>How you would like to be credited, if at all</li>
        </ul>
      </Prose>
    </>
  );
}
