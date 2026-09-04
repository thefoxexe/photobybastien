import { useMemo, useState } from "react";
import {
  APERTURE_STOPS,
  ISO_STOPS,
  SHUTTER_STOPS,
  formatAperture,
  formatIso,
  formatShutter,
} from "../lib/exposure";
import NoiseOverlay from "../components/NoiseOverlay";

function apertureExplain(i: number): string {
  if (i <= 1) return "Ouverture très grande : arrière-plan très flou, mise au point délicate (portrait serré).";
  if (i <= 3) return "Bon compromis portrait : sujet net, fond qui commence à fondre.";
  if (i <= 5) return "Profondeur de champ moyenne : plusieurs personnes nettes côte à côte.";
  if (i <= 7) return "Beaucoup de profondeur : idéal paysage ou groupe entier net.";
  return "Ouverture très fermée : tout est net, mais attention à la diffraction et au manque de lumière.";
}

function shutterExplain(i: number): string {
  if (i <= 4) return "Vitesse très lente : impossible à main levée, trépied obligatoire, filé très marqué.";
  if (i <= 9) return "Vitesse lente : flou de bougé probable à main levée, utile pour un filé volontaire.";
  if (i <= 12) return "Vitesse standard : nette à main levée pour un sujet calme.";
  if (i <= 15) return "Vitesse rapide : fige les mouvements normaux (marche, sport léger).";
  return "Vitesse très rapide : fige même une voiture de course ou un oiseau en vol.";
}

function isoExplain(i: number): string {
  if (i <= 1) return "ISO de base : qualité d'image maximale, dynamique la plus large.";
  if (i <= 3) return "Encore très propre sur un capteur récent comme celui du Z6III.";
  if (i <= 5) return "Bruit numérique visible mais tout à fait exploitable.";
  if (i <= 7) return "Bruit net à l'écran, correct pour du web ou en dépannage.";
  return "ISO extrême : à réserver aux situations où la photo nette prime sur la propreté.";
}

