import Link from "next/link";
import Logo from "@/components/Logo";

const utilityNav = [
  { label: "Sources", href: "/sources" },
  { label: "Corrections", href: "/corrections" },
  { label: "Contribute", href: "/contribute" },
  { label: "Contact", href: "/contact" },
  { label: "Legal", href: "/legal" },
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
];

export default function SiteFooter() {
  return (
    <footer className="border-t border-signal-blue/20 bg-infra-navy">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-xl">
            <div className="flex items-center gap-3">
              <Logo className="h-8 w-8" />
              <span className="font-headline text-sm font-bold uppercase tracking-[0.2em]">
                Built Before Cloud
              </span>
            </div>
            {/* Supporting statement */}
            <p className="mt-4 text-sm leading-relaxed text-archive-paper/80">
              The firsthand, research-supported story of Timothy Roberts—from
              Whackoland BBS and the earliest digital communities to Savvis,
              Intira and Platformz, the enterprise operating infrastructure
              built from a lifetime of connecting people, systems and
              businesses.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-technical-gray">
              Built Before Cloud is an independent historical and educational
              project created by Timothy Munro Roberts. It is not sponsored,
              endorsed by or currently affiliated with Savvis, CenturyLink,
              Lumen Technologies, Intira, Terremark, Verizon or any of their
              current or former parents, subsidiaries, successors or
              affiliates. All company names, trademarks, logos and service
              marks belong to their respective owners and are used solely for
              historical, editorial, documentary or educational reference.
            </p>
            <p className="mt-4 font-mono text-xs leading-relaxed text-technical-gray/80">
              Historical material displayed for documentary and educational
              purposes. All trademarks and logos remain the property of their
              respective owners. No endorsement or current affiliation is
              implied.
            </p>
          </div>

          <nav aria-label="Utility">
            <h3 className="font-mono text-xs uppercase tracking-widest text-signal-blue">
              Utility
            </h3>
            <ul className="mt-3 space-y-2">
              {utilityNav.map((item) => (
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
        </div>

        <div className="mt-12 border-t border-signal-blue/20 pt-8 text-center">
          <p className="font-serif text-base italic text-archive-paper/90">
            The cloud was built layer by layer.
            <br />
            Platformz is where the layers finally become one.
          </p>
          <p className="mt-6 font-mono text-[11px] text-technical-gray/60">
            © {new Date().getFullYear()} Built Before Cloud · Timothy Munro
            Roberts
          </p>
        </div>
      </div>
    </footer>
  );
}
