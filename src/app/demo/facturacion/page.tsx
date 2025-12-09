"use client";

import { useState, useRef } from "react";

const invoices = [
  { id: "F-2025-0847", date: "05/12/2025", client: "María García", pet: "Luna", items: [{ name: "Consulta general", price: 35 }, { name: "Limpieza ótica", price: 25 }, { name: "Surolan gotas", price: 22.80 }], total: 82.80, status: "paid" },
  { id: "F-2025-0846", date: "03/12/2025", client: "Carlos López", pet: "Max", items: [{ name: "Vacuna polivalente", price: 45 }, { name: "Revisión anual", price: 35 }], total: 80, status: "paid" },
  { id: "F-2025-0845", date: "01/12/2025", client: "Laura Fernández", pet: "Michi", items: [{ name: "Cirugía esterilización", price: 280 }, { name: "Anestesia", price: 50 }, { name: "Hospitalización", price: 40 }, { name: "Medicación post-op", price: 25 }], total: 395, status: "pending" },
  { id: "F-2025-0844", date: "28/11/2025", client: "Ana Martínez", pet: "Coco", items: [{ name: "Urgencia", price: 80 }, { name: "Fluidoterapia", price: 45 }, { name: "Medicación", price: 35 }], total: 160, status: "paid" },
  { id: "F-2025-0843", date: "25/11/2025", client: "Carmen Díaz", pet: "Nala", items: [{ name: "Revisión dermatológica", price: 45 }, { name: "Apoquel 5.4mg x30", price: 95 }], total: 140, status: "overdue" },
  { id: "F-2025-0842", date: "20/11/2025", client: "Pedro Sánchez", pet: "Toby", items: [{ name: "Consulta", price: 35 }, { name: "Desparasitación interna", price: 18 }], total: 53, status: "paid" },
];

type Invoice = typeof invoices[0];

const statusColors: Record<string, { bg: string; text: string; label: string }> = {
  paid: { bg: "bg-green-100", text: "text-green-700", label: "Pagada" },
  pending: { bg: "bg-yellow-100", text: "text-yellow-700", label: "Pendiente" },
  overdue: { bg: "bg-red-100", text: "text-red-700", label: "Vencida" },
};

const services = [
  { name: "Consulta general", price: 35 },
  { name: "Vacuna polivalente", price: 45 },
  { name: "Vacuna antirrábica", price: 25 },
  { name: "Desparasitación interna", price: 18 },
  { name: "Desparasitación externa", price: 22 },
  { name: "Limpieza dental", price: 120 },
  { name: "Cirugía esterilización", price: 280 },
  { name: "Radiografía", price: 65 },
  { name: "Ecografía", price: 85 },
  { name: "Análisis sangre completo", price: 75 },
];

const clients = [
  { name: "María García", pet: "Luna", nif: "12345678A", address: "Calle Mayor 15, Madrid", phone: "612345678", email: "maria@email.com" },
  { name: "Carlos López", pet: "Max", nif: "87654321B", address: "Av. Libertad 23, Barcelona", phone: "623456789", email: "carlos@email.com" },
  { name: "Laura Fernández", pet: "Michi", nif: "11223344C", address: "Plaza España 5, Valencia", phone: "634567890", email: "laura@email.com" },
];

