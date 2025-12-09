"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function Pricing() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="precio"
      ref={sectionRef}
      className="relative py-32 lg:py-40 bg-[#f4f2ef]"
    >
      <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
        <div
          className={`space-y-8 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-sm font-medium text-[#f68b44] tracking-wider uppercase">
            Precio transparente
          </p>

          <div className="space-y-2">
            <p className="text-7xl md:text-8xl lg:text-9xl font-light tracking-tight">
              29<span className="text-4xl md:text-5xl align-top">€</span>
            </p>
            <p className="text-xl md:text-2xl text-black/50">/mes</p>
          </div>

          <div className="space-y-3 pt-4">
            <p className="text-xl md:text-2xl font-medium">
              Todo incluido. Sin permanencia.
            </p>
            <p className="text-lg text-black/60">
              Soporte humano + actualizaciones automáticas.
            </p>
          </div>

          <div className="pt-8">
            <a
              href="#empezar"
              className="btn-primary inline-block text-lg px-12 py-5"
            >
              Probar gratis 14 días
            </a>
          </div>

          <p className="text-sm text-black/40 pt-4">
            Sin tarjeta de crédito. Cancela cuando quieras.
          </p>
        </div>

        <div
          className={`mt-20 flex justify-center transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <Image
            src="/logos/logo-vertical-orange.png"
            alt="Peluditos CRM"
            width={80}
            height={80}
            className="h-16 w-auto opacity-30"
          />
        </div>
      </div>
    </section>
  );
}
