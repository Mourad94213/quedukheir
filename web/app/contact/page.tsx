import type { Metadata } from "next";
import { Mail, Phone, MapPin, Shield, Info } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/motion/reveal";
import { Divider } from "@/components/brand/divider";
import { SectionTitle } from "@/components/brand/section-title";
import { InstagramIcon, TikTokIcon, YoutubeIcon } from "@/components/brand/social-icons";
import { PageHero } from "@/components/sections/page-hero";
import { ContactForm } from "@/components/forms/contact-form";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Une question, une proposition de partenariat, l'envie d'aider ? Écrivez-nous ou appelez-nous. Pas besoin des réseaux sociaux pour joindre Que du Kheir.",
};

const telHref = `tel:+33${SITE.phone.replace(/\s|^0/g, "")}`;

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE.name,
  url: SITE.url,
  email: SITE.email,
  contactPoint: {
    "@type": "ContactPoint",
    email: SITE.email,
    contactType: "Contact général",
    areaServed: "FR",
    availableLanguage: "French",
  },
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHero
        eyebrow="Parlons-en"
        title="Nous contacter"
        lede="Pas besoin des réseaux sociaux pour nous joindre. Écrivez-nous, appelez-nous : nous répondons à chacun, simplement."
      />

      <section className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6 sm:py-24">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-14">
          {/* ----------------------- Formulaire ----------------------- */}
          <Reveal>
            <Card className="p-6 sm:p-8">
              <SectionTitle as="h2">Écrivez-nous un message</SectionTitle>
              <p className="mt-3 mb-7 max-w-xl text-gris leading-relaxed">
                Un projet, une question, l'envie de donner un coup de main ? Remplissez ce formulaire,
                nous revenons vers vous au plus vite.
              </p>
              <ContactForm />
            </Card>
          </Reveal>

          {/* ----------------------- Coordonnées ----------------------- */}
          <Reveal delay={0.1}>
            <div className="space-y-6">
              <div>
                <SectionTitle as="h2">Nos coordonnées</SectionTitle>
                <p className="mt-3 text-gris leading-relaxed">
                  Le plus simple reste l'email : c'est le moyen le plus sûr de nous joindre.
                </p>
              </div>

              {/* Email — gros bouton accessible */}
              <a
                href={`mailto:${SITE.email}`}
                className="flex items-center gap-4 rounded-2xl border border-marron/10 bg-cream-soft p-5 shadow-soft transition-colors hover:border-bordeaux/40 hover:bg-sable"
              >
                <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-bordeaux/10 text-bordeaux">
                  <Mail className="size-6" />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs font-bold uppercase tracking-[0.14em] text-gris">
                    Email
                  </span>
                  <span className="block truncate text-lg font-semibold text-encre">
                    {SITE.email}
                  </span>
                </span>
              </a>

              {/* Téléphone — gros bouton accessible */}
              <a
                href={telHref}
                className="flex items-center gap-4 rounded-2xl border border-marron/10 bg-cream-soft p-5 shadow-soft transition-colors hover:border-bordeaux/40 hover:bg-sable"
              >
                <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-bordeaux/10 text-bordeaux">
                  <Phone className="size-6" />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs font-bold uppercase tracking-[0.14em] text-gris">
                    Téléphone ({SITE.phoneContact})
                  </span>
                  <span className="block text-lg font-semibold text-encre">{SITE.phone}</span>
                </span>
              </a>
              <p className="flex items-start gap-2 -mt-2 text-sm text-gris-soft">
                <Info className="mt-0.5 size-4 shrink-0" aria-hidden />
                Numéro à confirmer pour affichage public.
              </p>

              <Divider dot className="my-2" />

              {/* Réseaux sociaux */}
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-gris">
                  Nous suivre
                </p>
                <div className="mt-3 flex flex-wrap gap-3">
                  <a
                    href={SITE.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 rounded-2xl border border-marron/10 bg-cream-soft px-4 py-3 font-medium text-encre transition-colors hover:border-bordeaux/40 hover:text-bordeaux"
                  >
                    <InstagramIcon className="size-5" />
                    Instagram
                  </a>
                  <a
                    href={SITE.socials.tiktok}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 rounded-2xl border border-marron/10 bg-cream-soft px-4 py-3 font-medium text-encre transition-colors hover:border-bordeaux/40 hover:text-bordeaux"
                  >
                    <TikTokIcon className="size-5" />
                    TikTok
                  </a>
                  <a
                    href={SITE.socials.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 rounded-2xl border border-marron/10 bg-cream-soft px-4 py-3 font-medium text-encre transition-colors hover:border-bordeaux/40 hover:text-bordeaux"
                  >
                    <YoutubeIcon className="size-5" />
                    YouTube
                  </a>
                </div>
              </div>

              {/* Zone d'action */}
              <div className="flex items-start gap-3 rounded-2xl border border-marron/10 bg-cream-soft p-5">
                <MapPin className="mt-0.5 size-6 shrink-0 text-bordeaux" aria-hidden />
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-gris">
                    Zone d'action
                  </p>
                  <p className="mt-1 font-semibold text-encre">{SITE.territory}</p>
                </div>
              </div>

              {/* Statut juridique */}
              <div className="flex items-start gap-3 rounded-2xl border border-marron/10 bg-cream-soft p-5">
                <Shield className="mt-0.5 size-6 shrink-0 text-bordeaux" aria-hidden />
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-gris">
                    Statut de l'association
                  </p>
                  <p className="mt-1 text-encre">
                    {SITE.legal}, déclarée en 2025.
                  </p>
                  <p className="mt-2 flex flex-wrap items-center gap-2 text-sm text-gris">
                    <Badge variant="outline">RNA {SITE.rna}</Badge>
                    <span>Association laïque, à but non lucratif.</span>
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
