"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function MobileApp() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeScreen, setActiveScreen] = useState(0);

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

  useEffect(() => {
    if (!isVisible) return;
    const interval = setInterval(() => {
      setActiveScreen((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, [isVisible]);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-[#f4f2ef] overflow-hidden"
    >
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <p className="text-sm font-medium text-[#f68b44] tracking-wider uppercase mb-4">
              App para clientes
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight mb-6">
              Tus clientes,{" "}
              <span className="font-medium">siempre conectados.</span>
            </h2>
            <p className="text-lg text-black/60 mb-8 max-w-lg">
              Una app donde tus clientes reservan citas, reciben recordatorios
              y acceden al historial médico de sus mascotas. Sin llamadas, sin esperas.
            </p>

            {/* Features list */}
            <ul className="space-y-4 mb-8">
              {[
                "Reserva de citas 24/7",
                "Recordatorios automáticos de vacunas",
                "Historial médico completo",
                "Chat directo con la clínica",
              ].map((feature, i) => (
                <li
                  key={feature}
                  className={`flex items-center gap-3 transition-all duration-500 ${
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                  }`}
                  style={{ transitionDelay: `${(i + 2) * 100}ms` }}
                >
                  <div className="w-5 h-5 bg-[#f68b44] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-black/80">{feature}</span>
                </li>
              ))}
            </ul>

            {/* App stores */}
            <div
              className={`flex flex-wrap items-center gap-3 transition-all duration-700 delay-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <p className="text-sm text-black/50">Próximamente en:</p>
              <div className="flex items-center gap-2 px-3 py-1.5 bg-black/10 rounded text-sm text-black/70">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                </svg>
                App Store
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 bg-black/10 rounded text-sm text-black/70">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z"/>
                </svg>
                Google Play
              </div>
            </div>
          </div>

          {/* Phone */}
          <div
            className={`flex justify-center transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="relative w-[260px] h-[520px] bg-black rounded-[45px] p-2.5 shadow-2xl">
              <div className="relative w-full h-full bg-white rounded-[36px] overflow-hidden">
                {/* Status bar */}
                <div className="absolute top-0 left-0 right-0 h-7 bg-[#f68b44] flex items-center justify-between px-6 z-10">
                  <span className="text-white text-[10px] font-medium">9:41</span>
                  <div className="w-5 h-2.5 bg-white/80 rounded-sm">
                    <div className="w-3 h-full bg-green-400 rounded-sm" />
                  </div>
                </div>

                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-b-2xl z-20" />

                {/* App header */}
                <div className="absolute top-7 left-0 right-0 h-11 bg-[#f68b44] flex items-center justify-center z-10">
                  <Image
                    src="/logos/logo-horizontal-white.png"
                    alt="Peluditos"
                    width={90}
                    height={27}
                    className="h-5 w-auto"
                  />
                </div>

                {/* Screen content */}
                <div className="absolute inset-x-0 top-[72px] bottom-14 overflow-hidden">
                  {/* Screen 1: Home */}
                  <div
                    className={`absolute inset-0 p-4 transition-all duration-500 ${
                      activeScreen === 0 ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full"
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-10 h-10 bg-[#f68b44]/10 rounded-full flex items-center justify-center text-xl">
                        🐕
                      </div>
                      <div>
                        <p className="text-[11px] text-black/50">Hola,</p>
                        <p className="font-semibold text-sm">María García</p>
                      </div>
                    </div>

                    <p className="text-[11px] text-black/50 uppercase tracking-wider mb-2">Mis mascotas</p>
                    <div className="grid grid-cols-2 gap-2 mb-5">
                      <div className="bg-[#f4f2ef] p-3 rounded-xl text-center">
                        <div className="text-xl mb-1">🐕</div>
                        <p className="font-medium text-xs">Luna</p>
                        <p className="text-[10px] text-black/50">Golden</p>
                      </div>
                      <div className="bg-[#f4f2ef] p-3 rounded-xl text-center">
                        <div className="text-xl mb-1">🐈</div>
                        <p className="font-medium text-xs">Michi</p>
                        <p className="text-[10px] text-black/50">Siamés</p>
                      </div>
                    </div>

                    <p className="text-[11px] text-black/50 uppercase tracking-wider mb-2">Próxima cita</p>
                    <div className="bg-[#f68b44] text-white p-4 rounded-xl">
                      <p className="font-medium text-sm">Vacunación - Luna</p>
                      <p className="text-xs text-white/80 mt-1">Mañana a las 10:00</p>
                    </div>
                  </div>

                  {/* Screen 2: Notifications */}
                  <div
                    className={`absolute inset-0 p-4 transition-all duration-500 ${
                      activeScreen === 1 ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"
                    }`}
                  >
                    <p className="font-semibold text-base mb-4">Notificaciones</p>
                    <div className="space-y-3">
                      {[
                        { color: "bg-[#f68b44]", text: "Vacuna de Luna mañana", time: "Hace 2h" },
                        { color: "bg-green-500", text: "Cita confirmada: Max", time: "Hace 5h" },
                        { color: "bg-blue-500", text: "Resultados disponibles", time: "Ayer" },
                      ].map((n, i) => (
                        <div key={i} className="flex items-start gap-3 p-3 bg-[#f4f2ef] rounded-xl">
                          <div className={`w-8 h-8 ${n.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <div>
                            <p className="text-xs font-medium">{n.text}</p>
                            <p className="text-[10px] text-black/50 mt-0.5">{n.time}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Screen 3: Book */}
                  <div
                    className={`absolute inset-0 p-4 transition-all duration-500 ${
                      activeScreen === 2 ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"
                    }`}
                  >
                    <p className="font-semibold text-base mb-4">Reservar cita</p>

                    <p className="text-[11px] text-black/50 uppercase mb-2">Mascota</p>
                    <div className="flex gap-2 mb-4">
                      <div className="flex-1 bg-[#f68b44] text-white p-3 rounded-xl text-center">
                        <span className="text-lg">🐕</span>
                        <p className="text-[10px] mt-1">Luna</p>
                      </div>
                      <div className="flex-1 bg-[#f4f2ef] p-3 rounded-xl text-center">
                        <span className="text-lg">🐈</span>
                        <p className="text-[10px] mt-1">Michi</p>
                      </div>
                    </div>

                    <p className="text-[11px] text-black/50 uppercase mb-2">Servicio</p>
                    <div className="space-y-2 mb-4">
                      <div className="p-3 bg-[#f68b44]/10 border border-[#f68b44] rounded-xl">
                        <p className="text-xs font-medium">Consulta general</p>
                      </div>
                      <div className="p-3 bg-[#f4f2ef] rounded-xl">
                        <p className="text-xs text-black/70">Vacunación</p>
                      </div>
                    </div>

                    <button className="w-full bg-[#f68b44] text-white py-3 rounded-xl text-sm font-medium">
                      Seleccionar fecha
                    </button>
                  </div>
                </div>

                {/* Bottom nav */}
                <div className="absolute bottom-0 left-0 right-0 h-14 bg-white border-t border-black/5 flex items-center justify-around">
                  {[
                    { icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6", label: "Inicio", screen: 0 },
                    { icon: "M12 4v16m8-8H4", label: "Reservar", screen: 2 },
                    { icon: "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9", label: "Alertas", screen: 1 },
                  ].map((item) => (
                    <button
                      key={item.label}
                      onClick={() => setActiveScreen(item.screen)}
                      className={`flex flex-col items-center gap-1 ${activeScreen === item.screen ? "text-[#f68b44]" : "text-black/40"}`}
                    >
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                      </svg>
                      <span className="text-[9px]">{item.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
