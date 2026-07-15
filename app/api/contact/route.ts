import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const data = await request.formData();
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();
    const honeypot = String(data.get("company") || "");

    if (honeypot) return NextResponse.json({ ok: true });
    if (!name || !email || !message || name.length > 80 || email.length > 120 || message.length > 4000) {
      return NextResponse.json({ error: "Invalid message" }, { status: 400 });
    }

    const response = await fetch("https://formsubmit.co/ajax/vivekgotstack@gmail.com", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        name,
        email,
        message,
        _subject: `Portfolio message from ${name}`,
        _template: "table",
        _captcha: "false",
      }),
      cache: "no-store",
    });

    if (!response.ok) return NextResponse.json({ error: "Mail provider rejected request" }, { status: 502 });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Unable to send" }, { status: 500 });
  }
}
