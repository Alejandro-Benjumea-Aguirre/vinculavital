import { useNavigate } from "react-router-dom";
import { Heart, Gift, HandHeart, Stethoscope } from "lucide-react";
import { useApp } from "../context/AppContext";
import { ROLES, ROLE_LABELS } from "../data/mockData";
import Card from "../components/Card";

const opciones = [
  { rol: ROLES.DONANTE, icon: Gift, desc: "Tengo medicamentos o dispositivos para donar." },
  { rol: ROLES.BENEFICIARIO, icon: HandHeart, desc: "Busco medicamentos o dispositivos donados." },
  { rol: ROLES.VALIDADOR, icon: Stethoscope, desc: "Soy profesional de la salud y valido donaciones." },
];

export default function Inicio() {
  const { setRol } = useApp();
  const navigate = useNavigate();

  function elegir(rol) {
    setRol(rol);
    navigate("/login");
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-md w-full text-center">
        <div className="w-16 h-16 rounded-2xl bg-brand-primary flex items-center justify-center mx-auto mb-4">
          <Heart className="text-white" size={30} />
        </div>
        <h1 className="text-2xl font-bold text-gray-800 mb-2">VINCULAVITAL</h1>
        <p className="text-gray-500 mb-8 text-sm">
          Conectamos donaciones de medicamentos con quienes más lo necesitan, en comunidades vulnerables de Cali y Yumbo.
        </p>

        <div className="space-y-3 text-left">
          {opciones.map(({ rol, icon: Icon, desc }) => (
            <Card key={rol} className="hover:shadow-md transition-shadow cursor-pointer" >
              <button onClick={() => elegir(rol)} className="w-full flex items-center gap-4 text-left">
                <div className="w-11 h-11 rounded-xl bg-green-50 flex items-center justify-center shrink-0">
                  <Icon className="text-brand-primary" size={22} />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">{ROLE_LABELS[rol]}</p>
                  <p className="text-xs text-gray-500">{desc}</p>
                </div>
              </button>
            </Card>
          ))}
        </div>

        <button
          onClick={() => elegir(ROLES.ADMIN)}
          className="text-xs text-gray-400 mt-6 underline"
        >
          Ingresar como equipo de desarrollo
        </button>
      </div>
    </div>
  );
}
