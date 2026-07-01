import type { ReactNode } from "react";
import { SplitHeading } from "@/components/anim/split-heading";
import { Reveal } from "@/components/motion/reveal";
import { Divider } from "@/components/brand/divider";

/**
 * En-tête éditorial ANIMÉ pour les pages de la VITRINE (accueil, histoire,
 * actions, galerie, blog). Titre en capitales qui se compose (SplitText).
 * Les pages SOBRES (don, transparence, formulaires) gardent <PageHero>.
 */
export function VitrineHero({
  eyebrow,
  title,
  lede,
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  lede?: string;
  children?: ReactNode;
}) {
  return (
    <section className="border-b border-marron/10 bg-cream-soft">
      <div className="mx-auto max-w-[1500px] px-4 py-16 sm:px-6 sm:py-24">
        {eyebrow && (
          <Reveal y={12}>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-bordeaux">
              {eyebrow}
            </p>
          </Reveal>
        )}
        <SplitHeading
          as="h1"
          type="lines"
          yPercent={120}
          stagger={0.13}
          duration={1.05}
          className="max-w-4xl font-[family-name:var(--font-display)] uppercase leading-[0.92] tracking-[-0.02em] text-[clamp(2.4rem,6.5vw,5rem)] text-encre"
        >
          {title}
        </SplitHeading>
        {lede && (
          <Reveal y={18} delay={0.4}>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-gris text-pretty sm:text-xl">
              {lede}
            </p>
          </Reveal>
        )}
        {children && (
          <Reveal delay={0.5}>
            <div className="mt-8">{children}</div>
          </Reveal>
        )}
        <Divider dot className="mt-14" />
      </div>
    </section>
  );
}
