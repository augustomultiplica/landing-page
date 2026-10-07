-- Landing forms: waitlist (signups) y comentarios (feedback).
-- Cualquier visitante puede insertar; solo usuarios con sesión pueden leer.

create table public.signups (
  id uuid primary key default gen_random_uuid(),
  email text not null check (char_length(email) <= 254 and email ~ '^[^@\s]+@[^@\s]+\.[^@\s]+$'),
  created_at timestamptz not null default now()
);

create unique index signups_email_lower_key on public.signups (lower(email));

create table public.feedback (
  id uuid primary key default gen_random_uuid(),
  message text not null check (char_length(message) between 1 and 2000),
  email text check (email is null or (char_length(email) <= 254 and email ~ '^[^@\s]+@[^@\s]+\.[^@\s]+$')),
  created_at timestamptz not null default now()
);

alter table public.signups enable row level security;
alter table public.feedback enable row level security;

revoke all on public.signups, public.feedback from anon, authenticated;
grant insert on public.signups, public.feedback to anon, authenticated;
grant select on public.signups, public.feedback to authenticated;

create policy "Anyone can sign up" on public.signups
  for insert to anon, authenticated with check (true);
create policy "Authenticated can read signups" on public.signups
  for select to authenticated using (true);

create policy "Anyone can send feedback" on public.feedback
  for insert to anon, authenticated with check (true);
create policy "Authenticated can read feedback" on public.feedback
  for select to authenticated using (true);
