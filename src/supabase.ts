import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ivlrtxqjldpcwutzhjgh.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml2bHJ0eHFqbGRwY3d1dHpoamdoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjMyMTYwODQsImV4cCI6MjA3ODc5MjA4NH0.D8_xl7PWpvmBsRTZhQyOaOoi4TlhonXmjHfdMYqIe5U";
// const supabaseUrl = import.meta.env.SUPABASE_URL;
// const supabaseKey =import.meta.env.SUPABASE_KEY;
export const supabase = createClient(supabaseUrl, supabaseKey);
