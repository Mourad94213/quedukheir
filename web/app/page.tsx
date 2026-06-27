import Link from "next/link";
import Image from "next/image";
import { Heart, ArrowRight, HandHeart, Calendar, Mail, Phone, Sparkles } from "lucide-react";
import { InstagramIcon } from "@/components/brand/social-icons";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { DemoNotice } from "@/components/ui/demo-notice";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { StatCounter } from "@/components/motion/stat-counter";
import { SectionTitle, SectionLede } from "@/components/brand/section-title";
import { Divider } from "@/components/brand/divider";
import { ActionCard } from "@/components/sections/action-card";
import { DonationCallout } from "@/components/sections/donation-callout";
import { ValueGrid } from "@/components/sections/values";
import { AgendaList } from "@/components/sections/agenda";
import { GalleryGrid } from "@/components/sections/gallery-grid";
import { TestimonialSlider } from "@/components/sections/testimonials";
import { BudgetDonut } from "@/components/transparency/charts";
import { ACTIONS, TRANSPARENCE_RESUME, POSTES } from "@/lib/data";
import { SITE } from "@/lib/site";
import { euros, pct } from "@/lib/utils";

export default function HomePage() {
  const totalDepense = POSTES.reduce((s, p) => s + p.depense, 0);

  return (
    <>
      {/* ============================ HERO ============================ */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-[1400px] items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:py-20">
          <Reveal y={28}>
            <Badge variant="sable" className="mb-5">
              <Sparkles className="size-3.5" />
              {SITE.legal} · {SITE.territory}
            </Badge>
            <h1 className="font-[family-name:var(--font-display)] text-[clamp(2.5rem,6vw,4.25rem)] leading-[1.02] text-encre">
              L'entraide,
              <br />
              <span className="text-bordeaux">près de chez vous.</span>
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-gris text-pretty">
              Une jeune association qui lutte contre la précarité et l'exclusion en Seine-Saint-Denis
              et à Paris. Maraudes, kits d'hygiène, fournitures scolaires.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/faire-un-don">
                  <Heart className="size-5" />
                  Faire un don
                </Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link href="/nos-actions">
                  Découvrir nos actions
                  <ArrowRight className="size-5" />
                </Link>
              </Button>
            </div>
          </Reveal>

          <Reveal y={28} delay={0.12} className="relative">
            <div className="relative overflow-hidden rounded-3xl bg-marron shadow-lift">
              <Image
                src="/images/illus-1.png"
                alt="Le visuel de Que du Kheir : un arbre et un banc, symboles d'accueil et d'entraide"
                width={1672}
                height={941}
                priority
                className="h-full w-full object-cover"
              />
            </div>
            <p className="mt-3 text-center text-sm text-gris">
              « Kheir » : le bien, au sens large. Notre repère : un arbre, un banc, une main tendue.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ===================== IMPACT (chiffres réels, sobres) ===================== */}
      <section className="border-y border-marron/10 bg-cream-soft">
        <div className="mx-auto max-w-[1400px] px-4 py-10 sm:px-6">
          <RevealGroup className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {[
              { v: 44, suffix: "", label: "adhérents engagés", raw: false },
              { v: 400, suffix: "+", label: "repas & kits distribués", raw: false },
              { v: 1, suffix: " / mois", label: "maraude, au minimum", raw: false },
              { v: 2025, suffix: "", label: "année de création", raw: true },
            ].map((s) => (
              <RevealItem key={s.label} className="text-center">
                <p className="font-[family-name:var(--font-display)] text-[clamp(1.9rem,4vw,2.75rem)] text-bordeaux">
                  {s.raw ? "2025" : <StatCounter value={s.v} suffix={s.suffix} />}
                </p>
                <p className="mt-1 text-sm text-gris">{s.label}</p>
              </RevealItem>
            ))}
          </RevealGroup>
          <p className="mt-6 text-center text-xs text-gris-soft">
            Chiffres communiqués par l'association. Les données chiffrées détaillées sont présentées
            comme « à fournir » ou « démonstration ».
          </p>
        </div>
      </section>

      {/* ===================== MISSION + VALEURS ===================== */}
      <section className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6 sm:py-24">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-end">
          <Reveal>
            <SectionTitle eyebrow="Notre raison d'être">
              Tendre la main, simplement, sans rien attendre en retour.
            </SectionTitle>
          </Reveal>
          <Reveal delay={0.1}>
            <SectionLede className="lg:mt-0">
              {SITE.pitch} Portée par une jeunesse engagée, Que du Kheir agit sur le terrain pour
              celles et ceux que la rue isole et que la précarité rend invisibles. Avec une exigence :
              la dignité, toujours.
            </SectionLede>
          </Reveal>
        </div>
        <div className="mt-12">
          <ValueGrid />
        </div>
      </section>

      {/* ===================== NOS ACTIONS ===================== */}
      <section className="bg-cream-soft">
        <div className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6 sm:py-24">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <Reveal>
              <SectionTitle>Ce que nous faisons, concrètement</SectionTitle>
              <SectionLede>
                Des actions de terrain, régulières, et un marqueur qui nous est propre : le kit
                d'hygiène, systématique à chaque sortie.
              </SectionLede>
            </Reveal>
            <Reveal delay={0.1}>
              <Button asChild variant="secondary">
                <Link href="/nos-actions">
                  Toutes nos actions
                  <ArrowRight className="size-5" />
                </Link>
              </Button>
            </Reveal>
          </div>
          <RevealGroup className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {ACTIONS.map((a) => (
              <RevealItem key={a.slug}>
                <ActionCard
                  titre={a.titre}
                  rythme={a.rythme}
                  resume={a.resume}
                  image={a.image}
                  href={`/nos-actions#${a.slug}`}
                  alt={a.titre}
                />
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* ===================== TRANSPARENCE (teaser, différenciant) ===================== */}
      <section className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6 sm:py-24">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <Badge className="mb-4">Notre différence</Badge>
            <SectionTitle as="h2">La transparence, c'est notre preuve.</SectionTitle>
            <SectionLede>
              La confiance se mérite. Nous montrons où va chaque euro : répartition des dons, actions
              financées, dépenses détaillées. Un espace dédié, ouvert à nos adhérents et à nos
              partenaires.
            </SectionLede>
            <ul className="mt-6 space-y-3">
              {[
                `${euros(TRANSPARENCE_RESUME.totalRecolte)} récoltés, ${pct(totalDepense, TRANSPARENCE_RESUME.totalRecolte)}% déjà reversés aux actions`,
                "Chaque dépense datée et justifiée",
                "Un aperçu public, sans connexion, pour les partenaires",
              ].map((t) => (
                <li key={t} className="flex items-start gap-2.5 text-encre">
                  <HandHeart className="mt-0.5 size-5 shrink-0 text-bordeaux" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Button asChild size="lg">
                <Link href="/transparence">
                  Voir notre transparence
                  <ArrowRight className="size-5" />
                </Link>
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <Card className="p-6">
              <div className="flex items-center justify-between">
                <h3 className="font-[family-name:var(--font-serif)] text-lg font-bold text-encre">
                  Où va l'argent
                </h3>
                <Badge variant="demo">Démo</Badge>
              </div>
              <BudgetDonut />
              <div className="mt-4">
                <DemoNotice compact />
              </div>
            </Card>
          </Reveal>
        </div>
      </section>

      {/* ===================== DON (callout) ===================== */}
      <section className="mx-auto max-w-[1400px] px-4 sm:px-6">
        <Reveal>
          <DonationCallout />
        </Reveal>
      </section>

      {/* ===================== AGENDA + GALERIE ===================== */}
      <section className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <Reveal>
              <SectionTitle as="h2">
                <span className="inline-flex items-center gap-2">
                  <Calendar className="size-7 text-bordeaux" />
                  Prochaines actions
                </span>
              </SectionTitle>
              <SectionLede>Rejoignez-nous sur le terrain. Quelques heures suffisent.</SectionLede>
            </Reveal>
            <div className="mt-8">
              <AgendaList limit={3} />
            </div>
            <Button asChild variant="ghost" className="mt-5">
              <Link href="/agenda">
                Voir tout l'agenda
                <ArrowRight className="size-5" />
              </Link>
            </Button>
          </div>

          <div>
            <Reveal>
              <SectionTitle as="h2">Sur le terrain</SectionTitle>
              <SectionLede>
                Des moments réels, partagés. Retrouvez-nous aussi sur{" "}
                <a
                  href={SITE.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-bordeaux underline-offset-2 hover:underline"
                >
                  Instagram {SITE.socials.instagramHandle}
                </a>
                .
              </SectionLede>
            </Reveal>
            <div className="mt-8">
              <GalleryGrid limit={4} />
            </div>
          </div>
        </div>
      </section>

      {/* ===================== TÉMOIGNAGES ===================== */}
      <section className="bg-cream-soft">
        <div className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6 sm:py-24">
          <TestimonialSlider />
        </div>
      </section>

      {/* ===================== BÉNÉVOLES + CONTACT (accès simple, hors réseaux) ===================== */}
      <section className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6 sm:py-24">
        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal className="flex flex-col justify-between rounded-3xl border border-marron/10 bg-cream-soft p-8 sm:p-10">
            <div>
              <SectionTitle as="h2">Donnez un peu de votre temps</SectionTitle>
              <SectionLede>
                Maraudes, logistique, collectes : il y a une place pour chacun. On vous recontacte
                via WhatsApp.
              </SectionLede>
            </div>
            <Button asChild size="lg" className="mt-8 self-start">
              <Link href="/benevoles">
                <HandHeart className="size-5" />
                Devenir bénévole
              </Link>
            </Button>
          </Reveal>

          <Reveal delay={0.1} className="rounded-3xl bg-marron p-8 text-cream sm:p-10">
            <SectionTitle as="h2" tone="light">
              Une question ? Parlons-en.
            </SectionTitle>
            <p className="mt-4 text-cream/80">
              Pas besoin des réseaux sociaux pour nous joindre. Écrivez-nous ou appelez : nous
              répondons à chacun.
            </p>
            <div className="mt-7 flex flex-col gap-3">
              <a
                href={`mailto:${SITE.email}`}
                className="inline-flex items-center gap-3 rounded-2xl bg-cream/10 px-5 py-4 text-lg font-semibold text-cream transition-colors hover:bg-cream/15"
              >
                <Mail className="size-6 shrink-0" />
                {SITE.email}
              </a>
              <a
                href={`tel:+33${SITE.phone.replace(/\s|^0/g, "")}`}
                className="inline-flex items-center gap-3 rounded-2xl bg-cream/10 px-5 py-4 text-lg font-semibold text-cream transition-colors hover:bg-cream/15"
              >
                <Phone className="size-6 shrink-0" />
                {SITE.phone}
              </a>
              <a
                href={SITE.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-2xl bg-cream/10 px-5 py-4 text-lg font-semibold text-cream transition-colors hover:bg-cream/15"
              >
                <InstagramIcon className="size-6 shrink-0" />
                {SITE.socials.instagramHandle}
              </a>
            </div>
            <Divider tone="light" className="my-6" />
            <Button asChild variant="onDark">
              <Link href="/contact">
                Page contact complète
                <ArrowRight className="size-5" />
              </Link>
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
