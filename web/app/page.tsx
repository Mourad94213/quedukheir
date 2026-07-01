import Link from "next/link";
import Image from "next/image";
import {
  Heart,
  ArrowRight,
  ArrowDown,
  HandHeart,
  Mail,
  Phone,
  Sparkles,
  Package,
  Footprints,
  Ear,
  Receipt,
} from "lucide-react";
import { InstagramIcon } from "@/components/brand/social-icons";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { DemoNotice } from "@/components/ui/demo-notice";
import { Reveal } from "@/components/motion/reveal";
import { StatCounter } from "@/components/motion/stat-counter";
import { SectionLede } from "@/components/brand/section-title";
import { Divider } from "@/components/brand/divider";
import { DonationCallout } from "@/components/sections/donation-callout";
import { AgendaList } from "@/components/sections/agenda";
import { TestimonialSlider } from "@/components/sections/testimonials";
import { BudgetDonut } from "@/components/transparency/charts";
// Couche d'animation éditoriale (vitrine) — cf. lib/gsap + components/anim
import { SplitHeading } from "@/components/anim/split-heading";
import { NarrativeText } from "@/components/anim/narrative-text";
import { RevealMask } from "@/components/anim/reveal-mask";
import { Parallax } from "@/components/anim/parallax";
import { Marquee } from "@/components/anim/marquee";
import { HorizontalScroll } from "@/components/anim/horizontal-scroll";
import { Magnetic } from "@/components/anim/magnetic";
import { ACTIONS, TRANSPARENCE_RESUME, POSTES, GALERIE } from "@/lib/data";
import { SITE, VALEURS } from "@/lib/site";
import { euros, pct } from "@/lib/utils";

/* — Le parcours d'une maraude : storytelling épinglé (factuel, non chiffré) — */
const PARCOURS = [
  {
    n: "01",
    icon: Package,
    titre: "On prépare",
    texte:
      "Kits d'hygiène complets, repas chauds, boissons. Chaque sortie se prépare en amont, avec ce qui manque vraiment dans la rue.",
    image: "/images/collecte-2.jpg",
  },
  {
    n: "02",
    icon: Footprints,
    titre: "On va vers",
    texte:
      "À la rencontre des personnes à la rue, dans le 93 et à Paris. C'est nous qui faisons le premier pas, jamais l'inverse.",
    image: "/images/maraude-1.jpg",
  },
  {
    n: "03",
    icon: Ear,
    titre: "On écoute",
    texte:
      "Prendre le temps d'un échange, d'un regard. Orienter vers les bonnes structures. La dignité avant la situation.",
    image: "/images/terrain-1.jpg",
  },
  {
    n: "04",
    icon: Receipt,
    titre: "On rend compte",
    texte:
      "Chaque euro reçu est tracé et justifié. La transparence n'est pas une option : c'est notre manière de mériter la confiance.",
    image: "/images/collecte-scolaire.jpg",
  },
] as const;

