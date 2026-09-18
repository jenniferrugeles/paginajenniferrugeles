import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = { title: "Cancelación y reprogramación" };

export default function CancelacionPage() {
  return (
    <LegalPage
      title="Política de cancelación y reprogramación"
      updated="[PLACEHOLDER — fecha]"
    >
      <p>
        Si necesitas cancelar o reprogramar tu cita, te pedimos avisar con al
        menos{" "}
        <span className="font-medium">
          [PLACEHOLDER — ej. 24 horas de anticipación]
        </span>{" "}
        a través del mismo canal donde agendaste (Cal.com) o escribiendo por
        WhatsApp/formulario de contacto.
      </p>
      <p>
        Las cancelaciones o inasistencias sin aviso previo dentro de ese
        plazo{" "}
        <span className="font-medium">
          [PLACEHOLDER — definir si se cobra la sesión, se pierde el cupo, o
          se permite una reprogramación]
        </span>
        .
      </p>
      <p className="italic text-foreground/50">
        Falta confirmar contigo las condiciones exactas (plazo, número de
        reprogramaciones permitidas, si hay algún costo) para dejar este
        texto definitivo.
      </p>
    </LegalPage>
  );
}
