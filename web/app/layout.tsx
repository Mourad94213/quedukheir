import type { Metadata, Viewport } from "next";
import { Archivo_Black, Cardo, Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/lib/auth";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { AnnouncementBar } from "@/components/layout/announcement-bar";
import { MobileActionBar } from "@/components/layout/mobile-action-bar";
import { OrganizationJsonLd } from "@/components/brand/json-ld";
import { SmoothScroll } from "@/app/providers/smooth-scroll";
import { Cursor } from "@/components/anim/cursor";
import { MotionConfig } from "motion/react";
import { SITE } from "@/lib/site";

/* Polices réelles extraites du site : Archivo Black (logo) + Cardo (éditorial),
   complétées par Hanken Grotesk (corps humaniste, accessible, ≠ Inter). */
const archivoBlack = Archivo_Black({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-archivo-black",
  display: "swap",
});
const cardo = Cardo({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-cardo",
  display: "swap",
});
const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Que du Kheir, l'entraide près de chez vous (93 & Paris)",
    template: "%s · Que du Kheir",
  },
  description:
    "Association d'entraide et de lutte contre la précarité, portée par une jeunesse engagée en Seine-Saint-Denis et à Paris. Maraudes, kits d'hygiène, fournitures scolaires, et une transparence totale sur vos dons.",
  keywords: [
    "association",
    "entraide",
    "précarité",
    "maraude",
    "Seine-Saint-Denis",
    "Paris",
    "kits d'hygiène",
    "don",
    "bénévolat",
  ],
  authors: [{ name: SITE.name }],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: SITE.name,
    title: "Que du Kheir, l'entraide près de chez vous",
    description:
      "Maraudes, kits d'hygiène, fournitures scolaires en 93 & Paris. Une jeune association, une transparence totale sur vos dons.",
    images: [{ url: "/images/terrain-1.jpg", width: 1080, height: 1440, alt: SITE.name }],
  },
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#7f1112",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="fr"
      className={`${archivoBlack.variable} ${cardo.variable} ${hanken.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <OrganizationJsonLd />
        {/* reducedMotion="user" : la réduction est appliquée APRÈS hydratation,
            de façon cohérente serveur/client → pas de mismatch, et l'initial des
            composants motion reste constant (cf. fix accessibilité). */}
        <MotionConfig reducedMotion="user">
        <AuthProvider>
          <a
            href="#contenu"
            className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-bordeaux focus:px-5 focus:py-2.5 focus:text-cream"
          >
            Aller au contenu
          </a>
          <AnnouncementBar />
          <Header />
          <SmoothScroll>
            <main id="contenu" className="flex-1">
              {children}
            </main>
          </SmoothScroll>
          <Footer />
          <MobileActionBar />
          <Cursor />
        </AuthProvider>
        </MotionConfig>
      </body>
    </html>
  );
}
