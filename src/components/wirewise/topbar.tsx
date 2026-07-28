import { Bell, Search, Command, LogOut } from "lucide-react";
import { Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

export function Topbar({ title, subtitle }: { title: string; subtitle?: string }) {
  const navigate = useNavigate();
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const { data } = await supabase.auth.getUser();
      const user = data.user;
      if (!user || cancelled) return;
      setEmail(user.email ?? "");
      const { data: profile } = await supabase
        .from("profiles")
        .select("full_name")
        .eq("id", user.id)
        .maybeSingle();
      if (!cancelled) {
        setName(
          (profile?.full_name as string | undefined) ||
            (user.user_metadata?.full_name as string | undefined) ||
            user.email?.split("@")[0] ||
            "",
        );
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  const initials = (name || email || "?")
    .split(/[\s@.]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((s) => s[0]?.toUpperCase())
    .join("");

  async function handleSignOut() {
    await supabase.auth.signOut();
    navigate({ to: "/auth", replace: true });
  }

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
      <Link
        to="/app/settings"
        className="flex items-center gap-2 rounded-xl border border-border bg-card px-2 py-1 pr-3 text-xs font-medium text-foreground hover:bg-accent"
      >
        <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-secondary text-[11px] font-semibold text-white shadow-[var(--shadow-elegant)]">
          {initials || "?"}
        </span>
        <span className="hidden max-w-[140px] truncate sm:inline">{name || email}</span>
      </Link>
      <button
        onClick={handleSignOut}
        title="Sign out"
        className="flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-card text-muted-foreground hover:text-foreground"
      >
        <LogOut className="h-4 w-4" />
      </button>
    </header>
  );
}