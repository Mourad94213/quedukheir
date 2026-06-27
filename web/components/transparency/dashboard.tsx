"use client";

import * as React from "react";
import {
  Wallet,
  Users,
  HeartHandshake,
  Download,
  TrendingUp,
  CheckCircle2,
  Clock,
  CircleDashed,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { DemoNotice } from "@/components/ui/demo-notice";
import { Table, THead, TBody, TR, TH, TD } from "@/components/ui/table";
import { StatCounter } from "@/components/motion/stat-counter";
import { BudgetDonut, AllocationBars, DonsTrend } from "@/components/transparency/charts";
import {
  TRANSPARENCE_RESUME,
  POSTES,
  PROJETS_SUIVI,
  DEPENSES,
  DEMO_PERIODE,
} from "@/lib/data";
import { euros, dateLong, pct } from "@/lib/utils";

const DATA_COLORS = ["#7f1112", "#b5654b", "#c7972f", "#4f6f52", "#8a5a3c", "#9aa07d"];

const STATUT_META: Record<string, { icon: React.ReactNode; variant: "positif" | "default" | "sable" }> = {
  Réalisée: { icon: <CheckCircle2 className="size-3.5" />, variant: "positif" },
  "En cours": { icon: <Clock className="size-3.5" />, variant: "default" },
  "À venir": { icon: <CircleDashed className="size-3.5" />, variant: "sable" },
};

function KpiCard({
  icon,
  label,
  children,
  hint,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
  hint?: string;
}) {
  return (
    <Card className="p-5">
      <div className="flex items-center gap-2 text-gris">
        <span className="text-bordeaux">{icon}</span>
        <span className="text-sm font-medium">{label}</span>
      </div>
      <p className="mt-2 font-[family-name:var(--font-display)] text-3xl text-encre">{children}</p>
      {hint && <p className="mt-1 text-xs text-gris">{hint}</p>}
    </Card>
  );
}

export function TransparencyDashboard({ variant = "complet" }: { variant?: "public" | "complet" }) {
  const totalDepense = POSTES.reduce((s, p) => s + p.depense, 0);
  const totalAlloue = POSTES.reduce((s, p) => s + p.alloue, 0);
  const r = TRANSPARENCE_RESUME;

  function handleExport() {
    // Bilan PDF factice — démo. // TODO(build réel) : générer le vrai bilan.
    alert(
      "Démo : le téléchargement du bilan (PDF) sera disponible au build réel.\nLes chiffres affichés sont des exemples illustratifs.",
    );
  }

  return (
    <div className="space-y-8">
      <DemoNotice />

      {/* — Vue d'ensemble — */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <KpiCard icon={<Wallet className="size-5" />} label="Dons récoltés" hint={DEMO_PERIODE}>
          <StatCounter value={r.totalRecolte} prefix="" suffix=" €" />
        </KpiCard>
        <KpiCard icon={<Users className="size-5" />} label="Donateurs" hint="sur la période">
          <StatCounter value={r.donateurs} />
        </KpiCard>
        <KpiCard icon={<HeartHandshake className="size-5" />} label="Reversé aux actions" hint={`${pct(totalDepense, r.totalRecolte)}% des dons déjà dépensés`}>
          <StatCounter value={totalDepense} suffix=" €" />
        </KpiCard>
        <Card className="flex flex-col justify-between p-5">
          <div className="flex items-center gap-2 text-gris">
            <TrendingUp className="size-5 text-bordeaux" />
            <span className="text-sm font-medium">Campagne du mois</span>
          </div>
          <div className="mt-2">
            <p className="text-sm font-semibold text-encre">{r.campagneMois}</p>
            <div className="mt-2 flex items-center justify-between text-xs text-gris">
              <span>{euros(r.campagneAtteint)}</span>
              <span>objectif {euros(r.campagneObjectif)}</span>
            </div>
            <Progress
              className="mt-1.5"
              value={pct(r.campagneAtteint, r.campagneObjectif)}
              label="Avancement de la campagne du mois"
            />
          </div>
        </Card>
      </div>

      {/* — Affectation des fonds — */}
      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="p-6">
          <h3 className="font-[family-name:var(--font-serif)] text-xl font-bold text-encre">
            Où va l'argent
          </h3>
          <p className="mt-1 text-sm text-gris">Répartition des dépenses par poste.</p>
          <BudgetDonut />
          <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
            {POSTES.map((p, i) => (
              <li key={p.key} className="flex items-center justify-between gap-2 text-sm">
                <span className="flex items-center gap-2 text-encre">
                  <span
                    className="size-3 shrink-0 rounded-full"
                    style={{ background: DATA_COLORS[i % DATA_COLORS.length] }}
                  />
                  {p.label}
                </span>
                <span className="font-semibold text-encre">{euros(p.depense)}</span>
              </li>
            ))}
          </ul>
        </Card>

        <Card className="p-6">
          <h3 className="font-[family-name:var(--font-serif)] text-xl font-bold text-encre">
            Budget alloué vs dépensé
          </h3>
          <p className="mt-1 text-sm text-gris">
            {euros(totalDepense)} dépensés sur {euros(totalAlloue)} alloués.
          </p>
          <AllocationBars />
        </Card>
      </div>

      {/* — Suivi par projet — */}
      <Card className="p-6">
        <h3 className="font-[family-name:var(--font-serif)] text-xl font-bold text-encre">
          Suivi par action
        </h3>
        <p className="mt-1 text-sm text-gris">
          Pour chaque action : l'objectif de collecte, le montant atteint et ce qu'il finance.
        </p>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {PROJETS_SUIVI.map((p) => {
            const meta = STATUT_META[p.statut];
            return (
              <div key={p.titre} className="rounded-2xl border border-marron/10 bg-cream p-5">
                <div className="flex items-start justify-between gap-3">
                  <h4 className="font-[family-name:var(--font-sans)] font-semibold text-encre">
                    {p.titre}
                  </h4>
                  <Badge variant={meta.variant} className="shrink-0">
                    {meta.icon}
                    {p.statut}
                  </Badge>
                </div>
                <div className="mt-3 flex items-baseline justify-between text-sm">
                  <span className="font-[family-name:var(--font-display)] text-lg text-bordeaux">
                    {euros(p.atteint)}
                  </span>
                  <span className="text-gris">objectif {euros(p.objectif)}</span>
                </div>
                <Progress className="mt-2" value={pct(p.atteint, p.objectif)} label={`Avancement : ${p.titre}`} />
                <p className="mt-3 text-xs text-gris">
                  <span className="font-medium text-encre">Finance :</span> {p.finance}
                </p>
              </div>
            );
          })}
        </div>
      </Card>

      {/* — Éléments réservés à l'espace adhérent (variante complète) — */}
      {variant === "complet" && (
        <>
          <Card className="p-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <h3 className="font-[family-name:var(--font-serif)] text-xl font-bold text-encre">
                  Évolution des dons
                </h3>
                <p className="mt-1 text-sm text-gris">Montants collectés mois par mois (démo).</p>
              </div>
            </div>
            <DonsTrend />
          </Card>

          <Card className="p-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <h3 className="font-[family-name:var(--font-serif)] text-xl font-bold text-encre">
                  Journal des dépenses
                </h3>
                <p className="mt-1 text-sm text-gris">Chaque sortie d'argent, datée et détaillée.</p>
              </div>
              <Button variant="secondary" size="sm" onClick={handleExport}>
                <Download className="size-4" />
                Télécharger le bilan
              </Button>
            </div>
            <div className="mt-5">
              <Table>
                <THead>
                  <TR>
                    <TH>Date</TH>
                    <TH>Poste</TH>
                    <TH>Description</TH>
                    <TH className="text-right">Montant</TH>
                  </TR>
                </THead>
                <TBody>
                  {DEPENSES.map((d, i) => (
                    <TR key={i}>
                      <TD className="whitespace-nowrap text-gris">{dateLong(d.date)}</TD>
                      <TD className="whitespace-nowrap">
                        <Badge variant="outline">{d.poste}</Badge>
                      </TD>
                      <TD className="text-gris">{d.desc}</TD>
                      <TD className="whitespace-nowrap text-right font-semibold text-encre">
                        {euros(d.montant)}
                      </TD>
                    </TR>
                  ))}
                </TBody>
              </Table>
            </div>
          </Card>
        </>
      )}

      {variant === "public" && (
        <Card className="flex flex-col items-center gap-3 p-8 text-center">
          <h3 className="font-[family-name:var(--font-serif)] text-xl font-bold text-encre">
            Le détail complet, pour nos adhérents
          </h3>
          <p className="max-w-md text-sm text-gris">
            Évolution mensuelle des dons et journal détaillé des dépenses sont accessibles depuis
            l'espace adhérent.
          </p>
          <Button asChild>
            <a href="/connexion">Accéder à l'espace adhérent</a>
          </Button>
        </Card>
      )}
    </div>
  );
}
