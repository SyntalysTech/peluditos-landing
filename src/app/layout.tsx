import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Peluditos CRM | El CRM que hace crecer tu clínica veterinaria",
  description: "Gestiona citas, automatiza recordatorios y organiza el historial de cada mascota. Fácil, rápido y pensado para tu día a día.",
  keywords: ["CRM veterinario", "software veterinario", "gestión clínica veterinaria", "citas veterinario", "historial mascotas"],
  authors: [{ name: "Peluditos CRM" }],
  openGraph: {
    title: "Peluditos CRM | El CRM que hace crecer tu clínica veterinaria",
    description: "Gestiona citas, automatiza recordatorios y organiza el historial de cada mascota.",
    type: "website",
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    title: "Peluditos CRM",
    description: "El CRM que hace crecer tu clínica veterinaria",
  },
  icons: {
    icon: "/logos/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} antialiased overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
