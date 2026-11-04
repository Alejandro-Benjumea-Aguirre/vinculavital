import { useState } from "react";
import { Search, MapPin, CheckCircle2 } from "lucide-react";
import AppShell from "../components/AppShell";
import Card from "../components/Card";
import Button from "../components/Button";
import { donaciones, solicitudes } from "../data/mockData";

export default function Catalogo() {
  const [busqueda, setBusqueda] = useState("");
  const [tipo, setTipo] = useState("Todos");
  const [solicitado, setSolicitado] = useState(null);

  const disponibles = donaciones.filter(
    (d) =>
      d.estado === "Aprobada" &&
      d.nombre.toLowerCase().includes(busqueda.toLowerCase()) &&
      (tipo === "Todos" || d.tipo === tipo)
  );

  function solicitar(d) {
    solicitudes.unshift({
      id: solicitudes.length + 1,
      donacionId: d.id,
      nombre: d.nombre,
      beneficiario: "Tú",
      estado: "Solicitado",
      pasos: ["Solicitado", "Asignado", "En camino de entrega", "Entregado"],
      pasoActual: 0,
      fecha: new Date().toISOString().slice(0, 10),
    });
    setSolicitado(d.id);
    setTimeout(() => setSolicitado(null), 2500);
  }

  return (
    <AppShell>
      <h1 className="text-xl font-bold text-gray-800 mb-1">Catálogo de donaciones disponibles</h1>
      <p className="text-sm text-gray-500 mb-6">Insumos ya validados y listos para solicitar.</p>

      <div className="flex gap-3 mb-5">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
          <input
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            placeholder="Buscar medicamento o dispositivo..."
            className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-gray-200 text-sm"
          />
        </div>
        <select
          value={tipo}
          onChange={(e) => setTipo(e.target.value)}
          className="px-3 py-2.5 rounded-xl border border-gray-200 text-sm"
        >
          <option>Todos</option>
          <option>Medicamento</option>
          <option>Dispositivo médico</option>
        </select>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        {disponibles.map((d) => (
          <Card key={d.id}>
            <div className="flex justify-between items-start mb-2">
              <p className="font-semibold text-gray-800">{d.nombre}</p>
              <span className="text-[10px] font-bold bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
                Validado
              </span>
            </div>
            <p className="text-xs text-gray-500 mb-1">{d.tipo} · Cantidad disponible: {d.cantidad}</p>
            <p className="text-xs text-gray-400 flex items-center gap-1 mb-4">
              <MapPin size={12} /> {d.ubicacion}
            </p>
            {solicitado === d.id ? (
              <div className="flex items-center gap-2 text-brand-primary text-sm font-medium">
                <CheckCircle2 size={18} /> Solicitud enviada
              </div>
            ) : (
              <Button className="w-full" onClick={() => solicitar(d)}>
                Solicitar
              </Button>
            )}
          </Card>
        ))}
        {disponibles.length === 0 && (
          <p className="text-sm text-gray-400 col-span-2 text-center py-10">
            No hay donaciones disponibles con ese filtro.
          </p>
        )}
      </div>
    </AppShell>
  );
}
