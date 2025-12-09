"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function Emotional() {
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
    <section ref={sectionRef} className="relative h-[70vh] min-h-[500px] overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?q=80&w=1600&auto=format&fit=crop"
          alt="Equipo veterinario"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative h-full flex items-center justify-center px-6">
        <h2
          className={`text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-white text-center max-w-4xl leading-tight transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Diseñado para clínicas que quieren
          <span className="block font-medium mt-2">trabajar mejor, no más.</span>
        </h2>
      </div>
    </section>
  );
}
