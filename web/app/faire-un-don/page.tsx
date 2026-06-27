import type { Metadata } from "next";
import Link from "next/link";
import {
  Heart,
  Repeat,
  ExternalLink,
  ArrowRight,
  ShieldCheck,
  Droplets,
  GraduationCap,
  Backpack,
  Mail,
  Info,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { DemoNotice } from "@/components/ui/demo-notice";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { SectionTitle, SectionLede } from "@/components/brand/section-title";
import { PageHero } from "@/components/sections/page-hero";
import { NeedsList } from "@/components/sections/needs-list";
import { TRANSPARENCE_RESUME } from "@/lib/data";
import { SITE } from "@/lib/site";
import { euros, pct } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Faire un don",
  description:
    "Soutenez Que du Kheir : don ponctuel ou mensuel via HelloAsso, dons matériels, et le détail de ce que finance votre geste.",
};

const FINANCE = [
  {
    montant: "5 €",
    titre: "Un kit d'hygiène",
    texte: "De quoi prendre soin de soi quand la rue rend tout difficile.",
    icon: <Droplets className="size-5" />,
  },
  {
    montant: "35 €",
    titre: "Un cartable garni",
    texte: "Pour qu'un enfant aborde la rentrée comme les autres.",
    icon: <Backpack className="size-5" />,
  },
  {
    montant: "230 €",
    titre: "Une maraude",
    texte: "Repas chauds et transport pour une sortie complète sur le terrain.",
    icon: <GraduationCap className="size-5" />,
  },
];

