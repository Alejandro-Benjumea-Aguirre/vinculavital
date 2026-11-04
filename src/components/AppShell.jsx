import { NavLink, useNavigate } from "react-router-dom";
import { Heart, LayoutGrid, ClipboardCheck, PackageSearch, Route, Gauge, LogOut } from "lucide-react";
import { useApp } from "../context/AppContext";
import { ROLES, ROLE_LABELS } from "../data/mockData";

const navByRole = {
  [ROLES.DONANTE]: [
    { to: "/donante", label: "Registrar donación", icon: PackageSearch },
  ],
  [ROLES.VALIDADOR]: [
    { to: "/validador", label: "Validar donaciones", icon: ClipboardCheck },
  ],
  [ROLES.BENEFICIARIO]: [
    { to: "/catalogo", label: "Catálogo", icon: LayoutGrid },
    { to: "/solicitudes", label: "Mis solicitudes", icon: Route },
  ],
  [ROLES.ADMIN]: [
    { to: "/admin", label: "Panel administrativo", icon: Gauge },
  ],
};

export default function AppShell({ children }) {
  const { rol, usuario, setRol, setUsuario } = useApp();
  const navigate = useNavigate();
  const links = navByRole[rol] || [];

  function cerrarSesion() {
    setRol(null);
    setUsuario(null);
    navigate("/");
  }

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-brand-bg">
      <aside className="hidden md:flex md:flex-col w-64 bg-white border-r border-gray-100 p-5">
        <div className="flex items-center gap-2 mb-8">
          <div className="w-9 h-9 rounded-xl bg-brand-primary flex items-center justify-center">
            <Heart className="text-white" size={18} />
          </div>
          <div>
            <p className="font-bold text-gray-800 leading-tight">VINCULAVITAL</p>
            <p className="text-[11px] text-gray-400">{ROLE_LABELS[rol]}</p>
          </div>
        </div>
        <nav className="flex-1 space-y-1">
          {links.map(({ to, label, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-green-50 text-brand-primary"
                    : "text-gray-600 hover:bg-gray-50"
                }`
              }
            >
              <Icon size={18} />
              {label}
            </NavLink>
          ))}
        </nav>
        <button
          onClick={cerrarSesion}
          className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-gray-500 hover:bg-gray-50"
        >
          <LogOut size={18} />
          Cambiar de rol
        </button>
      </aside>

      <div className="flex-1 flex flex-col pb-16 md:pb-0">
        <header className="md:hidden flex items-center justify-between bg-white border-b border-gray-100 px-4 py-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-brand-primary flex items-center justify-center">
              <Heart className="text-white" size={16} />
            </div>
            <p className="font-bold text-gray-800 text-sm">VINCULAVITAL</p>
          </div>
          <button onClick={cerrarSesion} className="text-gray-400">
            <LogOut size={18} />
          </button>
        </header>

        <main className="flex-1 p-4 md:p-8 max-w-5xl w-full mx-auto">
          {usuario && (
            <p className="text-sm text-gray-500 mb-4">
              Hola, <span className="font-semibold text-gray-700">{usuario}</span> — {ROLE_LABELS[rol]}
            </p>
          )}
          {children}
        </main>

        <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 flex justify-around py-2">
          {links.map(({ to, label, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `flex flex-col items-center gap-0.5 px-2 py-1 text-[10px] font-medium ${
                  isActive ? "text-brand-primary" : "text-gray-400"
                }`
              }
            >
              <Icon size={20} />
              {label}
            </NavLink>
          ))}
        </nav>
      </div>
    </div>
  );
}
