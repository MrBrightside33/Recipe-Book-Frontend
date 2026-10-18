import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "tertiary" | "danger";
  children: ReactNode;
};

const variants = {
  primary: "bg-terracotta text-cream hover:bg-terracotta-dark",
  secondary: "border border-line bg-cream text-ink hover:bg-paper",
  tertiary: "text-ink-muted hover:text-ink",
  danger: "border border-rose-200 bg-rose-50 text-rose-800 hover:bg-rose-100",
};

export function Button({ variant = "primary", className, children, type = "button", ...props }: ButtonProps) {
  return (
    <button type={type} className={cn("cursor-pointer rounded-xl px-4 py-2.5 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta disabled:cursor-not-allowed disabled:opacity-60", variants[variant], className)} {...props}>
      {children}
    </button>
  );
}
