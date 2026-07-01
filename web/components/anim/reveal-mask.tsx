"use client";

import { useRef, type ElementType, type ReactNode } from "react";
import { gsap, useGSAP, EASE } from "@/lib/gsap";
import { cn } from "@/lib/utils";

const FROM_CLIP: Record<string, string> = {
  up: "inset(100% 0% 0% 0%)",
  down: "inset(0% 0% 100% 0%)",
  left: "inset(0% 100% 0% 0%)",
  right: "inset(0% 0% 0% 100%)",
};

/**
 * Reveal au MASQUE (volet/wipe) au scroll, via clip-path. Pour images et blocs
 * éditoriaux. L'élément est pleinement visible par défaut (aucun CSS ne le
 * cache) ; GSAP pose l'état masqué avant peinture puis dévoile à l'entrée.
 */
export function RevealMask({
  children,
  as = "div",
  className,
  direction = "up",
  duration = 1.1,
  delay = 0,
  start = "top 82%",
}: {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  direction?: "up" | "down" | "left" | "right";
  duration?: number;
  delay?: number;
  start?: string;
}) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const tween = gsap.from(ref.current, {
          clipPath: FROM_CLIP[direction],
          duration,
          delay,
          ease: EASE.inOut,
          scrollTrigger: { trigger: ref.current, start },
        });
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
    <Tag ref={ref} className={cn("[will-change:clip-path]", className)}>
      {children}
    </Tag>
  );
}
