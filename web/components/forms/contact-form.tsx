"use client";

import * as React from "react";
import { CheckCircle2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input, Textarea, Select } from "@/components/ui/input";
import { Field } from "@/components/ui/label";

/** Formulaire de contact (mock). // TODO(build réel) : brancher envoi email. */
export function ContactForm() {
  const [sent, setSent] = React.useState(false);
  const [errors, setErrors] = React.useState<Record<string, string>>({});

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const next: Record<string, string> = {};
    if (!String(data.get("nom") ?? "").trim()) next.nom = "Indiquez votre nom.";
    const email = String(data.get("email") ?? "").trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "Email invalide.";
    if (!String(data.get("message") ?? "").trim()) next.message = "Votre message est vide.";
    setErrors(next);
    if (Object.keys(next).length === 0) setSent(true);
  }

  if (sent) {
    return (
      <div className="flex flex-col items-center gap-3 rounded-2xl border border-[var(--color-positif)]/30 bg-[var(--color-positif)]/[0.07] p-8 text-center">
        <CheckCircle2 className="size-12 text-[var(--color-positif)]" />
        <h3 className="font-[family-name:var(--font-serif)] text-2xl font-bold text-encre">
          Message envoyé !
        </h3>
        <p className="max-w-md text-gris">
          Merci de nous avoir écrit (démonstration). Nous revenons vers vous au plus vite.
        </p>
        <Button variant="secondary" onClick={() => setSent(false)}>
          Écrire un autre message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Nom et prénom" htmlFor="nom" required error={errors.nom}>
          <Input id="nom" name="nom" autoComplete="name" placeholder="Votre nom" />
        </Field>
        <Field label="Email" htmlFor="email" required error={errors.email}>
          <Input id="email" name="email" type="email" autoComplete="email" placeholder="vous@email.fr" />
        </Field>
      </div>
      <Field label="Vous êtes" htmlFor="profil">
        <Select id="profil" name="profil" defaultValue="">
          <option value="" disabled>
            Choisir…
          </option>
          <option>Un particulier</option>
          <option>Un partenaire / une institution</option>
          <option>Une mairie / collectivité</option>
          <option>Un média</option>
          <option>Autre</option>
        </Select>
      </Field>
      <Field label="Votre message" htmlFor="message" required error={errors.message}>
        <Textarea id="message" name="message" rows={5} placeholder="Comment pouvons-nous aider ?" />
      </Field>
      <Button type="submit" size="lg" className="w-full sm:w-auto">
        <Send className="size-5" />
        Envoyer le message
      </Button>
    </form>
  );
}
