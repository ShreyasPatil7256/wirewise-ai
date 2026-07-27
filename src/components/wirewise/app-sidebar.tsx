import { Link, useRouterState } from "@tanstack/react-router";
import {
  LayoutDashboard,
  FolderGit2,
  Plug,
  Workflow,
  FileText,
  ShieldCheck,
  Settings,
  Sparkles,
} from "lucide-react";
import { Logo } from "./logo";
import { cn } from "@/lib/utils";

const items = [
  { title: "Dashboard", url: "/app", icon: LayoutDashboard, exact: true },
  { title: "Projects", url: "/app/projects", icon: FolderGit2 },
  { title: "Integrations", url: "/app/integrations/github", icon: Plug, match: "/app/integrations" },
  { title: "Architecture", url: "/app/architecture", icon: Workflow },
  { title: "AI Docs", url: "/app/docs", icon: FileText },
  { title: "Security", url: "/app/security", icon: ShieldCheck },
  { title: "Settings", url: "/app/settings", icon: Settings },
];

export function AppSidebar() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  const isActive = (item: (typeof items)[number]) => {
    if (item.exact) return pathname === item.url;
    return pathname.startsWith(item.match ?? item.url);
  };

  return (
    <aside className="hidden md:flex md:w-64 md:flex-col md:border-r md:border-sidebar-border md:bg-sidebar">
      <div className="flex h-16 items-center px-6">
        <Link to="/app"><Logo /></Link>
      </div>
      <nav className="flex-1 space-y-1 px-3">
        {items.map((item) => {
          const active = isActive(item);
          const Icon = item.icon;
          return (
            <Link
              key={item.title}
              to={item.url}
              className={cn(
                "group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all",
                active
                  ? "bg-sidebar-accent text-sidebar-accent-foreground shadow-[var(--shadow-soft)]"
                  : "text-muted-foreground hover:bg-sidebar-accent/60 hover:text-foreground",
              )}
            >
              <Icon className={cn("h-4 w-4", active ? "text-primary" : "text-muted-foreground group-hover:text-foreground")} />
              <span>{item.title}</span>
            </Link>
          );
        })}
      </nav>
      <div className="m-3 rounded-2xl border border-sidebar-border bg-gradient-to-br from-white to-[#f5f4ff] p-4">
        <div className="flex items-center gap-2 text-xs font-semibold text-primary">
          <Sparkles className="h-4 w-4" /> AI Assistant
        </div>
        <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
          Ask WireWise anything about your infrastructure.
        </p>
        <button className="mt-3 w-full rounded-lg bg-foreground/95 px-3 py-1.5 text-xs font-medium text-white hover:bg-foreground">
          Open Copilot
        </button>
      </div>
    </aside>
  );
}