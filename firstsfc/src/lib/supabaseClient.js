// lib/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  'https://ifidmdesqwnluhmtagxw.supabase.co', // Use your actual Supabase URL
  'your-anon-key' // Use your actual public anon key
);