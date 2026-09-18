import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { PortableText, type PortableTextComponents } from "@portabletext/react";
import PostCard from "@/components/blog/PostCard";
import ShareButtons from "@/components/blog/ShareButtons";
import Button from "@/components/Button";
import { urlForImage } from "@/sanity/image";
import {
  getPostBySlug,
  getPostSlugs,
  getRelatedPosts,
} from "@/sanity/queries";

export const revalidate = 3600;

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://jenniferrugeles.com";

export async function generateStaticParams() {
  const slugs = await getPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.seoTitle || post.title,
    description: post.seoDescription || post.excerpt,
  };
}

const portableTextComponents: PortableTextComponents = {
  types: {
    image: ({ value }) => {
      const src = urlForImage(value)?.width(800).url();
      if (!src) return null;
      return (
        <Image
          src={src}
          alt={value.alt || ""}
          width={800}
          height={500}
          className="my-6 rounded-2xl"
        />
      );
    },
  },
};

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const related = await getRelatedPosts(
    post._id,
    post.categories.map((c) => c.slug),
  );

  const cover = urlForImage(post.coverImage)?.width(1200).height(675).url();
  const date = new Date(post.publishedAt).toLocaleDateString("es-CO", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const url = `${SITE_URL}/blog/${post.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    author: { "@type": "Person", name: "Jennifer Rugelés" },
  };

  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 md:py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="flex flex-wrap gap-1.5">
        {post.categories.map((c) => (
          <Link
            key={c._id}
            href={`/blog/categoria/${c.slug}`}
            className="rounded-full bg-brand-50 px-2.5 py-0.5 text-xs font-medium text-brand-700 hover:bg-brand-100"
          >
            {c.title}
          </Link>
        ))}
      </div>

      <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight text-brand-900">
        {post.title}
      </h1>
      <p className="mt-3 text-sm text-foreground/50">{date}</p>

      {cover && (
        <Image
          src={cover}
          alt={post.coverImage.alt}
          width={1200}
          height={675}
          className="mt-8 w-full rounded-3xl object-cover"
          priority
        />
      )}

      <p className="mt-8 text-lg leading-relaxed text-foreground/80">
        {post.excerpt}
      </p>

      <div className="prose-legal mt-8 space-y-5 text-base leading-relaxed text-foreground/80">
        <PortableText value={post.body} components={portableTextComponents} />
      </div>

      {post.practicalTool && (
        <div className="mt-10 rounded-2xl bg-brand-50 p-6">
          <p className="font-serif text-lg font-semibold text-brand-900">
            Herramienta práctica
          </p>
          <p className="mt-2 whitespace-pre-line text-sm text-foreground/75">
            {post.practicalTool}
          </p>
        </div>
      )}

      {post.closingReflection && (
        <p className="mt-8 font-accent text-2xl text-brand-600">
          {post.closingReflection}
        </p>
      )}

      <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-brand-100 pt-8">
        <ShareButtons title={post.title} url={url} />
        <Button href={post.ctaHref || "/agenda"}>
          {post.ctaLabel || "Agendar mi cita"}
        </Button>
      </div>

      {related.length > 0 && (
        <div className="mt-16">
          <h2 className="font-serif text-2xl font-semibold text-brand-900">
            Artículos relacionados
          </h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <PostCard key={p._id} post={p} />
            ))}
          </div>
        </div>
      )}
    </article>
  );
}
