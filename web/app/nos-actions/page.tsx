import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Sparkles, CalendarRange } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { SectionTitle, SectionLede } from "@/components/brand/section-title";
import { FramedImage } from "@/components/brand/framed-image";
import { DonationCallout } from "@/components/sections/donation-callout";
import { PageHero } from "@/components/sections/page-hero";
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

/** Bloc zigzag image / texte (alterné via reverse). */
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
      <div className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6 sm:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal className={reverse ? "lg:order-2" : undefined}>
            <FramedImage
              src={action.image}
              alt={action.titre}
              ratio="3/4"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </Reveal>
          <Reveal delay={0.1} className={reverse ? "lg:order-1" : undefined}>
            <Badge variant="sable" className="mb-4">
              {action.rythme}
            </Badge>
            <SectionTitle as="h2">{action.titre}</SectionTitle>
            <p className="mt-5 text-lg leading-relaxed text-gris text-pretty">{action.detail}</p>
            <FinanceLink finance={action.finance} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default function NosActionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Sur le terrain"
        title="Nos actions, nos missions"
        lede="Des actions concrètes, régulières, au plus près des besoins. Voici comment Que du Kheir agit, mois après mois, et ce que chaque geste permet de financer."
      />

      {/* 1 — Maraudes (zigzag) */}
      <Zigzag action={maraudes} bg="cream" />

      {/* 2 — Kits d'hygiène : section pleine largeur, signature bordeaux */}
      <section id={kits.slug} className="bg-cream">
        <div className="mx-auto max-w-[1400px] px-4 pb-16 sm:px-6 sm:pb-24">
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
                  <h2 className="mt-5 font-[family-name:var(--font-display)] text-[clamp(1.9rem,4vw,3rem)] leading-[1.05] text-cream">
                    {kits.titre}
                  </h2>
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
                <FramedImage
                  src={kits.image}
                  alt={kits.titre}
                  ratio="4/3"
                  className="ring-1 ring-cream/15"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 3 — Fournitures scolaires (zigzag) */}
      <Zigzag action={scolaire} reverse bg="cream-soft" />

      {/* 4 — Lutte contre l'exclusion (zigzag) */}
      <Zigzag action={exclusion} bg="cream" />

      {/* ===================== PROJETS 2026-2027 ===================== */}
      <section className="border-y border-marron/10 bg-cream-soft">
        <div className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6 sm:py-24">
          <Reveal>
            <SectionTitle eyebrow="Ce qui arrive" as="h2">
              Nos projets 2026-2027
            </SectionTitle>
            <SectionLede>
              Au-delà de l'urgence, nous préparons des actions de fond. Des idées qui nous tiennent à
              cœur, et que vos dons aideront à concrétiser.
            </SectionLede>
          </Reveal>

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

      {/* ===================== DON ===================== */}
      <section className="bg-cream">
        <div className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6 sm:py-24">
          <DonationCallout />
        </div>
      </section>
    </>
  );
}
