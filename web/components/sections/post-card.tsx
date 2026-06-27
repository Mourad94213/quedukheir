import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { dateLong } from "@/lib/utils";
import { ARTICLES } from "@/lib/data";

export function PostCard({ post }: { post: (typeof ARTICLES)[number] }) {
  return (
    <Link
      href={`/actualites/${post.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-marron/10 bg-cream-soft shadow-soft transition-shadow duration-300 hover:shadow-lift"
    >
      <div className="relative aspect-[16/9] overflow-hidden bg-sable">
        <Image
          src={post.image}
          alt={post.titre}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center gap-2 text-xs text-gris">
          <Badge variant="default">{post.categorie}</Badge>
          <time dateTime={post.date}>{dateLong(post.date)}</time>
        </div>
        <h3 className="mt-3 font-[family-name:var(--font-serif)] text-xl font-bold leading-snug text-encre">
          {post.titre}
        </h3>
        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-gris">{post.extrait}</p>
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-bordeaux">
          Lire la suite
          <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </Link>
  );
}
