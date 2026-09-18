import type { Metadata } from "next";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Psicología y acompañamiento",
  description:
    "Sesiones individuales, para adolescentes, adultos, padres y madres, y acompañamiento familiar con Jennifer Rugeles.",
};

const SERVICIOS = [
  {
    id: "individual",
    title: "Sesiones individuales",
    text: "Un espacio propio para comprenderte, ordenar lo que sientes y avanzar con herramientas concretas.",
  },
  {
    id: "adolescentes",
    title: "Adolescentes",
    text: "Identidad, emociones, autoestima, relaciones y presión social — acompañamiento sin juicio, en su propio lenguaje.",
  },
  {
    id: "adultos",
    title: "Adultos",
    text: "Procesos de cambio, crecimiento personal, sanación de experiencias del pasado y recuperación de tu voz e identidad.",
  },
  {
    id: "padres",
    title: "Padres y madres",
    text: "Herramientas para educar con amor y límites, y recuperar la confianza y la comunicación con tus hijos.",
  },
  {
    id: "familiar",
    title: "Acompañamiento familiar",
    text: "Espacios de comunicación y reparación para familias que quieren reconstruir su vínculo.",
  },
];

export default function PsicologiaPage() {
  return (
    <>
      <section className="bg-lavender-50">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 md:py-24">
          <h1 className="font-serif text-4xl font-semibold text-brand-900">
            Psicología que no se queda solamente en hablar.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-foreground/75">
            Mi acompañamiento integra escucha, reflexión, herramientas,
            actividades y ejercicios — con objetivos concretos, no solo
            conversación.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 md:py-24">
        <div className="grid gap-6 sm:grid-cols-2">
          {SERVICIOS.map((s) => (
            <div
              key={s.id}
              id={s.id}
              className="scroll-mt-24 rounded-2xl border border-brand-100 bg-white p-7"
            >
              <h2 className="font-serif text-xl font-semibold text-brand-900">
                {s.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-foreground/70">
                {s.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-3xl bg-brand-900 px-8 py-12 text-center text-white">
          <h2 className="font-serif text-2xl font-semibold sm:text-3xl">
            Da el primer paso. No tienes que tener todo resuelto para pedir
            ayuda.
          </h2>
          <div className="mt-7">
            <Button href="/agenda">Agendar mi cita</Button>
          </div>
        </div>
      </section>
    </>
  );
}
