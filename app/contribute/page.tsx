import type { Metadata } from "next";
import ChapterHero from "@/components/ChapterHero";
import Prose from "@/components/Prose";

export const metadata: Metadata = {
  title: "Contribute",
  description:
    "Help document the history: Built Before Cloud is seeking documents, photographs and participant accounts from Whackoland, Savvis, Intira and later ventures.",
};

export default function ContributePage() {
  return (
    <>
      <ChapterHero
        eyebrow="Contribute"
        title="Help Build the Archive"
        subtitle={
          <p>
            This is an oral-history and evidence project. Firsthand accounts
            and original documents make it stronger.
          </p>
        }
      />

      <Prose>
        <h2>What We Are Looking For</h2>
        <ul>
          <li>
            BBS-era materials: Whackoland screenshots, printouts, user lists,
            disks, photographs of the St. Louis modem community
          </li>
          <li>
            Savvis and DiamondNet: contracts, filings, correspondence, network
            diagrams, employee and customer accounts
          </li>
          <li>
            Intira: NetSourcing marketing materials, hardware invoices,
            software licenses, statements of work, deployment diagrams,
            data-center construction records
          </li>
          <li>
            Later ventures: press coverage, product materials and participant
            accounts from Infinium Labs, GameStreamer, Savtira, StationDigital,
            HashingSpace and others
          </li>
          <li>
            Family records relating to William Munro “Monty” Roberts III and
            his marketing, motorsports and ministry careers
          </li>
        </ul>

        <h2>Were You There?</h2>
        <p>
          If you were a Whackoland user, a Savvis or Intira employee, a
          customer, an investor or a rival sysop, your account matters.
          Corroborated recollections are one of the strongest evidence
          classifications this project uses.
        </p>

        <h2>How to Contribute</h2>
        <p>
          Email{" "}
          <a
            href="mailto:archive@builtbeforecloud.com"
            className="text-electric-cyan hover:underline"
          >
            archive@builtbeforecloud.com
          </a>
          . Tell us what you have, how you were involved and how you would like
          to be credited. Originals are never required—scans and photographs
          are welcome.
        </p>
      </Prose>
    </>
  );
}
