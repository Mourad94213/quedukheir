import { cn } from "@/lib/utils";

/** Filet fin éditorial, avec point bordeaux optionnel (signature de marque). */
export function Divider({
  className,
  tone = "dark",
  dot = false,
}: {
  className?: string;
  tone?: "dark" | "light";
  dot?: boolean;
}) {
  if (dot) {
    return (
      <div className={cn("flex items-center gap-3", className)} aria-hidden>
        <span className={cn("h-px flex-1", tone === "light" ? "bg-cream/20" : "bg-marron/15")} />
        <span className="size-1.5 rounded-full bg-bordeaux" />
        <span className={cn("h-px flex-1", tone === "light" ? "bg-cream/20" : "bg-marron/15")} />
      </div>
    );
  }
  return (
    <hr
      className={cn("border-0 border-t", tone === "light" ? "border-cream/15" : "border-marron/12", className)}
      aria-hidden
    />
  );
}
