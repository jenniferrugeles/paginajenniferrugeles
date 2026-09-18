import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

/**
 * Cliente de Supabase para uso en el navegador (formularios públicos).
 * Usa siempre la anon key — nunca la service_role key aquí.
 * `null` mientras las variables de entorno no estén configuradas, para que
 * el sitio siga funcionando (formularios muestran un aviso) sin romper el build.
 */
export const supabase =
  supabaseUrl && supabaseAnonKey ? createClient(supabaseUrl, supabaseAnonKey) : null;
