"use client";

import { useRef, type ReactNode } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { cn } from "@/lib/utils";

/**
 * Section ÉPINGLÉE (pin) qui défile à l'horizontale au scroll vertical — bande
 * éditoriale (parcours, galerie). Desktop : la zone épinglée occupe TOUTE la
 * hauteur d'écran (h-screen) et les cartes sont centrées verticalement → pas de
 * vide. Mobile / reduced-motion : défilement horizontal natif (swipe), pas d'épingle.
 */
export function HorizontalScroll({
  children,
  className,
  trackClassName,
}: {
  children: ReactNode;
  className?: string;
  trackClassName?: string;
}) {
  const container = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(
        "(min-width: 768px) and (prefers-reduced-motion: no-preference)",
        () => {
          const amount = () =>
            Math.max(0, track.current!.scrollWidth - container.current!.clientWidth);
          const tween = gsap.to(track.current, {
            x: () => -amount(),
            ease: "none",
            scrollTrigger: {
              trigger: container.current,
              start: "top top",
              end: () => "+=" + amount(),
              scrub: 1,
              pin: true,
              anticipatePin: 1,
              invalidateOnRefresh: true,
            },
          });
          return () => {
            tween.scrollTrigger?.kill();
            tween.kill();
          };
        },
      );
    },
    { scope: container },
  );

  return (
    <div
      ref={container}
      className={cn(
        // Mobile : swipe horizontal natif. Desktop : zone épinglée plein écran,
        // cartes centrées verticalement.
        "overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
        "md:flex md:h-screen md:items-center md:overflow-hidden",
        className,
      )}
    >
      <div ref={track} className={cn("flex w-max", trackClassName)}>
        {children}
      </div>
    </div>
  );
}
