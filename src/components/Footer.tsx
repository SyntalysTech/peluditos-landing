import Image from "next/image";
import Link from "next/link";

const links = [
  { label: "Sobre nosotros", href: "#about" },
  { label: "Contacto", href: "#contacto" },
  { label: "Privacidad", href: "/privacidad" },
  { label: "Términos", href: "/terminos" },
];

export default function Footer() {
  return (
    <footer className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col items-center space-y-12">
          <Image
            src="/logos/logo-vertical-white.png"
            alt="Peluditos CRM"
            width={120}
            height={100}
            className="h-20 w-auto"
          />

          <nav className="flex flex-wrap justify-center gap-8 lg:gap-12">
            {links.map((link) =>
              link.href.startsWith("/") ? (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-white/60 hover:text-white transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-white/60 hover:text-white transition-colors duration-300"
                >
                  {link.label}
                </a>
              )
            )}
          </nav>

          <div className="w-full h-px bg-white/10" />

          <div className="flex flex-col md:flex-row items-center justify-between w-full gap-4 text-sm text-white/40">
            <p>© {new Date().getFullYear()} Peluditos CRM. Todos los derechos reservados.</p>
            <p>Hecho con dedicación para clínicas veterinarias.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
