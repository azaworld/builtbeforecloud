/** Standard reading column for chapter body copy. */
export default function Prose({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`mx-auto max-w-3xl px-4 py-16 text-base leading-relaxed text-archive-paper/90 [&_h2]:font-headline [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-archive-paper [&_h2]:mt-12 [&_h2]:mb-4 [&_h3]:font-headline [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-archive-paper [&_h3]:mt-8 [&_h3]:mb-3 [&_p]:my-4 [&_ul]:my-4 [&_ul]:list-disc [&_ul]:pl-6 [&_li]:my-1 ${className}`}
    >
      {children}
    </div>
  );
}
