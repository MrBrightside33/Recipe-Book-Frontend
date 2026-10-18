import { BrandMark } from "@/components/common/brand-mark";

export function AuthHeader() {
  return (
    <header className="text-center">
      <div className="mb-5 flex justify-center">
        <BrandMark />
      </div>
      <p className="text-xs font-semibold tracking-[0.22em] text-terracotta uppercase">Your kitchen companion</p>
      <p className="mt-2 text-sm text-ink-muted">Keep your favorite meals in one place.</p>
    </header>
  );
}
