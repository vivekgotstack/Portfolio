"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail, MapPin, MoveRight, Terminal, Zap } from "lucide-react";
import { ContactForm } from "./contact-form";
import { BrandMark } from "./brand-mark";
import { PetCompanion } from "./pet-companion";

const projects = [
  {
    n: "01", title: "ModaStitch", type: "Production commerce system", color: "#c7ff38",
    copy: "A full-stack fashion platform engineered from database to deployment: secure JWT flows, Spring Boot services, Neon PostgreSQL, and an NGINX-managed Ubuntu VPS.",
    tags: ["Java 21", "Spring Boot", "PostgreSQL", "Next.js", "NGINX"], href: "https://modastitch.com", media: [],
  },
  {
    n: "02", title: "DamnTodo", type: "Offline planning system", color: "#8ec5ff",
    copy: "A private, offline-first planner that turns long-term goals into realistic scheduled roadmaps, protects time blocks, tracks streaks, recovers missed work, and delivers native Android alarms.",
    tags: ["Next.js 16", "React 19", "TypeScript", "IndexedDB", "Capacitor"], href: "https://damntodo.viveknigam.co.in",
    media: ["/projects/damntodo-schedule.png", "/projects/damntodo-roadmap.png"],
  },
  {
    n: "03", title: "Email ReplyCraft", type: "AI productivity platform", color: "#b49cff",
    copy: "AI-assisted email writing with selectable tone, generation history, refresh-token auth, and a browser extension that works directly inside Gmail.",
    tags: ["OpenRouter", "Chrome Extension", "JWT", "React", "PostgreSQL"], href: "https://email-reply-craft.vercel.app/",
    media: ["/projects/replycraft-extension.png", "/projects/replycraft-generator.png"],
  },
  {
    n: "04", title: "ChatSaver", type: "Local-first knowledge platform", color: "#ff5a6f",
    copy: "A private knowledge workspace with offline-first notes, selective ChatGPT imports, real-time cross-device sync, encrypted vaults, and connected workflows across web, PWA, and desktop.",
    tags: ["Next.js 16", "Spring Boot", "IndexedDB", "PostgreSQL", "Tauri 2"], href: "https://chatsaver.viveknigam.co.in",
    media: ["/projects/chatsaver-vault.png", "/projects/chatsaver-integrations.png"],
  },
];

const experience = [
  { company: "UP24Network", role: "Web Developer", period: "2026 — NOW", text: "Shipping a full-stack commerce platform to production across Vercel, Ubuntu VPS, NGINX, Neon PostgreSQL, and a secured Spring Boot backend." },
  { company: "TrainX", role: "Apprentice", period: "2025", text: "Intensive on-site engineering program focused on Java, data structures, databases, and building practical software systems." },
];

const skills = ["JAVA", "SPRING BOOT", "REACT", "NEXT.JS", "POSTGRESQL", "SECURITY", "DOCKER", "NGINX", "REST APIS", "TYPESCRIPT"];

function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <motion.div className={className} initial={{ opacity: 0, y: 34 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: .75, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>;
}

function SystemCore() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-130 select-none" aria-hidden="true">
      <div className="absolute inset-[10%] rounded-full bg-[#c7ff38]/8 blur-3xl" />
      <div className="absolute inset-[13%] animate-[spin_24s_linear_infinite] rounded-full border border-dashed border-white/15" />
      <div className="absolute inset-[23%] animate-[spin_16s_linear_infinite_reverse] rounded-full border border-[#c7ff38]/30 shadow-[0_0_80px_rgba(199,255,56,.08)]" />
      <div className="absolute inset-[33%] grid animate-pulse place-items-center rounded-full border border-white/15 bg-black/70 shadow-[inset_0_0_45px_rgba(199,255,56,.08)] backdrop-blur-xl">
        <Terminal className="h-12 w-12 text-[#c7ff38] sm:h-16 sm:w-16" strokeWidth={1} />
      </div>
      {[0, 90, 180, 270].map((r) => <div key={r} className="absolute inset-[18%] animate-[spin_12s_linear_infinite]" style={{ transform: `rotate(${r}deg)` }}><span className="absolute left-1/2 top-0 h-2 w-2 rounded-full bg-[#c7ff38] shadow-[0_0_18px_#c7ff38]" /></div>)}
      <span className="absolute left-[3%] top-[28%] rounded border border-white/10 bg-black/70 px-3 py-2 font-mono text-[9px] text-white/50 backdrop-blur">STATUS: SHIPPING</span>
      <span className="absolute bottom-[18%] right-0 rounded border border-white/10 bg-black/70 px-3 py-2 font-mono text-[9px] text-[#c7ff38] backdrop-blur">UPTIME 99.9%</span>
      <span className="absolute right-[4%] top-[20%] font-mono text-[9px] text-white/30">01° DEV_CORE</span>
      <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,transparent_47%,rgba(199,255,56,.06)_48%,transparent_49%)]" />
    </div>
  );
}