export default function FaireUnDonPage() {
  const campagnePct = pct(
    TRANSPARENCE_RESUME.campagneAtteint,
    TRANSPARENCE_RESUME.campagneObjectif,
  );

  return (
    <>
      <PageHero
        eyebrow="Soutenir"
        title="Votre don agit, ici, maintenant."
        lede="Chaque euro se transforme en présence réelle sur le terrain : un kit d'hygiène, un repas chaud, un cartable. Vous donnez, nous agissons, et nous vous montrons où va l'argent."
      >
        <div className="flex flex-wrap items-center gap-3">
          <Button asChild variant="secondary">
            <Link href="/transparence">
              Voir où va l'argent
              <ArrowRight className="size-5" />
            </Link>
          </Button>
          <span className="text-sm text-gris">
            Le paiement se fait en toute sécurité sur HelloAsso.
          </span>
        </div>
      </PageHero>

      {/* ===================== DON EN LIGNE (2 cartes HelloAsso) ===================== */}
      <section className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6 sm:py-24">
        <Reveal>
          <SectionTitle eyebrow="Don en ligne">Choisissez votre façon d'aider</SectionTitle>
          <SectionLede>
            Que ce soit une fois ou chaque mois, votre soutien compte. Vous serez redirigé·e vers
            HelloAsso : le paiement n'a jamais lieu sur ce site, mais sur leur plateforme sécurisée.
          </SectionLede>
        </Reveal>

        <RevealGroup className="mt-12 grid gap-6 lg:grid-cols-2">
          <RevealItem>
            <Card className="flex h-full flex-col p-8 sm:p-10">
              <span className="inline-flex size-12 items-center justify-center rounded-full bg-bordeaux/10 text-bordeaux">
                <Heart className="size-6" />
              </span>
              <h3 className="mt-5 font-[family-name:var(--font-serif)] text-2xl font-bold text-encre">
                Don ponctuel
              </h3>
              <p className="mt-3 text-gris">
                Un geste unique, libre, du montant que vous souhaitez. Idéal pour répondre à un
                appel ou soutenir une campagne en cours.
              </p>
              <div className="mt-8">
                {/* TODO(build réel): URL HelloAsso réelle */}
                <Button asChild size="lg" className="w-full sm:w-auto">
                  <a href={SITE.helloAsso} target="_blank" rel="noopener noreferrer">
                    <Heart className="size-5" />
                    Donner une fois
                    <ExternalLink className="size-4" />
                  </a>
                </Button>
              </div>
            </Card>
          </RevealItem>

          <RevealItem>
            <Card className="flex h-full flex-col border-bordeaux/30 bg-cream p-8 sm:p-10">
              <div className="flex items-center justify-between">
                <span className="inline-flex size-12 items-center justify-center rounded-full bg-bordeaux/10 text-bordeaux">
                  <Repeat className="size-6" />
                </span>
                <Badge variant="sable">Le plus utile</Badge>
              </div>
              <h3 className="mt-5 font-[family-name:var(--font-serif)] text-2xl font-bold text-encre">
                Don mensuel
              </h3>
              <p className="mt-3 text-gris">
                Un soutien régulier, même modeste, nous permet de prévoir nos maraudes et nos
                collectes dans la durée. Vous restez libre d'arrêter à tout moment.
              </p>
              <div className="mt-8">
                {/* TODO(build réel): URL HelloAsso réelle */}
                <Button asChild size="lg" className="w-full sm:w-auto">
                  <a href={SITE.helloAssoRecurrent} target="_blank" rel="noopener noreferrer">
                    <Repeat className="size-5" />
                    Donner chaque mois
                    <ExternalLink className="size-4" />
                  </a>
                </Button>
              </div>
            </Card>
          </RevealItem>
        </RevealGroup>

        <p className="mt-6 flex items-start gap-2 text-sm text-gris">
          <Info className="mt-0.5 size-4 shrink-0 text-bordeaux" aria-hidden />
          Le paiement se déroule sur HelloAsso, plateforme dédiée aux associations. Nous ne
          collectons ni ne stockons vos coordonnées bancaires.
        </p>
      </section>

      {/* ===================== CE QUE FINANCE VOTRE DON ===================== */}
      <section className="bg-cream-soft">
        <div className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6 sm:py-24">
          <Reveal>
            <SectionTitle>Ce que finance votre don</SectionTitle>
            <SectionLede>
              Des ordres de grandeur simples, pour visualiser concrètement votre geste.
            </SectionLede>
          </Reveal>
          <RevealGroup className="mt-12 grid gap-5 sm:grid-cols-3">
            {FINANCE.map((f) => (
              <RevealItem key={f.montant}>
                <Card className="flex h-full flex-col p-6">
                  <span className="inline-flex size-11 items-center justify-center rounded-full bg-bordeaux/10 text-bordeaux">
                    {f.icon}
                  </span>
                  <p className="mt-4 font-[family-name:var(--font-display)] text-3xl text-bordeaux">
                    {f.montant}
                  </p>
                  <h3 className="mt-1 font-[family-name:var(--font-serif)] text-lg font-bold text-encre">
                    {f.titre}
                  </h3>
                  <p className="mt-2 text-sm text-gris">{f.texte}</p>
                </Card>
              </RevealItem>
            ))}
          </RevealGroup>
          <p className="mt-6 text-sm text-gris-soft">
            Estimations indicatives (≈), pour donner une idée. Les montants exacts varient selon les
            achats et les dons reçus.
          </p>
        </div>
      </section>

      {/* ===================== CAMPAGNE DU MOIS ===================== */}
      <section className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6 sm:py-24">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <Reveal>
            <SectionTitle eyebrow="Campagne du mois">
              On y est presque, ensemble.
            </SectionTitle>
            <SectionLede>
              Notre objectif du moment est à portée de main. Chaque don nous en rapproche un peu
              plus. Merci à celles et ceux qui ont déjà contribué.
            </SectionLede>
            <Button asChild size="lg" className="mt-8">
              {/* TODO(build réel): URL HelloAsso réelle */}
              <a href={SITE.helloAsso} target="_blank" rel="noopener noreferrer">
                <Heart className="size-5" />
                Soutenir la campagne
                <ExternalLink className="size-4" />
              </a>
            </Button>
          </Reveal>

          <Reveal delay={0.12}>
            <Card className="p-7 sm:p-8">
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-[family-name:var(--font-serif)] text-xl font-bold text-encre">
                  {TRANSPARENCE_RESUME.campagneMois}
                </h3>
                <Badge variant="demo">Démo</Badge>
              </div>
              <div className="mt-6 flex items-end justify-between">
                <p className="font-[family-name:var(--font-display)] text-3xl text-bordeaux">
                  {euros(TRANSPARENCE_RESUME.campagneAtteint)}
                </p>
                <p className="text-sm text-gris">
                  sur {euros(TRANSPARENCE_RESUME.campagneObjectif)}
                </p>
              </div>
              <Progress
                value={campagnePct}
                label={`Campagne : ${campagnePct}% de l'objectif atteint`}
                className="mt-3"
              />
              <p className="mt-2 text-sm font-semibold text-encre">
                {campagnePct}% de l'objectif atteint
              </p>
              <div className="mt-6">
                <DemoNotice compact />
              </div>
            </Card>
          </Reveal>
        </div>
      </section>

      {/* ===================== DONS MATÉRIELS ===================== */}
      <section className="bg-cream-soft">
        <div className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6 sm:py-24">
          <Reveal>
            <SectionTitle>Donner du matériel, ça aide aussi</SectionTitle>
            <SectionLede>
              Pas envie de donner en ligne ? Vos dons en nature comptent tout autant. Voici ce dont
              nous avons le plus besoin en ce moment.
            </SectionLede>
          </Reveal>
          <div className="mt-12">
            <NeedsList />
          </div>
          <p className="mt-6 flex flex-wrap items-center gap-2 text-sm text-gris">
            <Mail className="size-4 shrink-0 text-bordeaux" aria-hidden />
            Point de collecte et modalités de remise à discuter ensemble : écrivez-nous à{" "}
            <a
              href={`mailto:${SITE.email}`}
              className="font-semibold text-bordeaux underline-offset-2 hover:underline"
            >
              {SITE.email}
            </a>
            .
          </p>
        </div>
      </section>

      {/* ===================== REÇUS FISCAUX (honnêteté) ===================== */}
      <section className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6 sm:py-24">
        <Reveal>
          <Card className="grid gap-6 p-8 sm:p-10 lg:grid-cols-[auto_1fr] lg:items-center">
            <span className="inline-flex size-14 items-center justify-center rounded-full bg-bordeaux/10 text-bordeaux">
              <ShieldCheck className="size-7" />
            </span>
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="font-[family-name:var(--font-serif)] text-xl font-bold text-encre">
                  Reçus fiscaux : à venir
                </h3>
                <Badge variant="alerte">En cours</Badge>
              </div>
              <p className="mt-3 max-w-2xl text-gris">
                Nos statuts sont en cours de validation auprès de la préfecture. Tant que cette étape
                n'est pas finalisée, nous préférons être clairs : nous ne pouvons pas encore vous
                promettre de reçu donnant droit à une réduction d'impôt. Dès que ce sera officiel,
                nous mettrons cette page à jour. Votre confiance, on ne la prend jamais à la légère.
              </p>
            </div>
          </Card>
        </Reveal>
      </section>
    </>
  );
}
