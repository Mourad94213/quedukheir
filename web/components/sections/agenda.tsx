import Link from "next/link";
import { MapPin, Users, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { EVENEMENTS } from "@/lib/data";

function DateBlock({ iso }: { iso: string }) {
  const d = new Date(iso);
  const jour = new Intl.DateTimeFormat("fr-FR", { day: "2-digit" }).format(d);
  const mois = new Intl.DateTimeFormat("fr-FR", { month: "short" }).format(d).replace(".", "");
  return (
    <div className="flex size-16 shrink-0 flex-col items-center justify-center rounded-2xl bg-bordeaux text-cream">
      <span className="font-[family-name:var(--font-display)] text-xl leading-none">{jour}</span>
      <span className="mt-0.5 text-xs uppercase tracking-wide">{mois}</span>
    </div>
  );
}

export function EventCard({ event }: { event: (typeof EVENEMENTS)[number] }) {
  const ouvert = event.statut === "Inscriptions ouvertes";
  return (
    <article className="flex items-center gap-4 rounded-2xl border border-marron/10 bg-cream-soft p-4 shadow-soft transition-shadow hover:shadow-lift">
      <DateBlock iso={event.date} />
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="sable">{event.type}</Badge>
          <Badge variant={ouvert ? "positif" : "outline"}>{event.statut}</Badge>
        </div>
        <h3 className="mt-1.5 font-[family-name:var(--font-serif)] text-lg font-bold leading-tight text-encre">
          {event.titre}
        </h3>
        <p className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-0.5 text-sm text-gris">
          <span className="inline-flex items-center gap-1">
            <MapPin className="size-3.5" /> {event.lieu}, {event.ville}
          </span>
          <span className="inline-flex items-center gap-1">
            <Users className="size-3.5" /> {event.places} bénévoles
          </span>
        </p>
      </div>
      <Link
        href="/benevoles"
        className="hidden shrink-0 items-center gap-1 rounded-full border border-encre/20 px-4 py-2 text-sm font-semibold text-encre transition-colors hover:border-bordeaux hover:text-bordeaux sm:inline-flex"
      >
        Participer
        <ArrowRight className="size-3.5" />
      </Link>
    </article>
  );
}

export function AgendaList({ limit }: { limit?: number }) {
  const items = limit ? EVENEMENTS.slice(0, limit) : EVENEMENTS;
  return (
    <div className="space-y-3">
      {items.map((e, i) => (
        <EventCard key={i} event={e} />
      ))}
    </div>
  );
}
