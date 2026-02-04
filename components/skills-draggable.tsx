"use client";

import type React from "react";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { FaJava } from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiSpringboot,
  SiSpringsecurity,
  SiSpring,
  SiMysql,
  SiTailwindcss,
  SiPostgresql,
  SiFirebase,
  SiVercel,
  SiGit,
  SiGithub,
  SiDocker,
  SiPostman,
  SiClerk,
  SiShadcnui,
  SiPrisma,
} from "react-icons/si";
import { FaTwitter } from "react-icons/fa";

type Skill = {
  label: string;
  icon?: React.ReactNode;
};

function SkillPill({ label, icon }: Skill) {
  return (
    <motion.div
      className={cn(
        "relative select-none",
        "inline-flex items-center gap-1.5 rounded-sm border px-1 py-px text-xs font-medium",
        "bg-white text-neutral-600 border-neutral-200",
        "dark:bg-neutral-950 dark:text-neutral-300 dark:border-neutral-800"
      )}
      whileHover={{ scale: 1.15 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      aria-label={label}
    >
      <div
        className="h-3 w-3 flex items-center justify-center"
        aria-hidden="true"
      >
        {icon}
      </div>
      <span className="leading-none">{label}</span>
    </motion.div>
  );
}

export function SkillsDraggable() {
  const skills: Skill[] = [
    { label: "Java", icon: <FaJava className="h-3 w-3" /> },
    { label: "SpringBoot", icon: <SiSpringboot className="h-3 w-3" /> },
    { label: "JavaScript", icon: <SiJavascript className="h-3 w-3" /> },
    { label: "TypeScript", icon: <SiTypescript className="h-3 w-3" /> },
    { label: "React.js", icon: <SiReact className="h-3 w-3" /> },
    { label: "Spring Core", icon: <SiSpring className="h-3 w-3" /> },
    { label: "Spring AOP", icon: <SiSpring className="h-3 w-3" /> },
    { label: "Spring JPA", icon: <SiSpring className="h-3 w-3" /> },
    { label: "Spring JDBC", icon: <SiSpring className="h-3 w-3" /> },
    { label: "Spring REST", icon: <SiSpring className="h-3 w-3" /> },
    { label: "Spring Security", icon: <SiSpringsecurity className="h-3 w-3" /> },
    { label: "PostgreSQL", icon: <SiPostgresql className="h-3 w-3" /> },
    { label: "MySQL", icon: <SiMysql className="h-3 w-3" /> },
    { label: "Firebase", icon: <SiFirebase className="h-3 w-3" /> },
    { label: "Tailwind CSS", icon: <SiTailwindcss className="h-3 w-3" /> },
    { label: "Vercel", icon: <SiVercel className="h-3 w-3" /> },
    { label: "Git", icon: <SiGit className="h-3 w-3" /> },
    { label: "GitHub", icon: <SiGithub className="h-3 w-3" /> },
    { label: "Docker", icon: <SiDocker className="h-3 w-3" /> },
    { label: "Postman API", icon: <SiPostman className="h-3 w-3" /> },
    { label: "Clerk", icon: <SiClerk className="h-3 w-3" /> },
    { label: "Shadcn UI", icon: <SiShadcnui className="h-3 w-3" /> },
    { label: "Prisma", icon: <SiPrisma className="h-3 w-3" /> },
  ];

  return (
    <div>
      <div className="mb-2 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
          Skills
        </h3>
        <div className="pointer-events-none hidden text-[10px] text-slate-500 dark:text-slate-400 sm:block">
          with experience in all
        </div>
      </div>
      <div className={cn("relative flex flex-wrap gap-2")}>
        {skills.map(s => (
          <SkillPill key={s.label} {...s} />
        ))}
      </div>
    </div>
  );
}

export default SkillsDraggable;
