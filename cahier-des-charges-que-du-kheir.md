# CAHIER DES CHARGES — Prototype « Que du Kheir » (Next.js / TypeScript + Taste Skill)

> **Mode d'emploi.** Dépose ce fichier à la racine du repo (Taste Skill déjà installé). Lance Claude Code en `ultrathink` :
>
> > « ultrathink. Lis intégralement `cahier-des-charges-que-du-kheir.md` à la racine : c'est le cahier des charges complet d'un site vitrine pour l'association **Que du Kheir** (issu de leur questionnaire rempli + recherche). Il couvre la DA à **extraire de leur site/Instagram**, la référence d'inspiration (Diasporas), les specs Next.js, les fonctionnalités (dons HelloAsso, bénévoles, agenda, galerie, blog) et **une feature clé : un espace adhérent avec dashboard de TRANSPARENCE des dons/dépenses**. **Étape 1 : exécute la procédure d'assets (§5)** — tente d'extraire le **logo** et les **couleurs** depuis leur site/Insta, sinon applique la DA de repli documentée — AVANT de coder. Construis ensuite le prototype Next.js, fidèle à un ton **chaleureux, humain, épuré et digne de confiance**, avec de belles animations sobres via Taste Skill. Installe les dépendances, vérifie `npm run dev` sans erreur, puis donne-moi un récap (arborescence, lancement, inventaire assets récupérés/placeholders, points à brancher au build réel). »
>
> « Specs » = *comment* ; « contenu / DA » = *quoi* et *dans quel style*.

---

## 0. Contexte (ne pas afficher tel quel dans le site)

**Que du Kheir** est une **association d'entraide et de lutte contre la précarité** (loi 1901), créée en **2025**, basée en **Seine-Saint-Denis (93) et à Paris**. Bureau de **4 personnes**, **44 adhérents**, **portée par une jeunesse engagée**. Elle a déjà un site (**quedukheir.com**) jugé perfectible. **On lui fait un site nettement meilleur** : une **vraie vitrine** crédible, chaleureuse, qui informe, rassure les partenaires/institutions, et facilite dons & engagement.

**Source de vérité = leur questionnaire rempli** (toutes les réponses sont reprises en §2/§3). **Référence d'inspiration fournie : `wearediasporas.com`** (média associatif — éditorial, chaleureux, sobre, palette marron/crème). **Ils veulent rester proches de leur univers actuel** (« quelque chose qui ressemble à ce qui existe actuellement »).

**Feature spécifique demandée par le porteur du projet (PAS dans le CSV, à intégrer) :** un **espace adhérent** (comptes + connexion) donnant accès à un **dashboard de TRANSPARENCE** : visualisation de **l'ensemble des dons récoltés** et de **leur affectation / dépenses prévues** (ex. X € fournitures scolaires, Y € collecte alimentaire, Z € kits d'hygiène…). Les adhérents voient **où va l'argent**. La **transparence** est l'une de leurs valeurs → c'est un atout différenciant fort.

C'est une maquette **cliquable** (mocks), destinée à un **rendez-vous client**.

---

## 1. Ton rôle

Tu es directeur artistique + designer produit (sites d'associations / ONG, orientés confiance & dons). Construis un **prototype web Next.js navigable, mobile-first, premium mais chaleureux et humain** pour **Que du Kheir**, avec des animations **sobres et élégantes**. Pas de lorem ipsum : utilise les **vrais contenus du questionnaire** (§2/§3) et les **vraies images** récupérées (§5). Langue : **français**.

---

## 2. L'association (d'après leur questionnaire)

- **Nom officiel** : **Que du Kheir**. (« Kheir » = le bien / la bonté.) Slogan : **aucun pour l'instant** → tu peux proposer une accroche sobre (ex. « *L'entraide, simplement.* ») **présentée comme proposition**, sans l'imposer.
- **Pitch (réel)** : *« Une association d'entraide et de lutte contre la précarité. »* À enrichir : lutte contre la précarité et l'exclusion **sous toutes leurs formes** (sociale, culturelle…).
- **Création** : **2025**, loi 1901. **RNA : W931029608.** Reçus fiscaux : **bientôt** (en attente de validation des statuts par la préfecture) → **ne pas afficher “réduction d'impôt” comme acquis** ; mentionner « reçus fiscaux à venir ».
- **Territoire** : **Seine-Saint-Denis (93)** principalement + **Paris**.
- **Équipe** : **bureau de 4**, **44 adhérents**. **Identité : la jeunesse engagée.**
- **Actions concrètes (réelles)** :
  - **Maraudes** (~**1 par mois**, + actions selon possibilités).
  - **Distribution de kits d'hygiène** (systématique — un marqueur fort de l'asso).
  - **Distribution de fournitures scolaires** (période de rentrée).
  - **Lutte contre la précarité et l'exclusion** (sociale, culturelle…).
  - **Campagne de dons mensuelle**.
