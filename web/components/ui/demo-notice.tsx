import { Info } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Mention d'honnêteté OBLIGATOIRE sur tout chiffre du dashboard.
 * « Données de démonstration — chiffres illustratifs. »
 */
export function DemoNotice({ className, compact }: { className?: string; compact?: boolean }) {
  return (
    <div
      className={cn(
        "flex items-start gap-2.5 rounded-xl border border-[var(--color-alerte)]/35 bg-[var(--color-alerte)]/[0.10] px-4 py-3 text-[#7a5e14]",
        compact ? "text-xs" : "text-sm",
        className,
      )}
    >
      <Info className={cn("mt-px shrink-0", compact ? "size-4" : "size-[1.1rem]")} aria-hidden />
      <p className="leading-snug">
        <strong className="font-semibold">Données de démonstration.</strong> Les montants, dons et
        dépenses affichés sont des <em>exemples fictifs</em> destinés à illustrer le fonctionnement —
        ils seront remplacés par les chiffres réels.
      </p>
    </div>
  );
}
