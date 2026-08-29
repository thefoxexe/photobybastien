import CameraDiagram from "../components/CameraDiagram";
import MenuPathCard from "../components/MenuPathCard";
import { MENU_PATHS } from "../data/camera";

export default function CameraGuide() {
  return (
    <div className="flex flex-col gap-10">
      <header>
        <p className="text-xs font-semibold uppercase tracking-wide text-amber-400">
          Prise en main
        </p>
        <h1 className="mt-1 text-3xl font-bold text-ink-100 sm:text-4xl">Le Nikon Z6III</h1>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-300 sm:text-base">
          À quoi sert chaque bouton, et où trouver chaque réglage évoqué dans les tutos. Cette
          fiche s'appuie pour l'instant sur des repères généraux : dès que le manuel officiel est
          disponible, les libellés marqués « à vérifier » seront corrigés au mot près.
        </p>
      </header>

      <div className="rounded-xl border border-signal-blue/30 bg-signal-blue/5 p-4 text-sm leading-relaxed text-ink-300">
        📘 Cette page est conçue pour être mise à jour facilement : dépose les pages ou photos du
        manuel officiel Nikon Z6III dans la conversation (ou dans le projet) quand tu les as, et
        chaque position de bouton / chemin de menu ci-dessous sera vérifié et corrigé si besoin.
      </div>

      <section className="grid gap-8 lg:grid-cols-3">
        <div>
          <h2 className="mb-3 text-sm font-semibold text-ink-100">Vue de dessus</h2>
          <CameraDiagram zone="top" />
        </div>
        <div>
          <h2 className="mb-3 text-sm font-semibold text-ink-100">Vue arrière</h2>
          <CameraDiagram zone="back" />
        </div>
        <div>
          <h2 className="mb-3 text-sm font-semibold text-ink-100">Vue avant</h2>
          <CameraDiagram zone="front" />
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-xl font-semibold text-ink-100">
          Où régler quoi — réglages utilisés dans les tutos
        </h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {MENU_PATHS.map((entry) => (
            <MenuPathCard key={entry.id} entry={entry} />
          ))}
        </div>
      </section>
    </div>
  );
}
