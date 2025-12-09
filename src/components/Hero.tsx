"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollY = window.scrollY;
        const elements = heroRef.current.querySelectorAll(".parallax");
        elements.forEach((el) => {
          const speed = parseFloat((el as HTMLElement).dataset.speed || "0.5");
          (el as HTMLElement).style.transform = `translateY(${scrollY * speed}px)`;
        });
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen bg-[#f4f2ef] overflow-x-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-[#f68b44]/5 rounded-full blur-3xl parallax" data-speed="0.2" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#f68b44]/3 rounded-full blur-3xl parallax" data-speed="0.3" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-32 pb-12 sm:pt-44 sm:pb-20 lg:pt-52 lg:pb-32">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          <div className="space-y-6 sm:space-y-8 lg:space-y-10 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-tight tracking-tight opacity-0 animate-fade-in-up">
              El CRM que hace crecer
              <span className="block font-medium">tu clínica veterinaria.</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-black/60 font-light leading-relaxed max-w-xl mx-auto lg:mx-0 opacity-0 animate-fade-in-up animate-delay-100">
              Gestiona citas, automatiza recordatorios y organiza el historial de cada mascota. Fácil, rápido y pensado para tu día a día.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start opacity-0 animate-fade-in-up animate-delay-200">
              <a href="#empezar" className="btn-primary text-center">
                Empezar gratis
              </a>
              <a href="#como-funciona" className="btn-secondary text-center">
                Ver demo
              </a>
            </div>

            <div className="flex items-center gap-4 sm:gap-8 pt-2 sm:pt-4 justify-center lg:justify-start opacity-0 animate-fade-in-up animate-delay-300">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <span className="text-xs sm:text-sm text-black/50">Sin permanencia</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <span className="text-xs sm:text-sm text-black/50">Soporte incluido</span>
              </div>
            </div>
          </div>

          <div className="relative opacity-0 animate-fade-in-up animate-delay-200 w-full lg:scale-125 lg:translate-x-12">
            {/* Browser mockup */}
            <div className="relative bg-white rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl shadow-black/10 overflow-hidden border border-black/5">
              {/* Browser header */}
              <div className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-3 bg-[#f5f5f5] border-b border-black/5">
                <div className="flex items-center gap-1 sm:gap-1.5">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[#ff5f57]" />
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[#febc2e]" />
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[#28c840]" />
                </div>
                <div className="flex-1 mx-2 sm:mx-4">
                  <div className="bg-white rounded-md px-2 sm:px-3 py-1 sm:py-1.5 text-[10px] sm:text-xs text-black/40 flex items-center gap-1.5 sm:gap-2 max-w-[150px] sm:max-w-xs mx-auto">
                    <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    app.peluditos.com
                  </div>
                </div>
              </div>
              {/* Video del CRM */}
              <div className="relative">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-auto"
                >
                  <source src="/grabacion-crm.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-2 -left-2 sm:-bottom-2 sm:-left-2 lg:-bottom-3 lg:-left-3 bg-white p-1.5 sm:p-2 lg:p-3 shadow-lg rounded-md">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <div className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 bg-[#f68b44]/10 rounded flex items-center justify-center">
                  <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 lg:w-4 lg:h-4 text-[#f68b44]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs sm:text-sm lg:text-base font-medium">+1,200</p>
                  <p className="text-[8px] sm:text-[9px] lg:text-[10px] text-black/50">clínicas confían en nosotros</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in-up animate-delay-400">
        <a href="#beneficio" className="block animate-bounce">
          <svg className="w-6 h-6 text-black/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
}
