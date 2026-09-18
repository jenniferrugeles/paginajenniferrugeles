import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = { title: "Política de privacidad" };

export default function PrivacidadPage() {
  return (
    <LegalPage title="Política de privacidad" updated="[PLACEHOLDER — fecha]">
      <p>
        Jennifer Rugelés (&ldquo;nosotros&rdquo;) recopila datos personales a
        través de los formularios de este sitio (agenda, contacto,
        suscripción, colaboraciones, testimonios e inscripciones a
        comunidades o talleres) únicamente para los fines que en cada
        formulario se describen: gestionar tu cita, responder tu mensaje,
        enviarte contenido si te suscribes, o coordinar una colaboración.
      </p>
      <p>
        Los datos se almacenan en Supabase (infraestructura con sede en la
        Unión Europea/Estados Unidos, según la región del proyecto) y solo
        Jennifer y su equipo autorizado tienen acceso a ellos. No vendemos ni
        compartimos tus datos con terceros con fines comerciales.
      </p>
      <p>
        Puedes solicitar en cualquier momento el acceso, la corrección o la
        eliminación de tus datos escribiendo a{" "}
        <span className="font-medium">[PLACEHOLDER — correo de contacto]</span>
        .
      </p>
      <p>
        Para más detalle sobre el tratamiento de datos conforme a la Ley 1581
        de 2012, consulta nuestra{" "}
        <a
          href="/legal/tratamiento-datos"
          className="underline hover:text-brand-600"
        >
          política de tratamiento de datos personales
        </a>
        .
      </p>
    </LegalPage>
  );
}
