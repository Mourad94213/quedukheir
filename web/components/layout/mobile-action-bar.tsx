import Link from "next/link";
import { Heart, UserRound } from "lucide-react";

/** Barre d'action collante en bas sur mobile : « Faire un don » toujours accessible. */
export function MobileActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-marron/10 bg-cream/95 px-3 py-2.5 backdrop-blur-md lg:hidden">
      <div className="mx-auto flex max-w-md items-center gap-2">
        <Link
          href="/connexion"
          className="inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-full border border-encre/20 text-sm font-semibold text-encre"
        >
          <UserRound className="size-4" aria-hidden />
          Espace adhérent
        </Link>
        <Link
          href="/faire-un-don"
          className="inline-flex h-12 flex-[1.3] items-center justify-center gap-2 rounded-full bg-bordeaux text-sm font-semibold text-cream shadow-soft"
        >
          <Heart className="size-4" aria-hidden />
          Faire un don
        </Link>
      </div>
    </div>
  );
}
