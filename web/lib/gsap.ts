"use client";

/**
 * ============================================================================
 * GSAP — point d'entrée unique (enregistrement des plugins, CÔTÉ CLIENT)
 * ----------------------------------------------------------------------------
 * Importer GSAP UNIQUEMENT depuis ce module sur la vitrine, jamais directement
 * depuis "gsap/ScrollTrigger" ou "gsap/SplitText" dans un composant serveur.
 *  - registerPlugin est idempotent : l'appeler une fois ici suffit.
 *  - Ce fichier est "use client" → jamais évalué au rendu serveur (pas de
 *    fuite window/document, pas de casse d'hydratation).
 *  - SplitText est livré GRATUITEMENT dans gsap ≥ 3.13 (ici 3.15).
 * ============================================================================
 */

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

export { gsap, useGSAP, ScrollTrigger, SplitText };

/** Easings éditoriaux maison, partagés par toutes les primitives. */
export const EASE = {
  out: "expo.out",
  inOut: "power4.inOut",
  soft: "power3.out",
} as const;
