import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import {
  APERTURE_STOPS,
  ISO_STOPS,
  SHUTTER_STOPS,
  LIGHT_CONDITIONS,
  formatAperture,
  formatIso,
  formatShutter,
  getLightCondition,
  solveAperture,
  solveIso,
  solveShutter,
} from "../lib/exposure";
import { SCENARIOS } from "../data/scenarios";

type SolveFor = "iso" | "shutter" | "aperture";

function closestIdx(stops: readonly number[], value: number): number {
  let best = 0;
  let bestDiff = Infinity;
  stops.forEach((s, i) => {
    const diff = Math.abs(Math.log(s) - Math.log(value));
    if (diff < bestDiff) {
      bestDiff = diff;
      best = i;
    }
  });
  return best;
}

export default function Calculator() {
  const [params] = useSearchParams();
  const [lightId, setLightId] = useState(() => params.get("light") ?? "hazy-sun");
  const [solveFor, setSolveFor] = useState<SolveFor>("iso");
  const [apertureIdx, setApertureIdx] = useState(() =>
    closestIdx(APERTURE_STOPS, Number(params.get("aperture")) || 5.6),
  );
  const [shutterIdx, setShutterIdx] = useState(() =>
    closestIdx(SHUTTER_STOPS as unknown as number[], Number(params.get("shutter")) || 1 / 1000),
  );
  const [isoIdx, setIsoIdx] = useState(() =>
    closestIdx(ISO_STOPS, Number(params.get("iso")) || 400),
  );

  useEffect(() => {
    const preset = params.get("scenario");
    if (preset) {
      const scenario = SCENARIOS.find((s) => s.id === preset);
      if (scenario?.calculatorPreset) {
        const p = scenario.calculatorPreset;
        setLightId(p.lightId);
        setApertureIdx(closestIdx(APERTURE_STOPS, p.aperture));
        setShutterIdx(closestIdx(SHUTTER_STOPS as unknown as number[], p.shutter));
        if (p.iso) setIsoIdx(closestIdx(ISO_STOPS, p.iso));
        setSolveFor(p.solveFor ?? "iso");
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const light = getLightCondition(lightId);
  const aperture = APERTURE_STOPS[apertureIdx];
  const shutter = SHUTTER_STOPS[shutterIdx];
  const iso = ISO_STOPS[isoIdx];

  const result = useMemo(() => {
    if (solveFor === "iso") return solveIso(aperture, shutter, light.ev100);
    if (solveFor === "shutter") return solveShutter(aperture, iso, light.ev100);
    return solveAperture(shutter, iso, light.ev100);
  }, [solveFor, aperture, shutter, iso, light.ev100]);

  const warning = useMemo(() => {
    if (!result.clamped) return null;
    if (solveFor === "iso" && result.raw > ISO_STOPS[ISO_STOPS.length - 1]) {
      return "Pas assez de lumière pour ces réglages : ouvre l'objectif, ralentis la vitesse, ou accepte du bruit à l'ISO max.";
    }
    if (solveFor === "iso" && result.raw < ISO_STOPS[0]) {
      return "Trop de lumière : ferme l'ouverture, accélère la vitesse, ou ajoute un filtre ND.";
    }
    if (solveFor === "shutter" && result.raw > SHUTTER_STOPS[0]) {
      return "Il faudrait une pose plus longue que 30s : utilise le mode Bulb sur trépied, ou monte l'ISO.";
    }
    if (solveFor === "shutter" && result.raw < SHUTTER_STOPS[SHUTTER_STOPS.length - 1]) {
      return "Vitesse plus rapide que 1/8000s nécessaire : ferme l'ouverture ou baisse l'ISO.";
    }
    if (solveFor === "aperture" && result.raw > APERTURE_STOPS[APERTURE_STOPS.length - 1]) {
      return "Il faudrait fermer au-delà de f/32 : ralentis la vitesse ou baisse l'ISO.";
    }
    return "Il faudrait ouvrir au-delà de f/1.4 : ton objectif ne le permet peut-être pas — ralentis la vitesse ou monte l'ISO.";
  }, [result, solveFor]);

  return (
    <div className="flex flex-col gap-8">
      <header>
        <p className="text-xs font-semibold uppercase tracking-wide text-amber-400">
          Fais le calcul, pas les devinettes
        </p>
        <h1 className="mt-1 text-3xl font-bold text-ink-100 sm:text-4xl">
          Calculateur de réglages
        </h1>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-300 sm:text-base">
          Choisis la lumière ambiante, règle deux paramètres, l'appli calcule le troisième pour
          une exposition correcte.
        </p>
      </header>

      {/* Lumière */}
      <section className="rounded-2xl border border-ink-800 bg-ink-900 p-5">
        <h2 className="mb-3 text-sm font-semibold text-ink-100">1. Quelle lumière ?</h2>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
          {LIGHT_CONDITIONS.map((c) => (
            <button
              key={c.id}
              onClick={() => setLightId(c.id)}
              className={[
                "flex flex-col items-start gap-1 rounded-xl border p-3 text-left transition",
                c.id === lightId
                  ? "border-amber-400 bg-amber-400/10"
                  : "border-ink-800 bg-ink-850 hover:border-ink-600",
              ].join(" ")}
            >
              <span className="text-lg">{c.emoji}</span>
              <span className="text-xs font-semibold text-ink-100">{c.label}</span>
            </button>
          ))}
        </div>
        <p className="mt-3 text-xs text-ink-500">{light.description}</p>
      </section>

      {/* Que calculer */}
      <section className="rounded-2xl border border-ink-800 bg-ink-900 p-5">
        <h2 className="mb-3 text-sm font-semibold text-ink-100">2. Que veux-tu que je calcule ?</h2>
        <div className="flex flex-wrap gap-2">
          {(
            [
              { id: "iso", label: "L'ISO" },
              { id: "shutter", label: "La vitesse" },
              { id: "aperture", label: "L'ouverture" },
            ] as const
          ).map((opt) => (
            <button
              key={opt.id}
              onClick={() => setSolveFor(opt.id)}
              className={[
                "rounded-full px-4 py-2 text-sm font-medium transition",
                solveFor === opt.id
                  ? "bg-amber-400 text-ink-950"
                  : "bg-ink-800 text-ink-300 hover:text-ink-100",
              ].join(" ")}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </section>

      {/* Réglages connus + résultat */}
      <section className="grid gap-4 lg:grid-cols-3">
        <SliderCard
          title="Ouverture"
          value={formatAperture(aperture)}
          disabled={solveFor === "aperture"}
          resultBadge={solveFor === "aperture"}
          min={0}
          max={APERTURE_STOPS.length - 1}
          index={apertureIdx}
          onChange={setApertureIdx}
          resultValue={solveFor === "aperture" ? formatAperture(result.value as number) : undefined}
        />
        <SliderCard
          title="Vitesse"
          value={formatShutter(shutter)}
          disabled={solveFor === "shutter"}
          resultBadge={solveFor === "shutter"}
          min={0}
          max={SHUTTER_STOPS.length - 1}
          index={shutterIdx}
          onChange={setShutterIdx}
          resultValue={solveFor === "shutter" ? formatShutter(result.value as number) : undefined}
        />
        <SliderCard
          title="ISO"
          value={formatIso(iso)}
          disabled={solveFor === "iso"}
          resultBadge={solveFor === "iso"}
          min={0}
          max={ISO_STOPS.length - 1}
          index={isoIdx}
          onChange={setIsoIdx}
          resultValue={solveFor === "iso" ? formatIso(result.value as number) : undefined}
        />
      </section>

      {warning && (
        <div className="rounded-xl border border-signal-red/40 bg-signal-red/10 p-4 text-sm text-signal-red">
          ⚠️ {warning}
        </div>
      )}

      <section className="rounded-2xl border border-amber-400/30 bg-amber-400/5 p-6">
        <h2 className="text-base font-semibold text-ink-100">Réglage recommandé</h2>
        <p className="mt-2 text-2xl font-bold text-amber-400">
          {formatAperture(solveFor === "aperture" ? (result.value as number) : aperture)} ·{" "}
          {formatShutter(solveFor === "shutter" ? (result.value as number) : shutter)} ·{" "}
          {formatIso(solveFor === "iso" ? (result.value as number) : iso)}
        </p>
        <p className="mt-2 text-sm text-ink-300">
          Pour « {light.label.toLowerCase()} », en mode Manuel sur le Z6III (ou Priorité
          {solveFor === "shutter" ? " ouverture" : solveFor === "aperture" ? " vitesse" : " manuel + Auto ISO"}
          ) avec ces valeurs, l'exposition est équilibrée.
        </p>
      </section>

      <p className="text-xs text-ink-500">
        Ces valeurs sont un point de départ fiable à ±1 stop : vérifie toujours l'histogramme sur
        l'écran et ajuste avec la correction d'exposition selon la scène réelle (sujet clair,
        contre-jour, etc.).
      </p>
    </div>
  );
}

function SliderCard({
  title,
  value,
  disabled,
  resultBadge,
  min,
  max,
  index,
  onChange,
  resultValue,
}: {
  title: string;
  value: string;
  disabled: boolean;
  resultBadge: boolean;
  min: number;
  max: number;
  index: number;
  onChange: (v: number) => void;
  resultValue?: string;
}) {
  return (
    <div
      className={[
        "flex flex-col gap-3 rounded-2xl border p-5",
        resultBadge ? "border-amber-400 bg-amber-400/5" : "border-ink-800 bg-ink-900",
      ].join(" ")}
    >
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-ink-100">{title}</h3>
        {resultBadge && (
          <span className="rounded-full bg-amber-400 px-2 py-0.5 text-[10px] font-bold uppercase text-ink-950">
            Calculé
          </span>
        )}
      </div>
      <p className="text-2xl font-bold text-ink-100">{resultBadge ? resultValue : value}</p>
      <input
        type="range"
        min={min}
        max={max}
        value={index}
        disabled={disabled}
        onChange={(e) => onChange(Number(e.target.value))}
        className={disabled ? "opacity-30" : ""}
      />
    </div>
  );
}