export default function HomePage() {
  const totalDepense = POSTES.reduce((s, p) => s + p.depense, 0);

  return (
    <>
      {/* ============================ HERO ÉDITORIAL ============================ */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-[1500px] items-center gap-10 px-4 pb-10 pt-8 sm:px-6 lg:grid-cols-[1.1fr_1fr] lg:gap-14 lg:pb-20 lg:pt-14">
          {/* Colonne texte */}
          <div className="relative z-10">
            <Reveal y={16}>
              <Badge variant="sable" className="mb-6">
                <Sparkles className="size-3.5" />
                {SITE.legal} · {SITE.territory}
              </Badge>
            </Reveal>

            <SplitHeading
              as="h1"
              type="lines"
              yPercent={120}
              stagger={0.14}
              duration={1.1}
              className="font-[family-name:var(--font-display)] uppercase leading-[0.92] tracking-[-0.02em] text-[clamp(2.8rem,8.5vw,6.25rem)] text-encre"
            >
              <>
                L'entraide,
                <br />
                près de chez
                <br />
                <span className="text-bordeaux">vous.</span>
              </>
            </SplitHeading>

            <Reveal y={20} delay={0.5}>
              <p className="mt-7 max-w-lg text-lg leading-relaxed text-gris text-pretty sm:text-xl">
                Une jeune association qui lutte contre la précarité et l'exclusion en
                Seine-Saint-Denis et à Paris. Maraudes, kits d'hygiène, fournitures scolaires.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Magnetic strength={0.4}>
                  <Button asChild size="lg">
                    <Link href="/faire-un-don">
                      <Heart className="size-5" />
                      Faire un don
                    </Link>
                  </Button>
                </Magnetic>
                <Magnetic strength={0.25}>
                  <Button asChild size="lg" variant="secondary">
                    <Link href="/nos-actions">
                      Découvrir nos actions
                      <ArrowRight className="size-5" />
                    </Link>
                  </Button>
                </Magnetic>
              </div>
              <p className="mt-10 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.18em] text-gris-soft">
                <ArrowDown className="size-4 animate-bounce" aria-hidden />
                Faites défiler
              </p>
            </Reveal>
          </div>

          {/* Colonnes images décalées + parallaxe (esprit magazine Diasporas) */}
          <div className="relative grid grid-cols-2 gap-4 sm:gap-5">
            <Parallax speed={0.55} className="space-y-4 sm:space-y-5">
              <RevealMask
                direction="up"
                className="relative overflow-hidden rounded-[1.75rem] bg-marron shadow-lift"
              >
                <div className="relative aspect-[3/4]">
                  <Image
                    src="/images/maraude-1.jpg"
                    alt="Préparation de kits d'hygiène lors d'une distribution"
                    fill
                    priority
                    sizes="(max-width: 1024px) 45vw, 22vw"
                    className="ken-burns object-cover"
                  />
                </div>
              </RevealMask>
              <RevealMask
                direction="up"
                delay={0.1}
                className="relative overflow-hidden rounded-[1.75rem] bg-marron shadow-soft"
              >
                <div className="relative aspect-square">
                  <Image
                    src="/images/terrain-1.jpg"
                    alt="L'équipe de bénévoles sur le terrain"
                    fill
                    sizes="(max-width: 1024px) 45vw, 22vw"
                    className="object-cover"
                  />
                </div>
              </RevealMask>
            </Parallax>

            <Parallax speed={-0.35} className="mt-10 space-y-4 sm:mt-16 sm:space-y-5">
              <RevealMask
                direction="up"
                delay={0.2}
                className="relative overflow-hidden rounded-[1.75rem] bg-marron shadow-soft"
              >
                <div className="relative aspect-square">
                  <Image
                    src="/images/collecte-scolaire.jpg"
                    alt="Collecte de fournitures scolaires"
                    fill
                    sizes="(max-width: 1024px) 45vw, 22vw"
                    className="object-cover"
                  />
                </div>
              </RevealMask>
              <RevealMask
                direction="up"
                delay={0.3}
                className="relative overflow-hidden rounded-[1.75rem] bg-cream-soft shadow-soft"
              >
                <div className="relative aspect-[3/4]">
                  <Image
                    src="/images/illus-1.png"
                    alt="Le visuel de Que du Kheir : un arbre et un banc"
                    fill
                    sizes="(max-width: 1024px) 45vw, 22vw"
                    className="object-cover"
                  />
                </div>
              </RevealMask>
            </Parallax>
          </div>
        </div>
      </section>

      {/* ===================== MARQUEE VALEURS (défilante) ===================== */}
      <div className="border-y border-marron/10 bg-marron py-6 text-cream sm:py-8">
        <Marquee duration={26}>
          {VALEURS.map((v) => (
            <span
              key={v.titre}
              className="mx-7 inline-flex items-center gap-7 font-[family-name:var(--font-serif)] text-3xl font-bold sm:text-5xl"
            >
              {v.titre}
              <span
                aria-hidden
                className="text-2xl sm:text-4xl"
                style={{ color: "var(--color-data-3)" }}
              >
                ✦
              </span>
            </span>
          ))}
        </Marquee>
      </div>

      {/* ===================== IMPACT (compteurs animés, bande sombre) ===================== */}
      <section className="bg-encre">
        <div className="mx-auto max-w-[1500px] px-4 py-14 sm:px-6 sm:py-20">
          <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4">
            {[
              { v: 44, suffix: "", label: "adhérents engagés", raw: false },
              { v: 400, suffix: "+", label: "repas & kits distribués", raw: false },
              { v: 1, suffix: " / mois", label: "maraude, au minimum", raw: false },
              { v: 2025, suffix: "", label: "année de création", raw: true },
            ].map((s, i) => (
              <Reveal key={s.label} delay={i * 0.08} className="text-center">
                <p
                  className="font-[family-name:var(--font-display)] text-[clamp(2.4rem,6vw,4.5rem)] leading-none"
                  style={{ color: "var(--color-data-3)" }}
                >
                  {s.raw ? "2025" : <StatCounter value={s.v} suffix={s.suffix} />}
                </p>
                <p className="mt-3 text-sm text-cream/70 sm:text-base">{s.label}</p>
              </Reveal>
            ))}
          </div>
          <p className="mt-10 text-center text-xs text-cream/45">
            Chiffres communiqués par l'association. Les données détaillées sont présentées comme
            « à fournir » ou « démonstration ».
          </p>
        </div>
      </section>

      {/* ===================== MISSION (texte narratif au scroll) ===================== */}
      <section className="mx-auto max-w-[1100px] px-4 py-24 sm:px-6 sm:py-36">
        <Reveal>
          <p className="mb-8 text-xs font-bold uppercase tracking-[0.22em] text-bordeaux">
            Notre raison d'être
          </p>
        </Reveal>
        <NarrativeText
          as="p"
          className="font-[family-name:var(--font-serif)] text-[clamp(1.6rem,4vw,3rem)] font-medium leading-[1.2] text-encre text-balance"
        >
          Tendre la main, simplement, sans rien attendre en retour. Portée par une jeunesse
          engagée, Que du Kheir agit sur le terrain pour celles et ceux que la rue isole et que la
          précarité rend invisibles. Avec une exigence : la dignité, toujours.
        </NarrativeText>
        <Reveal delay={0.1}>
          <div className="mt-12">
            <Button asChild variant="ghost">
              <Link href="/qui-sommes-nous">
                Notre histoire
                <ArrowRight className="size-5" />
              </Link>
            </Button>
          </div>
        </Reveal>
      </section>

      {/* ===================== NOS ACTIONS (mise en page décalée + parallaxe) ===================== */}
      <section className="bg-cream-soft">
        <div className="mx-auto max-w-[1500px] px-4 py-20 sm:px-6 sm:py-28">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <SplitHeading
                as="h2"
                scroll
                type="lines"
                className="font-[family-name:var(--font-display)] uppercase leading-[0.95] tracking-[-0.01em] text-[clamp(2rem,5.5vw,4rem)] text-encre"
              >
                <>
                  Ce que nous faisons,
                  <br />
                  concrètement
                </>
              </SplitHeading>
              <SectionLede>
                Des actions de terrain, régulières, et un marqueur qui nous est propre : le kit
                d'hygiène, systématique à chaque sortie.
              </SectionLede>
            </div>
            <Reveal>
              <Button asChild variant="secondary">
                <Link href="/nos-actions">
                  Toutes nos actions
                  <ArrowRight className="size-5" />
                </Link>
              </Button>
            </Reveal>
          </div>

          {/* Colonnes éditoriales décalées : 2 colonnes à vitesses de parallaxe différentes */}
          <div className="mt-16 grid gap-5 sm:grid-cols-2 sm:gap-7 lg:gap-10">
            <Parallax speed={0.22} className="flex flex-col gap-5 sm:gap-7 lg:mt-0">
              {ACTIONS.filter((_, i) => i % 2 === 0).map((a) => (
                <ActionEditorial key={a.slug} action={a} />
              ))}
            </Parallax>
            <Parallax speed={-0.12} className="flex flex-col gap-5 sm:mt-20 sm:gap-7">
              {ACTIONS.filter((_, i) => i % 2 === 1).map((a) => (
                <ActionEditorial key={a.slug} action={a} />
              ))}
            </Parallax>
          </div>
        </div>
      </section>

      {/* ===================== PARCOURS D'UNE MARAUDE (épinglé, horizontal) ===================== */}
      <section className="bg-marron pb-12 text-cream sm:pb-16">
        <div className="mx-auto max-w-[1500px] px-4 pt-20 sm:px-6 sm:pt-28">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-cream/60">
            Sur le terrain
          </p>
          <SplitHeading
            as="h2"
            scroll
            type="lines"
            className="max-w-3xl font-[family-name:var(--font-display)] uppercase leading-[0.95] text-[clamp(2rem,5.5vw,4rem)] text-cream"
          >
            Le parcours d'une maraude
          </SplitHeading>
        </div>

        <HorizontalScroll
          className="mt-10 sm:mt-12"
          trackClassName="items-center gap-5 px-4 sm:gap-8 sm:px-6 md:px-[7vw]"
        >
          {PARCOURS.map((p) => (
            <article
              key={p.n}
              className="relative flex w-[80vw] shrink-0 flex-col justify-end overflow-hidden rounded-[1.75rem] sm:w-[60vw] md:h-[70vh] md:w-[46vw] lg:w-[40vw]"
            >
              <div className="relative aspect-[4/5] sm:aspect-[16/11] md:aspect-auto md:h-full">
                <Image
                  src={p.image}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 80vw, 42vw"
                  className="object-cover"
                />
                <div className="scrim-warm absolute inset-0" aria-hidden />
              </div>
              <div className="absolute inset-0 flex flex-col justify-between p-7 sm:p-9">
                <div className="flex items-center justify-between">
                  <span className="font-[family-name:var(--font-display)] text-5xl text-cream/40 sm:text-6xl">
                    {p.n}
                  </span>
                  <span className="inline-flex size-12 items-center justify-center rounded-full bg-cream/15 text-cream backdrop-blur-sm">
                    <p.icon className="size-6" />
                  </span>
                </div>
                <div>
                  <h3 className="font-[family-name:var(--font-serif)] text-2xl font-bold text-cream sm:text-3xl">
                    {p.titre}
                  </h3>
                  <p className="mt-2.5 max-w-md text-cream/80">{p.texte}</p>
                </div>
              </div>
            </article>
          ))}
        </HorizontalScroll>
      </section>

      {/* ===================== TRANSPARENCE (teaser SOBRE — confiance) ===================== */}
      <section className="mx-auto max-w-[1400px] px-4 py-20 sm:px-6 sm:py-28">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <Badge className="mb-4">Notre différence</Badge>
            <h2 className="font-[family-name:var(--font-serif)] text-[clamp(1.9rem,4vw,3rem)] font-bold leading-[1.08] text-encre text-balance">
              La transparence, c'est notre preuve.
            </h2>
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

      {/* ===================== DON (callout SOBRE) ===================== */}
      <section className="mx-auto max-w-[1400px] px-4 sm:px-6">
        <Reveal>
          <DonationCallout />
        </Reveal>
      </section>

      {/* ===================== GALERIE (mosaïque, reveals au masque) ===================== */}
      <section className="mx-auto max-w-[1500px] px-4 py-20 sm:px-6 sm:py-28">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <SplitHeading
            as="h2"
            scroll
            type="lines"
            className="font-[family-name:var(--font-display)] uppercase leading-[0.95] text-[clamp(2rem,5.5vw,4rem)] text-encre"
          >
            Sur le terrain, en images
          </SplitHeading>
          <SectionLede className="mt-0 max-w-md">
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
        </div>

        <div className="grid auto-rows-[180px] grid-cols-2 gap-3 sm:auto-rows-[240px] sm:gap-4 lg:grid-cols-4">
          {GALERIE.map((g, i) => {
            // Rythme magazine : la 1re et la 4e occupent 2 cellules
            const wide = i === 0;
            const tall = i === 3;
            return (
              <RevealMask
                key={g.src + i}
                direction={i % 2 === 0 ? "up" : "left"}
                start="top 88%"
                className={
                  "group relative overflow-hidden rounded-2xl bg-sable shadow-soft " +
                  (wide ? "col-span-2 row-span-2 " : "") +
                  (tall ? "row-span-2 " : "")
                }
              >
                <Image
                  src={g.src}
                  alt={g.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="scrim-warm absolute inset-0 opacity-80" aria-hidden />
                <figcaption className="absolute inset-x-0 bottom-0 p-4 text-sm font-medium text-cream">
                  {g.legende}
                </figcaption>
              </RevealMask>
            );
          })}
        </div>
      </section>

      {/* ===================== AGENDA ===================== */}
      <section className="bg-cream-soft">
        <div className="mx-auto max-w-[1400px] px-4 py-20 sm:px-6 sm:py-28">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:items-start">
            <div>
              <SplitHeading
                as="h2"
                scroll
                type="lines"
                className="font-[family-name:var(--font-display)] uppercase leading-[0.95] text-[clamp(1.9rem,5vw,3.4rem)] text-encre"
              >
                <>
                  Prochaines
                  <br />
                  actions
                </>
              </SplitHeading>
              <SectionLede>Rejoignez-nous sur le terrain. Quelques heures suffisent.</SectionLede>
              <Button asChild variant="ghost" className="mt-6">
                <Link href="/agenda">
                  Voir tout l'agenda
                  <ArrowRight className="size-5" />
                </Link>
              </Button>
            </div>
            <Reveal delay={0.1}>
              <AgendaList limit={3} />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===================== TÉMOIGNAGES ===================== */}
      <section className="mx-auto max-w-[1400px] px-4 py-20 sm:px-6 sm:py-28">
        <TestimonialSlider />
      </section>

      {/* ===================== BÉNÉVOLES + CONTACT (accès simple, hors réseaux) ===================== */}
      <section className="mx-auto max-w-[1500px] px-4 pb-24 sm:px-6">
        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal className="flex flex-col justify-between rounded-3xl border border-marron/10 bg-cream-soft p-8 sm:p-12">
            <div>
              <SplitHeading
                as="h2"
                scroll
                type="lines"
                className="font-[family-name:var(--font-display)] uppercase leading-[0.95] text-[clamp(1.8rem,4.5vw,3rem)] text-encre"
              >
                <>
                  Donnez un peu
                  <br />
                  de votre temps
                </>
              </SplitHeading>
              <SectionLede>
                Maraudes, logistique, collectes : il y a une place pour chacun. On vous recontacte
                via WhatsApp.
              </SectionLede>
            </div>
            <Magnetic strength={0.3} className="mt-10 self-start">
              <Button asChild size="lg">
                <Link href="/benevoles">
                  <HandHeart className="size-5" />
                  Devenir bénévole
                </Link>
              </Button>
            </Magnetic>
          </Reveal>

          <Reveal delay={0.1} className="rounded-3xl bg-marron p-8 text-cream sm:p-12">
            <h2 className="font-[family-name:var(--font-serif)] text-[clamp(1.8rem,4vw,2.6rem)] font-bold leading-[1.08] text-cream">
              Une question ? Parlons-en.
            </h2>
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

/* — Carte d'action en version éditoriale (image plein cadre + légende montante) — */
function ActionEditorial({
  action,
}: {
  action: (typeof ACTIONS)[number];
}) {
  return (
    <Link
      href={`/nos-actions#${action.slug}`}
      className="group relative block overflow-hidden rounded-[1.5rem] border border-marron/10 bg-cream shadow-soft transition-shadow duration-300 hover:shadow-lift"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-sable">
        <Image
          src={action.image}
          alt={action.titre}
          fill
          sizes="(max-width: 768px) 100vw, 45vw"
          className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
        />
        <div className="absolute left-4 top-4">
          <Badge variant="onDark" className="backdrop-blur-sm">
            {action.rythme}
          </Badge>
        </div>
      </div>
      <div className="p-6 sm:p-7">
        <h3 className="flex items-start justify-between gap-3 font-[family-name:var(--font-serif)] text-xl font-bold text-encre sm:text-2xl">
          {action.titre}
          <ArrowRight className="mt-1 size-5 shrink-0 text-bordeaux transition-transform duration-300 group-hover:translate-x-1" />
        </h3>
        <p className="mt-2.5 text-[0.95rem] leading-relaxed text-gris">{action.resume}</p>
      </div>
    </Link>
  );
}
