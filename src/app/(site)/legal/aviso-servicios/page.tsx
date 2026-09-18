import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = { title: "Aviso sobre servicios psicológicos" };

export default function AvisoServiciosPage() {
  return (
    <LegalPage
      title="Aviso sobre servicios psicológicos"
      updated="[PLACEHOLDER — fecha]"
    >
      <p>
        Jennifer Rugeles es psicóloga{" "}
        <span className="font-medium">
          [PLACEHOLDER — número de tarjeta profesional / registro]
        </span>
        . Los servicios ofrecidos a través de este sitio (sesiones
        individuales, de pareja, familiares, para adolescentes, adultos y
        padres) constituyen acompañamiento psicológico profesional, tanto en
        modalidad presencial como virtual.
      </p>
      <p>
        En caso de urgencia o riesgo de vida (ideación suicida, crisis
        aguda), este sitio y el canal de agenda en línea no son un medio de
        atención inmediata: comunícate con la Línea 123 o la línea de salud
        mental de tu ciudad, o acude al servicio de urgencias más cercano.
      </p>
      <p>
        El contenido del blog, videos, libros y conferencias tiene fines
        educativos y de divulgación — no constituye diagnóstico ni
        tratamiento psicológico individual, y no reemplaza una sesión con un
        profesional.
      </p>
      <p className="italic text-foreground/50">
        Este texto es un borrador. Debe completarse con tu número de tarjeta
        profesional y ser revisado por un abogado antes de publicarse.
      </p>
    </LegalPage>
  );
}
