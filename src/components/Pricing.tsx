"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const plans = [
  {
    name: "Basic",
    price: 49,
    color: "green",
    popular: false,
    description: "Para clínicas pequeñas que empiezan",
    features: [
      "1 clínica",
      "Agenda completa",
      "Ficha de mascotas",
      "Recordatorios automáticos",
      "2 usuarios",
      "Soporte por email",
    ],
  },
  {
    name: "Pro",
    price: 79,
    color: "orange",
    popular: true,
    description: "El más elegido por clínicas en crecimiento",
    features: [
      "Todo lo de Basic",
      "Usuarios ilimitados",
      "WhatsApp + Email + SMS",
      "Informes y estadísticas",
      "Historial clínico completo",
      "Soporte prioritario",
    ],
  },
  {
    name: "Premium",
    price: 119,
    color: "purple",
    popular: false,
    description: "Para cadenas y clínicas grandes",
    features: [
      "Todo lo de Pro",
      "Multi-clínica",
      "Control financiero",
      "Exportación de datos",
      "Soporte preferente",
      "Onboarding personalizado",
    ],
  },
];

export default function Pricing() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const calculatorRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isCalculatorVisible, setIsCalculatorVisible] = useState(false);

  // Calculator state
  const [clientesActuales, setClientesActuales] = useState(200);
  const [ticketMedio, setTicketMedio] = useState(45);
  const [visitasPerdidas, setVisitasPerdidas] = useState(15);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const calcObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsCalculatorVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    if (calculatorRef.current) {
      calcObserver.observe(calculatorRef.current);
    }

    return () => {
      observer.disconnect();
      calcObserver.disconnect();
    };
  }, []);

  // Calculations
  const clientesRecuperados = Math.round(visitasPerdidas * 0.6);
  const ingresosMensualesExtra = clientesRecuperados * ticketMedio * 2;
  const ingresosAnualesExtra = ingresosMensualesExtra * 12;
  const nuevoClientesPorMes = Math.round(clientesActuales * 0.05);
  const ingresosNuevosClientes = nuevoClientesPorMes * ticketMedio * 3 * 12;
  const ahorroTiempo = 8; // horas semanales
  const ahorroAnual = ingresosAnualesExtra + ingresosNuevosClientes;
  const costoPlan = 79 * 12 + 590; // Plan Pro anual + setup
  const beneficioNeto = ahorroAnual - costoPlan;
  const roi = Math.round((beneficioNeto / costoPlan) * 100);

  return (
    <section
      id="precio"
      ref={sectionRef}
      className="relative py-20 lg:py-32 bg-[#f4f2ef]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-sm font-medium text-[#f68b44] tracking-wider uppercase mb-4">
            Planes y precios
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-4">
            Elige tu plan
          </h2>
          <p className="text-lg text-black/60 max-w-2xl mx-auto">
            Todos los planes incluyen 14 días de prueba gratis. Sin tarjeta de crédito.
          </p>
        </div>

        {/* Setup Banner */}
        <div
          className={`bg-black text-white rounded-2xl p-6 md:p-8 mb-12 text-center transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
            <div>
              <p className="text-sm text-white/60 uppercase tracking-wider mb-1">Setup inicial único</p>
              <p className="text-4xl md:text-5xl font-light">
                590<span className="text-xl align-top">€</span>
              </p>
            </div>
            <div className="hidden md:block w-px h-16 bg-white/20"></div>
            <div className="text-left">
              <p className="text-white/80 text-sm md:text-base">
                <span className="text-[#f68b44] font-medium">Incluye:</span> Alta de clínica, configuración completa,
                importación de datos, formación personalizada y puesta en marcha.
              </p>
            </div>
          </div>
        </div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-20">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative bg-white rounded-3xl p-8 transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              } ${plan.popular ? "ring-2 ring-[#f68b44] scale-105" : ""}`}
              style={{ transitionDelay: `${(index + 2) * 100}ms` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#f68b44] text-white text-xs font-medium px-4 py-1.5 rounded-full">
                  Más popular
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-medium mb-2">{plan.name}</h3>
                <p className="text-sm text-black/50 mb-6">{plan.description}</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-5xl font-light">{plan.price}</span>
                  <span className="text-xl text-black/50">€/mes</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <svg
                      className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                        plan.popular ? "text-[#f68b44]" : "text-green-500"
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-sm text-black/70">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#empezar"
                className={`block text-center py-4 rounded-xl font-medium transition-all ${
                  plan.popular
                    ? "bg-[#f68b44] text-white hover:bg-[#e07a33]"
                    : "bg-black/5 text-black hover:bg-black/10"
                }`}
              >
                Empezar prueba gratis
              </a>
            </div>
          ))}
        </div>

        {/* ROI Calculator */}
        <div
          ref={calculatorRef}
          className={`bg-white rounded-3xl p-8 md:p-12 transition-all duration-700 ${
            isCalculatorVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-10">
            <p className="text-sm font-medium text-[#f68b44] tracking-wider uppercase mb-3">
              Calculadora de ahorro
            </p>
            <h3 className="text-3xl md:text-4xl font-light tracking-tight mb-3">
              ¿Cuánto puede ahorrarte Peluditos CRM?
            </h3>
            <p className="text-black/60">
              Ajusta los valores según tu clínica y descubre el retorno de inversión
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Inputs */}
            <div className="space-y-8">
              <div>
                <label className="block text-sm font-medium mb-3">
                  Clientes activos al mes
                  <span className="text-[#f68b44] ml-2 font-bold">{clientesActuales}</span>
                </label>
                <input
                  type="range"
                  min="50"
                  max="500"
                  value={clientesActuales}
                  onChange={(e) => setClientesActuales(Number(e.target.value))}
                  className="w-full h-2 bg-black/10 rounded-lg appearance-none cursor-pointer accent-[#f68b44]"
                />
                <div className="flex justify-between text-xs text-black/40 mt-1">
                  <span>50</span>
                  <span>500</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-3">
                  Ticket medio por visita
                  <span className="text-[#f68b44] ml-2 font-bold">{ticketMedio}€</span>
                </label>
                <input
                  type="range"
                  min="20"
                  max="150"
                  value={ticketMedio}
                  onChange={(e) => setTicketMedio(Number(e.target.value))}
                  className="w-full h-2 bg-black/10 rounded-lg appearance-none cursor-pointer accent-[#f68b44]"
                />
                <div className="flex justify-between text-xs text-black/40 mt-1">
                  <span>20€</span>
                  <span>150€</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-3">
                  Citas perdidas/olvidadas al mes
                  <span className="text-[#f68b44] ml-2 font-bold">{visitasPerdidas}</span>
                </label>
                <input
                  type="range"
                  min="5"
                  max="50"
                  value={visitasPerdidas}
                  onChange={(e) => setVisitasPerdidas(Number(e.target.value))}
                  className="w-full h-2 bg-black/10 rounded-lg appearance-none cursor-pointer accent-[#f68b44]"
                />
                <div className="flex justify-between text-xs text-black/40 mt-1">
                  <span>5</span>
                  <span>50</span>
                </div>
              </div>

              <div className="bg-[#f4f2ef] rounded-xl p-5">
                <div className="flex items-center gap-3 text-sm">
                  <svg className="w-5 h-5 text-[#f68b44]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-black/70">
                    Además, ahorras <strong className="text-black">{ahorroTiempo} horas/semana</strong> en gestión administrativa
                  </span>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="bg-gradient-to-br from-black to-black/90 text-white rounded-2xl p-8">
              <h4 className="text-lg font-medium mb-6 text-white/80">Tu ahorro estimado anual</h4>

              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center py-3 border-b border-white/10">
                  <span className="text-white/60">Citas recuperadas</span>
                  <span className="font-medium">+{ingresosAnualesExtra.toLocaleString()}€</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-white/10">
                  <span className="text-white/60">Nuevos clientes (boca a boca)</span>
                  <span className="font-medium">+{ingresosNuevosClientes.toLocaleString()}€</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-white/10">
                  <span className="text-white/60">Coste Plan Pro + Setup</span>
                  <span className="text-red-400">-{costoPlan.toLocaleString()}€</span>
                </div>
              </div>

              <div className="bg-white/10 rounded-xl p-6 text-center">
                <p className="text-sm text-white/60 mb-2">Beneficio neto anual</p>
                <p className="text-4xl md:text-5xl font-light text-[#f68b44]">
                  +{beneficioNeto.toLocaleString()}€
                </p>
                <div className="mt-4 inline-flex items-center gap-2 bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  ROI del {roi}%
                </div>
              </div>

              <p className="text-xs text-white/40 text-center mt-6">
                *Estimación basada en datos reales de nuestros clientes
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-10">
            <a
              href="#empezar"
              className="btn-primary inline-block text-lg px-12 py-5"
            >
              Empieza a ahorrar hoy
            </a>
            <p className="text-sm text-black/40 mt-4">
              14 días gratis. Sin tarjeta de crédito.
            </p>
          </div>
        </div>

        {/* Logo */}
        <div
          className={`mt-16 flex justify-center transition-all duration-700 delay-500 ${
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
