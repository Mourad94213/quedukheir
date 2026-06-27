import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Heart, HandHeart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { StatCounter } from "@/components/motion/stat-counter";
import { SectionTitle, SectionLede } from "@/components/brand/section-title";
import { Divider } from "@/components/brand/divider";
import { FramedImage } from "@/components/brand/framed-image";
import { ValueGrid } from "@/components/sections/values";
import { DonationCallout } from "@/components/sections/donation-callout";
import { PageHero } from "@/components/sections/page-hero";
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
      <PageHero
        eyebrow="L'association"
        title="Une jeunesse qui choisit d'agir."
        lede="Que du Kheir est une association loi 1901, née en 2025 en Seine-Saint-Denis et à Paris. Portée par une jeunesse engagée, elle lutte contre la précarité et l'exclusion, sous toutes leurs formes : sociale, culturelle, administrative."
      />

      {/* ===================== NOTRE RAISON D'ÊTRE ===================== */}
      <section className="bg-cream">
        <div className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6 sm:py-24">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <Reveal>
              <SectionTitle as="h2">Notre raison d'être</SectionTitle>
              <div className="mt-6 space-y-5 text-lg leading-relaxed text-gris text-pretty">
                <p>
                  Tout part d'un constat simple : autour de nous, dans le 93 comme à Paris, des
                  personnes vivent la rue, l'isolement ou les fins de mois impossibles. Et juste à
                  côté, des jeunes qui veulent aider, concrètement, sans attendre.
                </p>
                <p>
                  Que du Kheir réunit ces énergies. Pas de grands discours : une présence régulière
                  sur le terrain, des maraudes, des kits d'hygiène, des fournitures pour la rentrée.
                  On agit avec ce qu'on a, et on rend compte de ce qu'on fait.
                </p>
                <p>
                  L'exigence qui nous guide tient en un mot : la dignité. La personne avant la
                  situation, toujours.
                </p>
              </div>
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

            <Reveal delay={0.12}>
              <FramedImage
                src="/images/terrain-1.jpg"
                alt="L'équipe de bénévoles de Que du Kheir en marche sur le terrain"
                ratio="3/4"
                caption="L'équipe, sur le terrain"
                scrim
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===================== NOS VALEURS ===================== */}
      <section className="border-y border-marron/10 bg-cream-soft">
        <div className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6 sm:py-24">
          <Reveal>
            <SectionTitle as="h2">Nos valeurs</SectionTitle>
            <SectionLede>
              Cinq repères simples qui guident chacune de nos décisions et chacune de nos sorties.
            </SectionLede>
          </Reveal>
          <div className="mt-12">
            <ValueGrid />
          </div>
        </div>
      </section>

      {/* ===================== LE BUREAU ET LES ADHÉRENTS ===================== */}
      <section className="bg-cream">
        <div className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6 sm:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <Reveal>
              <SectionTitle eyebrow="L'équipe" as="h2">
                Le bureau et les adhérents
              </SectionTitle>
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
            </Reveal>

            <RevealGroup className="grid gap-4 sm:grid-cols-2">
              {BUREAU.map((m) => (
                <RevealItem key={m.nom + m.role}>
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
          <Divider dot className="mt-14" />
        </div>
      </section>

      {/* ===================== OÙ NOUS AGISSONS ===================== */}
      <section className="bg-marron text-cream">
        <div className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6 sm:py-24">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
            <Reveal>
              <SectionTitle as="h2" tone="light">
                Où nous agissons
              </SectionTitle>
              <SectionLede tone="light">
                Notre terrain, c'est l'Île-de-France de proximité : la Seine-Saint-Denis en premier
                lieu, et Paris au gré des maraudes et des besoins.
              </SectionLede>
            </Reveal>

            <RevealGroup className="grid gap-4 sm:grid-cols-2">
              <RevealItem>
                <div className="flex h-full flex-col rounded-2xl bg-cream/10 p-6">
                  <MapPin className="size-7 text-cream" />
                  <h3 className="mt-4 font-[family-name:var(--font-serif)] text-xl font-bold text-cream">
                    Seine-Saint-Denis (93)
                  </h3>
                  <p className="mt-2 text-cream/80">
                    Notre point d'ancrage principal : maraudes, collectes et distributions au plus
                    près des habitants.
                  </p>
                </div>
              </RevealItem>
              <RevealItem>
                <div className="flex h-full flex-col rounded-2xl bg-cream/10 p-6">
                  <MapPin className="size-7 text-cream" />
                  <h3 className="mt-4 font-[family-name:var(--font-serif)] text-xl font-bold text-cream">
                    Paris
                  </h3>
                  <p className="mt-2 text-cream/80">
                    Là où la rue concentre les besoins : nos équipes y poursuivent régulièrement
                    leurs sorties.
                  </p>
                </div>
              </RevealItem>
            </RevealGroup>
          </div>
        </div>
      </section>

      {/* ===================== DOUBLE CTA (don + bénévole) ===================== */}
      <section className="bg-cream">
        <div className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6 sm:py-24">
          <DonationCallout />
          <Reveal>
            <div className="mt-6 flex flex-col items-center justify-between gap-6 rounded-3xl border border-marron/10 bg-cream-soft p-8 text-center sm:flex-row sm:text-left sm:p-10">
              <div className="flex items-start gap-4">
                <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-full bg-bordeaux/10 text-bordeaux">
                  <HandHeart className="size-6" />
                </span>
                <div>
                  <h2 className="font-[family-name:var(--font-serif)] text-xl font-bold text-encre">
                    Envie de nous rejoindre ?
                  </h2>
                  <p className="mt-1.5 text-gris">
                    Quelques heures par mois suffisent. On vous recontacte simplement, via WhatsApp.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg">
                  <Link href="/benevoles">
                    <Heart className="size-5" />
                    Devenir bénévole
                  </Link>
                </Button>
                <Button asChild size="lg" variant="secondary">
                  <Link href="/nos-actions">
                    Voir nos actions
                    <ArrowRight className="size-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