export default function FacturacionPage() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [showModal, setShowModal] = useState(false);
  const [showPdfModal, setShowPdfModal] = useState(false);
  const [selectedItems, setSelectedItems] = useState<typeof services>([]);
  const [selectedClient, setSelectedClient] = useState<typeof clients[0] | null>(null);
  const [viewingInvoice, setViewingInvoice] = useState<Invoice | null>(null);
  const pdfRef = useRef<HTMLDivElement>(null);

  const filteredInvoices = invoices.filter((inv) => {
    const matchesSearch = inv.client.toLowerCase().includes(search.toLowerCase()) ||
                         inv.id.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === "all" || inv.status === filter;
    return matchesSearch && matchesFilter;
  });

  const totalPending = invoices
    .filter((i) => i.status === "pending" || i.status === "overdue")
    .reduce((acc, i) => acc + i.total, 0);

  const totalMonth = invoices.reduce((acc, i) => acc + i.total, 0);

  const addItem = (item: typeof services[0]) => {
    setSelectedItems([...selectedItems, item]);
  };

  const removeItem = (index: number) => {
    setSelectedItems(selectedItems.filter((_, i) => i !== index));
  };

  const invoiceTotal = selectedItems.reduce((acc, item) => acc + item.price, 0);

  const generatePDF = async (invoice: Invoice) => {
    setViewingInvoice(invoice);
    setShowPdfModal(true);
  };

  const downloadPDF = () => {
    if (!pdfRef.current) return;

    const printWindow = window.open('', '_blank');
    if (!printWindow) return;

    const invoiceData = viewingInvoice;
    if (!invoiceData) return;

    const subtotal = invoiceData.total;
    const iva = subtotal * 0.21;
    const total = subtotal + iva;

    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>Factura ${invoiceData.id}</title>
        <style>
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body { font-family: 'Segoe UI', Arial, sans-serif; padding: 40px; color: #333; }
          .header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 40px; padding-bottom: 20px; border-bottom: 2px solid #f68b44; }
          .logo { height: 60px; }
          .company-info { text-align: right; font-size: 12px; color: #666; }
          .company-info p { margin: 2px 0; }
          .invoice-title { font-size: 28px; color: #f68b44; margin-bottom: 30px; font-weight: 300; }
          .invoice-meta { display: flex; justify-content: space-between; margin-bottom: 30px; }
          .meta-block { }
          .meta-block h3 { font-size: 12px; color: #999; text-transform: uppercase; margin-bottom: 8px; font-weight: 500; }
          .meta-block p { font-size: 14px; margin: 4px 0; }
          .meta-block .highlight { font-size: 18px; font-weight: 600; color: #f68b44; }
          table { width: 100%; border-collapse: collapse; margin: 30px 0; }
          th { background: #f68b44; color: white; padding: 12px 16px; text-align: left; font-weight: 500; font-size: 12px; text-transform: uppercase; }
          td { padding: 12px 16px; border-bottom: 1px solid #eee; font-size: 14px; }
          tr:hover { background: #fafafa; }
          .text-right { text-align: right; }
          .totals { margin-top: 20px; margin-left: auto; width: 300px; }
          .totals-row { display: flex; justify-content: space-between; padding: 8px 0; font-size: 14px; }
          .totals-row.total { border-top: 2px solid #f68b44; padding-top: 12px; margin-top: 8px; font-size: 18px; font-weight: 600; }
          .totals-row.total span:last-child { color: #f68b44; }
          .footer { margin-top: 60px; padding-top: 20px; border-top: 1px solid #eee; font-size: 11px; color: #999; text-align: center; }
          .status { display: inline-block; padding: 4px 12px; border-radius: 4px; font-size: 12px; font-weight: 500; }
          .status.paid { background: #dcfce7; color: #166534; }
          .status.pending { background: #fef9c3; color: #854d0e; }
          .status.overdue { background: #fee2e2; color: #991b1b; }
          @media print {
            body { padding: 20px; }
            .no-print { display: none; }
          }
        </style>
      </head>
      <body>
        <div class="header">
          <img src="/logos/logo-horizontal-orange.png" alt="Peluditos CRM" class="logo" />
          <div class="company-info">
            <p><strong>Clínica Veterinaria Peluditos</strong></p>
            <p>CIF: B12345678</p>
            <p>Calle Veterinaria 123</p>
            <p>28001 Madrid, España</p>
            <p>Tel: 912 345 678</p>
            <p>info@peluditos.es</p>
          </div>
        </div>

        <h1 class="invoice-title">FACTURA</h1>

        <div class="invoice-meta">
          <div class="meta-block">
            <h3>Datos del cliente</h3>
            <p><strong>${invoiceData.client}</strong></p>
            <p>Paciente: ${invoiceData.pet}</p>
          </div>
          <div class="meta-block" style="text-align: right;">
            <h3>Datos de factura</h3>
            <p class="highlight">${invoiceData.id}</p>
            <p>Fecha: ${invoiceData.date}</p>
            <p><span class="status ${invoiceData.status}">${statusColors[invoiceData.status].label}</span></p>
          </div>
        </div>

        <table>
          <thead>
            <tr>
              <th>Descripción</th>
              <th class="text-right">Precio</th>
            </tr>
          </thead>
          <tbody>
            ${invoiceData.items.map(item => `
              <tr>
                <td>${item.name}</td>
                <td class="text-right">${item.price.toFixed(2)} €</td>
              </tr>
            `).join('')}
          </tbody>
        </table>

        <div class="totals">
          <div class="totals-row">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)} €</span>
          </div>
          <div class="totals-row">
            <span>IVA (21%)</span>
            <span>${iva.toFixed(2)} €</span>
          </div>
          <div class="totals-row total">
            <span>Total</span>
            <span>${total.toFixed(2)} €</span>
          </div>
        </div>

        <div class="footer">
          <p>Gracias por confiar en Clínica Veterinaria Peluditos</p>
          <p style="margin-top: 4px;">Esta factura ha sido generada electrónicamente y es válida sin firma</p>
        </div>

        <script>
          window.onload = function() {
            window.print();
          }
        </script>
      </body>
      </html>
    `);
    printWindow.document.close();
  };

  const createInvoice = () => {
    if (selectedItems.length === 0 || !selectedClient) return;

    const newInvoice: Invoice = {
      id: `F-2025-${String(invoices.length + 848).padStart(4, '0')}`,
      date: new Date().toLocaleDateString('es-ES'),
      client: selectedClient.name,
      pet: selectedClient.pet,
      items: [...selectedItems],
      total: invoiceTotal,
      status: "pending"
    };

    invoices.unshift(newInvoice);
    setShowModal(false);
    setSelectedItems([]);
    setSelectedClient(null);

    // Generar PDF automáticamente
    generatePDF(newInvoice);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-light">Facturación</h1>
          <p className="text-black/50 mt-1">Gestión de facturas y cobros</p>
        </div>
        <button
          onClick={() => { setSelectedItems([]); setSelectedClient(null); setShowModal(true); }}
          className="flex items-center gap-2 px-6 py-3 bg-[#f68b44] text-white font-medium hover:bg-[#e07a35] transition-colors"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
          </svg>
          Nueva factura
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white p-6 border border-black/5">
          <p className="text-sm text-black/50">Facturado este mes</p>
          <p className="text-2xl font-light mt-2">{totalMonth.toFixed(2)}€</p>
        </div>
        <div className="bg-white p-6 border border-black/5">
          <p className="text-sm text-black/50">Pendiente de cobro</p>
          <p className="text-2xl font-light mt-2 text-[#f68b44]">{totalPending.toFixed(2)}€</p>
        </div>
        <div className="bg-white p-6 border border-black/5">
          <p className="text-sm text-black/50">Facturas este mes</p>
          <p className="text-2xl font-light mt-2">{invoices.length}</p>
        </div>
        <div className="bg-white p-6 border border-black/5">
          <p className="text-sm text-black/50">Ticket medio</p>
          <p className="text-2xl font-light mt-2">{(totalMonth / invoices.length).toFixed(2)}€</p>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-black/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            placeholder="Buscar por cliente o número de factura..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-black/10 focus:outline-none focus:border-[#f68b44]"
          />
        </div>
        <div className="flex gap-2">
          {[
            { key: "all", label: "Todas" },
            { key: "paid", label: "Pagadas" },
            { key: "pending", label: "Pendientes" },
            { key: "overdue", label: "Vencidas" },
          ].map((f) => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={`px-4 py-3 font-medium transition-colors ${
                filter === f.key ? "bg-black text-white" : "bg-white border border-black/10 hover:bg-black/5"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* Table */}
      <div className="bg-white border border-black/5 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-black/5">
                <th className="text-left p-4 font-medium text-black/50 text-sm">Factura</th>
                <th className="text-left p-4 font-medium text-black/50 text-sm">Fecha</th>
                <th className="text-left p-4 font-medium text-black/50 text-sm">Cliente</th>
                <th className="text-left p-4 font-medium text-black/50 text-sm">Conceptos</th>
                <th className="text-left p-4 font-medium text-black/50 text-sm">Total</th>
                <th className="text-left p-4 font-medium text-black/50 text-sm">Estado</th>
                <th className="text-left p-4 font-medium text-black/50 text-sm"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-black/5">
              {filteredInvoices.map((invoice) => (
                <tr key={invoice.id} className="hover:bg-black/[0.02] transition-colors">
                  <td className="p-4">
                    <p className="font-medium">{invoice.id}</p>
                  </td>
                  <td className="p-4 text-sm">{invoice.date}</td>
                  <td className="p-4">
                    <p className="text-sm">{invoice.client}</p>
                    <p className="text-xs text-black/50">{invoice.pet}</p>
                  </td>
                  <td className="p-4">
                    <p className="text-sm text-black/60 truncate max-w-[200px]">
                      {invoice.items.map(i => i.name).join(", ")}
                    </p>
                  </td>
                  <td className="p-4">
                    <p className="font-medium">{(invoice.total * 1.21).toFixed(2)}€</p>
                    <p className="text-xs text-black/40">IVA incl.</p>
                  </td>
                  <td className="p-4">
                    <span className={`inline-block px-3 py-1 text-xs font-medium ${statusColors[invoice.status].bg} ${statusColors[invoice.status].text}`}>
                      {statusColors[invoice.status].label}
                    </span>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => generatePDF(invoice)}
                        className="p-2 hover:bg-black/5 transition-colors"
                        title="Ver factura"
                      >
                        <svg className="w-5 h-5 text-black/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </button>
                      <button
                        onClick={() => generatePDF(invoice)}
                        className="p-2 hover:bg-black/5 transition-colors"
                        title="Descargar PDF"
                      >
                        <svg className="w-5 h-5 text-black/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* New Invoice Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between p-6 border-b border-black/5 sticky top-0 bg-white">
              <h2 className="text-lg font-medium">Nueva factura</h2>
              <button onClick={() => setShowModal(false)} className="p-2 hover:bg-black/5 transition-colors">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-6">
              <div className="grid lg:grid-cols-2 gap-6">
                {/* Left: Client selection and services */}
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Cliente</label>
                    <select
                      className="w-full px-4 py-3 border border-black/10 focus:outline-none focus:border-[#f68b44]"
                      onChange={(e) => {
                        const client = clients.find(c => c.name === e.target.value);
                        setSelectedClient(client || null);
                      }}
                      value={selectedClient?.name || ""}
                    >
                      <option value="">Seleccionar cliente...</option>
                      {clients.map(client => (
                        <option key={client.name} value={client.name}>{client.name} - {client.pet}</option>
                      ))}
                    </select>
                    {selectedClient && (
                      <div className="mt-2 p-3 bg-black/[0.02] text-sm">
                        <p><strong>NIF:</strong> {selectedClient.nif}</p>
                        <p><strong>Dirección:</strong> {selectedClient.address}</p>
                        <p><strong>Email:</strong> {selectedClient.email}</p>
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Servicios disponibles</label>
                    <div className="border border-black/10 max-h-[300px] overflow-y-auto">
                      {services.map((service, i) => (
                        <div
                          key={i}
                          className="flex items-center justify-between p-3 hover:bg-black/[0.02] cursor-pointer border-b border-black/5 last:border-b-0"
                          onClick={() => addItem(service)}
                        >
                          <span className="text-sm">{service.name}</span>
                          <div className="flex items-center gap-3">
                            <span className="text-sm font-medium">{service.price.toFixed(2)}€</span>
                            <svg className="w-5 h-5 text-[#f68b44]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
                            </svg>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right: Invoice preview */}
                <div className="bg-black/[0.02] p-6">
                  <h3 className="font-medium mb-4">Resumen de factura</h3>

                  {selectedItems.length === 0 ? (
                    <p className="text-black/40 text-sm text-center py-8">
                      Añade servicios desde la lista de la izquierda
                    </p>
                  ) : (
                    <div className="space-y-2">
                      {selectedItems.map((item, i) => (
                        <div key={i} className="flex items-center justify-between p-3 bg-white">
                          <span className="text-sm">{item.name}</span>
                          <div className="flex items-center gap-3">
                            <span className="text-sm font-medium">{item.price.toFixed(2)}€</span>
                            <button
                              onClick={() => removeItem(i)}
                              className="text-red-500 hover:text-red-700"
                            >
                              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                              </svg>
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="mt-6 pt-4 border-t border-black/10">
                    <div className="flex justify-between text-sm mb-2">
                      <span>Subtotal</span>
                      <span>{invoiceTotal.toFixed(2)}€</span>
                    </div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>IVA (21%)</span>
                      <span>{(invoiceTotal * 0.21).toFixed(2)}€</span>
                    </div>
                    <div className="flex justify-between text-lg font-medium pt-2 border-t border-black/10">
                      <span>Total</span>
                      <span className="text-[#f68b44]">{(invoiceTotal * 1.21).toFixed(2)}€</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-end gap-3 p-6 border-t border-black/5">
              <button onClick={() => setShowModal(false)} className="px-6 py-3 border border-black/10 font-medium hover:bg-black/5 transition-colors">
                Cancelar
              </button>
              <button
                onClick={createInvoice}
                disabled={selectedItems.length === 0 || !selectedClient}
                className={`px-6 py-3 font-medium transition-colors ${
                  selectedItems.length === 0 || !selectedClient
                    ? 'bg-black/20 text-black/40 cursor-not-allowed'
                    : 'bg-[#f68b44] text-white hover:bg-[#e07a35]'
                }`}
              >
                Crear factura y generar PDF
              </button>
            </div>
          </div>
        </div>
      )}

      {/* PDF Preview Modal */}
      {showPdfModal && viewingInvoice && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-3xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between p-4 border-b border-black/5 sticky top-0 bg-white">
              <h2 className="text-lg font-medium">Vista previa - {viewingInvoice.id}</h2>
              <div className="flex items-center gap-2">
                <button
                  onClick={downloadPDF}
                  className="flex items-center gap-2 px-4 py-2 bg-[#f68b44] text-white font-medium hover:bg-[#e07a35] transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Descargar PDF
                </button>
                <button onClick={() => setShowPdfModal(false)} className="p-2 hover:bg-black/5 transition-colors">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* PDF Preview Content */}
            <div ref={pdfRef} className="p-8 bg-white">
              {/* Header */}
              <div className="flex justify-between items-start mb-8 pb-4 border-b-2 border-[#f68b44]">
                <img src="/logos/logo-horizontal-orange.png" alt="Peluditos CRM" className="h-12" />
                <div className="text-right text-xs text-black/60">
                  <p className="font-medium text-black">Clínica Veterinaria Peluditos</p>
                  <p>CIF: B12345678</p>
                  <p>Calle Veterinaria 123</p>
                  <p>28001 Madrid, España</p>
                  <p>Tel: 912 345 678</p>
                </div>
              </div>

              {/* Invoice Title */}
              <h1 className="text-2xl font-light text-[#f68b44] mb-6">FACTURA</h1>

              {/* Meta info */}
              <div className="flex justify-between mb-8">
                <div>
                  <h3 className="text-xs text-black/40 uppercase mb-2">Datos del cliente</h3>
                  <p className="font-medium">{viewingInvoice.client}</p>
                  <p className="text-sm text-black/60">Paciente: {viewingInvoice.pet}</p>
                </div>
                <div className="text-right">
                  <h3 className="text-xs text-black/40 uppercase mb-2">Datos de factura</h3>
                  <p className="text-lg font-medium text-[#f68b44]">{viewingInvoice.id}</p>
                  <p className="text-sm">Fecha: {viewingInvoice.date}</p>
                  <span className={`inline-block mt-1 px-2 py-0.5 text-xs font-medium ${statusColors[viewingInvoice.status].bg} ${statusColors[viewingInvoice.status].text}`}>
                    {statusColors[viewingInvoice.status].label}
                  </span>
                </div>
              </div>

              {/* Items Table */}
              <table className="w-full mb-6">
                <thead>
                  <tr className="bg-[#f68b44] text-white">
                    <th className="text-left p-3 text-xs uppercase font-medium">Descripción</th>
                    <th className="text-right p-3 text-xs uppercase font-medium">Precio</th>
                  </tr>
                </thead>
                <tbody>
                  {viewingInvoice.items.map((item, i) => (
                    <tr key={i} className="border-b border-black/5">
                      <td className="p-3 text-sm">{item.name}</td>
                      <td className="p-3 text-sm text-right">{item.price.toFixed(2)} €</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Totals */}
              <div className="ml-auto w-64">
                <div className="flex justify-between py-2 text-sm">
                  <span>Subtotal</span>
                  <span>{viewingInvoice.total.toFixed(2)} €</span>
                </div>
                <div className="flex justify-between py-2 text-sm">
                  <span>IVA (21%)</span>
                  <span>{(viewingInvoice.total * 0.21).toFixed(2)} €</span>
                </div>
                <div className="flex justify-between py-3 text-lg font-medium border-t-2 border-[#f68b44] mt-2">
                  <span>Total</span>
                  <span className="text-[#f68b44]">{(viewingInvoice.total * 1.21).toFixed(2)} €</span>
                </div>
              </div>

              {/* Footer */}
              <div className="mt-12 pt-4 border-t border-black/10 text-center text-xs text-black/40">
                <p>Gracias por confiar en Clínica Veterinaria Peluditos</p>
                <p className="mt-1">Esta factura ha sido generada electrónicamente y es válida sin firma</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
