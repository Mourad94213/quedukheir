"use client";

/**
 * Auth SIMULÉE pour la maquette — aucun back-end.
 * Persistance via localStorage. À remplacer par une vraie auth (CRM/HelloAsso)
 * au build réel. // TODO(build réel) : auth + comptes adhérents.
 */

import { createContext, useContext, useEffect, useState, useCallback } from "react";
import { DEMO_COMPTES, type Role } from "@/lib/data";

type SessionUser = { email: string; role: Role; nom: string };

type AuthCtx = {
  user: SessionUser | null;
  ready: boolean;
  login: (email: string, password: string) => { ok: boolean; error?: string };
  logout: () => void;
};

const Ctx = createContext<AuthCtx | null>(null);
const KEY = "qdk_session";

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<SessionUser | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) setUser(JSON.parse(raw));
    } catch {
      /* ignore */
    }
    setReady(true);
  }, []);

  const login: AuthCtx["login"] = useCallback((email, password) => {
    const match = DEMO_COMPTES.find(
      (c) => c.email.toLowerCase() === email.trim().toLowerCase() && c.password === password,
    );
    if (!match) {
      return { ok: false, error: "Identifiants incorrects. Utilisez un compte de démonstration." };
    }
    const next: SessionUser = { email: match.email, role: match.role, nom: match.nom };
    setUser(next);
    try {
      localStorage.setItem(KEY, JSON.stringify(next));
    } catch {
      /* ignore */
    }
    return { ok: true };
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    try {
      localStorage.removeItem(KEY);
    } catch {
      /* ignore */
    }
  }, []);

  return <Ctx.Provider value={{ user, ready, login, logout }}>{children}</Ctx.Provider>;
}

export function useAuth(): AuthCtx {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useAuth doit être utilisé dans <AuthProvider>");
  return ctx;
}
