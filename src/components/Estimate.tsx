import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { EMAIL, PHONE_DISPLAY, PHONE_HREF, SERVICES } from "../lib/data";
import { MailIcon, PhoneIcon } from "./Icons";

type Status = { kind: "idle" } | { kind: "sending" } | { kind: "sent" } | { kind: "error"; msg: string };

export default function Estimate() {
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus({ kind: "sending" });
    try {
      const res = await fetch("/api/estimate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok || !json.ok) throw new Error(json.error || `We couldn't send your request. Call us at ${PHONE_DISPLAY}.`);
      form.reset();
      setStatus({ kind: "sent" });
    } catch (err) {
      setStatus({ kind: "error", msg: err instanceof Error ? err.message : `Call us at ${PHONE_DISPLAY}.` });
    }
  }

  return (
    <section id="estimate" className="relative overflow-hidden bg-ink py-24 text-white lg:py-32">
      <div className="container-x relative grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <h2 className="display text-[clamp(2.4rem,5vw,4.4rem)]">Get a free estimate.</h2>
          <p className="mt-6 max-w-[30rem] text-lg leading-relaxed text-white/70">
            Tell us about your roof and we’ll call you back to set up an inspection. Prefer to talk now? We’re available
            for questions and estimates.
          </p>
          <ul className="mt-10 space-y-5">
            <li>
              <a href={PHONE_HREF} className="group flex items-center gap-4">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-hardhat text-ink"><PhoneIcon className="h-5 w-5" /></span>
                <span>
                  <span className="block text-sm text-white/60">Call us</span>
                  <span className="wide block text-2xl font-bold group-hover:text-hardhat">{PHONE_DISPLAY}</span>
                </span>
              </a>
            </li>
            <li>
              <a href={`mailto:${EMAIL}`} className="group flex items-center gap-4">
                <span className="grid h-12 w-12 place-items-center rounded-full border border-white/25"><MailIcon className="h-5 w-5" /></span>
                <span>
                  <span className="block text-sm text-white/60">Email</span>
                  <span className="wide block text-xl font-bold group-hover:text-hardhat">{EMAIL}</span>
                </span>
              </a>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          <AnimatePresence mode="wait">
            {status.kind === "sent" ? (
              <motion.div
                key="sent"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-[28px] border border-white/10 bg-white/[0.04] p-8 sm:p-10"
                role="status"
              >
                <p className="display text-4xl text-hardhat">Request sent.</p>
                <p className="mt-4 text-lg text-white/75">
                  Thanks. We’ll call you during business hours to set up your inspection. For anything urgent, call{" "}
                  <a href={PHONE_HREF} className="font-semibold text-white underline">{PHONE_DISPLAY}</a>.
                </p>
                <button type="button" onClick={() => setStatus({ kind: "idle" })} className="btn-ghost-dark mt-8">
                  Send another request
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={onSubmit}
                className="grid gap-5 rounded-[28px] border border-white/10 bg-white/[0.04] p-6 sm:grid-cols-2 sm:p-10"
              >
                <label className="grid gap-2 sm:col-span-1">
                  <span className="text-sm text-white/70">Name</span>
                  <input name="name" required minLength={2} autoComplete="name" className="field" />
                </label>
                <label className="grid gap-2 sm:col-span-1">
                  <span className="text-sm text-white/70">Phone</span>
                  <input name="phone" type="tel" required autoComplete="tel" className="field" />
                </label>
                <label className="grid gap-2 sm:col-span-2">
                  <span className="text-sm text-white/70">Email <span className="text-white/40">(optional)</span></span>
                  <input name="email" type="email" autoComplete="email" className="field" />
                </label>
                <label className="grid gap-2 sm:col-span-2">
                  <span className="text-sm text-white/70">What do you need?</span>
                  <select name="service" defaultValue="" className="field appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22white%22 stroke-width=%222%22><path d=%22m6 9 6 6 6-6%22/></svg>')] bg-[length:18px] bg-[right_1rem_center] bg-no-repeat pr-12 [&>option]:text-ink">
                    <option value="">Choose a service</option>
                    {SERVICES.map((s) => <option key={s.title}>{s.title}</option>)}
                    <option>Not sure yet</option>
                  </select>
                </label>
                <label className="grid gap-2 sm:col-span-2">
                  <span className="text-sm text-white/70">Tell us about your roof <span className="text-white/40">(optional)</span></span>
                  <textarea name="message" rows={4} className="field resize-y" placeholder="Leak over the garage, roof is about 15 years old…" />
                </label>
                {/* honeypot */}
                <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
                <div className="flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:items-center">
                  <button type="submit" disabled={status.kind === "sending"} className="btn-primary disabled:opacity-60">
                    {status.kind === "sending" ? "Sending request…" : "Send request"}
                  </button>
                  {status.kind === "error" && (
                    <p role="alert" className="text-[15px] text-[#FFB4A8]">{status.msg}</p>
                  )}
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
