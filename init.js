
let bc10c040 = document.createElement("script");
bc10c040.src = "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2";

bc10c040.onload = () => {
    globalThis.SUPABASE_URL="https://sdwzkmebmnmfknkfafdd.supabase.co";
    globalThis.SUPABASE_PUBLISHABLE_KEY="sb_publishable_84VznCtKAbkJ3qb24vrdAQ_hkcbuB7U";

    globalThis.sb = supabase.createClient(globalThis.SUPABASE_URL, globalThis.SUPABASE_PUBLISHABLE_KEY);
}

document.head.appendChild(bc10c040);

