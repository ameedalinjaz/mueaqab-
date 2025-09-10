"use client"
import { supabase } from "../lib/supabaseClient"

export default function HomePage() {
  const testSupabase = async () => {
    const { data, error } = await supabase.from('users').select('*')
    if(error) alert("Error: " + error.message)
    else alert("Users: " + JSON.stringify(data))
  }

  return (
    <div className="text-center mt-20">
      <h1 className="text-3xl font-bold mb-4">Mueaqab Test</h1>
      <button onClick={testSupabase} className="bg-blue-500 text-white px-4 py-2 rounded">
        Test Supabase
      </button>
    </div>
  )
}
