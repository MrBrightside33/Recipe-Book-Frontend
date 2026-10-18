import type { TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  error?: string;
};

export function Textarea({ className, error, ...props }: TextareaProps) {
  return (
    <div>
      <textarea className={cn("w-full rounded-xl border bg-cream px-3 py-2.5 text-sm text-ink outline-none placeholder:text-ink-muted/60 focus:border-terracotta focus:ring-2 focus:ring-terracotta/20", error ? "border-red-500" : "border-line", className)} {...props} />
      {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
    </div>
  );
}
