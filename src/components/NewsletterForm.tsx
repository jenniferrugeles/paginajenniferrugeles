"use client";

import { useState, type FormEvent } from "react";
import { supabase } from "@/lib/supabase";

type Status = "idle" | "loading" | "success" | "error" | "unavailable";

export default function NewsletterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (!supabase) {
      setStatus("unavailable");
      return;
    }
    if (!consent) return;

    setStatus("loading");
    const { error } = await supabase
      .from("subscribers")
      .insert({ name, email });

    if (error) {
      setStatus("error");
      return;
    }

    setStatus("success");
    setName("");
    setEmail("");
    setConsent(false);
  }

  if (status === "success") {
    return (
      <p className="text-sm font-medium text-brand-700">
        Listo, ya haces parte de la comunidad. Revisa tu correo pronto.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          type="text"
          required
          placeholder="Tu nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded-full border border-brand-200 bg-white px-5 py-3 text-sm outline-none focus:border-brand-400"
        />
        <input
          type="email"
          required
          placeholder="Tu correo"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-full border border-brand-200 bg-white px-5 py-3 text-sm outline-none focus:border-brand-400"
        />
      </div>

      <label className="flex items-start gap-2 text-xs text-foreground/60">
        <input
          type="checkbox"
          required
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          className="mt-0.5"
        />
        Autorizo el tratamiento de mis datos personales conforme a la{" "}
        <a href="/legal/privacidad" className="underline hover:text-brand-600">
          política de privacidad
        </a>
        .
      </label>

      <button
        type="submit"
        disabled={status === "loading"}
        className="self-start rounded-full bg-brand-500 px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-600 disabled:opacity-60"
      >
        {status === "loading" ? "Enviando…" : "Quiero formar parte"}
      </button>

      {status === "error" && (
        <p className="text-xs text-red-600">
          Algo salió mal. Intenta de nuevo en un momento.
        </p>
      )}
      {status === "unavailable" && (
        <p className="text-xs text-foreground/50">
          La suscripción se activa muy pronto.
        </p>
      )}
    </form>
  );
}
