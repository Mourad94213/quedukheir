import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, ArrowRight, FileCheck2, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { SectionTitle, SectionLede } from "@/components/brand/section-title";
import { PageHero } from "@/components/sections/page-hero";
import { TransparencyDashboard } from "@/components/transparency/dashboard";

export const metadata: Metadata = {
  title: "Notre transparence",
  description:
    "Où va votre argent : répartition des dons, actions financées et suivi des projets de Que du Kheir. La confiance se prouve.",
};

export default function TransparencePage() {
  return (
    <>
      <PageHero
        eyebrow="Notre engagement"
        title="Où va votre argent."
        lede="La confiance se mérite, elle se prouve. Voici, en toute clarté, comment vos dons sont répartis et dépensés."
      />

      {/* ===================== ADRESSE AUX PARTENAIRES ===================== */}
      <section className="bg-cream">
        <div className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6 sm:py-24">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
            <Reveal>
              <SectionTitle as="h2">
                Une jeune association, des comptes ouverts.
              </SectionTitle>
              <SectionLede>
                Que du Kheir est une association loi 1901, portée par un bureau de quatre personnes
                et une jeunesse engagée. Aux mairies, institutions et partenaires qui nous lisent :
                nous croyons qu'une aide sérieuse passe par des comptes lisibles. Chaque euro reçu
                est suivi, affecté à une action, puis justifié. C'est notre façon de rendre des comptes,
                avant même qu'on nous le demande.
              </SectionLede>
            </Reveal>

            <Reveal delay={0.12}>
              <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                {[
                  {
                    icon: <Eye className="size-5" />,
                    titre: "Un aperçu public",
                    texte: "Répartition des dons et suivi des projets, consultables sans connexion.",
                  },
                  {
                    icon: <FileCheck2 className="size-5" />,
                    titre: "Chaque dépense justifiée",
                    texte: "Datée, rattachée à un poste, détaillée dans l'espace adhérent.",
                  },
                  {
                    icon: <ShieldCheck className="size-5" />,
                    titre: "Au service du terrain",
                    texte: "L'essentiel des dons part directement vers les maraudes et les collectes.",
                  },
                ].map((b) => (
                  <li
                    key={b.titre}
                    className="flex items-start gap-4 rounded-2xl border border-marron/10 bg-cream-soft p-5 shadow-soft"
                  >
                    <span className="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-full bg-bordeaux/10 text-bordeaux">
                      {b.icon}
                    </span>
                    <div>
                      <p className="font-semibold text-encre">{b.titre}</p>
                      <p className="mt-1 text-sm text-gris">{b.texte}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===================== DASHBOARD (public) ===================== */}
      <section className="bg-cream-soft">
        <div className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6 sm:py-24">
          <Reveal>
            <SectionTitle as="h2">Le tableau de bord, en clair</SectionTitle>
            <SectionLede>
              Dons récoltés, affectation par poste, avancement des campagnes : tout est ici. Les
              montants affichés sont des exemples de démonstration, le mécanisme, lui, est bien réel.
            </SectionLede>
          </Reveal>
          <div className="mt-10">
            <TransparencyDashboard variant="public" />
          </div>
        </div>
      </section>

      {/* ===================== INVITATION ADHÉRENTS ===================== */}
      <section className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6 sm:py-24">
        <Reveal>
          <div className="overflow-hidden rounded-3xl bg-marron px-6 py-12 text-cream sm:px-12 sm:py-16">
            <div className="mx-auto max-w-2xl text-center">
              <SectionTitle as="h2" tone="light" align="center">
                Le détail complet pour nos adhérents
              </SectionTitle>
              <p className="mt-4 text-cream/80">
                Évolution mensuelle des dons et journal détaillé des dépenses, ligne par ligne, sont
                réservés à l'espace adhérent. Les reçus fiscaux sont à venir.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button asChild size="lg" variant="onDark">
                  <Link href="/connexion">
                    Accéder à l'espace adhérent
                    <ArrowRight className="size-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outlineDark">
                  <Link href="/contact">Nous poser une question</Link>
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
