import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * Bouton — radius pill (lock), un seul accent bordeaux.
 * Gros padding pour l'accessibilité (cible non-Insta / personnes âgées).
 * Feedback tactile au :active (translate). Contraste AA vérifié.
 */
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold whitespace-nowrap transition-all duration-200 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 active:translate-y-px [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary:
          "bg-bordeaux text-cream shadow-soft hover:bg-bordeaux-deep hover:shadow-lift",
        secondary:
          "border border-encre/25 bg-transparent text-encre hover:bg-encre/[0.06] hover:border-encre/40",
        ghost: "bg-transparent text-bordeaux hover:bg-bordeaux/[0.08]",
        onDark:
          "bg-cream text-marron shadow-soft hover:bg-cream-soft hover:shadow-lift",
        outlineDark:
          "border border-cream/40 bg-transparent text-cream hover:bg-cream/10",
      },
      size: {
        sm: "h-10 px-4 text-sm [&_svg]:size-4",
        md: "h-12 px-6 text-[0.95rem] [&_svg]:size-[1.15rem]",
        lg: "h-14 px-8 text-base [&_svg]:size-5",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp ref={ref} className={cn(buttonVariants({ variant, size, className }))} {...props} />
    );
  },
);
Button.displayName = "Button";

export { buttonVariants };
