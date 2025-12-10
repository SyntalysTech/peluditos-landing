"use client";

import { useState } from "react";

const weekDays = ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"];
const hours = ["08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00"];

interface Appointment {
  id: number;
  day: number;
  hour: string;
  duration: number;
  pet: string;
  owner: string;
  phone: string;
  type: string;
  color: string;
  notes: string;
  status: "confirmed" | "pending" | "cancelled";
}

const appointments: Appointment[] = [
  { id: 1, day: 0, hour: "09:00", duration: 30, pet: "Luna", owner: "María García", phone: "612 345 678", type: "Vacunación", color: "bg-green-500", notes: "Vacuna polivalente anual", status: "confirmed" },
  { id: 2, day: 0, hour: "10:00", duration: 60, pet: "Coco", owner: "Ana Martínez", phone: "623 456 789", type: "Cirugía menor", color: "bg-red-500", notes: "Extirpación de quiste en pata delantera", status: "confirmed" },
  { id: 3, day: 0, hour: "11:30", duration: 30, pet: "Toby", owner: "Pedro Sánchez", phone: "634 567 890", type: "Consulta", color: "bg-blue-500", notes: "Revisión por pérdida de apetito", status: "pending" },
  { id: 4, day: 0, hour: "15:00", duration: 30, pet: "Simba", owner: "Elena Torres", phone: "645 678 901", type: "Vacunación", color: "bg-green-500", notes: "Vacuna antirrábica", status: "confirmed" },
  { id: 5, day: 0, hour: "16:30", duration: 45, pet: "Nube", owner: "Fernando Ruiz", phone: "656 789 012", type: "Ecografía", color: "bg-purple-500", notes: "Control de embarazo", status: "pending" },
  { id: 6, day: 1, hour: "09:30", duration: 30, pet: "Max", owner: "Carlos López", phone: "667 890 123", type: "Revisión", color: "bg-[#f68b44]", notes: "Control post-operatorio", status: "confirmed" },
  { id: 7, day: 1, hour: "11:00", duration: 45, pet: "Nala", owner: "Carmen Díaz", phone: "678 901 234", type: "Ecografía", color: "bg-purple-500", notes: "Ecografía abdominal", status: "confirmed" },
  { id: 8, day: 1, hour: "12:30", duration: 30, pet: "Pelusa", owner: "Miguel Ángel", phone: "689 012 345", type: "Consulta", color: "bg-blue-500", notes: "Problemas digestivos", status: "pending" },
  { id: 9, day: 2, hour: "10:00", duration: 30, pet: "Rocky", owner: "Juan Rodríguez", phone: "690 123 456", type: "Desparasitación", color: "bg-green-500", notes: "Desparasitación trimestral", status: "confirmed" },
  { id: 10, day: 2, hour: "16:00", duration: 30, pet: "Michi", owner: "Laura Fernández", phone: "601 234 567", type: "Vacunación", color: "bg-green-500", notes: "Vacuna triple felina", status: "confirmed" },
  { id: 11, day: 3, hour: "09:00", duration: 90, pet: "Bruno", owner: "Roberto Gómez", phone: "612 345 678", type: "Cirugía", color: "bg-red-500", notes: "Esterilización", status: "confirmed" },
  { id: 12, day: 3, hour: "15:00", duration: 30, pet: "Canela", owner: "Isabel Mora", phone: "623 456 789", type: "Consulta", color: "bg-blue-500", notes: "Cojera pata trasera", status: "pending" },
  { id: 13, day: 4, hour: "12:00", duration: 30, pet: "Kiara", owner: "Sofía Ruiz", phone: "634 567 890", type: "Consulta", color: "bg-blue-500", notes: "Revisión general", status: "confirmed" },
  { id: 14, day: 4, hour: "17:00", duration: 30, pet: "Thor", owner: "David Martín", phone: "645 678 901", type: "Revisión", color: "bg-[#f68b44]", notes: "Control de peso", status: "pending" },
];

