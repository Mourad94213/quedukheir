import type { Metadata } from "next";
import Image from "next/image";
import { MapPin } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { StatCounter } from "@/components/motion/stat-counter";
import { SectionLede } from "@/components/brand/section-title";
import { Divider } from "@/components/brand/divider";
import { DonationCallout } from "@/components/sections/donation-callout";
import { ValueGrid } from "@/components/sections/values";
import { VitrineHero } from "@/components/sections/vitrine-hero";
import { SplitHeading } from "@/components/anim/split-heading";
import { NarrativeText } from "@/components/anim/narrative-text";
import { RevealMask } from "@/components/anim/reveal-mask";
import { Parallax } from "@/components/anim/parallax";
import { BUREAU } from "@/lib/data";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Qui sommes-nous",
  description:
    "Que du Kheir, association loi 1901 créée en 2025 en Seine-Saint-Denis et à Paris. Une jeunesse engagée contre la précarité et l'exclusion, sous toutes leurs formes.",
};

export default function QuiSommesNousPage() {
  return (
    <>
      <VitrineHero
        eyebrow="L'association"
        title="Une jeunesse qui choisit d'agir."
        lede="Que du Kheir est une association loi 1901, née en 2025 en Seine-Saint-Denis et à Paris. Portée par une jeunesse engagée, elle lutte contre la précarité et l'exclusion, sous toutes leurs formes : sociale, culturelle, administrative."
      />

      {/* ===================== NOTRE RAISON D'ÊTRE ===================== */}
      <section className="bg-cream">
        <div className="mx-auto max-w-[1500px] px-4 py-20 sm:px-6 sm:py-28">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">
            <div>
              <SplitHeading
                as="h2"
                scroll
                type="lines"
                className="font-[family-name:var(--font-display)] uppercase leading-[0.95] text-[clamp(1.9rem,5vw,3.4rem)] text-encre"
              >
                Notre raison d'être
              </SplitHeading>
              <NarrativeText
                as="p"
                className="mt-7 font-[family-name:var(--font-serif)] text-[clamp(1.3rem,2.6vw,1.9rem)] font-medium leading-[1.3] text-encre text-balance"
              >
                Autour de nous, dans le 93 comme à Paris, des personnes vivent la rue, l'isolement ou
                les fins de mois impossibles. Et juste à côté, des jeunes qui veulent aider,
                concrètement, sans attendre.
              </NarrativeText>
              <div className="mt-6 space-y-5 text-lg leading-relaxed text-gris text-pretty">
                <Reveal>
                  <p>
                    Que du Kheir réunit ces énergies. Pas de grands discours : une présence régulière
                    sur le terrain, des maraudes, des kits d'hygiène, des fournitures pour la rentrée.
                    On agit avec ce qu'on a, et on rend compte de ce qu'on fait.
                  </p>
                </Reveal>
                <Reveal delay={0.08}>
                  <p>
                    L'exigence qui nous guide tient en un mot : la dignité. La personne avant la
                    situation, toujours.
                  </p>
                </Reveal>
              </div>
              <Reveal delay={0.12}>
                <figure className="mt-9 rounded-2xl border border-marron/10 bg-cream-soft p-6 sm:p-7">
                  <blockquote className="font-[family-name:var(--font-serif)] text-xl leading-snug text-encre">
                    « Kheir », c'est le bien, au sens large : la bonté, le geste juste.
                  </blockquote>
                  <figcaption className="mt-3 text-sm text-gris">
                    Un mot universel, choisi pour ce qu'il dit de notre intention. L'association est
                    laïque et ouverte à toutes et tous.
                  </figcaption>
                </figure>
              </Reveal>
            </div>

            <Parallax speed={0.16}>
              <RevealMask
                direction="up"
                className="relative overflow-hidden rounded-[1.75rem] bg-marron shadow-lift"
              >
                <div className="relative aspect-[3/4]">
                  <Image
                    src="/images/terrain-1.jpg"
                    alt="L'équipe de bénévoles de Que du Kheir en marche sur le terrain"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                  <div className="scrim-warm absolute inset-0" aria-hidden />
                  <figcaption className="absolute inset-x-0 bottom-0 p-5 text-sm font-medium text-cream">
                    L'équipe, sur le terrain
                  </figcaption>
                </div>
              </RevealMask>
            </Parallax>
          </div>
        </div>
      </section>

      {/* ===================== NOS VALEURS ===================== */}
      <section className="border-y border-marron/10 bg-cream-soft">
        <div className="mx-auto max-w-[1500px] px-4 py-20 sm:px-6 sm:py-28">
          <SplitHeading
            as="h2"
            scroll
            type="lines"
            className="font-[family-name:var(--font-display)] uppercase leading-[0.95] text-[clamp(1.9rem,5vw,3.4rem)] text-encre"
          >
            Nos valeurs
          </SplitHeading>
          <SectionLede>
            Cinq repères simples qui guident chacune de nos décisions et chacune de nos sorties.
          </SectionLede>
          <div className="mt-12">
            <ValueGrid />
          </div>
        </div>
      </section>

      {/* ===================== LE BUREAU ET LES ADHÉRENTS ===================== */}
      <section className="bg-cream">
        <div className="mx-auto max-w-[1500px] px-4 py-20 sm:px-6 sm:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-16">
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-bordeaux">
                L'équipe
              </p>
              <SplitHeading
                as="h2"
                scroll
                type="lines"
                className="font-[family-name:var(--font-display)] uppercase leading-[0.95] text-[clamp(1.8rem,4.5vw,3rem)] text-encre"
              >
                <>
                  Le bureau et
                  <br />
                  les adhérents
                </>
              </SplitHeading>
              <SectionLede>
                Un bureau de quatre personnes anime l'association au quotidien. Les décisions sont
                prises collégialement par le bureau, au service du terrain.
              </SectionLede>
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-marron/10 bg-cream-soft p-6 text-center">
                  <p className="font-[family-name:var(--font-display)] text-[clamp(2rem,4vw,2.75rem)] text-bordeaux">
                    <StatCounter value={SITE.adherents} />
                  </p>
                  <p className="mt-1 text-sm text-gris">adhérents</p>
                </div>
                <div className="rounded-2xl border border-marron/10 bg-cream-soft p-6 text-center">
                  <p className="font-[family-name:var(--font-display)] text-[clamp(2rem,4vw,2.75rem)] text-bordeaux">
                    <StatCounter value={SITE.bureau} />
                  </p>
                  <p className="mt-1 text-sm text-gris">membres du bureau</p>
                </div>
              </div>
            </div>

            <RevealGroup className="grid gap-4 sm:grid-cols-2">
              {BUREAU.map((m, i) => (
                <RevealItem key={`${m.nom}-${m.role}-${i}`}>
                  <div className="flex h-full items-center gap-4 rounded-2xl border border-marron/10 bg-cream-soft p-5">
                    <span
                      className="inline-flex size-14 shrink-0 items-center justify-center rounded-full bg-bordeaux text-cream font-[family-name:var(--font-serif)] text-lg font-bold"
                      aria-hidden
                    >
                      {m.initiales}
                    </span>
                    <div>
                      <p className="font-semibold text-encre">{m.nom}</p>
                      <p className="text-sm text-gris">{m.role}</p>
                    </div>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
          <Divider dot className="mt-16" />
        </div>
      </section>

      {/* ===================== OÙ NOUS AGISSONS (marron) ===================== */}
      <section className="bg-marron text-cream">
        <div className="mx-auto max-w-[1500px] px-4 py-20 sm:px-6 sm:py-28">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-16">
            <div>
              <SplitHeading
                as="h2"
                scroll
                type="lines"
                className="font-[family-name:var(--font-display)] uppercase leading-[0.95] text-[clamp(1.9rem,5vw,3.4rem)] text-cream"
              >
                Où nous agissons
              </SplitHeading>
              <SectionLede tone="light">
                Notre terrain, c'est l'Île-de-France de proximité : la Seine-Saint-Denis en premier
                lieu, et Paris au gré des maraudes et des besoins.
              </SectionLede>
            </div>

            <RevealGroup className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  ville: "Seine-Saint-Denis (93)",
                  texte:
                    "Notre point d'ancrage principal : maraudes, collectes et distributions au plus près des habitants.",
                },
                {
                  ville: "Paris",
                  texte:
                    "Là où la rue concentre les besoins : nos équipes y poursuivent régulièrement leurs sorties.",
                },
              ].map((z) => (
                <RevealItem key={z.ville}>
                  <div className="flex h-full flex-col rounded-2xl bg-cream/10 p-6">
                    <MapPin className="size-7 text-cream" />
                    <h3 className="mt-4 font-[family-name:var(--font-serif)] text-xl font-bold text-cream">
                      {z.ville}
                    </h3>
                    <p className="mt-2 text-cream/80">{z.texte}</p>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </div>
      </section>

      {/* ===================== CTA DON (sobre) ===================== */}
      <section className="bg-cream">
        <div className="mx-auto max-w-[1500px] px-4 py-20 sm:px-6 sm:py-28">
          <DonationCallout />
        </div>
      </section>
    </>
  );
}
