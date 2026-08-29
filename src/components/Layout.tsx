import { NavLink, Outlet } from "react-router-dom";

const NAV_ITEMS = [
  { to: "/", label: "Accueil", icon: "🏠", end: true },
  { to: "/triangle", label: "Triangle", icon: "🔺", end: false },
  { to: "/calculateur", label: "Calculateur", icon: "🧮", end: false },
  { to: "/scenarios", label: "Tutos", icon: "📸", end: false },
  { to: "/boitier", label: "Boîtier", icon: "🎛️", end: false },
  { to: "/glossaire", label: "Glossaire", icon: "📖", end: false },
];

function navLinkClass(isActive: boolean) {
  return [
    "flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors",
    isActive
      ? "bg-amber-400 text-ink-950"
      : "text-ink-300 hover:text-ink-100 hover:bg-ink-800",
  ].join(" ");
}

export default function Layout() {
  return (
    <div className="min-h-dvh flex flex-col bg-ink-950 text-ink-100">
      <header className="sticky top-0 z-40 border-b border-ink-800/80 bg-ink-950/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <NavLink to="/" className="flex items-center gap-2.5 shrink-0">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-amber-400 text-lg font-black text-ink-950">
              PB
            </span>
            <span className="hidden flex-col leading-tight sm:flex">
              <span className="text-sm font-semibold text-ink-100">Photo by Bastien</span>
              <span className="text-xs text-ink-400">Guide de réglages sur le terrain</span>
            </span>
          </NavLink>
          <nav className="hidden items-center gap-1 md:flex">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={({ isActive }) => navLinkClass(isActive)}
              >
                <span aria-hidden>{item.icon}</span>
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl flex-1 px-4 pb-24 pt-6 sm:px-6 sm:pb-10">
        <Outlet />
      </main>

      <footer className="hidden border-t border-ink-800/80 py-6 text-center text-xs text-ink-400 md:block">
        Photo by Bastien — repères de réglages, pas des lois de la physique. La lumière réelle varie toujours un peu.
      </footer>

      <nav className="fixed inset-x-0 bottom-0 z-40 border-t border-ink-800 bg-ink-900/95 backdrop-blur md:hidden">
        <div
          className="mx-auto grid max-w-6xl grid-cols-6"
          style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
        >
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                [
                  "flex flex-col items-center gap-0.5 py-2.5 text-[11px] font-medium",
                  isActive ? "text-amber-400" : "text-ink-400",
                ].join(" ")
              }
            >
              <span className="text-lg leading-none" aria-hidden>
                {item.icon}
              </span>
              {item.label}
            </NavLink>
          ))}
        </div>
      </nav>
    </div>
  );
}
