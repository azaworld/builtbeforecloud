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
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#081524]/85 shadow-[0_12px_40px_-12px_rgba(0,0,0,0.6)] backdrop-blur-2xl">
      {/* Reading progress */}
      <div
        className="absolute inset-x-0 top-0 h-[2.5px] origin-left bg-gradient-to-r from-signal-blue via-electric-cyan to-electric-cyan shadow-[0_0_12px_rgba(64,217,232,0.7)] transition-transform duration-150 ease-out"
        style={{ transform: `scaleX(${progress / 100})` }}
        aria-hidden
      />

      <div className="mx-auto flex max-w-[92rem] items-center justify-between gap-6 px-5 py-4">
        <Link href="/" className="group flex shrink-0 items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-xl border border-electric-cyan/25 bg-electric-cyan/[0.07] transition-all duration-300 group-hover:border-electric-cyan/60 group-hover:shadow-[0_0_20px_rgba(64,217,232,0.35)]">
            <Logo className="h-7 w-7" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-headline text-[15px] font-bold uppercase tracking-[0.22em] text-archive-paper">
              Built Before Cloud
            </span>
            <span className="mt-1.5 font-mono text-[9px] uppercase tracking-[0.3em] text-electric-cyan/80">
              Est. 300 Baud · St. Louis
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 xl:flex">
          {primaryNav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`whitespace-nowrap rounded-full px-3 py-2 font-mono text-[11.5px] uppercase tracking-[0.08em] transition-all duration-200 ${
                  active
                    ? "bg-electric-cyan/15 text-electric-cyan shadow-[inset_0_0_0_1px_rgba(64,217,232,0.4)]"
                    : "text-archive-paper/75 hover:bg-white/[0.06] hover:text-archive-paper"
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
          className="flex items-center gap-2.5 rounded-full border border-electric-cyan/30 bg-electric-cyan/[0.07] px-4 py-2 font-mono text-[11px] uppercase tracking-[0.18em] text-electric-cyan transition-colors hover:bg-electric-cyan/15 xl:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="flex flex-col gap-[4px]">
            <span
              className={`block h-[1.5px] w-4 bg-electric-cyan transition-transform duration-300 ${open ? "translate-y-[5.5px] rotate-45" : ""}`}
            />
            <span
              className={`block h-[1.5px] w-4 bg-electric-cyan transition-opacity duration-300 ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-[1.5px] w-4 bg-electric-cyan transition-transform duration-300 ${open ? "-translate-y-[5.5px] -rotate-45" : ""}`}
            />
          </span>
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`grid overflow-hidden border-t border-white/10 bg-[#081524]/95 backdrop-blur-2xl transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] xl:hidden ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr] border-t-0"
        }`}
      >
        <nav className="min-h-0 overflow-hidden">
          <ul className="grid grid-cols-2 gap-x-6 gap-y-5 px-6 py-8 sm:grid-cols-3">
            {primaryNav.map((item, i) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`group flex items-baseline gap-2.5 font-headline text-lg font-semibold transition-colors ${
                      active
                        ? "text-electric-cyan"
                        : "text-archive-paper/90 hover:text-electric-cyan"
                    }`}
                    onClick={() => setOpen(false)}
                  >
                    <span className="font-mono text-[10px] text-signal-blue">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