export default function AgendaPage() {
  const [view, setView] = useState<"week" | "day" | "list">("week");
  const [showModal, setShowModal] = useState(false);
  const [selectedDay, setSelectedDay] = useState(0);
  const [viewingAppointment, setViewingAppointment] = useState<Appointment | null>(null);

  const todayAppointments = appointments.filter(apt => apt.day === selectedDay).sort((a, b) => a.hour.localeCompare(b.hour));
  const confirmedCount = todayAppointments.filter(apt => apt.status === "confirmed").length;
  const pendingCount = todayAppointments.filter(apt => apt.status === "pending").length;

  const getEndTime = (startHour: string, duration: number) => {
    const [h, m] = startHour.split(":").map(Number);
    const totalMinutes = h * 60 + m + duration;
    const endH = Math.floor(totalMinutes / 60);
    const endM = totalMinutes % 60;
    return `${endH.toString().padStart(2, "0")}:${endM.toString().padStart(2, "0")}`;
  };

  const printAgenda = () => {
    const printWindow = window.open('', '_blank');
    if (!printWindow) return;

    const appointmentsToPrint = view === "week" ? appointments : todayAppointments;
    const title = view === "week" ? "Agenda Semanal - 1 al 7 de Diciembre 2025" : `Agenda ${weekDays[selectedDay]} ${selectedDay + 1} de Diciembre 2025`;

    const getColorHex = (colorClass: string) => {
      const colors: Record<string, string> = {
        "bg-green-500": "#22c55e",
        "bg-red-500": "#ef4444",
        "bg-blue-500": "#3b82f6",
        "bg-purple-500": "#a855f7",
        "bg-[#f68b44]": "#f68b44",
      };
      return colors[colorClass] || "#666";
    };

    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>${title}</title>
        <style>
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body { font-family: 'Segoe UI', Arial, sans-serif; padding: 30px; color: #333; }
          .header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 30px; padding-bottom: 20px; border-bottom: 2px solid #f68b44; }
          .logo { height: 50px; }
          .title { text-align: right; }
          .title h1 { font-size: 20px; font-weight: 600; color: #333; }
          .title p { font-size: 12px; color: #666; margin-top: 4px; }
          .summary { display: flex; gap: 30px; margin-bottom: 25px; padding: 15px; background: #f9f9f9; }
          .summary-item { text-align: center; }
          .summary-item .number { font-size: 24px; font-weight: 600; }
          .summary-item .label { font-size: 11px; color: #666; text-transform: uppercase; }
          .summary-item.confirmed .number { color: #22c55e; }
          .summary-item.pending .number { color: #f68b44; }
          table { width: 100%; border-collapse: collapse; margin-top: 20px; }
          th { background: #f68b44; color: white; padding: 12px 10px; text-align: left; font-size: 12px; font-weight: 600; text-transform: uppercase; }
          td { padding: 12px 10px; border-bottom: 1px solid #eee; font-size: 13px; vertical-align: top; }
          tr:hover { background: #fafafa; }
          .time { font-weight: 600; white-space: nowrap; }
          .pet { font-weight: 600; }
          .owner { color: #666; font-size: 12px; }
          .type-badge { display: inline-block; padding: 4px 10px; border-radius: 3px; color: white; font-size: 11px; font-weight: 500; }
          .status { padding: 4px 10px; font-size: 11px; font-weight: 500; }
          .status.confirmed { background: #dcfce7; color: #166534; }
          .status.pending { background: #fef3c7; color: #92400e; }
          .notes { font-size: 12px; color: #666; font-style: italic; max-width: 200px; }
          .footer { margin-top: 30px; padding-top: 15px; border-top: 1px solid #eee; text-align: center; font-size: 11px; color: #999; }
          .day-header { background: #f0f0f0; font-weight: 600; }
          .day-header td { padding: 8px 10px; font-size: 13px; color: #333; }
          @media print {
            body { padding: 20px; }
            .no-print { display: none; }
          }
        </style>
      </head>
      <body>
        <div class="header">
          <img src="/logos/logo-horizontal-orange.png" alt="Peluditos CRM" class="logo" />
          <div class="title">
            <h1>${title}</h1>
            <p>Impreso el ${new Date().toLocaleDateString('es-ES', { day: '2-digit', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' })}</p>
          </div>
        </div>

        <div class="summary">
          <div class="summary-item">
            <div class="number">${appointmentsToPrint.length}</div>
            <div class="label">Total citas</div>
          </div>
          <div class="summary-item confirmed">
            <div class="number">${appointmentsToPrint.filter(a => a.status === "confirmed").length}</div>
            <div class="label">Confirmadas</div>
          </div>
          <div class="summary-item pending">
            <div class="number">${appointmentsToPrint.filter(a => a.status === "pending").length}</div>
            <div class="label">Pendientes</div>
          </div>
        </div>

        <table>
          <thead>
            <tr>
              ${view === "week" ? "<th>Día</th>" : ""}
              <th>Hora</th>
              <th>Paciente</th>
              <th>Tipo</th>
              <th>Estado</th>
              <th>Teléfono</th>
              <th>Notas</th>
            </tr>
          </thead>
          <tbody>
            ${view === "week"
              ? [...appointments].sort((a, b) => a.day - b.day || a.hour.localeCompare(b.hour)).map(apt => `
                <tr>
                  <td>${weekDays[apt.day]} ${apt.day + 1}</td>
                  <td class="time">${apt.hour} - ${getEndTime(apt.hour, apt.duration)}</td>
                  <td>
                    <div class="pet">${apt.pet}</div>
                    <div class="owner">${apt.owner}</div>
                  </td>
                  <td><span class="type-badge" style="background: ${getColorHex(apt.color)}">${apt.type}</span></td>
                  <td><span class="status ${apt.status}">${apt.status === "confirmed" ? "Confirmada" : "Pendiente"}</span></td>
                  <td>${apt.phone}</td>
                  <td class="notes">${apt.notes || "-"}</td>
                </tr>
              `).join('')
              : todayAppointments.map(apt => `
                <tr>
                  <td class="time">${apt.hour} - ${getEndTime(apt.hour, apt.duration)}</td>
                  <td>
                    <div class="pet">${apt.pet}</div>
                    <div class="owner">${apt.owner}</div>
                  </td>
                  <td><span class="type-badge" style="background: ${getColorHex(apt.color)}">${apt.type}</span></td>
                  <td><span class="status ${apt.status}">${apt.status === "confirmed" ? "Confirmada" : "Pendiente"}</span></td>
                  <td>${apt.phone}</td>
                  <td class="notes">${apt.notes || "-"}</td>
                </tr>
              `).join('')
            }
          </tbody>
        </table>

        <div class="footer">
          Clínica Veterinaria Peluditos • Tel: 912 345 678 • info@clinicapeluditos.com
        </div>

        <script>
          window.onload = function() { window.print(); }
        </script>
      </body>
      </html>
    `);
    printWindow.document.close();
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-light">Agenda</h1>
          <p className="text-black/50 dark:text-white/50 mt-1">Gestiona las citas de tu clínica</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex bg-black/5 dark:bg-white/5 p-1">
            <button
              onClick={() => setView("week")}
              className={`px-4 py-2 text-sm font-medium transition-colors ${
                view === "week" ? "bg-white dark:bg-[#1a1a1a] text-black dark:text-white" : "text-black/50 dark:text-white/50 hover:text-black dark:hover:text-white"
              }`}
            >
              Semana
            </button>
            <button
              onClick={() => setView("day")}
              className={`px-4 py-2 text-sm font-medium transition-colors ${
                view === "day" ? "bg-white dark:bg-[#1a1a1a] text-black dark:text-white" : "text-black/50 dark:text-white/50 hover:text-black dark:hover:text-white"
              }`}
            >
              Día
            </button>
            <button
              onClick={() => setView("list")}
              className={`px-4 py-2 text-sm font-medium transition-colors ${
                view === "list" ? "bg-white dark:bg-[#1a1a1a] text-black dark:text-white" : "text-black/50 dark:text-white/50 hover:text-black dark:hover:text-white"
              }`}
            >
              Lista
            </button>
          </div>
          <button
            onClick={() => setShowModal(true)}
            className="flex items-center gap-2 px-6 py-3 bg-[#f68b44] text-white font-medium hover:bg-[#e07a35] transition-colors"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
            </svg>
            Nueva cita
          </button>
        </div>
      </div>

      {/* Calendar navigation */}
      <div className="flex items-center justify-between bg-white dark:bg-[#1a1a1a] p-4 border border-black/5 dark:border-white/5">
        <button
          className="p-2 hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
          onClick={() => view === "day" && setSelectedDay(Math.max(0, selectedDay - 1))}
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <div className="text-center">
          <h2 className="font-medium">Diciembre 2025</h2>
          <p className="text-sm text-black/50 dark:text-white/50">
            {view === "day" ? `${weekDays[selectedDay]} ${selectedDay + 1}` : "Semana del 1 al 7"}
          </p>
        </div>
        <button
          className="p-2 hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
          onClick={() => view === "day" && setSelectedDay(Math.min(6, selectedDay + 1))}
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <div className="grid lg:grid-cols-4 gap-6">
        {/* Calendar grid */}
        <div className="lg:col-span-3 bg-white dark:bg-[#1a1a1a] border border-black/5 dark:border-white/5">
          {view === "week" && (
            <div className="overflow-x-auto">
              <table className="w-full min-w-[800px] border-collapse">
                <thead>
                  <tr className="border-b border-black/10 dark:border-white/10">
                    <th className="w-16 p-3 text-sm text-black/50 dark:text-white/50 font-normal border-r border-black/5 dark:border-white/5"></th>
                    {weekDays.map((day, i) => (
                      <th
                        key={day}
                        className={`p-3 text-center border-r border-black/5 dark:border-white/5 last:border-r-0 cursor-pointer hover:bg-black/[0.02] dark:hover:bg-white/[0.02] transition-colors ${i === 0 ? "bg-[#f68b44]/5" : ""}`}
                        onClick={() => { setSelectedDay(i); setView("day"); }}
                      >
                        <p className="text-sm text-black/50 dark:text-white/50 font-normal">{day}</p>
                        <p className={`text-lg font-medium mt-1 ${i === 0 ? "text-[#f68b44]" : ""}`}>{i + 1}</p>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {hours.map((hour) => {
                    const hourNum = parseInt(hour.split(":")[0]);
                    return (
                      <tr key={hour} className="border-b border-black/5 dark:border-white/5">
                        <td className="w-16 p-2 text-xs text-black/40 dark:text-white/40 text-right pr-3 border-r border-black/5 dark:border-white/5 align-top">
                          {hour}
                        </td>
                        {weekDays.map((_, dayIndex) => {
                          const cellAppts = appointments.filter(apt => {
                            const aptHour = parseInt(apt.hour.split(":")[0]);
                            return apt.day === dayIndex && aptHour === hourNum;
                          });

                          return (
                            <td
                              key={dayIndex}
                              className={`border-r border-black/5 dark:border-white/5 last:border-r-0 p-1 align-top h-16 ${
                                dayIndex === 0 ? "bg-[#f68b44]/[0.02]" : ""
                              }`}
                            >
                              {cellAppts.map((apt) => (
                                <div
                                  key={apt.id}
                                  onClick={() => setViewingAppointment(apt)}
                                  className={`${apt.color} text-white text-xs p-2 mb-1 cursor-pointer hover:opacity-90 transition-opacity`}
                                >
                                  <p className="font-medium truncate">{apt.hour} - {apt.pet}</p>
                                  <p className="opacity-80 truncate text-[11px]">{apt.type} ({apt.duration} min)</p>
                                </div>
                              ))}
                            </td>
                          );
                        })}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}

          {view === "list" && (
            <div className="divide-y divide-black/5 dark:divide-white/5">
              {todayAppointments.length === 0 ? (
                <div className="p-8 text-center text-black/50 dark:text-white/50">
                  <svg className="w-12 h-12 mx-auto mb-4 text-black/20 dark:text-white/20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p>No hay citas para este día</p>
                </div>
              ) : (
                todayAppointments.map((apt) => (
                  <div
                    key={apt.id}
                    className="flex items-center gap-4 p-4 hover:bg-black/[0.02] dark:hover:bg-white/[0.02] transition-colors cursor-pointer"
                    onClick={() => setViewingAppointment(apt)}
                  >
                    <div className={`w-1 h-12 ${apt.color}`} />
                    <div className="text-center min-w-[80px]">
                      <p className="text-lg font-medium">{apt.hour}</p>
                      <p className="text-xs text-black/40 dark:text-white/40">{apt.duration} min</p>
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">{apt.pet}</p>
                      <p className="text-sm text-black/50 dark:text-white/50">{apt.owner}</p>
                    </div>
                    <div className="text-sm text-black/60 dark:text-white/60">{apt.type}</div>
                    <span className={`px-3 py-1 text-xs font-medium ${
                      apt.status === "confirmed" ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400" :
                      apt.status === "cancelled" ? "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400" :
                      "bg-black/5 dark:bg-white/5 text-black/50 dark:text-white/50"
                    }`}>
                      {apt.status === "confirmed" ? "Confirmada" : apt.status === "cancelled" ? "Cancelada" : "Pendiente"}
                    </span>
                    <button className="p-2 hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                      <svg className="w-5 h-5 text-black/40 dark:text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                ))
              )}
            </div>
          )}

          {view === "day" && (
            <div className="divide-y divide-black/5 dark:divide-white/5">
              {/* Day header with selector */}
              <div className="flex items-center gap-2 p-4 bg-black/[0.02] dark:bg-white/[0.02] overflow-x-auto">
                {weekDays.map((day, i) => (
                  <button
                    key={day}
                    onClick={() => setSelectedDay(i)}
                    className={`flex flex-col items-center px-4 py-2 min-w-[60px] transition-colors ${
                      selectedDay === i
                        ? "bg-[#f68b44] text-white"
                        : "bg-white dark:bg-[#242424] hover:bg-black/5 dark:hover:bg-white/5"
                    }`}
                  >
                    <span className="text-xs opacity-70">{day}</span>
                    <span className="text-lg font-medium">{i + 1}</span>
                  </button>
                ))}
              </div>

              {/* Day timeline */}
              <div className="p-4">
                {todayAppointments.length === 0 ? (
                  <div className="p-8 text-center text-black/50 dark:text-white/50">
                    <svg className="w-12 h-12 mx-auto mb-4 text-black/20 dark:text-white/20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p>No hay citas programadas</p>
                    <button
                      onClick={() => setShowModal(true)}
                      className="mt-4 px-4 py-2 bg-[#f68b44] text-white text-sm font-medium hover:bg-[#e07a35] transition-colors"
                    >
                      Agendar cita
                    </button>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {todayAppointments.map((apt) => (
                      <div
                        key={apt.id}
                        onClick={() => setViewingAppointment(apt)}
                        className={`${apt.color} text-white p-4 cursor-pointer hover:opacity-95 transition-opacity`}
                      >
                        <div className="flex items-start justify-between">
                          <div>
                            <p className="text-lg font-medium">{apt.pet}</p>
                            <p className="text-sm opacity-90">{apt.owner}</p>
                          </div>
                          <div className="text-right">
                            <p className="font-medium">{apt.hour} - {getEndTime(apt.hour, apt.duration)}</p>
                            <p className="text-sm opacity-80">{apt.duration} min</p>
                          </div>
                        </div>
                        <div className="mt-3 pt-3 border-t border-white/20 flex items-center justify-between">
                          <span className="text-sm">{apt.type}</span>
                          <span className={`px-2 py-0.5 text-xs font-medium rounded ${
                            apt.status === "confirmed" ? "bg-white/20" : "bg-black/20"
                          }`}>
                            {apt.status === "confirmed" ? "Confirmada" : "Pendiente"}
                          </span>
                        </div>
                        {apt.notes && (
                          <p className="mt-2 text-sm opacity-80 truncate">{apt.notes}</p>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Today's summary */}
          <div className="bg-white dark:bg-[#1a1a1a] border border-black/5 dark:border-white/5 p-6">
            <h3 className="font-medium mb-4">
              {view === "week" ? "Resumen de la semana" : `Resumen ${weekDays[selectedDay]} ${selectedDay + 1}`}
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-black/60 dark:text-white/60">Total citas</span>
                <span className="font-medium">{view === "week" ? appointments.length : todayAppointments.length}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-black/60 dark:text-white/60">Confirmadas</span>
                <span className="text-green-600 dark:text-green-400 font-medium">
                  {view === "week" ? appointments.filter(a => a.status === "confirmed").length : confirmedCount}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-black/60 dark:text-white/60">Pendientes</span>
                <span className="text-[#f68b44] font-medium">
                  {view === "week" ? appointments.filter(a => a.status === "pending").length : pendingCount}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-black/60 dark:text-white/60">Canceladas</span>
                <span className="text-red-500 dark:text-red-400 font-medium">
                  {view === "week" ? appointments.filter(a => a.status === "cancelled").length : 0}
                </span>
              </div>
            </div>
          </div>

          {/* Legend */}
          <div className="bg-white dark:bg-[#1a1a1a] border border-black/5 dark:border-white/5 p-6">
            <h3 className="font-medium mb-4">Tipos de cita</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-blue-500" />
                <span className="text-sm text-black/60 dark:text-white/60">Consulta</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500" />
                <span className="text-sm text-black/60 dark:text-white/60">Vacunación</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-[#f68b44]" />
                <span className="text-sm text-black/60 dark:text-white/60">Revisión</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-purple-500" />
                <span className="text-sm text-black/60 dark:text-white/60">Diagnóstico</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-red-500" />
                <span className="text-sm text-black/60 dark:text-white/60">Cirugía</span>
              </div>
            </div>
          </div>

          {/* Quick actions */}
          <div className="bg-white dark:bg-[#1a1a1a] border border-black/5 dark:border-white/5 p-6">
            <h3 className="font-medium mb-4">Acciones rápidas</h3>
            <div className="space-y-2">
              <button
                onClick={() => setShowModal(true)}
                className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-black/[0.02] dark:hover:bg-white/[0.02] transition-colors"
              >
                <svg className="w-5 h-5 text-[#f68b44]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
                </svg>
                <span className="text-sm">Nueva cita</span>
              </button>
              <button className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-black/[0.02] dark:hover:bg-white/[0.02] transition-colors">
                <svg className="w-5 h-5 text-[#f68b44]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="text-sm">Bloquear horario</span>
              </button>
              <button
                onClick={printAgenda}
                className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-black/[0.02] dark:hover:bg-white/[0.02] transition-colors"
              >
                <svg className="w-5 h-5 text-[#f68b44]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                </svg>
                <span className="text-sm">Imprimir agenda</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* New Appointment Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-[#1a1a1a] w-full max-w-lg">
            <div className="flex items-center justify-between p-6 border-b border-black/5 dark:border-white/5">
              <h2 className="text-lg font-medium">Nueva cita</h2>
              <button onClick={() => setShowModal(false)} className="p-2 hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Paciente</label>
                <select className="w-full px-4 py-3 bg-white dark:bg-[#242424] text-black dark:text-white border border-black/10 dark:border-white/10 focus:outline-none focus:border-[#f68b44]">
                  <option>Seleccionar paciente...</option>
                  <option>Luna - María García</option>
                  <option>Max - Carlos López</option>
                  <option>Coco - Ana Martínez</option>
                  <option>Rocky - Juan Rodríguez</option>
                  <option>Nala - Carmen Díaz</option>
                </select>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Fecha</label>
                  <input type="date" defaultValue="2025-12-01" className="w-full px-4 py-3 bg-white dark:bg-[#242424] text-black dark:text-white border border-black/10 dark:border-white/10 focus:outline-none focus:border-[#f68b44]" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Hora</label>
                  <input type="time" defaultValue="09:00" className="w-full px-4 py-3 bg-white dark:bg-[#242424] text-black dark:text-white border border-black/10 dark:border-white/10 focus:outline-none focus:border-[#f68b44]" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Tipo de cita</label>
                  <select className="w-full px-4 py-3 bg-white dark:bg-[#242424] text-black dark:text-white border border-black/10 dark:border-white/10 focus:outline-none focus:border-[#f68b44]">
                    <option>Consulta general</option>
                    <option>Vacunación</option>
                    <option>Revisión</option>
                    <option>Cirugía</option>
                    <option>Ecografía</option>
                    <option>Desparasitación</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Duración</label>
                  <select className="w-full px-4 py-3 bg-white dark:bg-[#242424] text-black dark:text-white border border-black/10 dark:border-white/10 focus:outline-none focus:border-[#f68b44]">
                    <option>15 minutos</option>
                    <option>30 minutos</option>
                    <option>45 minutos</option>
                    <option>60 minutos</option>
                    <option>90 minutos</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Notas</label>
                <textarea rows={3} className="w-full px-4 py-3 bg-white dark:bg-[#242424] text-black dark:text-white placeholder:text-black/30 dark:placeholder:text-white/30 border border-black/10 dark:border-white/10 focus:outline-none focus:border-[#f68b44] resize-none" placeholder="Añade notas sobre la cita..." />
              </div>
            </div>
            <div className="flex justify-end gap-3 p-6 border-t border-black/5 dark:border-white/5">
              <button onClick={() => setShowModal(false)} className="px-6 py-3 border border-black/10 dark:border-white/10 font-medium hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                Cancelar
              </button>
              <button onClick={() => setShowModal(false)} className="px-6 py-3 bg-[#f68b44] text-white font-medium hover:bg-[#e07a35] transition-colors">
                Guardar cita
              </button>
            </div>
          </div>
        </div>
      )}

      {/* View Appointment Modal */}
      {viewingAppointment && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-[#1a1a1a] w-full max-w-lg">
            <div className={`${viewingAppointment.color} p-6`}>
              <div className="flex items-start justify-between text-white">
                <div>
                  <h2 className="text-xl font-medium">{viewingAppointment.pet}</h2>
                  <p className="opacity-90">{viewingAppointment.owner}</p>
                </div>
                <button onClick={() => setViewingAppointment(null)} className="p-2 hover:bg-white/20 transition-colors rounded">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="mt-4 flex items-center gap-4 text-white/90">
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {viewingAppointment.hour} - {getEndTime(viewingAppointment.hour, viewingAppointment.duration)}
                </span>
                <span>•</span>
                <span>{viewingAppointment.duration} min</span>
                <span>•</span>
                <span>{weekDays[viewingAppointment.day]} {viewingAppointment.day + 1} Dic</span>
              </div>
            </div>

            <div className="p-6 space-y-4">
              <div className="flex items-center justify-between py-3 border-b border-black/5 dark:border-white/5">
                <span className="text-black/60 dark:text-white/60">Tipo de cita</span>
                <span className="font-medium">{viewingAppointment.type}</span>
              </div>
              <div className="flex items-center justify-between py-3 border-b border-black/5 dark:border-white/5">
                <span className="text-black/60 dark:text-white/60">Estado</span>
                <span className={`px-3 py-1 text-xs font-medium ${
                  viewingAppointment.status === "confirmed" ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400" :
                  viewingAppointment.status === "cancelled" ? "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400" :
                  "bg-black/5 dark:bg-white/5 text-black/50 dark:text-white/50"
                }`}>
                  {viewingAppointment.status === "confirmed" ? "Confirmada" : viewingAppointment.status === "cancelled" ? "Cancelada" : "Pendiente"}
                </span>
              </div>
              <div className="flex items-center justify-between py-3 border-b border-black/5 dark:border-white/5">
                <span className="text-black/60 dark:text-white/60">Teléfono</span>
                <a href={`tel:${viewingAppointment.phone}`} className="font-medium text-[#f68b44] hover:underline">
                  {viewingAppointment.phone}
                </a>
              </div>
              {viewingAppointment.notes && (
                <div className="py-3">
                  <span className="text-black/60 dark:text-white/60 block mb-2">Notas</span>
                  <p className="text-sm bg-black/[0.02] dark:bg-white/[0.02] p-3">{viewingAppointment.notes}</p>
                </div>
              )}
            </div>

            <div className="flex gap-3 p-6 border-t border-black/5 dark:border-white/5">
              <button className="flex-1 px-4 py-3 border border-black/10 dark:border-white/10 font-medium hover:bg-black/5 dark:hover:bg-white/5 transition-colors flex items-center justify-center gap-2">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
                Editar
              </button>
              <button className="flex-1 px-4 py-3 border border-red-200 dark:border-red-900/30 text-red-600 dark:text-red-400 font-medium hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors flex items-center justify-center gap-2">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
                Cancelar
              </button>
              <button
                onClick={() => setViewingAppointment(null)}
                className="flex-1 px-4 py-3 bg-[#f68b44] text-white font-medium hover:bg-[#e07a35] transition-colors"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
