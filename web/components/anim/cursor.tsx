"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

/**
 * Curseur halo chaleureux et DISCRET. Suit le pointeur en douceur, grossit
 * au survol des éléments interactifs. Rendu inerte (pointer-events-none) et
 * invisible tant qu'aucun pointeur fin n'est détecté (touch / reduced-motion).
 */
export function Cursor() {
  const dot = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const el = dot.current!;
    const mm = gsap.matchMedia();
    mm.add(
      "(prefers-reduced-motion: no-preference) and (hover: hover) and (pointer: fine)",
      () => {
        gsap.set(el, { xPercent: -50, yPercent: -50, opacity: 0, scale: 1 });
        const xTo = gsap.quickTo(el, "x", { duration: 0.45, ease: "power3" });
        const yTo = gsap.quickTo(el, "y", { duration: 0.45, ease: "power3" });
        let shown = false;

        const onMove = (e: PointerEvent) => {
          xTo(e.clientX);
          yTo(e.clientY);
          if (!shown) {
            shown = true;
            gsap.to(el, { opacity: 1, duration: 0.4 });
          }
          const interactive = (e.target as Element)?.closest?.(
            "a, button, [data-cursor], input, textarea, select",
          );
          gsap.to(el, { scale: interactive ? 2.4 : 1, duration: 0.3 });
        };
        const onLeave = () => gsap.to(el, { opacity: 0, duration: 0.3 });

        window.addEventListener("pointermove", onMove);
        document.addEventListener("pointerleave", onLeave);
        return () => {
          window.removeEventListener("pointermove", onMove);
          document.removeEventListener("pointerleave", onLeave);
        };
      },
    );
  }, {});

  return (
    <div
      ref={dot}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[70] size-6 rounded-full bg-bordeaux/25 opacity-0 mix-blend-multiply blur-[1px]"
    />
  );
}
