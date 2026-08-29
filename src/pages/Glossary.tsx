import { useMemo, useState } from "react";
import { GLOSSARY } from "../data/glossary";

export default function Glossary() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return GLOSSARY;
    return GLOSSARY.filter(
      (g) => g.term.toLowerCase().includes(q) || g.def.toLowerCase().includes(q),
    );
  }, [query]);

  return (
    <div className="flex flex-col gap-8">
      <header>
        <p className="text-xs font-semibold uppercase tracking-wide text-amber-400">
          Référence rapide
        </p>
        <h1 className="mt-1 text-3xl font-bold text-ink-100 sm:text-4xl">Glossaire photo</h1>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-300 sm:text-base">
          Un doute sur un terme en pleine séance ? Cherche-le ici.
        </p>
      </header>

      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Chercher un terme (ex : ISO, filé, hyperfocale...)"
        className="w-full rounded-xl border border-ink-800 bg-ink-900 px-4 py-3 text-sm text-ink-100 placeholder:text-ink-500 focus:border-amber-400 focus:outline-none"
      />

      <div className="grid gap-3 sm:grid-cols-2">
        {filtered.map((g) => (
          <div key={g.term} className="rounded-xl border border-ink-800 bg-ink-900 p-4">
            <h2 className="text-sm font-semibold text-amber-400">{g.term}</h2>
            <p className="mt-1 text-sm leading-relaxed text-ink-300">{g.def}</p>
          </div>
        ))}
        {filtered.length === 0 && (
          <p className="text-sm text-ink-400">Aucun terme ne correspond à « {query} ».</p>
        )}
      </div>
    </div>
  );
}
