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
      className={`rv-children mx-auto max-w-3xl px-5 py-20 text-[1.0625rem] leading-[1.85] text-archive-paper/85 [&_h2]:font-headline [&_h2]:text-[1.75rem] [&_h2]:font-bold [&_h2]:tracking-[-0.01em] [&_h2]:text-archive-paper [&_h2]:mt-16 [&_h2]:mb-5 [&_h3]:font-headline [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-archive-paper [&_h3]:mt-10 [&_h3]:mb-3 [&_p]:my-4 [&_ul]:my-5 [&_ul]:list-none [&_ul]:pl-0 [&_ul>li]:relative [&_ul>li]:my-2 [&_ul>li]:pl-6 [&_ul>li]:before:absolute [&_ul>li]:before:left-0 [&_ul>li]:before:top-[0.72em] [&_ul>li]:before:h-[5px] [&_ul>li]:before:w-[5px] [&_ul>li]:before:rounded-full [&_ul>li]:before:bg-electric-cyan/70 [&_ol]:my-5 [&_ol]:pl-6 ${className}`}
    >
      {children}
    </div>
  );
}
