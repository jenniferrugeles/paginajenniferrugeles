# Jennifer Rugelés — Sitio web

Next.js (App Router) + Tailwind CSS v4 + Supabase. Ver la arquitectura y
estrategia completa en el documento de planeación (compartido en la
conversación de Claude Code).

## Desarrollo local

```bash
npm install
cp .env.local.example .env.local   # completa las variables (ver abajo)
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Variables de entorno

Copia `.env.local.example` a `.env.local` y completa:

- `NEXT_PUBLIC_SUPABASE_URL` / `NEXT_PUBLIC_SUPABASE_ANON_KEY` — desde
  Supabase → Project Settings → API. Necesarias para que funcionen los
  formularios de contacto y suscripción.
- `NEXT_PUBLIC_CALCOM_USERNAME` — tu usuario de Cal.com, para embeber el
  calendario en `/agenda`. Mientras esté vacío, la página muestra un aviso
  y enruta a contacto/WhatsApp.

`.env.local` nunca se sube a git. La `service_role key` de Supabase **no**
va en ninguna variable `NEXT_PUBLIC_*` ni se comparte por chat — solo se usa
en el futuro desde un contexto 100% servidor, si hace falta.

## Base de datos (Supabase)

Ejecuta `supabase/schema.sql` en el SQL Editor de tu proyecto de Supabase
para crear las tablas `subscribers` y `contact_messages` con las políticas
de seguridad (RLS) correctas antes de usar los formularios en producción.

## Estado del proyecto

MVP (Fase 1): Home, Psicología, Sobre mí, Contacto, Agenda, páginas legales.
Pendiente: Blog, Libros, RE:CONÉCTATE, Testimonios, Comunidades, Talleres,
Conferencias, Revista, Vlog (ver plan de fases).

## Deploy

Conecta este repositorio desde el dashboard de Vercel (Import Project) y
agrega ahí las mismas variables de entorno.
