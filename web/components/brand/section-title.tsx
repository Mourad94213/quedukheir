import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Titre de section éditorial. Surtitre (eyebrow) RATIONNÉ : à n'utiliser
 * qu'une fois toutes les ~3 sections (cf. règle anti-slop). Sans surtitre par défaut.
 */
export function SectionTitle({
  children,
  eyebrow,
  align = "left",
  tone = "dark",
  as: Tag = "h2",
  className,
}: {
  children: React.ReactNode;
  eyebrow?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
  as?: "h1" | "h2" | "h3";
  className?: string;
}) {
  return (
    <div className={cn(align === "center" && "text-center", "max-w-2xl", align === "center" && "mx-auto")}>
      {eyebrow && (
        <p
          className={cn(
            "mb-3 text-xs font-bold uppercase tracking-[0.18em]",
            tone === "light" ? "text-cream/70" : "text-bordeaux",
          )}
        >
          {eyebrow}
        </p>
      )}
      <Tag
        className={cn(
          "font-[family-name:var(--font-serif)] font-bold text-balance",
          "text-[clamp(1.9rem,4vw,3rem)] leading-[1.08]",
          tone === "light" ? "text-cream" : "text-encre",
          className,
        )}
      >
        {children}
      </Tag>
    </div>
  );
}

/** Sous-texte d'introduction sous un SectionTitle. */
export function SectionLede({
  children,
  tone = "dark",
  className,
}: {
  children: React.ReactNode;
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <p
      className={cn(
        "mt-4 max-w-2xl text-lg leading-relaxed text-pretty",
        tone === "light" ? "text-cream/80" : "text-gris",
        className,
      )}
    >
      {children}
    </p>
  );
}
