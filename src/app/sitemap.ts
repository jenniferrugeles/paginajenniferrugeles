import type { MetadataRoute } from "next";
import { getAllCategories, getPostSlugs } from "@/sanity/queries";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://jenniferrugeles.com";

const STATIC_ROUTES = [
  "",
  "/psicologia",
  "/sobre-mi",
  "/contacto",
  "/agenda",
  "/blog",
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [slugs, categories] = await Promise.all([
    getPostSlugs(),
    getAllCategories(),
  ]);

  const staticEntries = STATIC_ROUTES.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
  }));

  const postEntries = slugs.map((slug) => ({
    url: `${SITE_URL}/blog/${slug}`,
    lastModified: new Date(),
  }));

  const categoryEntries = categories.map((c) => ({
    url: `${SITE_URL}/blog/categoria/${c.slug}`,
    lastModified: new Date(),
  }));

  return [...staticEntries, ...postEntries, ...categoryEntries];
}
