"use client";

import { motion, type HTMLMotionProps } from "motion/react";
import * as React from "react";

const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * Révélation douce au scroll (sobre, digne). Respecte prefers-reduced-motion.
 * @param delay  décalage en secondes
 * @param y      translation initiale (px)
 */
export function Reveal({
  children,
  delay = 0,
  y = 22,
  className,
  as = "div",
  ...rest
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: "div" | "li" | "section" | "article" | "span";
} & Omit<HTMLMotionProps<"div">, "ref">) {
  // initial CONSTANT (pas de branche reduced-motion) → SSR === client, aucun
  // mismatch d'hydratation. La réduction est gérée par <MotionConfig reducedMotion="user">.
  const MotionTag = motion[as] as typeof motion.div;
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.65, delay, ease: EASE }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}

/** Conteneur à révélation décalée pour des listes/grilles. */
export function RevealGroup({
  children,
  className,
  stagger = 0.08,
}: {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: stagger } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({
  children,
  className,
  y = 22,
}: {
  children: React.ReactNode;
  className?: string;
  y?: number;
}) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
      }}
    >
      {children}
    </motion.div>
  );
}
