import { Reveal } from "@/components/motion/reveal";
import { Divider } from "@/components/brand/divider";

/** En-tête éditorial sobre pour les pages intérieures. */
export function PageHero({
  eyebrow,
  title,
  lede,
  children,
}: {
  eyebrow?: string;
  title: string;
  lede?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="border-b border-marron/10 bg-cream-soft">
      <div className="mx-auto max-w-[1400px] px-4 py-14 sm:px-6 sm:py-20">
        <Reveal>
          {eyebrow && (
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-bordeaux">
              {eyebrow}
            </p>
          )}
          <h1 className="max-w-3xl font-[family-name:var(--font-display)] text-[clamp(2.2rem,5vw,3.6rem)] leading-[1.05] text-encre text-balance">
            {title}
          </h1>
          {lede && (
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-gris text-pretty">{lede}</p>
          )}
          {children && <div className="mt-7">{children}</div>}
        </Reveal>
        <Divider dot className="mt-12" />
      </div>
    </section>
  );
}
