import { createClient } from '@supabase/supabase-js';

// Use environment variables for security
const supabaseUrl = process.env.VUE_APP_SUPABASE_URL; // Get Supabase URL from .env file
const supabaseAnonKey = process.env.VUE_APP_SUPABASE_ANON_KEY; // Get Supabase Anon Key from .env file

// Create the Supabase client using the URL and Anon Key from environment variables
export const supabase = createClient(supabaseUrl, supabaseAnonKey);