- **Valeurs (réelles)** : **Solidarité · Entraide · Dignité · Humanité · Transparence**.
- **Ce qui les différencie** : leur **jeunesse**, la **distribution systématique de kits d'hygiène**.
- **Objectifs 1–2 ans (réels)** : maintenir **1 distribution/mois** ; lancer des **cours de sport pour mamans isolées** ; **accompagnement administratif** ; **fournir des denrées aux structures locales**.
- **Contacts** : email **quedukheir@gmail.com** ; interlocuteur **Bilal Hadji — 07 68 68 78 97** ; autre membre bureau : **Hadil Ghaoui**. **Décisions : le bureau** (en dernier recours Bilal).
- **Réseaux** : **Instagram @quedukheir** (réseau principal), **TikTok**, **YouTube**. Afficher le **flux Instagram** : à discuter (prévoir l'emplacement).
- **Domaine/hébergement** : **quedukheir.com** chez **O2switch** (déjà payé). **Gestion bénévoles** : via **WhatsApp**. **Dons** : **HelloAsso**.

---

## 3. Cadrage du site (d'après leur questionnaire)

- **Buts du site (cochés)** : **récolter des dons** · **faire connaître l'association (notoriété/crédibilité)** · **informer sur les actions et le calendrier** · **rassurer partenaires/institutions/mairie**.
- **Priorité n°1 (réelle)** : **obtenir l'accès au programme Google for Nonprofits** (→ le site doit **crédibiliser l'asso** : présentation claire, mentions légales, RNA, contact, transparence — les critères d'éligibilité). Sinon, **informer sur les actions / servir de vitrine**.
- **Réussite à 6 mois** : avoir accès à Google for Nonprofits ; sinon, **informer** ; **et un accès pour les personnes âgées qui n'ont pas Instagram** (→ le site = **point d'entrée hors réseaux**, simple et accessible).
- **Cibles** : **institutions / partenaires**, et **public non-Insta (ex. personnes âgées)**.
- **Émotion voulue** : **chaleureux** (et confiance/sérieux implicites pour les partenaires).
- **Action principale visée** : **don** (via HelloAsso) + faire connaître.
- **Pages imaginées (réelles)** : **Qui sommes-nous / Notre histoire · Nos actions / Nos missions · Faire un don · Agenda / Prochaines maraudes · Galerie photos / vidéos · Actualités / Blog · Nous contacter**.
- **Contenus** : textes **en partie** prêts (compléter sobrement, **sans inventer de faits**) ; **quelques** photos utilisables (cf. §5) ; **chiffres clés : oui** (repas/distributions/bénéficiaires — **à demander/valider**, ne pas inventer de chiffres précis) ; **témoignages : oui** (placeholders étiquetés tant que non fournis).
- **Dons** : **oui, en ligne**, mais **le site renvoie vers HelloAsso** (pas de paiement maison). Dons **ponctuels et récurrents**. **Dons matériels : à discuter** → prévoir une **liste de besoins** + point de collecte (léger). **Campagne mensuelle** à mettre en avant.
- **Bénévoles** : formulaire d'inscription **à discuter** → **le prévoir** (utile), infos (nom, dispo, compétences, véhicule…), aujourd'hui géré sur **WhatsApp**. **Newsletter : non** (ne pas imposer ; emplacement optionnel discret).
- **Langues** : **français** uniquement. **Modifier le contenu soi-même : non** (ils délèguent → mais prévoir une archi clean, CMS-ready pour plus tard). **Maintenance/formation/stats : à discuter.**
- **Style visuel voulu** : **épuré / minimaliste** + **chaleureux / humain**. **Pas de dimension spirituelle/cultuelle** (l'asso **n'a pas** de dimension religieuse affichée → **rester laïque, neutre, universel** ; **pas** de motifs religieux). 
- **À éviter** : ils veulent **rester proches de leur existant** (ne pas dénaturer).
- **Logo : oui** (ils l'ont) → **à extraire** (§5). **Charte graphique : oui** (ils l'enverront) → **non dispo maintenant** → **DA de repli** (§4/§5), re-skinnable.
- **Inspiration AIMÉE** : **wearediasporas.com** (éditorial, chaleureux, sobre, marron/crème).

