import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * Image de terrain encadrée, radius 2xl (lock). Voile chaud optionnel + légende.
 * Les photos de bénéficiaires relèvent du droit à l'image (cf. récap) :
 * n'afficher que des visuels fournis/autorisés.
 */
export function FramedImage({
  src,
  alt,
  caption,
  className,
  imgClassName,
  ratio = "4/3",
  priority = false,
  scrim = false,
  sizes = "(max-width: 768px) 100vw, 50vw",
}: {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
  imgClassName?: string;
  ratio?: "4/3" | "3/4" | "1/1" | "16/9" | "3/2";
  priority?: boolean;
  scrim?: boolean;
  sizes?: string;
}) {
  const ratioClass = {
    "4/3": "aspect-[4/3]",
    "3/4": "aspect-[3/4]",
    "1/1": "aspect-square",
    "16/9": "aspect-video",
    "3/2": "aspect-[3/2]",
  }[ratio];

  return (
    <figure className={cn("group relative overflow-hidden rounded-2xl bg-sable shadow-soft", className)}>
      <div className={cn("relative w-full", ratioClass)}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className={cn(
            "object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]",
            imgClassName,
          )}
        />
        {scrim && <div className="scrim-warm absolute inset-0" aria-hidden />}
        {caption && (
          <figcaption className="absolute inset-x-0 bottom-0 p-4 text-sm font-medium text-cream">
            {caption}
          </figcaption>
        )}
      </div>
    </figure>
  );
}
