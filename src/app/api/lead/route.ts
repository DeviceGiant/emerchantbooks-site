import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

type LeadPayload = {
  name: string;
  email: string;
  phone?: string;
  platforms?: string[];
  monthlyRevenue?: string;
  software?: string;
  message?: string;
  source?: string; // which form/CTA on the site
};

function bad(msg: string, status = 400) {
  return NextResponse.json({ ok: false, error: msg }, { status });
}

// naive in-memory rate limit: 5 submissions / 10 min / IP
const hits = new Map<string, number[]>();
function rateLimited(ip: string) {
  const now = Date.now();
  const windowStart = now - 10 * 60 * 1000;
  const arr = (hits.get(ip) || []).filter((t) => t > windowStart);
  arr.push(now);
  hits.set(ip, arr);
  return arr.length > 5;
}

export async function POST(req: NextRequest) {
  let body: LeadPayload;
  try {
    body = await req.json();
  } catch {
    return bad("invalid JSON");
  }

  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (rateLimited(ip)) return bad("too many requests", 429);

  const name = (body.name || "").trim().slice(0, 200);
  const email = (body.email || "").trim().slice(0, 200);
  if (!name) return bad("name is required");
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return bad("valid email is required");

  // honeypot: real users never fill this
  if ((body as Record<string, unknown>)["company_website"]) {
    return NextResponse.json({ ok: true }); // silently drop bots
  }

  const lines = [
    `New lead from emerchantbooks.com`,
    ``,
    `Name: ${name}`,
    `Email: ${email}`,
    body.phone ? `Phone: ${String(body.phone).slice(0, 50)}` : null,
    body.platforms?.length ? `Platforms: ${body.platforms.slice(0, 10).join(", ")}` : null,
    body.monthlyRevenue ? `Monthly revenue: ${String(body.monthlyRevenue).slice(0, 50)}` : null,
    body.software ? `Accounting software: ${String(body.software).slice(0, 100)}` : null,
    body.message ? `` : null,
    body.message ? `Message:\n${String(body.message).slice(0, 3000)}` : null,
    ``,
    `Source: ${String(body.source || "unknown").slice(0, 100)}`,
    `IP: ${ip}`,
    `Time: ${new Date().toISOString()}`,
  ].filter((l): l is string => l !== null);

  // DigitalOcean blocks outbound SMTP, so delivery goes over Resend's HTTPS API.
  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: process.env.LEAD_FROM || "eMerchant Books Leads <leads@send.kloqk.com>",
        to: [process.env.LEAD_TO || "sales@emerchantbooks.com"],
        reply_to: email,
        subject: `New lead: ${name} (${body.source || "website"})`,
        text: lines.join("\n"),
      }),
      signal: AbortSignal.timeout(15000),
    });
    if (!res.ok) {
      console.error("lead mail failed", res.status, await res.text().catch(() => ""));
      return bad("failed to send — please email us directly at sales@emerchantbooks.com", 500);
    }
  } catch (e) {
    console.error("lead mail failed", e);
    return bad("failed to send — please email us directly at sales@emerchantbooks.com", 500);
  }

  // magnet requests also get the checklist delivered to the lead
  if ((body as Record<string, unknown>)["magnet"]) {
    fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: process.env.LEAD_FROM || "eMerchant Books <leads@kloqk.com>",
        to: [email],
        subject: "Your 27-Point Ecommerce Money Leak Checklist",
        text: [
          "Here it is — the exact checks our accountants run on every new client's books:",
          "",
          "https://emerchantbooks.com/money-leak-checklist/",
          "",
          "Work through it with your books open and total what you find. Most sellers hit their first leak in section one (marketplace money they owe you).",
          "",
          "And if you'd rather we run all 27 checks for you: the Ecommerce Books Teardown is free. We rebuild your most recent month properly and send you a 10-minute video of every leak we found, with dollar figures. No card, no contract, keep everything.",
          "",
          "Claim it here: https://emerchantbooks.com/contact/",
          "",
          "— eMerchant Books",
          "(469) 294-1807 · emerchantbooks.com",
        ].join("\n"),
      }),
      signal: AbortSignal.timeout(15000),
    }).catch((e) => console.error("magnet mail failed", e));
  }

  return NextResponse.json({ ok: true });
}
