import { SITE } from "@/lib/site";

/**
 * JSON-LD NGO/Organization — sert la crédibilité (priorité n°1 : Google for
 * Nonprofits). RNA, zone d'action, contact. Inséré dans le <body>.
 */
export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "NGO",
    name: SITE.name,
    alternateName: "QDK",
    description: SITE.pitch,
    foundingDate: SITE.founded,
    url: SITE.url,
    email: SITE.email,
    logo: `${SITE.url}/brand/logo-mark.png`,
    identifier: { "@type": "PropertyValue", propertyID: "RNA", value: SITE.rna },
    areaServed: ["Seine-Saint-Denis", "Paris", "Île-de-France"],
    address: {
      "@type": "PostalAddress",
      addressRegion: "Île-de-France",
      addressCountry: "FR",
    },
    sameAs: [SITE.socials.instagram, SITE.socials.tiktok, SITE.socials.youtube],
    knowsAbout: [
      "Lutte contre la précarité",
      "Aide alimentaire",
      "Maraudes",
      "Distribution de kits d'hygiène",
      "Fournitures scolaires",
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
