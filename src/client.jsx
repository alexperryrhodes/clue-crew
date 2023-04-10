import { createClient } from '@supabase/supabase-js'

const URL = 'https://miurodymevulaljhvhzs.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1pdXJvZHltZXZ1bGFsamh2aHpzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODEwNzE4MjcsImV4cCI6MTk5NjY0NzgyN30.jKCgXhCwYq6hzw4M60a4stztbfzsL0ejwh-Lazskx-Y';

export const supabase = createClient(URL, API_KEY);
