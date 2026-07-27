import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Github,
  Sparkles,
  Workflow,
  ShieldCheck,
  FileText,
  Database,
  Zap,
  Check,
  User,
} from "lucide-react";
import { Logo } from "@/components/wirewise/logo";
import { testimonials } from "@/lib/mock-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "WireWise AI — Your infrastructure, documented automatically" },
      {
        name: "description",
        content:
          "WireWise AI connects to GitHub and Supabase, understands your architecture, and generates living documentation for your team.",
      },
      { property: "og:title", content: "WireWise AI — Documented Infrastructure" },
      {
        property: "og:description",
        content:
          "Connect GitHub and your cloud services. WireWise AI writes and maintains your technical docs, diagrams, and security insights.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Landing,
});

function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <HowItWorks />
      <Features />
      <ArchitecturePreview />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-30 border-b border-border/50 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Logo />
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          <a href="#features" className="hover:text-foreground">Features</a>
          <a href="#how" className="hover:text-foreground">How it works</a>
          <a href="#testimonials" className="hover:text-foreground">Testimonials</a>
          <Link to="/app" className="hover:text-foreground">Demo</Link>
        </nav>
        <div className="flex items-center gap-2">
          <Link to="/auth" className="hidden rounded-xl px-3 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground sm:inline-flex">Sign in</Link>
          <Link
            to="/auth"
            className="rounded-xl px-3.5 py-2 text-sm font-semibold text-white shadow-[var(--shadow-elegant)] transition-transform hover:-translate-y-0.5"
            style={{ background: "var(--gradient-primary)" }}
          >
            Get started
          </Link>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:py-28 lg:grid-cols-2 lg:items-center">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground shadow-[var(--shadow-soft)]">
            <Sparkles className="h-3.5 w-3.5 text-primary" /> Now indexing GitHub + Supabase
          </span>
          <h1 className="mt-6 text-5xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
            Your Infrastructure.
            <br />
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Documented Automatically.
            </span>
          </h1>
          <p className="mt-5 max-w-lg text-base text-muted-foreground md:text-lg">
            Connect your GitHub and cloud services. WireWise AI understands your application architecture and creates documentation automatically.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/auth"
              className="flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold text-white shadow-[var(--shadow-elegant)] transition-transform hover:-translate-y-0.5"
              style={{ background: "var(--gradient-primary)" }}
            >
              <Github className="h-4 w-4" /> Connect GitHub
            </Link>
            <Link
              to="/app"
              className="flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-2.5 text-sm font-semibold text-foreground hover:bg-accent"
            >
              Explore Demo <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-6 text-xs text-muted-foreground">
            <span className="flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-secondary" /> No credit card</span>
            <span className="flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-secondary" /> SOC2 in progress</span>
            <span className="flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-secondary" /> Read-only access</span>
          </div>
        </motion.div>

        <HeroVisual />
      </div>
    </section>
  );
}

