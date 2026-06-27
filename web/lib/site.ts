/**
 * Constantes réelles de l'association (questionnaire + recherche).
 * Source de vérité : cahier des charges §2/§13. Aucun fait inventé.
 */

export const SITE = {
  name: "Que du Kheir",
  // « Kheir » = le bien / la bonté, au sens large (mot arabe, sens universel — non cultuel).
  shortName: "QDK",
  tagline: "L'entraide, simplement.", // PROPOSITION d'accroche (à valider, pas d'accroche officielle)
  pitch:
    "Une association d'entraide et de lutte contre la précarité et l'exclusion, sous toutes leurs formes.",
  founded: "2025",
  legal: "Association loi 1901",
  rna: "W931029608",
  territory: "Seine-Saint-Denis (93) & Paris",
  bureau: 4,
  adherents: 44,
  email: "quedukheir@gmail.com",
  // Téléphone de Bilal Hadji — affichage public à CONFIRMER avec le bureau (cf. récap).
  phone: "07 68 68 78 97",
  phoneContact: "Bilal Hadji",
  url: "https://quedukheir.com",
  credit: "l'Atelier Tech",
  socials: {
    instagram: "https://instagram.com/quedukheir",
    instagramHandle: "@quedukheir",
    tiktok: "https://www.tiktok.com/@quedukheir",
    youtube: "https://www.youtube.com/@quedukheir",
  },
  // Les dons passent par HelloAsso (pas de paiement maison).
  // TODO(build réel) : remplacer par l'URL réelle des campagnes HelloAsso de l'association.
  helloAsso: "https://www.helloasso.com/associations/que-du-kheir",
  helloAssoRecurrent:
    "https://www.helloasso.com/associations/que-du-kheir", // idem, formulaire mensuel
} as const;

export const VALEURS = [
  {
    titre: "Solidarité",
    texte: "Être présents pour celles et ceux que la précarité isole, sans condition.",
  },
  {
    titre: "Entraide",
    texte: "Agir ensemble, sur le terrain, au plus près des besoins réels.",
  },
  {
    titre: "Dignité",
    texte: "Tendre la main avec respect : la personne avant la situation.",
  },
  {
    titre: "Humanité",
    texte: "Un geste simple, sincère, qui rappelle que personne n'est seul.",
  },
  {
    titre: "Transparence",
    texte: "Montrer où va chaque euro. La confiance se mérite, elle se prouve.",
  },
] as const;

/** Navigation principale (header). */
export const NAV = [
  { href: "/qui-sommes-nous", label: "Qui sommes-nous" },
  { href: "/nos-actions", label: "Nos actions" },
  { href: "/transparence", label: "Transparence" },
  { href: "/agenda", label: "Agenda" },
  { href: "/actualites", label: "Actualités" },
  { href: "/contact", label: "Contact" },
] as const;
