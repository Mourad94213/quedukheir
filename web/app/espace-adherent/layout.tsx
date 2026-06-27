import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Espace adhérent",
  description:
    "Votre espace adhérent Que du Kheir : suivi de votre adhésion et transparence complète sur l'usage des dons (données de démonstration).",
};

export default function EspaceAdherentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
