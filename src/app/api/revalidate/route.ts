import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

/**
 * Webhook de Sanity → Settings → API → Webhooks.
 * URL: https://www.jenniferrugeles.com/api/revalidate
 * Header: "sanity-webhook-secret: <SANITY_REVALIDATE_SECRET>"
 * Dispara en Create / Update / Delete de documentos "post".
 */
export async function POST(req: NextRequest) {
  const secret = req.headers.get("sanity-webhook-secret");
  if (!process.env.SANITY_REVALIDATE_SECRET || secret !== process.env.SANITY_REVALIDATE_SECRET) {
    return NextResponse.json({ message: "No autorizado" }, { status: 401 });
  }

  revalidatePath("/blog");
  revalidatePath("/blog/[slug]", "page");
  revalidatePath("/blog/categoria/[slug]", "page");
  revalidatePath("/sitemap.xml");

  try {
    const body = await req.json();
    const slug = body?.slug?.current ?? body?.slug;
    if (typeof slug === "string") revalidatePath(`/blog/${slug}`);
  } catch {
    // cuerpo vacío o no JSON: con lo anterior basta
  }

  return NextResponse.json({ revalidated: true, now: Date.now() });
}
