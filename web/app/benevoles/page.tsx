import type { Metadata } from "next";
import {
  UserPlus,
  MessageCircle,
  HandHeart,
  MapPin,
  Sparkles,
  Eye,
  Clock,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { SectionTitle, SectionLede } from "@/components/brand/section-title";
import { PageHero } from "@/components/sections/page-hero";
import { AgendaList } from "@/components/sections/agenda";
import { VolunteerForm } from "@/components/forms/volunteer-form";

export const metadata: Metadata = {
  title: "Devenir bénévole",
  description:
    "Rejoignez Que du Kheir : quelques heures par mois suffisent. Inscription simple, on vous recontacte via WhatsApp pour votre première action sur le terrain.",
};

const ETAPES = [
  {
    n: "1",
    titre: "Vous vous inscrivez",
    texte:
      "Remplissez le formulaire ci-dessous : nom, contact, disponibilités. Quelques minutes suffisent, sans engagement.",
    icon: <UserPlus className="size-6" />,
  },
  {
    n: "2",
    titre: "On vous recontacte",
    texte:
      "Le bureau vous écrit via WhatsApp pour faire connaissance et vous proposer une action adaptée à vos dispos.",
    icon: <MessageCircle className="size-6" />,
  },
  {
    n: "3",
    titre: "Première action",
    texte:
      "Vous rejoignez une maraude ou une collecte. On vous accueille, on vous guide : aucune expérience requise.",
    icon: <HandHeart className="size-6" />,
  },
];

const POURQUOI = [
  {
    titre: "Du concret, sur le terrain",
    texte:
      "Pas de paperasse à rallonge : vous agissez directement, au contact des personnes que nous aidons.",
    icon: <MapPin className="size-5" />,
  },
  {
    titre: "Une équipe jeune et soudée",
    texte:
      "Une asso portée par une jeunesse engagée, où l'on apprend, où l'on partage, où l'on se sent utile.",
    icon: <Sparkles className="size-5" />,
  },
  {
    titre: "Un impact que vous voyez",
    texte:
      "Vous voyez directement à qui sert votre temps : un repas servi, un kit remis, un sourire rendu.",
    icon: <Eye className="size-5" />,
  },
  {
    titre: "À votre rythme",
    texte:
      "Quelques heures par mois suffisent. Vous donnez le temps que vous pouvez, quand vous le pouvez.",
    icon: <Clock className="size-5" />,
  },
];

export default function BenevolesPage() {
  return (
    <>
      <PageHero
        eyebrow="Rejoignez-nous"
        title="Donnez un peu de votre temps."
        lede="Maraudes, collectes, logistique : il y a une place pour chacun, quelles que soient vos compétences. Quelques heures par mois suffisent à changer une soirée pour quelqu'un."
      />

      {/* ===================== COMMENT ÇA MARCHE (3 étapes) ===================== */}
      <section className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6 sm:py-24">
        <Reveal>
          <SectionTitle eyebrow="Comment ça marche">Trois étapes, c'est tout</SectionTitle>
          <SectionLede>
            On a fait au plus simple. Aujourd'hui, toute la coordination se fait via WhatsApp.
          </SectionLede>
        </Reveal>
        <RevealGroup className="mt-12 grid gap-5 md:grid-cols-3">
          {ETAPES.map((e) => (
            <RevealItem key={e.n}>
              <Card className="flex h-full flex-col p-7">
                <div className="flex items-center gap-4">
                  <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-full bg-bordeaux text-cream font-[family-name:var(--font-display)] text-xl">
                    {e.n}
                  </span>
                  <span className="text-bordeaux">{e.icon}</span>
                </div>
                <h3 className="mt-5 font-[family-name:var(--font-serif)] text-xl font-bold text-encre">
                  {e.titre}
                </h3>
                <p className="mt-2 text-gris">{e.texte}</p>
              </Card>
            </RevealItem>
          ))}
        </RevealGroup>
      </section>

      {/* ===================== POURQUOI NOUS REJOINDRE ===================== */}
      <section className="bg-cream-soft">
        <div className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6 sm:py-24">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-start">
            <Reveal>
              <SectionTitle>Pourquoi nous rejoindre</SectionTitle>
              <SectionLede>
                Donner de son temps, c'est recevoir aussi. Voici ce que nos bénévoles y trouvent.
              </SectionLede>
            </Reveal>
            <RevealGroup className="grid gap-5 sm:grid-cols-2">
              {POURQUOI.map((p) => (
                <RevealItem key={p.titre}>
                  <div className="flex h-full gap-4 rounded-2xl border border-marron/10 bg-cream p-6">
                    <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-bordeaux/10 text-bordeaux">
                      {p.icon}
                    </span>
                    <div>
                      <h3 className="font-[family-name:var(--font-serif)] text-lg font-bold text-encre">
                        {p.titre}
                      </h3>
                      <p className="mt-1.5 text-sm text-gris">{p.texte}</p>
                    </div>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </div>
      </section>

      {/* ===================== FORMULAIRE ===================== */}
      <section className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6 sm:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <Reveal>
            <SectionTitle>Votre demande</SectionTitle>
            <SectionLede>
              Laissez-nous vos coordonnées et vos disponibilités. Le bureau revient vers vous via
              WhatsApp pour vous proposer une première action.
            </SectionLede>
            <p className="mt-6 inline-flex items-center gap-2 rounded-xl border border-marron/10 bg-cream-soft px-4 py-3 text-sm text-gris">
              <MessageCircle className="size-4 shrink-0 text-bordeaux" aria-hidden />
              Aujourd'hui, la coordination des bénévoles se fait via WhatsApp.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <Card className="p-6 sm:p-8">
              <VolunteerForm />
            </Card>
          </Reveal>
        </div>
      </section>

      {/* ===================== PROCHAINES OCCASIONS ===================== */}
      <section className="bg-cream-soft">
        <div className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6 sm:py-24">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <Reveal>
              <SectionTitle>Prochaines occasions</SectionTitle>
              <SectionLede>
                Des dates concrètes pour vous lancer. Inscrivez-vous, on s'occupe du reste.
              </SectionLede>
            </Reveal>
            <Reveal delay={0.1}>
              <Badge variant="demo">Dates de démonstration</Badge>
            </Reveal>
          </div>
          <div className="mt-10">
            <AgendaList limit={3} />
          </div>
        </div>
      </section>
    </>
  );
}
