"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const stats = [
  { value: "+27%", label: "más visitas recurrentes" },
  { value: "-40%", label: "menos llamadas para citas" },
  { value: "+18%", label: "más facturación anual" },
];

export default function Stats() {
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
      ref={sectionRef}
      className="relative py-32 lg:py-40 bg-[#f68b44] overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col items-center text-center">
          <div
            className={`mb-12 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <Image
              src="/logos/logo-vertical-white-with-slogan-dark.png"
              alt="Peluditos CRM"
              width={300}
              height={200}
              className="h-44 md:h-52 w-auto"
            />
          </div>

          <h2
            className={`text-2xl md:text-3xl lg:text-4xl font-light text-white mb-16 max-w-2xl transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Clínicas que usan Peluditos CRM consiguen:
          </h2>

          <div className="grid md:grid-cols-3 gap-12 lg:gap-20 w-full max-w-4xl">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`text-center transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${(index + 2) * 150}ms` }}
              >
                <p className="text-5xl md:text-6xl lg:text-7xl font-light text-white mb-3">
                  {stat.value}
                </p>
                <p className="text-lg text-white/80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
