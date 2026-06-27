import type { Metadata } from "next";
import { Camera, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { PageHero } from "@/components/sections/page-hero";
import { GalleryGrid } from "@/components/sections/gallery-grid";
import { SectionTitle, SectionLede } from "@/components/brand/section-title";
import { InstagramIcon, TikTokIcon, YoutubeIcon } from "@/components/brand/social-icons";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Galerie",
  description:
    "Des moments réels, partagés sur le terrain : maraudes, kits d'hygiène, collectes scolaires. Que du Kheir en images.",
};

const RESEAUX = [
  {
    href: SITE.socials.instagram,
    label: "Instagram",
    handle: SITE.socials.instagramHandle,
    Icon: InstagramIcon,
  },
  {
    href: SITE.socials.tiktok,
    label: "TikTok",
    handle: SITE.socials.instagramHandle,
    Icon: TikTokIcon,
  },
  {
    href: SITE.socials.youtube,
    label: "YouTube",
    handle: SITE.socials.instagramHandle,
    Icon: YoutubeIcon,
  },
];

export default function GaleriePage() {
  return (
    <>
      <PageHero
        eyebrow="En images"
        title="Sur le terrain, avec vous."
        lede="Des moments simples et vrais : la préparation des kits, l'équipe en marche, une collecte de rentrée. Voici quelques images de ce que vos dons et votre temps rendent possible."
      />

      {/* ===================== GALERIE ===================== */}
      <section className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6 sm:py-24">
        <GalleryGrid />
      </section>

      {/* ===================== RÉSEAUX SOCIAUX ===================== */}
      <section className="bg-cream-soft">
        <div className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6 sm:py-24">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <Reveal>
              <SectionTitle as="h2">Suivez-nous au plus près du terrain</SectionTitle>
              <SectionLede>
                C'est sur nos réseaux que vit l'actualité de l'association : annonces de maraudes,
                retours de collectes, appels à bénévoles. Rejoignez la communauté{" "}
                <span className="font-semibold text-bordeaux">{SITE.socials.instagramHandle}</span>.
              </SectionLede>
            </Reveal>

            <Reveal delay={0.1} className="rounded-3xl bg-marron p-8 text-cream sm:p-10">
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
          </div>
        </div>
      </section>

      {/* ===================== DROIT À L'IMAGE ===================== */}
      <section className="mx-auto max-w-[1400px] px-4 pb-16 sm:px-6 sm:pb-24">
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
