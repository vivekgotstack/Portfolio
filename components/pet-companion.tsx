"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { ChevronDown, PawPrint, Power } from "lucide-react";

const pets = [
  { id: "mochi", name: "Mochi", type: "Noble cat", sheet: "/pets/mochi/spritesheet.webp" },
  { id: "byte", name: "Byte", type: "Chainsmoker fox", sheet: "/pets/byte/spritesheet.webp" },
  { id: "pip", name: "Pip", type: "Saint monkey", sheet: "/pets/pip/spritesheet.webp" },
] as const;

const sectionCopy: Record<(typeof pets)[number]["id"], Record<string, string>> = {
  mochi: {
    top: "Welcome. Vivek is a full-stack engineer who prefers complete, dependable systems over fashionable fragments.",
    about: "A worthy craftsperson minds every layer. Architecture, APIs, interfaces, data, and deployment all receive his considered attention.",
    work: "These are functioning products, not courtly decoration. Each demonstrates judgment across frontend, backend, security, and infrastructure.",
    experience: "The chronicle is young, yet the character is established: learn swiftly, accept responsibility, and deliver the entire outcome.",
    contact: "Should your venture require serious engineering and thoughtful ownership, you may present your proposal here.",
  },
  byte: {
    top: "Here’s the straight smoke: Vivek builds the backend, the interface, and the production setup instead of passing the problem around.",
    about: "He works the whole stack because bugs love hiding between teams. Hard to hide when one engineer understands every seam.",
    work: "No vaporware in this lineup. These things authenticate users, move data, call services, and survive outside a tutorial tab.",
    experience: "Not the longest rap sheet yet, but the pattern’s solid: pick up the hard part, learn fast, and get it shipped.",
    contact: "Got a real build and a sensible deadline? Leave the brief. He’ll answer without the sales fog.",
  },
  pip: {
    top: "A complete system is many small decisions held in balance. Vivek brings backend strength, interface care, and production discipline together.",
    about: "He studies the whole path from database to user experience, because reliable products emerge when every layer is understood.",
    work: "Each project is a lesson made tangible: secure flows, useful interfaces, connected services, and infrastructure working as one.",
    experience: "Growth is not measured only in years. It appears in responsibility accepted, problems understood, and outcomes delivered with care.",
    contact: "If your idea deserves patient thought and committed engineering, share it here. Good work begins with a clear conversation.",
  },
};

type PetId = (typeof pets)[number]["id"];

