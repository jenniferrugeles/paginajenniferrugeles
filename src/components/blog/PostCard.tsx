import Link from "next/link";
import Image from "next/image";
import { urlForImage } from "@/sanity/image";
import type { PostSummary } from "@/sanity/queries";

export default function PostCard({ post }: { post: PostSummary }) {
  const cover = urlForImage(post.coverImage)?.width(480).height(320).url();
  const date = new Date(post.publishedAt).toLocaleDateString("es-CO", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-brand-100 bg-white transition-shadow hover:shadow-lg"
    >
      <div className="aspect-[3/2] w-full overflow-hidden bg-brand-100">
        {cover && (
          <Image
            src={cover}
            alt={post.coverImage.alt}
            width={480}
            height={320}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        )}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex flex-wrap gap-1.5">
          {post.categories.slice(0, 2).map((c) => (
            <span
              key={c._id}
              className="rounded-full bg-brand-50 px-2.5 py-0.5 text-xs font-medium text-brand-700"
            >
              {c.title}
            </span>
          ))}
        </div>
        <h3 className="mt-3 font-serif text-lg font-semibold leading-snug text-brand-900 group-hover:text-brand-600">
          {post.title}
        </h3>
        <p className="mt-2 flex-1 text-sm text-foreground/65">
          {post.excerpt}
        </p>
        <p className="mt-4 text-xs text-foreground/45">{date}</p>
      </div>
    </Link>
  );
}
