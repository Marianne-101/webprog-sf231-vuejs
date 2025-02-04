// utils/supabaseClient.js
import { createClient } from "@supabase/supabase-js";

// Access environment variables prefixed with "VITE_" for Vite
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;

// Create and export the Supabase client
export const supabase = createClient(supabaseUrl, supabaseKey);
