"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { LogIn, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Field } from "@/components/ui/label";
import { useAuth } from "@/lib/auth";
import { DEMO_COMPTES } from "@/lib/data";

/** Connexion adhérent / bureau (auth SIMULÉE). */
export function AuthForm() {
  const { login } = useAuth();
  const router = useRouter();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState<string>();

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const res = login(email, password);
    if (!res.ok) {
      setError(res.error);
      return;
    }
    const compte = DEMO_COMPTES.find((c) => c.email.toLowerCase() === email.trim().toLowerCase());
    router.push(compte?.role === "bureau" ? "/admin" : "/espace-adherent");
  }

  function quickFill(role: "adherent" | "bureau") {
    const c = DEMO_COMPTES.find((x) => x.role === role)!;
    setEmail(c.email);
    setPassword(c.password);
    setError(undefined);
  }

  return (
    <div className="space-y-6">
      <form onSubmit={onSubmit} className="space-y-4">
        <Field label="Adresse email" htmlFor="email" error={error}>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="username"
            placeholder="vous@quedukheir.com"
          />
        </Field>
        <Field label="Mot de passe" htmlFor="password">
          <Input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
            placeholder="••••••"
          />
        </Field>
        <Button type="submit" size="lg" className="w-full">
          <LogIn className="size-5" />
          Se connecter
        </Button>
      </form>

      <div className="rounded-2xl border border-marron/12 bg-cream-soft p-4">
        <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-gris">
          <ShieldCheck className="size-3.5" />
          Comptes de démonstration
        </p>
        <p className="mt-2 text-sm text-gris">
          Cliquez pour pré-remplir, puis « Se connecter ». Mot de passe :{" "}
          <code className="rounded bg-marron/10 px-1.5 py-0.5 text-encre">demo</code>
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => quickFill("adherent")}
            className="rounded-full border border-encre/20 px-3.5 py-1.5 text-sm font-medium text-encre transition-colors hover:border-bordeaux hover:text-bordeaux"
          >
            Adhérent·e
          </button>
          <button
            type="button"
            onClick={() => quickFill("bureau")}
            className="rounded-full border border-encre/20 px-3.5 py-1.5 text-sm font-medium text-encre transition-colors hover:border-bordeaux hover:text-bordeaux"
          >
            Bureau / admin
          </button>
        </div>
      </div>
    </div>
  );
}
