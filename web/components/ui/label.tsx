"use client";

import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { cn } from "@/lib/utils";

export const Label = React.forwardRef<
  React.ComponentRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn("mb-1.5 block text-sm font-semibold text-encre", className)}
    {...props}
  />
));
Label.displayName = "Label";

/** Champ de formulaire : label au-dessus, helper/erreur en dessous. */
export function Field({
  label,
  htmlFor,
  hint,
  error,
  required,
  children,
}: {
  label: string;
  htmlFor: string;
  hint?: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1">
      <Label htmlFor={htmlFor}>
        {label}
        {required && <span className="ml-0.5 text-bordeaux">*</span>}
      </Label>
      {children}
      {hint && !error && <p className="text-xs text-gris">{hint}</p>}
      {error && <p className="text-xs font-medium text-bordeaux">{error}</p>}
    </div>
  );
}
