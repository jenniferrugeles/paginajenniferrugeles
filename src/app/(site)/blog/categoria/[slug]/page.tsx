import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PostCard from "@/components/blog/PostCard";
import { getAllCategories, getPostsByCategory } from "@/sanity/queries";

export const revalidate = 3600;

export async function generateStaticParams() {
  const categories = await getAllCategories();
  return categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const categories = await getAllCategories();
  const category = categories.find((c) => c.slug === slug);
  return {
    title: category ? `${category.title} · Blog` : "Blog",
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const categories = await getAllCategories();
  const category = categories.find((c) => c.slug === slug);

  if (!category) notFound();

  const posts = await getPostsByCategory(slug);

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
      <p className="text-sm font-semibold uppercase tracking-wide text-brand-500">
        Categoría
      </p>
      <h1 className="mt-1 font-serif text-4xl font-semibold text-brand-900">
        {category.title}
      </h1>

      {posts.length === 0 ? (
        <p className="mt-12 text-foreground/60">
          Todavía no hay artículos en esta categoría.
        </p>
      ) : (
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <PostCard key={post._id} post={post} />
          ))}
        </div>
      )}
    </section>
  );
}
