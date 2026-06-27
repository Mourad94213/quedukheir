"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { Menu, X, Heart, UserRound } from "lucide-react";
import { Logo } from "@/components/brand/logo";
import { Button } from "@/components/ui/button";
import { NAV, SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const reduce = useReducedMotion();

  React.useEffect(() => setOpen(false), [pathname]);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + "/");

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-colors duration-300",
        scrolled
          ? "border-b border-marron/10 bg-cream/90 backdrop-blur-md supports-[backdrop-filter]:bg-cream/75"
          : "bg-cream",
      )}
    >
      <div className="mx-auto flex h-[68px] max-w-[1400px] items-center justify-between gap-4 px-4 sm:px-6">
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navigation principale">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "relative rounded-full px-3.5 py-2 text-[0.95rem] font-medium transition-colors",
                isActive(item.href) ? "text-bordeaux" : "text-encre/80 hover:text-encre",
              )}
            >
              {item.label}
              {isActive(item.href) && (
                <span className="absolute inset-x-3.5 -bottom-px h-0.5 rounded-full bg-bordeaux" />
              )}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Link
            href="/connexion"
            className="inline-flex items-center gap-1.5 rounded-full px-3 py-2 text-sm font-medium text-encre/80 transition-colors hover:text-bordeaux"
          >
            <UserRound className="size-4" aria-hidden />
            Espace adhérent
          </Link>
          <Button asChild size="sm">
            <Link href="/faire-un-don">
              <Heart className="size-4" aria-hidden />
              Faire un don
            </Link>
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex size-11 items-center justify-center rounded-full text-encre transition-colors hover:bg-encre/[0.06] lg:hidden"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 top-[68px] z-40 overflow-y-auto bg-cream lg:hidden"
            initial={reduce ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            <nav className="flex flex-col gap-1 px-4 py-6" aria-label="Navigation mobile">
              {NAV.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-2xl px-4 py-4 text-xl font-semibold transition-colors",
                    isActive(item.href) ? "bg-bordeaux/[0.08] text-bordeaux" : "text-encre hover:bg-encre/[0.04]",
                  )}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/benevoles"
                className="rounded-2xl px-4 py-4 text-xl font-semibold text-encre transition-colors hover:bg-encre/[0.04]"
              >
                Devenir bénévole
              </Link>
              <div className="mt-4 flex flex-col gap-3 border-t border-marron/10 pt-6">
                <Button asChild size="lg" variant="secondary">
                  <Link href="/connexion">
                    <UserRound className="size-5" aria-hidden />
                    Espace adhérent
                  </Link>
                </Button>
                <Button asChild size="lg">
                  <Link href="/faire-un-don">
                    <Heart className="size-5" aria-hidden />
                    Faire un don
                  </Link>
                </Button>
                <p className="pt-2 text-center text-sm text-gris">
                  {SITE.email} · {SITE.territory}
                </p>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
