import { Heart, Handshake, Shield, Sparkles, Eye } from "lucide-react";
import { RevealGroup, RevealItem } from "@/components/motion/reveal";
import { VALEURS } from "@/lib/site";

const ICONS = [
  <Heart key="h" className="size-6" />,
  <Handshake key="ha" className="size-6" />,
  <Shield key="s" className="size-6" />,
  <Sparkles key="sp" className="size-6" />,
  <Eye key="e" className="size-6" />,
];

/** Grille des 5 valeurs (Transparence mise en avant). */
export function ValueGrid() {
  return (
    <RevealGroup className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
      {VALEURS.map((v, i) => {
        const highlight = v.titre === "Transparence";
        return (
          <RevealItem key={v.titre}>
            <div
              className={
                "flex h-full flex-col rounded-2xl border p-5 transition-colors " +
                (highlight
                  ? "border-bordeaux/30 bg-bordeaux/[0.05]"
                  : "border-marron/10 bg-cream-soft")
              }
            >
              <span
                className={
                  "inline-flex size-11 items-center justify-center rounded-full " +
                  (highlight ? "bg-bordeaux text-cream" : "bg-bordeaux/10 text-bordeaux")
                }
              >
                {ICONS[i]}
              </span>
              <h3 className="mt-4 font-[family-name:var(--font-serif)] text-lg font-bold text-encre">
                {v.titre}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-gris">{v.texte}</p>
            </div>
          </RevealItem>
        );
      })}
    </RevealGroup>
  );
}
