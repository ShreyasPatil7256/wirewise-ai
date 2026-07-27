import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Github, GitBranch, Star, Loader2, Check, Database } from "lucide-react";
import { Topbar } from "@/components/wirewise/topbar";
import { repositories } from "@/lib/mock-data";
import { useState } from "react";

export const Route = createFileRoute("/app/integrations/github")({
  head: () => ({
    meta: [
      { title: "GitHub Integration — WireWise AI" },
      { name: "description", content: "Connect and analyze your GitHub repositories." },
    ],
  }),
  component: GithubPage,
});

const steps = [
  "Analyzing files",
  "Detecting dependencies",
  "Understanding architecture",
  "Generating documentation",
];

function GithubPage() {
  const [analyzing, setAnalyzing] = useState<string | null>(null);
  const [step, setStep] = useState(0);

  const start = (name: string) => {
    setAnalyzing(name);
    setStep(0);
    let i = 0;
    const t = setInterval(() => {
      i += 1;
      setStep(i);
      if (i >= steps.length) {
        clearInterval(t);
        setTimeout(() => setAnalyzing(null), 800);
      }
    }, 900);
  };

  return (
    <>
      <Topbar title="Integrations" subtitle="GitHub · Source of truth for every repo you ship." />
      <div className="flex-1 space-y-6 p-6 md:p-8">
        <IntegrationTabs active="github" />

        <div className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-foreground text-white">
                <Github className="h-7 w-7" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-foreground">GitHub</h3>
                <p className="text-xs text-muted-foreground">
                  Connected as <span className="font-medium text-foreground">@wirewise-org</span> · 12 repos indexed
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-600">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Connected
              </span>
              <button className="rounded-xl border border-border px-3 py-1.5 text-xs font-medium hover:bg-accent">Manage</button>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-border bg-card shadow-[var(--shadow-soft)]">
          <div className="border-b border-border p-6">
            <h3 className="text-base font-semibold text-foreground">Repositories</h3>
            <p className="text-xs text-muted-foreground">Pick a repo to analyze with WireWise AI.</p>
          </div>
          <ul className="divide-y divide-border">
            {repositories.map((r) => (
              <li key={r.name} className="flex flex-col gap-3 p-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-muted text-foreground">
                    <GitBranch className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground">{r.name}</div>
                    <div className="mt-0.5 flex items-center gap-3 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <span className="h-2 w-2 rounded-full bg-primary" /> {r.language}
                      </span>
                      <span>{r.framework}</span>
                      <span className="flex items-center gap-1"><Star className="h-3 w-3" /> {r.stars}</span>
                      <span>Last commit {r.lastCommit}</span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => start(r.name)}
                  className="rounded-xl bg-foreground px-3 py-1.5 text-xs font-semibold text-white hover:bg-foreground/90 disabled:opacity-60"
                  disabled={analyzing === r.name}
                >
                  {analyzing === r.name ? "Analyzing…" : "Analyze"}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {analyzing && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-glow)]"
          >
            <div className="flex items-center gap-2 text-sm font-semibold text-primary">
              <Loader2 className="h-4 w-4 animate-spin" /> AI is understanding your project…
            </div>
            <p className="mt-1 text-xs text-muted-foreground">{analyzing}</p>
            <div className="mt-5 space-y-3">
              {steps.map((s, i) => (
                <div key={s} className="flex items-center gap-3">
                  <div className={`flex h-6 w-6 items-center justify-center rounded-full ${i < step ? "bg-primary text-white" : i === step ? "bg-accent text-primary" : "bg-muted text-muted-foreground"}`}>
                    {i < step ? <Check className="h-3.5 w-3.5" /> : i === step ? <Loader2 className="h-3 w-3 animate-spin" /> : i + 1}
                  </div>
                  <div className="flex-1">
                    <div className={`text-sm ${i <= step ? "text-foreground" : "text-muted-foreground"}`}>{s}</div>
                    <div className="mt-1 h-1 overflow-hidden rounded-full bg-muted">
                      <motion.div
                        className="h-full"
                        style={{ background: "var(--gradient-primary)" }}
                        initial={{ width: 0 }}
                        animate={{ width: i < step ? "100%" : i === step ? "60%" : "0%" }}
                        transition={{ duration: 0.6 }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        <div className="rounded-3xl border border-border bg-gradient-to-br from-white to-[#f5f4ff] p-6 shadow-[var(--shadow-soft)]">
          <div className="flex items-center gap-2 text-xs font-semibold text-primary">
            <Database className="h-4 w-4" /> Next up
          </div>
          <p className="mt-2 text-sm text-foreground">
            Once analysis is done, pop into <Link to="/app/architecture" className="font-semibold text-primary hover:underline">Architecture</Link> to explore the generated diagram.
          </p>
        </div>
      </div>
    </>
  );
}

export function IntegrationTabs({ active }: { active: "github" | "supabase" }) {
  const base = "rounded-xl px-4 py-2 text-sm font-medium transition-colors";
  return (
    <div className="inline-flex items-center gap-1 rounded-2xl border border-border bg-card p-1 shadow-[var(--shadow-soft)]">
      <Link
        to="/app/integrations/github"
        className={`${base} ${active === "github" ? "bg-accent text-primary" : "text-muted-foreground hover:text-foreground"}`}
      >
        GitHub
      </Link>
      <Link
        to="/app/integrations/supabase"
        className={`${base} ${active === "supabase" ? "bg-accent text-primary" : "text-muted-foreground hover:text-foreground"}`}
      >
        Supabase
      </Link>
    </div>
  );
}