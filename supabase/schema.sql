-- Ejecuta esto en Supabase: Dashboard > SQL Editor > New query > Run.
-- Crea las tablas del MVP (suscripción y contacto) con RLS que solo
-- permite INSERT anónimo (nunca lectura) desde el sitio público.

create table if not exists public.subscribers (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  created_at timestamptz not null default now()
);

alter table public.subscribers enable row level security;

create policy "Cualquiera puede suscribirse"
  on public.subscribers
  for insert
  to anon
  with check (true);

create table if not exists public.contact_messages (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  phone text,
  type text not null check (type in ('general', 'colaboracion', 'conferencia')),
  message text not null,
  created_at timestamptz not null default now()
);

alter table public.contact_messages enable row level security;

create policy "Cualquiera puede escribir un mensaje de contacto"
  on public.contact_messages
  for insert
  to anon
  with check (true);

-- Ninguna política de SELECT/UPDATE/DELETE para "anon": solo Jennifer,
-- entrando con su usuario de Supabase (o con la service_role key desde
-- un panel futuro), podrá leer estos datos.
