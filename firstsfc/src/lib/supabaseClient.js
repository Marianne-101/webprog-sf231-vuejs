import { createClient } from '@supabase/supabase-js';vercel logs


export const supabase = createClient(
  'https://ifidmdesqwnluhmtagxw.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlmaWRtZGVzcXdubHVobXRhZ3h3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzgyMTc3ODEsImV4cCI6MjA1Mzc5Mzc4MX0.JyFcsCJhtTBY-7klwXGn6xoOK_uIhMnDT3ABGfTxF4k'
);