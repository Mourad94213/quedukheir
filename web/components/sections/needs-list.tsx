import { Check, Droplets, Apple, GraduationCap } from "lucide-react";
import { Card } from "@/components/ui/card";
import { BESOINS } from "@/lib/data";

const ICONS: Record<string, React.ReactNode> = {
  Hygiène: <Droplets className="size-5" />,
  Alimentaire: <Apple className="size-5" />,
  Scolaire: <GraduationCap className="size-5" />,
};

/** Liste de besoins matériels (dons matériels). */
export function NeedsList() {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {BESOINS.map((cat) => (
        <Card key={cat.categorie} className="p-6">
          <div className="flex items-center gap-2.5">
            <span className="inline-flex size-10 items-center justify-center rounded-full bg-bordeaux/10 text-bordeaux">
              {ICONS[cat.categorie]}
            </span>
            <h3 className="font-[family-name:var(--font-serif)] text-lg font-bold text-encre">
              {cat.categorie}
            </h3>
          </div>
          <ul className="mt-4 space-y-2.5">
            {cat.items.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-encre">
                <Check className="mt-0.5 size-4 shrink-0 text-bordeaux" />
                {item}
              </li>
            ))}
          </ul>
        </Card>
      ))}
    </div>
  );
}
