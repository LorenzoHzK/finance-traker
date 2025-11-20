const SUPABASE_URL = "https://iuqjqxofnutmyfkdrmco.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml1cWpxeG9mbnV0bXlma2RybWNvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM2NTgxODksImV4cCI6MjA3OTIzNDE4OX0.lCFu7fU_3oYLRsEeSjM1XgV2YPTWoeFac8ej5rrkXdA";

const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
console.log("Supabase client carregado:", supabaseClient);
