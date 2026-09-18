import type { ReactNode } from "react";

export default function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 md:py-24">
      <p className="text-xs font-semibold uppercase tracking-wide text-brand-500">
        Borrador — pendiente de revisión por un abogado antes de publicar
      </p>
      <h1 className="mt-3 font-serif text-3xl font-semibold text-brand-900">
        {title}
      </h1>
      <p className="mt-1 text-sm text-foreground/50">
        Última actualización: {updated}
      </p>
      <div className="prose-legal mt-8 space-y-5 text-sm leading-relaxed text-foreground/75">
        {children}
      </div>
    </section>
  );
}
