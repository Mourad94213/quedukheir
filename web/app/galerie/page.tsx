import type { Metadata } from "next";
import Image from "next/image";
import { Camera, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { SectionLede } from "@/components/brand/section-title";
import { VitrineHero } from "@/components/sections/vitrine-hero";
import { SplitHeading } from "@/components/anim/split-heading";
import { RevealMask } from "@/components/anim/reveal-mask";
import { Parallax } from "@/components/anim/parallax";
import { HorizontalScroll } from "@/components/anim/horizontal-scroll";
import { InstagramIcon, TikTokIcon, YoutubeIcon } from "@/components/brand/social-icons";
import { GALERIE } from "@/lib/data";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Galerie",
  description:
    "Des moments réels, partagés sur le terrain : maraudes, kits d'hygiène, collectes scolaires. Que du Kheir en images.",
};

const RESEAUX = [
  { href: SITE.socials.instagram, label: "Instagram", handle: SITE.socials.instagramHandle, Icon: InstagramIcon },
  { href: SITE.socials.tiktok, label: "TikTok", handle: SITE.socials.instagramHandle, Icon: TikTokIcon },
  { href: SITE.socials.youtube, label: "YouTube", handle: SITE.socials.instagramHandle, Icon: YoutubeIcon },
];

export default function GaleriePage() {
  return (
    <>
      <VitrineHero
        eyebrow="En images"
        title="Sur le terrain, avec vous."
        lede="Des moments simples et vrais : la préparation des kits, l'équipe en marche, une collecte de rentrée. Voici quelques images de ce que vos dons et votre temps rendent possible."
      />

      {/* ===================== MOSAÏQUE ÉDITORIALE (reveals au masque) ===================== */}
      <section className="mx-auto max-w-[1500px] px-4 py-20 sm:px-6 sm:py-28">
        <div className="grid auto-rows-[200px] grid-cols-2 gap-3 sm:auto-rows-[280px] sm:gap-5 lg:grid-cols-12">
          {GALERIE.map((g, i) => {
            // Rythme magazine : tailles variées sur 12 colonnes
            const layout = [
              "lg:col-span-7 lg:row-span-2",
              "lg:col-span-5",
              "lg:col-span-5 lg:row-span-2",
              "lg:col-span-7",
              "col-span-2 lg:col-span-12",
            ][i % 5];
            return (
              <RevealMask
                key={g.src + i}
                direction={i % 2 === 0 ? "up" : "left"}
                start="top 90%"
                className={
                  "group relative overflow-hidden rounded-[1.25rem] bg-sable shadow-soft " + layout
                }
              >
                <Image
                  src={g.src}
                  alt={g.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 50vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="scrim-warm absolute inset-0 opacity-80" aria-hidden />
                <figcaption className="absolute inset-x-0 bottom-0 p-5 text-sm font-medium text-cream">
                  {g.legende}
                </figcaption>
              </RevealMask>
            );
          })}
        </div>
      </section>

      {/* ===================== BANDE HORIZONTALE ÉPINGLÉE (film strip) ===================== */}
      <section className="bg-marron pb-12 text-cream sm:pb-16">
        <div className="mx-auto max-w-[1500px] px-4 pt-20 sm:px-6 sm:pt-28">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-cream/60">
            En continu
          </p>
          <SplitHeading
            as="h2"
            scroll
            type="lines"
            className="font-[family-name:var(--font-display)] uppercase leading-[0.95] text-[clamp(1.9rem,5vw,3.4rem)] text-cream"
          >
            Défilez sur le terrain
          </SplitHeading>
        </div>
        <HorizontalScroll
          className="mt-10 sm:mt-12"
          trackClassName="items-center gap-5 px-4 sm:gap-7 sm:px-6 md:px-[7vw]"
        >
          {[...GALERIE, ...GALERIE].map((g, i) => (
            <figure
              key={g.src + i}
              className="relative w-[78vw] shrink-0 overflow-hidden rounded-[1.5rem] sm:w-[46vw] md:h-[68vh] md:w-[32vw] lg:w-[30vw]"
            >
              <div className="relative aspect-[4/5] md:aspect-auto md:h-full">
                <Image
                  src={g.src}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 78vw, 34vw"
                  className="object-cover"
                />
                <div className="scrim-warm absolute inset-0" aria-hidden />
                <figcaption className="absolute inset-x-0 bottom-0 p-5 text-sm font-medium text-cream">
                  {g.legende}
                </figcaption>
              </div>
            </figure>
          ))}
        </HorizontalScroll>
      </section>

      {/* ===================== RÉSEAUX SOCIAUX ===================== */}
      <section className="bg-cream-soft">
        <div className="mx-auto max-w-[1500px] px-4 py-20 sm:px-6 sm:py-28">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-16">
            <div>
              <SplitHeading
                as="h2"
                scroll
                type="lines"
                className="font-[family-name:var(--font-display)] uppercase leading-[0.95] text-[clamp(1.8rem,4.5vw,3rem)] text-encre"
              >
                <>
                  Suivez-nous au plus
                  <br />
                  près du terrain
                </>
              </SplitHeading>
              <SectionLede>
                C'est sur nos réseaux que vit l'actualité de l'association : annonces de maraudes,
                retours de collectes, appels à bénévoles. Rejoignez la communauté{" "}
                <span className="font-semibold text-bordeaux">{SITE.socials.instagramHandle}</span>.
              </SectionLede>
            </div>

            <Parallax speed={0.1}>
              <Reveal className="rounded-3xl bg-marron p-8 text-cream sm:p-10">
                <p className="inline-flex items-center gap-2 text-sm font-semibold text-cream/80">
                  <Camera className="size-5" />
                  Retrouvez-nous sur
                </p>
                <div className="mt-6 flex flex-col gap-3">
                  {RESEAUX.map(({ href, label, handle, Icon }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 rounded-2xl bg-cream/10 px-5 py-4 text-lg font-semibold text-cream transition-colors hover:bg-cream/15"
                    >
                      <Icon className="size-6 shrink-0" />
                      <span>{label}</span>
                      <span className="ml-auto text-base font-normal text-cream/70">{handle}</span>
                    </a>
                  ))}
                </div>
              </Reveal>
            </Parallax>
          </div>
        </div>
      </section>

      {/* ===================== DROIT À L'IMAGE (sobre) ===================== */}
      <section className="mx-auto max-w-[1500px] px-4 pb-20 sm:px-6 sm:pb-28">
        <Reveal className="rounded-2xl border border-marron/10 bg-cream-soft p-6 sm:p-8">
          <h2 className="font-[family-name:var(--font-serif)] text-lg font-bold text-encre">
            Droit à l'image
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-gris">
            Par respect pour les personnes que nous accompagnons, seules des photos autorisées sont
            publiées ici. Nous privilégions les visuels d'équipe, de logistique et de matériel,
            jamais une situation qui pourrait gêner quelqu'un. D'autres images viendront enrichir
            cette galerie au fil de nos actions.
          </p>
          <div className="mt-6">
            <Button asChild variant="secondary">
              <a href={`mailto:${SITE.email}`}>
                Une photo à retirer ? Écrivez-nous
                <ArrowRight className="size-5" />
              </a>
            </Button>
          </div>
        </Reveal>
      </section>
    </>
  );
}
