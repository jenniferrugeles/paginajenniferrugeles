import type { Image, PortableTextBlock } from "sanity";
import { sanityClient } from "./client";

export type Category = { _id: string; title: string; slug: string };

export type PostSummary = {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  coverImage: Image & { alt: string };
  publishedAt: string;
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

const postSummaryProjection = `{
  _id,
  title,
  "slug": slug.current,
  excerpt,
  coverImage,
  publishedAt,
  "categories": categories[]->{_id, title, "slug": slug.current}
}`;

export async function getAllCategories(): Promise<Category[]> {
  if (!sanityClient) return [];
  return sanityClient.fetch(
    `*[_type == "category"] | order(title asc) {_id, title, "slug": slug.current}`,
  );
}

export async function getAllPosts(): Promise<PostSummary[]> {
  if (!sanityClient) return [];
  return sanityClient.fetch(
    `*[_type == "post" && defined(slug.current)] | order(publishedAt desc) ${postSummaryProjection}`,
  );
}

export async function getPostsByCategory(
  categorySlug: string,
): Promise<PostSummary[]> {
  if (!sanityClient) return [];
  return sanityClient.fetch(
    `*[_type == "post" && defined(slug.current) && $categorySlug in categories[]->slug.current] | order(publishedAt desc) ${postSummaryProjection}`,
    { categorySlug },
  );
}

export async function getPostSlugs(): Promise<string[]> {
  if (!sanityClient) return [];
  return sanityClient.fetch(
    `*[_type == "post" && defined(slug.current)].slug.current`,
  );
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  if (!sanityClient) return null;
  return sanityClient.fetch(
    `*[_type == "post" && slug.current == $slug][0]{
      _id, title, "slug": slug.current, excerpt, coverImage, publishedAt,
      body, practicalTool, closingReflection, ctaLabel, ctaHref,
      seoTitle, seoDescription,
      "categories": categories[]->{_id, title, "slug": slug.current}
    }`,
    { slug },
  );
}

export async function getRelatedPosts(
  postId: string,
  categorySlugs: string[],
): Promise<PostSummary[]> {
  if (!sanityClient || categorySlugs.length === 0) return [];
  return sanityClient.fetch(
    `*[_type == "post" && _id != $postId && count((categories[]->slug.current)[@ in $categorySlugs]) > 0] | order(publishedAt desc) [0...3] ${postSummaryProjection}`,
    { postId, categorySlugs },
  );
}
