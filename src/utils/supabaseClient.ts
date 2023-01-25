import { createClient } from "@supabase/supabase-js";
import { serverEnv } from "../env/schema.mjs";

const url = serverEnv.SUPABASE_URL || "BROKEN URL";
const anonKey = serverEnv.SUPABASE_ANON_KEY || "BROKEN KEY";

export const supabase = createClient(url, anonKey);
