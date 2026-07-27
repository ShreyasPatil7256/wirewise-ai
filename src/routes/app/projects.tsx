import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Plus, Search, Github, Filter, Database } from "lucide-react";
import { Topbar } from "@/components/wirewise/topbar";
import { projects } from "@/lib/mock-data";
import { Badge } from "@/components/ui/badge";

export const Route = createFileRoute("/app/projects")({
  head: () => ({
    meta: [
      { title: "Projects — WireWise AI" },
      { name: "description", content: "Manage and analyze your projects." },
    ],
  }),
  component: ProjectsPage,
});

const statusColor: Record<string, string> = {
  "Fully Documented": "bg-emerald-50 text-emerald-600",
  "Analyzing": "bg-amber-50 text-amber-600",
  "Needs Review": "bg-rose-50 text-rose-600",
};

function ProjectsPage() {
  return (
    <>
      <Topbar title="Projects" subtitle="All the applications WireWise is watching." />
      <div className="flex-1 space-y-6 p-6 md:p-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-1 items-center gap-2 rounded-2xl border border-border bg-card px-4 py-2.5 shadow-[var(--shadow-soft)] sm:max-w-md">
            <Search className="h-4 w-4 text-muted-foreground" />
            <input
              placeholder="Search projects…"
              className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
            />
          </div>
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-2 rounded-xl border border-border bg-card px-3 py-2 text-sm font-medium text-foreground hover:bg-accent">
              <Filter className="h-4 w-4" /> Filter
            </button>
            <button className="flex items-center gap-2 rounded-xl border border-border bg-card px-3 py-2 text-sm font-medium text-foreground hover:bg-accent">
              <Github className="h-4 w-4" /> Import
            </button>
            <button
              className="flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold text-white shadow-[var(--shadow-elegant)]"
              style={{ background: "var(--gradient-primary)" }}
            >
              <Plus className="h-4 w-4" /> New Project
            </button>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.04 }}
              className="group rounded-3xl border border-border bg-card p-5 shadow-[var(--shadow-soft)] transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-glow)]"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 text-primary">
                  <Database className="h-5 w-5" />
                </div>
                <Badge className={`rounded-full border-0 text-[10px] font-medium ${statusColor[p.status]}`}>
                  {p.status}
                </Badge>
              </div>
              <h3 className="mt-4 text-base font-semibold text-foreground">{p.name}</h3>
              <p className="mt-1 line-clamp-2 text-xs text-muted-foreground">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.stack.map((s) => (
                  <span key={s} className="rounded-lg bg-muted px-2 py-0.5 text-[10px] font-medium text-muted-foreground">
                    {s}
                  </span>
                ))}
              </div>
              <div className="mt-5 flex items-center justify-between border-t border-border pt-4 text-xs text-muted-foreground">
                <span>Analyzed {p.lastAnalyzed}</span>
                <button className="font-medium text-primary hover:underline">Open →</button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}