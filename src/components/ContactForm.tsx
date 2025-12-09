"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    clinica: "",
    telefono: "",
    mensaje: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ nombre: "", email: "", clinica: "", telefono: "", mensaje: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contacto" className="py-20 lg:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-4">
            ¿Tienes <span className="font-medium">dudas</span>?
          </h2>
          <p className="text-lg text-black/60">
            Escríbenos y te responderemos lo antes posible
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="nombre" className="block text-sm font-medium text-black/70 mb-2">
                Nombre *
              </label>
              <input
                type="text"
                id="nombre"
                required
                value={formData.nombre}
                onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                className="w-full px-4 py-3 border border-black/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f68b44] focus:border-transparent transition-all"
                placeholder="Tu nombre"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-black/70 mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 border border-black/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f68b44] focus:border-transparent transition-all"
                placeholder="tu@email.com"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="clinica" className="block text-sm font-medium text-black/70 mb-2">
                Nombre de la clínica
              </label>
              <input
                type="text"
                id="clinica"
                value={formData.clinica}
                onChange={(e) => setFormData({ ...formData, clinica: e.target.value })}
                className="w-full px-4 py-3 border border-black/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f68b44] focus:border-transparent transition-all"
                placeholder="Clínica Veterinaria..."
              />
            </div>
            <div>
              <label htmlFor="telefono" className="block text-sm font-medium text-black/70 mb-2">
                Teléfono
              </label>
              <input
                type="tel"
                id="telefono"
                value={formData.telefono}
                onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                className="w-full px-4 py-3 border border-black/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f68b44] focus:border-transparent transition-all"
                placeholder="+34 600 000 000"
              />
            </div>
          </div>

          <div>
            <label htmlFor="mensaje" className="block text-sm font-medium text-black/70 mb-2">
              Mensaje *
            </label>
            <textarea
              id="mensaje"
              required
              rows={5}
              value={formData.mensaje}
              onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
              className="w-full px-4 py-3 border border-black/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f68b44] focus:border-transparent transition-all resize-none"
              placeholder="¿En qué podemos ayudarte?"
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              disabled={status === "loading"}
              className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "loading" ? "Enviando..." : "Enviar mensaje"}
            </button>
          </div>

          {status === "success" && (
            <div className="text-center p-4 bg-green-50 text-green-700 rounded-lg">
              ¡Mensaje enviado correctamente! Te responderemos pronto.
            </div>
          )}

          {status === "error" && (
            <div className="text-center p-4 bg-red-50 text-red-700 rounded-lg">
              Hubo un error al enviar el mensaje. Inténtalo de nuevo.
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
