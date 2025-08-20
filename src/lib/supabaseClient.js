import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://jhbpynxdnlmpiuazrmuz.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpoYnB5bnhkbmxtcGl1YXpybXV6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkwNjI0NzksImV4cCI6MjA2NDYzODQ3OX0.2qmanKIJxr7mTqgk7rtpEp_3cxx8v4FymAcGmAq9DPo';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);