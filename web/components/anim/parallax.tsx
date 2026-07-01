"use client";

import { useRef, type ElementType, type ReactNode } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { cn } from "@/lib/utils";

/**
 * Parallaxe profonde : l'élément se déplace plus lentement (ou plus vite) que le
 * scroll. Empiler plusieurs <Parallax speed=…> crée des couches multi-vitesses.
 * @param speed  fraction de la hauteur de l'élément (positif = monte, négatif = descend)
 */
export function Parallax({
  children,
  as = "div",
  className,
  speed = 0.18,
}: {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  speed?: number;
}) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const tween = gsap.fromTo(
          ref.current,
          { yPercent: speed * 50 },
          {
            yPercent: -speed * 50,
            ease: "none",
            scrollTrigger: {
              trigger: ref.current,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
              invalidateOnRefresh: true,
            },
          },
        );
        return () => {
          tween.scrollTrigger?.kill();
          tween.kill();
        };
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
