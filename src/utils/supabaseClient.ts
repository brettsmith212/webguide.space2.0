import { createClient } from "@supabase/supabase-js";
import { clientEnv } from "../env/schema.mjs";

const supabaseUrl = clientEnv.NEXT_PUBLIC_SUPABASE_URL || "TEST"
const supabaseAnonKey = clientEnv.NEXT_PUBLIC_SUPABASE_ANON_KEY || "TEST"

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
