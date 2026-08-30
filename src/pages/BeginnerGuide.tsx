import { Link } from "react-router-dom";
import Callout from "../components/Callout";
import StepList from "../components/StepList";

const TOC = [
  { href: "#setup", label: "1. Avant de sortir" },
  { href: "#holding", label: "2. Bien tenir l'appareil" },
  { href: "#interface", label: "3. Repères à l'écran" },
  { href: "#mode-p", label: "4. Ton point de départ : le mode P" },
  { href: "#mode-a", label: "5. Premier pas créatif : le mode A" },
  { href: "#focus", label: "6. Faire la mise au point" },
  { href: "#composition", label: "7. Cadrer une photo" },
  { href: "#review", label: "8. Revoir tes photos" },
  { href: "#care", label: "9. Batterie, carte, entretien" },
  { href: "#mistakes", label: "10. Erreurs à éviter" },
  { href: "#path", label: "11. Ton parcours des 7 premiers jours" },
];

export default function BeginnerGuide() {
  return (
    <div className="flex flex-col gap-12">
      <header>
        <p className="text-xs font-semibold uppercase tracking-wide text-amber-400">
          Zéro photo à ton actif ? Commence ici
        </p>
        <h1 className="mt-1 text-3xl font-bold text-ink-100 sm:text-4xl">
          Débuter avec le Nikon Z6III
        </h1>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-300 sm:text-base">
          Ce guide part du principe que tu n'as jamais touché un appareil photo autre que ton
          téléphone. On va, dans l'ordre : sortir le boîtier de sa boîte, le tenir correctement,
          comprendre ce que tu vois dans le viseur, prendre tes toutes premières photos, puis
          avancer petit à petit vers plus de contrôle créatif. Prends ton temps, chaque étape se
          suffit à elle-même.
        </p>
      </header>

      <nav className="rounded-2xl border border-ink-800 bg-ink-900 p-5">
        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-ink-400">
          Sommaire
        </p>
        <div className="grid gap-1.5 sm:grid-cols-2">
          {TOC.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-lg px-2 py-1.5 text-sm text-ink-300 transition hover:bg-ink-800 hover:text-amber-400"
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>

      {/* 1. SETUP */}
      <section id="setup" className="scroll-mt-20">
        <h2 className="text-xl font-semibold text-ink-100">1. Avant de sortir : préparer le boîtier</h2>
        <p className="mt-2 text-sm leading-relaxed text-ink-300">
          Quatre choses à faire une seule fois (ou à chaque fois que tu changes de carte/batterie),
          avant même de penser à un seul réglage photo.
        </p>
        <div className="mt-4 flex flex-col gap-4">
          <StepList
            steps={[
              "Charge complètement la batterie avant la première sortie (via le chargeur fourni ou en USB-C sur le boîtier).",
              "Insère la batterie dans son logement (généralement sous le boîtier, à l'avant de la poignée) jusqu'au clic.",
              "Insère une carte mémoire (le Z6III a deux emplacements : un CFexpress Type B et un SD UHS-II) — une seule carte suffit pour débuter.",
              "Monte l'objectif : aligne le repère blanc/coloré sur l'objectif avec celui du boîtier, insère-le et tourne jusqu'au clic. Retire les deux bouchons (avant et arrière) avant de ranger l'objectif dans son sac.",
              "Attache la dragonne — une chute est vite arrivée les premières fois.",
            ]}
          />
          <Callout variant="warning" title="Formate toujours une carte neuve dans le boîtier">
            Avant la première utilisation d'une carte mémoire (neuve ou déjà utilisée dans un
            autre appareil), formate-la depuis le menu du Z6III (MENU › Configuration › Formater
            la carte mémoire), jamais depuis un ordinateur. Ça évite des erreurs d'écriture
            difficiles à diagnostiquer sur le terrain.
          </Callout>
          <Callout variant="tip" title="Premier allumage">
            À la toute première mise sous tension, le boîtier te demande la langue, la date et
            l'heure. Prends 30 secondes pour les régler correctement : la date/heure sert à trier
            tes photos plus tard.
          </Callout>
        </div>
      </section>

      {/* 2. HOLDING */}
      <section id="holding" className="scroll-mt-20">
        <h2 className="text-xl font-semibold text-ink-100">2. Bien tenir l'appareil</h2>
        <p className="mt-2 text-sm leading-relaxed text-ink-300">
          Une bonne prise en main règle à elle seule une bonne partie des photos floues des
          débutants.
        </p>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-ink-800 bg-ink-900 p-5">
            <h3 className="text-sm font-semibold text-ink-100">La prise</h3>
            <ul className="mt-2 flex flex-col gap-2 text-sm leading-relaxed text-ink-300">
              <li>• Main droite sur la poignée, index posé (pas crispé) sur le déclencheur.</li>
              <li>• Main gauche en dessous de l'objectif, paume ouverte vers le ciel — c'est elle qui porte le poids, pas le boîtier.</li>
              <li>• Coudes ramenés contre le buste plutôt qu'écartés : ça te transforme en trépied humain.</li>
              <li>• Œil dans le viseur plutôt qu'à bout de bras sur l'écran : trois points d'appui (deux mains + visage) au lieu d'un.</li>
            </ul>
          </div>
          <div className="rounded-xl border border-ink-800 bg-ink-900 p-5">
            <h3 className="text-sm font-semibold text-ink-100">Au moment de déclencher</h3>
            <ul className="mt-2 flex flex-col gap-2 text-sm leading-relaxed text-ink-300">
              <li>• Bloque légèrement ta respiration juste avant d'appuyer, comme au tir sportif.</li>
              <li>• Appuie en douceur, jamais d'un coup sec — un appui brusque suffit à flouter une photo à vitesse lente.</li>
              <li>• Si tu peux, appuie-toi contre un mur, un arbre ou pose les coudes sur une surface stable.</li>
              <li>• Debout, pieds légèrement écartés (largeur d'épaules) pour un meilleur équilibre.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 3. INTERFACE */}
      <section id="interface" className="scroll-mt-20">
        <h2 className="text-xl font-semibold text-ink-100">3. Repères à l'écran et dans le viseur</h2>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-300">
          Que ce soit dans le viseur électronique (EVF) ou sur l'écran arrière, tu verras en
          permanence une bande d'informations. Voici ce qui compte pour débuter :
        </p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {[
            { label: "Mode", desc: "La lettre affichée (P, S, A, M...) indique le mode d'exposition actif." },
            { label: "Ouverture / Vitesse / ISO", desc: "Les trois valeurs du triangle d'exposition, généralement en bas de l'écran." },
            { label: "Compteur de vues restantes", desc: "Combien de photos tiennent encore sur la carte, à l'ISO/qualité actuels." },
            { label: "Niveau de batterie", desc: "Pense à vérifier avant une sortie longue — pas de témoin sonore quand elle est vide." },
            { label: "Collimateur AF (rectangle/point)", desc: "Il indique où l'appareil va faire la mise au point. Il devient vert quand c'est net." },
            { label: "Histogramme (optionnel)", desc: "Graphique affichable en incrustation pour vérifier l'exposition sans se fier à la luminosité de l'écran." },
          ].map((item) => (
            <div key={item.label} className="rounded-xl border border-ink-800 bg-ink-900 p-4">
              <p className="text-sm font-semibold text-amber-400">{item.label}</p>
              <p className="mt-1 text-xs leading-relaxed text-ink-400">{item.desc}</p>
            </div>
          ))}
        </div>
        <Callout variant="tip" title="Basculer viseur / écran">
          Un capteur près de l'œilleton passe automatiquement du viseur à l'écran quand tu
          éloignes ton œil (ou l'inverse) — pas besoin de bouton dans la plupart des cas.
        </Callout>
      </section>

      {/* 4. MODE P */}
      <section id="mode-p" className="scroll-mt-20">
        <h2 className="text-xl font-semibold text-ink-100">4. Ton point de départ : le mode P</h2>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-300">
          Le Z6III n'a pas de mode "tout automatique" à la manière d'un compact grand public : le
          plus simple pour débuter est le mode <strong className="text-ink-100">P (Programme)</strong>.
          Le boîtier choisit l'ouverture et la vitesse à ta place selon la lumière ; toi, tu te
          concentres uniquement sur le cadrage et le moment.
        </p>
        <div className="mt-4 flex flex-col gap-4">
          <StepList
            steps={[
              "Tourne le sélecteur de mode (dessus, à gauche) sur P.",
              "Active l'Auto ISO pour ne pas avoir à y penser non plus (voir la fiche dans le guide du boîtier) — le boîtier gère alors les trois réglages du triangle d'exposition.",
              "Vise ton sujet, appuie à mi-course jusqu'à ce que le collimateur devienne vert (mise au point faite), puis termine l'appui pour déclencher.",
              "Prends 15-20 photos de sujets variés autour de toi (objets, animaux de compagnie, paysage par la fenêtre) juste pour te familiariser avec la prise en main et le déclenchement.",
            ]}
          />
          <Link
            to="/boitier"
            className="inline-flex w-fit items-center gap-2 rounded-full bg-ink-800 px-4 py-2 text-xs font-semibold text-amber-400 hover:bg-ink-700"
          >
            🎛️ Voir où se trouve le sélecteur de mode et activer l'Auto ISO →
          </Link>
        </div>
      </section>

      {/* 5. MODE A */}
      <section id="mode-a" className="scroll-mt-20">
        <h2 className="text-xl font-semibold text-ink-100">5. Premier pas créatif : le mode A</h2>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-300">
          Une fois à l'aise avec le mode P, le mode{" "}
          <strong className="text-ink-100">A (Priorité ouverture)</strong> est la porte d'entrée
          classique vers le contrôle créatif : tu choisis l'ouverture (donc le flou d'arrière-plan),
          le boîtier calcule toujours la vitesse pour toi.
        </p>
        <div className="mt-4 flex flex-col gap-4">
          <StepList
            steps={[
              "Tourne le sélecteur de mode sur A.",
              "Tourne la molette secondaire (celle sous ton index, à l'avant) pour changer l'ouverture (le nombre f/).",
              "Choisis un sujet à 1-2 mètres avec un arrière-plan qui a du relief (des feuillages, une rue).",
              "Prends la même photo à f/1.8 (ou la plus petite valeur possible de ton objectif), puis à f/8 : compare le flou d'arrière-plan entre les deux.",
            ]}
          />
          <Callout variant="highlight" title="Pourquoi c'est LE mode à apprendre en premier">
            L'ouverture est le réglage qui a l'effet le plus visible et le plus \"artistique\" sur
            une photo (le fameux flou d'arrière-plan). Apprendre à le maîtriser en premier donne
            des résultats gratifiants très vite, avant même de comprendre tout le reste.
          </Callout>
        </div>
      </section>

      {/* 6. FOCUS */}
      <section id="focus" className="scroll-mt-20">
        <h2 className="text-xl font-semibold text-ink-100">6. Faire la mise au point</h2>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-300">
          Pour débuter, reste sur les réglages d'usine autant que possible et retiens juste ceci :
        </p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-ink-800 bg-ink-900 p-4">
            <p className="text-sm font-semibold text-amber-400">AF-S (ponctuel)</p>
            <p className="mt-1 text-xs leading-relaxed text-ink-400">
              À utiliser pour tout ce qui ne bouge pas : objets, paysage, portrait posé. La mise
              au point se fait une fois à l'appui mi-course, puis se fige.
            </p>
          </div>
          <div className="rounded-xl border border-ink-800 bg-ink-900 p-4">
            <p className="text-sm font-semibold text-amber-400">AF-C (continu)</p>
            <p className="mt-1 text-xs leading-relaxed text-ink-400">
              À utiliser dès que le sujet bouge : enfants, animaux, sport. La mise au point suit
              en continu tant que tu maintiens l'appui mi-course.
            </p>
          </div>
        </div>
        <Callout variant="tip" title="Un seul point AF au début">
          Laisse le mode de zone AF sur un point unique (ou une petite zone) plutôt qu'une zone
          large : tu choisis toi-même précisément où faire la netteté (en général : l'œil du
          sujet), au lieu de laisser le boîtier deviner.
        </Callout>
      </section>

      {/* 7. COMPOSITION */}
      <section id="composition" className="scroll-mt-20">
        <h2 className="text-xl font-semibold text-ink-100">7. Cadrer une photo</h2>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-300">
          Quelques réflexes simples qui améliorent immédiatement une photo, avant même de penser
          aux réglages :
        </p>
        <ul className="mt-4 flex flex-col gap-2 text-sm leading-relaxed text-ink-300">
          <li>• <strong className="text-ink-100">Règle des tiers</strong> : active la grille d'affichage (menu de personnalisation de l'écran) et place ton sujet sur une des lignes ou intersections plutôt qu'au centre.</li>
          <li>• <strong className="text-ink-100">Remplis le cadre</strong> : rapproche-toi ou zoome, un sujet trop petit dans une grande scène vide se perd.</li>
          <li>• <strong className="text-ink-100">Horizon droit</strong> : beaucoup de scènes (paysage, mer) pardonnent mal un horizon penché — certains affichages proposent un niveau virtuel.</li>
          <li>• <strong className="text-ink-100">Regarde les bords du cadre</strong> avant de déclencher : un poteau qui sort de la tête de quelqu'un se corrige en bougeant les pieds, pas en retouche.</li>
        </ul>
      </section>

      {/* 8. REVIEW */}
      <section id="review" className="scroll-mt-20">
        <h2 className="text-xl font-semibold text-ink-100">8. Revoir et trier tes photos</h2>
        <div className="mt-4 flex flex-col gap-4">
          <StepList
            steps={[
              "Appuie sur la touche lecture (▶) pour revoir la dernière photo prise.",
              "Zoome (touches +/-) sur le visage/sujet principal pour vérifier la vraie netteté : l'écran en plein cadre ment souvent, une photo qui semble nette en miniature peut être floue une fois zoomée.",
              "Supprime tout de suite les ratés évidents (yeux fermés, flou net) pour ne pas encombrer la carte — mais ne sois pas trop sévère au début, garde de quoi comparer et progresser.",
              "Une fois rentré, transfère tes photos sur ordinateur/cloud avant de reformater la carte pour la sortie suivante.",
            ]}
          />
        </div>
      </section>

      {/* 9. CARE */}
      <section id="care" className="scroll-mt-20">
        <h2 className="text-xl font-semibold text-ink-100">9. Batterie, carte, entretien</h2>
        <ul className="mt-4 flex flex-col gap-2 text-sm leading-relaxed text-ink-300">
          <li>• Recharge la batterie après chaque sortie, pas seulement quand elle est vide — évite les mauvaises surprises.</li>
          <li>• Si tu as deux cartes, configure le second emplacement en "sauvegarde" (copie identique) le temps d'apprendre : une carte qui lâche ne te fait pas tout perdre.</li>
          <li>• Ne touche jamais la lentille frontale avec les doigts ; pour dépoussiérer, une poire soufflante suffit dans 90% des cas.</li>
          <li>• Range toujours l'objectif avec ses deux bouchons quand il n'est pas sur le boîtier, et le boîtier avec le bouchon de la monture si sans objectif.</li>
          <li>• Évite les changements brusques de température (sortir d'une voiture climatisée en été) sans laisser le matériel dans son sac quelques minutes : la condensation qui se forme peut abîmer l'électronique.</li>
        </ul>
      </section>

      {/* 10. MISTAKES */}
      <section id="mistakes" className="scroll-mt-20">
        <h2 className="text-xl font-semibold text-ink-100">10. Erreurs classiques de débutant</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {[
            "Passer directement en mode Manuel (M) par envie de \"tout contrôler\" et se décourager après 10 photos ratées — commence par P puis A.",
            "Oublier de recharger la batterie ou de vérifier la carte avant de partir.",
            "Juger la netteté sur l'écran sans zoomer — toujours vérifier en zoomant sur l'œil/le sujet.",
            "Shooter à contre-jour sans y penser (soleil dans le dos du photographe, pas du sujet) et se retrouver avec un sujet sombre.",
            "Vouloir figer un sujet qui bouge avec une vitesse trop lente, faute d'avoir vérifié le triangle d'exposition.",
            "Laisser le doigt sur le déclencheur en rafale sans jamais trier ensuite : des milliers de photos jamais regardées.",
          ].map((m, i) => (
            <div key={i} className="flex gap-2 rounded-xl border border-signal-red/30 bg-signal-red/5 p-4 text-sm leading-relaxed text-ink-300">
              <span aria-hidden>✗</span>
              {m}
            </div>
          ))}
        </div>
      </section>

      {/* 11. PATH */}
      <section id="path" className="scroll-mt-20">
        <h2 className="text-xl font-semibold text-ink-100">11. Ton parcours des 7 premiers jours</h2>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-300">
          Pas besoin de tout apprendre d'un coup. Voici un ordre raisonnable pour avancer, en
          t'appuyant sur le reste de l'application.
        </p>
        <ol className="mt-4 flex flex-col gap-3">
          {[
            { day: "Jour 1", text: "Cette page : prise en main physique, mode P, premières photos.", to: null },
            { day: "Jour 2", text: "Comprendre le triangle d'exposition (ISO / ouverture / vitesse) en jouant avec les curseurs.", to: "/triangle" },
            { day: "Jour 3", text: "Passer en mode A, puis tester le Calculateur pour voir comment la lumière ambiante influence les réglages.", to: "/calculateur" },
            { day: "Jour 4", text: "Premier vrai sujet : la fiche Portrait, avec détection d'œil et flou d'arrière-plan.", to: "/scenarios/portrait" },
            { day: "Jour 5", text: "Sortir en extérieur avec la fiche Vie quotidienne / rue, plus exigeante en réactivité.", to: "/scenarios/quotidien" },
            { day: "Jour 6", text: "Si un sujet en mouvement t'intéresse (sport, voitures), la fiche Rallye et la technique du filé.", to: "/scenarios/rallye" },
            { day: "Jour 7", text: "Mémoriser les commandes physiques avec le guide du boîtier, et combler les trous de vocabulaire avec le glossaire.", to: "/boitier" },
          ].map((item, i) => (
            <li key={i} className="flex gap-3 rounded-xl border border-ink-800 bg-ink-900 p-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-400 text-xs font-bold text-ink-950">
                {i + 1}
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-amber-400">{item.day}</p>
                <p className="mt-0.5 text-sm leading-relaxed text-ink-300">
                  {item.to ? (
                    <Link to={item.to} className="font-medium text-ink-100 hover:text-amber-400">
                      {item.text}
                    </Link>
                  ) : (
                    item.text
                  )}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}
