import { NextStudio } from "next-sanity/studio";
import config from "../../../../sanity.config";
import { sanityConfigured } from "@/sanity/env";

export const dynamic = "force-static";
export { metadata, viewport } from "next-sanity/studio";

export default function StudioPage() {
  if (!sanityConfigured) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-brand-900 p-8 text-center text-white">
        <div>
          <p className="font-serif text-2xl font-semibold">
            El panel de contenido aún no está configurado.
          </p>
          <p className="mt-2 text-white/70">
            Falta crear el proyecto de Sanity y agregar sus variables de
            entorno (NEXT_PUBLIC_SANITY_PROJECT_ID / NEXT_PUBLIC_SANITY_DATASET).
          </p>
        </div>
      </div>
    );
  }

  return <NextStudio config={config} />;
}
