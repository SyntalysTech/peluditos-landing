"use client";

import { useState } from "react";

const clients = [
  { id: 1, name: "María García", email: "maria.garcia@email.com", phone: "612 345 678", address: "C/ Gran Vía 45, Madrid", pets: ["Luna"], totalSpent: "1.245€", lastVisit: "05/12/2025" },
  { id: 2, name: "Carlos López", email: "carlos.lopez@email.com", phone: "623 456 789", address: "Av. Diagonal 123, Barcelona", pets: ["Max"], totalSpent: "890€", lastVisit: "03/12/2025" },
  { id: 3, name: "Laura Fernández", email: "laura.fernandez@email.com", phone: "634 567 890", address: "C/ Sierpes 78, Sevilla", pets: ["Michi", "Pelusa"], totalSpent: "2.100€", lastVisit: "01/12/2025" },
  { id: 4, name: "Ana Martínez", email: "ana.martinez@email.com", phone: "645 678 901", address: "C/ Colón 34, Valencia", pets: ["Coco"], totalSpent: "567€", lastVisit: "28/11/2025" },
  { id: 5, name: "Carmen Díaz", email: "carmen.diaz@email.com", phone: "656 789 012", address: "C/ Larios 56, Málaga", pets: ["Nala"], totalSpent: "1.890€", lastVisit: "25/11/2025" },
  { id: 6, name: "Pedro Sánchez", email: "pedro.sanchez@email.com", phone: "667 890 123", address: "Gran Vía 89, Bilbao", pets: ["Toby"], totalSpent: "345€", lastVisit: "20/11/2025" },
  { id: 7, name: "Juan Rodríguez", email: "juan.rodriguez@email.com", phone: "678 901 234", address: "C/ Alfonso X 12, Murcia", pets: ["Rocky", "Firulais"], totalSpent: "3.200€", lastVisit: "15/11/2025" },
  { id: 8, name: "Sofía Ruiz", email: "sofia.ruiz@email.com", phone: "689 012 345", address: "Paseo de Gracia 67, Barcelona", pets: ["Kiara"], totalSpent: "780€", lastVisit: "10/11/2025" },
];

