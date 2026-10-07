import { createClient, type SupabaseClient } from "@supabase/supabase-js";

// Solo para /admin (login y lecturas bajo RLS). Usa la llave publishable, pública por diseño.
let client: SupabaseClient | null = null;

export function getBrowserSupabase(): SupabaseClient | null {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
  if (!url || !key) return null;
  client ??= createClient(url, key);
  return client;
}
