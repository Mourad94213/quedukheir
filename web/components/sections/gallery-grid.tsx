import { FramedImage } from "@/components/brand/framed-image";
import { Reveal } from "@/components/motion/reveal";
import { GALERIE } from "@/lib/data";

/**
 * Grille galerie — photos réelles de terrain (droit à l'image : visuels
 * fournis/autorisés uniquement). Rythme varié (pas 100% identique).
 */
export function GalleryGrid({ limit }: { limit?: number }) {
  const items = limit ? GALERIE.slice(0, limit) : GALERIE;
  return (
    <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
      {items.map((g, i) => {
        // 1re image en grand pour casser la répétition
        const big = i === 0;
        return (
          <Reveal
            key={g.src + i}
            delay={i * 0.05}
            className={big ? "col-span-2 row-span-2" : ""}
          >
            <FramedImage
              src={g.src}
              alt={g.alt}
              caption={g.legende}
              ratio={big ? "4/3" : "1/1"}
              scrim
              sizes="(max-width: 768px) 50vw, 25vw"
              className="h-full"
              imgClassName="h-full"
            />
          </Reveal>
        );
      })}
    </div>
  );
}
