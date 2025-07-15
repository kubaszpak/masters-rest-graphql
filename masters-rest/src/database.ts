import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.DATABASE_BASE_URL!,
  process.env.DATABASE_ACCESS_KEY!
);

export default supabase;
