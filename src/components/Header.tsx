"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/psicologia", label: "Psicología" },
  { href: "/sobre-mi", label: "Sobre mí" },
  { href: "/contacto", label: "Contacto" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-brand-100 bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link
          href="/"
          className="flex items-center gap-2"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/brand/logo.jpg"
            alt="Jennifer JR — Psicóloga & Escritora"
            width={40}
            height={40}
            className="aspect-square h-10 w-10 shrink-0 rounded-full object-cover"
            priority
          />
          <span className="font-serif text-lg font-semibold text-brand-800">
            Jennifer Rugelés
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-brand-600 ${
                pathname === link.href ? "text-brand-700" : "text-foreground/80"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/agenda"
            className="rounded-full bg-brand-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-600"
          >
            Agendar cita
          </Link>
        </nav>

        <button
          type="button"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-11 w-11 items-center justify-center rounded-full text-brand-700 md:hidden"
        >
          <span className="sr-only">Menú</span>
          <div className="flex flex-col gap-1.5">
            <span
              className={`block h-0.5 w-6 bg-current transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`block h-0.5 w-6 bg-current transition-opacity ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-0.5 w-6 bg-current transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </div>
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-brand-100 bg-background px-4 pb-4 md:hidden">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 text-base font-medium text-foreground/85 hover:bg-lavender-50"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/agenda"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-full bg-brand-500 px-5 py-3 text-center text-base font-semibold text-white"
          >
            Agendar cita
          </Link>
        </nav>
      )}
    </header>
  );
}
