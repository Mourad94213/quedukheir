import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Espace bureau (démo)",
  description:
    "Espace de démonstration administrateur Que du Kheir : suivi des dons, dépenses, adhérents et bénévoles (aucune écriture réelle).",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
