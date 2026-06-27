import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { Reveal } from "@/components/motion/reveal";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description:
    "Comment Que du Kheir collecte et protège vos données personnelles, dans le respect du RGPD.",
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

export default function ConfidentialitePage() {
  const mailto = (
    <a
      href={`mailto:${SITE.email}`}
      className="font-medium text-bordeaux underline-offset-2 hover:underline"
    >
      {SITE.email}
    </a>
  );

  return (
    <>
      <PageHero
        eyebrow="RGPD"
        title="Politique de confidentialité"
        lede="Vos données, traitées avec respect (RGPD)."
      />

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
        <Reveal>
          <div className="space-y-12">
            <Bloc titre="Les données que nous collectons">
              <p>
                Nous ne collectons que les informations que vous nous transmettez volontairement, via
                nos formulaires de contact et d'inscription bénévole :
              </p>
              <ul className="ml-5 list-disc space-y-1.5">
                <li>votre nom (ou prénom),</li>
                <li>un moyen de vous recontacter (email, téléphone),</li>
                <li>le contenu de votre message ou vos disponibilités et compétences.</li>
              </ul>
            </Bloc>

            <Bloc titre="Pourquoi nous les collectons">
              <p>
                Ces informations servent uniquement à vous répondre, à organiser les actions de
                terrain et à coordonner les bénévoles. Rien de plus.
              </p>
            </Bloc>

            <Bloc titre="Base légale">
              <p>
                Le traitement de vos données repose sur votre consentement, donné au moment où vous
                remplissez un formulaire. Vous pouvez le retirer à tout moment.
              </p>
            </Bloc>

            <Bloc titre="Durée de conservation">
              <p>
                Nous conservons vos données le temps nécessaire au traitement de votre demande, puis
                pour le suivi de la vie associative. Au-delà, elles sont supprimées ou anonymisées.
              </p>
            </Bloc>

            <Bloc titre="Aucune revente, aucun partage commercial">
              <p>
                Vos données ne sont jamais vendues, louées ni transmises à des tiers à des fins
                commerciales. Elles restent au sein de l'association.
              </p>
            </Bloc>

            <Bloc titre="Vos droits">
              <p>
                Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de
                suppression de vos données. Pour les exercer, écrivez-nous simplement à {mailto}.
              </p>
            </Bloc>

            <Bloc titre="Cookies">
              <p>
                Ce site ne pratique aucun pistage publicitaire et n'utilise pas de cookies de suivi à
                des fins commerciales. Vous naviguez tranquillement.
              </p>
            </Bloc>
          </div>
        </Reveal>
      </section>
    </>
  );
}
