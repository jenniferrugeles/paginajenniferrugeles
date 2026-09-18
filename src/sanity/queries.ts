import type { Image, PortableTextBlock } from "sanity";
import { sanityClient } from "./client";
import {
  ALL_CATEGORIES,
  categoryFromTitle,
  type Category,
} from "./categories";

export type { Category };

type RawPost = {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  coverImage: Image & { alt: string };
  publishedAt: string;
  categories?: string[];
};

export type PostSummary = Omit<RawPost, "categories"> & {
  categories: Category[];
};

export type Post = PostSummary & {
  body: PortableTextBlock[];
  practicalTool?: string;
  closingReflection?: string;
  ctaLabel?: string;
  ctaHref?: string;
  seoTitle?: string;
  seoDescription?: string;
};

function withCategories<T extends { categories?: string[] }>(
  raw: T,
): Omit<T, "categories"> & { categories: Category[] } {
  const categories = (raw.categories ?? [])
    .map(categoryFromTitle)
    .filter((c): c is Category => Boolean(c));
  return { ...raw, categories };
}

const summaryProjection = `{
  _id, title, "slug": slug.current, excerpt, coverImage, publishedAt, categories
}`;

export async function getAllCategories(): Promise<Category[]> {
  return ALL_CATEGORIES;
}

export async function getAllPosts(): Promise<PostSummary[]> {
  if (!sanityClient) return [];
  const raw: RawPost[] = await sanityClient.fetch(
    `*[_type == "post" && defined(slug.current)] | order(publishedAt desc) ${summaryProjection}`,
  );
  return raw.map(withCategories);
}

export async function getPostsByCategory(
  categorySlug: string,
): Promise<PostSummary[]> {
  const category = ALL_CATEGORIES.find((c) => c.slug === categorySlug);
  if (!sanityClient || !category) return [];
  const raw: RawPost[] = await sanityClient.fetch(
    `*[_type == "post" && defined(slug.current) && $title in categories] | order(publishedAt desc) ${summaryProjection}`,
    { title: category.title },
  );
  return raw.map(withCategories);
}

export async function getPostSlugs(): Promise<string[]> {
  if (!sanityClient) return [];
  return sanityClient.fetch(
    `*[_type == "post" && defined(slug.current)].slug.current`,
  );
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  if (!sanityClient) return null;
  const raw: (RawPost & Omit<Post, keyof PostSummary>) | null =
    await sanityClient.fetch(
    `*[_type == "post" && slug.current == $slug][0]{
      _id, title, "slug": slug.current, excerpt, coverImage, publishedAt,
      body, practicalTool, closingReflection, ctaLabel, ctaHref,
      seoTitle, seoDescription, categories
    }`,
    { slug },
  );
  return raw ? withCategories(raw) : null;
}

export async function getRelatedPosts(
  postId: string,
  categories: Category[],
): Promise<PostSummary[]> {
  if (!sanityClient || categories.length === 0) return [];
  const raw: RawPost[] = await sanityClient.fetch(
    `*[_type == "post" && _id != $postId && count(categories[@ in $titles]) > 0] | order(publishedAt desc) [0...3] ${summaryProjection}`,
    { postId, titles: categories.map((c) => c.title) },
  );
  return raw.map(withCategories);
}
