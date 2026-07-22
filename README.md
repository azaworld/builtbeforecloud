# Built Before Cloud

**BuiltBeforeCloud.com** — the firsthand, research-supported story of Timothy Munro Roberts, from Whackoland BBS and the earliest digital communities to Savvis, Intira and Platformz.

> Before the Web. Before Streaming Worked. Before the Cloud Had a Name.

An independent historical project. No current affiliation with Savvis, CenturyLink, Lumen Technologies, Intira, Terremark or Verizon.

## Stack

- [Next.js](https://nextjs.org) (App Router) + TypeScript
- Tailwind CSS v4 with the Built Before Cloud brand palette
- Fonts: Space Grotesk (headlines), Inter (body), IBM Plex Mono (technical), Source Serif 4 (archive excerpts)

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Site Map

| Route | Purpose |
| --- | --- |
| `/` | Homepage — hero narrative, one question, chapter cards, final section |
| `/origin` | Chapter Zero — William Munro "Monty" Roberts III |
| `/whackoland` | Prologue — The W(hack)o Cracko Brothers |
| `/savvis` | Chapter One — Fixing the Road |
| `/intira` | Chapter Two — Everything Beneath the Application |
| `/the-missing-pieces` | Chapter Three — Phantom, GameStreamer, Savtira, StationDigital, HashingSpace |
| `/platformz` | Final Chapter — DIaaS, Looking Glass, SaaS Foundry, FUR4 |
| `/timeline` | Full timeline, 1970s → today |
| `/people`, `/people/[name]` | People of the story |
| `/archive`, `/archive/[item]` | Evidence archive |
| `/about-tim` | About Timothy Munro Roberts |
| `/store` | Store (coming soon) |
| `/sources` | The editorial standard and claim classifications |
| `/corrections`, `/contribute`, `/contact`, `/legal`, `/privacy`, `/terms` | Utility pages |

## Editorial Standard

Every major historical claim is labeled with one of six classifications (Verified Public Record, Contemporary Reporting, Founder Recollection, Family Record, Corroborated Recollection, Disputed or Incomplete), implemented in `components/ClaimLabel.tsx` and documented publicly at `/sources`.

---

*The cloud was built layer by layer. Platformz is where the layers finally become one.*
