import Link from "next/link";
import Button from "@/components/Button";
import NewsletterForm from "@/components/NewsletterForm";

const SITUACIONES = [
  { text: "Siento que me alejé de mi hijo.", href: "/psicologia#familiar" },
  { text: "No sé cómo hablar con mi adolescente.", href: "/psicologia#adolescentes" },
  { text: "Cuido de todos menos de mí.", href: "/psicologia#adultos" },
  { text: "Necesito volver a encontrarme.", href: "/psicologia#adultos" },
  { text: "Quiero aprender a gestionar lo que siento.", href: "/psicologia#individual" },
  { text: "Estoy atravesando un momento difícil.", href: "/psicologia" },
  { text: "Quiero mejorar mi relación de pareja/familia.", href: "/psicologia#familiar" },
  { text: "Necesito ayuda, pero no sé por dónde empezar.", href: "/contacto" },
];

const SERVICIOS = [
  { id: "individual", label: "Sesiones individuales" },
  { id: "adolescentes", label: "Adolescentes" },
  { id: "adultos", label: "Adultos" },
  { id: "padres", label: "Padres y madres" },
  { id: "familiar", label: "Acompañamiento familiar" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-lavender-50">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-24">
          <div>
            <h1 className="font-serif text-4xl font-semibold leading-tight text-brand-900 sm:text-5xl">
              Hay relaciones que no necesitan más amor.
              <br />
              Necesitan volver a encontrarse.
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-foreground/75">
              Psicología, familia y herramientas para comprender lo que
              sentimos, reconstruir vínculos y aprender a relacionarnos de una
              manera diferente.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/agenda">Quiero empezar mi proceso</Button>
              <Button href="/sobre-mi" variant="secondary">
                Conoce mi trabajo
              </Button>
            </div>
          </div>

          <div className="relative mx-auto aspect-4/5 w-full max-w-sm overflow-hidden rounded-[2rem] bg-brand-100">
            <div className="flex h-full w-full items-center justify-center p-10 text-center text-sm text-brand-700/70">
              [PLACEHOLDER — foto profesional de Jennifer, cálida y cercana]
            </div>
          </div>
        </div>
      </section>

      {/* Qué estás viviendo */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <h2 className="font-serif text-3xl font-semibold text-brand-900">
          Tal vez llegaste aquí porque…
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {SITUACIONES.map((s) => (
            <Link
              key={s.text}
              href={s.href}
              className="rounded-2xl border border-brand-100 bg-white p-6 text-sm font-medium text-foreground/80 shadow-sm transition-colors hover:border-brand-300 hover:text-brand-700"
            >
              &ldquo;{s.text}&rdquo;
            </Link>
          ))}
        </div>
      </section>

      {/* Psicología */}
      <section className="bg-brand-900 text-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
          <h2 className="font-serif text-3xl font-semibold sm:text-4xl">
            Psicología que no se queda solamente en hablar.
          </h2>
          <p className="mt-4 max-w-2xl text-white/75">
            Mi acompañamiento integra escucha, reflexión, herramientas
            prácticas y objetivos concretos — para que cada sesión te deje
            algo con qué seguir, no solo una conversación.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {SERVICIOS.map((s) => (
              <span
                key={s.id}
                className="rounded-full border border-white/25 px-4 py-2 text-sm text-white/85"
              >
                {s.label}
              </span>
            ))}
          </div>
          <div className="mt-10">
            <Button href="/agenda">Agendar mi cita</Button>
          </div>
        </div>
      </section>

      {/* RE:CONÉCTATE */}
      <section className="bg-brand-50">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-24">
          <div className="order-2 aspect-square w-full rounded-[2rem] bg-brand-100 md:order-1">
            <div className="flex h-full w-full items-center justify-center p-10 text-center text-sm text-brand-700/70">
              [PLACEHOLDER — mockups de las tarjetas RE:CONÉCTATE]
            </div>
          </div>
          <div className="order-1 md:order-2">
            <span className="inline-block rounded-full bg-brand-200 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-brand-800">
              Próximamente
            </span>
            <h2 className="mt-4 font-serif text-3xl font-semibold text-brand-900">
              RE:CONÉCTATE
            </h2>
            <p className="text-sm font-medium text-brand-700">
              Mamá/Papá + Adolescente
            </p>
            <p className="mt-4 font-accent text-2xl text-brand-600">
              &ldquo;A veces no dejamos de amarnos. A veces dejamos de
              encontrarnos.&rdquo;
            </p>
            <p className="mt-4 max-w-md text-foreground/75">
              60 tarjetas de experiencias diseñadas desde la psicología para
              que padres e hijos adolescentes puedan conocerse, escucharse,
              jugar, recordar y fortalecer su vínculo.
            </p>
            <div className="mt-6">
              <Button href="/contacto">Quiero que me avisen</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Libros */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <h2 className="font-serif text-3xl font-semibold text-brand-900">
          Mis libros
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {["Conexiones Invisibles", "Empodérate"].map((title) => (
            <div
              key={title}
              className="flex gap-5 rounded-2xl border border-brand-100 bg-white p-6"
            >
              <div className="aspect-[3/4] w-24 shrink-0 rounded-lg bg-brand-100" />
              <div>
                <p className="font-serif text-lg font-semibold text-brand-900">
                  {title}
                </p>
                <p className="mt-1 text-sm text-foreground/60">
                  [PLACEHOLDER — descripción y para quién es]
                </p>
                <span className="mt-3 inline-block text-xs font-semibold uppercase tracking-wide text-brand-500">
                  Próximamente
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Redes */}
      <section className="bg-lavender-50">
        <div className="mx-auto max-w-6xl px-4 py-16 text-center sm:px-6 md:py-24">
          <h2 className="font-serif text-3xl font-semibold text-brand-900">
            También hablamos de esto en redes
          </h2>
          <p className="mx-auto mt-3 max-w-md text-foreground/70">
            Muy pronto verás aquí el contenido más reciente de Instagram,
            TikTok y YouTube.
          </p>
        </div>
      </section>

      {/* Suscripción */}
      <section className="mx-auto max-w-2xl px-4 py-16 text-center sm:px-6 md:py-24">
        <h2 className="font-serif text-3xl font-semibold text-brand-900">
          Quédate cerca.
        </h2>
        <p className="mt-3 text-foreground/70">
          Recibe reflexiones, herramientas psicológicas, recursos para padres
          y contenido que te ayude a comprenderte y relacionarte mejor.
        </p>
        <div className="mt-8">
          <NewsletterForm />
        </div>
      </section>
    </>
  );
}
