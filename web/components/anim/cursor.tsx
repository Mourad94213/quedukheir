"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

/**
 * Curseur personnalisé qui REMPLACE le curseur natif (celui-ci est masqué via
 * `html.has-custom-cursor` tant qu'un pointeur fin est détecté). Un point précis
 * qui suit au plus près + un anneau qui traîne légèrement et grossit au survol
 * des éléments interactifs. Rendu en `mix-blend-difference` : toujours visible,
 * sur fond clair comme sur fond sombre (plus de disparition). Inactif en tactile
 * ou reduced-motion → le curseur natif reste alors normal.
 */
export function Cursor() {
  const ring = useRef<HTMLDivElement>(null);
  const dot = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const r = ring.current!;
    const d = dot.current!;
    const mm = gsap.matchMedia();
    mm.add(
      "(prefers-reduced-motion: no-preference) and (hover: hover) and (pointer: fine)",
      () => {
        // On masque le curseur natif : seul le curseur custom reste visible.
        document.documentElement.classList.add("has-custom-cursor");

        gsap.set([r, d], { xPercent: -50, yPercent: -50, opacity: 0 });
        const rx = gsap.quickTo(r, "x", { duration: 0.32, ease: "power3" });
        const ry = gsap.quickTo(r, "y", { duration: 0.32, ease: "power3" });
        const dx = gsap.quickTo(d, "x", { duration: 0.08, ease: "power3" });
        const dy = gsap.quickTo(d, "y", { duration: 0.08, ease: "power3" });
        let shown = false;

        const onMove = (e: PointerEvent) => {
          rx(e.clientX);
          ry(e.clientY);
          dx(e.clientX);
          dy(e.clientY);
          if (!shown) {
            shown = true;
            gsap.to([r, d], { opacity: 1, duration: 0.25 });
          }
          const interactive = (e.target as Element)?.closest?.(
            "a, button, [data-cursor], input, textarea, select, label, [role='button']",
          );
          gsap.to(r, { scale: interactive ? 1.8 : 1, duration: 0.25 });
        };
        // On ne cache le curseur QUE lorsque le pointeur quitte vraiment la fenêtre
        // (relatedTarget null) — évite les disparitions intempestives sur la page.
        const onOut = (e: PointerEvent) => {
          if (!e.relatedTarget) gsap.to([r, d], { opacity: 0, duration: 0.2 });
        };
        const onOver = () => {
          if (shown) gsap.to([r, d], { opacity: 1, duration: 0.2 });
        };

        window.addEventListener("pointermove", onMove);
        window.addEventListener("pointerout", onOut);
        window.addEventListener("pointerover", onOver);
        return () => {
          document.documentElement.classList.remove("has-custom-cursor");
          window.removeEventListener("pointermove", onMove);
          window.removeEventListener("pointerout", onOut);
          window.removeEventListener("pointerover", onOver);
        };
      },
    );
  }, {});

  return (
    <>
      <div
        ref={ring}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[80] size-8 rounded-full border-2 border-white opacity-0 mix-blend-difference"
      />
      <div
        ref={dot}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[80] size-1.5 rounded-full bg-white opacity-0 mix-blend-difference"
      />
    </>
  );
}
