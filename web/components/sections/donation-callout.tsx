import Link from "next/link";
import { Heart, Repeat, ShieldCheck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/site";

/**
 * Bloc d'appel au don → HelloAsso (le site ne gère pas le paiement).
 * Lien vers la transparence pour rassurer.
 */
export function DonationCallout({
  tone = "dark",
  title = "Votre don agit, ici, maintenant.",
  className,
}: {
  tone?: "dark" | "light";
  title?: string;
  className?: string;
}) {
  const onMarron = tone === "light";
  return (
    <div
      className={
        (onMarron
          ? "bg-marron text-cream "
          : "bg-bordeaux text-cream ") +
        "relative overflow-hidden rounded-3xl px-6 py-10 sm:px-10 sm:py-12 " +
        (className ?? "")
      }
    >
      {/* point de marque décoratif, sobre */}
      <div className="pointer-events-none absolute -right-16 -top-16 size-64 rounded-full bg-cream/[0.04]" aria-hidden />
      <div className="relative mx-auto max-w-2xl text-center">
        <h2 className="font-[family-name:var(--font-display)] text-[clamp(1.7rem,3.5vw,2.5rem)] leading-tight text-cream">
          {title}
        </h2>
        <p className="mx-auto mt-3 max-w-md text-cream/80">
          5 € financent près d'un kit d'hygiène. 35 €, un cartable garni. Chaque geste compte —
          et vous voyez exactement où il va.
        </p>
        <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
          {/* TODO(build réel) : remplacer par l'URL HelloAsso réelle de l'association. */}
          <Button asChild variant="onDark" size="lg">
            <a href={SITE.helloAsso} target="_blank" rel="noopener noreferrer">
              <Heart className="size-5" />
              Faire un don ponctuel
            </a>
          </Button>
          <Button asChild variant="outlineDark" size="lg">
            <a href={SITE.helloAssoRecurrent} target="_blank" rel="noopener noreferrer">
              <Repeat className="size-5" />
              Don mensuel
            </a>
          </Button>
        </div>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-cream/70">
          <span className="inline-flex items-center gap-1.5">
            <ShieldCheck className="size-4" />
            Paiement sécurisé via HelloAsso
          </span>
          <Link href="/transparence" className="inline-flex items-center gap-1.5 font-semibold text-cream underline-offset-4 hover:underline">
            Voir où va l'argent
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
