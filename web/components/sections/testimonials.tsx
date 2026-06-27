"use client";

import * as React from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { TEMOIGNAGES } from "@/lib/data";

/** Carrousel de témoignages — placeholders étiquetés (à recueillir). */
export function TestimonialSlider() {
  const [i, setI] = React.useState(0);
  const reduce = useReducedMotion();
  const t = TEMOIGNAGES[i];
  const go = (d: number) => setI((p) => (p + d + TEMOIGNAGES.length) % TEMOIGNAGES.length);

  return (
    <div className="mx-auto max-w-3xl text-center">
      <Quote className="mx-auto size-9 text-bordeaux/30" aria-hidden />
      <div className="relative mt-4 min-h-[140px]">
        <AnimatePresence mode="wait">
          <motion.blockquote
            key={i}
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: -12 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="font-[family-name:var(--font-serif)] text-[clamp(1.25rem,2.5vw,1.6rem)] leading-snug text-encre text-balance">
              « {t.quote} »
            </p>
            <footer className="mt-5 flex flex-col items-center gap-1.5">
              <span className="font-semibold text-encre">{t.nom}</span>
              <Badge variant="demo">{t.role}</Badge>
            </footer>
          </motion.blockquote>
        </AnimatePresence>
      </div>

      <div className="mt-6 flex items-center justify-center gap-4">
        <button
          onClick={() => go(-1)}
          aria-label="Témoignage précédent"
          className="inline-flex size-10 items-center justify-center rounded-full border border-encre/20 text-encre transition-colors hover:border-bordeaux hover:text-bordeaux"
        >
          <ChevronLeft className="size-5" />
        </button>
        <div className="flex gap-2">
          {TEMOIGNAGES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              aria-label={`Témoignage ${idx + 1}`}
              className={
                "h-2 rounded-full transition-all " +
                (idx === i ? "w-6 bg-bordeaux" : "w-2 bg-marron/20 hover:bg-marron/40")
              }
            />
          ))}
        </div>
        <button
          onClick={() => go(1)}
          aria-label="Témoignage suivant"
          className="inline-flex size-10 items-center justify-center rounded-full border border-encre/20 text-encre transition-colors hover:border-bordeaux hover:text-bordeaux"
        >
          <ChevronRight className="size-5" />
        </button>
      </div>
    </div>
  );
}
