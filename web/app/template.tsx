"use client";

/**
 * Transition de page cinématique (entrée). template.tsx se re-monte à chaque
 * navigation (≠ layout) → l'animation rejoue sur chaque route.
 * OPACITÉ UNIQUEMENT : aucun transform sur un ancêtre de contenu épinglé, sinon
 * ScrollTrigger (pins / position:fixed) casse durablement. Respecte reduced-motion.
 */

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

export default function Template({ children }: { children: ReactNode }) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: reduced ? 0 : 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
