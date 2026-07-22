export default function AnnouncementBar() {
  return (
    <div className="relative border-b border-electric-cyan/20 bg-[linear-gradient(90deg,rgba(20,126,163,0.3),rgba(64,217,232,0.12)_50%,rgba(20,126,163,0.3))] px-4 py-2.5 text-center">
      <p className="font-mono text-[11px] tracking-wide text-archive-paper/90 sm:text-xs">
        <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-electric-cyan align-middle" aria-hidden />
        An independent historical project. No current affiliation with Savvis,
        CenturyLink, Lumen Technologies, Intira, Terremark or Verizon.
      </p>
    </div>
  );
}
