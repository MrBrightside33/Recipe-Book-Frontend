import { useState } from "react";
import { Link, Outlet } from "react-router";
import { useAuth } from "@/components/context/use-auth";
import { BrandMark } from "@/components/common/brand-mark";
import { Button } from "@/components/ui/button";

export default function UserLayout() {
  const { user, logout } = useAuth();
  const [error, setError] = useState("");

  async function handleLogout() {
    try {
      setError("");
      await logout();
    } catch {
      setError("Unable to sign out. Please try again.");
    }
  }

  return (
    <div className="min-h-svh">
      <header className="sticky top-0 z-20 border-b border-line bg-paper/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
          <Link to="/user" className="min-w-0">
            <BrandMark />
          </Link>
          <div className="flex items-center gap-3">
            <span className="hidden max-w-40 truncate text-sm text-ink-muted sm:block">{user?.name}</span>
            <Button variant="secondary" onClick={handleLogout}>Sign out</Button>
          </div>
        </div>
      </header>
      {error && <p role="alert" className="mx-auto max-w-7xl px-4 pt-4 text-sm text-rose-700">{error}</p>}
      <Outlet />
    </div>
  );
}
