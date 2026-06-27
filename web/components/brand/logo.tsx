import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * Logo Que du Kheir.
 * - "full"  : wordmark texte en Archivo Black (police réelle du logo), tonal.
 * - "mark"  : monogramme « qdk. » réel (public/brand/logo-mark.png, bordeaux).
 * Le point final reprend le bordeaux de marque comme signature discrète.
 */
export function Logo({
  variant = "full",
  tone = "dark",
  className,
  asLink = true,
}: {
  variant?: "full" | "mark";
  tone?: "dark" | "light";
  className?: string;
  asLink?: boolean;
}) {
  const content =
    variant === "mark" ? (
      <Image
        src="/brand/logo-mark.png"
        alt="Que du Kheir"
        width={44}
        height={44}
        className={cn("h-9 w-9 object-contain", className)}
        priority
      />
    ) : (
      <span
        className={cn(
          "font-[family-name:var(--font-display)] text-[1.35rem] leading-none tracking-tight",
          tone === "light" ? "text-cream" : "text-encre",
          className,
        )}
      >
        Que<span className="opacity-70">du</span>kheir<span className="text-bordeaux">.</span>
      </span>
    );

  if (!asLink) return content;
  return (
    <Link href="/" aria-label="Que du Kheir — accueil" className="inline-flex items-center">
      {content}
    </Link>
  );
}
