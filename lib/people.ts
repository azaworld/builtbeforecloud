import type { ClaimType } from "@/components/ClaimLabel";

export type Person = {
  slug: string;
  name: string;
  alias?: string;
  role: string;
  chapters: string[];
  bio: string;
  claim: ClaimType;
};

export const people: Person[] = [
  {
    slug: "tim-roberts",
    name: "Timothy Munro Roberts",
    role: "Founder and narrator",
    chapters: ["Origin", "Whackoland", "Savvis", "Intira", "The Missing Pieces", "Platformz"],
    bio: "Founder and narrator of Built Before Cloud. From Whackoland BBS and J&G Computer Solutions to co-founding Savvis and Intira, and today building Platformz—the operating foundation his entire life prepared him to build.",
    claim: "founder-recollection",
  },
  {
    slug: "peter-roberts",
    name: "Peter Roberts",
    alias: "One half of the W(hack)o Cracko Brothers",
    role: "Identical twin brother, co-sysop of Whackoland BBS",
    chapters: ["Whackoland"],
    bio: "Tim's identical twin, collaborator, competitor and occasionally his worst technical-support problem. Together at fourteen they operated Whackoland BBS and called themselves the W(hack)o Cracko Brothers.",
    claim: "family-record",
  },
  {
    slug: "william-munro-roberts-iii",
    name: "William Munro Roberts III",
    alias: "Monty",
    role: "Tim's father — marketing, entertainment and motorsports executive; later an ordained Episcopal minister",
    chapters: ["Origin"],
    bio: "A Ford, Young & Rubicam, Anheuser-Busch, marketing, entertainment and motorsports executive who later became an ordained Episcopal minister. He was not the horse trainer of the same name. He taught Tim to think at scale, make ambitious ideas understandable and approach powerful people without fear.",
    claim: "family-record",
  },
  {
    slug: "andrew-gladney",
    name: "Andrew Graves Gladney",
    role: "Early financial partner, DiamondNet / Savvis",
    chapters: ["Savvis"],
    bio: "Met Tim while Tim worked at J&G Computer Solutions. Andrew supplied early financial capability while Tim supplied the network and operating vision. As Savvis became more valuable, the two fought over ownership and control; litigation followed, the matter settled and Tim left the company. A permanent right-of-response invitation is extended to Andrew or his representatives.",
    claim: "founder-recollection",
  },
  {
    slug: "dick-ford",
    name: "Dick Ford",
    role: "Gateway Venture Partners",
    chapters: ["Savvis"],
    bio: "Introduced to Tim by Tim's father. Tim arranged the meeting between Dick Ford and Andrew Gladney, after which Gateway supplied institutional capital to the company that became Savvis.",
    claim: "founder-recollection",
  },
  {
    slug: "bob-murphy",
    name: "Bob Murphy",
    role: "CFO, Savvis",
    chapters: ["Savvis"],
    bio: "Joined Savvis as CFO and helped build a more sophisticated financial operation as the company scaled.",
    claim: "founder-recollection",
  },
  {
    slug: "mark-ivie",
    name: "Mark Ivie",
    role: "Co-founder, Intira",
    chapters: ["Intira"],
    bio: "Part of the Intira founding group. Helped move the founding vision into an operating company.",
    claim: "founder-recollection",
  },
  {
    slug: "rich-skoba",
    name: "Rich Skoba",
    role: "Co-founder, Intira",
    chapters: ["Intira"],
    bio: "Part of the Intira founding group. Brought complementary knowledge around computing, servers, storage and enterprise infrastructure.",
    claim: "founder-recollection",
  },
  {
    slug: "taran-king",
    name: "Randy Tischler",
    alias: "Taran King",
    role: "Co-founder of Metal Shop BBS and Phrack, St. Louis modem community",
    chapters: ["Whackoland"],
    bio: "A central figure in the St. Louis computer underground. Co-founded Metal Shop BBS and, in 1985, the electronic magazine Phrack—part of the same competitive community in which Whackoland operated.",
    claim: "contemporary-reporting",
  },
  {
    slug: "knight-lightning",
    name: "Craig Neidorf",
    alias: "Knight Lightning",
    role: "Co-founder of Phrack, St. Louis modem community",
    chapters: ["Whackoland"],
    bio: "Co-founded Phrack in 1985 with Taran King. Part of the St. Louis modem community that included Metal Shop BBS and Whackoland.",
    claim: "contemporary-reporting",
  },
  {
    slug: "cheshire-catalyst",
    name: "Robert Osband",
    alias: "Cheshire Catalyst",
    role: "Editor associated with the legacy of TAP",
    chapters: ["Whackoland"],
    bio: "Known as Cheshire Catalyst, associated with the legacy of TAP, the pioneering technology newsletter connected to Abbie Hoffman. The proposed New TAP project emerged after Phrack launched; Tim recalls deciding not to proceed with the revival after concluding the legal and operational risks were too large.",
    claim: "contemporary-reporting",
  },
];

export function getPerson(slug: string): Person | undefined {
  return people.find((p) => p.slug === slug);
}