---

## 4. DIRECTION ARTISTIQUE — extraire la leur, sinon repli chaleureux/sobre

> **Leur charte arrive plus tard.** Donc : **extraire un maximum de leur site/Insta** (logo, couleurs — §5) ; à défaut, appliquer la **DA de repli ci-dessous**, **chaleureuse, épurée, humaine, digne de confiance**, dans l'esprit de leur référence **Diasporas** (marron/crème/éditorial) et **compatible** avec un ré-habillage quand la vraie charte arrivera. **Tous les tokens centralisés** pour re-skin trivial.

### Esprit (validé par le questionnaire)
**Épuré / minimaliste + chaleureux / humain.** Confiance et sérieux pour les partenaires, proximité et émotion pour les donateurs. **Laïque et universel** (aucun motif cultuel). La **photographie de terrain** (maraudes, distributions, sourires, mains) porte l'émotion ; le reste respire (blanc/crème, typo soignée).

### Palette de repli (à REMPLACER par les couleurs extraites/charte)
> Inspirée de leur référence (chaleureux, terreux, digne) — **placeholders** :
- **`creme`** (fond clair dominant, blanc cassé chaud) : `#F5F0E8`
- **`terre`** (brun chaleureux — texte fort & ancrage, esprit Diasporas) : `#5B4636`
- **`ocre`** (accent chaud principal — CTA, liens, soulignés) : `#C08A3E`
- **`vert`** (accent solidaire/espoir optionnel — nature/entraide) : `#3E7D5A`
- **`encre`** (texte courant, brun-noir doux) : `#241D16`
- **`sable`** (beige moyen, cartes/sections) : `#E6DAC6`
- **`gris`** (texte secondaire, lignes) : `#7C7368`
> Fond **crème** majoritaire, **terre/encre** pour le texte, **ocre** en accent chaud (dons, CTA), **vert** possible pour la touche “espoir/solidarité”. **Sobre, jamais criard.** Si l'extraction donne d'autres couleurs (ex. leur logo), **les utiliser** et n'utiliser ceci qu'en complément.

### Typographie
- **Identifier la vraie police** du site actuel (§5) et s'en rapprocher. À défaut : **titres** en **serif chaleureux et lisible** (esprit *Fraunces*, *Spectral*, *Cormorant*) pour l'émotion/éditorial ; **corps** en sans-serif humaniste (*Mulish*, *Figtree*, *Hanken Grotesk*). **Évite Inter par défaut.** Hiérarchie **serif-led**. Laisse **Taste Skill raffiner**. `next/font`, variables CSS.

