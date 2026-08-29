import { Link } from "react-router-dom";
import { SCENARIOS } from "../data/scenarios";

export default function ScenarioList() {
  return (
    <div className="flex flex-col gap-8">
      <header>
        <p className="text-xs font-semibold uppercase tracking-wide text-amber-400">
          Fiches réglages
        </p>
        <h1 className="mt-1 text-3xl font-bold text-ink-100 sm:text-4xl">Tutos par situation</h1>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-300 sm:text-base">
          Réglages de départ, technique pas à pas, erreurs à éviter et astuces spécifiques au
          Nikon Z6III pour chaque type de photo.
        </p>
      </header>

      <div className="grid gap-4 sm:grid-cols-2">
        {SCENARIOS.map((s) => (
          <Link
            key={s.id}
            to={`/scenarios/${s.id}`}
            className="group flex flex-col gap-3 rounded-2xl border border-ink-800 bg-ink-900 p-6 transition hover:border-amber-400/50 hover:bg-ink-850"
          >
            <div className="flex items-center gap-3">
              <span className="text-3xl">{s.emoji}</span>
              <div>
                <h2 className="text-lg font-semibold text-ink-100 group-hover:text-amber-400">
                  {s.title}
                </h2>
                <p className="text-xs text-ink-400">{s.subtitle}</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-ink-400">{s.intro}</p>
            <span className="mt-1 text-xs font-semibold text-amber-400">Voir la fiche →</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
