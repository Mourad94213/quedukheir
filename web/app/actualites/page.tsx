import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { PageHero } from "@/components/sections/page-hero";
import { PostCard } from "@/components/sections/post-card";
import { DonationCallout } from "@/components/sections/donation-callout";
import { ARTICLES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Actualités",
  description:
    "Le journal de Que du Kheir : comptes-rendus de terrain, retours de collectes et appels à bénévoles.",
};

export default function ActualitesPage() {
  return (
    <>
      <PageHero
        eyebrow="Le journal"
        title="Nos actualités"
        lede="Comptes-rendus de maraudes, retours de collectes, appels à bénévoles : suivez la vie de l'association et l'effet concret de votre soutien."
      >
        <Badge variant="demo">Exemples de démonstration</Badge>
      </PageHero>

      {/* ===================== GRILLE D'ARTICLES ===================== */}
      <section className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6 sm:py-24">
        <Reveal>
          <p className="mb-8 max-w-2xl text-sm leading-relaxed text-gris">
            Les articles ci-dessous sont des contenus d'exemple, présentés pour illustrer la mise en
            page du journal. Les vraies publications prendront le relais dès la mise en ligne.
          </p>
        </Reveal>
        <RevealGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ARTICLES.map((a) => (
            <RevealItem key={a.slug}>
              <PostCard post={a} />
            </RevealItem>
          ))}
        </RevealGroup>
      </section>

      {/* ===================== APPEL AU DON ===================== */}
      <section className="mx-auto max-w-[1400px] px-4 pb-16 sm:px-6 sm:pb-24">
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
