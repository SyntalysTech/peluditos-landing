"use client";

import { useState } from "react";

const inventory = [
  { id: 1, name: "Vacuna polivalente (Nobivac DHPPi)", category: "Vacunas", stock: 45, minStock: 20, price: "28.50€", expiry: "06/2026" },
  { id: 2, name: "Vacuna antirrábica", category: "Vacunas", stock: 5, minStock: 10, price: "15.00€", expiry: "03/2026" },
  { id: 3, name: "Amoxicilina 250mg (caja 20 comp)", category: "Antibióticos", stock: 12, minStock: 20, price: "18.90€", expiry: "12/2026" },
  { id: 4, name: "Meloxicam 1.5mg/ml (frasco 30ml)", category: "Antiinflamatorios", stock: 28, minStock: 15, price: "24.50€", expiry: "09/2026" },
  { id: 5, name: "Apoquel 5.4mg (caja 100 comp)", category: "Dermatología", stock: 8, minStock: 5, price: "185.00€", expiry: "01/2027" },
  { id: 6, name: "Surolan gotas óticas (15ml)", category: "Dermatología", stock: 22, minStock: 10, price: "22.80€", expiry: "08/2026" },
  { id: 7, name: "Jeringuillas 5ml", category: "Material", stock: 45, minStock: 100, price: "0.15€", expiry: "-" },
  { id: 8, name: "Jeringuillas 10ml", category: "Material", stock: 120, minStock: 100, price: "0.18€", expiry: "-" },
  { id: 9, name: "Guantes látex (caja 100)", category: "Material", stock: 15, minStock: 10, price: "8.50€", expiry: "-" },
  { id: 10, name: "Suero fisiológico 500ml", category: "Fluidos", stock: 35, minStock: 25, price: "3.20€", expiry: "12/2027" },
  { id: 11, name: "Collar isabelino M", category: "Accesorios", stock: 12, minStock: 5, price: "8.00€", expiry: "-" },
  { id: 12, name: "Collar isabelino L", category: "Accesorios", stock: 8, minStock: 5, price: "10.00€", expiry: "-" },
];

const categories = ["Todos", "Vacunas", "Antibióticos", "Antiinflamatorios", "Dermatología", "Material", "Fluidos", "Accesorios"];

