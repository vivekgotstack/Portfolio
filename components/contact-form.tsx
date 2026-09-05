"use client";

import { FormEvent, useState } from "react";
import { ArrowUpRight, Check, LoaderCircle, Radio } from "lucide-react";

type ContactStatus = "idle" | "sending" | "sent" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<ContactStatus>("idle");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    setStatus("sending");

    try {
      const response = await fetch("https://formsubmit.co/ajax/vivekgotstack@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: String(data.get("name") || ""),
          email: String(data.get("email") || ""),
          message: String(data.get("message") || ""),
          _subject: `Portfolio message from ${String(data.get("name") || "a visitor")}`,
          _template: "table",
          _captcha: "false",
          _honey: String(data.get("_honey") || ""),
          _url: window.location.href,
        }),
      });
      const result = await response.json();
      if (!response.ok || result.success === false || result.success === "false") {
        throw new Error(result.message || "Message rejected");
      }

      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  const input = "w-full border-b border-white/15 bg-transparent py-3.5 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-[#c7ff38]";

  return (
    <form onSubmit={submit} className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl sm:p-9">
      <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#c7ff38]/10 blur-3xl" />
      <div className="relative">
        <div className="mb-10 flex items-start justify-between">
          <div>
            <p className="mb-3 flex items-center gap-2 font-sans text-[10px] uppercase tracking-[0.24em] text-[#c7ff38]"><Radio className="h-3 w-3 animate-pulse" /> Secure transmission</p>
            <h3 className="text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">Initialize a conversation.</h3>
          </div>
          <span className="font-sans text-[10px] text-white/30">MSG_001</span>
        </div>

        <input type="text" name="_honey" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
        <div className="grid gap-7 sm:grid-cols-2">
          <label className="font-sans text-[10px] uppercase tracking-[0.18em] text-white/40">Your name<input className={input} name="name" placeholder="Jane Smith" required maxLength={80} /></label>
          <label className="font-sans text-[10px] uppercase tracking-[0.18em] text-white/40">Email channel<input className={input} name="email" type="email" placeholder="jane@company.com" required maxLength={120} /></label>
        </div>
        <label className="mt-7 block font-sans text-[10px] uppercase tracking-[0.18em] text-white/40">The brief<textarea className={`${input} min-h-32 resize-y`} name="message" placeholder="Tell me about your project, role, or idea." required maxLength={4000} /></label>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
          <button disabled={status === "sending" || status === "sent"} className="group inline-flex h-13 items-center justify-between gap-10 rounded-full bg-[#c7ff38] px-6 text-[11px] font-bold uppercase tracking-[0.12em] text-[#080a08] transition hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(199,255,56,.2)] disabled:cursor-not-allowed disabled:opacity-60">
            {status === "sending" ? "Transmitting" : status === "sent" ? "Message delivered" : "Send transmission"}
            {status === "sending" ? <LoaderCircle className="h-4 w-4 animate-spin" /> : status === "sent" ? <Check className="h-4 w-4" /> : <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />}
          </button>
          <p role="status" aria-live="polite" className={`text-xs ${status === "error" ? "text-red-400" : "text-[#c7ff38]"}`}>
            {status === "sent" && "Sent successfully. I’ll reply to your inbox."}
            {status === "error" && "Delivery failed. Please try again in a moment."}
          </p>
        </div>
      </div>
    </form>
  );
}
