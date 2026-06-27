import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import { Logo } from "@/components/brand/logo";
import { Divider } from "@/components/brand/divider";
import { InstagramIcon, YoutubeIcon, TikTokIcon } from "@/components/brand/social-icons";
import { SITE } from "@/lib/site";

const COLS = [
  {
    titre: "L'association",
    links: [
      { href: "/qui-sommes-nous", label: "Qui sommes-nous" },
      { href: "/nos-actions", label: "Nos actions" },
      { href: "/transparence", label: "Notre transparence" },
      { href: "/actualites", label: "Actualités" },
    ],
  },
  {
    titre: "Agir",
    links: [
      { href: "/faire-un-don", label: "Faire un don" },
      { href: "/benevoles", label: "Devenir bénévole" },
      { href: "/agenda", label: "Agenda des maraudes" },
      { href: "/galerie", label: "Galerie" },
    ],
  },
  {
    titre: "Informations",
    links: [
      { href: "/contact", label: "Nous contacter" },
      { href: "/connexion", label: "Espace adhérent" },
      { href: "/mentions-legales", label: "Mentions légales" },
      { href: "/confidentialite", label: "Confidentialité (RGPD)" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="mt-auto bg-marron text-cream/80">
      <div className="mx-auto max-w-[1400px] px-4 pb-28 pt-16 sm:px-6 lg:pb-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="max-w-xs">
            <Logo tone="light" />
            <p className="mt-4 text-sm leading-relaxed text-cream/70">
              Association d'entraide et de lutte contre la précarité, portée par une jeunesse engagée
              en {SITE.territory}.
            </p>
            <div className="mt-5 flex items-center gap-2">
              <SocialLink href={SITE.socials.instagram} label="Instagram">
                <InstagramIcon className="size-[1.15rem]" />
              </SocialLink>
              <SocialLink href={SITE.socials.tiktok} label="TikTok">
                <TikTokIcon className="size-[1.05rem]" />
              </SocialLink>
              <SocialLink href={SITE.socials.youtube} label="YouTube">
                <YoutubeIcon className="size-[1.15rem]" />
              </SocialLink>
            </div>
          </div>

          {COLS.map((col) => (
            <nav key={col.titre} aria-label={col.titre}>
              <h3 className="font-[family-name:var(--font-sans)] text-sm font-bold uppercase tracking-wide text-cream">
                {col.titre}
              </h3>
              <ul className="mt-4 space-y-2.5 text-sm">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-cream/70 transition-colors hover:text-cream">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <Divider tone="light" className="my-10" />

        <div className="grid gap-6 text-sm sm:grid-cols-2 lg:grid-cols-4">
          <InfoItem icon={<MapPin className="size-4" />} label="Zone d'action">
            {SITE.territory}
          </InfoItem>
          <InfoItem icon={<Mail className="size-4" />} label="Contact">
            <a href={`mailto:${SITE.email}`} className="hover:text-cream">
              {SITE.email}
            </a>
          </InfoItem>
          <InfoItem label="Statut">
            {SITE.legal} · {SITE.founded}
            <br />
            <span className="text-cream/60">RNA {SITE.rna}</span>
          </InfoItem>
          <InfoItem label="Reçus fiscaux">
            <span className="text-cream/60">À venir (statuts en cours de validation).</span>
          </InfoItem>
        </div>

        <Divider tone="light" className="my-10" />

        <div className="flex flex-col items-center justify-between gap-3 text-xs text-cream/55 sm:flex-row">
          <p>
            © {SITE.founded}–2026 {SITE.name}. Tous droits réservés.
          </p>
          <p>
            Site réalisé par <span className="text-cream/75">{SITE.credit}</span>.
          </p>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="inline-flex size-10 items-center justify-center rounded-full border border-cream/20 text-cream/80 transition-colors hover:border-cream/50 hover:text-cream"
    >
      {children}
    </a>
  );
}

function InfoItem({
  icon,
  label,
  children,
}: {
  icon?: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-cream/50">
        {icon}
        {label}
      </p>
      <p className="mt-1.5 leading-relaxed text-cream/80">{children}</p>
    </div>
  );
}
