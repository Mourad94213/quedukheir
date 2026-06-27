import Link from "next/link";
import { Heart, ArrowRight } from "lucide-react";
import { TRANSPARENCE_RESUME } from "@/lib/data";

/** Bandeau campagne du mois — discret, sur fond bordeaux. */
export function AnnouncementBar() {
  return (
    <div className="bg-bordeaux text-cream">
      <Link
        href="/faire-un-don"
        className="mx-auto flex max-w-[1400px] items-center justify-center gap-2.5 px-4 py-2 text-center text-sm transition-opacity hover:opacity-90"
      >
        <Heart className="size-4 shrink-0" aria-hidden />
        <span className="font-medium">
          Campagne du mois : <strong className="font-semibold">{TRANSPARENCE_RESUME.campagneMois}</strong>
        </span>
        <span className="hidden items-center gap-1 font-semibold underline-offset-2 hover:underline sm:inline-flex">
          Soutenir <ArrowRight className="size-3.5" aria-hidden />
        </span>
      </Link>
    </div>
  );
}
