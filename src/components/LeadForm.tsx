"use client";

import { useEffect, useId, useRef, useState } from "react";
import { services, whatsappLink } from "@/lib/site";

type Props = { variant?: "compact" | "full" };

type Status = "idle" | "sending" | "sent" | "error";

const budgets = ["Under ₹25,000 / month", "₹25,000 – ₹50,000 / month", "₹50,000 – ₹1,00,000 / month", "Above ₹1,00,000 / month", "Not sure yet"];

const field =
  "w-full rounded-xl border border-[#EBD3E4] bg-[#FBF5F9] px-3.5 py-3.5 text-[15px] text-ink outline-none transition focus:border-pink focus:ring-2 focus:ring-pink/20";

export default function LeadForm({ variant = "compact" }: Props) {
  const id = useId();
  const [status, setStatus] = useState<Status>("idle");
  const serviceRef = useRef<HTMLSelectElement>(null);
  const [error, setError] = useState("");

  // Pre-select a service when arriving from "Get a quote for X" (/contact?service=slug).
  useEffect(() => {
    const s = new URLSearchParams(window.location.search).get("service");
    if (s && serviceRef.current && services.some((x) => x.slug === s)) serviceRef.current.value = s;
  }, []);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, page: window.location.pathname }),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(json.error || "Something went wrong.");
      setStatus("sent");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "sent") {
    return (
      <div role="status" className="flex flex-col items-start gap-4 rounded-[28px] border border-line bg-white p-8 shadow-[0_40px_80px_-40px_rgba(147,7,155,0.45)]">
        <span className="grid h-12 w-12 place-items-center rounded-full bg-[#DCFCE7] text-2xl text-[#16A34A]">✓</span>
        <h3 className="font-display text-2xl font-bold">Thanks — we&apos;ve got your details!</h3>
        <p className="text-body">Our team will call or WhatsApp you within 1 working hour.</p>
        <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="font-display font-semibold text-plum underline underline-offset-4">
          Can&apos;t wait? Chat on WhatsApp now →
        </a>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col gap-3.5 rounded-[28px] border border-line bg-white p-6 shadow-[0_40px_80px_-40px_rgba(147,7,155,0.45)] sm:p-8"
    >
      <div className={variant === "full" ? "grid gap-3.5 sm:grid-cols-2" : "contents"}>
        <label htmlFor={`${id}-name`} className="flex flex-col gap-1.5 text-[13px] text-body">
          Your name
          <input id={`${id}-name`} name="name" required autoComplete="name" placeholder="Full name" className={field} />
        </label>
        <label htmlFor={`${id}-phone`} className="flex flex-col gap-1.5 text-[13px] text-body">
          Phone / WhatsApp
          <input id={`${id}-phone`} name="phone" required type="tel" inputMode="tel" autoComplete="tel" placeholder="+91" pattern="[+0-9 ()-]{8,}" className={field} />
        </label>
      </div>

      {variant === "full" && (
        <label htmlFor={`${id}-email`} className="flex flex-col gap-1.5 text-[13px] text-body">
          Email (optional)
          <input id={`${id}-email`} name="email" type="email" autoComplete="email" placeholder="you@business.com" className={field} />
        </label>
      )}

      <div className={variant === "full" ? "grid gap-3.5 sm:grid-cols-2" : "contents"}>
        <label htmlFor={`${id}-service`} className="flex flex-col gap-1.5 text-[13px] text-body">
          Service you need
          <select ref={serviceRef} id={`${id}-service`} name="service" defaultValue={services[2].slug} className={field}>
            {services.map((s) => (
              <option key={s.slug} value={s.slug}>
                {s.short}
              </option>
            ))}
            <option value="not-sure">Not sure — advise me</option>
          </select>
        </label>
        {variant === "full" && (
          <label htmlFor={`${id}-budget`} className="flex flex-col gap-1.5 text-[13px] text-body">
            Monthly budget
            <select id={`${id}-budget`} name="budget" defaultValue={budgets[4]} className={field}>
              {budgets.map((b) => (
                <option key={b}>{b}</option>
              ))}
            </select>
          </label>
        )}
      </div>

      {variant === "full" && (
        <label htmlFor={`${id}-message`} className="flex flex-col gap-1.5 text-[13px] text-body">
          Tell us about your business (optional)
          <textarea id={`${id}-message`} name="message" rows={4} placeholder="What do you sell, and what would you like to grow?" className={field} />
        </label>
      )}

      {/* Honeypot: hidden from people, bots fill it in. */}
      <input type="text" name="company" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />

      <button
        type="submit"
        disabled={status === "sending"}
        className="btn-glow mt-1 cursor-pointer rounded-full bg-brand px-6 py-4 font-display text-base font-semibold text-white disabled:cursor-wait disabled:opacity-70"
      >
        {status === "sending" ? "Sending…" : "Get my free audit"}
      </button>
      {status === "error" && (
        <p role="alert" className="text-sm text-[#B4234D]">
          {error} You can also{" "}
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="underline">
            message us on WhatsApp
          </a>
          .
        </p>
      )}
      <p className="text-xs text-muted">No spam. We reply within 1 working hour.</p>
    </form>
  );
}
