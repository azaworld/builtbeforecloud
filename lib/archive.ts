import type { ClaimType } from "@/components/ClaimLabel";

export type ArchiveItem = {
  slug: string;
  title: string;
  era: string;
  category: string;
  description: string;
  status: "archived" | "seeking";
  claim: ClaimType;
};

export const archiveItems: ArchiveItem[] = [
  {
    slug: "monty-roberts-family-archive",
    title: "The Monty Roberts Family Archive",
    era: "1960s–1980s",
    category: "Family & Origin",
    description:
      "Surviving artifacts from William Munro 'Monty' Roberts III's career: the Up, Down & Strange marketing sheet, photographs with August Busch III and Yvonne Elliman, the Mercury racing message from his Lincoln-Mercury years, Ontario Motor Speedway photographs and the signed Busch Racing 1980 media guide.",
    status: "archived",
    claim: "family-record",
  },
  {
    slug: "whackoland-login-screen",
    title: "Whackoland BBS Login Screen (Reconstruction)",
    era: "1980s",
    category: "BBS Era",
    description:
      "A reconstruction of the Whackoland BBS welcome screen as recalled by its sysops: 300/1200 baud, 40 megabytes, custom modifications, private sections—and the famous line, 'Only 100 users will be retained.'",
    status: "archived",
    claim: "founder-recollection",
  },
  {
    slug: "phrack-launch-1985",
    title: "Phrack Launches From Metal Shop (November 17, 1985)",
    era: "1985",
    category: "BBS Era",
    description:
      "The first issue of Phrack, released under editor Taran King and distributed as electronic files from Metal Shop BBS in St. Louis. Phrack described itself as a collection of electronic files, encouraged redistribution by other bulletin boards and invited future submissions. It is still publishing four decades later.",
    status: "archived",
    claim: "contemporary-reporting",
  },
  {
    slug: "whackoland-phrack-1986",
    title: "Whackoland Documented in Phrack (February 1986)",
    era: "1986",
    category: "BBS Era",
    description:
      "The February 1986 Phrack entry documenting Whackoland as a 300/1200-baud BBS operated by the W(hack)o Cracko Brothers, with 40 megabytes of storage, customized features, private sections and an intentionally exclusive limit of 100 users. The same report includes a colorful, partly unverified account of the twins attracting law-enforcement attention.",
    status: "archived",
    claim: "contemporary-reporting",
  },
  {
    slug: "tap-revival-proposal-1986",
    title: "The Proposed TAP Revival (March 1986)",
    era: "1986",
    category: "BBS Era",
    description:
      "The March 1986 Phrack report on plans for the W(hack)o Cracko Brothers to take over or restart TAP—listing proposed regional editors, staff, subscription rates, online access and a monthly 30-to-40-page color magazine—while openly questioning whether Cheshire Catalyst had formally transferred the name.",
    status: "archived",
    claim: "contemporary-reporting",
  },
  {
    slug: "diamondnet-to-savvis",
    title: "DiamondNet Becomes Savvis",
    era: "1990s",
    category: "Savvis",
    description:
      "Corporate records documenting the company's beginning as DiamondNet and its renaming to Savvis. Built Before Cloud is assembling filings and contemporaneous documents for this transition.",
    status: "seeking",
    claim: "disputed-or-incomplete",
  },
  {
    slug: "savvis-apple-relationship",
    title: "The Apple Relationship",
    era: "1990s",
    category: "Savvis",
    description:
      "Tim's account is that an approach involving Steve Jobs opened the path, followed by enterprise sales and technical work involving Apple personnel. Built Before Cloud is seeking contracts, correspondence and participant accounts to corroborate this recollection.",
    status: "seeking",
    claim: "founder-recollection",
  },
  {
    slug: "boardwatch-july-1997",
    title: "Boardwatch Internet Service Providers Directory (July/August 1997)",
    era: "1997",
    category: "Savvis",
    description:
      "The Boardwatch Magazine bimonthly directory advertising performance tests for Internet backbone providers. The Keynote/Boardwatch measurement program produced the November 1997 result in which Savvis ranked first with a reported average download time of 4.905 seconds.",
    status: "archived",
    claim: "contemporary-reporting",
  },
  {
    slug: "savvis-bridge-ipo",
    title: "Bridge Information Systems and the Savvis IPO",
    era: "1999–2000",
    category: "Savvis",
    description:
      "Bridge Information Systems acquired Savvis in April 1999, combining its 18-city network with Bridge's global infrastructure into an 87-city IP and ATM network. On February 15, 2000, Savvis sold 17 million shares at $24, raising approximately $408 million at a reported market value of approximately $2.2 billion.",
    status: "archived",
    claim: "verified-public-record",
  },
  {
    slug: "intira-netsourcing-materials",
    title: "Intira NetSourcing Marketing and Service Materials",
    era: "Late 1990s–2000s",
    category: "Intira",
    description:
      "Materials describing NetSourcing: the customer supplied the application, and Intira managed everything beneath it—facilities, power, cooling, networking, servers, storage, databases, security, monitoring and continuous operations.",
    status: "seeking",
    claim: "disputed-or-incomplete",
  },
  {
    slug: "intira-blade-virtualization",
    title: "Blade Servers and Virtual Machines at Intira",
    era: "Early 2000s",
    category: "Intira",
    description:
      "Tim recalls Intira selling blade-based environments running virtual machines from its privately operated data centers. Built Before Cloud is seeking hardware invoices, software licenses, customer statements of work and deployment diagrams to document the exact architecture and determine whether a first-to-market claim can be independently supported.",
    status: "seeking",
    claim: "founder-recollection",
  },
  {
    slug: "intira-data-centers",
    title: "The Intira Data Centers: St. Louis, Pleasanton, New York City",
    era: "Late 1990s–2000s",
    category: "Intira",
    description:
      "The Intira story centers on facilities in St. Louis, Pleasanton (California) and New York City. Tim recalls hiring C. Rallo Construction and Ross & Baruzzini. Electrical drawings, mechanical drawings and construction records documenting the approximately seven-times power and cooling design are being assembled.",
    status: "seeking",
    claim: "founder-recollection",
  },
  {
    slug: "intira-datacenter-presentation",
    title: "Founder-Supplied Data-Center Presentation (Video)",
    era: "Late 1990s–2000s",
    category: "Intira",
    description:
      "The original founder-supplied data-center presentation supporting the seven-times electrical and cooling design account. It is to be preserved alongside the original drawings, engineering plans, equipment schedules and construction records as part of the historical archive.",
    status: "seeking",
    claim: "founder-recollection",
  },
  {
    slug: "dovebid-netsourcing-agreement",
    title: "The DoveBid NetSourcing Agreement (September 2000)",
    era: "2000",
    category: "Intira",
    description:
      "A surviving September 2000 NetSourcing agreement with DoveBid providing contractual evidence of the model: Intira agreed to provide hosting, data management, Internet access, security and associated services around DoveBid's applications, while the customer retained ownership of the application.",
    status: "archived",
    claim: "verified-public-record",
  },
  {
    slug: "intira-bankruptcy-divine-2001",
    title: "Intira Bankruptcy and the divine Transaction (July 2001)",
    era: "2001",
    category: "Intira",
    description:
      "Public filings documenting divine's agreement to purchase substantially all Intira assets for $1 million in cash, provide a $6.8 million debtor-in-possession credit facility and assume certain obligations. Later asset lineage involving Data Return, Terremark and Verizon remains an open archival question.",
    status: "archived",
    claim: "verified-public-record",
  },
  {
    slug: "phantom-console-coverage",
    title: "Infinium Labs and the Phantom Console",
    era: "2000s",
    category: "The Missing Pieces",
    description:
      "Contemporary press coverage of the Phantom game console—a product that captured the world's imagination before the company was ready to carry the weight of that attention.",
    status: "archived",
    claim: "contemporary-reporting",
  },
  {
    slug: "platformz-fur4-deployment",
    title: "FUR4: The First Complete Proof",
    era: "2025–2026",
    category: "Platformz",
    description:
      "Platformz's internal operating plan describes FUR4 as the flagship proof point: a live multi-portal environment proving DTC commerce, B2B ordering, referrals, administration, catalog, inventory, channels and future vendor workflows from one reusable framework.",
    status: "archived",
    claim: "corroborated-recollection",
  },
];

export function getArchiveItem(slug: string): ArchiveItem | undefined {
  return archiveItems.find((i) => i.slug === slug);
}
