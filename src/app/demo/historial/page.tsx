"use client";

import { useState } from "react";

const records = [
  {
    id: 1,
    date: "05/12/2025",
    pet: "Luna",
    owner: "María García",
    type: "Consulta",
    diagnosis: "Otitis externa leve",
    treatment: "Limpieza ótica + gotas Surolan 2 gotas/12h x 7 días",
    vet: "Dr. Rodríguez",
    notes: "Revisión en 7 días. Evitar baños.",
    weight: "28.2 kg",
    temp: "38.5°C",
  },
  {
    id: 2,
    date: "03/12/2025",
    pet: "Max",
    owner: "Carlos López",
    type: "Vacunación",
    diagnosis: "Estado de salud óptimo",
    treatment: "Vacuna polivalente anual (Nobivac DHPPi + L4)",
    vet: "Dra. Martínez",
    notes: "Próxima vacuna antirrábica en marzo 2026.",
    weight: "35.0 kg",
    temp: "38.2°C",
  },
  {
    id: 3,
    date: "01/12/2025",
    pet: "Michi",
    owner: "Laura Fernández",
    type: "Cirugía",
    diagnosis: "Esterilización programada",
    treatment: "Ovariohisterectomía. Meloxicam 0.1mg/kg x 3 días. Amoxicilina 10mg/kg x 7 días.",
    vet: "Dr. Rodríguez",
    notes: "Retirada de puntos en 10 días. Collar isabelino obligatorio.",
    weight: "4.5 kg",
    temp: "38.8°C",
  },
  {
    id: 4,
    date: "28/11/2025",
    pet: "Coco",
    owner: "Ana Martínez",
    type: "Urgencia",
    diagnosis: "Gastroenteritis aguda",
    treatment: "Fluidoterapia IV. Metoclopramida 0.5mg/kg. Dieta blanda 48h.",
    vet: "Dra. Martínez",
    notes: "Posible ingesta de cuerpo extraño. Control en 24h.",
    weight: "11.8 kg",
    temp: "39.2°C",
  },
  {
    id: 5,
    date: "25/11/2025",
    pet: "Nala",
    owner: "Carmen Díaz",
    type: "Revisión",
    diagnosis: "Seguimiento dermatitis alérgica",
    treatment: "Continuar con Apoquel 5.4mg/día. Baños con Malaseb cada 3 días.",
    vet: "Dr. Rodríguez",
    notes: "Mejoría notable. Próxima revisión en 1 mes.",
    weight: "5.1 kg",
    temp: "38.4°C",
  },
];

const typeColors: Record<string, string> = {
  Consulta: "bg-blue-100 text-blue-700",
  Vacunación: "bg-green-100 text-green-700",
  Cirugía: "bg-red-100 text-red-700",
  Urgencia: "bg-orange-100 text-orange-700",
  Revisión: "bg-purple-100 text-purple-700",
};