export default function Triangle() {
  const [apertureIdx, setApertureIdx] = useState(2); // f/2.8
  const [shutterIdx, setShutterIdx] = useState(11); // 1/60
  const [isoIdx, setIsoIdx] = useState(0); // 100

  const aperture = APERTURE_STOPS[apertureIdx];
  const shutter = SHUTTER_STOPS[shutterIdx];
  const iso = ISO_STOPS[isoIdx];

  const blurPx = useMemo(
    () => (APERTURE_STOPS.length - 1 - apertureIdx) * 2.2 + 1,
    [apertureIdx],
  );
  const streakPx = useMemo(
    () => ((SHUTTER_STOPS.length - 1 - shutterIdx) / (SHUTTER_STOPS.length - 1)) * 130,
    [shutterIdx],
  );
  const noiseOpacity = useMemo(() => (isoIdx / (ISO_STOPS.length - 1)) * 0.55, [isoIdx]);

  return (
    <div className="flex flex-col gap-10">
      <header>
        <p className="text-xs font-semibold uppercase tracking-wide text-amber-400">
          Comprendre avant de régler
        </p>
        <h1 className="mt-1 text-3xl font-bold text-ink-100 sm:text-4xl">
          Le triangle d'exposition
        </h1>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-300 sm:text-base">
          Trois réglages contrôlent la quantité de lumière qui atteint le capteur — et chacun a
          un effet secondaire sur l'image. Bouge les curseurs pour voir l'effet de chacun, en
          dehors de toute contrainte de lumière réelle (pour ça, direction le{" "}
          <span className="text-amber-400">Calculateur</span>).
        </p>
      </header>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* OUVERTURE */}
        <div className="flex flex-col gap-4 rounded-2xl border border-ink-800 bg-ink-900 p-5">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-semibold text-ink-100">Ouverture (diaphragme)</h2>
            <span className="font-readout rounded-sm bg-ink-800 px-3 py-1 text-sm font-bold text-amber-400">
              {formatAperture(aperture)}
            </span>
          </div>
          <div className="relative flex h-36 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-ink-700 to-ink-850">
            <div
              className="absolute h-10 w-10 rounded-full bg-amber-400"
              style={{ filter: `blur(${blurPx}px)`, left: "20%" }}
            />
            <div
              className="absolute h-6 w-6 rounded-full bg-signal-blue"
              style={{ filter: `blur(${blurPx}px)`, left: "62%", top: "30%" }}
            />
            <div className="relative z-10 grid h-16 w-16 place-items-center rounded-full bg-ink-950/70 text-2xl">
              🙂
            </div>
          </div>
          <input
            type="range"
            min={0}
            max={APERTURE_STOPS.length - 1}
            value={apertureIdx}
            onChange={(e) => setApertureIdx(Number(e.target.value))}
          />
          <p className="text-xs leading-relaxed text-ink-400">{apertureExplain(apertureIdx)}</p>
          <p className="text-xs text-ink-500">
            Petit chiffre f/ = grande ouverture = plus de lumière + flou d'arrière-plan (bokeh).
          </p>
        </div>

        {/* VITESSE */}
        <div className="flex flex-col gap-4 rounded-2xl border border-ink-800 bg-ink-900 p-5">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-semibold text-ink-100">Vitesse d'obturation</h2>
            <span className="font-readout rounded-sm bg-ink-800 px-3 py-1 text-sm font-bold text-amber-400">
              {formatShutter(shutter)}
            </span>
          </div>
          <div className="relative flex h-36 items-center overflow-hidden rounded-xl bg-gradient-to-br from-ink-700 to-ink-850">
            <div className="relative flex h-full w-full items-center">
              {Array.from({ length: 6 }).map((_, i) => (
                <span
                  key={i}
                  className="absolute text-2xl"
                  style={{
                    left: `${20 + i * 2}%`,
                    opacity: i === 0 ? 1 : 0.5 - i * 0.08,
                    transform: `translateX(${i * streakPx * 0.15}px)`,
                    filter: i === 0 ? "none" : `blur(${Math.min(i, 3)}px)`,
                  }}
                >
                  🏎️
                </span>
              ))}
            </div>
          </div>
          <input
            type="range"
            min={0}
            max={SHUTTER_STOPS.length - 1}
            value={shutterIdx}
            onChange={(e) => setShutterIdx(Number(e.target.value))}
          />
          <p className="text-xs leading-relaxed text-ink-400">{shutterExplain(shutterIdx)}</p>
          <p className="text-xs text-ink-500">
            Vitesse lente = plus de lumière + flou de mouvement. Vitesse rapide = moins de
            lumière + net sur un sujet qui bouge.
          </p>
        </div>

        {/* ISO */}
        <div className="flex flex-col gap-4 rounded-2xl border border-ink-800 bg-ink-900 p-5">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-semibold text-ink-100">ISO (sensibilité)</h2>
            <span className="font-readout rounded-sm bg-ink-800 px-3 py-1 text-sm font-bold text-amber-400">
              {formatIso(iso)}
            </span>
          </div>
          <div className="relative h-36 overflow-hidden rounded-xl bg-gradient-to-br from-ink-700 to-ink-850">
            <NoiseOverlay opacity={noiseOpacity} />
            <div className="absolute inset-0 grid place-items-center text-2xl">🌆</div>
          </div>
          <input
            type="range"
            min={0}
            max={ISO_STOPS.length - 1}
            value={isoIdx}
            onChange={(e) => setIsoIdx(Number(e.target.value))}
          />
          <p className="text-xs leading-relaxed text-ink-400">{isoExplain(isoIdx)}</p>
          <p className="text-xs text-ink-500">
            ISO haut = image plus lumineuse sans changer ouverture/vitesse, au prix du bruit
            numérique (grain).
          </p>
        </div>
      </div>

      <section className="rounded-2xl border border-ink-800 bg-ink-900 p-6">
        <h2 className="text-lg font-semibold text-ink-100">La règle à retenir</h2>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-300">
          Si tu changes un réglage d'un "cran" (un stop), l'exposition change du double ou de la
          moitié. Pour garder la même luminosité, il faut compenser d'un cran équivalent sur un
          des deux autres réglages. Exemple : tu fermes l'ouverture d'un cran (f/2.8 → f/4, deux
          fois moins de lumière) → tu dois soit ralentir la vitesse d'un cran, soit doubler
          l'ISO, pour retrouver la même exposition.
        </p>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-300">
          Tu n'as pas besoin de faire ce calcul de tête sur le terrain :{" "}
          <a href="/calculateur" className="font-semibold text-amber-400 hover:underline">
            le calculateur
          </a>{" "}
          le fait pour toi à partir de la lumière ambiante.
        </p>
      </section>
    </div>
  );
}
