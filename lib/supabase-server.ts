import "server-only";
import { createClient } from "@supabase/supabase-js";

// Cliente con la llave secreta: solo se importa desde rutas de servidor.
export function getServerSupabase() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SECRET_KEY;
  if (!url || !key) throw new Error("Supabase server config missing");
  return createClient(url, key, { auth: { persistSession: false, autoRefreshToken: false } });
}
