"use client";

import { FormEvent, useState } from "react";
import { ArrowUpRight, Check, ExternalLink, LoaderCircle, Radio } from "lucide-react";

type ContactStatus = "idle" | "sending" | "sent" | "handoff" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<ContactStatus>("idle");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    setStatus("sending");

    try {
      const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

      if (accessKey) {
        data.set("access_key", accessKey);
        data.set("subject", `Portfolio message from ${String(data.get("name"))}`);
        data.set("from_name", "Vivek Nigam Portfolio");
        data.set("botcheck", "");

        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: data,
          headers: { Accept: "application/json" },
        });
        const result = await response.json();
        if (!response.ok || !result.success) throw new Error(result.message || "Message rejected");

        form.reset();
        setStatus("sent");
        return;
      }

      const name = String(data.get("name") || "");
      const email = String(data.get("email") || "");
      const message = String(data.get("message") || "");
      const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
      const body = encodeURIComponent(`${message}\n\nFrom: ${name}\nReply to: ${email}`);
      const draft = window.open(
        `https://mail.google.com/mail/?view=cm&fs=1&to=vivekgotstack@gmail.com&su=${subject}&body=${body}`,
        "_blank",
        "noopener,noreferrer",
      );
      if (!draft) window.location.href = `mailto:vivekgotstack@gmail.com?subject=${subject}&body=${body}`;
      setStatus("handoff");
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
            <p className="mb-3 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.24em] text-[#c7ff38]"><Radio className="h-3 w-3 animate-pulse" /> Secure transmission</p>
            <h3 className="text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">Initialize a conversation.</h3>
          </div>
          <span className="font-mono text-[10px] text-white/30">MSG_001</span>
        </div>

        <input type="checkbox" name="botcheck" tabIndex={-1} className="hidden" aria-hidden="true" />
        <div className="grid gap-7 sm:grid-cols-2">
          <label className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/40">Your name<input className={input} name="name" placeholder="Jane Smith" required maxLength={80} /></label>
          <label className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/40">Email channel<input className={input} name="email" type="email" placeholder="jane@company.com" required maxLength={120} /></label>
        </div>
        <label className="mt-7 block font-mono text-[10px] uppercase tracking-[0.18em] text-white/40">The brief<textarea className={`${input} min-h-32 resize-y`} name="message" placeholder="Project, role, wild idea — send it over…" required maxLength={4000} /></label>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
          <button disabled={status === "sending"} className="group inline-flex h-13 items-center justify-between gap-10 rounded-full bg-[#c7ff38] px-6 text-[11px] font-bold uppercase tracking-[0.12em] text-[#080a08] transition hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(199,255,56,.2)] disabled:opacity-60">
            {status === "sending" ? "Transmitting" : status === "sent" ? "Transmission complete" : status === "handoff" ? "Draft opened" : "Send transmission"}
            {status === "sending" ? <LoaderCircle className="h-4 w-4 animate-spin" /> : status === "sent" ? <Check className="h-4 w-4" /> : <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />}
          </button>
          <p role="status" aria-live="polite" className={`text-xs ${status === "error" ? "text-red-400" : "text-[#c7ff38]"}`}>
            {status === "sent" && "Delivered. I’ll reply to your inbox."}
            {status === "handoff" && <span className="inline-flex items-center gap-1.5">Your Gmail draft is ready—review it and hit send. <ExternalLink className="h-3 w-3" /></span>}
            {status === "error" && "Couldn’t deliver. Use the direct email link beside this form."}
          </p>
        </div>
      </div>
    </form>
  );
}
