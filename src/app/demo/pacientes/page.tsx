"use client";

import { useState } from "react";

const patients = [
  {
    id: 1, name: "Luna", species: "Perro", breed: "Golden Retriever", age: "3 años", birthDate: "2022-03-15", weight: "28", sex: "Hembra",
    owner: "María García", phone: "612 345 678", email: "maria@email.com", lastVisit: "05/12/2025", status: "active",
    chip: "941000012345678", photo: "🐕", color: "Dorado", sterilized: true,
    allergies: ["Pollo", "Látex"],
    vaccines: [
      { name: "Polivalente", date: "05/12/2025", next: "05/12/2026" },
      { name: "Rabia", date: "05/06/2025", next: "05/06/2026" },
      { name: "Leishmaniosis", date: "01/03/2025", next: "01/03/2026" },
    ],
    history: [
      { date: "05/12/2025", type: "Vacunación", description: "Vacuna polivalente anual", vet: "Dr. Rodríguez" },
      { date: "15/09/2025", type: "Consulta", description: "Revisión rutinaria. Todo correcto.", vet: "Dra. García" },
      { date: "20/06/2025", type: "Urgencia", description: "Gastroenteritis leve. Tratamiento con probióticos.", vet: "Dr. Rodríguez" },
    ]
  },
  {
    id: 2, name: "Max", species: "Perro", breed: "Pastor Alemán", age: "5 años", birthDate: "2020-01-20", weight: "35", sex: "Macho",
    owner: "Carlos López", phone: "623 456 789", email: "carlos@email.com", lastVisit: "03/12/2025", status: "active",
    chip: "941000012345679", photo: "🐕", color: "Negro y fuego", sterilized: true,
    allergies: [],
    vaccines: [
      { name: "Polivalente", date: "03/12/2025", next: "03/12/2026" },
      { name: "Rabia", date: "03/12/2025", next: "03/12/2026" },
    ],
    history: [
      { date: "03/12/2025", type: "Vacunación", description: "Vacunas anuales", vet: "Dr. Rodríguez" },
      { date: "10/08/2025", type: "Cirugía", description: "Extracción de tumor benigno en pata trasera", vet: "Dra. García" },
    ]
  },
  {
    id: 3, name: "Michi", species: "Gato", breed: "Siamés", age: "2 años", birthDate: "2023-05-10", weight: "4.5", sex: "Macho",
    owner: "Laura Fernández", phone: "634 567 890", email: "laura@email.com", lastVisit: "01/12/2025", status: "active",
    chip: "941000012345680", photo: "🐈", color: "Crema y marrón", sterilized: false,
    allergies: ["Pescado azul"],
    vaccines: [
      { name: "Trivalente felina", date: "01/12/2025", next: "01/12/2026" },
    ],
    history: [
      { date: "01/12/2025", type: "Cirugía", description: "Esterilización programada", vet: "Dra. García" },
    ]
  },
  {
    id: 4, name: "Coco", species: "Perro", breed: "Bulldog Francés", age: "4 años", birthDate: "2021-08-03", weight: "12", sex: "Macho",
    owner: "Ana Martínez", phone: "645 678 901", email: "ana@email.com", lastVisit: "28/11/2025", status: "active",
    chip: "941000012345681", photo: "🐕", color: "Atigrado", sterilized: true,
    allergies: ["Polen"],
    vaccines: [
      { name: "Polivalente", date: "28/05/2025", next: "28/05/2026" },
      { name: "Rabia", date: "28/05/2025", next: "28/05/2026" },
    ],
    history: [
      { date: "28/11/2025", type: "Urgencia", description: "Dificultad respiratoria. Tratamiento con corticoides.", vet: "Dr. Rodríguez" },
    ]
  },
  {
    id: 5, name: "Nala", species: "Gato", breed: "Persa", age: "6 años", birthDate: "2019-02-14", weight: "5", sex: "Hembra",
    owner: "Carmen Díaz", phone: "656 789 012", email: "carmen@email.com", lastVisit: "25/11/2025", status: "active",
    chip: "941000012345682", photo: "🐈", color: "Blanco", sterilized: true,
    allergies: [],
    vaccines: [
      { name: "Trivalente felina", date: "25/05/2025", next: "25/05/2026" },
    ],
    history: [
      { date: "25/11/2025", type: "Consulta", description: "Dermatitis alérgica. Tratamiento con Apoquel.", vet: "Dra. García" },
    ]
  },
  {
    id: 6, name: "Toby", species: "Perro", breed: "Beagle", age: "1 año", birthDate: "2024-01-05", weight: "10", sex: "Macho",
    owner: "Pedro Sánchez", phone: "667 890 123", email: "pedro@email.com", lastVisit: "20/11/2025", status: "active",
    chip: "941000012345683", photo: "🐕", color: "Tricolor", sterilized: false,
    allergies: [],
    vaccines: [
      { name: "Polivalente", date: "20/11/2025", next: "20/11/2026" },
    ],
    history: [
      { date: "20/11/2025", type: "Vacunación", description: "Primera dosis de refuerzo", vet: "Dr. Rodríguez" },
    ]
  },
  {
    id: 7, name: "Rocky", species: "Perro", breed: "Labrador", age: "7 años", birthDate: "2018-06-20", weight: "32", sex: "Macho",
    owner: "Juan Rodríguez", phone: "678 901 234", email: "juan@email.com", lastVisit: "15/11/2025", status: "inactive",
    chip: "941000012345684", photo: "🐕", color: "Chocolate", sterilized: true,
    allergies: ["Cereales"],
    vaccines: [
      { name: "Polivalente", date: "15/05/2025", next: "15/05/2026" },
      { name: "Rabia", date: "15/05/2025", next: "15/05/2026" },
    ],
    history: [
      { date: "15/11/2025", type: "Consulta", description: "Artrosis en cadera. Tratamiento con condroprotectores.", vet: "Dra. García" },
    ]
  },
  {
    id: 8, name: "Kiara", species: "Gato", breed: "Maine Coon", age: "3 años", birthDate: "2022-09-08", weight: "7", sex: "Hembra",
    owner: "Sofía Ruiz", phone: "689 012 345", email: "sofia@email.com", lastVisit: "10/11/2025", status: "active",
    chip: "941000012345685", photo: "🐈", color: "Atigrado", sterilized: true,
    allergies: [],
    vaccines: [
      { name: "Trivalente felina", date: "10/05/2025", next: "10/05/2026" },
      { name: "Leucemia felina", date: "10/05/2025", next: "10/05/2026" },
    ],
    history: [
      { date: "10/11/2025", type: "Consulta", description: "Revisión anual. Peso óptimo.", vet: "Dr. Rodríguez" },
    ]
  },
];

