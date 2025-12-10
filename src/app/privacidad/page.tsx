"use client";

import Link from "next/link";
import Image from "next/image";

export default function PrivacidadPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-black py-6">
        <div className="max-w-4xl mx-auto px-6">
          <Link href="/" className="inline-block">
            <Image
              src="/logos/logo-vertical-white.png"
              alt="Peluditos CRM"
              width={80}
              height={67}
              className="h-12 w-auto"
            />
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Política de Privacidad
        </h1>

        <div className="prose prose-lg max-w-none text-gray-600 space-y-8">
          <p className="text-lg">
            Última actualización: {new Date().toLocaleDateString("es-ES", { year: "numeric", month: "long", day: "numeric" })}
          </p>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              1. Información que Recopilamos
            </h2>
            <p>
              En Peluditos CRM, recopilamos información que nos proporciona directamente cuando:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Se registra para una cuenta o solicita información sobre nuestros servicios</li>
              <li>Completa formularios de contacto en nuestra página web</li>
              <li>Se comunica con nosotros por correo electrónico u otros medios</li>
              <li>Utiliza nuestro software CRM para gestionar su clínica veterinaria</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              2. Uso de la Información
            </h2>
            <p>
              Utilizamos la información recopilada para:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Proporcionar, mantener y mejorar nuestros servicios</li>
              <li>Procesar transacciones y enviar información relacionada</li>
              <li>Enviar comunicaciones técnicas, actualizaciones y mensajes de soporte</li>
              <li>Responder a sus comentarios, preguntas y solicitudes</li>
              <li>Detectar, investigar y prevenir actividades fraudulentas</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              3. Protección de Datos
            </h2>
            <p>
              Implementamos medidas de seguridad técnicas y organizativas apropiadas para proteger
              sus datos personales contra el acceso no autorizado, la alteración, divulgación o
              destrucción. Esto incluye:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Cifrado de datos en tránsito y en reposo</li>
              <li>Acceso restringido a datos personales solo a empleados autorizados</li>
              <li>Auditorías de seguridad periódicas</li>
              <li>Copias de seguridad regulares</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              4. Compartir Información
            </h2>
            <p>
              No vendemos, alquilamos ni compartimos su información personal con terceros para
              fines de marketing. Podemos compartir información únicamente en las siguientes
              circunstancias:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Con proveedores de servicios que nos ayudan a operar nuestro negocio</li>
              <li>Para cumplir con obligaciones legales</li>
              <li>Para proteger nuestros derechos y los de nuestros usuarios</li>
              <li>Con su consentimiento explícito</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              5. Sus Derechos (RGPD)
            </h2>
            <p>
              De acuerdo con el Reglamento General de Protección de Datos (RGPD), usted tiene derecho a:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li><strong>Acceso:</strong> Solicitar una copia de sus datos personales</li>
              <li><strong>Rectificación:</strong> Corregir datos inexactos o incompletos</li>
              <li><strong>Supresión:</strong> Solicitar la eliminación de sus datos</li>
              <li><strong>Portabilidad:</strong> Recibir sus datos en un formato estructurado</li>
              <li><strong>Oposición:</strong> Oponerse al procesamiento de sus datos</li>
              <li><strong>Limitación:</strong> Solicitar la limitación del procesamiento</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              6. Cookies
            </h2>
            <p>
              Utilizamos cookies y tecnologías similares para mejorar su experiencia en nuestro
              sitio web. Las cookies nos ayudan a entender cómo utiliza nuestro sitio y a
              personalizar su experiencia. Puede configurar su navegador para rechazar cookies,
              aunque esto puede afectar algunas funcionalidades del sitio.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              7. Retención de Datos
            </h2>
            <p>
              Conservamos sus datos personales solo durante el tiempo necesario para cumplir
              con los fines para los que fueron recopilados, incluyendo el cumplimiento de
              requisitos legales, contables o de información.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              8. Contacto
            </h2>
            <p>
              Si tiene preguntas sobre esta Política de Privacidad o sobre cómo tratamos sus
              datos personales, puede contactarnos en:
            </p>
            <p className="mt-4">
              <strong>Email:</strong> contact@peluditos.eu<br />
              <strong>Dirección:</strong> España
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              9. Cambios en esta Política
            </h2>
            <p>
              Podemos actualizar esta Política de Privacidad periódicamente. Le notificaremos
              cualquier cambio publicando la nueva política en esta página y actualizando la
              fecha de "última actualización".
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <Link
            href="/"
            className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Volver al inicio
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 py-8 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Peluditos CRM. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
