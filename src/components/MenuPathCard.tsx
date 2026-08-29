import type { MenuPathEntry } from "../data/camera";

export default function MenuPathCard({ entry }: { entry: MenuPathEntry }) {
  return (
    <div className="rounded-xl border border-ink-800 bg-ink-900 p-4">
      <div className="flex items-start justify-between gap-2">
        <h3 className="text-sm font-semibold text-ink-100">{entry.settingLabel}</h3>
        {!entry.verified && (
          <span
            title="Libellé indicatif, à confirmer avec le manuel officiel"
            className="shrink-0 rounded-full bg-ink-800 px-2 py-0.5 text-[10px] font-medium text-ink-500"
          >
            à vérifier
          </span>
        )}
      </div>
      <div className="mt-2 flex flex-wrap items-center gap-1.5">
        {entry.path.map((step, i) => (
          <span key={i} className="flex items-center gap-1.5">
            <span className="rounded-md bg-ink-800 px-2 py-1 text-xs text-ink-200">{step}</span>
            {i < entry.path.length - 1 && <span className="text-ink-600">›</span>}
          </span>
        ))}
      </div>
      {entry.tip && <p className="mt-2 text-xs leading-relaxed text-ink-400">💡 {entry.tip}</p>}
    </div>
  );
}
