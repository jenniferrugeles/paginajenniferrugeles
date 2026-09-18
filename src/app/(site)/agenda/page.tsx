import type { Metadata } from "next";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Agendar cita",
  description: "Reserva tu sesión con Jennifer Rugeles.",
};

const calUsername = process.env.NEXT_PUBLIC_CALCOM_USERNAME;

export default function AgendaPage() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 md:py-24">
      <div className="text-center">
        <h1 className="font-serif text-4xl font-semibold text-brand-900">
          Da el primer paso.
        </h1>
        <p className="mt-4 text-lg text-foreground/75">
          No tienes que tener todo resuelto para pedir ayuda.
        </p>
      </div>

      {calUsername ? (
        <div className="mt-12 overflow-hidden rounded-3xl border border-brand-100">
          <iframe
            src={`https://cal.com/${calUsername}`}
            title="Agenda tu cita"
            className="h-[720px] w-full"
          />
        </div>
      ) : (
        <div className="mt-12 rounded-3xl border border-dashed border-brand-200 bg-brand-50 p-10 text-center">
          <p className="text-foreground/70">
            La agenda en línea se está configurando. Mientras tanto,
            escríbenos y coordinamos tu cita directamente.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Button href="/contacto">Escribir por el formulario</Button>
            <Button href="https://wa.me/" variant="secondary">
              WhatsApp [PLACEHOLDER — número]
            </Button>
          </div>
        </div>
      )}

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        <div className="rounded-2xl bg-lavender-50 p-6">
          <p className="font-serif text-lg font-semibold text-brand-900">
            Antes de agendar
          </p>
          <p className="mt-2 text-sm text-foreground/70">
            Elige el tipo de consulta y la modalidad (presencial o virtual)
            que prefieras. Solo pedimos tu nombre, correo, WhatsApp y el
            motivo general de tu consulta — nada de información clínica
            detallada por aquí.
          </p>
        </div>
        <div className="rounded-2xl bg-lavender-50 p-6">
          <p className="font-serif text-lg font-semibold text-brand-900">
            Cancelaciones y cambios
          </p>
          <p className="mt-2 text-sm text-foreground/70">
            Consulta nuestra{" "}
            <a
              href="/legal/cancelacion"
              className="underline hover:text-brand-600"
            >
              política de cancelación y reprogramación
            </a>{" "}
            antes de confirmar tu cita.
          </p>
        </div>
      </div>
    </section>
  );
}
