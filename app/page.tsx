import Link from "next/link";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TextShimmer } from "@/components/ui/text-shimmer";
import { Typewriter } from "@/components/ui/typewriter";
import { TimeCounter } from "@/components/time-counter";

import { ProjectListItem } from "@/components/project-list-item";
import { AchievementItem } from "@/components/achievement-item";
import { WorkItem } from "@/components/work-item";
import { Dock } from "@/components/dock";
import { SkillsDraggable } from "@/components/skills-draggable";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  FadeInText,
  SlideUp,
  SlideInLeft,
  SlideInRight,
} from "@/components/scroll-animation";

export default function Page() {
  return (
    <main className="min-h-dvh bg-grid pb-32 pt-6 dark:bg-neutral-950">
      <FadeInText>
        <nav className="mx-auto mb-4 flex w-full max-w-xl items-center justify-between px-4 text-xs text-neutral-600 dark:text-neutral-300">
          <Link
            href="#"
            className="font-semibold text-neutral-900 dark:text-neutral-50"
          >
            vivek.
          </Link>
          <div className="flex items-center gap-3">
            <a href="#projects">projects</a>
            <a href="#skills">skills</a>
            <a href="#education">education</a>
            <ThemeToggle />
          </div>
        </nav>
      </FadeInText>

      <div className="mx-auto max-w-xl px-4">
        <article className="rounded-2xl border border-neutral-200 bg-white shadow-sm dark:border-neutral-800 dark:bg-neutral-950">
          <div className="p-4 md:p-6">
            <SlideUp>
              <header className="space-y-3 p-4">
                <FadeInText>
                  <div className="flex items-center justify-between">
                    <TextShimmer as="p" className="text-xs">
                      hi, I’m
                    </TextShimmer>
                    <TimeCounter className="text-xs font-mono text-neutral-500" />
                  </div>
                </FadeInText>

                <SlideInLeft>
                  <div className="flex items-center gap-3">
                    <div className="h-14 w-14 rounded-full overflow-hidden ring-2 ring-neutral-200 dark:ring-neutral-800">
                      <img
                        src="/pfp.jpg"
                        alt="Vivek Nigam"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <h1 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-50">
                      Vivek Nigam
                    </h1>
                  </div>
                </SlideInLeft>

                <FadeInText>
                  <p className="text-xs text-neutral-600 dark:text-neutral-300">
                    Final-year B.Tech CSE student · Full Stack Developer
                  </p>
                  <div className="text-xs text-neutral-600 dark:text-neutral-300">
                    <Typewriter
                      text={[
                        "Java & Spring Boot backend",
                        "React & modern frontend",
                        "REST APIs & databases",
                      ]}
                      speed={80}
                      waitTime={1800}
                      deleteSpeed={60}
                      cursorChar="|"
                    />
                  </div>
                </FadeInText>

                <SlideInRight>
                  <div className="mt-4 flex flex-wrap items-center gap-2">
                    <Button size="sm" asChild>
                      <a
                        href="https://drive.google.com/file/d/1XEyTy30CopzqYtc3LwvYt--gKO7U_rZf/view?usp=drivesdk"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Resume
                      </a>
                    </Button>

                    <a href="mailto:vivekni1224@gmail.com">
                      <Mail className="h-4 w-4" />
                    </a>
                    <a href="https://github.com/">
                      <Github className="h-4 w-4" />
                    </a>
                    <a href="https://www.linkedin.com/in/randomvivek/">
                      <Linkedin className="h-4 w-4" />
                    </a>
                    <a href="https://x.com/">
                      <Twitter className="h-4 w-4" />
                    </a>
                  </div>
                </SlideInRight>
              </header>
            </SlideUp>

            <FadeInText>
              <section className="p-4 text-[13px] leading-6 text-neutral-600 dark:text-neutral-300">
                I’m a Computer Science graduate focused on building reliable, clean, and scalable web applications. I specialize in Java, Spring Boot, React, and modern databases, with an emphasis on designing and understanding systems end-to-end.
              </section>
            </FadeInText>

            <SlideUp>
              <section id="experience" className="mt-6 p-4">
                <h3 className="text-sm font-semibold mb-3">Experience</h3>

                <div className="space-y-2">
                  <WorkItem
                    company="Kraftors AI&R"
                    role="Web Development Trainee"
                    period="April 2026 – Present"
                    summary={
                      <>
                        <p>Worked on the production website https://fashionxglobal.com, contributing to frontend performance and UX improvements:</p>

                         <ul className="list-disc pl-5 space-y-1">
                        <li>Built an interactive video showcase section with product-switching “bubble” controls, allowing users to navigate featured items without closing the active video modal.</li>
                        <li>Fixed a broken price filter logic where minimum values failed to initialize, restoring correct filtering behavior.</li>
                        <li>Improved page load performance by implementing image prefetching in Next.js.</li>
                        <li>Documented APIs across multiple pages to clarify data flow and support future development.</li>
                        <li>Delivered production-ready features and pushed directly to the main branch.</li>
                        </ul>
                      </>
                    }
                  <WorkItem
                    company="TrainX"
                    role="Apprentice"
                    period="Sept 2025 – Dec 2025"
                    summary="Structured, on-site apprentice-style training program for final-year students, covering Java, Data Structures, and Database Management. Delivered hands-on sessions and real-world projects to enhance practical skills and industry readiness."
                  />
                </div>
              </section>
            </SlideUp>

            <SlideUp>
              <section id="projects" className="mt-6 p-4">
                <h3 className="text-sm font-semibold mb-3">Projects</h3>

                <div className="space-y-2">
                  <ProjectListItem
                    title="WanderWise"
                    links={[
                      {
                        label: "live ↗",
                        href: "https://wanderwise-lime.vercel.app/",
                      },
                    ]}
                    bullets={[
                      "Java Full stack Progressive Web App focused on showcasing a simulation of travel planning and exploration.",
                      "Sliding Window pattern followed to maintain DB data automatically and Spring Rest with Jpa",
                      "Responsive UI with offline-ready behavior using PWA principles.",
                      "Designed for performance and mobile-first usage.",
                    ]}
                    tags={["React", "PWA", "TypeScript", "Firebase", "Shadcn UI", "+ more"]}
                  />
                  <ProjectListItem
                    title="AnimePhillic"
                    links={[
                      {
                        label: "live ↗",
                        href: "https://anime-phillic.vercel.app/",
                      },
                    ]}
                    bullets={[
                      "Java full-stack application for browsing and exploring anime content.",
                      "Built clean UI components with a focus on usability.",
                      "Integrated external APIs for dynamic content rendering.",
                    ]}
                    tags={["React", "TypeScript", "API Integration", "Clerk", "+ more"]}
                  />
                </div>
              </section>
            </SlideUp>

            <SlideUp>
              <section id="skills" className="mt-6 p-4">
                <SkillsDraggable />
              </section>
            </SlideUp>

            <SlideUp>
              <section id="education" className="mt-6 p-4">
                <h3 className="text-sm font-semibold mb-3">Education</h3>

                <AchievementItem
                  title="RR Institute of Modern Technology"
                  date="2022 – 2026"
                  description="B.Tech in Computer Science & Engineering"
                />
                <AchievementItem
                  title="Ram Prasad Bismil Memorial Public School"
                  date="Class X & XII"
                  description="Secondary & Higher Secondary Education"
                />
              </section>
            </SlideUp>
          </div>
        </article>

        <div className="mt-6 text-center text-xs text-neutral-500">
          <em>Learning by building.</em>
        </div>
      </div>

      <Dock />
    </main>
  );
}
