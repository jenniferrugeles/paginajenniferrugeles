"use client";

import { useState, type FormEvent } from "react";
import { supabase } from "@/lib/supabase";

const TYPES = [
  { value: "general", label: "Contacto general" },
  { value: "colaboracion", label: "Invitaciones y colaboraciones" },
  { value: "conferencia", label: "Conferencias" },
] as const;

type Status = "idle" | "loading" | "success" | "error" | "unavailable";

export default function ContactForm({
  defaultType = "general",
}: {
  defaultType?: (typeof TYPES)[number]["value"];
}) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    type: defaultType,
    message: "",
  });
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
    const { error } = await supabase.from("contact_messages").insert(form);

    if (error) {
      setStatus("error");
      return;
    }

    setStatus("success");
    setForm({ name: "", email: "", phone: "", type: defaultType, message: "" });
    setConsent(false);
  }

  if (status === "success") {
    return (
      <p className="rounded-2xl bg-brand-50 p-6 text-sm font-medium text-brand-800">
        Gracias por escribir. Jennifer o su equipo te responderán pronto.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <input
          type="text"
          required
          placeholder="Nombre completo"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="rounded-xl border border-brand-200 bg-white px-4 py-3 text-sm outline-none focus:border-brand-400"
        />
        <input
          type="email"
          required
          placeholder="Correo"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="rounded-xl border border-brand-200 bg-white px-4 py-3 text-sm outline-none focus:border-brand-400"
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <input
          type="tel"
          placeholder="Teléfono / WhatsApp (opcional)"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          className="rounded-xl border border-brand-200 bg-white px-4 py-3 text-sm outline-none focus:border-brand-400"
        />
        <select
          value={form.type}
          onChange={(e) =>
            setForm({ ...form, type: e.target.value as typeof form.type })
          }
          className="rounded-xl border border-brand-200 bg-white px-4 py-3 text-sm outline-none focus:border-brand-400"
        >
          {TYPES.map((t) => (
            <option key={t.value} value={t.value}>
              {t.label}
            </option>
          ))}
        </select>
      </div>

      <textarea
        required
        placeholder="Cuéntame en qué puedo ayudarte"
        rows={5}
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
        className="rounded-xl border border-brand-200 bg-white px-4 py-3 text-sm outline-none focus:border-brand-400"
      />

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
        {status === "loading" ? "Enviando…" : "Enviar mensaje"}
      </button>

      {status === "error" && (
        <p className="text-xs text-red-600">
          Algo salió mal. Intenta de nuevo en un momento.
        </p>
      )}
      {status === "unavailable" && (
        <p className="text-xs text-foreground/50">
          El formulario se activa muy pronto. Mientras tanto, escribe por WhatsApp.
        </p>
      )}
    </form>
  );
}