### Animations & finition
- **`framer-motion`** : révélations au scroll **douces**, parallax discret sur photos de terrain, transitions de page, compteurs de chiffres clés, hovers de cartes. **Sobre et digne** (asso, pas agence tape-à-l'œil). **Respecter `prefers-reduced-motion`.**

### Imagerie — vraies images d'abord (§5)
Utiliser leurs **vraies photos de terrain** (maraudes, distributions) placées **avec cohérence**. **À défaut**, placeholders chaleureux dans leurs tons **clairement étiquetés “photo à fournir”** (ne pas utiliser de banque d'images trompeuse présentée comme leurs actions). **Respecter le droit à l'image** (cf. §13).

### Logo
**Extraire et réutiliser leur logo** (§5). Header clair + footer. **À défaut**, wordmark **« Que du Kheir »** sobre (serif + éventuel petit symbole neutre — **pas** de symbole religieux), **présenté comme provisoire**. **Ne pas inventer un logo définitif.**

---

## 5. STRATÉGIE D'ASSETS (logo, couleurs, photos) — Étape 1, avant de coder

> Leur **site (`quedukheir.com`) et leur Instagram bloquent l'accès automatisé** (robots / domaines hors réseau Claude Code). On **tente** l'extraction, et on **documente** un plan B propre. **On n'invente pas** de logo/charte définitifs.

### 5.1 Procédure
1. **Crée `public/brand/`** (logo, couleurs) et **`public/images/`** (photos de terrain).
2. **Tente d'extraire depuis `quedukheir.com`** : récupère le **HTML/CSS** si possible (le site serait sur **O2switch**, pas Wix), cherche **logo** (`/wp-content/uploads/...`, `<img>` du header, `og:image`, favicon), **couleurs** (variables CSS/thème) et **police** (`@font-face`/`font-family`). Récupère les **photos d'actions** exploitables. Nettoie les URLs pour la **pleine résolution**.
3. **Si l'utilisateur a déposé des assets** (logo, captures, futures chartes) dans `public/brand/` → **priorité absolue** : intègre le logo, **échantillonne** les couleurs, reflète le style.
4. **Si tout est bloqué** : applique la **DA de repli (§4)** + **placeholders étiquetés**, et **liste dans le récap** les éléments à fournir (logo HD, charte, photos), en suggérant à l'utilisateur d'**autoriser les domaines** ou de **déposer manuellement** les fichiers. **Ne force pas Instagram. N'invente pas d'URL.**

### 5.2 ⚠️ À transmettre à l'utilisateur (récap)
Pour fidéliser la DA : fournir **logo vectoriel/PNG HD**, **la charte (couleurs + polices)** dès réception, et **8–15 photos de terrain** (maraudes, distributions, kits) avec **autorisations de droit à l'image**. En attendant, le site tourne en **DA de repli re-skinnable**. **Documenter** clairement le provisoire.

### 5.3 Droits
Photos de personnes (bénéficiaires) = **droit à l'image sensible**. Pour la maquette, **n'afficher que des photos fournies/autorisées** ; sinon **placeholders**. Pour la prod, **exiger les autorisations** (cf. §13). Mentionner dans le récap.

---

## 6. ⭐ ESPACE ADHÉRENT & DASHBOARD DE TRANSPARENCE (feature clé demandée)

> Demande explicite du porteur (hors CSV). Incarne leur valeur **Transparence** → **différenciant fort** et **argument de confiance** pour partenaires/donateurs.

### 6.1 Comptes adhérents
- **Connexion / inscription** (mock) réservée aux **adhérents** (44 adhérents). Page `/connexion` + `/espace-adherent`. Auth simulée (`localStorage`), rôles **adhérent** et **bureau/admin**.
- À la connexion adhérent → accès au **dashboard de transparence** (lecture) + ses infos.

### 6.2 Dashboard de transparence des dons (cœur)
Visualisation claire et **honnête** de **l'argent récolté et son affectation** :
- **Vue d'ensemble** : total des **dons récoltés** (période), nombre de donateurs, campagne du mois.
- **Affectation des fonds** (le point demandé) : répartition **par poste** avec montants **prévus vs alloués vs dépensés** — ex. **Fournitures scolaires**, **Collecte alimentaire / denrées**, **Kits d'hygiène**, **Maraudes (logistique)**, **Cours de sport mamans isolées**, **Accompagnement administratif**. Graphiques (donut de répartition, barres budget/dépensé), liste détaillée.
- **Suivi par action/projet** : pour chaque action, **objectif de collecte**, **montant atteint**, **ce que ça finance**, **statut** (à venir / en cours / réalisée), **date**.
- **Journal des dépenses** (transparence) : tableau des dépenses (date, poste, montant, description) — **données de DÉMO clairement étiquetées** « exemple / chiffres fictifs ».
- **Export / rapport** (bouton mock) : « Télécharger le bilan » (PDF factice).
> **Honnêteté impérative** : toutes les sommes sont des **exemples de démonstration**. **Afficher une mention visible** « Données de démonstration — chiffres illustratifs ». Ne **jamais** présenter de faux montants comme réels.

### 6.3 Vue bureau/admin (optionnelle, à montrer en RDV)
Connexion **bureau** → pouvoir **saisir/éditer** (mock) les dons, postes budgétaires, dépenses, actions et adhérents ; voir les **inscriptions bénévoles** reçues. Tables `shadcn`, formulaires, états. Clairement **“espace démo administrateur”**. `// brancher back-office/HelloAsso/CRM au build`.

> **Note produit** : ce dashboard sert la **priorité n°1** (crédibilité → Google for Nonprofits) en matérialisant la transparence. Le mettre en valeur (page dédiée + aperçu public “Notre transparence” en lecture simplifiée, sans connexion, pour les partenaires).

---

## 7. Specs techniques — Stack & setup

- **Next.js (App Router) + TypeScript + Tailwind CSS** (`create-next-app` : TS, App Router, Tailwind, ESLint).
- **shadcn/ui** (dialog, sheet, tabs, accordion, inputs, calendar/date, table, toast) + **lucide-react** (sobre) + **recharts** (graphes du dashboard transparence).
- **`framer-motion`** (animations sobres) ; respecter `prefers-reduced-motion`.
- **`next/image`** (images locales) ; `next/font`.
- **Pas de backend** : dons (**lien HelloAsso**), bénévoles, contact, espace adhérent, dashboard = **mock** (état React + `localStorage`). Points d'intégration commentés (`// HelloAsso`, `// auth/CRM`, `// CMS`).
- **SEO/crédibilité (priorité n°1)** : `generateMetadata` par page, **JSON-LD `NGO`/`Organization`** (nom, RNA, zone d'action, contact), OpenGraph, **mentions légales + politique de confidentialité (RGPD)** présentes, **page contact claire avec RNA W931029608** → sert l'éligibilité **Google for Nonprofits**. Sitemap, robots.
- Installe les dépendances et **vérifie `npm run dev`** sans erreur ; corrige les erreurs de type/build.

## 8. Design tokens (Tailwind)

Palette §4 (creme, terre, ocre, vert, encre, sable, gris) dans `tailwind.config.ts`, **affinée par extraction/charte** (§5), **centralisée** pour re-skin. Familles de police (serif chaleureux + sans humaniste), rayons doux, ombres légères. Composants identitaires sobres : **`FramedImage`**, **`Divider`** (filet fin), **`SectionTitle`** (serif), **`StatCounter`** (chiffres clés), **`DonationCard`**. **Aucun motif religieux** (asso laïque).

## 9. Coexistence avec Taste Skill (déjà installé)

- **DA = chaleureuse, épurée, humaine, digne de confiance** (esprit Diasporas, leurs couleurs une fois extraites), **laïque**. Taste Skill **raffine la finition et les animations sobres** ; **pas** d'effets tape-à-l'œil, **pas** de dark/néon, **pas** de motifs cultuels.
- **Dials recommandés** (association sérieuse & chaleureuse) :
  - **Design Variance : modérée** — éditorial et soigné, jamais clinquant.
  - **Motion Intensity : faible à modérée** — révélations douces, compteurs, parallax léger ; **digne**.
  - **Visual Density : basse** — beaucoup d'air, la photo de terrain respire.
  - Preset **calme/éditorial chaleureux** (pas dense-SaaS, pas brutalist).
- Active la variante **anti-laziness / full-output** (multi-pages + dashboard).
- En cas de doute : **confiance + clarté + accessibilité** (cible non-Insta, personnes âgées) priment.

---

## 10. Architecture / pages (App Router)

Header sticky + footer ; CTA **« Faire un don »** (→ HelloAsso) accessible partout ; **accès espace adhérent** :

1. `/` — **Accueil** (vitrine : mission, actions, impact, dons, agenda, transparence, réseaux)
2. `/qui-sommes-nous` — **Qui sommes-nous / Notre histoire** (asso, jeunesse, valeurs, bureau)
3. `/nos-actions` — **Nos actions / Nos missions** (maraudes, kits d'hygiène, fournitures scolaires, projets)
4. `/faire-un-don` — **Faire un don** (ponctuel/récurrent → **HelloAsso**, dons matériels/liste de besoins)
5. `/transparence` — **Notre transparence** (aperçu public lecture seule du dashboard) — *différenciant*
6. `/agenda` — **Agenda / Prochaines maraudes** (calendrier des actions)
7. `/galerie` — **Galerie photos / vidéos**
8. `/actualites` — **Actualités / Blog**
9. `/benevoles` — **Devenir bénévole** (formulaire d'inscription)
10. `/contact` — **Nous contacter**
11. `/connexion` — **Connexion adhérent / bureau**
12. `/espace-adherent` — **Espace adhérent** (dashboard transparence détaillé)
13. `/admin` — **Espace bureau** (démo admin, optionnel)
+ `/mentions-legales`, `/confidentialite` (RGPD — utiles pour la crédibilité).

## 11. Composants & détail des pages clés

**Header (clair)** : **logo** ; liens (Qui sommes-nous · Nos actions · Transparence · Agenda · Actualités · Contact) ; CTA **« Faire un don »** (ocre) ; **« Espace adhérent »**. Mobile : menu plein écran + **barre d'action collante** (« Faire un don »). **Accessible** (contrastes, tailles — cible personnes âgées).

**Footer** : logo + pitch ; **RNA W931029608** ; zone d'action (93 + Paris) ; **email quedukheir@gmail.com** ; réseaux (Insta @quedukheir, TikTok, YouTube) ; liens (Actions, Don, Transparence, Bénévoles, Mentions légales, Confidentialité) ; mention reçus fiscaux « à venir » ; crédit discret « Site : l'Atelier Tech ».

**Réutilisables** : `Header`, `AnnouncementBar` (campagne du mois), `Footer`, `MobileActionBar`, `FramedImage`, `Divider`, `SectionTitle`, `ActionCard` (maraude/kit/fournitures), `StatCounter` (chiffres clés), `DonationCallout` (→ HelloAsso), `NeedsList` (dons matériels), `EventCard`/`AgendaList`, `GalleryGrid`, `PostCard` (blog), `VolunteerForm`, `TransparencyDashboard` (+ `BudgetDonut`, `AllocationBars`, `ExpensesTable`, `ProjectProgress`), `AuthForm`, `TestimonialSlider`, `InstaGrid` (optionnel). Mobile-first, **accessibles**, animés avec sobriété.

### 11.1 Accueil
- **Hero** : photo de terrain forte (maraude/distribution) + voile doux, titre chaleureux (ex. **« Que du Kheir — l'entraide près de chez vous »** / accroche fidèle au pitch), sous-titre (entraide & lutte contre la précarité, 93 + Paris). CTA **« Faire un don »** + **« Découvrir nos actions »**. Ton **chaleureux**, digne.
- **Notre mission** (pitch enrichi) + **valeurs** (Solidarité · Entraide · Dignité · Humanité · Transparence).
- **Nos actions** : `ActionCard` (Maraudes mensuelles, **Kits d'hygiène** systématiques, Fournitures scolaires, Projets à venir : sport mamans isolées, accompagnement administratif, denrées aux structures locales) → page Actions.
- **Notre impact** : `StatCounter` (chiffres clés — **à fournir/valider**, sinon « bientôt » ou placeholders étiquetés ; **ne pas inventer**).
- **Transparence (teaser)** : aperçu du **dashboard** (répartition des dons) + « Voir notre transparence » → page dédiée. **Argument de confiance** mis en avant.
- **Faire un don** : `DonationCallout` (ponctuel/récurrent → **HelloAsso**) + campagne du mois.
- **Agenda** : prochaines maraudes/actions (aperçu).
- **Galerie / réseaux** : aperçu photos + **Instagram** (@quedukheir) si activé.
- **Bénévoles** : invitation à rejoindre → formulaire.
- **Contact / accès simple** : pensé aussi **hors réseaux** (personnes âgées) — adresse de contact claire, gros boutons.

### 11.2 Qui sommes-nous / Notre histoire
Récit sobre : asso **2025**, **jeunesse engagée** du **93**, mission (entraide, lutte contre précarité/exclusion **sous toutes leurs formes**), **valeurs**, **bureau (4)** + **44 adhérents**. (Pas de “moment fondateur” fourni → rester factuel, **ne pas inventer** ; proposer un encart « notre raison d'être » sobre.) **Laïque/universel.** CTA don/bénévolat.

### 11.3 Nos actions / Nos missions
Détail par action (Maraudes ~1/mois, **Kits d'hygiène** — marqueur signature, **Fournitures scolaires** à la rentrée, lutte contre l'exclusion). **Projets 1–2 ans** : cours de sport mamans isolées, accompagnement administratif, denrées aux structures locales. Photos de terrain (vraies/placeholders). Chaque action peut renvoyer à la **transparence** (ce que ça finance). CTA don.

### 11.4 Faire un don
Explication claire : **dons ponctuels & récurrents** → **boutons vers HelloAsso** (`// lien HelloAsso réel`). **Dons matériels** : `NeedsList` (liste de besoins : hygiène, scolaire, alimentaire) + point de collecte/contact (léger, « à discuter »). **Reçus fiscaux : à venir** (mention honnête). Lien vers **Transparence** pour rassurer. (Pas de paiement maison.)

### 11.5 Transparence (public, lecture seule)
Version **publique simplifiée** du dashboard (sans connexion) : répartition des dons par poste, projets financés, journal synthétique — **mention “données de démonstration”**. Invite les **partenaires/institutions** à la confiance. Lien vers l'espace adhérent (détail).

### 11.6 Agenda, Galerie, Actualités, Bénévoles, Contact
- **Agenda** : calendrier/liste des **prochaines maraudes & actions** (dates, lieux 93/Paris, type), inscription bénévole liée.
- **Galerie** : photos/vidéos d'actions (vraies/placeholders).
- **Actualités/Blog** : articles (compte-rendus d'actions, appels) — quelques exemples **étiquetés démo** si pas de contenu réel.
- **Bénévoles** : `VolunteerForm` (nom, contact, **disponibilités**, **compétences**, **véhicule**, motivation) → confirmation (mock) ; mention « on vous recontacte via WhatsApp ». `// brancher gestion bénévoles`.
- **Contact** : email **quedukheir@gmail.com**, **Bilal 07 68 68 78 97** (à valider si affichage public souhaité), réseaux, formulaire, zone d'action ; **JSON-LD** `NGO`. Pensé **accessible**.

### 11.7 Espace adhérent / Bureau
Cf. **§6** : connexion → **dashboard transparence** (adhérent, lecture) ; **bureau** → édition (démo). Mentions « données de démonstration » visibles.

---

## 12. Interactions, animations & états attendus

- Navigation complète ; CTA **« Faire un don »** → lien HelloAsso (mock/externe) partout.
- **Espace adhérent** : connexion → **dashboard** (graphes recharts : donut répartition, barres budget/dépensé ; tables) ; **bureau** → édition mock.
- **Bénévoles / contact** : formulaires → confirmation.
- **Agenda** : liste/calendrier filtrable.
- **Animations** (framer-motion) : reveals doux, compteurs de chiffres clés, parallax léger. **Respecter `prefers-reduced-motion`.**
- **SEO/crédibilité** : metadata + JSON-LD + mentions légales/RGPD présents. Tout mocké client (`localStorage`) ; **images locales** ; **mentions “données de démonstration”** sur tous les chiffres.

## 13. Données & garde-fous (récap)

- **Asso** : Que du Kheir, loi 1901 (**2025**), **RNA W931029608**, **93 + Paris**, bureau 4 / 44 adhérents. **Email quedukheir@gmail.com**, Bilal Hadji **07 68 68 78 97**. **Insta @quedukheir**, TikTok, YouTube. Dons **HelloAsso**. Domaine **quedukheir.com** (O2switch). **Reçus fiscaux à venir.**
- **Valeurs** : Solidarité · Entraide · Dignité · Humanité · **Transparence**.
- **Actions** : maraudes (~1/mois), **kits d'hygiène** (systématique), fournitures scolaires (rentrée), lutte contre l'exclusion ; **projets** : sport mamans isolées, accompagnement administratif, denrées aux structures locales.

> ⚠️ **Honnêteté (asso = confiance) :**
> - **Aucune statistique inventée** (repas, bénéficiaires, montants) présentée comme réelle. Tout chiffre = **« à fournir »** ou **« donnée de démonstration »** visiblement étiquetée.
> - **Reçus fiscaux** : « à venir » (pas encore habilités).
> - **Pas de dimension religieuse/cultuelle** (asso laïque) — **aucun motif religieux**.
> - **Droit à l'image** : n'afficher que des photos fournies/autorisées ; sinon placeholders. 
> - **Logo/charte définitifs** : non disponibles → DA de repli **re-skinnable**, logo **provisoire** clairement signalé.
> - **Téléphone perso de Bilal** : confirmer s'il doit être **public** sur le site (sinon, formulaire + email seulement).

## 14. Ton éditorial & copywriting

Français **chaleureux, humain, sobre et digne**. Mots-clés : *entraide, solidarité, dignité, proximité, terrain, lien, transparence, ensemble*. **Pas de misérabilisme** ni de pathos : **respect** des bénéficiaires. CTA clairs (« Faire un don », « Devenir bénévole », « Découvrir nos actions »). Accessible (cible non-Insta/personnes âgées) : phrases simples, gros boutons, navigation évidente. Réutiliser les **vrais éléments** du questionnaire.

## 15. Livrable attendu

Une app **Next.js qui tourne avec `npm run dev`**, ~13 pages navigables, **chaleureuse, épurée, humaine et digne de confiance** (esprit de leur référence Diasporas ; **DA extraite si possible, sinon repli re-skinnable** ; **logo extrait/provisoire**), affichant les **vraies images** récupérées (sinon placeholders étiquetés), avec : **vitrine claire** (mission, actions, impact), **dons via HelloAsso**, **agenda**, **galerie**, **blog**, **formulaire bénévole**, et la **feature clé : espace adhérent + dashboard de TRANSPARENCE** des dons/affectations (+ aperçu public). **SEO/crédibilité** soignés (JSON-LD NGO, mentions légales/RGPD, RNA) pour servir la **priorité n°1 (Google for Nonprofits)**. **Accessible** (cible non-Insta). Animations **sobres**.

Soigne particulièrement l'**accueil**, **Nos actions**, **Faire un don** et le **dashboard de transparence**. Rendu **bien meilleur que leur site actuel**, prêt à présenter en rendez-vous.

À la fin, **récap** :
1. **arborescence** ;
2. **lancement** (`npm install` / `npm run dev`) ;
3. **assets** : logo/couleurs/photos **extraits** vs **placeholders “à fournir”** (+ rappel : déposer la charte/logo/photos ou autoriser les domaines) ;
4. **éléments “données de démonstration”** à remplacer par les vrais (chiffres, dons, dépenses, témoignages) ;
5. **points à brancher au build réel** : **lien HelloAsso** (dons), auth + espace adhérent/bureau (back/CRM), CMS pour l'autonomie de contenu (souhaité plus tard), mentions légales/RGPD définitives, **vraie charte graphique** quand fournie.
