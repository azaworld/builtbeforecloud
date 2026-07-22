import type { Metadata } from "next";
import ChapterHero from "@/components/ChapterHero";

export const metadata: Metadata = {
  title: "Store",
  description:
    "The Built Before Cloud store—original archive-inspired merchandise. Coming soon.",
};

const upcoming = [
  {
    name: "Whackoland BBS Terminal Print",
    detail:
      "The reconstructed login screen: 'ONLY 100 USERS WILL BE RETAINED.'",
  },
  {
    name: "W(hack)o Cracko Brothers Tee",
    detail: "Two twins, one telephone line, 300/1200 baud.",
  },
  {
    name: "Built Layer by Layer Poster",
    detail:
      "The full journey: Community → Network → Infrastructure → Distribution → Intelligence.",
  },
];

export default function StorePage() {
  return (
    <>
      <ChapterHero
        eyebrow="Store"
        title="The Built Before Cloud Store"
        subtitle={
          <p>
            Original merchandise inspired by the archive. Opening soon—powered,
            naturally, by Platformz commerce infrastructure.
          </p>
        }
      />

      <div className="mx-auto max-w-4xl px-4 py-16">
        <div className="grid gap-6 sm:grid-cols-3">
          {upcoming.map((product) => (
            <div
              key={product.name}
              className="panel p-6"
            >
              <p className="font-mono text-[10px] uppercase tracking-widest text-warm-copper">
                Coming Soon
              </p>
              <h2 className="mt-3 font-headline text-lg font-bold">
                {product.name}
              </h2>
              <p className="mt-2 text-sm text-technical-gray">
                {product.detail}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-12 panel p-4 text-center font-mono text-xs leading-relaxed text-technical-gray">
          All store items use original Built Before Cloud designs. Third-party
          logos are never used as store identity. No endorsement or current
          affiliation with any company named in this project is implied.
        </p>
      </div>
    </>
  );
}
