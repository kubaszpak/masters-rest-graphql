import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
const supabase = createClient(
  "https://ittuyewwtiqkaswffdpj.supabase.co",
  process.env.DATABASE_ACCESS_KEY!
);

export default supabase;
