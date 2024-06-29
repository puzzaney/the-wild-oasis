//spell-checker:disable

import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://jueczhujekllkmsckdtl.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp1ZWN6aHVqZWtsbGttc2NrZHRsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTkzODU0NjQsImV4cCI6MjAzNDk2MTQ2NH0.plstfGVOet5hJ0O_sR_UCT1yrvcvX_e9FLJu3QoWW5c';

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
