# Photo by Bastien — Guide de réglages

Application web (React + Vite + Tailwind) pour comprendre et régler son appareil photo sur le
terrain : triangle d'exposition interactif, calculateur de réglages (ouverture / vitesse / ISO)
et fiches tutos par type de photo (portrait, vie quotidienne, rallye automobile, paysage, basse
lumière), avec des astuces spécifiques Nikon Z6III.

Installable comme application (PWA), utilisable hors connexion une fois chargée une première
fois.

## Développement

```bash
npm install
npm run dev
```

## Build de production

```bash
npm run build
npm run preview
```

## Lint / typecheck

```bash
npm run lint
npx tsc -b --noEmit
```

## Structure

- `src/lib/exposure.ts` — constantes (paliers d'ouverture/vitesse/ISO), table de lumière
  ambiante (règle "Sunny 16") et calculs d'exposition (résout ISO, vitesse ou ouverture).
- `src/data/scenarios.ts` — contenu des fiches tutos par situation de prise de vue.
- `src/data/glossary.ts` — glossaire des termes photo.
- `src/pages/` — pages de l'application (Accueil, Triangle, Calculateur, Tutos, Glossaire).
- `scripts/generate-icons.mjs` — génère les icônes PWA (`public/icon-*.png`).