type Patient = typeof patients[0];

export default function PacientesPage() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [showModal, setShowModal] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);
  const [activeTab, setActiveTab] = useState<"info" | "vaccines" | "history">("info");

  const filteredPatients = patients.filter((p) => {
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase()) ||
                         p.owner.toLowerCase().includes(search.toLowerCase()) ||
                         p.breed.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === "all" || p.species.toLowerCase() === filter;
    return matchesSearch && matchesFilter;
  });

  const openPatient = (patient: Patient) => {
    setSelectedPatient(patient);
    setActiveTab("info");
    setShowModal(true);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-light text-black dark:text-white">Pacientes</h1>
          <p className="text-black/50 dark:text-white/50 mt-1">{patients.length} pacientes registrados</p>
        </div>
        <button
          onClick={() => { setSelectedPatient(null); setActiveTab("info"); setShowModal(true); }}
          className="flex items-center gap-2 px-6 py-3 bg-[#f68b44] text-white font-medium hover:bg-[#e07a35] transition-colors"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
          </svg>
          Nuevo paciente
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white dark:bg-[#1a1a1a] p-6 border border-black/5 dark:border-white/5">
          <p className="text-sm text-black/50 dark:text-white/50">Total pacientes</p>
          <p className="text-2xl font-light mt-2 text-black dark:text-white">{patients.length}</p>
        </div>
        <div className="bg-white dark:bg-[#1a1a1a] p-6 border border-black/5 dark:border-white/5">
          <p className="text-sm text-black/50 dark:text-white/50">Perros</p>
          <p className="text-2xl font-light mt-2 text-black dark:text-white">{patients.filter(p => p.species === "Perro").length}</p>
        </div>
        <div className="bg-white dark:bg-[#1a1a1a] p-6 border border-black/5 dark:border-white/5">
          <p className="text-sm text-black/50 dark:text-white/50">Gatos</p>
          <p className="text-2xl font-light mt-2 text-black dark:text-white">{patients.filter(p => p.species === "Gato").length}</p>
        </div>
        <div className="bg-white dark:bg-[#1a1a1a] p-6 border border-black/5 dark:border-white/5">
          <p className="text-sm text-black/50 dark:text-white/50">Activos</p>
          <p className="text-2xl font-light mt-2 text-green-600">{patients.filter(p => p.status === "active").length}</p>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-black/30 dark:text-white/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            placeholder="Buscar por nombre, dueño o raza..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-white dark:bg-[#242424] text-black dark:text-white border border-black/10 dark:border-white/10 focus:outline-none focus:border-[#f68b44]"
          />
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setFilter("all")}
            className={`px-4 py-3 font-medium transition-colors ${
              filter === "all" ? "bg-black dark:bg-white text-white dark:text-black" : "bg-white dark:bg-[#1a1a1a] text-black dark:text-white border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5"
            }`}
          >
            Todos
          </button>
          <button
            onClick={() => setFilter("perro")}
            className={`px-4 py-3 font-medium transition-colors ${
              filter === "perro" ? "bg-black dark:bg-white text-white dark:text-black" : "bg-white dark:bg-[#1a1a1a] text-black dark:text-white border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5"
            }`}
          >
            Perros
          </button>
          <button
            onClick={() => setFilter("gato")}
            className={`px-4 py-3 font-medium transition-colors ${
              filter === "gato" ? "bg-black dark:bg-white text-white dark:text-black" : "bg-white dark:bg-[#1a1a1a] text-black dark:text-white border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5"
            }`}
          >
            Gatos
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white dark:bg-[#1a1a1a] border border-black/5 dark:border-white/5 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-black/5 dark:border-white/5">
                <th className="text-left p-4 font-medium text-black/50 dark:text-white/50 text-sm">Paciente</th>
                <th className="text-left p-4 font-medium text-black/50 dark:text-white/50 text-sm">Especie / Raza</th>
                <th className="text-left p-4 font-medium text-black/50 dark:text-white/50 text-sm">Edad</th>
                <th className="text-left p-4 font-medium text-black/50 dark:text-white/50 text-sm">Dueño</th>
                <th className="text-left p-4 font-medium text-black/50 dark:text-white/50 text-sm">Última visita</th>
                <th className="text-left p-4 font-medium text-black/50 dark:text-white/50 text-sm">Estado</th>
                <th className="text-left p-4 font-medium text-black/50 dark:text-white/50 text-sm"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-black/5 dark:divide-white/5">
              {filteredPatients.map((patient) => (
                <tr key={patient.id} className="hover:bg-black/[0.02] dark:hover:bg-white/[0.02] transition-colors cursor-pointer" onClick={() => openPatient(patient)}>
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#f68b44]/10 flex items-center justify-center text-xl">
                        {patient.photo}
                      </div>
                      <div>
                        <p className="font-medium text-black dark:text-white">{patient.name}</p>
                        <p className="text-xs text-black/40 dark:text-white/40">{patient.chip}</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4">
                    <p className="text-sm text-black dark:text-white">{patient.species}</p>
                    <p className="text-xs text-black/50 dark:text-white/50">{patient.breed}</p>
                  </td>
                  <td className="p-4 text-sm text-black dark:text-white">{patient.age}</td>
                  <td className="p-4">
                    <p className="text-sm text-black dark:text-white">{patient.owner}</p>
                    <p className="text-xs text-black/50 dark:text-white/50">{patient.phone}</p>
                  </td>
                  <td className="p-4 text-sm text-black dark:text-white">{patient.lastVisit}</td>
                  <td className="p-4">
                    <span className={`inline-block px-3 py-1 text-xs font-medium ${
                      patient.status === "active" ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400" : "bg-black/5 dark:bg-white/5 text-black/50 dark:text-white/50"
                    }`}>
                      {patient.status === "active" ? "Activo" : "Inactivo"}
                    </span>
                  </td>
                  <td className="p-4">
                    <button className="p-2 hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                      <svg className="w-5 h-5 text-black/40 dark:text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-[#1a1a1a] w-full max-w-3xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between p-6 border-b border-black/5 dark:border-white/5 sticky top-0 bg-white dark:bg-[#1a1a1a] z-10">
              <h2 className="text-lg font-medium text-black dark:text-white">
                {selectedPatient ? `Ficha de ${selectedPatient.name}` : "Nuevo paciente"}
              </h2>
              <button onClick={() => setShowModal(false)} className="p-2 hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                <svg className="w-5 h-5 text-black dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {selectedPatient && (
              <>
                {/* Patient header */}
                <div className="p-6 bg-gradient-to-r from-[#f68b44]/10 to-transparent border-b border-black/5 dark:border-white/5">
                  <div className="flex items-center gap-4">
                    <div className="w-20 h-20 rounded-full bg-[#f68b44]/20 flex items-center justify-center text-4xl">
                      {selectedPatient.photo}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3">
                        <h3 className="text-2xl font-medium text-black dark:text-white">{selectedPatient.name}</h3>
                        <span className={`px-2 py-0.5 text-xs font-medium ${
                          selectedPatient.status === "active" ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400" : "bg-black/5 dark:bg-white/5 text-black/50 dark:text-white/50"
                        }`}>
                          {selectedPatient.status === "active" ? "Activo" : "Inactivo"}
                        </span>
                      </div>
                      <p className="text-black/60 dark:text-white/60">{selectedPatient.breed} • {selectedPatient.sex} • {selectedPatient.age}</p>
                      <p className="text-sm text-black/40 dark:text-white/40 mt-1">Chip: {selectedPatient.chip}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-black/50 dark:text-white/50">Dueño</p>
                      <p className="font-medium text-black dark:text-white">{selectedPatient.owner}</p>
                      <p className="text-sm text-black/50 dark:text-white/50">{selectedPatient.phone}</p>
                    </div>
                  </div>
                </div>

                {/* Tabs */}
                <div className="flex border-b border-black/5 dark:border-white/5">
                  <button
                    onClick={() => setActiveTab("info")}
                    className={`px-6 py-3 font-medium text-sm transition-colors ${
                      activeTab === "info" ? "text-[#f68b44] border-b-2 border-[#f68b44]" : "text-black/50 dark:text-white/50 hover:text-black dark:hover:text-white"
                    }`}
                  >
                    Información
                  </button>
                  <button
                    onClick={() => setActiveTab("vaccines")}
                    className={`px-6 py-3 font-medium text-sm transition-colors ${
                      activeTab === "vaccines" ? "text-[#f68b44] border-b-2 border-[#f68b44]" : "text-black/50 dark:text-white/50 hover:text-black dark:hover:text-white"
                    }`}
                  >
                    Vacunas
                  </button>
                  <button
                    onClick={() => setActiveTab("history")}
                    className={`px-6 py-3 font-medium text-sm transition-colors ${
                      activeTab === "history" ? "text-[#f68b44] border-b-2 border-[#f68b44]" : "text-black/50 dark:text-white/50 hover:text-black dark:hover:text-white"
                    }`}
                  >
                    Historial
                  </button>
                </div>

                {/* Tab content */}
                <div className="p-6">
                  {activeTab === "info" && (
                    <div className="space-y-6">
                      <div className="grid md:grid-cols-3 gap-4">
                        <div className="p-4 bg-black/[0.02] dark:bg-white/[0.02]">
                          <p className="text-xs text-black/40 dark:text-white/40 uppercase">Peso</p>
                          <p className="text-lg font-medium mt-1 text-black dark:text-white">{selectedPatient.weight} kg</p>
                        </div>
                        <div className="p-4 bg-black/[0.02] dark:bg-white/[0.02]">
                          <p className="text-xs text-black/40 dark:text-white/40 uppercase">Color</p>
                          <p className="text-lg font-medium mt-1 text-black dark:text-white">{selectedPatient.color}</p>
                        </div>
                        <div className="p-4 bg-black/[0.02] dark:bg-white/[0.02]">
                          <p className="text-xs text-black/40 dark:text-white/40 uppercase">Esterilizado</p>
                          <p className="text-lg font-medium mt-1 text-black dark:text-white">{selectedPatient.sterilized ? "Sí" : "No"}</p>
                        </div>
                      </div>

                      {selectedPatient.allergies.length > 0 && (
                        <div>
                          <h4 className="font-medium mb-2 text-black dark:text-white">Alergias</h4>
                          <div className="flex flex-wrap gap-2">
                            {selectedPatient.allergies.map((allergy, i) => (
                              <span key={i} className="px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 text-sm">
                                {allergy}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      <div>
                        <h4 className="font-medium mb-2 text-black dark:text-white">Datos del propietario</h4>
                        <div className="p-4 bg-black/[0.02] dark:bg-white/[0.02] space-y-2">
                          <p className="text-black dark:text-white"><strong>Nombre:</strong> {selectedPatient.owner}</p>
                          <p className="text-black dark:text-white"><strong>Teléfono:</strong> {selectedPatient.phone}</p>
                          <p className="text-black dark:text-white"><strong>Email:</strong> {selectedPatient.email}</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === "vaccines" && (
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <h4 className="font-medium text-black dark:text-white">Calendario de vacunación</h4>
                        <button className="text-sm text-[#f68b44] hover:underline">+ Añadir vacuna</button>
                      </div>
                      {selectedPatient.vaccines.map((vaccine, i) => (
                        <div key={i} className="flex items-center justify-between p-4 border border-black/5 dark:border-white/5 hover:bg-black/[0.01] dark:hover:bg-white/[0.01]">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                              <svg className="w-5 h-5 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            </div>
                            <div>
                              <p className="font-medium text-black dark:text-white">{vaccine.name}</p>
                              <p className="text-sm text-black/50 dark:text-white/50">Administrada: {vaccine.date}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-sm text-black/40 dark:text-white/40">Próxima dosis</p>
                            <p className="font-medium text-[#f68b44]">{vaccine.next}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {activeTab === "history" && (
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <h4 className="font-medium text-black dark:text-white">Historial clínico</h4>
                        <button className="text-sm text-[#f68b44] hover:underline">+ Nueva entrada</button>
                      </div>
                      {selectedPatient.history.map((entry, i) => (
                        <div key={i} className="p-4 border border-black/5 dark:border-white/5 hover:bg-black/[0.01] dark:hover:bg-white/[0.01]">
                          <div className="flex items-center justify-between mb-2">
                            <span className={`px-2 py-0.5 text-xs font-medium ${
                              entry.type === "Vacunación" ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400" :
                              entry.type === "Cirugía" ? "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400" :
                              entry.type === "Urgencia" ? "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400" :
                              "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400"
                            }`}>
                              {entry.type}
                            </span>
                            <span className="text-sm text-black/50 dark:text-white/50">{entry.date}</span>
                          </div>
                          <p className="text-sm text-black dark:text-white">{entry.description}</p>
                          <p className="text-xs text-black/40 dark:text-white/40 mt-2">Atendido por: {entry.vet}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </>
            )}

            {!selectedPatient && (
              <div className="p-6 space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-black dark:text-white">Nombre</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-white dark:bg-[#242424] text-black dark:text-white border border-black/10 dark:border-white/10 focus:outline-none focus:border-[#f68b44]"
                      placeholder="Nombre del paciente"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-black dark:text-white">Especie</label>
                    <select className="w-full px-4 py-3 bg-white dark:bg-[#242424] text-black dark:text-white border border-black/10 dark:border-white/10 focus:outline-none focus:border-[#f68b44]">
                      <option>Perro</option>
                      <option>Gato</option>
                      <option>Otro</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-black dark:text-white">Raza</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-white dark:bg-[#242424] text-black dark:text-white border border-black/10 dark:border-white/10 focus:outline-none focus:border-[#f68b44]"
                      placeholder="Raza"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-black dark:text-white">Sexo</label>
                    <select className="w-full px-4 py-3 bg-white dark:bg-[#242424] text-black dark:text-white border border-black/10 dark:border-white/10 focus:outline-none focus:border-[#f68b44]">
                      <option>Macho</option>
                      <option>Hembra</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-black dark:text-white">Fecha nacimiento</label>
                    <input type="date" className="w-full px-4 py-3 bg-white dark:bg-[#242424] text-black dark:text-white border border-black/10 dark:border-white/10 focus:outline-none focus:border-[#f68b44]" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-black dark:text-white">Peso (kg)</label>
                    <input
                      type="number"
                      className="w-full px-4 py-3 bg-white dark:bg-[#242424] text-black dark:text-white border border-black/10 dark:border-white/10 focus:outline-none focus:border-[#f68b44]"
                      placeholder="0.0"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-black dark:text-white">Color</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-white dark:bg-[#242424] text-black dark:text-white border border-black/10 dark:border-white/10 focus:outline-none focus:border-[#f68b44]"
                      placeholder="Color del pelaje"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-black dark:text-white">Microchip</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-white dark:bg-[#242424] text-black dark:text-white border border-black/10 dark:border-white/10 focus:outline-none focus:border-[#f68b44]"
                      placeholder="Número de microchip"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-black dark:text-white">Propietario</label>
                  <select className="w-full px-4 py-3 bg-white dark:bg-[#242424] text-black dark:text-white border border-black/10 dark:border-white/10 focus:outline-none focus:border-[#f68b44]">
                    <option value="">Seleccionar propietario...</option>
                    <option>María García</option>
                    <option>Carlos López</option>
                    <option>Laura Fernández</option>
                    <option>Ana Martínez</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-black dark:text-white">Notas</label>
                  <textarea
                    rows={3}
                    className="w-full px-4 py-3 bg-white dark:bg-[#242424] text-black dark:text-white border border-black/10 dark:border-white/10 focus:outline-none focus:border-[#f68b44] resize-none"
                    placeholder="Notas adicionales sobre el paciente..."
                  />
                </div>
              </div>
            )}

            <div className="flex justify-end gap-3 p-6 border-t border-black/5 dark:border-white/5">
              <button onClick={() => setShowModal(false)} className="px-6 py-3 border border-black/10 dark:border-white/10 text-black dark:text-white font-medium hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                {selectedPatient ? "Cerrar" : "Cancelar"}
              </button>
              {!selectedPatient && (
                <button onClick={() => setShowModal(false)} className="px-6 py-3 bg-[#f68b44] text-white font-medium hover:bg-[#e07a35] transition-colors">
                  Crear paciente
                </button>
              )}
              {selectedPatient && (
                <button onClick={() => setShowModal(false)} className="px-6 py-3 bg-[#f68b44] text-white font-medium hover:bg-[#e07a35] transition-colors">
                  Editar paciente
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
