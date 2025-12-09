"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/95 navbar-blur py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        <a href="#" className="relative z-10">
          <Image
            src={scrolled ? "/logos/logo-horizontal-white.png" : "/logos/logo-horizontal-orange.png"}
            alt="Peluditos CRM"
            width={280}
            height={70}
            className="h-10 md:h-12 w-auto transition-opacity duration-300"
            priority
          />
        </a>

        <div className="hidden md:flex items-center gap-10">
          <a
            href="#como-funciona"
            className={`text-sm font-medium transition-colors duration-300 ${
              scrolled ? "text-white/80 hover:text-white" : "text-black/70 hover:text-black"
            }`}
          >
            Cómo funciona
          </a>
          <a
            href="#funcionalidades"
            className={`text-sm font-medium transition-colors duration-300 ${
              scrolled ? "text-white/80 hover:text-white" : "text-black/70 hover:text-black"
            }`}
          >
            Funcionalidades
          </a>
          <a
            href="#precio"
            className={`text-sm font-medium transition-colors duration-300 ${
              scrolled ? "text-white/80 hover:text-white" : "text-black/70 hover:text-black"
            }`}
          >
            Precio
          </a>
          <a
            href="/demo"
            className="px-6 py-3 text-sm font-medium bg-[#f68b44] text-white hover:bg-[#e07a35] transition-all duration-300"
          >
            Demo
          </a>
          <a
            href="#empezar"
            className={`px-6 py-3 text-sm font-medium transition-all duration-300 ${
              scrolled
                ? "bg-white text-black hover:bg-white/90"
                : "bg-black text-white hover:bg-black/80"
            }`}
          >
            Empezar gratis
          </a>
        </div>

        <button
          className="md:hidden relative z-[60] w-8 h-8 flex flex-col justify-center items-center gap-1.5"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Menu"
        >
          <span
            className={`block w-6 h-0.5 transition-all duration-300 ${
              mobileMenuOpen || scrolled ? "bg-white" : "bg-black"
            } ${mobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 transition-all duration-300 ${
              mobileMenuOpen || scrolled ? "bg-white" : "bg-black"
            } ${mobileMenuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 transition-all duration-300 ${
              mobileMenuOpen || scrolled ? "bg-white" : "bg-black"
            } ${mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      <div
        className={`md:hidden fixed inset-0 bg-black transition-all duration-500 ${
          mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          <a
            href="#como-funciona"
            className="text-2xl font-light text-white hover:text-[#f68b44] transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Cómo funciona
          </a>
          <a
            href="#funcionalidades"
            className="text-2xl font-light text-white hover:text-[#f68b44] transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Funcionalidades
          </a>
          <a
            href="#precio"
            className="text-2xl font-light text-white hover:text-[#f68b44] transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Precio
          </a>
          <a
            href="/demo"
            className="px-10 py-4 bg-[#f68b44] text-white text-lg font-medium hover:bg-[#e07a35] transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Demo
          </a>
          <a
            href="#empezar"
            className="px-10 py-4 bg-white text-black text-lg font-medium hover:bg-white/90 transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Empezar gratis
          </a>
        </div>
      </div>
    </nav>
  );
}
