import AppShell from "../components/AppShell";
import Card from "../components/Card";
import Badge from "../components/Badge";
import { donaciones, resumenAdmin } from "../data/mockData";
import { Package, CheckCircle2, Clock, Route } from "lucide-react";

const tarjetas = [
  { label: "Donaciones totales", valor: resumenAdmin.totalDonaciones, icon: Package, color: "text-brand-secondary" },
  { label: "Validadas", valor: resumenAdmin.validadas, icon: CheckCircle2, color: "text-brand-primary" },
  { label: "Pendientes", valor: resumenAdmin.pendientes, icon: Clock, color: "text-brand-accent" },
  { label: "Solicitudes activas", valor: resumenAdmin.solicitudesActivas, icon: Route, color: "text-brand-secondary" },
];

export default function Admin() {
  return (
    <AppShell>
      <h1 className="text-xl font-bold text-gray-800 mb-1">Panel administrativo</h1>
      <p className="text-sm text-gray-500 mb-6">Vista general del equipo de desarrollo de VINCULAVITAL.</p>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {tarjetas.map(({ label, valor, icon: Icon, color }) => (
          <Card key={label}>
            <Icon className={color} size={22} />
            <p className="text-2xl font-bold text-gray-800 mt-2">{valor}</p>
            <p className="text-xs text-gray-500">{label}</p>
          </Card>
        ))}
      </div>

      <Card>
        <p className="font-semibold text-gray-800 mb-4">Últimas donaciones registradas</p>
        <div className="space-y-3">
          {donaciones.slice(0, 5).map((d) => (
            <div key={d.id} className="flex items-center justify-between border-b border-gray-50 last:border-0 pb-3 last:pb-0">
              <div>
                <p className="text-sm font-medium text-gray-700">{d.nombre}</p>
                <p className="text-xs text-gray-400">{d.donante}</p>
              </div>
              <Badge estado={d.estado} />
            </div>
          ))}
        </div>
      </Card>
    </AppShell>
  );
}
