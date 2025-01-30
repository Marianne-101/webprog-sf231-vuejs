import { createClient } from '@supabase/supabase-js'

export const supabase = createClient('https://yhulsgxolokeojfsqgkq.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlodWxzZ3hvbG9rZW9qZnNxZ2txIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzgyMTc3MzYsImV4cCI6MjA1Mzc5MzczNn0.8kDdlyhwPKIQwaaV-fUc9skTvL9L7YeIW-pQu0B2NXc')