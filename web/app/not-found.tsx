import Link from "next/link";
import { Heart, ArrowRight, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center bg-cream-soft">
      <div className="mx-auto max-w-2xl px-4 py-20 text-center sm:px-6 sm:py-28">
        <Badge variant="sable" className="mb-6">
          Erreur 404
        </Badge>
        <h1 className="font-[family-name:var(--font-display)] text-[clamp(2.2rem,6vw,3.6rem)] leading-[1.05] text-encre text-balance">
          Cette page s'est égarée.
        </h1>
        <p className="mx-auto mt-5 max-w-md text-lg leading-relaxed text-gris text-pretty">
          La page que vous cherchez n'existe pas ou a été déplacée. Pas d'inquiétude : revenons
          ensemble sur le bon chemin.
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button asChild size="lg">
            <Link href="/">
              <Home className="size-5" />
              Retour à l'accueil
            </Link>
          </Button>
          <Button asChild size="lg" variant="secondary">
            <Link href="/faire-un-don">
              <Heart className="size-5" />
              Faire un don
              <ArrowRight className="size-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
