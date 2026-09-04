import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center gap-4 py-24 text-center">
      <span className="text-4xl">📷💨</span>
      <h1 className="text-2xl font-bold text-ink-100">Page introuvable</h1>
      <p className="text-sm text-ink-400">Cette page n'existe pas (ou a été mal cadrée).</p>
      <Link to="/" className="rounded-sm bg-amber-400 px-5 py-2.5 text-sm font-semibold text-ink-950">
        Retour à l'accueil
      </Link>
    </div>
  );
}
