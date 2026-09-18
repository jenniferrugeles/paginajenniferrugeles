import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = { title: "Términos y condiciones" };

export default function TerminosPage() {
  return (
    <LegalPage title="Términos y condiciones" updated="[PLACEHOLDER — fecha]">
      <p>
        Este sitio es operado por Jennifer Rugeles. Al usarlo aceptas estos
        términos, que aplican a la navegación del sitio, la compra de libros
        y del kit RE:CONÉCTATE, y la reserva de sesiones psicológicas.
      </p>
      <p>
        Los contenidos del blog, videos y materiales descargables tienen
        fines educativos e informativos, y no sustituyen un proceso
        psicológico individual. Los productos digitales/físicos (libros,
        RE:CONÉCTATE) se venden bajo la información de precio y descripción
        publicada en cada página de producto al momento de la compra.
      </p>
      <p>
        Los pagos se procesan a través de Wompi. Jennifer Rugeles no almacena
        datos de tarjetas ni de medios de pago — esa información es
        gestionada directamente por la pasarela de pago.
      </p>
      <p className="italic text-foreground/50">
        Este texto es un borrador de trabajo. Antes de publicarlo debe ser
        revisado por un abogado.
      </p>
    </LegalPage>
  );
}
