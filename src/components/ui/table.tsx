import type { TableHTMLAttributes } from "react";
import { cn } from "@/lib/cn";
export function Table({ className, ...props }: TableHTMLAttributes<HTMLTableElement>) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-line bg-cream">
      <table className={cn("w-full text-left text-sm [&_th]:px-5 [&_th]:py-4 [&_th]:font-semibold [&_th]:text-ink-muted [&_td]:px-5 [&_td]:py-4 [&_thead]:bg-paper [&_tbody_tr]:border-t [&_tbody_tr]:border-line [&_tbody_tr]:transition-colors hover:[&_tbody_tr]:bg-paper/80", className)} {...props} />
    </div>
  );
}
