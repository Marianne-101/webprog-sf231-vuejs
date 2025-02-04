// utils/supabaseClient.js
import { createClient } from "@supabase/supabase-js";

// Log the environment variables to the console
console.log(import.meta.env.VITE_SUPABASE_URL);  // This should log the URL
console.log(import.meta.env.VITE_SUPABASE_KEY);  // This should log the key

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);