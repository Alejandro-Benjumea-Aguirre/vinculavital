import { useState } from "react";
import { UploadCloud, CheckCircle2 } from "lucide-react";
import AppShell from "../components/AppShell";
import Card from "../components/Card";
import Button from "../components/Button";
import Badge from "../components/Badge";
import { donaciones } from "../data/mockData";

export default function RegistrarDonacion() {
  const [enviado, setEnviado] = useState(false);
  const [form, setForm] = useState({
    nombre: "",
    tipo: "Medicamento",
    cantidad: "",
    vencimiento: "",
    estadoFisico: "Nuevo, sellado",
    ubicacion: "",
  });

  function cambiar(campo, valor) {
    setForm((f) => ({ ...f, [campo]: valor }));
  }

  function enviar(e) {
    e.preventDefault();
    donaciones.unshift({
      id: donaciones.length + 1,
      ...form,
      estado: "Pendiente de validación",
      donante: "Tú",
    });
    setEnviado(true);
  }

  return (
    <AppShell>
      <h1 className="text-xl font-bold text-gray-800 mb-1">Registrar donación</h1>
      <p className="text-sm text-gray-500 mb-6">
        Publica un medicamento o dispositivo médico disponible para donar.
      </p>

      {enviado ? (
        <Card className="text-center py-10">
          <CheckCircle2 className="text-brand-primary mx-auto mb-3" size={44} />
          <p className="font-semibold text-gray-800 mb-1">¡Donación publicada!</p>
          <p className="text-sm text-gray-500 mb-4">
            Tu donación quedó registrada con estado <Badge estado="Pendiente de validación" />.
            Un validador voluntario la revisará antes de habilitarla en el catálogo.
          </p>
          <Button onClick={() => setEnviado(false)}>Registrar otra donación</Button>
        </Card>
      ) : (
        <Card>
          <form onSubmit={enviar} className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-medium text-gray-600">Nombre del medicamento/dispositivo</label>
                <input
                  required
                  value={form.nombre}
                  onChange={(e) => cambiar("nombre", e.target.value)}
                  className="w-full mt-1 px-4 py-2.5 rounded-xl border border-gray-200 text-sm"
                  placeholder="Ej. Acetaminofén 500mg"
                />
              </div>
              <div>
                <label className="text-xs font-medium text-gray-600">Tipo</label>
                <select
                  value={form.tipo}
                  onChange={(e) => cambiar("tipo", e.target.value)}
                  className="w-full mt-1 px-4 py-2.5 rounded-xl border border-gray-200 text-sm"
                >
                  <option>Medicamento</option>
                  <option>Dispositivo médico</option>
                </select>
              </div>
              <div>
                <label className="text-xs font-medium text-gray-600">Cantidad</label>
                <input
                  required
                  type="number"
                  min="1"
                  value={form.cantidad}
                  onChange={(e) => cambiar("cantidad", e.target.value)}
                  className="w-full mt-1 px-4 py-2.5 rounded-xl border border-gray-200 text-sm"
                />
              </div>
              <div>
                <label className="text-xs font-medium text-gray-600">Fecha de vencimiento (si aplica)</label>
                <input
                  type="date"
                  value={form.vencimiento}
                  onChange={(e) => cambiar("vencimiento", e.target.value)}
                  className="w-full mt-1 px-4 py-2.5 rounded-xl border border-gray-200 text-sm"
                />
              </div>
              <div>
                <label className="text-xs font-medium text-gray-600">Estado físico</label>
                <select
                  value={form.estadoFisico}
                  onChange={(e) => cambiar("estadoFisico", e.target.value)}
                  className="w-full mt-1 px-4 py-2.5 rounded-xl border border-gray-200 text-sm"
                >
                  <option>Nuevo, sellado</option>
                  <option>Usado, buen estado</option>
                </select>
              </div>
              <div>
                <label className="text-xs font-medium text-gray-600">Ubicación de entrega</label>
                <input
                  required
                  value={form.ubicacion}
                  onChange={(e) => cambiar("ubicacion", e.target.value)}
                  className="w-full mt-1 px-4 py-2.5 rounded-xl border border-gray-200 text-sm"
                  placeholder="Barrio/comuna, Cali o Yumbo"
                />
              </div>
            </div>

            <div className="border-2 border-dashed border-gray-200 rounded-xl p-6 text-center">
              <UploadCloud className="text-gray-400 mx-auto mb-2" size={28} />
              <p className="text-xs text-gray-500">Arrastra una foto del producto o haz clic para subirla</p>
            </div>

            <Button type="submit" className="w-full">Publicar donación</Button>
          </form>
        </Card>
      )}
    </AppShell>
  );
}
