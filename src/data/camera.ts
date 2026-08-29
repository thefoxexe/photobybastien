// Contenu "prise en main" du Nikon Z6III.
//
// IMPORTANT — statut du contenu : ces fiches sont rédigées à partir de connaissances
// générales publiques sur le Z6III, PAS encore vérifiées ligne à ligne contre le manuel
// d'utilisation officiel Nikon. Chaque entrée porte un champ `verified` : tant qu'il vaut
// `false`, considère le libellé exact du menu ou la position du bouton comme indicatif,
// à corriger une fois le manuel PDF/les photos officielles disponibles. Le but de cette
// structure est justement de rendre cette correction triviale (un seul fichier, un champ
// par info) sans toucher aux composants.

export type CameraZone = "top" | "back" | "front";

export interface CameraControl {
  id: string;
  label: string;
  zone: CameraZone;
  /** position en % sur le schéma de la zone, pour placer le repère numéroté */
  x: number;
  y: number;
  description: string;
  verified: boolean;
}

export const CAMERA_CONTROLS: CameraControl[] = [
  // --- Dessus ---
  {
    id: "mode-dial",
    label: "Sélecteur de mode",
    zone: "top",
    x: 18,
    y: 35,
    description:
      "Molette côté gauche avec bouton de verrouillage central : bascule entre P (Programme), S (Priorité vitesse), A (Priorité ouverture), M (Manuel) et les modes personnalisés (U1/U2/U3) qui rappellent un jeu complet de réglages sauvegardé.",
    verified: false,
  },
  {
    id: "power-shutter",
    label: "Interrupteur + déclencheur",
    zone: "top",
    x: 78,
    y: 42,
    description:
      "Bague autour du déclencheur : allume/éteint le boîtier. Appui à mi-course sur le déclencheur pour activer la mesure/mise au point, appui complet pour photographier.",
    verified: false,
  },
  {
    id: "iso-button",
    label: "Touche ISO",
    zone: "top",
    x: 70,
    y: 30,
    description:
      "Maintiens cette touche enfoncée et tourne la molette principale (arrière) pour changer l'ISO à la volée, sans passer par le menu — pratique quand la lumière change vite.",
    verified: false,
  },
  {
    id: "ev-button",
    label: "Touche correction d'exposition (+/-)",
    zone: "top",
    x: 82,
    y: 30,
    description:
      "Maintiens et tourne la molette pour éclaircir ou assombrir l'image par rapport à la mesure automatique du boîtier — utile en P/S/A quand la scène trompe la cellule (contre-jour, neige...).",
    verified: false,
  },
  {
    id: "rec-button",
    label: "Déclencheur vidéo",
    zone: "top",
    x: 88,
    y: 40,
    description: "Bouton rouge dédié : démarre/arrête l'enregistrement vidéo, même en mode photo.",
    verified: false,
  },
  {
    id: "front-dial",
    label: "Molette secondaire (avant, sous le déclencheur)",
    zone: "front",
    x: 62,
    y: 55,
    description:
      "En mode A (priorité ouverture) et M (manuel), c'est elle qui règle l'ouverture du diaphragme.",
    verified: false,
  },
  {
    id: "rear-dial",
    label: "Molette principale (arrière-haut)",
    zone: "back",
    x: 85,
    y: 15,
    description:
      "En mode S (priorité vitesse) et M (manuel), c'est elle qui règle la vitesse d'obturation.",
    verified: false,
  },

  // --- Arrière ---
  {
    id: "viewfinder",
    label: "Viseur électronique (EVF)",
    zone: "back",
    x: 45,
    y: 8,
    description:
      "Viseur haute résolution avec molette de réglage dioptrique juste à côté : ajuste-la à ta vue pour un piqué net sans lunettes si besoin.",
    verified: false,
  },
  {
    id: "screen",
    label: "Écran tactile inclinable",
    zone: "back",
    x: 45,
    y: 55,
    description:
      "Écran orientable sur plusieurs axes (particularité du Z6III face à un écran fixe) : pratique pour cadrer bas (photo de rue) ou haut au-dessus de la foule, en gardant l'écran dans l'axe optique.",
    verified: false,
  },
  {
    id: "af-on",
    label: "Touche AF-ON",
    zone: "back",
    x: 78,
    y: 25,
    description:
      "Déclenche la mise au point indépendamment du déclencheur (\"back-button focus\") : très utilisé en suivi de sujet (rallye, sport) pour garder la MAP active sans se soucier du déclenchement.",
    verified: false,
  },
  {
    id: "joystick",
    label: "Sélecteur secondaire (joystick)",
    zone: "back",
    x: 78,
    y: 40,
    description:
      "Petit stick sous le pouce : déplace le collimateur AF directement dans n'importe quelle direction sans lâcher l'œilleton, bien plus rapide que la croix multidirectionnelle.",
    verified: false,
  },
  {
    id: "multi-selector",
    label: "Sélecteur multidirectionnel",
    zone: "back",
    x: 78,
    y: 62,
    description: "Croix de navigation dans les menus et l'affichage des images.",
    verified: false,
  },
  {
    id: "i-button",
    label: "Touche i",
    zone: "back",
    x: 60,
    y: 70,
    description:
      "Ouvre un menu rapide personnalisable (grille d'icônes) avec les réglages que tu utilises le plus — évite de fouiller dans les menus complets en plein shooting.",
    verified: false,
  },
  {
    id: "menu-button",
    label: "Touche MENU",
    zone: "back",
    x: 15,
    y: 20,
    description: "Ouvre le menu complet du boîtier, organisé par onglets (Lecture, Prise de vue photo, Prise de vue vidéo, Personnalisation, Configuration...).",
    verified: false,
  },
  {
    id: "playback-button",
    label: "Touche lecture",
    zone: "back",
    x: 15,
    y: 45,
    description: "Affiche les photos/vidéos déjà prises.",
    verified: false,
  },

  // --- Avant ---
  {
    id: "focus-mode-button",
    label: "Sélecteur AF/MF + touche mode AF",
    zone: "front",
    x: 30,
    y: 60,
    description:
      "Bouton près de la monture : appui + rotation d'une molette pour basculer entre AF-S (ponctuel), AF-C (continu) et MF (manuel), et choisir le mode de zone AF (point unique, zone large, suivi de sujet...).",
    verified: false,
  },
  {
    id: "fn1-button",
    label: "Touche Fn1",
    zone: "front",
    x: 22,
    y: 45,
    description:
      "Touche personnalisable près de la monture — beaucoup de photographes y assignent l'activation de la détection de sujet ou un rappel de mise au point.",
    verified: false,
  },
];

