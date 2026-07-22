"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
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
  const [progress, setProgress] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      setProgress(max > 0 ? (doc.scrollTop / max) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-network-black/70 backdrop-blur-xl">
      {/* Reading progress */}
      <div
        className="absolute inset-x-0 top-0 h-[2px] origin-left bg-gradient-to-r from-signal-blue via-electric-cyan to-electric-cyan transition-transform duration-150 ease-out"
        style={{ transform: `scaleX(${progress / 100})` }}
        aria-hidden
      />

      <div className="mx-auto flex max-w-[88rem] items-center justify-between gap-4 px-5 py-3.5">
        <Link href="/" className="group flex items-center gap-3">
          <Logo className="h-8 w-8 transition-transform duration-500 group-hover:rotate-[8deg]" />
          <span className="font-headline text-[13px] font-bold uppercase tracking-[0.28em] text-archive-paper">
            Built Before Cloud
          </span>
        </Link>

        <nav className="hidden items-center gap-5 xl:flex">
          {primaryNav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                data-active={active}
                className={`nav-link font-mono text-[11px] uppercase tracking-[0.14em] ${
                  active ? "text-electric-cyan" : "text-technical-gray hover:text-archive-paper"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={open}
          className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-electric-cyan xl:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`block h-px w-5 bg-electric-cyan transition-transform ${open ? "translate-y-[3px] rotate-45" : "-translate-y-[2px]"}`}
          />
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`grid overflow-hidden border-t border-white/[0.06] bg-network-black/95 backdrop-blur-xl transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] xl:hidden ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr] border-t-0"
        }`}
      >
        <nav className="min-h-0 overflow-hidden">
          <ul className="grid grid-cols-2 gap-x-6 gap-y-4 px-6 py-8 sm:grid-cols-3">
            {primaryNav.map((item, i) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="group flex items-baseline gap-2 font-headline text-base font-semibold text-archive-paper/90 transition-colors hover:text-electric-cyan"
                  onClick={() => setOpen(false)}
                >
                  <span className="font-mono text-[10px] text-signal-blue">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
