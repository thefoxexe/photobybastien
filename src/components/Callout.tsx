import type { ReactNode } from "react";

type Variant = "tip" | "warning" | "highlight";

const STYLES: Record<Variant, string> = {
  tip: "border-signal-blue/30 bg-signal-blue/5 text-ink-300",
  warning: "border-signal-red/30 bg-signal-red/5 text-ink-300",
  highlight: "border-amber-400/30 bg-amber-400/5 text-ink-300",
};

const ICONS: Record<Variant, string> = {
  tip: "💡",
  warning: "⚠️",
  highlight: "✨",
};

export default function Callout({
  variant = "tip",
  title,
  children,
}: {
  variant?: Variant;
  title?: string;
  children: ReactNode;
}) {
  return (
    <div className={`rounded-xl border p-4 text-sm leading-relaxed ${STYLES[variant]}`}>
      {title && (
        <p className="mb-1 font-semibold text-ink-100">
          {ICONS[variant]} {title}
        </p>
      )}
      {!title && <span className="mr-1">{ICONS[variant]}</span>}
      {children}
    </div>
  );
}
