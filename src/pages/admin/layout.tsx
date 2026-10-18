import { useState } from "react";
import { Outlet } from "react-router";
import { useAuth } from "@/components/context/use-auth";
import { AdminSidebar } from "@/components/features/admin/admin-sidebar";
import { BrandMark } from "@/components/common/brand-mark";
import { Button } from "@/components/ui/button";

export default function AdminLayout() {
  const { user, logout } = useAuth();
  const [error, setError] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  async function handleLogout() {
    try {
      setError("");
      await logout();
    } catch {
      setError("Unable to sign out. Please try again.");
    }
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <div className="min-h-svh bg-paper">
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-64 lg:block">
        <AdminSidebar userName={user?.name} onLogout={handleLogout} />
      </aside>

      {menuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <button type="button" className="absolute inset-0 bg-espresso/50" aria-label="Close menu" onClick={closeMenu} />
          <aside className="relative h-full w-72 max-w-[85vw] shadow-2xl">
            <AdminSidebar userName={user?.name} onLogout={handleLogout} onNavigate={closeMenu} />
          </aside>
        </div>
      )}

      <div className="lg:pl-64">
        <header className="sticky top-0 z-20 flex items-center justify-between border-b border-line bg-paper/90 px-4 py-3 backdrop-blur lg:hidden">
          <BrandMark compact />
          <Button variant="secondary" onClick={() => setMenuOpen(true)}>
            Menu
          </Button>
        </header>

        <main>
          {error && <p role="alert" className="px-6 pt-4 text-sm text-rose-700">{error}</p>}
          <Outlet />
        </main>
      </div>
    </div>
  );
}
