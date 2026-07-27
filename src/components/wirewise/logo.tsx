import { cn } from "@/lib/utils";

export function Logo({ className, showText = true }: { className?: string; showText?: boolean }) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div
        className="flex h-8 w-8 items-center justify-center rounded-xl text-white shadow-[var(--shadow-elegant)]"
        style={{ background: "var(--gradient-primary)" }}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 7h4l2 10h4l2-10h4" />
          <circle cx="4" cy="7" r="1.5" />
          <circle cx="20" cy="7" r="1.5" />
        </svg>
      </div>
      {showText && (
        <span className="text-[15px] font-semibold tracking-tight text-foreground">
          WireWise <span className="text-primary">AI</span>
        </span>
      )}
    </div>
  );
}