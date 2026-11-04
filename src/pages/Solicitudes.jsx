import { MessageCircle } from "lucide-react";
import AppShell from "../components/AppShell";
import Card from "../components/Card";
import Stepper from "../components/Stepper";
import { solicitudes } from "../data/mockData";

export default function Solicitudes() {
  return (
    <AppShell>
      <h1 className="text-xl font-bold text-gray-800 mb-1">Mis solicitudes</h1>
      <p className="text-sm text-gray-500 mb-6">Sigue el estado de trazabilidad de cada donación solicitada.</p>

      <div className="space-y-4">
        {solicitudes.map((s) => (
          <Card key={s.id}>
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="font-semibold text-gray-800">{s.nombre}</p>
                <p className="text-xs text-gray-400">Solicitado el {s.fecha}</p>
              </div>
              <button className="text-brand-secondary text-xs font-medium flex items-center gap-1">
                <MessageCircle size={14} /> Contactar
              </button>
            </div>
            <Stepper pasos={s.pasos} pasoActual={s.pasoActual} />
          </Card>
        ))}
      </div>
    </AppShell>
  );
}
