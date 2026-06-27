/**
 * ============================================================================
 * DONNÉES DE DÉMONSTRATION — chiffres illustratifs, NON réels.
 * ----------------------------------------------------------------------------
 * Aucune statistique ici n'est présentée comme réelle. Tous les montants,
 * dons et dépenses sont fictifs et servent à montrer le fonctionnement du
 * dashboard de transparence en rendez-vous client.
 * TODO(build réel) : brancher HelloAsso / compta / CRM. Voir le récap.
 * ============================================================================
 */

export const DEMO_PERIODE = "Année 2026 (démo)";

/* — Actions concrètes RÉELLES de l'association (libellés véridiques) — */
export const ACTIONS = [
  {
    slug: "maraudes",
    titre: "Maraudes mensuelles",
    rythme: "≈ 1 par mois",
    resume:
      "À la rencontre des personnes à la rue : repas chauds, écoute, orientation. Le cœur de notre présence sur le terrain.",
    detail:
      "Chaque mois, une équipe de bénévoles part à la rencontre des personnes sans abri du 93 et de Paris. On distribue des repas, des boissons chaudes, on prend le temps d'échanger et d'orienter vers les structures adaptées. Des actions supplémentaires sont menées dès que possible.",
    image: "/images/maraude-1.jpg",
    finance: "Logistique des maraudes",
  },
  {
    slug: "kits-hygiene",
    titre: "Kits d'hygiène",
    rythme: "Systématique",
    resume:
      "Notre marqueur. À chaque sortie, un kit d'hygiène complet : ce que la rue rend si difficile à se procurer.",
    detail:
      "La distribution de kits d'hygiène est systématique à chaque action — c'est notre signature. Dentifrice, brosse à dents, savon, lingettes, protections… des produits essentiels, trop souvent inaccessibles quand on vit dans la rue.",
    image: "/images/maraude-1.jpg",
    finance: "Kits d'hygiène",
  },
  {
    slug: "fournitures-scolaires",
    titre: "Fournitures scolaires",
    rythme: "À la rentrée",
    resume:
      "Chaque été, on prépare la rentrée d'enfants et de familles en difficulté. Distribuée en plusieurs vagues.",
    detail:
      "À l'approche de la rentrée, nous collectons et distribuons des fournitures scolaires aux familles en difficulté — du primaire au lycée. Une collecte préparée tout l'été et distribuée en plusieurs vagues, pour que chaque enfant aborde l'année sereinement.",
    image: "/images/collecte-scolaire.jpg",
    finance: "Fournitures scolaires",
  },
  {
    slug: "lutte-exclusion",
    titre: "Lutte contre l'exclusion",
    rythme: "Toute l'année",
    resume:
      "Contre la précarité et l'exclusion sous toutes leurs formes : sociale, culturelle, administrative.",
    detail:
      "Au-delà de l'urgence, nous agissons contre l'exclusion sous toutes ses formes. Présence, lien, accompagnement : redonner une place à celles et ceux que la précarité rend invisibles.",
    image: "/images/terrain-1.jpg",
    finance: "Maraudes (logistique)",
  },
] as const;

/* — Projets 1–2 ans (objectifs RÉELS du questionnaire) — */
export const PROJETS = [
  {
    titre: "Cours de sport pour mamans isolées",
    resume:
      "Des séances régulières pour souffler, se retrouver, reprendre confiance. Un projet qui nous tient à cœur.",
    statut: "À venir",
  },
  {
    titre: "Accompagnement administratif",
    resume:
      "Aider à remplir un dossier, comprendre un courrier, ne plus affronter seul·e les démarches.",
    statut: "À venir",
  },
  {
    titre: "Denrées aux structures locales",
    resume:
      "Fournir régulièrement des denrées aux structures du territoire qui accueillent les plus fragiles.",
    statut: "À venir",
  },
] as const;

/* — Dashboard de transparence : vue d'ensemble (DÉMO) — */
export const TRANSPARENCE_RESUME = {
  totalRecolte: 18450,
  donateurs: 213,
  campagneMois: "Kits d'hygiène — hiver solidaire",
  campagneObjectif: 4000,
  campagneAtteint: 2640,
};

/* — Affectation des fonds par poste (prévu / alloué / dépensé) — DÉMO — */
export const POSTES = [
  {
    key: "kits-hygiene",
    label: "Kits d'hygiène",
    prevu: 4500,
    alloue: 4200,
    depense: 3380,
    color: "var(--color-data-1)",
  },
  {
    key: "alimentaire",
    label: "Collecte alimentaire / denrées",
    prevu: 4000,
    alloue: 3600,
    depense: 2950,
    color: "var(--color-data-2)",
  },
  {
    key: "scolaire",
    label: "Fournitures scolaires",
    prevu: 3500,
    alloue: 3500,
    depense: 3120,
    color: "var(--color-data-3)",
  },
  {
    key: "maraudes",
    label: "Maraudes (logistique)",
    prevu: 2800,
    alloue: 2400,
    depense: 1980,
    color: "var(--color-data-4)",
  },
  {
    key: "sport-mamans",
    label: "Sport mamans isolées",
    prevu: 1800,
    alloue: 900,
    depense: 0,
    color: "var(--color-data-5)",
  },
  {
    key: "accompagnement",
    label: "Accompagnement administratif",
    prevu: 1200,
    alloue: 600,
    depense: 220,
    color: "var(--color-data-6)",
  },
] as const;

