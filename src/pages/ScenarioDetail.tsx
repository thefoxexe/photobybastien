import { Link, Navigate, useParams } from "react-router-dom";
import { getScenario } from "../data/scenarios";

export default function ScenarioDetail() {
  const { id = "" } = useParams();
  const scenario = getScenario(id);

  if (!scenario) return <Navigate to="/scenarios" replace />;

  const calculatorLink = scenario.calculatorPreset
    ? `/calculateur?scenario=${scenario.id}`
    : "/calculateur";

  return (
    <div className="flex flex-col gap-8">
      <Link to="/scenarios" className="text-sm font-medium text-ink-400 hover:text-amber-400">
        ← Tous les tutos
      </Link>

      <header>
        <div className="flex items-center gap-3">
          <span className="text-4xl">{scenario.emoji}</span>
          <div>
            <h1 className="text-2xl font-bold text-ink-100 sm:text-3xl">{scenario.title}</h1>
            <p className="text-sm text-ink-400">{scenario.subtitle}</p>
          </div>
        </div>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ink-300 sm:text-base">
          {scenario.intro}
        </p>
        <Link
          to={calculatorLink}
          className="mt-4 inline-flex items-center gap-2 rounded-full bg-amber-400 px-5 py-2.5 text-sm font-semibold text-ink-950 hover:bg-amber-500"
        >
          🧮 Ouvrir avec ces réglages préremplis
        </Link>
      </header>

      <section className="rounded-2xl border border-ink-800 bg-ink-900 p-5">
        <h2 className="text-sm font-semibold text-amber-400">Mode conseillé</h2>
        <p className="mt-1 text-base font-medium text-ink-100">{scenario.mode}</p>
      </section>

      <section className="grid gap-4 sm:grid-cols-3">
        {scenario.settings.map((s) => (
          <div key={s.label} className="rounded-2xl border border-ink-800 bg-ink-900 p-5">
            <h3 className="text-xs font-semibold uppercase tracking-wide text-ink-400">
              {s.label}
            </h3>
            <p className="mt-1 text-lg font-bold text-ink-100">{s.value}</p>
            <p className="mt-2 text-xs leading-relaxed text-ink-400">{s.why}</p>
          </div>
        ))}
      </section>

      <section className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border border-ink-800 bg-ink-900 p-5">
          <h3 className="text-sm font-semibold text-ink-100">🎯 Mise au point</h3>
          <p className="mt-2 text-sm leading-relaxed text-ink-400">{scenario.focus}</p>
        </div>
        <div className="rounded-2xl border border-ink-800 bg-ink-900 p-5">
          <h3 className="text-sm font-semibold text-ink-100">🎞️ Mode rafale</h3>
          <p className="mt-2 text-sm leading-relaxed text-ink-400">{scenario.drive}</p>
        </div>
      </section>

      <section className="rounded-2xl border border-ink-800 bg-ink-900 p-6">
        <h2 className="text-base font-semibold text-ink-100">Étapes sur le terrain</h2>
        <ol className="mt-4 flex flex-col gap-3">
          {scenario.steps.map((step, i) => (
            <li key={i} className="flex gap-3 text-sm leading-relaxed text-ink-300">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-400 text-xs font-bold text-ink-950">
                {i + 1}
              </span>
              {step}
            </li>
          ))}
        </ol>
      </section>

      <section className="rounded-2xl border border-signal-red/30 bg-signal-red/5 p-6">
        <h2 className="text-base font-semibold text-signal-red">Erreurs fréquentes</h2>
        <ul className="mt-4 flex flex-col gap-2">
          {scenario.mistakes.map((m, i) => (
            <li key={i} className="flex gap-2 text-sm leading-relaxed text-ink-300">
              <span aria-hidden>✗</span>
              {m}
            </li>
          ))}
        </ul>
      </section>

      <section className="rounded-2xl border border-signal-blue/30 bg-signal-blue/5 p-6">
        <h2 className="text-base font-semibold text-signal-blue">Astuces Nikon Z6III</h2>
        <ul className="mt-4 flex flex-col gap-2">
          {scenario.z6iii.map((tip, i) => (
            <li key={i} className="flex gap-2 text-sm leading-relaxed text-ink-300">
              <span aria-hidden>⚡</span>
              {tip}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
