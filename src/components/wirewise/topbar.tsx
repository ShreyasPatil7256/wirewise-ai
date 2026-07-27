import { Bell, Search, Command } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function Topbar({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <header className="sticky top-0 z-20 flex h-16 items-center gap-4 border-b border-border bg-background/80 px-6 backdrop-blur-xl">
      <div className="min-w-0 flex-1">
        <h1 className="truncate text-[15px] font-semibold text-foreground">{title}</h1>
        {subtitle && <p className="truncate text-xs text-muted-foreground">{subtitle}</p>}
      </div>
      <div className="hidden items-center gap-2 rounded-xl border border-border bg-card px-3 py-1.5 text-sm text-muted-foreground shadow-[var(--shadow-soft)] md:flex md:w-80">
        <Search className="h-4 w-4" />
        <span className="flex-1">Search projects, docs, repos…</span>
        <kbd className="flex items-center gap-1 rounded-md border border-border bg-muted px-1.5 py-0.5 text-[10px] text-muted-foreground">
          <Command className="h-3 w-3" /> K
        </kbd>
      </div>
      <button className="relative flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-card text-muted-foreground hover:text-foreground">
        <Bell className="h-4 w-4" />
        <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-primary" />
      </button>
      <Link to="/app/settings" className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-secondary text-xs font-semibold text-white shadow-[var(--shadow-elegant)]">
        MA
      </Link>
    </header>
  );
}