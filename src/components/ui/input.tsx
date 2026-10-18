import type { InputHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: string;
};

export function Input({ className, error, ...props }: InputProps) {
  return (
    <div>
      <input className={cn("w-full rounded-xl border bg-cream px-3 py-2.5 text-sm text-ink outline-none placeholder:text-ink-muted/60 focus:border-terracotta focus:ring-2 focus:ring-terracotta/20", error ? "border-red-500" : "border-line", className)} {...props} />
      {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
    </div>
  );
}
