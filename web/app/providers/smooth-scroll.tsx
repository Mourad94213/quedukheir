"use client";

/**
 * Smooth scroll Lenis + synchronisation GSAP ScrollTrigger.
 * Garde-fous (cf. contrat d'intégration vérifié) :
 *  - Le pont Lenis↔ScrollTrigger vit dans un ENFANT de <ReactLenis> via
 *    useLenis() : l'instance y est garantie disponible (le parent ne la voit
 *    pas encore au moment où son effet s'exécute → race silencieuse évitée).
 *  - autoRaf:false → c'est le ticker GSAP qui pilote lenis.raf (une seule
 *    boucle rAF, pas de conflit).
 *  - prefers-reduced-motion → AUCUNE instance Lenis : scroll natif, contenu
 *    inchangé et lisible. L'état initial est `false` pour coïncider avec le SSR.
 *  - lagSmoothing restauré au démontage (état global GSAP).
 */

import "lenis/dist/lenis.css";
import { ReactLenis, useLenis, type LenisRef } from "lenis/react";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

function LenisGsapBridge() {
  // Enregistre ScrollTrigger.update à chaque scroll Lenis (retrait auto au démontage).
  const lenis = useLenis(ScrollTrigger.update);

  useEffect(() => {
    if (!lenis) return;
    const update = (time: number) => lenis.raf(time * 1000); // s → ms
    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    // Recalcule les positions une fois polices/images chargées.
    const refresh = () => ScrollTrigger.refresh();
    if (document.fonts?.ready) document.fonts.ready.then(refresh);
    if (document.readyState === "complete") refresh();
    else window.addEventListener("load", refresh, { once: true });

    return () => {
      gsap.ticker.remove(update);
      gsap.ticker.lagSmoothing(500, 33); // défaut GSAP restauré
      window.removeEventListener("load", refresh);
    };
  }, [lenis]);

  return null;
}

export function SmoothScroll({ children }: { children: ReactNode }) {
  const lenisRef = useRef<LenisRef>(null);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReduced(mq.matches);
    onChange();
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  if (reduced) return <>{children}</>;

  return (
    <ReactLenis
      root
      options={{ lerp: 0.1, smoothWheel: true, autoRaf: false }}
      ref={lenisRef}
    >
      <LenisGsapBridge />
      {children}
    </ReactLenis>
  );
}
