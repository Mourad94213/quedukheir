import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { PostCard } from "@/components/sections/post-card";
import { DonationCallout } from "@/components/sections/donation-callout";
import { VitrineHero } from "@/components/sections/vitrine-hero";
import { SplitHeading } from "@/components/anim/split-heading";
import { RevealMask } from "@/components/anim/reveal-mask";
import { Parallax } from "@/components/anim/parallax";
import { ARTICLES } from "@/lib/data";
import { dateLong } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Actualités",
  description:
    "Le journal de Que du Kheir : comptes-rendus de terrain, retours de collectes et appels à bénévoles.",
};

export default function ActualitesPage() {
  const [une, ...reste] = ARTICLES;

  return (
    <>
      <VitrineHero
        eyebrow="Le journal"
        title="Nos actualités"
        lede="Comptes-rendus de maraudes, retours de collectes, appels à bénévoles : suivez la vie de l'association et l'effet concret de votre soutien."
      >
        <Badge variant="demo">Exemples de démonstration</Badge>
      </VitrineHero>

      {/* ===================== ARTICLE À LA UNE (éditorial) ===================== */}
      <section className="mx-auto max-w-[1500px] px-4 py-20 sm:px-6 sm:py-28">
        <Reveal>
          <p className="mb-10 max-w-2xl text-sm leading-relaxed text-gris">
            Les articles ci-dessous sont des contenus d'exemple, présentés pour illustrer la mise en
            page du journal. Les vraies publications prendront le relais dès la mise en ligne.
          </p>
        </Reveal>

        <Link href={`/actualites/${une.slug}`} className="group block">
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
            <Parallax speed={0.12}>
              <RevealMask
                direction="left"
                className="relative overflow-hidden rounded-[1.75rem] bg-marron shadow-lift"
              >
                <div className="relative aspect-[16/11]">
                  <Image
                    src={une.image}
                    alt={une.titre}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                  />
                </div>
              </RevealMask>
            </Parallax>
            <div>
              <div className="flex items-center gap-2 text-xs text-gris">
                <Badge variant="default">{une.categorie}</Badge>
                <time dateTime={une.date}>{dateLong(une.date)}</time>
              </div>
              <SplitHeading
                as="h2"
                scroll
                type="lines"
                className="mt-4 font-[family-name:var(--font-serif)] text-[clamp(1.7rem,3.5vw,2.75rem)] font-bold leading-[1.1] text-encre"
              >
                {une.titre}
              </SplitHeading>
              <Reveal delay={0.1}>
                <p className="mt-4 text-lg leading-relaxed text-gris text-pretty">{une.extrait}</p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-bordeaux">
                  Lire la suite
                  <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </Reveal>
            </div>
          </div>
        </Link>
      </section>

      {/* ===================== AUTRES ARTICLES (reveals au masque) ===================== */}
      {reste.length > 0 && (
        <section className="bg-cream-soft">
          <div className="mx-auto max-w-[1500px] px-4 py-20 sm:px-6 sm:py-28">
            <SplitHeading
              as="h2"
              scroll
              type="lines"
              className="font-[family-name:var(--font-display)] uppercase leading-[0.95] text-[clamp(1.7rem,4.5vw,2.8rem)] text-encre"
            >
              Plus d'articles
            </SplitHeading>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {reste.map((a, i) => (
                <RevealMask key={a.slug} direction="up" delay={i * 0.06} start="top 90%">
                  <PostCard post={a} />
                </RevealMask>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ===================== APPEL AU DON (sobre) ===================== */}
      <section className="mx-auto max-w-[1500px] px-4 py-20 sm:px-6 sm:py-28">
        <Reveal>
          <DonationCallout />
        </Reveal>
        <Reveal className="mt-8 text-center">
          <Button asChild variant="ghost">
            <Link href="/agenda">
              Voir les prochaines actions
              <ArrowRight className="size-5" />
            </Link>
          </Button>
        </Reveal>
      </section>
    </>
  );
}
