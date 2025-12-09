"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const images = [
  {
    src: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?q=80&w=1400&auto=format&fit=crop",
    alt: "Veterinario con perro",
  },
  {
    src: "https://images.unsplash.com/photo-1548767797-d8c844163c4c?q=80&w=1400&auto=format&fit=crop",
    alt: "Gato en consulta veterinaria",
  },
  {
    src: "https://images.unsplash.com/photo-1612531386530-97286d97c2d2?q=80&w=1400&auto=format&fit=crop",
    alt: "Equipo veterinario trabajando",
  },
];

export default function Benefit() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const textClass = `space-y-6 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`;
  const containerClass = `mt-20 relative aspect-[16/9] max-w-4xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`;

  return (
    <section
      id="beneficio"
      ref={sectionRef}
      className="relative py-32 lg:py-40 bg-white"
    >
      <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center">
        <div className={textClass}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight">
            Más visitas recurrentes.
          </h2>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight">
            Menos tareas repetitivas.
          </h2>
          <p className="text-xl md:text-2xl text-black/50 font-light pt-4">
            Un sistema simple que tu equipo aprende en 5 minutos.
          </p>
        </div>

        <div className={containerClass}>
          <div className="absolute inset-0 bg-[#f4f2ef]" />

          {images.map((image, index) => (
            <div
              key={image.src}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${currentImage === index ? "opacity-100" : "opacity-0"}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
              />
            </div>
          ))}

          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${currentImage === index ? "bg-white w-6" : "bg-white/50 hover:bg-white/70"}`}
                aria-label={`Ver imagen ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
