import { createFileRoute } from "@tanstack/react-router";
import { ReactFlow, Background, Controls, MiniMap, MarkerType, type Node, type Edge } from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { Sparkles, Layers } from "lucide-react";
import { Topbar } from "@/components/wirewise/topbar";

export const Route = createFileRoute("/app/architecture")({
  head: () => ({
    meta: [
      { title: "Architecture — WireWise AI" },
      { name: "description", content: "Interactive architecture visualization." },
    ],
  }),
  component: ArchitecturePage,
});

const nodeBase = "rounded-2xl border border-border bg-card px-4 py-3 shadow-[var(--shadow-soft)] text-sm font-medium text-foreground";

const nodes: Node[] = [
  { id: "user", position: { x: 260, y: 0 }, data: { label: <div className={nodeBase}>👤 User</div> }, type: "default" },
  { id: "react", position: { x: 220, y: 110 }, data: { label: <div className={nodeBase} style={{ borderColor: "#635BFF", color: "#635BFF" }}>⚛️ React Frontend</div> }, type: "default" },
  { id: "supabase", position: { x: 200, y: 230 }, data: { label: <div className={nodeBase}>🗄️ Supabase Client</div> }, type: "default" },
  { id: "auth", position: { x: 20, y: 360 }, data: { label: <div className={nodeBase} style={{ borderColor: "#14B8A6", color: "#14B8A6" }}>🔐 Authentication</div> }, type: "default" },
  { id: "db", position: { x: 380, y: 360 }, data: { label: <div className={nodeBase}>🐘 PostgreSQL</div> }, type: "default" },
  { id: "jwt", position: { x: 20, y: 490 }, data: { label: <div className={nodeBase}>🎟️ JWT Token</div> }, type: "default" },
  { id: "rls", position: { x: 380, y: 490 }, data: { label: <div className={nodeBase}>🛡️ Row Level Security</div> }, type: "default" },
];

const edgeStyle = { stroke: "#635BFF", strokeWidth: 2 };
const marker = { type: MarkerType.ArrowClosed, color: "#635BFF" };

const edges: Edge[] = [
  { id: "e1", source: "user", target: "react", animated: true, style: edgeStyle, markerEnd: marker },
  { id: "e2", source: "react", target: "supabase", animated: true, style: edgeStyle, markerEnd: marker },
  { id: "e3", source: "supabase", target: "auth", style: edgeStyle, markerEnd: marker },
  { id: "e4", source: "supabase", target: "db", style: edgeStyle, markerEnd: marker },
  { id: "e5", source: "auth", target: "jwt", style: edgeStyle, markerEnd: marker },
  { id: "e6", source: "db", target: "rls", style: edgeStyle, markerEnd: marker },
];

function ArchitecturePage() {
  return (
    <>
      <Topbar title="Architecture" subtitle="Interactive map generated from your codebase." />
      <div className="flex flex-1 flex-col gap-6 p-6 md:p-8 lg:flex-row">
        <div className="min-h-[560px] flex-1 overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-soft)]">
          <ReactFlow
            nodes={nodes}
            edges={edges}
            fitView
            proOptions={{ hideAttribution: true }}
            defaultEdgeOptions={{ style: edgeStyle }}
          >
            <Background gap={20} color="#e5e7eb" />
            <Controls className="!rounded-xl !border !border-border !bg-card !shadow-[var(--shadow-soft)]" />
            <MiniMap pannable zoomable maskColor="rgba(248,250,252,0.7)" nodeColor="#635BFF" />
          </ReactFlow>
        </div>
        <aside className="w-full space-y-4 lg:w-80">
          <div className="rounded-3xl border border-border bg-card p-5 shadow-[var(--shadow-soft)]">
            <div className="flex items-center gap-2 text-xs font-semibold text-primary">
              <Sparkles className="h-4 w-4" /> AI Explanation
            </div>
            <p className="mt-3 text-sm leading-relaxed text-foreground">
              This application uses <span className="font-semibold">React</span> as the frontend and <span className="font-semibold">Supabase</span> as the backend. Authentication is handled through Supabase Auth and protected using <span className="font-semibold">JWT tokens</span>. Row Level Security ensures each user only reads their own rows.
            </p>
          </div>
          <div className="rounded-3xl border border-border bg-card p-5 shadow-[var(--shadow-soft)]">
            <div className="flex items-center gap-2 text-xs font-semibold text-foreground">
              <Layers className="h-4 w-4" /> Detected layers
            </div>
            <ul className="mt-3 space-y-2 text-xs text-muted-foreground">
              <li className="flex items-center justify-between"><span>Frontend</span><span className="font-medium text-foreground">React 19</span></li>
              <li className="flex items-center justify-between"><span>Router</span><span className="font-medium text-foreground">TanStack</span></li>
              <li className="flex items-center justify-between"><span>State</span><span className="font-medium text-foreground">React Query</span></li>
              <li className="flex items-center justify-between"><span>Backend</span><span className="font-medium text-foreground">Supabase</span></li>
              <li className="flex items-center justify-between"><span>Database</span><span className="font-medium text-foreground">PostgreSQL 15</span></li>
              <li className="flex items-center justify-between"><span>Auth</span><span className="font-medium text-foreground">Supabase Auth</span></li>
            </ul>
          </div>
        </aside>
      </div>
    </>
  );
}