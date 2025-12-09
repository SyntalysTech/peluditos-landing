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
        <h1 className="text-2xl font-light">Configuración</h1>
        <p className="text-black/50 mt-1">Personaliza tu clínica y preferencias</p>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 bg-black/5 p-1 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-3 font-medium transition-colors whitespace-nowrap ${
              activeTab === tab.id ? "bg-white text-black" : "text-black/50 hover:text-black"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="bg-white border border-black/5">
        {activeTab === "clinic" && (
          <div className="p-6 space-y-8">
            <div className="flex items-start gap-6">
              <div className="w-24 h-24 bg-[#f68b44]/10 flex items-center justify-center">
                <Image
                  src="/logos/favicon.png"
                  alt="Logo"
                  width={60}
                  height={60}
                  className="w-16 h-16"
                />
              </div>
              <div className="flex-1">
                <h3 className="font-medium mb-2">Logo de la clínica</h3>
                <p className="text-sm text-black/50 mb-4">Sube el logo de tu clínica. Formato recomendado: PNG o SVG.</p>
                <button className="px-4 py-2 border border-black/10 text-sm font-medium hover:bg-black/5 transition-colors">
                  Cambiar logo
                </button>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Nombre de la clínica</label>
                <input
                  type="text"
                  defaultValue="Clínica Veterinaria Peluditos"
                  className="w-full px-4 py-3 border border-black/10 focus:outline-none focus:border-[#f68b44]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">CIF/NIF</label>
                <input
                  type="text"
                  defaultValue="B12345678"
                  className="w-full px-4 py-3 border border-black/10 focus:outline-none focus:border-[#f68b44]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Teléfono</label>
                <input
                  type="tel"
                  defaultValue="912 345 678"
                  className="w-full px-4 py-3 border border-black/10 focus:outline-none focus:border-[#f68b44]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  defaultValue="info@clinicapeluditos.com"
                  className="w-full px-4 py-3 border border-black/10 focus:outline-none focus:border-[#f68b44]"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-2">Dirección</label>
                <input
                  type="text"
                  defaultValue="C/ Gran Vía 123, 28013 Madrid"
                  className="w-full px-4 py-3 border border-black/10 focus:outline-none focus:border-[#f68b44]"
                />
              </div>
            </div>

            <div>
              <h3 className="font-medium mb-4">Horario de apertura</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center gap-4">
                  <span className="w-24 text-sm">Lunes - Viernes</span>
                  <input type="time" defaultValue="09:00" className="px-3 py-2 border border-black/10 focus:outline-none focus:border-[#f68b44]" />
                  <span>-</span>
                  <input type="time" defaultValue="20:00" className="px-3 py-2 border border-black/10 focus:outline-none focus:border-[#f68b44]" />
                </div>
                <div className="flex items-center gap-4">
                  <span className="w-24 text-sm">Sábados</span>
                  <input type="time" defaultValue="10:00" className="px-3 py-2 border border-black/10 focus:outline-none focus:border-[#f68b44]" />
                  <span>-</span>
                  <input type="time" defaultValue="14:00" className="px-3 py-2 border border-black/10 focus:outline-none focus:border-[#f68b44]" />
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
          <div className="p-6 space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="font-medium">Equipo de la clínica</h3>
              <button
                onClick={() => setShowUserModal(true)}
                className="flex items-center gap-2 px-4 py-2 bg-[#f68b44] text-white text-sm font-medium hover:bg-[#e07a35] transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
                </svg>
                Añadir usuario
              </button>
            </div>

            <div className="divide-y divide-black/5">
              {users.map((user) => (
                <div key={user.id} className="flex items-center justify-between py-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#f68b44] flex items-center justify-center text-white font-medium">
                      {user.name.split(" ").slice(0, 2).map(n => n[0]).join("")}
                    </div>
                    <div>
                      <p className="font-medium">{user.name}</p>
                      <p className="text-sm text-black/50">{user.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="px-3 py-1 bg-black/5 text-sm">{user.role}</span>
                    <span className={`px-3 py-1 text-xs font-medium ${
                      user.status === "active" ? "bg-green-100 text-green-700" : "bg-black/5 text-black/50"
                    }`}>
                      {user.status === "active" ? "Activo" : "Inactivo"}
                    </span>
                    <button className="p-2 hover:bg-black/5 transition-colors">
                      <svg className="w-5 h-5 text-black/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
          <div className="p-6 space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="font-medium">Servicios y precios</h3>
              <button className="flex items-center gap-2 px-4 py-2 bg-[#f68b44] text-white text-sm font-medium hover:bg-[#e07a35] transition-colors">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
                </svg>
                Añadir servicio
              </button>
            </div>

            <div className="divide-y divide-black/5">
              {[
                { name: "Consulta general", price: "35.00€", duration: "30 min" },
                { name: "Vacunación", price: "45.00€", duration: "15 min" },
                { name: "Cirugía menor", price: "150.00€", duration: "60 min" },
                { name: "Cirugía mayor", price: "350.00€", duration: "120 min" },
                { name: "Radiografía", price: "65.00€", duration: "20 min" },
                { name: "Ecografía", price: "85.00€", duration: "30 min" },
                { name: "Limpieza dental", price: "120.00€", duration: "45 min" },
              ].map((service, i) => (
                <div key={i} className="flex items-center justify-between py-4">
                  <div>
                    <p className="font-medium">{service.name}</p>
                    <p className="text-sm text-black/50">Duración: {service.duration}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="font-medium text-[#f68b44]">{service.price}</span>
                    <button className="p-2 hover:bg-black/5 transition-colors">
                      <svg className="w-5 h-5 text-black/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
          <div className="p-6 space-y-6">
            <h3 className="font-medium">Preferencias de notificaciones</h3>

            <div className="space-y-4">
              {[
                { label: "Recordatorio de citas (24h antes)", sublabel: "Enviar SMS/Email a clientes", enabled: true },
                { label: "Recordatorio de citas (1h antes)", sublabel: "Enviar SMS/Email a clientes", enabled: true },
                { label: "Confirmación de cita", sublabel: "Email al crear una cita", enabled: true },
                { label: "Recordatorio de vacunas", sublabel: "Avisar cuando toque revacunación", enabled: true },
                { label: "Stock bajo", sublabel: "Notificar cuando un producto esté bajo mínimos", enabled: true },
                { label: "Nuevas facturas pendientes", sublabel: "Resumen diario de facturas sin pagar", enabled: false },
              ].map((notif, i) => (
                <div key={i} className="flex items-center justify-between py-3 border-b border-black/5 last:border-b-0">
                  <div>
                    <p className="font-medium">{notif.label}</p>
                    <p className="text-sm text-black/50">{notif.sublabel}</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" defaultChecked={notif.enabled} className="sr-only peer" />
                    <div className="w-11 h-6 bg-black/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#f68b44]"></div>
                  </label>
                </div>
              ))}
            </div>

            <div className="flex justify-end">
              <button className="px-6 py-3 bg-[#f68b44] text-white font-medium hover:bg-[#e07a35] transition-colors">
                Guardar preferencias
              </button>
            </div>
          </div>
        )}

        {activeTab === "billing" && (
          <div className="p-6 space-y-6">
            <h3 className="font-medium">Configuración de facturación</h3>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Prefijo de factura</label>
                <input
                  type="text"
                  defaultValue="F-2025-"
                  className="w-full px-4 py-3 border border-black/10 focus:outline-none focus:border-[#f68b44]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Siguiente número</label>
                <input
                  type="number"
                  defaultValue="848"
                  className="w-full px-4 py-3 border border-black/10 focus:outline-none focus:border-[#f68b44]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">IVA por defecto (%)</label>
                <input
                  type="number"
                  defaultValue="21"
                  className="w-full px-4 py-3 border border-black/10 focus:outline-none focus:border-[#f68b44]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Moneda</label>
                <select className="w-full px-4 py-3 border border-black/10 focus:outline-none focus:border-[#f68b44]">
                  <option>EUR (€)</option>
                  <option>USD ($)</option>
                  <option>GBP (£)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Condiciones de pago (pie de factura)</label>
              <textarea
                rows={3}
                defaultValue="Pago al contado o tarjeta. Para transferencias: ES12 1234 5678 9012 3456 7890"
                className="w-full px-4 py-3 border border-black/10 focus:outline-none focus:border-[#f68b44] resize-none"
              />
            </div>

            <div className="flex justify-end">
              <button className="px-6 py-3 bg-[#f68b44] text-white font-medium hover:bg-[#e07a35] transition-colors">
                Guardar configuración
              </button>
            </div>
          </div>
        )}
      </div>

      {/* User Modal */}
      {showUserModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-md">
            <div className="flex items-center justify-between p-6 border-b border-black/5">
              <h2 className="text-lg font-medium">Añadir usuario</h2>
              <button onClick={() => setShowUserModal(false)} className="p-2 hover:bg-black/5 transition-colors">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Nombre completo</label>
                <input type="text" className="w-full px-4 py-3 border border-black/10 focus:outline-none focus:border-[#f68b44]" placeholder="Nombre y apellidos" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input type="email" className="w-full px-4 py-3 border border-black/10 focus:outline-none focus:border-[#f68b44]" placeholder="email@ejemplo.com" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Rol</label>
                <select className="w-full px-4 py-3 border border-black/10 focus:outline-none focus:border-[#f68b44]">
                  <option>Veterinario</option>
                  <option>Auxiliar</option>
                  <option>Recepcionista</option>
                  <option>Administrador</option>
                </select>
              </div>
            </div>
            <div className="flex justify-end gap-3 p-6 border-t border-black/5">
              <button onClick={() => setShowUserModal(false)} className="px-6 py-3 border border-black/10 font-medium hover:bg-black/5 transition-colors">
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
