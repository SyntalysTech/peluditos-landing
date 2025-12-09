"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const steps = [
  {
    number: "01",
    title: "Configura tu clínica en 3 minutos.",
    description: "Servicios, horarios y personal.",
  },
  {
    number: "02",
    title: "Tus clientes reciben recordatorios automáticos.",
    description: "Vacunas, citas y tratamientos.",
  },
  {
    number: "03",
    title: "Tú te enfocas en atender.",
    description: "El sistema trabaja por ti.",
  },
];

export default function HowItWorks() {
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
      id="como-funciona"
      ref={sectionRef}
      className="relative py-32 lg:py-40 bg-[#f4f2ef]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="space-y-16">
            <div
              className={`transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <p className="text-sm font-medium text-[#f68b44] tracking-wider uppercase mb-4">
                Cómo funciona
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight">
                Tres pasos.
                <span className="block font-medium">Sin complicaciones.</span>
              </h2>
            </div>

            <div className="space-y-12">
              {steps.map((step, index) => (
                <div
                  key={step.number}
                  className={`flex gap-6 transition-all duration-700 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${(index + 1) * 200}ms` }}
                >
                  <span className="text-5xl font-extralight text-[#f68b44]/30">
                    {step.number}
                  </span>
                  <div className="pt-2">
                    <h3 className="text-xl md:text-2xl font-medium mb-2">
                      {step.title}
                    </h3>
                    <p className="text-lg text-black/50">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            className={`relative transition-all duration-1000 delay-500 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1581888227599-779811939961?q=80&w=1200&auto=format&fit=crop"
                alt="Veterinario usando tablet"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-[#f68b44]" />
          </div>
        </div>
      </div>
    </section>
  );
}
