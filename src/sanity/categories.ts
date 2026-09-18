export const CATEGORIAS = [
  { title: "Psicología", slug: "psicologia" },
  { title: "Crianza", slug: "crianza" },
  { title: "Adolescencia", slug: "adolescencia" },
  { title: "Familia", slug: "familia" },
  { title: "Mujeres", slug: "mujeres" },
  { title: "Relaciones", slug: "relaciones" },
  { title: "Inteligencia Emocional", slug: "inteligencia-emocional" },
  { title: "Salud Mental", slug: "salud-mental" },
  { title: "Fe y Emociones", slug: "fe-y-emociones" },
  { title: "Crecimiento Personal", slug: "crecimiento-personal" },
  { title: "Liderazgo", slug: "liderazgo" },
  { title: "Empoderamiento", slug: "empoderamiento" },
] as const;

export type Category = { _id: string; title: string; slug: string };

export const ALL_CATEGORIES: Category[] = CATEGORIAS.map((c) => ({
  _id: c.slug,
  title: c.title,
  slug: c.slug,
}));

export function categoryFromTitle(title: string): Category | undefined {
  return ALL_CATEGORIES.find((c) => c.title === title);
}

export function categoryFromSlug(slug: string): Category | undefined {
  return ALL_CATEGORIES.find((c) => c.slug === slug);
}
