export interface GlossaryEntry {
  term: string;
  def: string;
}

export const GLOSSARY: GlossaryEntry[] = [
  {
    term: "ISO",
    def: "Sensibilité du capteur à la lumière. Doubler l'ISO double la luminosité de l'image mais ajoute du bruit numérique (grain).",
  },
  {
    term: "Ouverture (f/nombre)",
    def: "Taille de l'iris du diaphragme dans l'objectif. Petit chiffre (f/1.8) = grande ouverture = plus de lumière + flou d'arrière-plan. Grand chiffre (f/16) = petite ouverture = moins de lumière + plus de netteté sur toute la profondeur.",
  },
  {
    term: "Vitesse d'obturation",
    def: "Durée pendant laquelle le capteur est exposé à la lumière. Rapide (1/1000s) fige le mouvement. Lente (1/30s, 1s...) laisse du flou de mouvement et nécessite souvent un trépied.",
  },
  {
    term: "Stop / IL (Indice de Lumination)",
    def: "Unité qui représente un doublement ou une division par deux de la quantité de lumière. Les trois réglages du triangle d'exposition se comptent en stops.",
  },
  {
    term: "EV (Exposure Value)",
    def: "Valeur qui combine ouverture et vitesse pour représenter une quantité de lumière donnée, souvent référencée à ISO 100.",
  },
  {
    term: "Profondeur de champ",
    def: "Zone de l'image qui apparaît nette, devant et derrière le point de mise au point. Dépend surtout de l'ouverture, mais aussi de la focale et de la distance au sujet.",
  },
  {
    term: "Bokeh",
    def: "Rendu esthétique du flou d'arrière-plan obtenu avec une grande ouverture (petit f/nombre).",
  },
  {
    term: "Hyperfocale",
    def: "Distance de mise au point qui maximise la zone nette du premier plan à l'infini, pour une ouverture donnée. Très utilisé en paysage.",
  },
  {
    term: "AF-S / AF-C",
    def: "AF-S (single) : la mise au point se fixe une fois, idéale pour un sujet immobile. AF-C (continu) : la mise au point suit en continu, indispensable pour un sujet en mouvement (sport, rallye).",
  },
  {
    term: "Panning / Filé",
    def: "Technique consistant à accompagner un sujet en mouvement avec une vitesse lente : le sujet reste net, le fond devient flou horizontalement, donnant une sensation de vitesse.",
  },
  {
    term: "Priorité ouverture (A/Av)",
    def: "Mode où tu choisis l'ouverture et le boîtier calcule la vitesse automatiquement pour une exposition correcte.",
  },
  {
    term: "Priorité vitesse (S/Tv)",
    def: "Mode où tu choisis la vitesse et le boîtier calcule l'ouverture automatiquement.",
  },
  {
    term: "Mode Manuel (M)",
    def: "Tu choisis toi-même ouverture ET vitesse ; l'ISO peut rester en automatique (Auto ISO) pour garder le contrôle créatif tout en laissant le boîtier gérer la luminosité finale.",
  },
  {
    term: "Auto ISO",
    def: "Le boîtier ajuste l'ISO automatiquement pour compenser tes réglages d'ouverture/vitesse. On peut fixer un plafond (ISO max) et une vitesse minimale pour garder le contrôle.",
  },
  {
    term: "Histogramme",
    def: "Graphique affiché sur l'écran/viseur représentant la répartition des tons de l'image, du noir (à gauche) au blanc (à droite). Utile pour vérifier l'exposition sans se fier à la luminosité de l'écran.",
  },
  {
    term: "Stabilisation (IBIS)",
    def: "Stabilisation du capteur dans le boîtier (5 axes sur le Z6III) qui compense les tremblements pour permettre des vitesses plus lentes à main levée.",
  },
  {
    term: "RAW",
    def: "Format de fichier qui garde toutes les données brutes du capteur, pour un maximum de marge de retouche (exposition, couleurs) par rapport au JPEG.",
  },
  {
    term: "Détection de sujet",
    def: "Fonction d'autofocus qui reconnaît automatiquement les yeux, visages, animaux ou véhicules pour faire et garder la mise au point dessus.",
  },
  {
    term: "Filtre ND",
    def: "Filtre gris neutre qui réduit la quantité de lumière entrant dans l'objectif sans changer les couleurs, utile pour utiliser une vitesse lente (filé, pose longue) en plein jour.",
  },
];
