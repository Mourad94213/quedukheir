import * as React from "react";
import { cn } from "@/lib/utils";

/** Input — radius xl (lock). Label TOUJOURS au-dessus (jamais placeholder-as-label). */
export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, type = "text", ...props }, ref) => (
    <input
      ref={ref}
      type={type}
      className={cn(
        "h-12 w-full rounded-xl border border-marron/20 bg-cream-soft px-4 text-encre placeholder:text-gris-soft transition-colors",
        "focus-visible:border-bordeaux focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bordeaux/25",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    />
  ),
);
Input.displayName = "Input";

export const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, rows = 4, ...props }, ref) => (
  <textarea
    ref={ref}
    rows={rows}
    className={cn(
      "w-full rounded-xl border border-marron/20 bg-cream-soft px-4 py-3 text-encre placeholder:text-gris-soft transition-colors",
      "focus-visible:border-bordeaux focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bordeaux/25",
      "disabled:cursor-not-allowed disabled:opacity-50",
      className,
    )}
    {...props}
  />
));
Textarea.displayName = "Textarea";

export const Select = React.forwardRef<
  HTMLSelectElement,
  React.SelectHTMLAttributes<HTMLSelectElement>
>(({ className, children, ...props }, ref) => (
  <select
    ref={ref}
    className={cn(
      "h-12 w-full rounded-xl border border-marron/20 bg-cream-soft px-4 text-encre transition-colors appearance-none",
      "focus-visible:border-bordeaux focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bordeaux/25",
      className,
    )}
    {...props}
  >
    {children}
  </select>
));
Select.displayName = "Select";