export default function HistorialPage() {
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState<typeof records[0] | null>(null);

  const filteredRecords = records.filter((r) =>
    r.pet.toLowerCase().includes(search.toLowerCase()) ||
    r.owner.toLowerCase().includes(search.toLowerCase()) ||
    r.diagnosis.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-light">Historial clínico</h1>
          <p className="text-black/50 mt-1">Registro de todas las consultas y tratamientos</p>
        </div>
        <button
          onClick={() => { setSelectedRecord(null); setShowModal(true); }}
          className="flex items-center gap-2 px-6 py-3 bg-[#f68b44] text-white font-medium hover:bg-[#e07a35] transition-colors"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
          </svg>
          Nuevo registro
        </button>
      </div>

      {/* Search */}
      <div className="relative">
        <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-black/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input
          type="text"
          placeholder="Buscar por paciente, dueño o diagnóstico..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-10 pr-4 py-3 border border-black/10 focus:outline-none focus:border-[#f68b44]"
        />
      </div>

      {/* Records list */}
      <div className="space-y-4">
        {filteredRecords.map((record) => (
          <div
            key={record.id}
            className="bg-white border border-black/5 hover:border-[#f68b44]/30 transition-colors cursor-pointer"
            onClick={() => { setSelectedRecord(record); setShowModal(true); }}
          >
            <div className="p-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#f68b44]/10 flex items-center justify-center text-[#f68b44] text-xl">
                    {record.pet[0]}
                  </div>
                  <div>
                    <div className="flex items-center gap-3">
                      <h3 className="font-medium">{record.pet}</h3>
                      <span className={`px-2 py-1 text-xs font-medium ${typeColors[record.type]}`}>
                        {record.type}
                      </span>
                    </div>
                    <p className="text-sm text-black/50">{record.owner} · {record.date}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium">{record.vet}</p>
                  <p className="text-xs text-black/50">Veterinario</p>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-black/5">
                <p className="text-sm"><span className="font-medium">Diagnóstico:</span> {record.diagnosis}</p>
                <p className="text-sm text-black/60 mt-2 line-clamp-2">{record.treatment}</p>
              </div>

              <div className="mt-4 flex items-center gap-6 text-sm text-black/50">
                <span>Peso: {record.weight}</span>
                <span>Temp: {record.temp}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-3xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between p-6 border-b border-black/5 sticky top-0 bg-white">
              <h2 className="text-lg font-medium">
                {selectedRecord ? `Historial - ${selectedRecord.pet}` : "Nuevo registro clínico"}
              </h2>
              <button onClick={() => setShowModal(false)} className="p-2 hover:bg-black/5 transition-colors">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-6 space-y-6">
              {selectedRecord && (
                <div className="flex items-center justify-between p-4 bg-[#f68b44]/5 border border-[#f68b44]/20">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-[#f68b44]/10 flex items-center justify-center text-[#f68b44] text-2xl">
                      {selectedRecord.pet[0]}
                    </div>
                    <div>
                      <h3 className="text-xl font-medium">{selectedRecord.pet}</h3>
                      <p className="text-black/50">{selectedRecord.owner}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">{selectedRecord.date}</p>
                    <span className={`inline-block mt-1 px-3 py-1 text-xs font-medium ${typeColors[selectedRecord.type]}`}>
                      {selectedRecord.type}
                    </span>
                  </div>
                </div>
              )}

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Paciente</label>
                  <select defaultValue={selectedRecord?.pet} className="w-full px-4 py-3 border border-black/10 focus:outline-none focus:border-[#f68b44]">
                    <option>Luna - María García</option>
                    <option>Max - Carlos López</option>
                    <option>Michi - Laura Fernández</option>
                    <option>Coco - Ana Martínez</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Tipo de visita</label>
                  <select defaultValue={selectedRecord?.type} className="w-full px-4 py-3 border border-black/10 focus:outline-none focus:border-[#f68b44]">
                    <option>Consulta</option>
                    <option>Vacunación</option>
                    <option>Revisión</option>
                    <option>Cirugía</option>
                    <option>Urgencia</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Peso (kg)</label>
                  <input
                    type="text"
                    defaultValue={selectedRecord?.weight.replace(" kg", "")}
                    className="w-full px-4 py-3 border border-black/10 focus:outline-none focus:border-[#f68b44]"
                    placeholder="0.0"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Temperatura (°C)</label>
                  <input
                    type="text"
                    defaultValue={selectedRecord?.temp.replace("°C", "")}
                    className="w-full px-4 py-3 border border-black/10 focus:outline-none focus:border-[#f68b44]"
                    placeholder="38.5"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Veterinario</label>
                  <select defaultValue={selectedRecord?.vet} className="w-full px-4 py-3 border border-black/10 focus:outline-none focus:border-[#f68b44]">
                    <option>Dr. Rodríguez</option>
                    <option>Dra. Martínez</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Diagnóstico</label>
                <input
                  type="text"
                  defaultValue={selectedRecord?.diagnosis}
                  className="w-full px-4 py-3 border border-black/10 focus:outline-none focus:border-[#f68b44]"
                  placeholder="Diagnóstico principal..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Tratamiento</label>
                <textarea
                  rows={4}
                  defaultValue={selectedRecord?.treatment}
                  className="w-full px-4 py-3 border border-black/10 focus:outline-none focus:border-[#f68b44] resize-none"
                  placeholder="Detalla el tratamiento prescrito..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Notas adicionales</label>
                <textarea
                  rows={3}
                  defaultValue={selectedRecord?.notes}
                  className="w-full px-4 py-3 border border-black/10 focus:outline-none focus:border-[#f68b44] resize-none"
                  placeholder="Observaciones, seguimiento, etc..."
                />
              </div>
            </div>
            <div className="flex justify-between gap-3 p-6 border-t border-black/5">
              <button className="px-6 py-3 border border-black/10 font-medium hover:bg-black/5 transition-colors">
                Imprimir
              </button>
              <div className="flex gap-3">
                <button onClick={() => setShowModal(false)} className="px-6 py-3 border border-black/10 font-medium hover:bg-black/5 transition-colors">
                  Cancelar
                </button>
                <button onClick={() => setShowModal(false)} className="px-6 py-3 bg-[#f68b44] text-white font-medium hover:bg-[#e07a35] transition-colors">
                  {selectedRecord ? "Guardar cambios" : "Crear registro"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
