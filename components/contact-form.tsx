"use client";

import { FormEvent, useState } from "react";
import { ArrowUpRight, Check, LoaderCircle } from "lucide-react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("sending");
    try {
      const response = await fetch("https://formsubmit.co/ajax/vivekgotstack@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      if (!response.ok) throw new Error();
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  const control = "w-full border-b border-neutral-200 bg-transparent py-3 text-sm outline-none transition placeholder:text-neutral-400 focus:border-neutral-900 dark:border-neutral-800 dark:focus:border-neutral-100";

  return (
    <section id="contact" className="relative mt-6 overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-50 p-5 dark:border-neutral-800 dark:bg-neutral-900/40 md:p-7">
      <div className="pointer-events-none absolute -right-16 -top-20 h-52 w-52 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="relative">
        <div className="mb-7 flex items-start justify-between gap-4">
          <div>
            <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.22em] text-neutral-500">Let&apos;s build</p>
            <h3 className="text-xl font-semibold tracking-tight">Have something in mind?</h3>
            <p className="mt-2 max-w-sm text-xs leading-5 text-neutral-500 dark:text-neutral-400">Drop the idea here. I&apos;ll reply directly to your inbox.</p>
          </div>
          <span className="mt-1 h-2.5 w-2.5 shrink-0 animate-pulse rounded-full bg-emerald-500 shadow-[0_0_18px_rgba(16,185,129,.65)]" />
        </div>

        <form onSubmit={submit} className="space-y-5">
          <input type="hidden" name="_subject" value="New portfolio message" />
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="text-[11px] font-medium text-neutral-500">NAME<input className={control} name="name" placeholder="Your name" required /></label>
            <label className="text-[11px] font-medium text-neutral-500">EMAIL<input className={control} name="email" type="email" placeholder="you@email.com" required /></label>
          </div>
          <label className="block text-[11px] font-medium text-neutral-500">MESSAGE<textarea className={`${control} min-h-28 resize-y`} name="message" placeholder="Tell me about the idea, role, or project…" required /></label>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <button disabled={status === "sending"} className="group inline-flex h-11 items-center justify-between gap-8 rounded-full bg-neutral-950 px-5 text-xs font-medium text-white transition hover:-translate-y-0.5 hover:shadow-lg disabled:opacity-60 dark:bg-white dark:text-neutral-950">
              {status === "sending" ? "Sending" : status === "sent" ? "Message sent" : "Send message"}
              {status === "sending" ? <LoaderCircle className="h-4 w-4 animate-spin" /> : status === "sent" ? <Check className="h-4 w-4" /> : <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />}
            </button>
            <p aria-live="polite" className={`text-xs ${status === "error" ? "text-red-500" : "text-emerald-600 dark:text-emerald-400"}`}>
              {status === "sent" && "Thanks — I’ll get back to you soon."}
              {status === "error" && "Couldn’t send. Email me at vivekgotstack@gmail.com"}
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
