"use client";

import Link from "next/link";
import Image from "next/image";

export default function TerminosPage() {
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
          Términos y Condiciones
        </h1>

        <div className="prose prose-lg max-w-none text-gray-600 space-y-8">
          <p className="text-lg">
            Última actualización: {new Date().toLocaleDateString("es-ES", { year: "numeric", month: "long", day: "numeric" })}
          </p>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              1. Aceptación de los Términos
            </h2>
            <p>
              Al acceder y utilizar Peluditos CRM, usted acepta estar sujeto a estos Términos y
              Condiciones. Si no está de acuerdo con alguna parte de estos términos, no podrá
              acceder al servicio.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              2. Descripción del Servicio
            </h2>
            <p>
              Peluditos CRM es un software de gestión diseñado específicamente para clínicas
              veterinarias. Nuestro servicio incluye:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Gestión de citas y agenda</li>
              <li>Historial clínico de mascotas</li>
              <li>Gestión de clientes y pacientes</li>
              <li>Control de inventario</li>
              <li>Facturación y reportes</li>
              <li>Recordatorios automáticos</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              3. Registro y Cuenta
            </h2>
            <p>
              Para utilizar Peluditos CRM, debe crear una cuenta proporcionando información
              precisa y completa. Usted es responsable de:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Mantener la confidencialidad de su contraseña</li>
              <li>Todas las actividades que ocurran bajo su cuenta</li>
              <li>Notificarnos inmediatamente sobre cualquier uso no autorizado</li>
              <li>Mantener actualizada su información de contacto</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              4. Uso Aceptable
            </h2>
            <p>
              Al utilizar nuestro servicio, usted se compromete a no:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Violar leyes o regulaciones aplicables</li>
              <li>Infringir derechos de propiedad intelectual</li>
              <li>Transmitir virus o código malicioso</li>
              <li>Intentar acceder a sistemas sin autorización</li>
              <li>Usar el servicio para fines ilegales o no autorizados</li>
              <li>Revender o redistribuir el servicio sin autorización</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              5. Planes y Pagos
            </h2>
            <p>
              Ofrecemos diferentes planes de suscripción. Al suscribirse a un plan de pago:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Los pagos se procesan de forma mensual o anual según el plan elegido</li>
              <li>Las tarifas no incluyen impuestos aplicables</li>
              <li>Los precios pueden cambiar con previo aviso de 30 días</li>
              <li>No hay reembolsos por períodos parciales de uso</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              6. Propiedad Intelectual
            </h2>
            <p>
              Peluditos CRM y todo su contenido, características y funcionalidad son propiedad
              de Peluditos CRM y están protegidos por leyes de propiedad intelectual. No se
              permite copiar, modificar, distribuir, vender o arrendar ninguna parte de
              nuestro servicio sin autorización expresa.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              7. Sus Datos
            </h2>
            <p>
              Usted conserva todos los derechos sobre los datos que introduce en Peluditos CRM.
              Nos otorga una licencia limitada para usar, almacenar y procesar estos datos
              únicamente para proporcionar y mejorar nuestros servicios. Puede exportar sus
              datos en cualquier momento.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              8. Disponibilidad del Servicio
            </h2>
            <p>
              Nos esforzamos por mantener Peluditos CRM disponible las 24 horas del día, los
              7 días de la semana. Sin embargo, no garantizamos que el servicio esté libre
              de interrupciones. Podemos realizar mantenimientos programados con previo aviso.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              9. Limitación de Responsabilidad
            </h2>
            <p>
              En la máxima medida permitida por la ley, Peluditos CRM no será responsable por:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Daños indirectos, incidentales o consecuentes</li>
              <li>Pérdida de datos, beneficios o ingresos</li>
              <li>Interrupciones del servicio</li>
              <li>Errores u omisiones en el contenido</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              10. Cancelación
            </h2>
            <p>
              Puede cancelar su suscripción en cualquier momento desde la configuración de
              su cuenta. Tras la cancelación:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Tendrá acceso hasta el final del período de facturación actual</li>
              <li>Sus datos se conservarán durante 30 días adicionales</li>
              <li>Puede solicitar una exportación de sus datos antes de la eliminación</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              11. Modificaciones
            </h2>
            <p>
              Nos reservamos el derecho de modificar estos términos en cualquier momento.
              Los cambios entrarán en vigor tras su publicación en esta página. El uso
              continuado del servicio después de los cambios constituye su aceptación de
              los nuevos términos.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              12. Ley Aplicable
            </h2>
            <p>
              Estos términos se regirán e interpretarán de acuerdo con las leyes de España,
              sin tener en cuenta sus disposiciones sobre conflictos de leyes. Cualquier
              disputa se someterá a los tribunales competentes de España.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              13. Contacto
            </h2>
            <p>
              Si tiene preguntas sobre estos Términos y Condiciones, puede contactarnos en:
            </p>
            <p className="mt-4">
              <strong>Email:</strong> contact@peluditos.eu<br />
              <strong>Dirección:</strong> España
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
