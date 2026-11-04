import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Heart, ArrowLeft } from "lucide-react";
import { useApp } from "../context/AppContext";
import { ROLES, ROLE_LABELS } from "../data/mockData";
import Button from "../components/Button";

const destinoPorRol = {
  [ROLES.DONANTE]: "/donante",
  [ROLES.VALIDADOR]: "/validador",
  [ROLES.BENEFICIARIO]: "/catalogo",
  [ROLES.ADMIN]: "/admin",
};

export default function Login() {
  const { rol, setUsuario } = useApp();
  const navigate = useNavigate();
  const [modo, setModo] = useState("login");
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");

  function entrar(e) {
    e.preventDefault();
    setUsuario(nombre || "Usuario VINCULAVITAL");
    navigate(destinoPorRol[rol] || "/");
  }

  if (!rol) {
    navigate("/");
    return null;
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-sm w-full">
        <button onClick={() => navigate("/")} className="flex items-center gap-1 text-gray-400 text-sm mb-6">
          <ArrowLeft size={16} /> Cambiar de rol
        </button>

        <div className="w-12 h-12 rounded-xl bg-brand-primary flex items-center justify-center mb-4">
          <Heart className="text-white" size={22} />
        </div>
        <h1 className="text-xl font-bold text-gray-800 mb-1">
          {modo === "login" ? "Iniciar sesión" : "Crear cuenta"}
        </h1>
        <p className="text-sm text-gray-500 mb-6">Como {ROLE_LABELS[rol]}</p>

        <form onSubmit={entrar} className="space-y-4">
          {modo === "registro" && (
            <div>
              <label className="text-xs font-medium text-gray-600">Nombre completo</label>
              <input
                required
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                className="w-full mt-1 px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/30"
                placeholder="Ej. María Fernanda López"
              />
            </div>
          )}
          <div>
            <label className="text-xs font-medium text-gray-600">Correo electrónico</label>
            <input
              required
              type="email"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              className="w-full mt-1 px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/30"
              placeholder="correo@ejemplo.com"
            />
          </div>
          <div>
            <label className="text-xs font-medium text-gray-600">Contraseña</label>
            <input
              required
              type="password"
              className="w-full mt-1 px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/30"
              placeholder="••••••••"
            />
          </div>

          <Button type="submit" className="w-full">
            {modo === "login" ? "Iniciar sesión" : "Crear cuenta"}
          </Button>
        </form>

        <button
          onClick={() => setModo(modo === "login" ? "registro" : "login")}
          className="text-sm text-brand-primary font-medium mt-4 w-full text-center"
        >
          {modo === "login" ? "¿No tienes cuenta? Regístrate" : "Ya tengo cuenta, iniciar sesión"}
        </button>
      </div>
    </div>
  );
}