/* — Suivi par action / projet (objectif vs atteint) — DÉMO — */
export const PROJETS_SUIVI = [
  {
    titre: "Hiver solidaire — kits d'hygiène",
    objectif: 4000,
    atteint: 2640,
    finance: "1 kit d'hygiène complet ≈ 6 €",
    statut: "En cours",
    date: "2026-12-15",
  },
  {
    titre: "Collecte de rentrée scolaire",
    objectif: 3500,
    atteint: 3500,
    finance: "Un cartable garni ≈ 35 €",
    statut: "Réalisée",
    date: "2026-09-01",
  },
  {
    titre: "Maraudes mensuelles — logistique",
    objectif: 2800,
    atteint: 2100,
    finance: "Une maraude (repas + transport) ≈ 230 €",
    statut: "En cours",
    date: "2026-11-30",
  },
  {
    titre: "Cours de sport — mamans isolées",
    objectif: 1800,
    atteint: 540,
    finance: "Un cycle de 10 séances ≈ 600 €",
    statut: "À venir",
    date: "2027-02-01",
  },
] as const;

/* — Journal des dépenses (transparence) — DÉMO — */
export const DEPENSES = [
  { date: "2026-11-08", poste: "Kits d'hygiène", montant: 612, desc: "Achat dentifrices, savons, brosses (lot 120 kits)" },
  { date: "2026-11-05", poste: "Maraudes (logistique)", montant: 234, desc: "Repas chauds + boissons, maraude de novembre" },
  { date: "2026-10-22", poste: "Collecte alimentaire", montant: 480, desc: "Denrées non périssables pour structure partenaire" },
  { date: "2026-10-14", poste: "Kits d'hygiène", montant: 528, desc: "Protections hygiéniques et lingettes (lot)" },
  { date: "2026-09-28", poste: "Fournitures scolaires", montant: 1240, desc: "Cartables, cahiers, stylos — vague 2 rentrée" },
  { date: "2026-09-03", poste: "Fournitures scolaires", montant: 1880, desc: "Fournitures primaire/collège — vague 1 rentrée" },
  { date: "2026-08-19", poste: "Maraudes (logistique)", montant: 198, desc: "Carburant et consommables maraude d'été" },
  { date: "2026-07-30", poste: "Accompagnement administratif", montant: 220, desc: "Impressions, fournitures permanence d'aide" },
] as const;

/* — Évolution mensuelle des dons (DÉMO) — */
export const DONS_MENSUELS = [
  { mois: "Juin", montant: 1180 },
  { mois: "Juil.", montant: 1640 },
  { mois: "Août", montant: 2100 },
  { mois: "Sept.", montant: 3450 },
  { mois: "Oct.", montant: 2380 },
  { mois: "Nov.", montant: 2640 },
] as const;

/* — Agenda : prochaines actions (DÉMO, à valider) — */
export const EVENEMENTS = [
  { date: "2026-12-13", titre: "Maraude de décembre", type: "Maraude", lieu: "Métro Stalingrad", ville: "Paris 19e", places: 6, statut: "Inscriptions ouvertes" },
  { date: "2026-12-20", titre: "Distribution kits d'hygiène — hiver", type: "Distribution", lieu: "Centre-ville", ville: "Saint-Denis (93)", places: 8, statut: "Inscriptions ouvertes" },
  { date: "2027-01-10", titre: "Maraude de janvier", type: "Maraude", lieu: "Gare du Nord", ville: "Paris 10e", places: 6, statut: "Bientôt" },
  { date: "2027-01-24", titre: "Préparation collecte alimentaire", type: "Logistique", lieu: "Local associatif", ville: "Aubervilliers (93)", places: 10, statut: "Bientôt" },
  { date: "2027-02-07", titre: "Maraude de février", type: "Maraude", lieu: "Place de la République", ville: "Paris 11e", places: 6, statut: "Bientôt" },
] as const;

/* — Galerie : photos réelles de terrain + visuels de marque — */
export const GALERIE = [
  { src: "/images/maraude-1.jpg", alt: "Préparation de kits d'hygiène lors d'une distribution", legende: "Distribution — kits d'hygiène" },
  { src: "/images/terrain-1.jpg", alt: "Marche solidaire de l'équipe de bénévoles en forêt", legende: "L'équipe, sur le terrain" },
  { src: "/images/collecte-scolaire.jpg", alt: "L'équipe lors de la collecte de fournitures scolaires", legende: "Collecte de rentrée scolaire" },
  { src: "/images/collecte-2.jpg", alt: "Remise de fournitures scolaires", legende: "Fournitures distribuées en plusieurs vagues" },
  { src: "/images/illus-1.png", alt: "Visuel de marque : l'arbre et le banc Que du Kheir", legende: "Notre visuel : l'arbre et le banc" },
] as const;

