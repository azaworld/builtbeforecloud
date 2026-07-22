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
    bio: "Joined Savvis as chief financial officer after Gateway became involved. In Tim's recollection, he helped raise roughly another $30 million and brought financial discipline to an aggressive technical vision.",
    claim: "founder-recollection",
  },
  {
    slug: "gary-zimmerman",
    name: "Gary Zimmerman",
    role: "Network builder, Savvis",
    chapters: ["Savvis"],
    bio: "Recruited by Tim from SBC to help turn the Savvis network architecture into an operating national network—circuits, routers, network access points, monitoring and the engineers who made emerging technology work under real customer traffic.",
    claim: "founder-recollection",
  },
  {
    slug: "david-zimmerman",
    name: "David Zimmerman",
    role: "Participant in the Savvis–Apple relationship",
    chapters: ["Savvis"],
    bio: "Identified in Tim's manuscripts as a participant in the broader process through which Apple became the defining early Savvis customer.",
    claim: "founder-recollection",
  },
  {
    slug: "marty-suzuki",
    name: "Marty Suzuki",
    role: "Participant in the Savvis–Apple relationship",
    chapters: ["Savvis"],
    bio: "Identified in Tim's manuscripts as a participant in the broader process through which Apple became the defining early Savvis customer.",
    claim: "founder-recollection",
  },
  {
    slug: "sam-wood",
    name: "Sam Wood",
    role: "Longtime friend; participant in the Savvis–Apple relationship",
    chapters: ["Savvis"],
    bio: "Tim's longtime friend, described in his manuscripts as a participant in the broader Apple relationship that kept Savvis alive.",
    claim: "founder-recollection",
  },
  {
    slug: "sam-sanderson",
    name: "Sam Sanderson",
    role: "Named in the historical record",
    chapters: ["Savvis"],
    bio: "Named in the Built Before Cloud historical record. Role documentation is in progress; records, corrections and interviews are welcome.",
    claim: "founder-recollection",
  },
  {
    slug: "jack-rickard",
    name: "Jack Rickard",
    role: "Editor, Boardwatch Magazine",
    chapters: ["Savvis"],
    bio: "Boardwatch Magazine documented the Internet backbone industry of the era, including the Keynote/Boardwatch backbone-performance testing that produced Savvis's reported 4.905-second first-place result in November 1997.",
    claim: "contemporary-reporting",
  },
  {
    slug: "bernie-schneider",
    name: "Bernie Schneider",
    role: "Named in the historical record",
    chapters: ["Intira"],
    bio: "Named in the Built Before Cloud historical record. Role documentation is in progress; records, corrections and interviews are welcome.",
    claim: "founder-recollection",
  },
  {
    slug: "charlie-rallo",
    name: "Charlie Rallo",
    role: "C. Rallo Construction — Intira data centers",
    chapters: ["Intira"],
    bio: "Tim recalls hiring C. Rallo Construction to translate the Intira data-center technical requirements into physical buildings—facilities that had to behave more like machines than offices.",
    claim: "founder-recollection",
  },
  {
    slug: "ross-baruzzini",
    name: "The Ross & Baruzzini Engineering Team",
    role: "Electrical and mechanical engineering — Intira data centers",
    chapters: ["Intira"],
    bio: "Tim recalls engaging Ross & Baruzzini to help engineer electrical and mechanical infrastructure capable of keeping the Intira computing environment alive—including the approximately seven-times power and cooling design.",
    claim: "founder-recollection",
  },
  {
    slug: "kevin-yarborough",
    name: "Kevin Yarborough",
    role: "Telecommunications-security professional",
    chapters: ["Whackoland"],
    bio: "Tim remembers Kevin as the telecommunications-security professional involved in tracing the activity that brought the teenage experiments to the attention of authorities. Years later, Tim hired him. The account remains a founder recollection until Kevin or original records corroborate it.",
    claim: "founder-recollection",
  },
  {
    slug: "abbie-hoffman",
    name: "Abbie Hoffman",
    role: "Countercultural figure connected to TAP's origins",
    chapters: ["Whackoland"],
    bio: "The technological counterculture surrounding the Youth International Party Line and TAP reached back to figures including Abbie Hoffman. Tim's recollection that Hoffman was prepared to let the brothers carry the TAP name forward remains uncorroborated.",
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
