import { NavLink } from "react-router";
import { BrandMark } from "@/components/common/brand-mark";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/cn";

type AdminSidebarProps = {
  userName?: string;
  onLogout: () => void;
  onNavigate?: () => void;
};

const links = [
  { to: "/admin", label: "Overview", end: true, icon: OverviewIcon },
  { to: "/admin/recipes", label: "Recipes", end: false, icon: RecipesIcon },
];

export function AdminSidebar({ userName, onLogout, onNavigate }: AdminSidebarProps) {
  return (
    <div className="flex h-full flex-col bg-espresso text-cream">
      <div className="border-b border-white/10 px-5 py-6">
        <BrandMark inverted />
        <p className="mt-3 text-xs tracking-[0.18em] text-cream/50 uppercase">Administration</p>
      </div>

      <nav className="flex flex-1 flex-col gap-1 p-3" aria-label="Admin">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.end}
            onClick={onNavigate}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors",
                isActive ? "bg-terracotta text-cream" : "text-cream/70 hover:bg-white/10 hover:text-cream",
              )
            }
          >
            <link.icon />
            {link.label}
          </NavLink>
        ))}
      </nav>

      <div className="border-t border-white/10 p-4">
        <p className="truncate px-1 text-sm font-medium">{userName}</p>
        <p className="mb-3 px-1 text-xs text-cream/50">Administrator</p>
        <Button variant="secondary" className="w-full border-white/15 bg-white/10 text-cream hover:bg-white/15" onClick={onLogout}>
          Sign out
        </Button>
      </div>
    </div>
  );
}

function OverviewIcon() {
  return (
    <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" aria-hidden="true">
      <rect x="2.5" y="2.5" width="6.5" height="6.5" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <rect x="11" y="2.5" width="6.5" height="6.5" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <rect x="2.5" y="11" width="6.5" height="6.5" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <rect x="11" y="11" width="6.5" height="6.5" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function RecipesIcon() {
  return (
    <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" aria-hidden="true">
      <path d="M4.5 4.5h11v12.5H4.5z" stroke="currentColor" strokeWidth="1.5" />
      <path d="M7 8h6M7 11h6M7 14h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
