import type { Metadata } from "next";
import ChapterHero from "@/components/ChapterHero";
import Prose from "@/components/Prose";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Built Before Cloud for media, archive contributions, corrections or Platformz inquiries.",
};

const channels = [
  {
    purpose: "General and media inquiries",
    email: "hello@builtbeforecloud.com",
  },
  {
    purpose: "Archive contributions",
    email: "archive@builtbeforecloud.com",
  },
  {
    purpose: "Corrections and right of response",
    email: "corrections@builtbeforecloud.com",
  },
  {
    purpose: "Platformz, DIaaS and SaaS Foundry inquiries",
    email: "platformz@builtbeforecloud.com",
  },
];

export default function ContactPage() {
  return (
    <>
      <ChapterHero
        eyebrow="Contact"
        title="Get in Touch"
        subtitle={
          <p>
            Whether you were there, you have documents, or you want to talk
            about Platformz—we want to hear from you.
          </p>
        }
      />

      <Prose>
        <div className="space-y-4">
          {channels.map((channel) => (
            <div
              key={channel.email}
              className="rounded-sm border border-signal-blue/30 bg-infra-navy/50 p-6"
            >
              <p className="font-headline font-semibold text-archive-paper">
                {channel.purpose}
              </p>
              <a
                href={`mailto:${channel.email}`}
                className="mt-1 inline-block font-mono text-sm text-electric-cyan hover:underline"
              >
                {channel.email}
              </a>
            </div>
          ))}
        </div>
      </Prose>
    </>
  );
}
