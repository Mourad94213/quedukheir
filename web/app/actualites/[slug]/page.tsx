import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { FramedImage } from "@/components/brand/framed-image";
import { PostCard } from "@/components/sections/post-card";
import { DonationCallout } from "@/components/sections/donation-callout";
import { SectionTitle } from "@/components/brand/section-title";
import { ARTICLES } from "@/lib/data";
import { dateLong } from "@/lib/utils";

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = ARTICLES.find((a) => a.slug === slug);
  return {
    title: article ? article.titre : "Article",
    description: article?.extrait,
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = ARTICLES.find((a) => a.slug === slug);
  if (!article) notFound();

  const autres = ARTICLES.filter((a) => a.slug !== article.slug).slice(0, 2);

  return (
    <>
      {/* ===================== EN-TÊTE ARTICLE ===================== */}
      <section className="border-b border-marron/10 bg-cream-soft">
        <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 sm:py-20">
          <Reveal>
            <Link
              href="/actualites"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-bordeaux underline-offset-4 hover:underline"
            >
              <ArrowLeft className="size-4" />
              Toutes les actualités
            </Link>
            <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-gris">
              <Badge variant="default">{article.categorie}</Badge>
              <time dateTime={article.date}>{dateLong(article.date)}</time>
            </div>
            <h1 className="mt-4 font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,3.2rem)] leading-[1.06] text-encre text-balance">
              {article.titre}
            </h1>
            <div className="mt-5">
              <Badge variant="demo">Article de démonstration</Badge>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===================== CORPS ===================== */}
      <article className="mx-auto max-w-3xl px-4 py-14 sm:px-6 sm:py-20">
        <Reveal>
          <FramedImage
            src={article.image}
            alt={article.titre}
            ratio="16/9"
            priority
            sizes="(max-width: 768px) 100vw, 768px"
          />
        </Reveal>

        <Reveal className="mt-10">
          <p className="text-xl leading-relaxed text-encre text-pretty">{article.extrait}</p>

          <div className="mt-6 space-y-5 text-lg leading-relaxed text-gris text-pretty">
            <p>
              Derrière chaque action, il y a une équipe de bénévoles qui donne de son temps, et des
              donatrices et donateurs qui rendent tout cela possible. Rien de spectaculaire : juste
              une présence régulière, un geste tenu dans la durée, au plus près des besoins réels du
              terrain.
            </p>
            <p>
              Ce que nous retenons surtout, ce sont les rencontres. Un sourire, quelques mots
              échangés, le sentiment partagé que personne n'est tout à fait seul. C'est cette
              chaleur humaine, simple et sincère, qui donne du sens à ce que nous faisons et nous
              pousse à continuer.
            </p>
            <p>
              Merci à toutes celles et ceux qui contribuent, de près ou de loin. Si vous souhaitez
              nous rejoindre sur le terrain ou soutenir nos prochaines actions, nous serions
              heureux de faire votre connaissance.
            </p>
          </div>

          <p className="mt-8 text-sm leading-relaxed text-gris-soft">
            Ce texte est un contenu d'exemple, rédigé pour illustrer la mise en page d'un article.
            Les vraies publications de l'association reprendront ce format.
          </p>
        </Reveal>

        <div className="mt-14">
          <Reveal>
            <DonationCallout />
          </Reveal>
        </div>
      </article>

      {/* ===================== AUTRES ACTUALITÉS ===================== */}
      <section className="bg-cream-soft">
        <div className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6 sm:py-24">
          <Reveal>
            <SectionTitle as="h2">Autres actualités</SectionTitle>
          </Reveal>
          <RevealGroup className="mt-10 grid gap-6 sm:grid-cols-2">
            {autres.map((a) => (
              <RevealItem key={a.slug}>
                <PostCard post={a} />
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>
    </>
  );
}
