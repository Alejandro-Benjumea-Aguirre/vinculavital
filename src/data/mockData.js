export const ROLES = {
  DONANTE: "donante",
  BENEFICIARIO: "beneficiario",
  VALIDADOR: "validador",
  ADMIN: "admin",
};

export const ROLE_LABELS = {
  [ROLES.DONANTE]: "Donante",
  [ROLES.BENEFICIARIO]: "Beneficiario / ONG",
  [ROLES.VALIDADOR]: "Validador voluntario",
  [ROLES.ADMIN]: "Equipo de desarrollo",
};

export let donaciones = [
  {
    id: 1,
    nombre: "Acetaminofén 500mg",
    tipo: "Medicamento",
    cantidad: 30,
    vencimiento: "2027-03-15",
    estado: "Aprobada",
    estadoFisico: "Nuevo, sellado",
    ubicacion: "Comuna 2, Cali",
    donante: "María Fernanda López",
  },
  {
    id: 2,
    nombre: "Glucómetro digital",
    tipo: "Dispositivo médico",
    cantidad: 1,
    vencimiento: "N/A",
    estado: "Pendiente de validación",
    estadoFisico: "Usado, buen estado",
    ubicacion: "Yumbo, Valle del Cauca",
    donante: "Carlos Andrés Ortiz",
  },
  {
    id: 3,
    nombre: "Insulina NPH",
    tipo: "Medicamento",
    cantidad: 5,
    vencimiento: "2026-12-01",
    estado: "Pendiente de validación",
    estadoFisico: "Nuevo, refrigerado",
    ubicacion: "Comuna 15, Cali",
    donante: "Luisa Fernanda Gómez",
  },
  {
    id: 4,
    nombre: "Tensiómetro digital",
    tipo: "Dispositivo médico",
    cantidad: 2,
    vencimiento: "N/A",
    estado: "Aprobada",
    estadoFisico: "Nuevo",
    ubicacion: "Comuna 6, Cali",
    donante: "Jorge Iván Pérez",
  },
  {
    id: 5,
    nombre: "Amoxicilina 500mg",
    tipo: "Medicamento",
    cantidad: 20,
    vencimiento: "2025-09-10",
    estado: "Rechazada",
    estadoFisico: "Vencida",
    ubicacion: "Yumbo, Valle del Cauca",
    donante: "Sandra Milena Ruiz",
  },
];

export let solicitudes = [
  {
    id: 1,
    donacionId: 1,
    nombre: "Acetaminofén 500mg",
    beneficiario: "Fundación Manos Unidas",
    estado: "Entregado",
    pasos: ["Solicitado", "Asignado", "En camino de entrega", "Entregado"],
    pasoActual: 3,
    fecha: "2026-10-20",
  },
  {
    id: 2,
    donacionId: 4,
    nombre: "Tensiómetro digital",
    beneficiario: "Fundación Manos Unidas",
    estado: "En camino de entrega",
    pasos: ["Solicitado", "Asignado", "En camino de entrega", "Entregado"],
    pasoActual: 2,
    fecha: "2026-10-28",
  },
  {
    id: 3,
    donacionId: 1,
    nombre: "Acetaminofén 500mg",
    beneficiario: "JAC Barrio El Vergel",
    estado: "Solicitado",
    pasos: ["Solicitado", "Asignado", "En camino de entrega", "Entregado"],
    pasoActual: 0,
    fecha: "2026-11-01",
  },
];

export const resumenAdmin = {
  totalDonaciones: donaciones.length,
  validadas: donaciones.filter((d) => d.estado === "Aprobada").length,
  pendientes: donaciones.filter((d) => d.estado === "Pendiente de validación").length,
  solicitudesActivas: solicitudes.filter((s) => s.estado !== "Entregado").length,
};
