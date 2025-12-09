"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const features = [
  "Agenda online sincronizada",
  "Recordatorios automáticos por WhatsApp, email y SMS",
  "Ficha completa por mascota",
  "Historial de visitas y tratamientos",
  "Multiusuario (recepción, veterinarios, dirección)",
  "Informes básicos de actividad",
];

export default function Features() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="funcionalidades"
      ref={sectionRef}
      className="relative py-32 lg:py-40 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="order-2 lg:order-1">
            <div
              className={`relative aspect-[4/3] transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
            >
              <div className="absolute inset-0 bg-[#f4f2ef]" />
              <Image
                src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?q=80&w=1200&auto=format&fit=crop"
                alt="Dashboard veterinario"
                fill
                className="object-cover"
              />
              <div className="absolute -top-6 -left-6 w-24 h-24 border-2 border-[#f68b44]" />
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-12">
            <div
              className={`transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <p className="text-sm font-medium text-[#f68b44] tracking-wider uppercase mb-4">
                Funcionalidades
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight">
                Todo lo que necesitas.
                <span className="block font-medium">Nada que no uses.</span>
              </h2>
            </div>

            <ul className="space-y-6">
              {features.map((feature, index) => (
                <li
                  key={feature}
                  className={`flex items-start gap-4 transition-all duration-700 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${(index + 1) * 100}ms` }}
                >
                  <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center mt-0.5">
                    <span className="w-2 h-2 bg-[#f68b44]" />
                  </span>
                  <span className="text-lg md:text-xl text-black/80">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