export function PetCompanion() {
  const [mounted, setMounted] = useState(false);
  const [enabled, setEnabled] = useState(false);
  const [selected, setSelected] = useState<PetId>("mochi");
  const [pickerOpen, setPickerOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("top");
  const [speechVisible, setSpeechVisible] = useState(false);
  const [isJumping, setIsJumping] = useState(false);
  const [hasLanded, setHasLanded] = useState(false);
  const actionLock = useRef(false);
  const speechTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const currentPet = pets.find((pet) => pet.id === selected) ?? pets[0];

  useEffect(() => {
    setMounted(true);
    const storedPet = window.localStorage.getItem("portfolio-pet") as PetId | null;
    const storedEnabled = window.localStorage.getItem("portfolio-pet-enabled") === "true";
    if (storedPet && pets.some((pet) => pet.id === storedPet)) setSelected(storedPet);
    setEnabled(storedEnabled);
  }, []);

  useEffect(() => {
    window.localStorage.setItem("portfolio-pet", selected);
    window.localStorage.setItem("portfolio-pet-enabled", String(enabled));
  }, [enabled, selected]);

  useEffect(() => {
    if (!enabled) return;
    const sections = ["top", "about", "work", "experience", "contact"]
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActiveSection(visible.target.id);
      },
      { rootMargin: "-30% 0px -48% 0px", threshold: [0, 0.15, 0.4] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [enabled]);

  useEffect(() => {
    if (!enabled) return;
    setSpeechVisible(true);
    if (speechTimer.current) clearTimeout(speechTimer.current);
    speechTimer.current = setTimeout(() => setSpeechVisible(false), 6000);
    return () => {
      if (speechTimer.current) clearTimeout(speechTimer.current);
    };
  }, [activeSection, enabled, selected]);

  function togglePets() {
    if (actionLock.current) return;
    setEnabled((value) => {
      const next = !value;
      setPickerOpen(next);
      return next;
    });
  }

  function jumpOnce() {
    if (actionLock.current) return;
    actionLock.current = true;
    setHasLanded(false);
    setIsJumping(true);
  }

  return (
    <>
      <div className="relative flex items-center gap-1.5">
        <button
          type="button"
          onClick={togglePets}
          disabled={isJumping}
          aria-pressed={enabled}
          className={`inline-flex h-9 items-center gap-2 rounded-full border px-3 font-mono text-[8px] font-bold uppercase tracking-[.13em] transition ${enabled ? "border-[#c7ff38]/45 bg-[#c7ff38]/10 text-[#c7ff38]" : "border-white/12 text-white/45 hover:border-white/25 hover:text-white"}`}
        >
          <Power className="h-3 w-3" /> Pet {enabled ? "on" : "off"}
        </button>

        {enabled && (
          <button
            type="button"
            onClick={() => setPickerOpen((value) => !value)}
            disabled={isJumping}
            aria-expanded={pickerOpen}
            className="inline-flex h-9 items-center gap-1.5 rounded-full border border-white/12 px-2.5 font-mono text-[8px] uppercase tracking-[.12em] text-white/65 transition hover:border-white/25 hover:text-white sm:px-3"
          >
            <PawPrint className="h-3 w-3 text-[#c7ff38]" /> <span className="hidden sm:inline">{currentPet.name}</span> <ChevronDown className="h-3 w-3" />
          </button>
        )}

        {enabled && pickerOpen && (
          <div className="absolute right-0 top-12 w-64 overflow-hidden rounded-2xl border border-white/12 bg-[#0b0d0b]/95 p-2 shadow-[0_24px_80px_rgba(0,0,0,.55)] backdrop-blur-xl">
            <p className="px-3 pb-2 pt-1 font-mono text-[8px] uppercase tracking-[.16em] text-white/30">Choose your guide</p>
            {pets.map((pet) => (
              <button
                key={pet.id}
                type="button"
                disabled={isJumping}
                onClick={() => { setSelected(pet.id); setPickerOpen(false); }}
                className={`flex w-full items-center gap-3 rounded-xl px-3 py-2 text-left transition ${selected === pet.id ? "bg-[#c7ff38]/10" : "hover:bg-white/[.05]"}`}
              >
                <span className="pet-thumb" style={{ backgroundImage: `url(${pet.sheet})` }} aria-hidden="true" />
                <span><span className="block text-sm font-semibold">{pet.name}</span><span className="font-mono text-[8px] uppercase tracking-[.12em] text-white/35">{pet.type}</span></span>
                {selected === pet.id && <span className="ml-auto h-1.5 w-1.5 rounded-full bg-[#c7ff38] shadow-[0_0_10px_#c7ff38]" />}
              </button>
            ))}
          </div>
        )}
      </div>

      {mounted && enabled && createPortal(
        <div className="pet-stage fixed bottom-3 right-3 z-[90] sm:bottom-5 sm:right-5">
          {speechVisible && (
            <button
              type="button"
              onClick={() => setSpeechVisible(false)}
              className="pet-dialog absolute bottom-[112px] right-0 w-[min(280px,calc(100vw-24px))] rounded-2xl border border-white/15 bg-[#0b0d0b]/95 p-3.5 text-left shadow-[0_22px_70px_rgba(0,0,0,.55)] backdrop-blur-xl"
              aria-label="Dismiss pet message"
            >
              <span className="mb-2 flex items-center gap-2 font-mono text-[8px] font-bold uppercase tracking-[.16em] text-[#c7ff38]"><span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#c7ff38]" /> {currentPet.name} says</span>
              <span className="block text-[11px] leading-[1.55] text-white/70">{sectionCopy[selected][activeSection] ?? sectionCopy[selected].top}</span>
              <span className="absolute -bottom-2 right-8 h-4 w-4 rotate-45 border-b border-r border-white/15 bg-[#0b0d0b]" />
            </button>
          )}

          <button
            type="button"
            onClick={jumpOnce}
            disabled={isJumping}
            onAnimationEnd={(event) => {
              if (event.animationName !== "pet-jump-frames") return;
              actionLock.current = false;
              setIsJumping(false);
              setHasLanded(true);
            }}
            onPointerLeave={() => { if (!isJumping) setHasLanded(false); }}
            className={`pet-shell relative block h-[104px] w-24 overflow-visible rounded-[1.4rem] outline-none focus-visible:ring-2 focus-visible:ring-[#c7ff38] ${isJumping ? "pet-jumping" : ""} ${hasLanded ? "pet-landed" : ""}`}
            aria-label={`${currentPet.name}, portfolio guide. Hover for a slow wave; click for one jump.`}
          >
            <span className={`pet-sprite pet-${selected} absolute inset-0 ${selected === "pip" ? "pet-static" : ""}`} style={{ backgroundImage: `url(${currentPet.sheet})` }} aria-hidden="true" />
          </button>
        </div>,
        document.body,
      )}

      <style jsx global>{`
        .pet-sprite,.pet-thumb{background-repeat:no-repeat;background-size:800% 300%;background-position:0 0;image-rendering:pixelated}
        .pet-stage{isolation:isolate;overflow:visible}
        .pet-sprite{animation:pet-idle 1.1s linear infinite;will-change:background-position;pointer-events:none}
        .pet-sprite.pet-static{animation:none;background-position:0 0}
        .pet-thumb{display:block;width:42px;height:46px;background-size:800% 300%}
        .pet-shell:hover .pet-sprite,.pet-shell:focus-visible .pet-sprite{background-position-y:50%;animation:pet-wave 2.1s step-end infinite}
        .pet-shell:hover .pet-sprite.pet-byte,.pet-shell:focus-visible .pet-sprite.pet-byte{transform:scaleX(1.02);transform-origin:center}
        .pet-shell:hover{filter:drop-shadow(0 10px 16px rgba(199,255,56,.16))}
        .pet-shell.pet-landed .pet-sprite{background-position:57.1429% 100%;animation:none}
        .pet-shell.pet-jumping .pet-sprite{background-position-y:100%;animation:pet-jump-frames .92s linear 1 both}
        .pet-shell.pet-jumping .pet-sprite,.pet-shell.pet-landed .pet-sprite{transform:none}
        @keyframes pet-idle{0%,16%{background-position-x:0}16.1%,32%{background-position-x:14.2857%}32.1%,48%{background-position-x:28.5714%}48.1%,64%{background-position-x:42.8571%}64.1%,80%{background-position-x:57.1429%}80.1%,100%{background-position-x:71.4286%}}
        @keyframes pet-wave{0%,14%{background-position-x:0}14.01%,28%{background-position-x:14.2857%}28.01%,42%{background-position-x:28.5714%}42.01%,58%{background-position-x:42.8571%}58.01%,72%{background-position-x:28.5714%}72.01%,86%{background-position-x:14.2857%}86.01%,100%{background-position-x:0}}
        @keyframes pet-jump-frames{0%,18%{background-position-x:0}18.1%,36%{background-position-x:14.2857%}36.1%,54%{background-position-x:28.5714%}54.1%,72%{background-position-x:42.8571%}72.1%,100%{background-position-x:57.1429%}}
        @media(prefers-reduced-motion:reduce){.pet-sprite{animation:none!important;background-position:0 0!important}.pet-shell:hover .pet-sprite,.pet-shell:focus-visible .pet-sprite{background-position:0 50%!important}.pet-shell.pet-jumping .pet-sprite{background-position:57.1429% 100%!important;animation:pet-jump-frames .01ms linear 1!important}}
      `}</style>
    </>
  );
}
