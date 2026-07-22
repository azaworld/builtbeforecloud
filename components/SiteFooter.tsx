import Link from "next/link";
import Logo from "@/components/Logo";

const exploreNav = [
  { label: "The Origin", href: "/origin" },
  { label: "Whackoland", href: "/whackoland" },
  { label: "Savvis", href: "/savvis" },
  { label: "Intira", href: "/intira" },
  { label: "The Missing Pieces", href: "/the-missing-pieces" },
  { label: "Platformz", href: "/platformz" },
];

const projectNav = [
  { label: "Timeline", href: "/timeline" },
  { label: "People", href: "/people" },
  { label: "Archive", href: "/archive" },
  { label: "About Tim", href: "/about-tim" },
  { label: "Store", href: "/store" },
];

const utilityNav = [
  { label: "Sources", href: "/sources" },
  { label: "Corrections", href: "/corrections" },
  { label: "Contribute", href: "/contribute" },
  { label: "Contact", href: "/contact" },
  { label: "Legal", href: "/legal" },
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
];

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <nav aria-label={title}>
      <h3 className="font-mono text-[10px] uppercase tracking-[0.3em] text-signal-blue">
        {title}
      </h3>
      <ul className="mt-4 space-y-2.5">
        {links.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="text-sm text-technical-gray transition-colors hover:text-electric-cyan"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-white/[0.06] bg-[#04090e]">
      {/* Ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-electric-cyan/40 to-transparent"
      />

      <div className="relative mx-auto max-w-[88rem] px-5 pb-10 pt-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="max-w-md">
            <div className="flex items-center gap-3">
              <Logo className="h-9 w-9" />
              <span className="font-headline text-sm font-bold uppercase tracking-[0.28em]">
                Built Before Cloud
              </span>
            </div>
            {/* Supporting statement */}
            <p className="mt-6 text-sm leading-relaxed text-archive-paper/75">
              The firsthand, research-supported story of Timothy Roberts—from
              Whackoland BBS and the earliest digital communities to Savvis,
              Intira and Platformz, the enterprise operating infrastructure
              built from a lifetime of connecting people, systems and
              businesses.
            </p>
          </div>

          <FooterColumn title="The Story" links={exploreNav} />
          <FooterColumn title="The Project" links={projectNav} />
          <FooterColumn title="Utility" links={utilityNav} />
        </div>

        <div className="mt-16 space-y-4 border-t border-white/[0.06] pt-8">
          <p className="text-[13px] leading-relaxed text-technical-gray/80">
            Built Before Cloud is an independent historical and educational
            project created by Timothy Munro Roberts. It is not sponsored,
            endorsed by or currently affiliated with Savvis, CenturyLink,
            Lumen Technologies, Intira, Terremark, Verizon or any of their
            current or former parents, subsidiaries, successors or affiliates.
            All company names, trademarks, logos and service marks belong to
            their respective owners and are used solely for historical,
            editorial, documentary or educational reference.
          </p>
          <p className="font-mono text-[11px] leading-relaxed text-technical-gray/60">
            Historical material displayed for documentary and educational
            purposes. All trademarks and logos remain the property of their
            respective owners. No endorsement or current affiliation is
            implied.
          </p>
        </div>

        <div className="mt-14 text-center">
          <p className="font-serif text-lg italic leading-relaxed text-archive-paper/90">
            The cloud was built layer by layer.
            <br />
            Platformz is where the layers finally become one.
          </p>
          <p className="mt-8 font-mono text-[11px] tracking-[0.15em] text-technical-gray/50">
            © {new Date().getFullYear()} BUILT BEFORE CLOUD · TIMOTHY MUNRO
            ROBERTS
          </p>
        </div>
      </div>

      {/* Giant outline wordmark */}
      <div
        aria-hidden
        className="pointer-events-none select-none overflow-hidden pb-2"
      >
        <p className="outline-wordmark whitespace-nowrap text-center font-headline text-[11.5vw] font-bold uppercase leading-[0.85]">
          Built Before Cloud
        </p>
      </div>
    </footer>
  );
}
