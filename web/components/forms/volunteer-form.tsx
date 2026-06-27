"use client";

import * as React from "react";
import { CheckCircle2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input, Textarea, Select } from "@/components/ui/input";
import { Field } from "@/components/ui/label";
import { SITE } from "@/lib/site";

/** Formulaire bénévole (mock). // TODO(build réel) : brancher gestion bénévoles (WhatsApp/CRM). */
export function VolunteerForm() {
  const [sent, setSent] = React.useState(false);
  const [errors, setErrors] = React.useState<Record<string, string>>({});
  const [vehicule, setVehicule] = React.useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const next: Record<string, string> = {};
    if (!String(data.get("nom") ?? "").trim()) next.nom = "Indiquez votre nom.";
    const contact = String(data.get("contact") ?? "").trim();
    if (!contact) next.contact = "Un email ou téléphone est nécessaire pour vous recontacter.";
    setErrors(next);
    if (Object.keys(next).length === 0) setSent(true);
  }

  if (sent) {
    return (
      <div className="flex flex-col items-center gap-3 rounded-2xl border border-[var(--color-positif)]/30 bg-[var(--color-positif)]/[0.07] p-8 text-center">
        <CheckCircle2 className="size-12 text-[var(--color-positif)]" />
        <h3 className="font-[family-name:var(--font-serif)] text-2xl font-bold text-encre">
          Merci, c'est noté !
        </h3>
        <p className="max-w-md text-gris">
          Votre demande a bien été enregistrée (démonstration). En conditions réelles, le bureau
          vous recontacte via WhatsApp pour la prochaine action.
        </p>
        <Button variant="secondary" onClick={() => setSent(false)}>
          Envoyer une autre demande
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Nom et prénom" htmlFor="nom" required error={errors.nom}>
          <Input id="nom" name="nom" autoComplete="name" placeholder="Camille Dupont" />
        </Field>
        <Field
          label="Email ou téléphone"
          htmlFor="contact"
          required
          error={errors.contact}
          hint="On vous recontacte via WhatsApp."
        >
          <Input id="contact" name="contact" placeholder="vous@email.fr / 06…" />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Disponibilités" htmlFor="dispo">
          <Select id="dispo" name="dispo" defaultValue="">
            <option value="" disabled>
              Choisir…
            </option>
            <option>Soirs en semaine</option>
            <option>Week-ends</option>
            <option>1 fois par mois</option>
            <option>Ponctuellement</option>
            <option>Flexible</option>
          </Select>
        </Field>
        <Field label="Compétences / envies" htmlFor="competences" hint="Maraude, logistique, communication, écoute…">
          <Input id="competences" name="competences" placeholder="Ex. logistique, écoute" />
        </Field>
      </div>

      <label className="flex items-center gap-3 rounded-xl border border-marron/15 bg-cream-soft px-4 py-3">
        <input
          type="checkbox"
          name="vehicule"
          checked={vehicule}
          onChange={(e) => setVehicule(e.target.checked)}
          className="size-5 shrink-0 accent-[var(--color-bordeaux)]"
        />
        <span className="text-sm text-encre">Je peux me déplacer avec un véhicule</span>
      </label>

      <Field label="Un mot pour nous (facultatif)" htmlFor="motivation">
        <Textarea id="motivation" name="motivation" placeholder="Ce qui vous motive à nous rejoindre…" />
      </Field>

      <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-gris">
          En envoyant, vous acceptez d'être recontacté·e. Vos données ne sont jamais revendues
          (voir confidentialité).
        </p>
        <Button type="submit" size="lg" className="w-full shrink-0 sm:w-auto">
          <Send className="size-5" />
          Envoyer ma demande
        </Button>
      </div>
      <p className="text-xs text-gris">Besoin d'un contact direct ? {SITE.email}</p>
    </form>
  );
}
