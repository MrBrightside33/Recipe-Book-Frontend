import { cn } from "@/lib/cn";

type BrandMarkProps = {
  inverted?: boolean;
  compact?: boolean;
};

export function BrandMark({ inverted = false, compact = false }: BrandMarkProps) {
  return (
    <div className="flex items-center gap-3">
      <span className={cn("flex h-9 w-9 items-center justify-center rounded-xl font-display text-lg", inverted ? "bg-terracotta text-cream" : "bg-espresso text-cream")}>
        R
      </span>
      {!compact && (
        <span className={cn("font-display text-lg tracking-tight", inverted ? "text-cream" : "text-ink")}>
          Recipe Book
        </span>
      )}
    </div>
  );
}
