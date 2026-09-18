import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

/**
 * Webhook de Sanity → Settings → API → Webhooks.
 * URL: https://tu-dominio/api/revalidate
 * Header: "sanity-webhook-secret: <SANITY_REVALIDATE_SECRET>"
 * Dispara en Create / Update / Delete de documentos "post" y "category".
 */
export async function POST(req: NextRequest) {
  const secret = req.headers.get("sanity-webhook-secret");
  if (!process.env.SANITY_REVALIDATE_SECRET || secret !== process.env.SANITY_REVALIDATE_SECRET) {
    return NextResponse.json({ message: "No autorizado" }, { status: 401 });
  }

  revalidatePath("/blog", "layout");
  return NextResponse.json({ revalidated: true, now: Date.now() });
}
