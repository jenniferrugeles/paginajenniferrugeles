"use client";

import { useState } from "react";

export default function ShareButtons({
  title,
  url,
}: {
  title: string;
  url: string;
}) {
  const [copied, setCopied] = useState(false);

  async function handleShare() {
    if (typeof navigator !== "undefined" && "share" in navigator) {
      try {
        await navigator.share({ title, url });
        return;
      } catch {
        // el usuario canceló, no hacemos nada
      }
    }
    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  const whatsappHref = `https://wa.me/?text=${encodeURIComponent(`${title} ${url}`)}`;

  return (
    <div className="flex items-center gap-3">
      <span className="text-xs font-semibold uppercase tracking-wide text-foreground/50">
        Compartir
      </span>
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full border border-brand-200 px-3 py-1.5 text-xs font-medium text-brand-700 hover:bg-brand-50"
      >
        WhatsApp
      </a>
      <button
        type="button"
        onClick={handleShare}
        className="rounded-full border border-brand-200 px-3 py-1.5 text-xs font-medium text-brand-700 hover:bg-brand-50"
      >
        {copied ? "¡Copiado!" : "Copiar link"}
      </button>
    </div>
  );
}
