import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Globe,
  Briefcase,
  GraduationCap,
  Download,
} from "lucide-react";

import Reveal from "../components/Reveal";
import SectionTitle from "../components/SectionTitle";
import ProjectCard from "../components/ProjectCard";
import ExperienceTimeline from "../components/ExperienceTimeline";

export default function Home({ data }) {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-20 md:pt-0">
        <div className="grid-bg absolute inset-0 opacity-40" />

        <div className="section-container relative py-24 md:py-32">
          <div className="grid items-center gap-14 md:grid-cols-2">
            
            {/* LEFT SIDE */}
            <div>
              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-sky-400"
              >
                {data.hero.eyebrow}
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="text-4xl md:text-6xl font-extrabold leading-tight"
              >
                Hi, I’m{" "}
                <span className="text-gradient">{data.name}</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9 }}
                className="mt-6 max-w-xl text-lg leading-8 text-slate-400"
              >
                {data.hero.description}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.1 }}
                className="mt-8 flex flex-wrap gap-4"
              >
                <Link
                  to="/projects"
                  className="rounded-2xl bg-sky-400 px-6 py-3 font-semibold text-black transition hover:scale-105"
                >
                  View Projects
                </Link>

                <Link
                  to="/about"
                  className="rounded-2xl border border-white/15 px-6 py-3 font-semibold text-white transition hover:bg-white/5"
                >
                  About Me
                </Link>

                <a
                  href={data.cv}
                  download
                  className="inline-flex items-center gap-2 rounded-2xl border border-sky-400/25 bg-sky-400/10 px-6 py-3 font-semibold text-sky-300 transition hover:bg-sky-400/15"
                >
                  <Download size={18} />
                  Download CV
                </a>
              </motion.div>
            </div>

            
            {/* RIGHT SIDE (IMAGE) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9 }}
              className="glass soft-shadow rounded-[2rem] p-6"
            >
              <div className="h-[420px] overflow-hidden rounded-[1.5rem] border border-white/10">
                <img
                  src={data.profileImage}
                  alt={data.name}
                  className="h-full w-full object-cover object-top"
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2 mt-4">
                <div className="rounded-2xl border border-white/10 bg-black/25 p-4">
                  <Code2 className="mb-3 text-sky-400" />
                  <h3 className="font-semibold">Backend</h3>
                  <p className="mt-2 text-sm text-slate-400">
                    Databases, APIs, and structured systems.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/25 p-4">
                  <Database className="mb-3 text-sky-400" />
                  <h3 className="font-semibold">Database</h3>
                  <p className="mt-2 text-sm text-slate-400">
                    SQL, relational design, and data integrity.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/25 p-4">
                  <Globe className="mb-3 text-sky-400" />
                  <h3 className="font-semibold">Focus</h3>
                  <p className="mt-2 text-sm text-slate-400">
                    Business-driven technical solutions.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/25 p-4">
                  <Briefcase className="mb-3 text-sky-400" />
                  <h3 className="font-semibold">Projects</h3>
                  <p className="mt-2 text-sm text-slate-400">
                    Practical systems solving real problems.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

<br></br>
<br></br>
      {/* SKILLS */}
      <section className="section-container py-20">
        <Reveal>
          <SectionTitle title="Skills" />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="flex flex-wrap justify-center gap-3">
            {data.skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </Reveal>
      </section>

<br></br>
<br></br>
<br></br>
      {/* EXPERIENCE */}
      <section className="section-container py-20">
        <Reveal>
          <SectionTitle title="Experience" />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="glass rounded-[2rem] p-8">
            <ExperienceTimeline items={data.experience} />
          </div>
        </Reveal>
      </section>

            <br></br>
            <br></br>
            <br></br>
      {/* PROJECTS */}
      <section className="section-container py-20">
        <Reveal>
          <SectionTitle title="Projects" />
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {data.projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.07}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </section>

<br></br>
<br></br>
      {/* CONTACT */}
      <section className="section-container py-20">
        <Reveal>
          <div className="glass soft-shadow rounded-[2rem] p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold">
              Let’s build something professional
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-400 leading-7">
              Ready to collaborate on projects, build systems, and create impactful solutions.
            </p>
          </div>
        </Reveal>
      </section>
    </>
  );
}