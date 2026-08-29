export interface SettingRange {
  label: string;
  value: string;
  why: string;
}

export interface Scenario {
  id: string;
  emoji: string;
  title: string;
  subtitle: string;
  intro: string;
  mode: string;
  settings: SettingRange[];
  focus: string;
  drive: string;
  steps: string[];
  mistakes: string[];
  z6iii: string[];
  // Préremplissage pour le calculateur d'exposition
  calculatorPreset?: {
    lightId: string;
    aperture: number;
    shutter: number;
  };
}

export const SCENARIOS: Scenario[] = [
  {
    id: "portrait",
    emoji: "🧑‍🎨",
    title: "Portrait",
    subtitle: "Sujet net, arrière-plan qui fond",
    intro:
      "Le but : que l'œil du sujet soit parfaitement net et que le fond disparaisse en flou doux (bokeh). Tout se joue sur l'ouverture et la mise au point sur l'œil.",
    mode: "Priorité ouverture (A) ou Manuel + ISO auto",
    settings: [
      {
        label: "Ouverture",
        value: "f/1.8 à f/2.8 (portrait serré) · f/4 à f/5.6 (groupe / plus de netteté)",
        why: "Plus le nombre est petit, plus le fond est flou. En dessous de f/2, attention : si le sujet bouge un peu, l'œil le plus proche peut sortir de la zone nette.",
      },
      {
        label: "Vitesse",
        value: "1/125s minimum · 1/250s si le sujet bouge (enfants, rires)",
        why: "Assez rapide pour figer les micro-mouvements du visage, sans contrainte forte puisque le sujet est globalement statique.",
      },
      {
        label: "ISO",
        value: "100 en extérieur jour · Auto ISO plafonné à 3200 en intérieur",
        why: "Le Z6III est très propre jusqu'à 6400, mais viser le plus bas possible garde une peau lisse et des couleurs fidèles.",
      },
    ],
    focus: "AF-C, détection Œil humain activée, zone \"Auto-area AF\" ou point unique sur l'œil le plus proche de l'objectif.",
    drive: "Vue par vue, ou rafale basse (Cl) pour choisir la meilleure expression parmi 3-4 images.",
    steps: [
      "Active la détection d'œil (Menu mise au point > Détection de sujet > Personnes) et laisse le boîtier chercher l'œil automatiquement.",
      "Place ton sujet avec une source de lumière douce sur le côté (fenêtre, golden hour) plutôt que le soleil de face.",
      "Ouvre grand (f/1.8-f/2.8) si tu veux isoler le visage, ferme un peu (f/4-f/5.6) pour un couple ou un groupe afin que tout le monde soit net.",
      "Vérifie l'exposition sur la peau (l'histogramme ne doit pas être écrasé à droite) et corrige avec la molette de correction d'exposition.",
      "Recadre avec de l'espace pour le regard, déclenche plusieurs fois : les expressions changent vite.",
    ],
    mistakes: [
      "Ouvrir à f/1.4 en pensant \"plus flou = mieux\" et rater la netteté de l'œil car la profondeur de champ est trop fine.",
      "Mettre l'ISO en auto sans plafond et se retrouver à ISO 25600 en intérieur sombre alors qu'un f/1.8 aurait suffi.",
      "Mesurer la lumière sur le fond au lieu du visage, ce qui sous ou surexpose le sujet.",
    ],
    z6iii: [
      "Détection de sujet \"Personnes\" avec suivi de l'œil, y compris en vidéo.",
      "Stabilisation 5 axes : tu peux descendre à 1/60s à main levée sans flou de bougé si le sujet est calme.",
      "Écran orientable pour cadrer bas ou en portrait à hauteur d'enfant.",
    ],
    calculatorPreset: { lightId: "open-shade", aperture: 2, shutter: 1 / 200 },
  },
  {
    id: "quotidien",
    emoji: "🚶",
    title: "Vie quotidienne / rue",
    subtitle: "Réactivité et contexte",
    intro:
      "Photographier la vie de tous les jours ou la rue demande d'être prêt à dégainer en 1 seconde, avec un cadrage qui garde assez de contexte autour du sujet.",
    mode: "Priorité ouverture (A) avec Auto ISO, ou Programme (P) pour aller très vite",
    settings: [
      {
        label: "Ouverture",
        value: "f/4 à f/8",
        why: "Assez fermé pour avoir de la marge sur la mise au point (tu n'as pas toujours le temps de viser précisément) tout en gardant un fond reconnaissable.",
      },
      {
        label: "Vitesse",
        value: "1/250s pour des passants normaux · 1/500s si vélos/enfants qui courent",
        why: "La rue bouge sans prévenir : mieux vaut une marge de sécurité qu'un flou de bougé raté.",
      },
      {
        label: "ISO",
        value: "Auto ISO, plafond 6400, vitesse mini liée à la focale",
        why: "Tu changes de lumière en marchant (ombre, plein soleil, intérieur de magasin) : l'auto ISO avec plafond t'évite de devoir tout recalculer sans cesse.",
      },
    ],
    focus: "AF-C + zone large ou suivi 3D ; active le déclenchement silencieux (obturateur électronique) pour rester discret.",
    drive: "Rafale courte (Cl) pour capter le bon instant sans looter la carte mémoire.",
    steps: [
      "Règle l'Auto ISO : Menu photo > Sensibilité ISO auto > vitesse minimale \"Auto\" (le boîtier l'adapte à ta focale) ou fixe-la à 1/250s.",
      "Pré-visualise ta scène et anticipe (lumière, ligne, fond) avant que le sujet n'entre dans le cadre.",
      "Garde l'appareil prêt, œil dans le viseur ou écran allumé, mise au point continue activée.",
      "Déclenche par petites rafales de 2-3 images pour choisir la meilleure expression/posture ensuite.",
      "Pense à la loi sur le droit à l'image si tu publies des inconnus reconnaissables.",
    ],
    mistakes: [
      "Ouverture trop grande (f/1.8) : la moindre erreur de mise au point rend la photo floue sur un sujet en mouvement.",
      "Oublier de relever le plafond ISO en entrant dans un lieu sombre, et rater la vitesse minimale nécessaire.",
      "Rester en mode entièrement automatique et perdre le contrôle du flou d'arrière-plan.",
    ],
    z6iii: [
      "Obturateur 100% électronique disponible : totalement silencieux, idéal en rue ou lors d'un événement.",
      "Joystick + molette pour déplacer le collimateur d'AF très vite sans lâcher le viseur.",
      "Double emplacement carte CFexpress/SD : shoote en rafale sans crainte du buffer.",
    ],
    calculatorPreset: { lightId: "hazy-sun", aperture: 5.6, shutter: 1 / 250 },
  },
  {
    id: "rallye",
    emoji: "🏎️",
    title: "Rallye / voitures en mouvement",
    subtitle: "Figer l'action ou filé (panning)",
    intro:
      "Deux techniques possibles avec un sujet rapide : figer nettement la voiture (vitesse très rapide) ou faire un filé où la voiture reste nette mais le décor devient flou horizontalement, ce qui donne une sensation de vitesse. Le filé est la signature des photos de rallye/course pro.",
    mode: "Priorité vitesse (S) pour figer · Manuel ou Priorité vitesse pour le filé",
    settings: [
      {
        label: "Ouverture",
        value: "f/8 à f/11 (figer, plein jour) · f/11 à f/16 (filé en plein jour, ou ajoute un filtre ND)",
        why: "Fermer l'ouverture donne de la marge de profondeur de champ (utile car la mise au point doit suivre une voiture qui approche) et, pour le filé, compense la vitesse lente pour ne pas surexposer.",
      },
      {
        label: "Vitesse",
        value: "1/1000s à 1/2000s pour figer · 1/30s à 1/125s pour le filé (roues qui tournent, fond flou)",
        why: "Plus la voiture est proche/rapide, plus il faut une vitesse rapide pour la figer. Pour le filé, plus la vitesse est lente, plus l'effet de vitesse est marqué — mais plus c'est dur à réussir net.",
      },
      {
        label: "ISO",
        value: "Auto ISO plafonné selon la lumière (base 100 en plein jour)",
        why: "En plein jour tu n'as normalement pas besoin de monter l'ISO ; il sert surtout de variable d'ajustement si tu es en filé avec un ND insuffisant.",
      },
    ],
    focus: "AF-C (AF continu) + suivi 3D-tracking ou détection de sujet \"Véhicule\" si le mode est disponible sur ton objectif/firmware. Active le pré-déclenchement (Pre-Release Capture) du Z6III pour ne jamais louper l'instant clé.",
    drive: "Rafale haute (jusqu'à 20 im/s en obturateur électronique) et suivi du sujet en \"vol\" avant/après le passage.",
    steps: [
      "Pour figer : passe en Priorité vitesse, choisis 1/1000-1/2000s selon la vitesse de la voiture, laisse le boîtier gérer l'ouverture/ISO.",
      "Pour le filé : choisis une vitesse lente (commence à 1/60s), cale-toi bien stable (pieds ancrés, buste qui pivote depuis les hanches), et suis la voiture dans le viseur AVANT qu'elle n'arrive à ta hauteur.",
      "Déclenche en rafale pendant que tu accompagnes le mouvement, et continue le geste de pivot après le déclenchement (\"follow-through\"), comme au golf.",
      "Fais plusieurs vitesses différentes (1/30, 1/60, 1/125) sur plusieurs passages : le bon compromis net/flou dépend de la vitesse réelle du véhicule et de la distance.",
      "Vérifie sur l'écran en zoomant sur la voiture (pas sur le décor) : c'est elle qui doit être nette en filé.",
      "En plein soleil avec une vitesse lente, ajoute un filtre ND (ND8 ou ND16) si l'image est cramée même à f/16 et ISO 100.",
    ],
    mistakes: [
      "Vouloir un filé du premier coup à 1/30s : commence à 1/125s puis ralentis progressivement en gardant le taux de réussite.",
      "Ne pas accompagner le mouvement jusqu'au bout (arrêter de pivoter pile au déclenchement) : ça donne un flou général au lieu d'un filé propre.",
      "Utiliser un point AF unique fixe alors que la voiture change de distance vite : préfère le suivi de zone ou la détection de sujet.",
      "Se placer plein axe (la voiture arrive droit sur toi) : le filé fonctionne bien mieux avec un déplacement latéral du sujet (voiture qui passe de profil ou 3/4).",
    ],
    z6iii: [
      "Pre-Release Capture : le boîtier enregistre déjà les images jusqu'à 1 seconde avant l'appui complet — précieux pour ne pas rater l'instant pile au bon endroit.",
      "20 im/s en obturateur électronique (RAW 12-bit), 14 im/s en mécanique.",
      "Détection de sujet incluant les véhicules dans certains modes, en plus du suivi 3D classique très efficace en manuel.",
      "Stabilisation 5 axes utile pour garder l'horizon droit pendant le pivot du filé.",
    ],
    calculatorPreset: { lightId: "full-sun", aperture: 11, shutter: 1 / 60 },
  },
  {
    id: "paysage",
    emoji: "🏔️",
    title: "Paysage",
    subtitle: "Netteté du premier plan à l'horizon",
    intro:
      "Le paysage privilégie une grande profondeur de champ et une netteté maximale, souvent sur trépied pour pouvoir fermer le diaphragme sans craindre le bruit.",
    mode: "Priorité ouverture (A), trépied recommandé",
    settings: [
      {
        label: "Ouverture",
        value: "f/8 à f/11 (meilleur compromis netteté/diffraction) · jusqu'à f/16 si premier plan très proche",
        why: "f/8-f/11 est la plage la plus nette de la plupart des objectifs. Au-delà de f/16, la diffraction commence à adoucir l'image.",
      },
      {
        label: "Vitesse",
        value: "Libre (le trépied permet des poses longues) · 1/125s mini à main levée",
        why: "Sur trépied la vitesse n'est plus une contrainte : elle sert juste à équilibrer l'exposition.",
      },
      {
        label: "ISO",
        value: "100 (ISO de base, meilleure dynamique)",
        why: "Sur trépied, aucune raison de monter l'ISO : autant profiter de la meilleure qualité d'image possible.",
      },
    ],
    focus: "AF-S, point unique, mise au point au tiers de la scène (hyperfocale) pour maximiser la zone nette avant/arrière.",
    drive: "Vue par vue, retardateur 2s ou télécommande pour éviter les vibrations du déclenchement.",
    steps: [
      "Installe le trépied, désactive la stabilisation optique/boîtier (elle peut créer du flou sur trépied à basse vitesse).",
      "Fais la mise au point à environ 1/3 de la profondeur de la scène (ou utilise l'hyperfocale de ton objectif à l'ouverture choisie).",
      "Ferme à f/8-f/11, ISO 100, ajuste la vitesse pour une exposition correcte (vérifie l'histogramme).",
      "Utilise le retardateur ou une télécommande pour déclencher sans secousse.",
      "Envisage un filtre ND dégradé ou plusieurs expositions (bracketing) si le ciel est beaucoup plus lumineux que le sol.",
    ],
    mistakes: [
      "Fermer à f/22 \"pour tout avoir net\" : la diffraction dégrade l'image, f/11 est souvent suffisant.",
      "Laisser la stabilisation active sur trépied à vitesse lente, ce qui peut créer un léger flou.",
      "Mettre la mise au point à l'infini alors que le premier plan est proche : le premier plan ressort flou.",
    ],
    z6iii: [
      "Mode \"Focus shift\" (empilement de mise au point) intégré pour les scènes avec premier plan très proche.",
      "Simulateur d'exposition dans le viseur électronique pour composer de nuit sans deviner.",
      "Format RAW 12-bit haute efficacité pour garder une belle marge de récupération des hautes lumières/ombres au traitement.",
    ],
    calculatorPreset: { lightId: "hazy-sun", aperture: 11, shutter: 1 / 60 },
  },
  {
    id: "basse-lumiere",
    emoji: "🌙",
    title: "Basse lumière / nuit",
    subtitle: "Sans flash, sans trépied si besoin",
    intro:
      "Intérieur sombre, concert, ambiance de nuit : la priorité est d'accepter les compromis (ISO plus élevé, ouverture large) pour garder une vitesse suffisante et éviter le flou de bougé.",
    mode: "Priorité ouverture (A) grande ouverture, ou Manuel + Auto ISO",
    settings: [
      {
        label: "Ouverture",
        value: "La plus grande possible de ton objectif (f/1.8, f/2.8...)",
        why: "C'est le seul réglage \"gratuit\" en basse lumière : il laisse entrer un maximum de lumière sans dégrader l'image.",
      },
      {
        label: "Vitesse",
        value: "1/60s à 1/125s à main levée pour un sujet qui bouge un peu · plus lent sur trépied",
        why: "En dessous, le flou de bougé du sujet devient visible même si le stabilisateur compense le bougé de l'appareil.",
      },
      {
        label: "ISO",
        value: "Monte sans crainte jusqu'à 6400-12800 sur Z6III",
        why: "Mieux vaut une photo un peu bruitée mais nette et bien cadrée qu'une photo propre mais floue ou noire.",
      },
    ],
    focus: "AF-C avec assistance en basse lumière ; vise une zone contrastée (bord, lumière, œil) si l'AF hésite.",
    drive: "Vue par vue, ou rafale courte pour choisir l'image la plus nette parmi plusieurs.",
    steps: [
      "Ouvre au maximum ton objectif.",
      "Fixe une vitesse plancher acceptable (1/60-1/125s selon le mouvement du sujet).",
      "Laisse l'ISO en auto sans plafond bas — en basse lumière, un plafond trop strict te fait sous-exposer.",
      "Stabilise-toi : appuie les coudes, cale-toi contre un mur, bloque ta respiration à la prise de vue.",
      "Traite le bruit numérique au dératage plutôt que de sacrifier la netteté en rallongeant la vitesse.",
    ],
    mistakes: [
      "Plafonner l'ISO trop bas \"pour éviter le bruit\" et se retrouver avec des photos sombres et floues.",
      "Utiliser le flash intégré de face, qui aplatit les visages et donne des ombres dures.",
      "Descendre sous 1/30s à main levée sur un sujet vivant : le bruit se corrige, le flou de mouvement non.",
    ],
    z6iii: [
      "Excellente gestion du bruit natif jusqu'à ISO 6400-12800 grâce au capteur rétroéclairé empilé.",
      "Autofocus fonctionnel jusqu'à des niveaux de lumière très bas (-9 EV avec certains objectifs).",
      "Stabilisation 5 axes jusqu'à ~8 stops annoncés selon l'objectif : un vrai filet de sécurité en basse lumière statique.",
    ],
    calculatorPreset: { lightId: "indoor-dim", aperture: 1.8, shutter: 1 / 80 },
  },
];

export function getScenario(id: string): Scenario | undefined {
  return SCENARIOS.find((s) => s.id === id);
}
