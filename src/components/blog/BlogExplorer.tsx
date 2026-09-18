"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import PostCard from "./PostCard";
import type { Category, PostSummary } from "@/sanity/queries";

export default function BlogExplorer({
  posts,
  categories,
}: {
  posts: PostSummary[];
  categories: Category[];
}) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return posts;
    return posts.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q),
    );
  }, [posts, query]);

  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <Link
              key={c._id}
              href={`/blog/categoria/${c.slug}`}
              className="rounded-full border border-brand-200 px-4 py-1.5 text-sm text-brand-700 hover:bg-brand-50"
            >
              {c.title}
            </Link>
          ))}
        </div>

        <input
          type="search"
          placeholder="Buscar artículos…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full max-w-xs rounded-full border border-brand-200 px-4 py-2 text-sm outline-none focus:border-brand-400"
        />
      </div>

      {filtered.length === 0 ? (
        <p className="mt-14 text-center text-foreground/60">
          No encontramos artículos con &ldquo;{query}&rdquo;.
        </p>
      ) : (
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((post) => (
            <PostCard key={post._id} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}
