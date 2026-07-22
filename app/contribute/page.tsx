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
        eyebrow="Help Complete the Record"
        title="Were You There?"
        subtitle={
          <p>
            This is an oral-history and evidence project. Firsthand accounts
            and original documents make it stronger.
          </p>
        }
      />

      <Prose>
        <p>
          Did you work at Whackoland, Metal Shop, DiamondNet, Savvis, Digital
          Broadcast Network, Intira or Platformz?
        </p>
        <p>
          Were you a customer, investor, vendor, journalist, adviser,
          engineer, construction professional, family member or technology
          partner?
        </p>
        <p>Do you have:</p>
        <div className="my-8 flex flex-wrap gap-2">
          {[
            "Photographs",
            "Emails",
            "Network maps",
            "Contracts",
            "Customer proposals",
            "Equipment lists",
            "Press kits",
            "Investor presentations",
            "Facility plans",
            "Electrical drawings",
            "Cooling calculations",
            "Blade-server invoices",
            "Virtualization licenses",
            "Software",
            "Company merchandise",
            "Personal recollections",
            "Corrections we may not enjoy reading",
          ].map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 font-mono text-xs text-technical-gray transition-colors hover:border-electric-cyan/50 hover:text-electric-cyan"
            >
              {item}
            </span>
          ))}
        </div>
        <p className="font-headline text-lg font-semibold leading-relaxed text-archive-paper">
          We want to hear from you.
          <br />
          You do not have to agree with me.
          <br />
          You do have to help us understand what happened.
        </p>

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
