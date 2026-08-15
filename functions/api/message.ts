import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2';


interface Env {
    SUPABASE_URL: string;
    SUPABASE_SERVICE_ROLE_KEY: string;
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
    const { request, env } = context;
    try {
        const formData = await request.formData();
        const name = formData.get('name')?.toString();
        const email = formData.get('email')?.toString();
        const subject = formData.get('subject')?.toString() ?? null;
        const message = formData.get('message')?.toString();

    if (!name || !email || !message){
        return new Response(JSON.stringify({ error: '入力に不備があります'}),{
            status: 400,
            headers: { 'Content-Type': 'application/json'},
        });
    }

    const supabase = createClient(env.SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY);

    const {data, error } = await supabase
    .from('toiawase')
    .insert([{ name, email, subject, message }])
    .select();

    if(error) {
        return new Response(JSON.stringify({ error: error.message }),{
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }

    return new Response(JSON.stringify({ success: true, data }),{
        status: 200,
        headers: { 'Content-Type': 'application/json' },
        });
    }catch (error){
        return new Response(JSON.stringify({ error: 'サーバーエラー'}),{
            status: 500,
            headers: {'Content-Type': 'application/json'},
        });
    }
};