export default function ClientesPage() {
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedClient, setSelectedClient] = useState<typeof clients[0] | null>(null);

  const filteredClients = clients.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase()) ||
    c.email.toLowerCase().includes(search.toLowerCase()) ||
    c.phone.includes(search)
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-light">Clientes</h1>
          <p className="text-black/50 mt-1">{clients.length} clientes registrados</p>
        </div>
        <button
          onClick={() => { setSelectedClient(null); setShowModal(true); }}
          className="flex items-center gap-2 px-6 py-3 bg-[#f68b44] text-white font-medium hover:bg-[#e07a35] transition-colors"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
          </svg>
          Nuevo cliente
        </button>
      </div>

      {/* Search */}
      <div className="relative">
        <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-black/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input
          type="text"
          placeholder="Buscar por nombre, email o teléfono..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-10 pr-4 py-3 border border-black/10 focus:outline-none focus:border-[#f68b44]"
        />
      </div>

      {/* Cards grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredClients.map((client) => (
          <div
            key={client.id}
            className="bg-white border border-black/5 p-6 hover:border-[#f68b44]/30 transition-colors cursor-pointer"
            onClick={() => { setSelectedClient(client); setShowModal(true); }}
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[#f68b44] flex items-center justify-center text-white font-medium">
                  {client.name.split(" ").map(n => n[0]).join("")}
                </div>
                <div>
                  <h3 className="font-medium">{client.name}</h3>
                  <p className="text-sm text-black/50">{client.email}</p>
                </div>
              </div>
            </div>

            <div className="mt-4 space-y-2">
              <div className="flex items-center gap-2 text-sm text-black/60">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {client.phone}
              </div>
              <div className="flex items-center gap-2 text-sm text-black/60">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="truncate">{client.address}</span>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-black/5 flex items-center justify-between">
              <div>
                <p className="text-xs text-black/40">Mascotas</p>
                <p className="text-sm font-medium">{client.pets.join(", ")}</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-black/40">Total gastado</p>
                <p className="text-sm font-medium text-[#f68b44]">{client.totalSpent}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between p-6 border-b border-black/5 sticky top-0 bg-white">
              <h2 className="text-lg font-medium">
                {selectedClient ? selectedClient.name : "Nuevo cliente"}
              </h2>
              <button onClick={() => setShowModal(false)} className="p-2 hover:bg-black/5 transition-colors">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-6 space-y-6">
              {selectedClient && (
                <div className="flex items-center gap-4 p-4 bg-[#f68b44]/5 border border-[#f68b44]/20">
                  <div className="w-16 h-16 rounded-full bg-[#f68b44] flex items-center justify-center text-white text-xl font-medium">
                    {selectedClient.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div>
                    <h3 className="text-xl font-medium">{selectedClient.name}</h3>
                    <p className="text-black/50">Cliente desde hace 2 años</p>
                  </div>
                </div>
              )}

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Nombre completo</label>
                  <input
                    type="text"
                    defaultValue={selectedClient?.name}
                    className="w-full px-4 py-3 border border-black/10 focus:outline-none focus:border-[#f68b44]"
                    placeholder="Nombre y apellidos"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    defaultValue={selectedClient?.email}
                    className="w-full px-4 py-3 border border-black/10 focus:outline-none focus:border-[#f68b44]"
                    placeholder="email@ejemplo.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Teléfono</label>
                  <input
                    type="tel"
                    defaultValue={selectedClient?.phone}
                    className="w-full px-4 py-3 border border-black/10 focus:outline-none focus:border-[#f68b44]"
                    placeholder="612 345 678"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">DNI/NIF</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-black/10 focus:outline-none focus:border-[#f68b44]"
                    placeholder="12345678A"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Dirección</label>
                <input
                  type="text"
                  defaultValue={selectedClient?.address}
                  className="w-full px-4 py-3 border border-black/10 focus:outline-none focus:border-[#f68b44]"
                  placeholder="Dirección completa"
                />
              </div>

              {selectedClient && (
                <div>
                  <label className="block text-sm font-medium mb-2">Mascotas</label>
                  <div className="flex flex-wrap gap-2">
                    {selectedClient.pets.map((pet) => (
                      <span key={pet} className="px-4 py-2 bg-[#f68b44]/10 text-[#f68b44] font-medium">
                        {pet}
                      </span>
                    ))}
                    <button className="px-4 py-2 border border-dashed border-black/20 text-black/50 hover:border-[#f68b44] hover:text-[#f68b44] transition-colors">
                      + Añadir mascota
                    </button>
                  </div>
                </div>
              )}

              <div>
                <label className="block text-sm font-medium mb-2">Notas</label>
                <textarea
                  rows={3}
                  className="w-full px-4 py-3 border border-black/10 focus:outline-none focus:border-[#f68b44] resize-none"
                  placeholder="Notas adicionales sobre el cliente..."
                />
              </div>

              {selectedClient && (
                <div className="grid grid-cols-3 gap-4 p-4 bg-black/[0.02]">
                  <div className="text-center">
                    <p className="text-2xl font-light text-[#f68b44]">{selectedClient.totalSpent}</p>
                    <p className="text-xs text-black/50 mt-1">Total gastado</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-light">{selectedClient.pets.length}</p>
                    <p className="text-xs text-black/50 mt-1">Mascotas</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-light">12</p>
                    <p className="text-xs text-black/50 mt-1">Visitas totales</p>
                  </div>
                </div>
              )}
            </div>
            <div className="flex justify-end gap-3 p-6 border-t border-black/5">
              <button onClick={() => setShowModal(false)} className="px-6 py-3 border border-black/10 font-medium hover:bg-black/5 transition-colors">
                Cancelar
              </button>
              <button onClick={() => setShowModal(false)} className="px-6 py-3 bg-[#f68b44] text-white font-medium hover:bg-[#e07a35] transition-colors">
                {selectedClient ? "Guardar cambios" : "Crear cliente"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
