import express from "express";
import compression from "compression";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { Resend } from "resend";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dist = path.join(__dirname, "..", "dist");
const app = express();
const PORT = process.env.PORT || 3000;

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;
const TO = process.env.CONTACT_TO || "info@ddkroofing.com";
const FROM = process.env.CONTACT_FROM || "DDK Roofing Website <onboarding@resend.dev>";

app.disable("x-powered-by");
app.use(compression());
app.use(express.json({ limit: "20kb" }));

app.get("/api/health", (_req, res) => res.json({ ok: true }));

// Simple in-memory rate limit: 5 requests / 10 min per IP
const hits = new Map();
function limited(ip) {
  const now = Date.now();
  const list = (hits.get(ip) || []).filter((t) => now - t < 10 * 60 * 1000);
  list.push(now);
  hits.set(ip, list);
  return list.length > 5;
}

const esc = (s) =>
  String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);

app.post("/api/estimate", async (req, res) => {
  const { name, phone, email, service, message, website } = req.body || {};
  if (website) return res.json({ ok: true }); // honeypot
  if (!name || String(name).trim().length < 2 || !phone || String(phone).replace(/\D/g, "").length < 7) {
    return res.status(400).json({ ok: false, error: "Add your name and a phone number we can call." });
  }
  if (limited(req.ip)) return res.status(429).json({ ok: false, error: "Too many requests. Call us at (352) 534-4343." });
  if (!resend) return res.status(503).json({ ok: false, error: "Online requests are offline right now. Call us at (352) 534-4343." });

  const fields = { Name: name, Phone: phone, Email: email, Service: service, Message: message };
  const rows = Object.entries(fields)
    .filter(([, v]) => v)
    .map(([k, v]) => `<tr><td style="padding:6px 12px;color:#5B6470">${k}</td><td style="padding:6px 12px">${esc(String(v).slice(0, 2000))}</td></tr>`)
    .join("");
  try {
    const { error } = await resend.emails.send({
      from: FROM,
      to: TO,
      replyTo: email && /.+@.+\..+/.test(email) ? String(email) : undefined,
      subject: `New estimate request — ${String(name).slice(0, 80)}`,
      html: `<h2 style="font-family:sans-serif;color:#132034">New estimate request</h2><table style="font-family:sans-serif;font-size:15px">${rows}</table>`,
    });
    if (error) throw new Error(error.message);
    res.json({ ok: true });
  } catch (err) {
    console.error("[estimate]", err);
    res.status(502).json({ ok: false, error: "We couldn't send your request. Call us at (352) 534-4343." });
  }
});

app.use(express.static(dist, { maxAge: "7d", index: false }));
app.get("*", (_req, res) => res.sendFile(path.join(dist, "index.html")));

app.listen(PORT, () => console.log(`DDK Roofing listening on ${PORT}`));
