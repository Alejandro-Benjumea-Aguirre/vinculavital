import { useState } from "react";
import { Check, X } from "lucide-react";
import AppShell from "../components/AppShell";
import Card from "../components/Card";
import Badge from "../components/Badge";
import Button from "../components/Button";
import { donaciones as donacionesIniciales } from "../data/mockData";

const filtros = ["Pendiente de validación", "Aprobada", "Rechazada"];

export default function Validador() {
  const [lista, setLista] = useState(donacionesIniciales);
  const [filtro, setFiltro] = useState("Pendiente de validación");
  const [observacion, setObservacion] = useState({});

  function actualizarEstado(id, estado) {
    setLista((prev) => prev.map((d) => (d.id === id ? { ...d, estado } : d)));
  }

  const visibles = lista.filter((d) => d.estado === filtro);

  return (
    <AppShell>
      <h1 className="text-xl font-bold text-gray-800 mb-1">Validación de donaciones</h1>
      <p className="text-sm text-gray-500 mb-6">
        Revisa el estado y vigencia de los insumos antes de habilitar su entrega.
      </p>

      <div className="flex gap-2 mb-5">
        {filtros.map((f) => (
          <button
            key={f}
            onClick={() => setFiltro(f)}
            className={`text-xs font-semibold px-3 py-1.5 rounded-full border ${
              filtro === f
                ? "bg-brand-primary text-white border-brand-primary"
                : "bg-white text-gray-500 border-gray-200"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="space-y-3">
        {visibles.length === 0 && (
          <p className="text-sm text-gray-400 text-center py-10">No hay donaciones en este estado.</p>
        )}
        {visibles.map((d) => (
          <Card key={d.id}>
            <div className="flex justify-between items-start gap-4">
              <div>
                <p className="font-semibold text-gray-800">{d.nombre}</p>
                <p className="text-xs text-gray-500">
                  {d.tipo} · Cantidad: {d.cantidad} · Vence: {d.vencimiento}
                </p>
                <p className="text-xs text-gray-500">Estado declarado: {d.estadoFisico}</p>
                <p className="text-xs text-gray-400 mt-1">Donante: {d.donante} · {d.ubicacion}</p>
              </div>
              <Badge estado={d.estado} />
            </div>

            {filtro === "Pendiente de validación" && (
              <div className="mt-4 pt-4 border-t border-gray-100 space-y-3">
                <input
                  value={observacion[d.id] || ""}
                  onChange={(e) => setObservacion((o) => ({ ...o, [d.id]: e.target.value }))}
                  placeholder="Observación (obligatoria si rechazas)"
                  className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm"
                />
                <div className="flex gap-2">
                  <Button variant="primary" onClick={() => actualizarEstado(d.id, "Aprobada")}>
                    <Check size={16} /> Aprobar
                  </Button>
                  <Button
                    variant="danger"
                    disabled={!observacion[d.id]}
                    onClick={() => actualizarEstado(d.id, "Rechazada")}
                  >
                    <X size={16} /> Rechazar
                  </Button>
                </div>
              </div>
            )}
          </Card>
        ))}
      </div>
    </AppShell>
  );
}
