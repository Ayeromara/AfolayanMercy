import type { PropsWithChildren } from "react";

type SectionProps = PropsWithChildren<{
  id: string;
  title: string;
  subtitle?: string;
}>;

export default function Section({ id, title, subtitle, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-24 py-16 md:py-20">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="mb-10 flex flex-col gap-3">
          <p className="text-xs uppercase tracking-[0.4em] text-ink/60">
            {subtitle ?? "Section"}
          </p>
          <div className="flex items-center gap-4">
            <h2 className="font-[var(--font-display)] text-3xl font-semibold text-ink md:text-4xl">
              {title}
            </h2>
            <div className="h-[2px] w-20 rounded-full bg-mint/70" />
          </div>
        </div>
        {children}
      </div>
    </section>
  );
}