function HeroVisual() {
  const nodes = [
    { icon: User, label: "User", tone: "muted" },
    { icon: Zap, label: "React Application", tone: "primary" },
    { icon: Database, label: "Supabase", tone: "secondary" },
    { icon: ShieldCheck, label: "Database + Authentication", tone: "muted" },
  ];
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="relative"
    >
      <div className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-glow)]">
        <div className="mb-4 flex items-center justify-between">
          <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Live Architecture</div>
          <div className="flex gap-1.5">
            <span className="h-2 w-2 rounded-full bg-red-400" />
            <span className="h-2 w-2 rounded-full bg-amber-400" />
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
          </div>
        </div>
        <div className="space-y-3">
          {nodes.map((n, i) => {
            const Icon = n.icon;
            const tone =
              n.tone === "primary" ? "border-primary/40 bg-accent text-primary"
              : n.tone === "secondary" ? "border-secondary/40 bg-teal-50 text-secondary"
              : "border-border bg-muted/40 text-foreground";
            return (
              <div key={n.label}>
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className={`flex items-center gap-3 rounded-2xl border p-3 ${tone}`}
                >
                  <Icon className="h-4 w-4" />
                  <span className="text-sm font-medium">{n.label}</span>
                </motion.div>
                {i < nodes.length - 1 && (
                  <div className="my-1 flex justify-center">
                    <div className="h-4 w-px bg-gradient-to-b from-primary/40 to-secondary/40" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="absolute -bottom-8 -left-4 w-72 rounded-2xl border border-border bg-card p-4 shadow-[var(--shadow-elegant)] md:-left-10"
      >
        <div className="flex items-center gap-2 text-xs font-semibold text-primary">
          <Sparkles className="h-3.5 w-3.5" /> AI Explanation
        </div>
        <p className="mt-2 text-xs leading-relaxed text-foreground">
          Your application uses Supabase Auth with JWT-based authentication connected to PostgreSQL.
        </p>
      </motion.div>
    </motion.div>
  );
}

function HowItWorks() {
  const steps = [
    { icon: Github, title: "Connect", desc: "Link GitHub and your cloud services in one click." },
    { icon: Workflow, title: "Analyze", desc: "WireWise reads your code and detects every service, table, and route." },
    { icon: FileText, title: "Document", desc: "Living docs, diagrams, and security insights — kept in sync forever." },
  ];
  return (
    <section id="how" className="mx-auto max-w-6xl px-6 py-24">
      <div className="max-w-2xl">
        <div className="text-xs font-semibold uppercase tracking-wider text-primary">How it works</div>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">Three steps to a documented codebase.</h2>
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {steps.map((s, i) => {
          const Icon = s.icon;
          return (
            <div key={s.title} className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-glow)]">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-accent text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <div className="mt-4 text-xs font-medium uppercase tracking-wider text-muted-foreground">Step {i + 1}</div>
              <h3 className="mt-1 text-lg font-semibold text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function Features() {
  const features = [
    { icon: Workflow, title: "Live architecture", desc: "Interactive diagrams generated from your real code." },
    { icon: FileText, title: "Notion-style docs", desc: "Beautiful, exportable documentation your team will actually read." },
    { icon: ShieldCheck, title: "Security insights", desc: "Find risky RLS gaps, exposed keys, and permission drift." },
    { icon: Sparkles, title: "AI summaries", desc: "Ask questions about any file, table, or auth flow." },
    { icon: Database, title: "Schema explorer", desc: "Understand every table, relation, and RLS policy at a glance." },
    { icon: Zap, title: "Auto-sync", desc: "Every commit updates diagrams and docs. Zero maintenance." },
  ];
  return (
    <section id="features" className="bg-muted/30 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <div className="text-xs font-semibold uppercase tracking-wider text-primary">Features</div>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
            Built for developers who ship fast — and want to still understand it in six months.
          </h2>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div key={f.title} className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-accent text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-foreground">{f.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{f.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ArchitecturePreview() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-primary">Architecture Visualization</div>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">See how every piece connects.</h2>
          <p className="mt-4 text-base text-muted-foreground">
            WireWise turns your repository into an interactive map. Zoom into services, expand nodes, and ask AI to explain the flow.
          </p>
          <ul className="mt-6 space-y-3 text-sm">
            {["Drag, zoom, and expand nodes", "AI narrates every subsystem", "Exports to PNG, Mermaid, and Markdown"].map((t) => (
              <li key={t} className="flex items-center gap-2 text-foreground">
                <Check className="h-4 w-4 text-secondary" /> {t}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-glow)]">
          <div className="grid grid-cols-3 gap-3 text-center text-xs">
            <Chip>React</Chip>
            <Chip primary>Supabase</Chip>
            <Chip>PostgreSQL</Chip>
            <Chip>Auth</Chip>
            <Chip primary>JWT</Chip>
            <Chip>Edge Fns</Chip>
            <Chip>Storage</Chip>
            <Chip primary>RLS</Chip>
            <Chip>Realtime</Chip>
          </div>
          <div className="mt-4 rounded-2xl border border-dashed border-border p-4 text-xs text-muted-foreground">
            <span className="font-semibold text-primary">AI:</span> Your React frontend calls Supabase over HTTPS. Auth issues JWTs; RLS scopes every row to the current user.
          </div>
        </div>
      </div>
    </section>
  );
}

function Chip({ children, primary }: { children: React.ReactNode; primary?: boolean }) {
  return (
    <div className={`rounded-2xl border px-3 py-2 font-medium ${primary ? "border-primary/40 bg-accent text-primary" : "border-border bg-muted/40 text-foreground"}`}>
      {children}
    </div>
  );
}

function Testimonials() {
  return (
    <section id="testimonials" className="bg-muted/30 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <div className="text-xs font-semibold uppercase tracking-wider text-primary">Loved by developers</div>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">Teams ship faster when their docs write themselves.</h2>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
              <p className="text-sm leading-relaxed text-foreground">"{t.quote}"</p>
              <div className="mt-5 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary text-xs font-semibold text-white">
                  {t.name.split(" ").map((p) => p[0]).join("")}
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <div className="relative overflow-hidden rounded-3xl p-10 text-white shadow-[var(--shadow-elegant)] md:p-16" style={{ background: "var(--gradient-primary)" }}>
        <div className="relative z-10 max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Preserve your infrastructure knowledge.</h2>
          <p className="mt-3 text-base text-white/85">
            Connect a repo in 30 seconds. Get living docs, architecture diagrams, and security insights — automatically.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link to="/auth" className="flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-foreground hover:bg-white/90">
              <Github className="h-4 w-4" /> Connect GitHub
            </Link>
            <Link to="/app" className="flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-4 py-2.5 text-sm font-semibold text-white backdrop-blur hover:bg-white/20">
              Explore Demo
            </Link>
          </div>
        </div>
        <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/15 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 -right-24 h-72 w-72 rounded-full bg-secondary/40 blur-3xl" />
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 md:flex-row">
        <Logo />
        <p className="text-xs text-muted-foreground">© 2026 WireWise AI · Documenting infrastructure so you don't have to.</p>
      </div>
    </footer>
  );
}
