import { createFileRoute } from "@tanstack/react-router";
import { Database, KeyRound, HardDrive, Zap, Check } from "lucide-react";
import { Topbar } from "@/components/wirewise/topbar";
import { IntegrationTabs } from "./integrations.github";

export const Route = createFileRoute("/app/integrations/supabase")({
  head: () => ({
    meta: [
      { title: "Supabase Integration — WireWise AI" },
      { name: "description", content: "Inspect your Supabase database, auth, and storage." },
    ],
  }),
  component: SupabasePage,
});

const services = [
  { icon: Database, name: "Database", tech: "PostgreSQL 15", status: "Connected", detail: "14 tables · RLS enabled · 3.2 GB" },
  { icon: KeyRound, name: "Authentication", tech: "Supabase Auth", status: "Enabled", detail: "1,284 users · JWT · Google & GitHub" },
  { icon: HardDrive, name: "Storage", tech: "3 buckets detected", status: "Enabled", detail: "avatars · exports · uploads" },
  { icon: Zap, name: "Edge Functions", tech: "8 functions deployed", status: "Healthy", detail: "p95 latency 84ms" },
];

function SupabasePage() {
  return (
    <>
      <Topbar title="Integrations" subtitle="Supabase · Database, auth, and storage in one place." />
      <div className="flex-1 space-y-6 p-6 md:p-8">
        <IntegrationTabs active="supabase" />

        <div className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl text-white" style={{ background: "linear-gradient(135deg,#3ecf8e,#14b8a6)" }}>
                <Database className="h-7 w-7" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-foreground">Supabase</h3>
                <p className="text-xs text-muted-foreground">
                  Project <span className="font-medium text-foreground">wirewise-prod</span> · eu-central-1
                </p>
              </div>
            </div>
            <span className="flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-600">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Connected
            </span>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.name} className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] transition-all hover:shadow-[var(--shadow-glow)]">
                <div className="flex items-start justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-accent text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-medium text-emerald-600">
                    <Check className="h-3 w-3" /> {s.status}
                  </span>
                </div>
                <h4 className="mt-4 text-base font-semibold text-foreground">{s.name}</h4>
                <p className="text-xs text-muted-foreground">{s.tech}</p>
                <div className="mt-4 rounded-xl bg-muted/60 px-3 py-2 text-xs text-muted-foreground">{s.detail}</div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}