export const stats = [
  { label: "Projects Analyzed", value: "12", trend: "+3 this month", tone: "primary" as const },
  { label: "Services Connected", value: "36", trend: "+8 this week", tone: "secondary" as const },
  { label: "Documentation Generated", value: "98%", trend: "Coverage", tone: "primary" as const },
  { label: "Security Score", value: "92%", trend: "+4 vs last scan", tone: "secondary" as const },
];

export type Project = {
  id: string;
  name: string;
  description: string;
  framework: string;
  backend: string;
  language: string;
  lastAnalyzed: string;
  status: "Fully Documented" | "Analyzing" | "Needs Review";
  stack: string[];
};

export const projects: Project[] = [
  {
    id: "food-delivery",
    name: "Food Delivery App",
    description: "Consumer-facing ordering platform with realtime tracking.",
    framework: "React",
    backend: "Supabase",
    language: "TypeScript",
    lastAnalyzed: "2h ago",
    status: "Fully Documented",
    stack: ["React", "Supabase", "PostgreSQL"],
  },
  {
    id: "finlytics",
    name: "Finlytics Dashboard",
    description: "Analytics workspace for indie fintech founders.",
    framework: "Next.js",
    backend: "Supabase",
    language: "TypeScript",
    lastAnalyzed: "1d ago",
    status: "Fully Documented",
    stack: ["Next.js", "Supabase", "Stripe"],
  },
  {
    id: "medisync",
    name: "MediSync",
    description: "Patient portal with HIPAA-aware document flows.",
    framework: "Remix",
    backend: "Supabase",
    language: "TypeScript",
    lastAnalyzed: "3d ago",
    status: "Needs Review",
    stack: ["Remix", "Supabase", "Auth"],
  },
  {
    id: "orbit-crm",
    name: "Orbit CRM",
    description: "Pipeline management for B2B sales teams.",
    framework: "React",
    backend: "Supabase",
    language: "TypeScript",
    lastAnalyzed: "5h ago",
    status: "Analyzing",
    stack: ["React", "Supabase", "Edge Functions"],
  },
  {
    id: "beacon-blog",
    name: "Beacon Blog",
    description: "Editorial CMS with realtime collaboration.",
    framework: "Astro",
    backend: "Supabase",
    language: "TypeScript",
    lastAnalyzed: "1w ago",
    status: "Fully Documented",
    stack: ["Astro", "Supabase"],
  },
  {
    id: "voxa-ai",
    name: "Voxa AI",
    description: "Speech-to-insight platform for support teams.",
    framework: "React",
    backend: "Supabase",
    language: "TypeScript",
    lastAnalyzed: "12h ago",
    status: "Fully Documented",
    stack: ["React", "Supabase", "AI Gateway"],
  },
];

export const repositories = [
  { name: "wirewise/food-delivery", language: "TypeScript", framework: "React", lastCommit: "2h ago", stars: 128 },
  { name: "wirewise/finlytics", language: "TypeScript", framework: "Next.js", lastCommit: "1d ago", stars: 342 },
  { name: "wirewise/medisync", language: "TypeScript", framework: "Remix", lastCommit: "3d ago", stars: 76 },
  { name: "wirewise/orbit-crm", language: "TypeScript", framework: "React", lastCommit: "5h ago", stars: 214 },
  { name: "wirewise/beacon-blog", language: "TypeScript", framework: "Astro", lastCommit: "1w ago", stars: 58 },
];

export const testimonials = [
  {
    name: "Maya Chen",
    role: "Staff Engineer, Linear-esque",
    quote:
      "WireWise cut our onboarding time from 3 weeks to 3 days. New engineers actually understand the system on day one.",
  },
  {
    name: "Jonas Weber",
    role: "CTO, Beacon",
    quote:
      "It's the first tool that keeps docs in sync with production. Feels like a senior engineer reading the repo for you.",
  },
  {
    name: "Priya Anand",
    role: "Founder, Orbit",
    quote:
      "Architecture diagrams that update themselves. Our investors ask for it now.",
  },
];

export const securityFindings = [
  { title: "Environment Variables", status: "Safe", severity: "ok", detail: "No secrets in client bundles. 12 vars scoped correctly." },
  { title: "Authentication", status: "Secure", severity: "ok", detail: "JWT rotation active. MFA enabled for 3/4 admin accounts." },
  { title: "Storage Permissions", status: "Warning", severity: "warn", detail: "Public bucket `avatars` allows anonymous reads." },
  { title: "Row Level Security", status: "Secure", severity: "ok", detail: "RLS enabled across 14/14 user-scoped tables." },
  { title: "Dependencies", status: "Review", severity: "warn", detail: "2 packages 1 major version behind. No known CVEs." },
  { title: "Rate Limiting", status: "Secure", severity: "ok", detail: "Edge middleware enforces per-IP throttles." },
];

export const recommendations = [
  "Your storage bucket allows public access. Consider restricting permissions.",
  "Rotate the SUPABASE_SERVICE_ROLE_KEY — last rotated 94 days ago.",
  "Enable MFA for the remaining admin account (jonas@beacon.dev).",
];

export const envVars = [
  { name: "VITE_SUPABASE_URL", scope: "Client", purpose: "Public Supabase project URL used by the browser client." },
  { name: "VITE_SUPABASE_PUBLISHABLE_KEY", scope: "Client", purpose: "Publishable anon key. Safe for browser use." },
  { name: "SUPABASE_SERVICE_ROLE_KEY", scope: "Server", purpose: "Bypasses RLS. Only referenced from server functions." },
  { name: "OPENAI_API_KEY", scope: "Server", purpose: "AI summarization pipeline." },
  { name: "GITHUB_APP_TOKEN", scope: "Server", purpose: "Read-only repo access for the analyzer." },
];