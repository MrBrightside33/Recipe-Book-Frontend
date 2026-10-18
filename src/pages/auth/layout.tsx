import { AuthHeader } from "@/components/features/auth/auth-header";
import { Navigate, Outlet } from "react-router";
import { useAuth } from "@/components/context/use-auth";
import { BrandMark } from "@/components/common/brand-mark";

export default function AuthLayout() {
  const { user, ready } = useAuth();

  if (ready && user) return <Navigate to={user.role === "ADMIN" ? "/admin" : "/user"} replace />;
  return (
    <main className="grid min-h-svh lg:grid-cols-2">
      <section className="relative hidden overflow-hidden bg-espresso px-12 py-16 text-cream lg:flex lg:flex-col lg:justify-between">
        <BrandMark inverted />
        <div className="max-w-md">
          <p className="text-xs font-semibold tracking-[0.22em] text-terracotta uppercase">Your kitchen companion</p>
          <h1 className="mt-4 font-display text-5xl leading-tight">A quieter place for the meals you love.</h1>
          <p className="mt-5 text-sm leading-7 text-cream/70">Save recipes, organize your week, and keep every cook’s notes in one book.</p>
        </div>
        <p className="text-xs text-cream/40">Recipe Book</p>
        <div className="pointer-events-none absolute -right-16 -bottom-20 h-72 w-72 rounded-full bg-terracotta/30 blur-3xl" />
      </section>

      <section className="flex items-center justify-center bg-paper px-4 py-12">
        <div className="w-full max-w-md">
          <div className="mb-8 lg:hidden">
            <AuthHeader />
          </div>
          {ready && <Outlet />}
        </div>
      </section>
    </main>
  );
}
