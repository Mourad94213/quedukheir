import type { Metadata } from "next";
import Link from "next/link";
import { Info, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/motion/reveal";
import { SectionTitle, SectionLede } from "@/components/brand/section-title";
import { PageHero } from "@/components/sections/page-hero";
import { AgendaList } from "@/components/sections/agenda";

export const metadata: Metadata = {
  title: "Agenda des maraudes",
  description:
    "Les prochaines maraudes, distributions et actions logistiques de Que du Kheir en Seine-Saint-Denis et à Paris.",
};

const TYPES = [
  {
    label: "Maraude",
    desc: "À la rencontre des personnes à la rue : repas, kits, écoute.",
  },
  {
    label: "Distribution",
    desc: "Remise de kits d'hygiène ou de fournitures sur un point fixe.",
  },
  {
    label: "Logistique",
    desc: "Préparation, tri et collecte en coulisses, au local.",
  },
];

export default function AgendaPage() {
  return (
    <>
      <PageHero
        eyebrow="Calendrier"
        title="Prochaines maraudes et actions"
        lede="Retrouvez nos sorties à venir en Seine-Saint-Denis et à Paris (Stalingrad, Gare du Nord, Saint-Denis, Aubervilliers). Quelques heures suffisent pour donner un coup de main."
      />

      {/* ===================== LISTE COMPLÈTE ===================== */}
      <section className="bg-cream">
        <div className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6 sm:py-24">
          <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:items-start">
            <div>
              <Reveal>
                <SectionTitle as="h2">Toutes les dates à venir</SectionTitle>
                <SectionLede>
                  Chaque sortie a un nombre de places limité, pour rester efficaces sur le terrain.
                </SectionLede>
              </Reveal>
              <div className="mt-8">
                <AgendaList />
              </div>
            </div>

            {/* Légende des types + note honnête */}
            <div className="lg:sticky lg:top-28">
              <Reveal delay={0.1}>
                <div className="rounded-3xl border border-marron/10 bg-cream-soft p-6 shadow-soft sm:p-8">
                  <h3 className="font-[family-name:var(--font-serif)] text-xl font-bold text-encre">
                    Les types d'action
                  </h3>
                  <ul className="mt-5 space-y-4">
                    {TYPES.map((t) => (
                      <li key={t.label} className="flex items-start gap-3">
                        <Badge variant="sable" className="mt-0.5 shrink-0">
                          {t.label}
                        </Badge>
                        <p className="text-sm text-gris">{t.desc}</p>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex items-start gap-3 rounded-2xl border border-marron/10 bg-cream p-4">
                    <Info className="mt-0.5 size-5 shrink-0 text-bordeaux" />
                    <p className="text-sm text-gris">
                      Dates indicatives, à confirmer. Les lieux et horaires précis sont communiqués
                      à l'équipe, en général via WhatsApp.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== ENCART CONTACT ===================== */}
      <section className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6 sm:py-24">
        <Reveal>
          <div className="grid items-center gap-8 rounded-3xl border border-marron/10 bg-cream-soft p-8 sm:p-12 lg:grid-cols-[1.5fr_1fr]">
            <div>
              <SectionTitle as="h2">Une question sur nos actions ?</SectionTitle>
              <SectionLede>
                Écrivez-nous pour en savoir plus sur une sortie précise ou sur la manière dont nous
                intervenons sur le terrain. Nous répondons à chacun.
              </SectionLede>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <Button asChild size="lg">
                <Link href="/contact">
                  Nous contacter
                  <ArrowRight className="size-5" />
                </Link>
              </Button>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
