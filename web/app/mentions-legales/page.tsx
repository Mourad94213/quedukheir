import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { Reveal } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Mentions légales",
  description:
    "Mentions légales de Que du Kheir : éditeur, hébergement, propriété intellectuelle et droit à l'image.",
};

function Bloc({ titre, children }: { titre: string; children: React.ReactNode }) {
  return (
    <section className="border-t border-marron/10 pt-8">
      <h2 className="font-[family-name:var(--font-serif)] text-2xl font-bold text-encre">
        {titre}
      </h2>
      <div className="mt-4 space-y-3 text-base leading-relaxed text-gris">{children}</div>
    </section>
  );
}

export default function MentionsLegalesPage() {
  return (
    <>
      <PageHero
        eyebrow="Informations légales"
        title="Mentions légales"
        lede="Les informations utiles sur l'éditeur de ce site et la manière dont il est réalisé. Tout en clair, comme nous aimons."
      />

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
        <Reveal>
          <div className="space-y-12">
            <Bloc titre="Éditeur du site">
              <p>
                Le présent site est édité par {SITE.name}, {SITE.legal.toLowerCase()}, créée en{" "}
                {SITE.founded}.
              </p>
              <ul className="space-y-1.5">
                <li>
                  <span className="font-semibold text-encre">Numéro RNA :</span> {SITE.rna}
                </li>
                <li>
                  <span className="font-semibold text-encre">Zone d'action :</span> {SITE.territory}
                </li>
                <li>
                  <span className="font-semibold text-encre">Contact :</span>{" "}
                  <a
                    href={`mailto:${SITE.email}`}
                    className="font-medium text-bordeaux underline-offset-2 hover:underline"
                  >
                    {SITE.email}
                  </a>
                </li>
              </ul>
            </Bloc>

            <Bloc titre="Directeur de la publication">
              <p>
                La direction de la publication est assurée par le bureau de l'association, dont le
                référent est Bilal Hadji.
              </p>
            </Bloc>

            <Bloc titre="Hébergement">
              <p>
                Le site est hébergé par O2switch. Le nom de domaine est {SITE.url.replace("https://", "")}.
              </p>
            </Bloc>

            <Bloc titre="Réalisation du site">
              <p>
                Conception et développement du site : {SITE.credit}.
              </p>
            </Bloc>

            <Bloc titre="Propriété intellectuelle">
              <p>
                Les contenus de ce site (textes, photos, visuels de marque) sont la propriété de{" "}
                {SITE.name}, sauf mention contraire. Toute reproduction ou réutilisation, totale ou
                partielle, sans autorisation préalable est interdite.
              </p>
            </Bloc>

            <Bloc titre="Droit à l'image">
              <p>
                Les photos de terrain publiées sur ce site le sont avec l'autorisation des personnes
                concernées. Si vous figurez sur une image et souhaitez son retrait, écrivez-nous à{" "}
                <a
                  href={`mailto:${SITE.email}`}
                  className="font-medium text-bordeaux underline-offset-2 hover:underline"
                >
                  {SITE.email}
                </a>{" "}
                : nous y donnerons suite rapidement.
              </p>
            </Bloc>

            <Bloc titre="Reçus fiscaux">
              <p className="flex flex-wrap items-center gap-2">
                <Badge variant="demo">À venir</Badge>
                <span>
                  La délivrance de reçus fiscaux est à venir : les statuts de l'association sont en
                  cours de validation par la préfecture.
                </span>
              </p>
            </Bloc>
          </div>
        </Reveal>
      </section>
    </>
  );
}
