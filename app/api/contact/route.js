import { createClient } from "@supabase/supabase-js";

// معلومات مشروعك في Supabase
const supabaseUrl = "https://ysabwxmxxddtyfjnnwdc.supabase.co";
const supabaseKey = process.env.SUPABASE_KEY; // أو ضع المفتاح هنا مؤقتاً
const supabase = createClient(supabaseUrl, supabaseKey);

export async function POST(req) {
  try {
    const { email, message } = await req.json();

    // أدخل البيانات في جدول messages أو جدول مخصص للاتصال
    const { data, error } = await supabase
      .from("contact_messages")
      .insert([{ email, message }]);

    if (error) {
      console.error(error);
      return new Response(JSON.stringify({ error: error.message }), {
        status: 400,
      });
    }

    return new Response(JSON.stringify({ success: true, data }), {
      status: 200,
    });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: "خطأ في السيرفر" }), {
      status: 500,
    });
  }
}
