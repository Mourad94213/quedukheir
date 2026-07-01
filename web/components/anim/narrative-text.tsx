"use client";

import { useRef, type ElementType, type ReactNode } from "react";
import { gsap, useGSAP, SplitText } from "@/lib/gsap";
import { cn } from "@/lib/utils";

/**
 * Texte « narratif » : les mots se remplissent (de l'estompé au plein) au fil du
 * scroll — effet éditorial de lecture guidée (mission, raison d'être).
 * reduced-motion / no-JS : texte pleinement opaque et lisible d'emblée.
 */
export function NarrativeText({
  children,
  as = "p",
  className,
  from = 0.14,
  start = "top 82%",
  end = "top 38%",
}: {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  from?: number;
  start?: string;
  end?: string;
}) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const split = SplitText.create(ref.current, {
          type: "words",
          autoSplit: true,
          aria: "auto",
          onSplit: (self) =>
            gsap.fromTo(
              self.words,
              { opacity: from },
              {
                opacity: 1,
                ease: "none",
                stagger: 0.08,
                scrollTrigger: { trigger: ref.current, start, end, scrub: true },
              },
            ),
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
