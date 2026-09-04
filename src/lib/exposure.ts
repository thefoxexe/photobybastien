// Échelles standard par valeurs entières (1 stop = 1 IL = un doublement/une division par deux de lumière)
export const APERTURE_STOPS = [1.4, 2, 2.8, 4, 5.6, 8, 11, 16, 22, 32] as const;

export const ISO_STOPS = [
  100, 200, 400, 800, 1600, 3200, 6400, 12800, 25600, 51200,
] as const;

// Vitesses en secondes (valeurs "réelles", ex. 1/125 = 0.008)
export const SHUTTER_STOPS = [
  30, 15, 8, 4, 2, 1, 1 / 2, 1 / 4, 1 / 8, 1 / 15, 1 / 30, 1 / 60, 1 / 125,
  1 / 250, 1 / 500, 1 / 1000, 1 / 2000, 1 / 4000, 1 / 8000,
] as const;

export function formatShutter(t: number): string {
  if (t >= 1) return `${t}s`;
  const denom = Math.round(1 / t);
  return `1/${denom}s`;
}

export function formatAperture(n: number): string {
  return `f/${n}`;
}

export function formatIso(iso: number): string {
  return `ISO ${iso}`;
}

// Table des valeurs de lumière (Light Value, base ISO 100) — dérivée de la règle "Sunny 16"
// et des tables d'exposition standard. Sert de point de départ, pas de vérité absolue :
// la lumière réelle varie selon la saison, l'heure et la météo précise.
export interface LightCondition {
  id: string;
  label: string;
  emoji: string;
  description: string;
  ev100: number;
}

export const LIGHT_CONDITIONS: LightCondition[] = [
  {
    id: "sun-snow",
    label: "Plein soleil sur neige/sable/mer",
    emoji: "🏖️",
    description: "Surface très réfléchissante, lumière la plus dure de toutes.",
    ev100: 17,
  },
  {
    id: "full-sun",
    label: "Plein soleil, ombres nettes",
    emoji: "☀️",
    description: "La fameuse règle \"Sunny 16\" : f/16 à 1/ISO en plein midi.",
    ev100: 15,
  },
  {
    id: "hazy-sun",
    label: "Soleil voilé, ombres douces",
    emoji: "🌤️",
    description: "Quelques nuages fins, le soleil reste visible.",
    ev100: 14,
  },
  {
    id: "overcast",
    label: "Ciel couvert / nuageux",
    emoji: "☁️",
    description: "Ombres à peine visibles, lumière diffuse.",
    ev100: 13,
  },
  {
    id: "open-shade",
    label: "Ombre extérieure / golden hour",
    emoji: "🌇",
    description: "Sujet à l'ombre en plein jour, ou lumière rasante du soir.",
    ev100: 12,
  },
  {
    id: "heavy-overcast",
    label: "Ciel très gris / juste avant la pluie",
    emoji: "🌥️",
    description: "Journée sombre, lumière plate.",
    ev100: 11,
  },
  {
    id: "bright-indoor",
    label: "Intérieur très lumineux / vitrine",
    emoji: "🏬",
    description: "Grandes baies vitrées, lumière du jour abondante.",
    ev100: 9,
  },
  {
    id: "indoor",
    label: "Intérieur normal (salon, salle éclairée)",
    emoji: "💡",
    description: "Éclairage artificiel standard, soirée entre amis.",
    ev100: 7,
  },
  {
    id: "indoor-dim",
    label: "Intérieur tamisé / bar / concert",
    emoji: "🕯️",
    description: "Ambiance, peu de lumière artificielle.",
    ev100: 5,
  },
  {
    id: "night-lit",
    label: "Rue de nuit éclairée / ville",
    emoji: "🌃",
    description: "Lampadaires, néons, façades éclairées.",
    ev100: 3,
  },
  {
    id: "night-dark",
    label: "Nuit noire / campagne, ciel étoilé",
    emoji: "🌌",
    description: "Quasiment aucune lumière ambiante.",
    ev100: 0,
  },
];

export function getLightCondition(id: string): LightCondition {
  const found = LIGHT_CONDITIONS.find((c) => c.id === id);
  if (!found) throw new Error(`Unknown light condition: ${id}`);
  return found;
}

function log2(x: number): number {
  return Math.log(x) / Math.log(2);
}

function nearestStop(value: number, stops: readonly number[]): number {
  return stops.reduce((best, s) =>
    Math.abs(Math.log(s) - Math.log(value)) < Math.abs(Math.log(best) - Math.log(value))
      ? s
      : best,
  );
}

export interface SolveResult<T> {
  value: T;
  clamped: boolean;
  raw: number;
}

// EV à ISO100 requis pour une combinaison ouverture/vitesse donnée
function requiredEv100(aperture: number, shutter: number): number {
  return log2((aperture * aperture) / shutter);
}

// Résout l'ISO nécessaire pour une ouverture + vitesse données, sous une lumière donnée.
export function solveIso(
  aperture: number,
  shutter: number,
  ev100: number,
): SolveResult<number> {
  const needed = requiredEv100(aperture, shutter);
  const rawIso = 100 * Math.pow(2, needed - ev100);
  const clampedRaw = Math.min(Math.max(rawIso, ISO_STOPS[0]), ISO_STOPS[ISO_STOPS.length - 1]);
  return {
    value: nearestStop(clampedRaw, ISO_STOPS),
    clamped: rawIso < ISO_STOPS[0] || rawIso > ISO_STOPS[ISO_STOPS.length - 1],
    raw: rawIso,
  };
}

// Résout la vitesse nécessaire pour une ouverture + ISO donnés, sous une lumière donnée.
export function solveShutter(
  aperture: number,
  iso: number,
  ev100: number,
): SolveResult<number> {
  const evAtIso = ev100 + log2(iso / 100);
  const rawShutter = (aperture * aperture) / Math.pow(2, evAtIso);
  const min = SHUTTER_STOPS[SHUTTER_STOPS.length - 1];
  const max = SHUTTER_STOPS[0];
  const clampedRaw = Math.min(Math.max(rawShutter, min), max);
  return {
    value: nearestStop(clampedRaw, SHUTTER_STOPS as unknown as number[]),
    clamped: rawShutter < min || rawShutter > max,
    raw: rawShutter,
  };
}

// Résout l'ouverture nécessaire pour une vitesse + ISO donnés, sous une lumière donnée.
export function solveAperture(
  shutter: number,
  iso: number,
  ev100: number,
): SolveResult<number> {
  const evAtIso = ev100 + log2(iso / 100);
  const rawAperture = Math.sqrt(shutter * Math.pow(2, evAtIso));
  const min = APERTURE_STOPS[0];
  const max = APERTURE_STOPS[APERTURE_STOPS.length - 1];
  const clampedRaw = Math.min(Math.max(rawAperture, min), max);
  return {
    value: nearestStop(clampedRaw, APERTURE_STOPS),
    clamped: rawAperture < min || rawAperture > max,
    raw: rawAperture,
  };
}

// Vitesse minimale conseillée à main levée (règle du "1/focale", avec marge grâce à la
// stabilisation 5 axes du Z6III qui gagne ~4-6 stops selon l'objectif).
export function minHandheldShutter(focalLengthMm: number, stabilized: boolean): number {
  const base = 1 / focalLengthMm;
  const withStops = stabilized ? base / 8 : base;
  return nearestStop(Math.min(Math.max(withStops, SHUTTER_STOPS[SHUTTER_STOPS.length - 1]), SHUTTER_STOPS[0]), SHUTTER_STOPS as unknown as number[]);
}
