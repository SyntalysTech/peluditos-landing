"use client";

import Link from "next/link";

const stats = [
  { label: "Citas hoy", value: "12", change: "+3", positive: true },
  { label: "Pacientes activos", value: "847", change: "+24", positive: true },
  { label: "Ingresos mes", value: "18.450€", change: "+12%", positive: true },
  { label: "Pendiente cobro", value: "2.340€", change: "-8%", positive: false },
];

const todayAppointments = [
  { time: "09:00", pet: "Luna", owner: "María García", type: "Vacunación", status: "confirmed" },
  { time: "09:30", pet: "Max", owner: "Carlos López", type: "Revisión", status: "confirmed" },
  { time: "10:00", pet: "Coco", owner: "Ana Martínez", type: "Cirugía menor", status: "in_progress" },
  { time: "11:00", pet: "Toby", owner: "Pedro Sánchez", type: "Consulta", status: "pending" },
  { time: "11:30", pet: "Michi", owner: "Laura Fernández", type: "Desparasitación", status: "pending" },
  { time: "12:00", pet: "Rocky", owner: "Juan Rodríguez", type: "Radiografía", status: "pending" },
];

const recentPatients = [
  { name: "Luna", species: "Perro", breed: "Golden Retriever", owner: "María García", lastVisit: "Hoy" },
  { name: "Michi", species: "Gato", breed: "Siamés", owner: "Laura Fernández", lastVisit: "Ayer" },
  { name: "Rocky", species: "Perro", breed: "Bulldog Francés", owner: "Juan Rodríguez", lastVisit: "Hace 2 días" },
  { name: "Nala", species: "Gato", breed: "Persa", owner: "Carmen Díaz", lastVisit: "Hace 3 días" },
];

const lowStockItems = [
  { name: "Vacuna antirrábica", stock: 5, min: 10 },
  { name: "Amoxicilina 250mg", stock: 12, min: 20 },
  { name: "Jeringuillas 5ml", stock: 45, min: 100 },
];

