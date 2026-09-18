import type { Metadata } from "next";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Sobre mí",
  description:
    "Conoce a Jennifer Rugeles — psicóloga, escritora, conferencista y mentora en crianza.",
};

export default function SobreMiPage() {
  return (
    <>
      <section className="bg-lavender-50">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-24">
          <div>
            <h1 className="font-serif text-4xl font-semibold text-brand-900">
              Conoce a Jennifer
            </h1>
            <p className="mt-3 text-sm font-medium uppercase tracking-wide text-brand-600">
              Psicóloga · Escritora · Conferencista · Creadora de contenido ·
              Mentora en crianza
            </p>
          </div>
          <div className="aspect-4/5 w-full max-w-sm rounded-[2rem] bg-brand-100 md:justify-self-end">
            <div className="flex h-full w-full items-center justify-center p-10 text-center text-sm text-brand-700/70">
              [PLACEHOLDER — foto de Jennifer]
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 md:py-24">
        <div className="space-y-6 text-lg leading-relaxed text-foreground/80">
          <p className="font-serif text-2xl text-brand-900">
            [PLACEHOLDER — historia de Jennifer en primera persona: qué hace,
            por qué lo hace, a quién acompaña y qué la diferencia. Comparte tu
            trayectoria, formación y experiencia y preparo un primer borrador
            en tu tono para que lo ajustes.]
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          <div className="rounded-2xl border border-brand-100 bg-white p-6">
            <p className="font-serif text-lg font-semibold text-brand-900">
              Mi propósito
            </p>
            <p className="mt-2 text-sm text-foreground/70">
              Creo que pedir ayuda también es una forma de valentía. Ayudo a
              las personas a comprenderse, sanar, reconstruirse y aprender
              nuevas formas de relacionarse.
            </p>
          </div>
          <div className="rounded-2xl border border-brand-100 bg-white p-6">
            <p className="font-serif text-lg font-semibold text-brand-900">
              Con padres
            </p>
            <p className="mt-2 text-sm text-foreground/70">
              Los acompaño a convertirse en una influencia positiva, para que
              sus hijos crezcan seguros, fuertes y auténticos.
            </p>
          </div>
          <div className="rounded-2xl border border-brand-100 bg-white p-6">
            <p className="font-serif text-lg font-semibold text-brand-900">
              Con mujeres
            </p>
            <p className="mt-2 text-sm text-foreground/70">
              Acompaño a recuperar la voz, la autoestima, la identidad y la
              capacidad de pedir ayuda.
            </p>
          </div>
        </div>

        <div className="mt-16 rounded-3xl bg-brand-50 p-8">
          <h2 className="font-serif text-2xl font-semibold text-brand-900">
            Fe que acompaña, psicología que transforma.
          </h2>
          <p className="mt-3 max-w-2xl text-foreground/75">
            Mi fe forma parte de cómo comprendo la vida, pero mi trabajo
            psicológico conserva siempre rigor profesional. La fe nunca se
            usa aquí para culpabilizar, reemplazar la atención psicológica ni
            prometer curaciones — se integra de forma humana, esperanzadora y
            respetuosa.
          </p>
        </div>

        <div className="mt-14 text-center">
          <Button href="/agenda">Quiero empezar mi proceso</Button>
        </div>
      </section>
    </>
  );
}
