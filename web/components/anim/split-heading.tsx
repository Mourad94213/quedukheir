"use client";

import { useRef, type ElementType, type ReactNode } from "react";
import { gsap, useGSAP, SplitText, EASE } from "@/lib/gsap";
import { cn } from "@/lib/utils";

/**
 * Titre éditorial qui SE COMPOSE (SplitText). Esprit Diasporas : gros titres
 * qui montent depuis un masque, ligne par ligne (ou mot/caractère).
 *
 * Garde-fous :
 *  - autoSplit + onSplit : re-split propre quand la police arrive (pas de race
 *    document.fonts.ready, pas de fuite de cleanup async).
 *  - mask:'lines' (GSAP 3.13+) : masque overflow auto, pas de CSS manuel.
 *  - aria:'auto' : le texte original reste lisible par les lecteurs d'écran.
 *  - reduced-motion : aucune branche d'anim → titre SSR pleinement visible.
 *  - useGSAP s'exécute en useLayoutEffect → l'état caché est posé avant peinture
 *    (aucun flash).
 */
export function SplitHeading({
  children,
  as = "h2",
  className,
  type = "lines",
  stagger = 0.12,
  duration = 1,
  yPercent = 110,
  ease = EASE.out,
  scroll = false,
  start = "top 85%",
  delay = 0,
}: {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  type?: "lines" | "words" | "chars" | "words,chars" | "lines,words";
  stagger?: number;
  duration?: number;
  yPercent?: number;
  ease?: string;
  /** true = révélé au scroll (ScrollTrigger) ; false = à l'apparition (hero). */
  scroll?: boolean;
  start?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const split = SplitText.create(ref.current, {
          type,
          mask: type.includes("lines") ? "lines" : undefined,
          autoSplit: true,
          aria: "auto",
          linesClass: "split-line",
          onSplit: (self) => {
            const targets = type.includes("lines")
              ? self.lines
              : type.includes("words")
                ? self.words
                : self.chars;
            return gsap.from(targets, {
              yPercent,
              opacity: 0,
              duration,
              ease,
              stagger,
              delay,
              scrollTrigger: scroll
                ? { trigger: ref.current, start }
                : undefined,
            });
          },
        });
        return () => split.revert();
      });
    },
    { scope: ref },
  );

  const Tag = as as ElementType;
  return (
    <Tag ref={ref} className={cn(className)}>
      {children}
    </Tag>
  );
}
