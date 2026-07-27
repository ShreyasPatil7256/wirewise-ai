import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight, Github, Database, Sparkles, TrendingUp } from "lucide-react";
import { Topbar } from "@/components/wirewise/topbar";
import { stats, projects } from "@/lib/mock-data";
import { Badge } from "@/components/ui/badge";

export const Route = createFileRoute("/app/")({
  head: () => ({
    meta: [
      { title: "Dashboard — WireWise AI" },
      { name: "description", content: "Your infrastructure knowledge, synchronized." },
    ],
  }),
  component: Dashboard,
});

function Dashboard() {
  return (
    <>
      <Topbar title="Dashboard" subtitle="Your infrastructure knowledge is synchronized." />
      <div className="flex-1 space-y-8 p-6 md:p-8">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col gap-2"
        >
          <h2 className="text-3xl font-semibold tracking-tight text-foreground">
            Good morning, Maya <span className="text-primary">👋</span>
          </h2>
          <p className="text-sm text-muted-foreground">
            WireWise indexed 3 new commits and refreshed 12 documentation blocks overnight.
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: i * 0.05 }}
              className="rounded-3xl border border-border bg-card p-5 shadow-[var(--shadow-soft)] transition-all hover:shadow-[var(--shadow-glow)]"
            >
              <div className="flex items-start justify-between">
                <span className="text-xs font-medium text-muted-foreground">{s.label}</span>
                <div className={`flex h-8 w-8 items-center justify-center rounded-xl ${s.tone === "primary" ? "bg-accent text-primary" : "bg-teal-50 text-secondary"}`}>
                  <TrendingUp className="h-4 w-4" />
                </div>
              </div>
              <div className="mt-4 text-3xl font-semibold tracking-tight text-foreground">{s.value}</div>
              <div className="mt-1 text-xs text-muted-foreground">{s.trend}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-base font-semibold text-foreground">Recent projects</h3>
                <p className="text-xs text-muted-foreground">Last analyzed by WireWise AI</p>
              </div>
              <Link to="/app/projects" className="text-xs font-medium text-primary hover:underline">View all</Link>
            </div>
            <div className="mt-5 divide-y divide-border">
              {projects.slice(0, 4).map((p) => (
                <div key={p.id} className="flex items-center gap-4 py-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 text-primary">
                    <Database className="h-5 w-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <span className="truncate text-sm font-semibold text-foreground">{p.name}</span>
                      <Badge variant="secondary" className="rounded-full bg-accent text-[10px] font-medium text-primary">
                        {p.status}
                      </Badge>
                    </div>
                    <p className="mt-0.5 text-xs text-muted-foreground">{p.stack.join(" · ")} · {p.lastAnalyzed}</p>
                  </div>
                  <Link
                    to="/app/architecture"
                    className="flex items-center gap-1 rounded-xl border border-border px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent hover:text-primary"
                  >
                    View Architecture <ArrowUpRight className="h-3 w-3" />
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
              <div className="flex items-center gap-2 text-xs font-semibold text-primary">
                <Sparkles className="h-4 w-4" /> AI Insight
              </div>
              <p className="mt-3 text-sm leading-relaxed text-foreground">
                Your <span className="font-semibold">Finlytics</span> project uses Supabase Auth with JWT-based sessions connected to PostgreSQL. Row Level Security is enforced on all 14 user-scoped tables.
              </p>
              <div className="mt-4 flex gap-2">
                <button className="rounded-lg bg-foreground px-3 py-1.5 text-xs font-medium text-white">Ask follow-up</button>
                <button className="rounded-lg border border-border px-3 py-1.5 text-xs font-medium text-foreground">Dismiss</button>
              </div>
            </div>

            <div
              className="rounded-3xl p-6 text-white shadow-[var(--shadow-elegant)]"
              style={{ background: "var(--gradient-primary)" }}
            >
              <Github className="h-5 w-5 opacity-90" />
              <h4 className="mt-3 text-base font-semibold">Connect another repo</h4>
              <p className="mt-1 text-xs text-white/80">Import a GitHub repository to analyze in seconds.</p>
              <Link to="/app/integrations/github" className="mt-4 inline-flex rounded-xl bg-white/15 px-3 py-1.5 text-xs font-semibold backdrop-blur hover:bg-white/25">
                Add repository →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}