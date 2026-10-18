import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
type CardProps = { children: ReactNode; className?: string };
export function Card({ children, className }: CardProps) {
  return <div className={cn("overflow-hidden rounded-2xl border border-line bg-cream shadow-sm", className)}>{children}</div>;
}
