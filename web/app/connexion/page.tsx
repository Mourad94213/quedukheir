import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, LineChart, ReceiptText, ShieldCheck } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { Divider } from "@/components/brand/divider";
import { AuthForm } from "@/components/forms/auth-form";

export const metadata: Metadata = {
  title: "Connexion adhérent",
  description:
    "Connectez-vous à votre espace adhérent pour accéder au tableau de transparence détaillé : évolution des dons et journal des dépenses.",
};

const RAISONS = [
  {
    icon: LineChart,
    titre: "L'évolution des dons",
    texte: "Suivez mois après mois ce qui est récolté et comment les fonds progressent.",
  },
  {
    icon: ReceiptText,
    titre: "Le journal des dépenses",
    texte: "Chaque dépense est datée, rattachée à un poste et justifiée. Rien n'est caché.",
  },
];

export default function ConnexionPage() {
  return (
    <section className="bg-cream-soft">
      <div className="mx-auto grid max-w-[1400px] items-start gap-12 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-[1fr_1fr] lg:gap-16">
        {/* ----------------------- Carte de connexion ----------------------- */}
        <Reveal className="mx-auto w-full max-w-md">
          <div className="text-center">
            <span className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-bordeaux/10 text-bordeaux">
              <ShieldCheck className="size-7" />
            </span>
            <h1 className="mt-5 font-[family-name:var(--font-display)] text-[clamp(1.9rem,4vw,2.6rem)] leading-[1.05] text-encre">
              Espace adhérent
            </h1>
            <p className="mt-3 text-gris leading-relaxed">
              Connectez-vous pour accéder au tableau de transparence détaillé de l'association :
              l'évolution des dons et le journal complet des dépenses.
            </p>
          </div>

          <Card className="mt-8 p-6 sm:p-8">
            <AuthForm />
          </Card>
        </Reveal>

        {/* ----------------------- Pourquoi un espace adhérent ----------------------- */}
        <Reveal delay={0.1} className="lg:pt-4">
          <div className="rounded-3xl border border-marron/10 bg-cream p-8 sm:p-10 shadow-soft">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-bordeaux">
              Notre engagement
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-serif)] text-2xl font-bold text-encre sm:text-3xl">
              Pourquoi un espace adhérent ?
            </h2>
            <p className="mt-4 text-gris leading-relaxed">
              La confiance se prouve. Au-delà de l'aperçu public, nos adhérents accèdent au détail
              complet de notre transparence : voir précisément où va chaque euro.
            </p>

            <ul className="mt-8 space-y-5">
              {RAISONS.map((r) => (
                <li key={r.titre} className="flex items-start gap-4">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-bordeaux/10 text-bordeaux">
                    <r.icon className="size-5" />
                  </span>
                  <div>
                    <p className="font-semibold text-encre">{r.titre}</p>
                    <p className="mt-1 text-sm text-gris leading-relaxed">{r.texte}</p>
                  </div>
                </li>
              ))}
            </ul>

            <Divider dot className="my-8" />

            <p className="text-gris">
              Vous n'êtes pas adhérent ? Un aperçu public reste accessible à tous, sans connexion.
            </p>
            <Button asChild variant="secondary" className="mt-5">
              <Link href="/transparence">
                Voir l'aperçu public
                <ArrowRight className="size-5" />
              </Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
