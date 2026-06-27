import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold tracking-wide",
  {
    variants: {
      variant: {
        default: "bg-bordeaux/10 text-bordeaux",
        sable: "bg-sable text-encre",
        outline: "border border-encre/20 text-encre",
        positif: "bg-[var(--color-positif)]/12 text-[var(--color-positif)]",
        alerte: "bg-[var(--color-alerte)]/15 text-[#8a6a16]",
        onDark: "bg-cream/15 text-cream",
        demo: "border border-[var(--color-alerte)]/40 bg-[var(--color-alerte)]/12 text-[#8a6a16]",
      },
    },
    defaultVariants: { variant: "default" },
  },
);

export function Badge({
  className,
  variant,
  ...props
}: React.HTMLAttributes<HTMLSpanElement> & VariantProps<typeof badgeVariants>) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { badgeVariants };