export interface MenuPathEntry {
  id: string;
  settingLabel: string;
  /** fil d'ariane simplifié dans les menus du boîtier */
  path: string[];
  /** commande physique associée, le cas échéant (id d'un CameraControl) */
  controlId?: string;
  tip?: string;
  verified: boolean;
}

export const MENU_PATHS: MenuPathEntry[] = [
  {
    id: "iso",
    settingLabel: "Régler l'ISO",
    path: ["Touche ISO (dessus) + molette principale"],
    controlId: "iso-button",
    tip: "Accès direct sans passer par le menu, y compris en Manuel.",
    verified: false,
  },
  {
    id: "auto-iso",
    settingLabel: "Activer l'Auto ISO avec plafond",
    path: [
      "MENU",
      "Prise de vue photo (icône appareil)",
      "Sensibilité ISO",
      "Contrôle auto ISO → Marche",
      "Valeur ISO max. (ex. 6400)",
      "Vitesse d'obturation mini (ex. 1/250s ou Auto)",
    ],
    tip: "La \"vitesse minimale auto\" adapte le plancher à la focale utilisée — pratique en zoom variable.",
    verified: false,
  },
  {
    id: "aperture",
    settingLabel: "Régler l'ouverture",
    path: ["Molette secondaire (avant), en mode A ou M"],
    controlId: "front-dial",
    verified: false,
  },
  {
    id: "shutter",
    settingLabel: "Régler la vitesse",
    path: ["Molette principale (arrière), en mode S ou M"],
    controlId: "rear-dial",
    verified: false,
  },
  {
    id: "af-mode",
    settingLabel: "Passer en AF-C (suivi continu)",
    path: ["Touche mode AF (avant, près de la monture) + molette"],
    controlId: "focus-mode-button",
    tip: "Certains préfèrent l'assigner aussi à une touche i pour un accès encore plus rapide.",
    verified: false,
  },
  {
    id: "subject-detection",
    settingLabel: "Activer la détection de sujet (yeux, animaux, véhicules)",
    path: ["MENU", "Mise au point (icône AF)", "Détection de sujet", "Choisir : Personnes / Animaux / Véhicules / Avion / Auto"],
    tip: "Le mode \"Auto\" laisse le boîtier deviner le type de sujet ; un mode dédié est plus fiable si tu sais à l'avance ce que tu photographies.",
    verified: false,
  },
  {
    id: "back-button-focus",
    settingLabel: "Activer la mise au point par le pouce (back-button focus)",
    path: ["Touche AF-ON (dos)"],
    controlId: "af-on",
    tip: "Dissocie mise au point et déclenchement : utile pour verrouiller la MAP puis recadrer, ou pour suivre un sujet sans redéclencher l'AF à chaque appui.",
    verified: false,
  },
  {
    id: "drive-mode",
    settingLabel: "Choisir le mode rafale",
    path: ["Touche i ou MENU", "Prise de vue photo", "Mode de déclenchement / rafale"],
    controlId: "i-button",
    tip: "Position exacte à confirmer selon la version de menu — vérifier si le Z6III reprend le sélecteur concentrique au sélecteur de mode (comme sur les Z8/Z9) ou l'accès par menu classique.",
    verified: false,
  },
  {
    id: "pre-release-capture",
    settingLabel: "Activer le déclenchement anticipé (Pre-Release Capture)",
    path: ["MENU", "Prise de vue photo", "Déclenchement anticipé", "Marche + durée de préenregistrement"],
    tip: "Le boîtier garde en mémoire tampon les images prises juste avant l'appui complet — précieux pour ne pas rater l'instant clé en rallye/sport.",
    verified: false,
  },
  {
    id: "exposure-compensation",
    settingLabel: "Corriger l'exposition (+/-)",
    path: ["Touche +/- (dessus) + molette principale"],
    controlId: "ev-button",
    verified: false,
  },
  {
    id: "focus-shift",
    settingLabel: "Empilement de mise au point (focus shift)",
    path: ["MENU", "Prise de vue photo", "Prise de vue avec décalage de la mise au point"],
    verified: false,
  },
];

export function getMenuPath(id: string): MenuPathEntry | undefined {
  return MENU_PATHS.find((m) => m.id === id);
}

export function getControl(id: string): CameraControl | undefined {
  return CAMERA_CONTROLS.find((c) => c.id === id);
}
