"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function SpainMap() {
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
      ref={sectionRef}
      className="relative py-32 lg:py-40 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div
              className={`transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <p className="text-sm font-medium text-[#f68b44] tracking-wider uppercase mb-4">
                Presencia nacional
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight">
                Ya confían en nosotros
                <span className="block font-medium">en toda España.</span>
              </h2>
            </div>

            <p
              className={`text-lg text-black/60 max-w-md transition-all duration-700 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              Más de 1.200 clínicas veterinarias gestionan su día a día con Peluditos CRM.
            </p>

            <div
              className={`grid grid-cols-2 gap-6 pt-4 transition-all duration-700 delay-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div>
                <p className="text-4xl md:text-5xl font-light text-[#f68b44]">7</p>
                <p className="text-sm text-black/50 mt-1">ciudades principales</p>
              </div>
              <div>
                <p className="text-4xl md:text-5xl font-light text-[#f68b44]">50</p>
                <p className="text-sm text-black/50 mt-1">provincias cubiertas</p>
              </div>
            </div>
          </div>

          <div
            className={`relative transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <div className="relative aspect-[4/3] max-w-lg mx-auto">
              <Image
                src="/espana-mapa.png"
                alt="Mapa de España con clínicas"
                fill
                className="object-contain"
                style={{ filter: "drop-shadow(0 4px 20px rgba(0,0,0,0.1))" }}
              />
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-[#f68b44]/10" />
              <div className="absolute -top-4 -left-4 w-12 h-12 border-2 border-[#f68b44]/20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
