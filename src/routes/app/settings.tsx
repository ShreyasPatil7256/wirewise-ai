import { createFileRoute } from "@tanstack/react-router";
import { Github, Database, Sparkles, User, FileDown } from "lucide-react";
import { Topbar } from "@/components/wirewise/topbar";

export const Route = createFileRoute("/app/settings")({
  head: () => ({
    meta: [
      { title: "Settings — WireWise AI" },
      { name: "description", content: "Manage your WireWise AI workspace." },
    ],
  }),
  component: SettingsPage,
});

function SettingsPage() {
  return (
    <>
      <Topbar title="Settings" subtitle="Workspace, integrations, and preferences." />
      <div className="flex-1 space-y-6 p-6 md:p-8">
        <Card icon={User} title="Profile" desc="How you show up across WireWise.">
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <Field label="Name" defaultValue="Maya Chen" />
            <Field label="Email" defaultValue="maya@wirewise.dev" />
            <Field label="Role" defaultValue="Staff Engineer" />
            <Field label="Timezone" defaultValue="Europe/Berlin" />
          </div>
        </Card>

        <Card icon={Github} title="GitHub Connection" desc="Connected as @wirewise-org.">
          <Row label="Access" value="Read repositories, commits, and metadata" />
          <Row label="Last sync" value="2 minutes ago" />
          <div className="mt-5 flex gap-2">
            <button className="rounded-xl border border-border px-3 py-1.5 text-xs font-medium hover:bg-accent">Reconnect</button>
            <button className="rounded-xl border border-border px-3 py-1.5 text-xs font-medium text-destructive hover:bg-red-50">Disconnect</button>
          </div>
        </Card>

        <Card icon={Database} title="Supabase Connection" desc="Project wirewise-prod · eu-central-1">
          <Row label="Database" value="PostgreSQL 15 · 14 tables" />
          <Row label="Auth" value="Enabled · Google, GitHub" />
          <Row label="Storage" value="3 buckets" />
        </Card>

        <Card icon={Sparkles} title="AI Preferences" desc="Tune how WireWise writes documentation.">
          <div className="mt-4 space-y-3">
            <Toggle label="Auto-generate docs on new commits" enabled />
            <Toggle label="Include diagrams in exports" enabled />
            <Toggle label="Explain in plain English (non-technical mode)" enabled={false} />
            <Toggle label="Weekly digest email" enabled />
          </div>
        </Card>

        <Card icon={FileDown} title="Export Settings" desc="How documentation is bundled and delivered.">
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            {["PDF", "Markdown", "Notion"].map((f) => (
              <button key={f} className="rounded-2xl border border-border bg-card p-4 text-left text-sm font-medium text-foreground hover:border-primary hover:text-primary">
                Export as {f}
                <div className="mt-1 text-xs text-muted-foreground">Latest: 2h ago</div>
              </button>
            ))}
          </div>
        </Card>
      </div>
    </>
  );
}

function Card({ icon: Icon, title, desc, children }: { icon: typeof User; title: string; desc: string; children: React.ReactNode }) {
  return (
    <div className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
      <div className="flex items-start gap-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-accent text-primary">
          <Icon className="h-5 w-5" />
        </div>
        <div className="flex-1">
          <h3 className="text-base font-semibold text-foreground">{title}</h3>
          <p className="text-xs text-muted-foreground">{desc}</p>
        </div>
      </div>
      {children}
    </div>
  );
}

function Field({ label, defaultValue }: { label: string; defaultValue: string }) {
  return (
    <label className="block">
      <span className="text-xs font-medium text-muted-foreground">{label}</span>
      <input
        defaultValue={defaultValue}
        className="mt-1 w-full rounded-xl border border-border bg-background px-3 py-2 text-sm text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
      />
    </label>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="mt-3 flex items-center justify-between border-t border-border pt-3 text-sm first:mt-5">
      <span className="text-muted-foreground">{label}</span>
      <span className="font-medium text-foreground">{value}</span>
    </div>
  );
}

function Toggle({ label, enabled }: { label: string; enabled: boolean }) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-border bg-muted/30 px-4 py-3">
      <span className="text-sm text-foreground">{label}</span>
      <span className={`relative h-5 w-9 rounded-full transition-colors ${enabled ? "bg-primary" : "bg-muted-foreground/30"}`}>
        <span className={`absolute top-0.5 h-4 w-4 rounded-full bg-white shadow transition-all ${enabled ? "left-4" : "left-0.5"}`} />
      </span>
    </div>
  );
}