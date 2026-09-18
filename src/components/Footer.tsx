import Link from "next/link";

const SOCIAL_LINKS: { label: string; href: string | null }[] = [
  { label: "Instagram", href: null },
  { label: "TikTok", href: null },
  { label: "YouTube", href: null },
  { label: "WhatsApp", href: null },
];

const LEGAL_LINKS = [
  { href: "/legal/privacidad", label: "Política de privacidad" },
  { href: "/legal/tratamiento-datos", label: "Tratamiento de datos" },
  { href: "/legal/terminos", label: "Términos y condiciones" },
  { href: "/legal/cookies", label: "Política de cookies" },
  { href: "/legal/cancelacion", label: "Cancelación y reprogramación" },
  { href: "/legal/aviso-servicios", label: "Aviso sobre servicios psicológicos" },
];

export default function Footer() {
  return (
    <footer className="border-t border-brand-100 bg-lavender-50">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <p className="font-serif text-xl font-semibold text-brand-800">
            Jennifer Rugeles
          </p>
          <p className="mt-2 text-sm text-foreground/70">
            Psicóloga · Escritora · Conferencista · Mentora en crianza
          </p>
          <p className="mt-4 text-sm italic text-foreground/60">
            &ldquo;A veces no dejamos de amarnos.
            <br />A veces dejamos de encontrarnos.&rdquo;
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold text-brand-800">Sígueme</p>
          <ul className="mt-3 space-y-2">
            {SOCIAL_LINKS.map((social) => (
              <li key={social.label}>
                {social.href ? (
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-foreground/70 hover:text-brand-600"
                  >
                    {social.label}
                  </a>
                ) : (
                  <span className="text-sm text-foreground/40">
                    {social.label} — [pendiente enlace oficial]
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-brand-800">Legal</p>
          <ul className="mt-3 space-y-2">
            {LEGAL_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-foreground/70 hover:text-brand-600"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-brand-100 px-4 py-6 text-center text-xs text-foreground/50 sm:px-6">
        © {new Date().getFullYear()} Jennifer Rugeles. Todos los derechos reservados.
      </div>
    </footer>
  );
}
