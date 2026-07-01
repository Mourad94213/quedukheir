"use client";

import { useRef, type ReactNode } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { cn } from "@/lib/utils";

/**
 * Bande de texte défilante (valeurs, slogan). Deux copies du contenu animées en
 * boucle continue (-50% du rail = exactement une copie → raccord invisible).
 * reduced-motion : rail figé, le contenu reste lisible.
 */
export function Marquee({
  children,
  className,
  duration = 28,
  reverse = false,
}: {
  children: ReactNode;
  className?: string;
  duration?: number;
  reverse?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const track = ref.current!.querySelector(".marquee-track") as HTMLElement;
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.set(track, { xPercent: reverse ? -50 : 0 });
        const tween = gsap.to(track, {
          xPercent: reverse ? 0 : -50,
          ease: "none",
          duration,
          repeat: -1,
        });
        return () => tween.kill();
      });
    },
    { scope: ref },
  );

  return (
    <div ref={ref} className={cn("overflow-hidden", className)}>
      <div className="marquee-track flex w-max flex-nowrap">
        <div className="flex flex-nowrap items-center">{children}</div>
        <div className="flex flex-nowrap items-center" aria-hidden>
          {children}
        </div>
      </div>
    </div>
  );
}
