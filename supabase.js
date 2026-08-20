import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm";

const SUPABASE_URL = "https://yixsbuvqztpdshswnjpi.supabase.co";

const SUPABASE_KEY =
  "sb_publishable_W701p_LZz2UHSVsfksvRKA_4tBlogOc";

export const supabase = createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);