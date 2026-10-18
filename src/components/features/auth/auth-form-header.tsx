type AuthFormHeaderProps = {
  title: string;
  description: string;
};

export function AuthFormHeader({ title, description }: AuthFormHeaderProps) {
  return (
    <header>
      <h2 className="font-display text-2xl tracking-tight text-ink">
        {title}
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-ink-muted">
        {description}
      </p>
    </header>
  );
}
