export default function TerminalBlock({
  lines,
  caption,
}: {
  lines: string[];
  caption?: string;
}) {
  return (
    <figure className="my-10">
      <div className="rounded-sm border border-electric-cyan/40 bg-network-black p-6 shadow-[0_0_40px_rgba(64,217,232,0.08)]">
        <div className="mb-4 flex gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-warm-copper/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-technical-gray/50" />
          <span className="h-2.5 w-2.5 rounded-full bg-electric-cyan/70" />
        </div>
        <pre className="overflow-x-auto font-mono text-sm leading-loose text-electric-cyan">
          {lines.join("\n")}
        </pre>
        <p className="cursor-blink mt-2 font-mono text-sm text-electric-cyan" />
      </div>
      {caption && (
        <figcaption className="mt-3 text-center font-serif text-sm italic text-technical-gray">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
