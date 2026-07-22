import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ClaimLabel from "@/components/ClaimLabel";
import { archiveItems, getArchiveItem } from "@/lib/archive";

export function generateStaticParams() {
  return archiveItems.map((i) => ({ item: i.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ item: string }>;
}): Promise<Metadata> {
  const { item } = await params;
  const archiveItem = getArchiveItem(item);
  if (!archiveItem) return { title: "Archive Item Not Found" };
  return {
    title: archiveItem.title,
    description: archiveItem.description,
  };
}

export default async function ArchiveItemPage({
  params,
}: {
  params: Promise<{ item: string }>;
}) {
  const { item } = await params;
  const archiveItem = getArchiveItem(item);
  if (!archiveItem) notFound();

  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <Link
        href="/archive"
        className="font-mono text-xs uppercase tracking-wider text-signal-blue hover:text-electric-cyan"
      >
        ← Full Archive
      </Link>

      <p className="mt-6 font-mono text-sm text-signal-blue">
        {archiveItem.era} · {archiveItem.category}
      </p>
      <h1 className="mt-2 font-headline text-4xl font-bold leading-tight">
        {archiveItem.title}
      </h1>

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <ClaimLabel type={archiveItem.claim} />
        <span
          className={`font-mono text-[10px] uppercase tracking-widest ${
            archiveItem.status === "seeking"
              ? "text-warm-copper"
              : "text-electric-cyan"
          }`}
        >
          {archiveItem.status === "seeking" ? "Seeking Documents" : "Archived"}
        </span>
      </div>

      <p className="mt-8 leading-relaxed text-archive-paper/90">
        {archiveItem.description}
      </p>

      <p className="mt-10 panel p-4 font-mono text-xs leading-relaxed text-technical-gray">
        Historical material displayed for documentary and educational
        purposes. All trademarks and logos remain the property of their
        respective owners. No endorsement or current affiliation is implied.
      </p>

      {archiveItem.status === "seeking" && (
        <div className="mt-6 panel panel-copper p-6">
          <p className="font-mono text-xs uppercase tracking-widest text-warm-copper">
            Help Document This
          </p>
          <p className="mt-3 text-sm leading-relaxed text-technical-gray">
            Built Before Cloud is actively seeking documents, photographs and
            participant accounts for this item. If you can help,{" "}
            <Link href="/contribute" className="text-electric-cyan hover:underline">
              contribute to the archive
            </Link>
            .
          </p>
        </div>
      )}
    </div>
  );
}
