import { createClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";

export async function GET(request) {
  // The `/auth/callback` route is required for the server-side auth flow implemented
  // by the SSR package. It exchanges an auth code for the user's session.
  // https://supabase.com/docs/guides/auth/server-side/nextjs
  const { searchParams, origin } = new URL(request.url)
  const code = searchParams.get("code");
  const token = searchParams.get("token");


  console.log(code, token)

  if (code) {
    const supabase = createClient();
   const session = await supabase.auth.exchangeCodeForSession(code);
   console.log('session',session)
  }

  if (token) {
    return NextResponse.redirect(`${origin}/invitation?token=${token}`);
  }

  // URL to redirect to after sign up process completes
  return NextResponse.redirect(`${origin}/dashboard`);
}
