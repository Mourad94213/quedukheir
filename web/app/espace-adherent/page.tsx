"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { CalendarCheck, LogOut, ShieldCheck } from "lucide-react";
import { useAuth } from "@/lib/auth";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/motion/reveal";
import { SectionTitle, SectionLede } from "@/components/brand/section-title";
import { Divider } from "@/components/brand/divider";
import { TransparencyDashboard } from "@/components/transparency/dashboard";

export default function EspaceAdherentPage() {
  const router = useRouter();
  const { user, ready, logout } = useAuth();

  useEffect(() => {
    if (ready && !user) router.replace("/connexion");
  }, [ready, user, router]);

  if (!ready) {
    return (
      <section className="mx-auto max-w-[1400px] px-4 py-24 sm:px-6">
        <div className="mx-auto max-w-md text-center">
          <p className="text-gris">Chargement de votre espace adhérent…</p>
          <div className="mt-6 space-y-3" aria-hidden="true">
            <div className="h-12 animate-pulse rounded-2xl bg-cream-soft" />
            <div className="h-32 animate-pulse rounded-2xl bg-cream-soft" />
          </div>
        </div>
      </section>
    );
  }

  if (!user) return null;

  return (
    <>
      {/* ===================== EN-TÊTE ADHÉRENT ===================== */}
      <section className="border-b border-marron/10 bg-cream-soft">
        <div className="mx-auto max-w-[1400px] px-4 py-14 sm:px-6 sm:py-20">
          <Reveal>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-bordeaux">
              Espace adhérent
            </p>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <h1 className="font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,3.4rem)] leading-[1.05] text-encre">
                Bonjour, {user.nom}
              </h1>
              <Button
                variant="secondary"
                onClick={() => {
                  logout();
                  router.push("/");
                }}
              >
                <LogOut className="size-5" />
                Déconnexion
              </Button>
            </div>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-gris text-pretty">
              Merci pour votre engagement à nos côtés. Retrouvez ici le suivi de
              votre adhésion et le détail complet de l'usage des dons.
            </p>
          </Reveal>
          <Divider dot className="mt-12" />
        </div>
      </section>

      {/* ===================== MON ADHÉSION ===================== */}
      <section className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6 sm:py-24">
        <div className="grid gap-6 lg:grid-cols-[1fr_1.3fr] lg:items-center">
          <Reveal>
            <SectionTitle as="h2">Mon adhésion</SectionTitle>
            <SectionLede>
              Votre adhésion soutient nos maraudes, nos kits d'hygiène et nos
              collectes de rentrée tout au long de l'année.
            </SectionLede>
          </Reveal>

          <Reveal delay={0.1}>
            <Card className="p-6 sm:p-8">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2 text-gris">
                  <ShieldCheck className="size-5 text-bordeaux" />
                  <span className="text-sm font-medium">Statut de l'adhésion</span>
                </div>
                <Badge variant="demo">Démo</Badge>
              </div>

              <div className="mt-4 flex flex-wrap items-center gap-3">
                <Badge variant="positif">À jour</Badge>
                <span className="text-sm text-gris">
                  Adhérent·e depuis 2026
                </span>
              </div>

              <Divider className="my-6" />

              <ul className="grid gap-3 sm:grid-cols-2">
                <li className="flex items-start gap-2.5 text-encre">
                  <CalendarCheck className="mt-0.5 size-5 shrink-0 text-bordeaux" />
                  <span className="text-sm">
                    Adhésion valable pour l'année en cours
                  </span>
                </li>
                <li className="flex items-start gap-2.5 text-encre">
                  <ShieldCheck className="mt-0.5 size-5 shrink-0 text-bordeaux" />
                  <span className="text-sm">
                    Reçu fiscal : à venir (en cours de mise en place)
                  </span>
                </li>
              </ul>

              <p className="mt-5 text-xs text-gris-soft">
                Données de démonstration. Le suivi réel des adhésions sera
                branché au build (CRM / HelloAsso).
              </p>
            </Card>
          </Reveal>
        </div>
      </section>

      {/* ===================== TRANSPARENCE COMPLÈTE ===================== */}
      <section className="border-t border-marron/10 bg-cream-soft">
        <div className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6 sm:py-24">
          <Reveal>
            <SectionTitle eyebrow="Réservé aux adhérents" as="h2">
              Où va chaque euro
            </SectionTitle>
            <SectionLede>
              Le tableau complet : affectation des fonds, évolution des dons et
              journal détaillé des dépenses.
            </SectionLede>
          </Reveal>
          <div className="mt-12">
            <TransparencyDashboard variant="complet" />
          </div>
        </div>
      </section>
    </>
  );
}
