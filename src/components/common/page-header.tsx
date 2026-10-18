import type { ReactNode } from "react";

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
};

export function PageHeader({ eyebrow, title, description, children }: PageHeaderProps) {
  return (
    <header className="mb-8 flex flex-wrap items-end justify-between gap-6">
      <div>
        <p className="text-xs font-semibold tracking-[0.22em] text-terracotta uppercase">{eyebrow}</p>
        <h1 className="mt-2 font-display text-3xl tracking-tight sm:text-4xl">{title}</h1>
        <p className="mt-2 max-w-xl text-sm text-ink-muted">{description}</p>
      </div>
      {children}
    </header>
  );
}
