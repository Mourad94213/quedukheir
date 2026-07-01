import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles, CalendarRange } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { SectionLede } from "@/components/brand/section-title";
import { FramedImage } from "@/components/brand/framed-image";
import { DonationCallout } from "@/components/sections/donation-callout";
import { VitrineHero } from "@/components/sections/vitrine-hero";
import { SplitHeading } from "@/components/anim/split-heading";
import { RevealMask } from "@/components/anim/reveal-mask";
import { Parallax } from "@/components/anim/parallax";
import { ACTIONS, PROJETS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Nos actions",
  description:
    "Maraudes mensuelles, kits d'hygiène, fournitures scolaires, lutte contre l'exclusion : découvrez les actions de terrain de Que du Kheir, et nos projets pour 2026-2027.",
};

const maraudes = ACTIONS.find((a) => a.slug === "maraudes")!;
const kits = ACTIONS.find((a) => a.slug === "kits-hygiene")!;
const scolaire = ACTIONS.find((a) => a.slug === "fournitures-scolaires")!;
const exclusion = ACTIONS.find((a) => a.slug === "lutte-exclusion")!;

function FinanceLink({ finance }: { finance: string }) {
  return (
    <Link
      href="/transparence"
      className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-bordeaux underline-offset-4 hover:underline"
    >
      Ce que cela finance : {finance}
      <ArrowRight className="size-4" />
    </Link>
  );
}

/** Bloc zigzag éditorial : image (parallaxe + reveal au masque) / texte (titre composé). */
function Zigzag({
  action,
  reverse = false,
  bg,
}: {
  action: (typeof ACTIONS)[number];
  reverse?: boolean;
  bg: "cream" | "cream-soft";
}) {
  return (
    <section id={action.slug} className={bg === "cream" ? "bg-cream" : "bg-cream-soft"}>
      <div className="mx-auto max-w-[1500px] px-4 py-20 sm:px-6 sm:py-28">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Parallax speed={0.14} className={reverse ? "lg:order-2" : undefined}>
            <RevealMask
              direction={reverse ? "right" : "left"}
              className="relative overflow-hidden rounded-[1.75rem] bg-marron shadow-lift"
            >
              <div className="relative aspect-[4/3] lg:aspect-[3/4]">
                <Image
                  src={action.image}
                  alt={action.titre}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </RevealMask>
          </Parallax>
          <div className={reverse ? "lg:order-1" : undefined}>
            <Reveal y={14}>
              <Badge variant="sable" className="mb-4">
                {action.rythme}
              </Badge>
            </Reveal>
            <SplitHeading
              as="h2"
              scroll
              type="lines"
              className="font-[family-name:var(--font-display)] uppercase leading-[0.96] text-[clamp(1.9rem,4.5vw,3.2rem)] text-encre"
            >
              {action.titre}
            </SplitHeading>
            <Reveal delay={0.1}>
              <p className="mt-5 text-lg leading-relaxed text-gris text-pretty">{action.detail}</p>
              <FinanceLink finance={action.finance} />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function NosActionsPage() {
  return (
    <>
      <VitrineHero
        eyebrow="Sur le terrain"
        title="Nos actions, nos missions"
        lede="Des actions concrètes, régulières, au plus près des besoins. Voici comment Que du Kheir agit, mois après mois, et ce que chaque geste permet de financer."
      />

      {/* 1 — Maraudes */}
      <Zigzag action={maraudes} bg="cream" />

      {/* 2 — Kits d'hygiène : section signature bordeaux, pleine largeur */}
      <section id={kits.slug} className="bg-cream">
        <div className="mx-auto max-w-[1500px] px-4 pb-20 sm:px-6 sm:pb-28">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-bordeaux px-6 py-12 text-cream sm:px-12 sm:py-16">
              <div
                className="pointer-events-none absolute -right-20 -top-20 size-72 rounded-full bg-cream/[0.05]"
                aria-hidden
              />
              <div className="relative grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
                <div>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-cream/15 px-3 py-1 text-xs font-semibold tracking-wide text-cream">
                    <Sparkles className="size-3.5" />
                    Notre signature : {kits.rythme.toLowerCase()}
                  </span>
                  <SplitHeading
                    as="h2"
                    scroll
                    type="lines"
                    className="mt-5 font-[family-name:var(--font-display)] uppercase leading-[1.02] text-[clamp(1.9rem,4vw,3rem)] text-cream"
                  >
                    {kits.titre}
                  </SplitHeading>
                  <p className="mt-5 max-w-xl text-lg leading-relaxed text-cream/85 text-pretty">
                    {kits.detail}
                  </p>
                  <Link
                    href="/transparence"
                    className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-cream underline-offset-4 hover:underline"
                  >
                    Ce que cela finance : {kits.finance}
                    <ArrowRight className="size-4" />
                  </Link>
                </div>
                <RevealMask direction="up" className="overflow-hidden rounded-2xl ring-1 ring-cream/15">
                  <FramedImage
                    src={kits.image}
                    alt={kits.titre}
                    ratio="4/3"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                </RevealMask>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 3 — Fournitures scolaires */}
      <Zigzag action={scolaire} reverse bg="cream-soft" />

      {/* 4 — Lutte contre l'exclusion */}
      <Zigzag action={exclusion} bg="cream" />

      {/* ===================== PROJETS 2026-2027 ===================== */}
      <section className="border-y border-marron/10 bg-cream-soft">
        <div className="mx-auto max-w-[1500px] px-4 py-20 sm:px-6 sm:py-28">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-bordeaux">
            Ce qui arrive
          </p>
          <SplitHeading
            as="h2"
            scroll
            type="lines"
            className="font-[family-name:var(--font-display)] uppercase leading-[0.95] text-[clamp(1.9rem,5vw,3.4rem)] text-encre"
          >
            Nos projets 2026-2027
          </SplitHeading>
          <SectionLede>
            Au-delà de l'urgence, nous préparons des actions de fond. Des idées qui nous tiennent à
            cœur, et que vos dons aideront à concrétiser.
          </SectionLede>

          <RevealGroup className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {PROJETS.map((p) => (
              <RevealItem key={p.titre}>
                <Card className="flex h-full flex-col p-6">
                  <CardHeader className="p-0">
                    <div className="flex items-center gap-2">
                      <CalendarRange className="size-5 text-bordeaux" />
                      <Badge variant="outline">{p.statut}</Badge>
                    </div>
                    <CardTitle className="mt-4">{p.titre}</CardTitle>
                    <CardDescription className="mt-2">{p.resume}</CardDescription>
                  </CardHeader>
                </Card>
              </RevealItem>
            ))}
          </RevealGroup>

          <Reveal delay={0.1}>
            <div className="mt-10">
              <Button asChild variant="secondary">
                <Link href="/transparence">
                  Suivre l'avancement et le financement
                  <ArrowRight className="size-5" />
                </Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===================== DON (sobre) ===================== */}
      <section className="bg-cream">
        <div className="mx-auto max-w-[1500px] px-4 py-20 sm:px-6 sm:py-28">
          <DonationCallout />
        </div>
      </section>
    </>
  );
}
