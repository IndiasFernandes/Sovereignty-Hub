import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
const NOTIFY_EMAIL = Deno.env.get("NOTIFY_EMAIL") ?? "alesia.matusevych@globaltbcaucus.org";
const FROM_EMAIL = Deno.env.get("FROM_EMAIL") ?? "EECA Hub <onboarding@resend.dev>";
const ADMIN_URL = Deno.env.get("ADMIN_URL") ?? "";

type Payload = {
  type: "INSERT";
  table: string;
  record: {
    id: string;
    created_at: string;
    form_version: string;
    respondent_type: string;
    country: string | null;
    role: string | null;
    urgency_score: number;
    auto_tags: string[];
    contact: Record<string, unknown> | null;
    answers: Record<string, unknown>;
  };
};

function line(label: string, value: unknown): string {
  if (value == null || value === "") return "";
  return `${label}: ${value}\n`;
}

Deno.serve(async (req) => {
  if (req.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  let body: Payload;
  try {
    body = await req.json();
  } catch {
    return new Response("Invalid JSON", { status: 400 });
  }

  const r = body.record;
  if (!r?.id) {
    return new Response("Missing record", { status: 400 });
  }

  const answers = r.answers ?? {};
  const risks = Array.isArray(answers.q4_risks) ? answers.q4_risks.join(", ") : "";
  const pillars = Array.isArray(answers.q5_pillars) ? answers.q5_pillars[0] : "";
  const mvp = Array.isArray(answers.q12_mvp) ? answers.q12_mvp[0] : answers.q12_mvp;
  const contact = r.contact ?? {};

  const text = [
    "New EECA Consultation submission",
    "",
    line("ID", r.id),
    line("Form", r.form_version),
    line("Type", r.respondent_type),
    line("Country", r.country),
    line("Role", r.role),
    line("Urgency score", r.urgency_score),
    line("Urgency", answers.q3_urgency),
    line("Top risks", risks),
    line("Pillar #1", pillars),
    line("MVP #1", mvp),
    line("Tags", (r.auto_tags ?? []).join(", ")),
    line("Follow-up", contact.consent),
    line("Contact name", contact.name),
    line("Contact email", contact.email),
    line("Organization", contact.organization),
    ADMIN_URL ? `\nView in admin: ${ADMIN_URL}/admin/responses/${r.id}` : "",
  ]
    .filter(Boolean)
    .join("\n");

  if (!RESEND_API_KEY) {
    console.log("RESEND_API_KEY not set. Email body:\n", text);
    return new Response(JSON.stringify({ ok: true, skipped: true }), {
      headers: { "Content-Type": "application/json" },
    });
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: FROM_EMAIL,
      to: [NOTIFY_EMAIL],
      subject: `[EECA Consultation] New response — ${r.country ?? "Unknown"} (${r.respondent_type})`,
      text,
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    console.error("Resend error:", err);
    return new Response(err, { status: 502 });
  }

  return new Response(JSON.stringify({ ok: true }), {
    headers: { "Content-Type": "application/json" },
  });
});
