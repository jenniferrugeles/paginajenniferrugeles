import type { Metadata } from "next";
import Link from "next/link";
import BlogExplorer from "@/components/blog/BlogExplorer";
import { getAllCategories, getAllPosts } from "@/sanity/queries";
import { sanityConfigured } from "@/sanity/env";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Psicología, crianza, adolescencia, familia y relaciones — artículos de Jennifer Rugeles.",
};

export default async function BlogPage() {
  const [posts, categories] = await Promise.all([
    getAllPosts(),
    getAllCategories(),
  ]);

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
      <h1 className="font-serif text-4xl font-semibold text-brand-900">
        Blog
      </h1>
      <p className="mt-3 max-w-xl text-foreground/70">
        Reflexiones y herramientas sobre psicología, crianza, adolescencia,
        familia, relaciones y crecimiento personal.
      </p>

      {!sanityConfigured ? (
        <div className="mt-12 rounded-3xl border border-dashed border-brand-200 bg-brand-50 p-10 text-center">
          <p className="text-foreground/70">
            El blog está listo, solo falta conectar el panel de contenido
            (Sanity) para empezar a publicar artículos.
          </p>
        </div>
      ) : posts.length === 0 ? (
        <div className="mt-12 rounded-3xl border border-dashed border-brand-200 bg-brand-50 p-10 text-center">
          <p className="text-foreground/70">
            Todavía no hay artículos publicados. Muy pronto encontrarás aquí
            reflexiones y herramientas prácticas.
          </p>
          <Link
            href="/contacto"
            className="mt-4 inline-block text-sm font-medium text-brand-600 underline"
          >
            Mientras tanto, escríbeme
          </Link>
        </div>
      ) : (
        <div className="mt-10">
          <BlogExplorer posts={posts} categories={categories} />
        </div>
      )}
    </section>
  );
}
