import { defineField, defineType } from "sanity";

export const CATEGORIAS = [
  "Psicología",
  "Crianza",
  "Adolescencia",
  "Familia",
  "Mujeres",
  "Relaciones",
  "Inteligencia Emocional",
  "Salud Mental",
  "Fe y Emociones",
  "Crecimiento Personal",
  "Liderazgo",
  "Empoderamiento",
] as const;

export default defineType({
  name: "category",
  title: "Categoría de blog",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Nombre",
      type: "string",
      options: { list: CATEGORIAS.map((c) => ({ title: c, value: c })) },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
      validation: (rule) => rule.required(),
    }),
  ],
  preview: { select: { title: "title" } },
});