/* — Actualités / blog (exemples étiquetés démo) — */
export const ARTICLES = [
  {
    slug: "collecte-rentree-2026",
    titre: "Grâce à vous, la collecte de rentrée a été un vrai succès",
    date: "2026-09-10",
    categorie: "Compte-rendu",
    image: "/images/collecte-scolaire.jpg",
    extrait:
      "Tout l'été, nous avons préparé la rentrée d'enfants et de familles en difficulté. Vos dons, complétés par nos achats, ont permis de distribuer des fournitures en plusieurs vagues.",
  },
  {
    slug: "retour-maraudes-automne",
    titre: "Retour en images sur nos dernières maraudes",
    date: "2026-11-12",
    categorie: "Terrain",
    image: "/images/maraude-1.jpg",
    extrait:
      "Plus de 400 repas et kits d'hygiène distribués sur les dernières sorties. Merci à toutes celles et ceux qui contribuent, de près ou de loin.",
  },
  {
    slug: "appel-benevoles-hiver",
    titre: "Hiver solidaire : nous avons besoin de vous",
    date: "2026-11-25",
    categorie: "Appel",
    image: "/images/terrain-1.jpg",
    extrait:
      "Le froid s'installe et les besoins augmentent. Rejoignez nos maraudes d'hiver : quelques heures par mois suffisent à changer une soirée.",
  },
] as const;

/* — Témoignages (placeholders étiquetés tant que non fournis) — */
export const TEMOIGNAGES = [
  { quote: "On vous a tendu la main sans rien attendre. Ça faisait longtemps que ça ne m'était pas arrivé.", nom: "Bénéficiaire d'une maraude", role: "Témoignage à recueillir · exemple" },
  { quote: "À 22 ans, donner quelques heures par mois, c'est concret. On voit directement à qui ça sert.", nom: "Bénévole", role: "Témoignage à recueillir · exemple" },
  { quote: "Une jeune association sérieuse, qui rend compte de ce qu'elle fait. C'est ce qui nous a convaincus.", nom: "Partenaire local", role: "Témoignage à recueillir · exemple" },
] as const;

/* — Liste de besoins matériels (dons matériels) — */
export const BESOINS = [
  { categorie: "Hygiène", items: ["Dentifrice & brosses à dents", "Savon, gel douche", "Protections hygiéniques", "Lingettes, mouchoirs", "Rasoirs jetables"] },
  { categorie: "Alimentaire", items: ["Conserves & plats non périssables", "Eau, boissons chaudes", "Barres, fruits secs", "Café, thé, sucre"] },
  { categorie: "Scolaire", items: ["Cartables & trousses", "Cahiers, classeurs", "Stylos, feutres, crayons", "Calculatrices"] },
] as const;

/* — Bureau (4 personnes) — RÉEL pour 2 membres, le reste anonymisé/démo — */
export const BUREAU = [
  { nom: "Bilal Hadji", role: "Référent — bureau", initiales: "BH" },
  { nom: "Hadil Ghaoui", role: "Membre du bureau", initiales: "HG" },
  { nom: "Membre du bureau", role: "Bureau · à compléter", initiales: "QDK" },
  { nom: "Membre du bureau", role: "Bureau · à compléter", initiales: "QDK" },
] as const;

/* ============================================================================
 * COMPTES DE DÉMONSTRATION (auth simulée — localStorage, aucun back-end)
 * ========================================================================== */
export type Role = "adherent" | "bureau";
export const DEMO_COMPTES: { email: string; password: string; role: Role; nom: string }[] = [
  { email: "adherent@quedukheir.com", password: "demo", role: "adherent", nom: "Adhérent·e (démo)" },
  { email: "bureau@quedukheir.com", password: "demo", role: "bureau", nom: "Bureau (démo)" },
];

/* — Adhérents (table démo, espace bureau) — */
export const ADHERENTS_DEMO = [
  { nom: "A. Benali", statut: "À jour", depuis: "2026-01" },
  { nom: "S. Moreau", statut: "À jour", depuis: "2026-02" },
  { nom: "K. Diallo", statut: "À jour", depuis: "2026-03" },
  { nom: "L. Petit", statut: "En attente", depuis: "2026-05" },
  { nom: "Y. Haddad", statut: "À jour", depuis: "2026-06" },
] as const;

/* — Inscriptions bénévoles reçues (table démo, espace bureau) — */
export const BENEVOLES_DEMO = [
  { nom: "Inès R.", dispo: "Week-ends", competences: "Logistique", vehicule: true, recu: "2026-11-20" },
  { nom: "Marc T.", dispo: "Soirs en semaine", competences: "Maraude, écoute", vehicule: false, recu: "2026-11-18" },
  { nom: "Sofia B.", dispo: "1 fois / mois", competences: "Communication", vehicule: true, recu: "2026-11-15" },
] as const;
