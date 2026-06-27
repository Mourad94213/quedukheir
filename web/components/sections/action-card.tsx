import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

/** Carte d'action (maraude / kit / fournitures). Image + rythme + résumé. */
export function ActionCard({
  titre,
  rythme,
  resume,
  image,
  href = "/nos-actions",
  alt,
}: {
  titre: string;
  rythme: string;
  resume: string;
  image: string;
  href?: string;
  alt?: string;
}) {
  return (
    <Link
      href={href}
      className="group flex flex-col overflow-hidden rounded-2xl border border-marron/10 bg-cream-soft shadow-soft transition-shadow duration-300 hover:shadow-lift"
    >
      <div className="relative aspect-[3/2] overflow-hidden bg-sable">
        <Image
          src={image}
          alt={alt ?? titre}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute left-3 top-3">
          <Badge variant="onDark" className="backdrop-blur-sm">
            {rythme}
          </Badge>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="flex items-start justify-between gap-2 font-[family-name:var(--font-serif)] text-xl font-bold text-encre">
          {titre}
          <ArrowUpRight className="size-5 shrink-0 text-bordeaux transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-gris">{resume}</p>
      </div>
    </Link>
  );
}
