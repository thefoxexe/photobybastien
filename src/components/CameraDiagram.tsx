import { useState } from "react";
import { CAMERA_CONTROLS, type CameraZone } from "../data/camera";

const ZONE_TITLES: Record<CameraZone, string> = {
  top: "Dessus",
  back: "Arrière",
  front: "Face avant",
};

// Silhouette très simplifiée du boîtier, pour chaque angle de vue.
// Sert uniquement de repère de placement pour les numéros — à remplacer par les
// vraies vues du manuel officiel une fois disponibles (voir imageSrc).
function BodyOutline({ zone }: { zone: CameraZone }) {
  const stroke = "#3d3f4d";
  const fill = "#16171e";
  if (zone === "top") {
    return (
      <svg viewBox="0 0 100 60" className="h-full w-full">
        <rect x="8" y="18" width="84" height="26" rx="6" fill={fill} stroke={stroke} />
        <path d="M38 18 Q50 4 62 18" fill={fill} stroke={stroke} />
        <circle cx="18" cy="31" r="9" fill="none" stroke={stroke} />
        <circle cx="76" cy="27" r="6" fill="none" stroke={stroke} />
      </svg>
    );
  }
  if (zone === "back") {
    return (
      <svg viewBox="0 0 100 70" className="h-full w-full">
        <rect x="10" y="10" width="80" height="54" rx="8" fill={fill} stroke={stroke} />
        <rect x="30" y="2" width="24" height="14" rx="4" fill={fill} stroke={stroke} />
        <rect x="26" y="34" width="40" height="26" rx="3" fill="none" stroke={stroke} />
        <circle cx="80" cy="24" r="4" fill="none" stroke={stroke} />
        <circle cx="80" cy="40" r="4" fill="none" stroke={stroke} />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 100 70" className="h-full w-full">
      <rect x="10" y="10" width="80" height="54" rx="8" fill={fill} stroke={stroke} />
      <circle cx="45" cy="38" r="20" fill="none" stroke={stroke} />
      <circle cx="45" cy="38" r="14" fill={fill} stroke={stroke} />
      <path d="M78 16 Q92 20 90 40 Q88 56 78 60" fill={fill} stroke={stroke} />
    </svg>
  );
}

export default function CameraDiagram({ zone }: { zone: CameraZone }) {
  const controls = CAMERA_CONTROLS.filter((c) => c.zone === zone);
  const [active, setActive] = useState<string | null>(controls[0]?.id ?? null);
  const activeControl = controls.find((c) => c.id === active);

  return (
    <div className="flex flex-col gap-4">
      <div className="relative aspect-[10/7] w-full rounded-xl border border-ink-800 bg-ink-900 p-4">
        <BodyOutline zone={zone} />
        {controls.map((c, i) => (
          <button
            key={c.id}
            onClick={() => setActive(c.id)}
            style={{ left: `${c.x}%`, top: `${c.y}%` }}
            className={[
              "absolute flex h-6 w-6 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border text-[11px] font-bold transition",
              c.id === active
                ? "border-amber-400 bg-amber-400 text-ink-950 scale-110"
                : "border-ink-600 bg-ink-800 text-ink-200 hover:border-amber-400/60",
            ].join(" ")}
            aria-label={c.label}
          >
            {i + 1}
          </button>
        ))}
        <span className="absolute left-3 top-3 rounded-full bg-ink-950/80 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-ink-400">
          {ZONE_TITLES[zone]} · schéma simplifié
        </span>
      </div>

      {activeControl && (
        <div className="rounded-xl border border-amber-400/30 bg-amber-400/5 p-4">
          <p className="text-sm font-semibold text-amber-400">
            {controls.indexOf(activeControl) + 1}. {activeControl.label}
          </p>
          <p className="mt-1 text-sm leading-relaxed text-ink-300">{activeControl.description}</p>
        </div>
      )}

      <ol className="grid gap-1.5 sm:grid-cols-2">
        {controls.map((c, i) => (
          <li key={c.id}>
            <button
              onClick={() => setActive(c.id)}
              className={[
                "flex w-full items-center gap-2 rounded-lg px-2.5 py-1.5 text-left text-xs transition",
                c.id === active ? "bg-ink-800 text-amber-400" : "text-ink-400 hover:text-ink-100",
              ].join(" ")}
            >
              <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-ink-800 text-[10px] font-bold">
                {i + 1}
              </span>
              {c.label}
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}