function ProjectVisual({ project }: { project: (typeof projects)[number] }) {
  if (!project.media.length) {
    return (
      <div className="relative min-h-85 overflow-hidden bg-[#111410] sm:min-h-105">
        <video
          className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.015]"
          src="/projects/modastitch.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-label="ModaStitch product film"
        />
        <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/65 via-transparent to-black/10" />
        <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />
        <div className="absolute bottom-0 left-0 flex w-full items-end justify-between p-7 sm:p-9">
          <div><p className="font-mono text-[9px] uppercase tracking-[.2em] text-[#c7ff38]">Production showcase</p><p className="mt-2 text-xl font-medium">ModaStitch product film</p></div>
          <span className="rounded-full border border-white/15 bg-black/35 px-3 py-2 font-mono text-[8px] uppercase tracking-wider text-white/60 backdrop-blur">Live</span>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-97.5 overflow-hidden bg-[#0d100d] p-4 sm:min-h-115 sm:p-7">
      <div className="absolute inset-0 opacity-[.04] bg-[linear-gradient(rgba(255,255,255,.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.5)_1px,transparent_1px)] bg-size-[28px_28px]" />
      <div className="relative h-[72%] overflow-hidden rounded-[1.25rem] border border-white/15 bg-black shadow-[0_24px_70px_rgba(0,0,0,.45)] transition duration-700 group-hover:-translate-y-1 group-hover:rotate-[.35deg]">
        <Image src={project.media[0]} alt={`${project.title} interface`} fill sizes="(max-width: 1024px) 100vw, 55vw" quality={62} className="object-cover" />
        <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />
      </div>
      <div className="absolute bottom-5 right-4 h-[43%] w-[48%] overflow-hidden rounded-[1.1rem] border border-white/20 bg-black shadow-[0_24px_70px_rgba(0,0,0,.6)] transition duration-700 group-hover:-translate-x-2 group-hover:translate-y-1 group-hover:-rotate-1 sm:bottom-7 sm:right-7">
        <Image src={project.media[1]} alt={`${project.title} secondary interface`} fill sizes="(max-width: 1024px) 55vw, 30vw" quality={62} className="object-cover" />
        <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />
      </div>
    </div>
  );
}

export function PortfolioExperience() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: container });
  const progress = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={container} className="min-h-screen overflow-hidden bg-[#080a08] text-[#f2f4eb] selection:bg-[#c7ff38] selection:text-black">
      <motion.div style={{ width: progress }} className="fixed left-0 top-0 z-100 h-0.5 bg-[#c7ff38] shadow-[0_0_14px_#c7ff38]" />
      <div className="pointer-events-none fixed inset-0 z-0 opacity-[.035] bg-[linear-gradient(rgba(255,255,255,.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.5)_1px,transparent_1px)] bg-size-[48px_48px]" />
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_50%_-10%,rgba(199,255,56,.09),transparent_35%)]" />

      <nav className="fixed left-1/2 top-4 z-50 flex w-[calc(100%-24px)] max-w-6xl -translate-x-1/2 items-center justify-between rounded-full border border-white/10 bg-black/55 px-4 py-3 backdrop-blur-xl sm:px-5">
        <a href="#top" className="flex items-center"><BrandMark /></a>
        <div className="hidden items-center gap-6 font-mono text-[10px] uppercase tracking-[.14em] text-white/50 sm:flex"><a href="#work" className="transition hover:text-white">Work</a><a href="#about" className="transition hover:text-white">About</a><a href="#contact" className="transition hover:text-white">Contact</a></div>
        <div className="flex items-center gap-2"><PetCompanion /><a href="#contact" className="hidden items-center gap-2 rounded-full border border-[#c7ff38]/30 px-3 py-2 font-mono text-[9px] uppercase tracking-wider text-[#c7ff38] md:flex"><span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#c7ff38]" /> Available</a></div>
      </nav>

      <main className="relative z-10">
        <section id="top" className="mx-auto grid min-h-screen max-w-360 items-center gap-8 px-5 pb-14 pt-28 lg:grid-cols-[1.08fr_.92fr] lg:px-12">
          <div>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .2 }} className="mb-7 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[.25em] text-[#c7ff38]"><Zap className="h-3 w-3" /> Full-stack engineer / India</motion.p>
            <motion.h1 initial={{ opacity: 0, y: 45 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .9, ease: [0.22, 1, 0.36, 1] }} className="max-w-4xl text-[clamp(4rem,9vw,9rem)] font-semibold leading-[.78] tracking-[-.085em]">
              I BUILD
              <span className="block text-white/25">SYSTEMS</span>
              <span className="block">THAT <em className="font-serif font-normal text-[#c7ff38]">ship.</em></span>
            </motion.h1>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .7 }} className="mt-10 flex max-w-2xl flex-col gap-7 sm:flex-row sm:items-end sm:justify-between">
              <p className="max-w-md text-sm leading-6 text-white/50 sm:text-base">Java-first full-stack developer engineering secure backends, sharp interfaces, and production infrastructure—end to end.</p>
              <a href="#work" className="group flex shrink-0 items-center gap-3 font-mono text-[10px] uppercase tracking-[.18em] text-white"><span className="grid h-11 w-11 place-items-center rounded-full border border-white/15 transition group-hover:border-[#c7ff38] group-hover:bg-[#c7ff38] group-hover:text-black"><ArrowDown className="h-4 w-4" /></span> Explore work</a>
            </motion.div>
          </div>
          <motion.div initial={{ opacity: 0, scale: .86 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2, delay: .2 }}><SystemCore /></motion.div>
        </section>

        <div className="border-y border-white/10 bg-[#c7ff38] py-3 text-black">
          <div className="flex w-max animate-[marquee_28s_linear_infinite] gap-8 whitespace-nowrap font-mono text-[10px] font-bold tracking-[.16em]">
            {[...skills, ...skills].map((skill, i) => <span key={`${skill}-${i}`} className="flex items-center gap-8">{skill}<span>✦</span></span>)}
          </div>
        </div>

        <section id="about" className="mx-auto max-w-360 px-5 py-28 lg:px-12 lg:py-40">
          <Reveal><div className="mb-16 grid gap-8 lg:grid-cols-2"><p className="font-mono text-[10px] uppercase tracking-[.22em] text-[#c7ff38]">[ 01 — PROFILE ]</p><h2 className="text-4xl font-medium leading-[1.05] tracking-[-.05em] sm:text-6xl">Not just writing code.<br /><span className="text-white/30">Owning the outcome.</span></h2></div></Reveal>
          <div className="grid gap-4 md:grid-cols-12">
            <Reveal className="md:col-span-7"><div className="relative flex h-full flex-col overflow-hidden rounded-4xl border border-white/10 bg-white/[.035] p-7 sm:min-h-80 sm:p-10"><p className="relative z-10 max-w-xl text-xl leading-relaxed tracking-[-.025em] text-white/75 sm:text-2xl">I work across the stack because great products break at the seams. From database design and authentication to interaction details and production deployment, I connect the whole system.</p><div className="relative z-10 mt-10 flex flex-wrap gap-2 sm:absolute sm:bottom-8 sm:left-8 sm:mt-0">{["Architecture", "API design", "Interface craft", "Deployment"].map(x => <span key={x} className="rounded-full border border-white/10 px-3 py-2 font-mono text-[9px] uppercase tracking-wider text-white/45">{x}</span>)}</div><div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-[#c7ff38]/10 blur-3xl" /></div></Reveal>
            <Reveal className="md:col-span-5"><div className="grid h-full grid-cols-1 gap-4 sm:grid-cols-2"><div className="rounded-4xl border border-white/10 bg-[#c7ff38] p-6 text-black"><p className="font-mono text-[9px] uppercase tracking-widest">Primary runtime</p><p className="mt-14 text-5xl font-semibold tracking-[-.06em]">Java<span className="text-black/35">21</span></p></div><div className="rounded-4xl border border-white/10 bg-white/[.035] p-6"><p className="font-mono text-[9px] uppercase tracking-widest text-white/35">Current role</p><p className="mt-14 text-xl font-medium">Web Developer</p><p className="mt-1 text-xs text-white/40">UP24Network</p></div><div className="flex items-center justify-between rounded-4xl border border-white/10 bg-white/[.035] p-6 sm:col-span-2"><div><p className="font-mono text-[9px] uppercase tracking-widest text-white/35">Location</p><p className="mt-2 flex items-center gap-2 text-lg"><MapPin className="h-4 w-4 text-[#c7ff38]" /> India / Remote</p></div><Image src="/pfp.jpg" width={72} height={72} alt="Vivek Nigam" className="h-16 w-16 rounded-full border border-white/15 object-cover grayscale transition hover:grayscale-0" /></div></div></Reveal>
          </div>
        </section>

        <section id="work" className="border-t border-white/10 py-28 lg:py-40">
          <div className="mx-auto max-w-360 px-5 lg:px-12">
            <Reveal><div className="mb-16 flex items-end justify-between"><div><p className="mb-5 font-mono text-[10px] uppercase tracking-[.22em] text-[#c7ff38]">[ 02 — SELECTED WORK ]</p><h2 className="text-5xl font-medium tracking-[-.06em] sm:text-7xl">Proof, not promises.</h2></div><span className="hidden font-mono text-[10px] text-white/25 sm:block">04 PRODUCTION BUILDS</span></div></Reveal>
            <div className="space-y-4">
              {projects.map((project) => (
                <Reveal key={project.title}>
                  <a href={project.href} target="_blank" rel="noreferrer" className="group grid overflow-hidden rounded-4xl border border-white/10 bg-white/2.5 transition duration-500 hover:border-white/25 hover:bg-white/4.5 lg:grid-cols-[.82fr_1.18fr]">
                    <div className="flex min-h-97.5 flex-col justify-between p-7 sm:p-10 lg:min-h-115">
                      <div>
                        <div className="mb-10 flex items-center justify-between">
                          <span className="font-mono text-[10px] text-white/30">{project.n}</span>
                          <span className="grid h-11 w-11 place-items-center rounded-full border border-white/10 transition duration-500 group-hover:rotate-45 group-hover:border-white/30" style={{ color: project.color }}><ArrowUpRight className="h-5 w-5" /></span>
                        </div>
                        <p className="mb-3 font-mono text-[9px] uppercase tracking-[.18em]" style={{ color: project.color }}>{project.type}</p>
                        <h3 className="text-4xl font-semibold tracking-[-.055em] sm:text-5xl">{project.title}</h3>
                        <p className="mt-7 max-w-lg text-sm leading-6 text-white/45">{project.copy}</p>
                      </div>
                      <div className="mt-10 flex flex-wrap gap-2">{project.tags.map((tag) => <span key={tag} className="rounded-full border border-white/10 px-3 py-1.5 font-mono text-[8px] uppercase tracking-wider text-white/40">{tag}</span>)}</div>
                    </div>
                    <ProjectVisual project={project} />
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="mx-auto grid max-w-360 gap-12 px-5 py-28 lg:grid-cols-[.7fr_1.3fr] lg:px-12 lg:py-40">
          <Reveal><div className="lg:sticky lg:top-28"><p className="mb-5 font-mono text-[10px] uppercase tracking-[.22em] text-[#c7ff38]">[ 03 — EXPERIENCE ]</p><h2 className="text-5xl font-medium tracking-[-.06em]">Field<br />notes.</h2></div></Reveal>
          <div className="relative pl-10">
            <div className="absolute bottom-10 left-1.75 top-10 w-px bg-white/10">
              <motion.div initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }} className="h-full w-px origin-top bg-linear-to-b from-[#c7ff38] via-[#c7ff38]/60 to-[#c7ff38]/20" />
            </div>
            {experience.map((job, i) => (
              <Reveal key={job.company}>
                <div className="relative grid gap-5 border-t border-white/10 py-10 sm:grid-cols-[1fr_1fr]">
                  <span className={`absolute -left-10 top-10 grid h-4 w-4 place-items-center rounded-full border ${i === 0 ? "border-[#c7ff38] bg-[#c7ff38] shadow-[0_0_20px_rgba(199,255,56,.55)]" : "border-white/25 bg-[#080a08]"}`}>
                    {i === 0 && <span className="h-1.5 w-1.5 rounded-full bg-black" />}
                  </span>
                  <div><p className="font-mono text-[9px] text-[#c7ff38]">0{i + 1} / {job.period}</p><h3 className="mt-3 text-2xl font-medium">{job.company}</h3><p className="text-sm text-white/35">{job.role}</p></div>
                  <p className="text-sm leading-6 text-white/45">{job.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="contact" className="border-t border-white/10">
          <div className="mx-auto grid max-w-360 gap-12 px-5 py-28 lg:grid-cols-[.8fr_1.2fr] lg:px-12 lg:py-40">
            <Reveal><div><p className="mb-6 font-mono text-[10px] uppercase tracking-[.22em] text-[#c7ff38]">[ 04 — CONTACT ]</p><h2 className="text-6xl font-semibold leading-[.85] tracking-[-.075em] sm:text-8xl">LET&apos;S<br /><span className="font-serif font-normal italic text-white/25">make</span><br />IMPACT.</h2><a href="mailto:vivekgotstack@gmail.com" className="mt-9 inline-flex items-center gap-3 border-b border-[#c7ff38]/40 pb-2 text-sm text-[#c7ff38]">vivekgotstack@gmail.com <MoveRight className="h-4 w-4" /></a></div></Reveal>
            <Reveal><ContactForm /></Reveal>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-white/10 px-5 py-8 lg:px-12"><div className="mx-auto flex max-w-336 flex-col gap-5 font-mono text-[9px] uppercase tracking-[.15em] text-white/30 sm:flex-row sm:items-center sm:justify-between"><p>© 2026 Vivek Nigam / Engineered end to end</p><div className="flex gap-5"><a href="https://github.com/vivekgotstack" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-white"><Github className="h-3.5 w-3.5" /> GitHub</a><a href="mailto:vivekgotstack@gmail.com" className="flex items-center gap-2 hover:text-white"><Mail className="h-3.5 w-3.5" /> Email</a><a href="https://www.linkedin.com/in/randomvivek/" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-white"><Linkedin className="h-3.5 w-3.5" /> LinkedIn</a><span className="hidden w-14.5 shrink-0 sm:block" aria-hidden="true" /></div></div></footer>

      <style jsx global>{`@keyframes marquee{to{transform:translateX(-50%)}} @media(prefers-reduced-motion:reduce){*{scroll-behavior:auto!important;animation-duration:.01ms!important;animation-iteration-count:1!important}}`}</style>
    </div>
  );
}
