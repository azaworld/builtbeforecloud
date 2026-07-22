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
    title: "Phrack Launches (1985)",
    era: "1985",
    category: "BBS Era",
    description:
      "Phrack launched in 1985 out of the St. Louis modem community that included Metal Shop BBS and Whackoland. The electronic magazine's early issues remain publicly archived.",
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
    slug: "savvis-bridge-ipo",
    title: "Bridge Information Systems and the Savvis IPO",
    era: "Late 1990s–2000s",
    category: "Savvis",
    description:
      "After Tim's departure, Bridge Information Systems acquired control of Savvis. The company later completed a public offering and expanded into managed hosting, colocation and cloud services.",
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
      "The Intira story centers on facilities in St. Louis, Pleasanton (California) and New York City. Tim recalls hiring C. Rallo Construction and Ross & Baruzzini. Facility documentation is being assembled.",
    status: "seeking",
    claim: "founder-recollection",
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
