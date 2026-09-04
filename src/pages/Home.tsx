import { Link } from "react-router-dom";
import { SCENARIOS } from "../data/scenarios";

const QUICK_LINKS = [
  {
    to: "/triangle",
    icon: "🔺",
    title: "Comprendre le triangle d'exposition",
    desc: "ISO, ouverture, vitesse : à quoi ça sert et comment ça se compense, avec des visuels interactifs.",
  },
  {
    to: "/calculateur",
    icon: "🧮",
    title: "Calculateur de réglages",
    desc: "Renseigne la lumière et 2 réglages, l'appli te donne le 3e — fini les devinettes sur le terrain.",
  },
  {
    to: "/scenarios",
    icon: "📸",
    title: "Tutos par type de photo",
    desc: "Portrait, rue, rallye auto, paysage, basse lumière : réglages précis + technique, spécial Nikon Z6III.",
  },
  {
    to: "/boitier",
    icon: "🎛️",
    title: "Prise en main du Z6III",
    desc: "Où se trouve chaque bouton, et le chemin de menu exact pour chaque réglage évoqué dans les tutos.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col gap-14">
      <section className="viewfinder-corners pb-2 pl-5 pt-4 sm:pt-10">
        <p className="mb-3 inline-flex items-center gap-2 rounded-sm bg-ink-800 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-amber-400">
          Optimisé Nikon Z6III · utilisable hors ligne sur le terrain
        </p>
        <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-ink-100 sm:text-5xl">
          Sais quoi régler,{" "}
          <span className="text-amber-400">avant</span> d'appuyer sur le déclencheur.
        </h1>
        <p className="mt-4 max-w-xl text-base text-ink-300 sm:text-lg">
          Un compagnon de shooting hyper concret : le triangle d'exposition expliqué simplement,
          un calculateur qui fait le calcul à ta place, et des fiches réglages pour chaque
          situation — du portrait au rallye automobile.
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <Link
            to="/debuter"
            className="rounded-sm bg-amber-400 px-6 py-3 text-sm font-bold uppercase tracking-wide text-ink-950 transition hover:bg-amber-500"
          >
            🧭 Je débute, guide-moi →
          </Link>
          <Link
            to="/calculateur"
            className="rounded-sm border border-ink-700 px-6 py-3 text-sm font-bold uppercase tracking-wide text-ink-100 transition hover:border-ink-600 hover:bg-ink-800"
          >
            Ouvrir le calculateur
          </Link>
        </div>
      </section>

      <section className="rounded-2xl border border-amber-400/30 bg-gradient-to-br from-amber-400/10 to-transparent p-6 sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-wide text-amber-400">
          Jamais touché un appareil photo ?
        </p>
        <h2 className="mt-1 text-xl font-bold text-ink-100 sm:text-2xl">
          Le guide complet pour grand débutant
        </h2>
        <p className="mt-2 max-w-xl text-sm leading-relaxed text-ink-300">
          Sortir le boîtier de sa boîte, le tenir correctement, comprendre ce que tu vois dans le
          viseur, et prendre tes toutes premières photos en mode P — pas à pas, sans rien
          supposer que tu saches déjà.
        </p>
        <Link
          to="/debuter"
          className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-amber-400 hover:underline"
        >
          Commencer le guide de démarrage →
        </Link>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {QUICK_LINKS.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className="group flex flex-col gap-3 rounded-2xl border border-ink-800 bg-ink-900 p-5 transition hover:border-amber-400/50 hover:bg-ink-850"
          >
            <span className="text-2xl">{item.icon}</span>
            <h2 className="text-base font-semibold text-ink-100 group-hover:text-amber-400">
              {item.title}
            </h2>
            <p className="text-sm leading-relaxed text-ink-400">{item.desc}</p>
          </Link>
        ))}
      </section>

      <section>
        <div className="mb-4 flex items-end justify-between">
          <h2 className="text-xl font-semibold text-ink-100">Situations couvertes</h2>
          <Link to="/scenarios" className="text-sm font-medium text-amber-400 hover:underline">
            Tout voir
          </Link>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {SCENARIOS.map((s) => (
            <Link
              key={s.id}
              to={`/scenarios/${s.id}`}
              className="flex items-center gap-3 rounded-xl border border-ink-800 bg-ink-900 p-4 transition hover:border-amber-400/50"
            >
              <span className="text-2xl">{s.emoji}</span>
              <div>
                <p className="text-sm font-semibold text-ink-100">{s.title}</p>
                <p className="text-xs text-ink-400">{s.subtitle}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-ink-800 bg-gradient-to-br from-ink-900 to-ink-850 p-6">
        <h2 className="text-lg font-semibold text-ink-100">💡 Le principe en une phrase</h2>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-300">
          Ouverture, vitesse et ISO gèrent ensemble la lumière qui arrive sur le capteur.
          Changer l'un impose de compenser un autre — sauf si tu changes la quantité de
          lumière disponible. Le triangle et le calculateur t'aident à faire ce compromis
          rapidement, en connaissance de cause.
        </p>
      </section>
    </div>
  );
}
