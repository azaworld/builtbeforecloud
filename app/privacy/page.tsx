import type { Metadata } from "next";
import ChapterHero from "@/components/ChapterHero";
import Prose from "@/components/Prose";

export const metadata: Metadata = {
  title: "Privacy",
  description: "Privacy policy for BuiltBeforeCloud.com.",
};

export default function PrivacyPage() {
  return (
    <>
      <ChapterHero eyebrow="Privacy" title="Privacy Policy" />

      <Prose>
        <p className="font-mono text-xs text-technical-gray">
          Last updated: July 2026
        </p>

        <h2>What We Collect</h2>
        <p>
          BuiltBeforeCloud.com is a reading experience first. We do not require
          accounts. If you email us—to contribute to the archive, submit a
          correction or ask about Platformz—we receive the information you
          choose to send, and we use it only for that purpose.
        </p>

        <h2>Archive Contributions</h2>
        <p>
          If you contribute documents, photographs or a firsthand account, we
          will discuss credit and publication with you before anything you
          provide appears on the site. You may contribute anonymously.
        </p>

        <h2>Analytics and Cookies</h2>
        <p>
          If analytics are enabled, they are used in aggregate to understand
          which chapters readers find useful. We do not sell personal
          information.
        </p>

        <h2>Contact</h2>
        <p>
          Privacy questions:{" "}
          <a
            href="mailto:hello@builtbeforecloud.com"
            className="text-electric-cyan hover:underline"
          >
            hello@builtbeforecloud.com
          </a>
        </p>
      </Prose>
    </>
  );
}
