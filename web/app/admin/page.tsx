"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { LogOut, Plus, Save, Wallet, Users, HandHeart } from "lucide-react";
import { useAuth } from "@/lib/auth";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Field } from "@/components/ui/label";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Table, THead, TBody, TR, TH, TD } from "@/components/ui/table";
import { Reveal } from "@/components/motion/reveal";
import { SectionTitle } from "@/components/brand/section-title";
import {
  DEPENSES,
  POSTES,
  ADHERENTS_DEMO,
  BENEVOLES_DEMO,
} from "@/lib/data";
import { euros, dateLong } from "@/lib/utils";

function statutVariant(statut: string): "positif" | "alerte" {
  return statut === "À jour" ? "positif" : "alerte";
}

export default function AdminPage() {
  const router = useRouter();
  const { user, ready, logout } = useAuth();

  // État du mini formulaire (démo : ne persiste rien).
  const [poste, setPoste] = useState("");
  const [montant, setMontant] = useState("");
  const [desc, setDesc] = useState("");

  useEffect(() => {
    if (ready && !user) {
      router.replace("/connexion");
      return;
    }
    if (ready && user && user.role !== "bureau") {
      router.replace("/espace-adherent");
    }
  }, [ready, user, router]);

  if (!ready) {
    return (
      <section className="mx-auto max-w-[1400px] px-4 py-24 sm:px-6">
        <div className="mx-auto max-w-md text-center">
          <p className="text-gris">Chargement de l'espace bureau…</p>
          <div className="mt-6 space-y-3" aria-hidden="true">
            <div className="h-12 animate-pulse rounded-2xl bg-cream-soft" />
            <div className="h-32 animate-pulse rounded-2xl bg-cream-soft" />
          </div>
        </div>
      </section>
    );
  }

  if (!user || user.role !== "bureau") return null;

  // TODO brancher back-office/HelloAsso/CRM
  function handleAddDepense(e: React.FormEvent) {
    e.preventDefault();
    alert("Démo: brancher le back-office");
  }

  function handleSave() {
    alert("Démo : aucune écriture réelle. La sauvegarde sera branchée au build.");
  }

  return (
    <>
      {/* ===================== EN-TÊTE BUREAU ===================== */}
      <section className="border-b border-marron/10 bg-cream-soft">
        <div className="mx-auto max-w-[1400px] px-4 py-12 sm:px-6 sm:py-16">
          <Reveal>
            <div className="flex flex-wrap items-center gap-3">
              <Badge variant="demo">Démo</Badge>
              <span className="text-sm font-semibold text-encre">
                Espace de démonstration administrateur
              </span>
            </div>
            <div className="mt-5 flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-bordeaux">
                  Espace bureau
                </p>
                <h1 className="font-[family-name:var(--font-display)] text-[clamp(1.9rem,5vw,3.2rem)] leading-[1.05] text-encre">
                  Pilotage de l'association
                </h1>
              </div>
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
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-gris text-pretty">
              Aperçu d'un back-office : dons, dépenses, adhérents et bénévoles.
              Toutes les données sont fictives et aucune modification n'est
              enregistrée.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ===================== ONGLETS DE GESTION ===================== */}
      <section className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6 sm:py-24">
        <Tabs defaultValue="dons">
          <TabsList>
            <TabsTrigger value="dons">
              <Wallet className="size-4" />
              Dons &amp; dépenses
            </TabsTrigger>
            <TabsTrigger value="adherents">
              <Users className="size-4" />
              Adhérents
            </TabsTrigger>
            <TabsTrigger value="benevoles">
              <HandHeart className="size-4" />
              Bénévoles
            </TabsTrigger>
          </TabsList>

          {/* ---------- DONS & DÉPENSES ---------- */}
          <TabsContent value="dons">
            <div className="space-y-8">
              {/* Journal des dépenses (éditable en apparence) */}
              <Card className="p-6">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <h2 className="font-[family-name:var(--font-serif)] text-xl font-bold text-encre">
                      Journal des dépenses
                    </h2>
                    <p className="mt-1 text-sm text-gris">
                      Ajustez les montants puis enregistrez (démo).
                    </p>
                  </div>
                  <Button variant="secondary" size="sm" onClick={handleSave}>
                    <Save className="size-4" />
                    Enregistrer
                  </Button>
                </div>
                <div className="mt-5">
                  <Table>
                    <THead>
                      <TR>
                        <TH>Date</TH>
                        <TH>Poste</TH>
                        <TH>Description</TH>
                        <TH className="text-right">Montant (€)</TH>
                      </TR>
                    </THead>
                    <TBody>
                      {DEPENSES.map((d, i) => (
                        <TR key={i}>
                          <TD className="whitespace-nowrap text-gris">
                            {dateLong(d.date)}
                          </TD>
                          <TD className="whitespace-nowrap">
                            <Badge variant="outline">{d.poste}</Badge>
                          </TD>
                          <TD className="text-gris">{d.desc}</TD>
                          <TD className="w-32">
                            <Input
                              type="number"
                              defaultValue={d.montant}
                              aria-label={`Montant de la dépense du ${dateLong(d.date)}`}
                              className="h-10 text-right"
                            />
                          </TD>
                        </TR>
                      ))}
                    </TBody>
                  </Table>
                </div>
              </Card>

              {/* Ajouter une dépense */}
              <Card className="p-6">
                <h2 className="font-[family-name:var(--font-serif)] text-xl font-bold text-encre">
                  Ajouter une dépense
                </h2>
                <p className="mt-1 text-sm text-gris">
                  Saisie de démonstration : rien n'est enregistré.
                </p>
                {/* TODO brancher back-office/HelloAsso/CRM */}
                <form
                  onSubmit={handleAddDepense}
                  className="mt-5 grid gap-4 sm:grid-cols-[1fr_160px_1.4fr_auto] sm:items-end"
                >
                  <Field label="Poste" htmlFor="depense-poste">
                    <Input
                      id="depense-poste"
                      value={poste}
                      onChange={(e) => setPoste(e.target.value)}
                      placeholder="Kits d'hygiène"
                    />
                  </Field>
                  <Field label="Montant (€)" htmlFor="depense-montant">
                    <Input
                      id="depense-montant"
                      type="number"
                      value={montant}
                      onChange={(e) => setMontant(e.target.value)}
                      placeholder="120"
                    />
                  </Field>
                  <Field label="Description" htmlFor="depense-desc">
                    <Input
                      id="depense-desc"
                      value={desc}
                      onChange={(e) => setDesc(e.target.value)}
                      placeholder="Achat savons et brosses"
                    />
                  </Field>
                  <Button type="submit">
                    <Plus className="size-5" />
                    Ajouter
                  </Button>
                </form>
              </Card>

              {/* Budget par poste (lecture) */}
              <Card className="p-6">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <h2 className="font-[family-name:var(--font-serif)] text-xl font-bold text-encre">
                      Budget par poste
                    </h2>
                    <p className="mt-1 text-sm text-gris">
                      Lecture seule : prévu, alloué et dépensé (démo).
                    </p>
                  </div>
                  <Badge variant="demo">Démo</Badge>
                </div>
                <div className="mt-5">
                  <Table>
                    <THead>
                      <TR>
                        <TH>Poste</TH>
                        <TH className="text-right">Prévu</TH>
                        <TH className="text-right">Alloué</TH>
                        <TH className="text-right">Dépensé</TH>
                      </TR>
                    </THead>
                    <TBody>
                      {POSTES.map((p) => (
                        <TR key={p.key}>
                          <TD className="font-medium text-encre">{p.label}</TD>
                          <TD className="whitespace-nowrap text-right text-gris">
                            {euros(p.prevu)}
                          </TD>
                          <TD className="whitespace-nowrap text-right text-gris">
                            {euros(p.alloue)}
                          </TD>
                          <TD className="whitespace-nowrap text-right font-semibold text-encre">
                            {euros(p.depense)}
                          </TD>
                        </TR>
                      ))}
                    </TBody>
                  </Table>
                </div>
              </Card>
            </div>
          </TabsContent>

          {/* ---------- ADHÉRENTS ---------- */}
          <TabsContent value="adherents">
            <Card className="p-6">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h2 className="font-[family-name:var(--font-serif)] text-xl font-bold text-encre">
                    Adhérents
                  </h2>
                  <p className="mt-1 text-sm text-gris">
                    Liste de démonstration des adhésions.
                  </p>
                </div>
                <Badge variant="demo">Démo</Badge>
              </div>
              <div className="mt-5">
                <Table>
                  <THead>
                    <TR>
                      <TH>Nom</TH>
                      <TH>Statut</TH>
                      <TH>Adhérent depuis</TH>
                    </TR>
                  </THead>
                  <TBody>
                    {ADHERENTS_DEMO.map((a) => (
                      <TR key={a.nom}>
                        <TD className="font-medium text-encre">{a.nom}</TD>
                        <TD>
                          <Badge variant={statutVariant(a.statut)}>
                            {a.statut}
                          </Badge>
                        </TD>
                        <TD className="whitespace-nowrap text-gris">
                          {a.depuis}
                        </TD>
                      </TR>
                    ))}
                  </TBody>
                </Table>
              </div>
            </Card>
          </TabsContent>

          {/* ---------- BÉNÉVOLES ---------- */}
          <TabsContent value="benevoles">
            <Card className="p-6">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h2 className="font-[family-name:var(--font-serif)] text-xl font-bold text-encre">
                    Bénévoles
                  </h2>
                  <p className="mt-1 text-sm text-gris">
                    Inscriptions reçues (démonstration).
                  </p>
                </div>
                <Badge variant="demo">Démo</Badge>
              </div>
              <div className="mt-5">
                <Table>
                  <THead>
                    <TR>
                      <TH>Nom</TH>
                      <TH>Disponibilité</TH>
                      <TH>Compétences</TH>
                      <TH>Véhicule</TH>
                      <TH>Reçu le</TH>
                    </TR>
                  </THead>
                  <TBody>
                    {BENEVOLES_DEMO.map((b) => (
                      <TR key={b.nom}>
                        <TD className="font-medium text-encre">{b.nom}</TD>
                        <TD className="whitespace-nowrap text-gris">
                          {b.dispo}
                        </TD>
                        <TD className="text-gris">{b.competences}</TD>
                        <TD>
                          <Badge variant={b.vehicule ? "positif" : "outline"}>
                            {b.vehicule ? "Oui" : "Non"}
                          </Badge>
                        </TD>
                        <TD className="whitespace-nowrap text-gris">
                          {dateLong(b.recu)}
                        </TD>
                      </TR>
                    ))}
                  </TBody>
                </Table>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </section>
    </>
  );
}
