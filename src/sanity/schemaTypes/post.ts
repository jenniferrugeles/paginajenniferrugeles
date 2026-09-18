import { defineField, defineType } from "sanity";

export default defineType({
  name: "post",
  title: "Artículo de blog",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Título",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "categories",
      title: "Categorías",
      type: "array",
      of: [{ type: "reference", to: [{ type: "category" }] }],
      validation: (rule) => rule.min(1),
    }),
    defineField({
      name: "coverImage",
      title: "Imagen destacada",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Texto alternativo (alt)",
          type: "string",
          validation: (rule) => rule.required(),
        }),
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "excerpt",
      title: "Introducción / resumen",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required().max(280),
    }),
    defineField({
      name: "body",
      title: "Cuerpo del artículo",
      type: "array",
      of: [{ type: "block" }, { type: "image", options: { hotspot: true } }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "practicalTool",
      title: "Herramienta práctica",
      description: "Un ejercicio o herramienta concreta ligada al tema del artículo.",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "closingReflection",
      title: "Reflexión de cierre",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "ctaLabel",
      title: "Texto del botón de CTA",
      type: "string",
      initialValue: "Agendar mi cita",
    }),
    defineField({
      name: "ctaHref",
      title: "Link del CTA",
      type: "string",
      initialValue: "/agenda",
    }),
    defineField({
      name: "publishedAt",
      title: "Fecha de publicación",
      type: "datetime",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "seoTitle",
      title: "Meta title (SEO)",
      type: "string",
      description: "Si se deja vacío, se usa el título del artículo.",
    }),
    defineField({
      name: "seoDescription",
      title: "Meta description (SEO)",
      type: "text",
      rows: 2,
      validation: (rule) => rule.max(160),
    }),
  ],
  preview: {
    select: { title: "title", media: "coverImage", subtitle: "excerpt" },
  },
});
