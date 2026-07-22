"use client";

import Link from "next/link";
import { useState } from "react";
import Logo from "@/components/Logo";

const primaryNav = [
  { label: "Home", href: "/" },
  { label: "The Origin", href: "/origin" },
  { label: "Whackoland", href: "/whackoland" },
  { label: "Savvis", href: "/savvis" },
  { label: "Intira", href: "/intira" },
  { label: "The Missing Pieces", href: "/the-missing-pieces" },
  { label: "Platformz", href: "/platformz" },
  { label: "Timeline", href: "/timeline" },
  { label: "People", href: "/people" },
  { label: "Archive", href: "/archive" },
  { label: "About Tim", href: "/about-tim" },
  { label: "Store", href: "/store" },
];

export default function SiteNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-signal-blue/20 bg-network-black/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <Logo className="h-8 w-8" />
          <span className="font-headline text-sm font-bold uppercase tracking-[0.2em] text-archive-paper">
            Built Before Cloud
          </span>
        </Link>

        <nav className="hidden items-center gap-4 xl:flex">
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-mono text-[11px] uppercase tracking-wider text-technical-gray transition-colors hover:text-electric-cyan"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          aria-label="Toggle navigation"
          className="font-mono text-xs uppercase tracking-wider text-electric-cyan xl:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <nav className="border-t border-signal-blue/20 bg-infra-navy px-4 py-4 xl:hidden">
          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {primaryNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="font-mono text-xs uppercase tracking-wider text-technical-gray hover:text-electric-cyan"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
