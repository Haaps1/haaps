// Receives lead-form submissions.
// Set LEAD_WEBHOOK_URL (e.g. a Google Apps Script web app that appends to a Sheet,
// or a Zapier/Make webhook that emails the team) to forward each lead.

type Lead = {
  name?: string;
  phone?: string;
  email?: string;
  service?: string;
  budget?: string;
  message?: string;
  page?: string;
  company?: string; // honeypot
};

const clean = (v: unknown, max = 500) => (typeof v === "string" ? v.trim().slice(0, max) : "");

export async function POST(request: Request) {
  let body: Lead;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  // Bots fill the hidden "company" field; pretend success and drop it.
  if (clean(body.company)) return Response.json({ ok: true });

  const lead = {
    name: clean(body.name, 120),
    phone: clean(body.phone, 30),
    email: clean(body.email, 160),
    service: clean(body.service, 60),
    budget: clean(body.budget, 60),
    message: clean(body.message, 2000),
    page: clean(body.page, 120),
    receivedAt: new Date().toISOString(),
  };

  if (!lead.name || !/^[+0-9 ()-]{8,}$/.test(lead.phone)) {
    return Response.json({ error: "Please enter your name and a valid phone number." }, { status: 422 });
  }

  const webhook = process.env.LEAD_WEBHOOK_URL;
  if (webhook) {
    try {
      const res = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(lead),
      });
      if (!res.ok) throw new Error(`Webhook responded ${res.status}`);
    } catch (err) {
      console.error("Lead webhook failed", err);
      return Response.json({ error: "We couldn't send your details right now." }, { status: 502 });
    }
  } else {
    console.log("New lead (LEAD_WEBHOOK_URL not set):", lead);
  }

  return Response.json({ ok: true });
}
