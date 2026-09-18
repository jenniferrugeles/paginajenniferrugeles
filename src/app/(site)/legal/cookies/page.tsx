import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = { title: "Política de cookies" };

export default function CookiesPage() {
  return (
    <LegalPage title="Política de cookies" updated="[PLACEHOLDER — fecha]">
      <p>
        Este sitio utiliza cookies propias y de terceros para su
        funcionamiento básico y, cuando estén activas, para analítica (Google
        Analytics, Google Search Console) y medición de campañas (Meta
        Pixel).
      </p>
      <p>
        Puedes desactivar las cookies no esenciales desde el aviso de
        cookies que aparece en tu primera visita, o configurando tu
        navegador para bloquearlas. Desactivar cookies esenciales puede
        afectar el funcionamiento del sitio.
      </p>
      <p className="italic text-foreground/50">
        Este texto es un borrador de trabajo — se actualizará con el
        detalle exacto de cookies una vez se activen las integraciones de
        analítica descritas en la sección 37 del plan del sitio.
      </p>
    </LegalPage>
  );
}
