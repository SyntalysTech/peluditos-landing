"use client";

import { useState } from "react";
import Image from "next/image";

const tabs = [
  { id: "clinic", label: "Clínica" },
  { id: "users", label: "Usuarios" },
  { id: "services", label: "Servicios" },
  { id: "notifications", label: "Notificaciones" },
  { id: "billing", label: "Facturación" },
];

const users = [
  { id: 1, name: "Dr. Antonio Rodríguez", email: "antonio@clinicapeluditos.com", role: "Administrador", status: "active" },
  { id: 2, name: "Dra. María Martínez", email: "maria@clinicapeluditos.com", role: "Veterinario", status: "active" },
  { id: 3, name: "Laura García", email: "laura@clinicapeluditos.com", role: "Recepcionista", status: "active" },
  { id: 4, name: "Carlos Pérez", email: "carlos@clinicapeluditos.com", role: "Auxiliar", status: "inactive" },
];

export default function ConfiguracionPage() {
  const [activeTab, setActiveTab] = useState("clinic");
  const [showUserModal, setShowUserModal] = useState(false);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-light text-black dark:text-white">Configuración</h1>
        <p className="text-black/50 dark:text-white/50 mt-1">Personaliza tu clínica y preferencias</p>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 bg-black/5 dark:bg-white/5 p-1 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-3 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-medium transition-colors whitespace-nowrap ${
              activeTab === tab.id ? "bg-white dark:bg-[#1a1a1a] text-black dark:text-white" : "text-black/50 dark:text-white/50 hover:text-black dark:hover:text-white"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="bg-white dark:bg-[#1a1a1a] border border-black/5 dark:border-white/5">
        {activeTab === "clinic" && (
          <div className="p-4 sm:p-6 space-y-6 sm:space-y-8">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6">
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-[#f68b44]/10 flex items-center justify-center flex-shrink-0">
                <Image
                  src="/logos/favicon.png"
                  alt="Logo"
                  width={60}
                  height={60}
                  className="w-12 h-12 sm:w-16 sm:h-16"
                />
              </div>
              <div className="flex-1 text-center sm:text-left">
                <h3 className="font-medium mb-2 text-black dark:text-white text-sm sm:text-base">Logo de la clínica</h3>
                <p className="text-xs sm:text-sm text-black/50 dark:text-white/50 mb-3 sm:mb-4">Sube el logo de tu clínica. Formato recomendado: PNG o SVG.</p>
                <button className="px-4 py-2 border border-black/10 dark:border-white/10 text-xs sm:text-sm font-medium text-black dark:text-white hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                  Cambiar logo
                </button>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2 text-black dark:text-white">Nombre de la clínica</label>
                <input
                  type="text"
                  defaultValue="Clínica Veterinaria Peluditos"
                  className="w-full px-4 py-3 border border-black/10 dark:border-white/10 bg-white dark:bg-[#242424] text-black dark:text-white focus:outline-none focus:border-[#f68b44]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-black dark:text-white">CIF/NIF</label>
                <input
                  type="text"
                  defaultValue="B12345678"
                  className="w-full px-4 py-3 border border-black/10 dark:border-white/10 bg-white dark:bg-[#242424] text-black dark:text-white focus:outline-none focus:border-[#f68b44]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-black dark:text-white">Teléfono</label>
                <input
                  type="tel"
                  defaultValue="912 345 678"
                  className="w-full px-4 py-3 border border-black/10 dark:border-white/10 bg-white dark:bg-[#242424] text-black dark:text-white focus:outline-none focus:border-[#f68b44]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-black dark:text-white">Email</label>
                <input
                  type="email"
                  defaultValue="info@clinicapeluditos.com"
                  className="w-full px-4 py-3 border border-black/10 dark:border-white/10 bg-white dark:bg-[#242424] text-black dark:text-white focus:outline-none focus:border-[#f68b44]"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-2 text-black dark:text-white">Dirección</label>
                <input
                  type="text"
                  defaultValue="C/ Gran Vía 123, 28013 Madrid"
                  className="w-full px-4 py-3 border border-black/10 dark:border-white/10 bg-white dark:bg-[#242424] text-black dark:text-white focus:outline-none focus:border-[#f68b44]"
                />
              </div>
            </div>

            <div>
              <h3 className="font-medium mb-4 text-black dark:text-white text-sm sm:text-base">Horario de apertura</h3>
              <div className="space-y-3 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-4">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                  <span className="text-xs sm:text-sm text-black dark:text-white sm:w-24">Lunes - Viernes</span>
                  <div className="flex items-center gap-2 sm:gap-4">
                    <input type="time" defaultValue="09:00" className="flex-1 sm:flex-none px-3 py-2 border border-black/10 dark:border-white/10 bg-white dark:bg-[#242424] text-black dark:text-white focus:outline-none focus:border-[#f68b44] text-sm" />
                    <span className="text-black dark:text-white">-</span>
                    <input type="time" defaultValue="20:00" className="flex-1 sm:flex-none px-3 py-2 border border-black/10 dark:border-white/10 bg-white dark:bg-[#242424] text-black dark:text-white focus:outline-none focus:border-[#f68b44] text-sm" />
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                  <span className="text-xs sm:text-sm text-black dark:text-white sm:w-24">Sábados</span>
                  <div className="flex items-center gap-2 sm:gap-4">
                    <input type="time" defaultValue="10:00" className="flex-1 sm:flex-none px-3 py-2 border border-black/10 dark:border-white/10 bg-white dark:bg-[#242424] text-black dark:text-white focus:outline-none focus:border-[#f68b44] text-sm" />
                    <span className="text-black dark:text-white">-</span>
                    <input type="time" defaultValue="14:00" className="flex-1 sm:flex-none px-3 py-2 border border-black/10 dark:border-white/10 bg-white dark:bg-[#242424] text-black dark:text-white focus:outline-none focus:border-[#f68b44] text-sm" />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-end">
              <button className="px-6 py-3 bg-[#f68b44] text-white font-medium hover:bg-[#e07a35] transition-colors">
                Guardar cambios
              </button>
            </div>
          </div>
        )}

        {activeTab === "users" && (
          <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
            <div className="flex items-center justify-between gap-2">
              <h3 className="font-medium text-black dark:text-white text-sm sm:text-base">Equipo de la clínica</h3>
              <button
                onClick={() => setShowUserModal(true)}
                className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 bg-[#f68b44] text-white text-xs sm:text-sm font-medium hover:bg-[#e07a35] transition-colors"
              >
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
                </svg>
                <span className="hidden sm:inline">Añadir usuario</span>
                <span className="sm:hidden">Añadir</span>
              </button>
            </div>

            <div className="divide-y divide-black/5 dark:divide-white/5">
              {users.map((user) => (
                <div key={user.id} className="flex items-center justify-between py-3 sm:py-4 gap-2">
                  <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#f68b44] flex items-center justify-center text-white font-medium text-xs sm:text-sm flex-shrink-0">
                      {user.name.split(" ").slice(0, 2).map(n => n[0]).join("")}
                    </div>
                    <div className="min-w-0">
                      <p className="font-medium text-black dark:text-white text-sm sm:text-base truncate">{user.name}</p>
                      <p className="text-xs sm:text-sm text-black/50 dark:text-white/50 truncate">{user.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
                    <span className="hidden sm:inline-block px-3 py-1 bg-black/5 dark:bg-white/5 text-sm text-black dark:text-white">{user.role}</span>
                    <span className={`px-2 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs font-medium ${
                      user.status === "active" ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" : "bg-black/5 dark:bg-white/5 text-black/50 dark:text-white/50"
                    }`}>
                      {user.status === "active" ? "Activo" : "Inactivo"}
                    </span>
                    <button className="p-1.5 sm:p-2 hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-black/40 dark:text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "services" && (
          <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
            <div className="flex items-center justify-between gap-2">
              <h3 className="font-medium text-black dark:text-white text-sm sm:text-base">Servicios y precios</h3>
              <button className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 bg-[#f68b44] text-white text-xs sm:text-sm font-medium hover:bg-[#e07a35] transition-colors">
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
                </svg>
                <span className="hidden sm:inline">Añadir servicio</span>
                <span className="sm:hidden">Añadir</span>
              </button>
            </div>

            <div className="divide-y divide-black/5 dark:divide-white/5">
              {[
                { name: "Consulta general", price: "35.00€", duration: "30 min" },
                { name: "Vacunación", price: "45.00€", duration: "15 min" },
                { name: "Cirugía menor", price: "150.00€", duration: "60 min" },
                { name: "Cirugía mayor", price: "350.00€", duration: "120 min" },
                { name: "Radiografía", price: "65.00€", duration: "20 min" },
                { name: "Ecografía", price: "85.00€", duration: "30 min" },
                { name: "Limpieza dental", price: "120.00€", duration: "45 min" },
              ].map((service, i) => (
                <div key={i} className="flex items-center justify-between py-3 sm:py-4 gap-2">
                  <div className="min-w-0">
                    <p className="font-medium text-black dark:text-white text-sm sm:text-base truncate">{service.name}</p>
                    <p className="text-xs sm:text-sm text-black/50 dark:text-white/50">{service.duration}</p>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
                    <span className="font-medium text-[#f68b44] text-sm sm:text-base">{service.price}</span>
                    <button className="p-1.5 sm:p-2 hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-black/40 dark:text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "notifications" && (
          <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
            <h3 className="font-medium text-black dark:text-white text-sm sm:text-base">Preferencias de notificaciones</h3>

            <div className="space-y-3 sm:space-y-4">
              {[
                { label: "Recordatorio de citas (24h antes)", sublabel: "Enviar SMS/Email a clientes", enabled: true },
                { label: "Recordatorio de citas (1h antes)", sublabel: "Enviar SMS/Email a clientes", enabled: true },
                { label: "Confirmación de cita", sublabel: "Email al crear una cita", enabled: true },
                { label: "Recordatorio de vacunas", sublabel: "Avisar cuando toque revacunación", enabled: true },
                { label: "Stock bajo", sublabel: "Notificar cuando un producto esté bajo mínimos", enabled: true },
                { label: "Nuevas facturas pendientes", sublabel: "Resumen diario de facturas sin pagar", enabled: false },
              ].map((notif, i) => (
                <div key={i} className="flex items-center justify-between gap-3 py-2 sm:py-3 border-b border-black/5 dark:border-white/5 last:border-b-0">
                  <div className="min-w-0">
                    <p className="font-medium text-black dark:text-white text-xs sm:text-sm">{notif.label}</p>
                    <p className="text-[10px] sm:text-sm text-black/50 dark:text-white/50 truncate">{notif.sublabel}</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer flex-shrink-0">
                    <input type="checkbox" defaultChecked={notif.enabled} className="sr-only peer" />
                    <div className="w-9 h-5 sm:w-11 sm:h-6 bg-black/10 dark:bg-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 sm:after:h-5 sm:after:w-5 after:transition-all peer-checked:bg-[#f68b44]"></div>
                  </label>
                </div>
              ))}
            </div>

            <div className="flex justify-end">
              <button className="w-full sm:w-auto px-6 py-2.5 sm:py-3 bg-[#f68b44] text-white text-sm sm:text-base font-medium hover:bg-[#e07a35] transition-colors">
                Guardar preferencias
              </button>
            </div>
          </div>
        )}

        {activeTab === "billing" && (
          <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
            <h3 className="font-medium text-black dark:text-white text-sm sm:text-base">Configuración de facturación</h3>

            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label className="block text-xs sm:text-sm font-medium mb-2 text-black dark:text-white">Prefijo de factura</label>
                <input
                  type="text"
                  defaultValue="F-2025-"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-black/10 dark:border-white/10 bg-white dark:bg-[#242424] text-black dark:text-white focus:outline-none focus:border-[#f68b44] text-sm"
                />
              </div>
              <div>
                <label className="block text-xs sm:text-sm font-medium mb-2 text-black dark:text-white">Siguiente número</label>
                <input
                  type="number"
                  defaultValue="848"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-black/10 dark:border-white/10 bg-white dark:bg-[#242424] text-black dark:text-white focus:outline-none focus:border-[#f68b44] text-sm"
                />
              </div>
              <div>
                <label className="block text-xs sm:text-sm font-medium mb-2 text-black dark:text-white">IVA por defecto (%)</label>
                <input
                  type="number"
                  defaultValue="21"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-black/10 dark:border-white/10 bg-white dark:bg-[#242424] text-black dark:text-white focus:outline-none focus:border-[#f68b44] text-sm"
                />
              </div>
              <div>
                <label className="block text-xs sm:text-sm font-medium mb-2 text-black dark:text-white">Moneda</label>
                <select className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-black/10 dark:border-white/10 bg-white dark:bg-[#242424] text-black dark:text-white focus:outline-none focus:border-[#f68b44] text-sm">
                  <option>EUR (€)</option>
                  <option>USD ($)</option>
                  <option>GBP (£)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-medium mb-2 text-black dark:text-white">Condiciones de pago (pie de factura)</label>
              <textarea
                rows={3}
                defaultValue="Pago al contado o tarjeta. Para transferencias: ES12 1234 5678 9012 3456 7890"
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-black/10 dark:border-white/10 bg-white dark:bg-[#242424] text-black dark:text-white focus:outline-none focus:border-[#f68b44] resize-none text-sm"
              />
            </div>

            <div className="flex justify-end">
              <button className="w-full sm:w-auto px-6 py-2.5 sm:py-3 bg-[#f68b44] text-white text-sm sm:text-base font-medium hover:bg-[#e07a35] transition-colors">
                Guardar configuración
              </button>
            </div>
          </div>
        )}
      </div>

      {/* User Modal */}
      {showUserModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-[#1a1a1a] w-full max-w-md">
            <div className="flex items-center justify-between p-6 border-b border-black/5 dark:border-white/5">
              <h2 className="text-lg font-medium text-black dark:text-white">Añadir usuario</h2>
              <button onClick={() => setShowUserModal(false)} className="p-2 hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                <svg className="w-5 h-5 text-black dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2 text-black dark:text-white">Nombre completo</label>
                <input type="text" className="w-full px-4 py-3 border border-black/10 dark:border-white/10 bg-white dark:bg-[#242424] text-black dark:text-white focus:outline-none focus:border-[#f68b44]" placeholder="Nombre y apellidos" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-black dark:text-white">Email</label>
                <input type="email" className="w-full px-4 py-3 border border-black/10 dark:border-white/10 bg-white dark:bg-[#242424] text-black dark:text-white focus:outline-none focus:border-[#f68b44]" placeholder="email@ejemplo.com" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-black dark:text-white">Rol</label>
                <select className="w-full px-4 py-3 border border-black/10 dark:border-white/10 bg-white dark:bg-[#242424] text-black dark:text-white focus:outline-none focus:border-[#f68b44]">
                  <option>Veterinario</option>
                  <option>Auxiliar</option>
                  <option>Recepcionista</option>
                  <option>Administrador</option>
                </select>
              </div>
            </div>
            <div className="flex justify-end gap-3 p-6 border-t border-black/5 dark:border-white/5">
              <button onClick={() => setShowUserModal(false)} className="px-6 py-3 border border-black/10 dark:border-white/10 text-black dark:text-white font-medium hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                Cancelar
              </button>
              <button onClick={() => setShowUserModal(false)} className="px-6 py-3 bg-[#f68b44] text-white font-medium hover:bg-[#e07a35] transition-colors">
                Añadir usuario
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