export default function InventarioPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Todos");
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState<typeof inventory[0] | null>(null);

  const filteredInventory = inventory.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === "Todos" || item.category === category;
    return matchesSearch && matchesCategory;
  });

  const lowStockCount = inventory.filter((i) => i.stock < i.minStock).length;
  const totalValue = inventory.reduce((acc, i) => acc + (parseFloat(i.price.replace("€", "").replace(",", ".")) * i.stock), 0);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-light">Inventario</h1>
          <p className="text-black/50 mt-1">Control de stock y productos</p>
        </div>
        <button
          onClick={() => { setSelectedItem(null); setShowModal(true); }}
          className="flex items-center gap-2 px-6 py-3 bg-[#f68b44] text-white font-medium hover:bg-[#e07a35] transition-colors"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
          </svg>
          Añadir producto
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white p-6 border border-black/5">
          <p className="text-sm text-black/50">Total productos</p>
          <p className="text-2xl font-light mt-2">{inventory.length}</p>
        </div>
        <div className="bg-white p-6 border border-black/5">
          <p className="text-sm text-black/50">Stock bajo</p>
          <p className="text-2xl font-light mt-2 text-red-500">{lowStockCount}</p>
        </div>
        <div className="bg-white p-6 border border-black/5">
          <p className="text-sm text-black/50">Valor inventario</p>
          <p className="text-2xl font-light mt-2">{totalValue.toFixed(2)}€</p>
        </div>
        <div className="bg-white p-6 border border-black/5">
          <p className="text-sm text-black/50">Categorías</p>
          <p className="text-2xl font-light mt-2">{categories.length - 1}</p>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="relative flex-1">
          <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-black/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            placeholder="Buscar productos..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-black/10 focus:outline-none focus:border-[#f68b44]"
          />
        </div>
        <div className="flex gap-2 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-4 py-3 font-medium transition-colors whitespace-nowrap ${
                category === cat ? "bg-black text-white" : "bg-white border border-black/10 hover:bg-black/5"
              }`}
            >
              {cat}
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
                <th className="text-left p-4 font-medium text-black/50 text-sm">Producto</th>
                <th className="text-left p-4 font-medium text-black/50 text-sm">Categoría</th>
                <th className="text-left p-4 font-medium text-black/50 text-sm">Stock</th>
                <th className="text-left p-4 font-medium text-black/50 text-sm">Precio</th>
                <th className="text-left p-4 font-medium text-black/50 text-sm">Caducidad</th>
                <th className="text-left p-4 font-medium text-black/50 text-sm"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-black/5">
              {filteredInventory.map((item) => (
                <tr key={item.id} className="hover:bg-black/[0.02] transition-colors">
                  <td className="p-4">
                    <p className="font-medium">{item.name}</p>
                  </td>
                  <td className="p-4">
                    <span className="px-3 py-1 bg-black/5 text-sm">{item.category}</span>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <span className={`font-medium ${item.stock < item.minStock ? "text-red-500" : ""}`}>
                        {item.stock}
                      </span>
                      {item.stock < item.minStock && (
                        <span className="px-2 py-0.5 bg-red-100 text-red-700 text-xs">Bajo</span>
                      )}
                    </div>
                    <p className="text-xs text-black/40">Mín: {item.minStock}</p>
                  </td>
                  <td className="p-4 font-medium">{item.price}</td>
                  <td className="p-4 text-sm text-black/60">{item.expiry}</td>
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => { setSelectedItem(item); setShowModal(true); }}
                        className="p-2 hover:bg-black/5 transition-colors"
                        title="Editar"
                      >
                        <svg className="w-5 h-5 text-black/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                      </button>
                      <button className="p-2 hover:bg-black/5 transition-colors" title="Ajustar stock">
                        <svg className="w-5 h-5 text-black/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
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

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-lg">
            <div className="flex items-center justify-between p-6 border-b border-black/5">
              <h2 className="text-lg font-medium">
                {selectedItem ? "Editar producto" : "Nuevo producto"}
              </h2>
              <button onClick={() => setShowModal(false)} className="p-2 hover:bg-black/5 transition-colors">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Nombre del producto</label>
                <input
                  type="text"
                  defaultValue={selectedItem?.name}
                  className="w-full px-4 py-3 border border-black/10 focus:outline-none focus:border-[#f68b44]"
                  placeholder="Nombre del producto"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Categoría</label>
                  <select defaultValue={selectedItem?.category} className="w-full px-4 py-3 border border-black/10 focus:outline-none focus:border-[#f68b44]">
                    {categories.filter(c => c !== "Todos").map((cat) => (
                      <option key={cat}>{cat}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Precio (€)</label>
                  <input
                    type="number"
                    step="0.01"
                    defaultValue={selectedItem?.price.replace("€", "")}
                    className="w-full px-4 py-3 border border-black/10 focus:outline-none focus:border-[#f68b44]"
                    placeholder="0.00"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Stock actual</label>
                  <input
                    type="number"
                    defaultValue={selectedItem?.stock}
                    className="w-full px-4 py-3 border border-black/10 focus:outline-none focus:border-[#f68b44]"
                    placeholder="0"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Stock mínimo</label>
                  <input
                    type="number"
                    defaultValue={selectedItem?.minStock}
                    className="w-full px-4 py-3 border border-black/10 focus:outline-none focus:border-[#f68b44]"
                    placeholder="0"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Fecha de caducidad</label>
                <input
                  type="month"
                  className="w-full px-4 py-3 border border-black/10 focus:outline-none focus:border-[#f68b44]"
                />
              </div>
            </div>
            <div className="flex justify-end gap-3 p-6 border-t border-black/5">
              <button onClick={() => setShowModal(false)} className="px-6 py-3 border border-black/10 font-medium hover:bg-black/5 transition-colors">
                Cancelar
              </button>
              <button onClick={() => setShowModal(false)} className="px-6 py-3 bg-[#f68b44] text-white font-medium hover:bg-[#e07a35] transition-colors">
                {selectedItem ? "Guardar cambios" : "Añadir producto"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
