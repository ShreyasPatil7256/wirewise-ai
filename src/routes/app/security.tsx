import { createFileRoute } from "@tanstack/react-router";
import { ShieldCheck, ShieldAlert, Sparkles, Lock } from "lucide-react";
import { Topbar } from "@/components/wirewise/topbar";
import { securityFindings, recommendations } from "@/lib/mock-data";

export const Route = createFileRoute("/app/security")({
  head: () => ({
    meta: [
      { title: "Security — WireWise AI" },
      { name: "description", content: "Security insights and recommendations." },
    ],
  }),
  component: SecurityPage,
});

function SecurityPage() {
  return (
    <>
      <Topbar title="Security" subtitle="Continuous audits across auth, storage, and RLS." />
      <div className="flex-1 space-y-6 p-6 md:p-8">
        <div className="grid gap-6 lg:grid-cols-3">
          <div
            className="lg:col-span-1 rounded-3xl p-6 text-white shadow-[var(--shadow-elegant)]"
            style={{ background: "var(--gradient-primary)" }}
          >
            <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-white/80">
              <ShieldCheck className="h-4 w-4" /> Security Score
            </div>
            <div className="mt-4 flex items-end gap-2">
              <span className="text-6xl font-semibold tracking-tight">92</span>
              <span className="mb-2 text-lg text-white/80">/ 100</span>
            </div>
            <p className="mt-2 text-sm text-white/80">+4 vs last scan · 14 checks passed</p>
            <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/20">
              <div className="h-full rounded-full bg-white" style={{ width: "92%" }} />
            </div>
          </div>

          <div className="lg:col-span-2 rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
            <div className="flex items-center gap-2 text-xs font-semibold text-primary">
              <Sparkles className="h-4 w-4" /> AI Recommendations
            </div>
            <ul className="mt-4 space-y-3">
              {recommendations.map((r) => (
                <li key={r} className="flex items-start gap-3 rounded-2xl border border-border bg-muted/40 p-4">
                  <div className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-accent text-primary">
                    <Lock className="h-3.5 w-3.5" />
                  </div>
                  <p className="text-sm text-foreground">{r}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {securityFindings.map((f) => {
            const warn = f.severity === "warn";
            return (
              <div key={f.title} className="rounded-3xl border border-border bg-card p-5 shadow-[var(--shadow-soft)]">
                <div className="flex items-center justify-between">
                  <div className={`flex h-10 w-10 items-center justify-center rounded-2xl ${warn ? "bg-amber-50 text-amber-600" : "bg-emerald-50 text-emerald-600"}`}>
                    {warn ? <ShieldAlert className="h-5 w-5" /> : <ShieldCheck className="h-5 w-5" />}
                  </div>
                  <span className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${warn ? "bg-amber-50 text-amber-600" : "bg-emerald-50 text-emerald-600"}`}>
                    {f.status}
                  </span>
                </div>
                <h4 className="mt-4 text-sm font-semibold text-foreground">{f.title}</h4>
                <p className="mt-1 text-xs text-muted-foreground">{f.detail}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}