export default function DemoDashboard() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-light text-black dark:text-white">Buenos días, <span className="font-medium">Dr. Rodríguez</span></h1>
          <p className="text-black/50 dark:text-white/50 mt-1">Miércoles, 5 de diciembre de 2025</p>
        </div>
        <Link
          href="/demo/agenda"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#f68b44] text-white font-medium hover:bg-[#e07a35] transition-colors"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
          </svg>
          Nueva cita
        </Link>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white dark:bg-[#1a1a1a] p-6 border border-black/5 dark:border-white/5">
            <p className="text-sm text-black/50 dark:text-white/50">{stat.label}</p>
            <p className="text-3xl font-light mt-2 text-black dark:text-white">{stat.value}</p>
            <p className={`text-sm mt-2 ${stat.positive ? "text-green-600 dark:text-green-400" : "text-red-500 dark:text-red-400"}`}>
              {stat.change} vs. mes anterior
            </p>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Today's appointments */}
        <div className="lg:col-span-2 bg-white dark:bg-[#1a1a1a] border border-black/5 dark:border-white/5">
          <div className="flex items-center justify-between p-6 border-b border-black/5 dark:border-white/5">
            <h2 className="font-medium text-black dark:text-white">Citas de hoy</h2>
            <Link href="/demo/agenda" className="text-sm text-[#f68b44] hover:underline">
              Ver todas
            </Link>
          </div>
          <div className="divide-y divide-black/5 dark:divide-white/5">
            {todayAppointments.map((apt, i) => (
              <div key={i} className="flex items-center gap-4 p-4 hover:bg-black/[0.02] dark:hover:bg-white/[0.02] transition-colors">
                <div className="text-center min-w-[60px]">
                  <p className="text-lg font-medium text-black dark:text-white">{apt.time}</p>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium truncate text-black dark:text-white">{apt.pet}</p>
                  <p className="text-sm text-black/50 dark:text-white/50 truncate">{apt.owner}</p>
                </div>
                <div className="hidden sm:block text-sm text-black/60 dark:text-white/60">
                  {apt.type}
                </div>
                <div>
                  <span className={`inline-block px-3 py-1 text-xs font-medium ${
                    apt.status === "confirmed" ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400" :
                    apt.status === "in_progress" ? "bg-[#f68b44]/10 text-[#f68b44]" :
                    "bg-black/5 dark:bg-white/5 text-black/50 dark:text-white/50"
                  }`}>
                    {apt.status === "confirmed" ? "Confirmada" :
                     apt.status === "in_progress" ? "En curso" : "Pendiente"}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar widgets */}
        <div className="space-y-6">
          {/* Recent patients */}
          <div className="bg-white dark:bg-[#1a1a1a] border border-black/5 dark:border-white/5">
            <div className="flex items-center justify-between p-6 border-b border-black/5 dark:border-white/5">
              <h2 className="font-medium text-black dark:text-white">Pacientes recientes</h2>
              <Link href="/demo/pacientes" className="text-sm text-[#f68b44] hover:underline">
                Ver todos
              </Link>
            </div>
            <div className="divide-y divide-black/5 dark:divide-white/5">
              {recentPatients.map((patient, i) => (
                <div key={i} className="flex items-center gap-3 p-4 hover:bg-black/[0.02] dark:hover:bg-white/[0.02] transition-colors">
                  <div className="w-10 h-10 rounded-full bg-[#f68b44]/10 flex items-center justify-center text-[#f68b44]">
                    {patient.species === "Perro" ? "🐕" : "🐈"}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm truncate text-black dark:text-white">{patient.name}</p>
                    <p className="text-xs text-black/50 dark:text-white/50 truncate">{patient.breed}</p>
                  </div>
                  <p className="text-xs text-black/40 dark:text-white/40">{patient.lastVisit}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Low stock alert */}
          <div className="bg-white dark:bg-[#1a1a1a] border border-black/5 dark:border-white/5">
            <div className="flex items-center justify-between p-6 border-b border-black/5 dark:border-white/5">
              <h2 className="font-medium text-black dark:text-white">Stock bajo</h2>
              <Link href="/demo/inventario" className="text-sm text-[#f68b44] hover:underline">
                Ver inventario
              </Link>
            </div>
            <div className="divide-y divide-black/5 dark:divide-white/5">
              {lowStockItems.map((item, i) => (
                <div key={i} className="flex items-center justify-between p-4">
                  <div>
                    <p className="font-medium text-sm text-black dark:text-white">{item.name}</p>
                    <p className="text-xs text-black/50 dark:text-white/50">Mín: {item.min} uds</p>
                  </div>
                  <span className="px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 text-xs font-medium">
                    {item.stock} uds
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Quick actions */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Link href="/demo/pacientes" className="flex flex-col items-center gap-3 p-6 bg-white dark:bg-[#1a1a1a] border border-black/5 dark:border-white/5 hover:border-[#f68b44]/30 transition-colors group">
          <div className="w-12 h-12 rounded-full bg-[#f68b44]/10 flex items-center justify-center text-[#f68b44] group-hover:bg-[#f68b44] group-hover:text-white transition-colors">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
            </svg>
          </div>
          <span className="text-sm font-medium text-black dark:text-white">Nuevo paciente</span>
        </Link>
        <Link href="/demo/clientes" className="flex flex-col items-center gap-3 p-6 bg-white dark:bg-[#1a1a1a] border border-black/5 dark:border-white/5 hover:border-[#f68b44]/30 transition-colors group">
          <div className="w-12 h-12 rounded-full bg-[#f68b44]/10 flex items-center justify-center text-[#f68b44] group-hover:bg-[#f68b44] group-hover:text-white transition-colors">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
            </svg>
          </div>
          <span className="text-sm font-medium text-black dark:text-white">Nuevo cliente</span>
        </Link>
        <Link href="/demo/facturacion" className="flex flex-col items-center gap-3 p-6 bg-white dark:bg-[#1a1a1a] border border-black/5 dark:border-white/5 hover:border-[#f68b44]/30 transition-colors group">
          <div className="w-12 h-12 rounded-full bg-[#f68b44]/10 flex items-center justify-center text-[#f68b44] group-hover:bg-[#f68b44] group-hover:text-white transition-colors">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z" />
            </svg>
          </div>
          <span className="text-sm font-medium text-black dark:text-white">Nueva factura</span>
        </Link>
        <Link href="/demo/historial" className="flex flex-col items-center gap-3 p-6 bg-white dark:bg-[#1a1a1a] border border-black/5 dark:border-white/5 hover:border-[#f68b44]/30 transition-colors group">
          <div className="w-12 h-12 rounded-full bg-[#f68b44]/10 flex items-center justify-center text-[#f68b44] group-hover:bg-[#f68b44] group-hover:text-white transition-colors">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <span className="text-sm font-medium text-black dark:text-white">Nuevo historial</span>
        </Link>
      </div>
    </div>
  );
}
