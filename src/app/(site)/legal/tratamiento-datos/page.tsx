import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = { title: "Tratamiento de datos personales" };

export default function TratamientoDatosPage() {
  return (
    <LegalPage
      title="Política de tratamiento de datos personales"
      updated="[PLACEHOLDER — fecha]"
    >
      <p>
        En cumplimiento de la Ley 1581 de 2012 y el Decreto 1377 de 2013 de
        Colombia, Jennifer Rugeles informa que los datos personales
        recolectados a través de este sitio (nombre, correo, teléfono/
        WhatsApp y motivo general de contacto) serán tratados como base de
        datos privada, con las siguientes finalidades: gestión de citas,
        atención de consultas, envío de contenido a suscriptores, gestión de
        colaboraciones/conferencias y administración de comunidades o
        talleres.
      </p>
      <p>
        Como titular de tus datos, tienes derecho a conocer, actualizar,
        rectificar y solicitar la supresión de tu información, así como a
        revocar la autorización otorgada, en los términos del artículo 8 de
        la Ley 1581 de 2012. Estas solicitudes pueden dirigirse a{" "}
        <span className="font-medium">[PLACEHOLDER — correo de contacto]</span>
        .
      </p>
      <p>
        Para menores de edad (comunidad de adolescentes), el registro y
        tratamiento de datos requiere el consentimiento expreso y verificable
        del padre, madre o representante legal antes de activarse.
      </p>
      <p className="italic text-foreground/50">
        Este texto es un borrador de trabajo. Antes de publicarlo debe ser
        revisado y ajustado por un abogado especializado en protección de
        datos en Colombia.
      </p>
    </LegalPage>
  );
}
