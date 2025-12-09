"use client";

import { useEffect, useRef, useState } from "react";

export default function CTA() {
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
      id="empezar"
      ref={sectionRef}
      className="relative py-32 lg:py-40 bg-white"
    >
      <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
        <div
          className={`space-y-8 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight">
            Empieza hoy.
            <span className="block font-medium">Resultados desde el primer día.</span>
          </h2>

          <p className="text-lg md:text-xl text-black/60 max-w-2xl mx-auto">
            Únete a más de 1,200 clínicas veterinarias que ya optimizan su día a día con Peluditos CRM.
          </p>

          <form className="max-w-md mx-auto pt-8 space-y-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="tu@email.com"
                className="flex-1 px-6 py-4 bg-[#f4f2ef] border-0 text-black placeholder:text-black/40 focus:outline-none focus:ring-2 focus:ring-[#f68b44]"
              />
              <button type="submit" className="btn-primary whitespace-nowrap">
                Empezar gratis
              </button>
            </div>
            <p className="text-sm text-black/40">
              14 días gratis. Sin compromiso.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
