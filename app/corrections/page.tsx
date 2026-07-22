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
        eyebrow="Corrections and Historical Updates"
        title="Think We Got Something Wrong?"
        subtitle={
          <p className="font-headline text-xl font-semibold text-electric-cyan">
            Good. Tell us.
          </p>
        }
      />

      <Prose>
        <p>Built Before Cloud is a living historical project.</p>
        <p>A new contract may change a date.</p>
        <p>A former employee may remember a decision differently.</p>
        <p>A photograph may establish who was in the room.</p>
        <p>
          A court record may contradict a story repeated for decades.
        </p>
        <p>
          A construction drawing may prove—or disprove—the seven-times power
          and cooling design.
        </p>
        <p>
          A hardware invoice may establish when Intira began using blade
          servers or virtualization.
        </p>

        <h2>Our Commitment</h2>
        <p>
          Built Before Cloud labels every major historical claim by evidence
          classification. When new documents, participant accounts or
          contemporaneous records change what we can support, we update the
          text and the label, and note the change.
        </p>
        <p>Material corrections will not be silently erased.</p>
        <p>Each major update will show:</p>
        <ul>
          <li>The original wording.</li>
          <li>The revised wording.</li>
          <li>The reason for the change.</li>
          <li>The supporting evidence.</li>
          <li>The date.</li>
          <li>The pages affected.</li>
        </ul>
        <p className="font-headline text-lg font-semibold leading-relaxed text-archive-paper">
          Strong history is not history that avoids challenges.
          <br />
          It is history that survives them.
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
