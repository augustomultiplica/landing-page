import { NextResponse } from "next/server";
import { getServerSupabase } from "@/lib/supabase-server";
import { EMAIL_RE, MESSAGES, clean } from "@/lib/validation";

export const runtime = "nodejs";

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: MESSAGES.failed }, { status: 400 });
  }

  if (body.website) return NextResponse.json({ message: MESSAGES.feedbackOk }); // honeypot

  const message = clean(body.message);
  const email = clean(body.email);
  if (!message || message.length > 2000) {
    return NextResponse.json({ error: MESSAGES.emptyMessage }, { status: 400 });
  }
  if (email && (email.length > 254 || !EMAIL_RE.test(email))) {
    return NextResponse.json({ error: MESSAGES.invalidFeedbackEmail }, { status: 400 });
  }

  const { error } = await getServerSupabase().from("feedback").insert({ message, email });
  if (error) return NextResponse.json({ error: MESSAGES.failed }, { status: 500 });
  return NextResponse.json({ message: MESSAGES.feedbackOk });
}
