import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Escríbele a Jennifer Rugelés — contacto general, agenda de citas, colaboraciones o conferencias.",
};

export default async function ContactoPage({
  searchParams,
}: {
  searchParams: Promise<{ tipo?: string }>;
}) {
  const defaultType = await searchParamsSafe(searchParams);

  return (
    <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 md:py-24">
      <h1 className="font-serif text-4xl font-semibold text-brand-900">
        Conversemos.
      </h1>
      <p className="mt-4 text-foreground/75">
        ¿Buscas agendar una sesión?{" "}
        <a href="/agenda" className="font-medium text-brand-600 underline">
          Ve directo a la agenda
        </a>
        . Para todo lo demás — consultas generales, invitaciones o
        conferencias — este formulario llega directo a Jennifer.
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        <Button href="/agenda" variant="secondary">
          Agendar sesión
        </Button>
        <Button href="https://wa.me/" variant="secondary">
          WhatsApp [PLACEHOLDER — número]
        </Button>
      </div>

      <div className="mt-10">
        <ContactForm defaultType={defaultType} />
      </div>
    </section>
  );
}

async function searchParamsSafe(
  searchParams: Promise<{ tipo?: string }>,
): Promise<"general" | "colaboracion" | "conferencia"> {
  const { tipo } = await searchParams;
  if (tipo === "colaboracion" || tipo === "conferencia") return tipo;
  return "general";
}
