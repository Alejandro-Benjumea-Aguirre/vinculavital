const styles = {
  "Aprobada": "bg-green-100 text-green-700",
  "Pendiente de validación": "bg-orange-100 text-orange-700",
  "Rechazada": "bg-red-100 text-red-700",
  "Entregado": "bg-green-100 text-green-700",
  "En camino de entrega": "bg-blue-100 text-blue-700",
  "Solicitado": "bg-orange-100 text-orange-700",
  "Asignado": "bg-blue-100 text-blue-700",
};

export default function Badge({ estado }) {
  const cls = styles[estado] || "bg-gray-100 text-gray-700";
  return (
    <span className={`text-xs font-semibold px-3 py-1 rounded-full ${cls}`}>
      {estado}
    </span>
  );
}
