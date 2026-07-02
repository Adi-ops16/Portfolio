"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  HiArrowLeft,
  HiExclamationTriangle,
  HiLightBulb,
  HiCheckCircle,
  HiBolt,
  HiMiniArrowTopRightOnSquare,
} from "react-icons/hi2";

// ─── Animation configs ────────────────────────────────────────────────────────

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { type: "spring", stiffness: 90, damping: 22, mass: 0.6 },
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -16 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 100, damping: 20 },
  },
};

// ─── Component ────────────────────────────────────────────────────────────────

export function ProjectDetail({ project }) {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">

      {/* ── 1. BACK NAV ── */}
      <Link
        href="/projects"
        className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors duration-200 mt-10"
      >
        <HiArrowLeft size={18} />
        Back to Projects
      </Link>

      {/* ── 2. HERO BANNER ── */}
      <motion.div {...fadeUp} className="relative w-full aspect-video rounded-2xl overflow-hidden">
        <div
          className="absolute inset-0 bg-center bg-cover bg-no-repeat"
          style={{ backgroundImage: `url("${project.image}")` }}
        />
        {/* gradient overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-neutral-950/70 via-neutral-950/20 to-transparent" />
      </motion.div>

      {/* ── 3. META STRIP ── */}
      <motion.div {...fadeUp} className="space-y-6">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
          {project.title}
        </h1>

        {/* Tag chips */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="inline-flex items-center rounded-md bg-white/5 px-2.5 py-1 text-xs font-medium text-neutral-300 ring-1 ring-inset ring-white/10"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Stat cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {/* Role */}
          <div className="bg-white/5 rounded-xl ring-1 ring-white/10 p-4">
            <p className="text-xs text-primary uppercase tracking-widest font-semibold mb-1">
              Role
            </p>
            <p className="text-white font-semibold">{project.role}</p>
          </div>

          {/* Duration */}
          <div className="bg-white/5 rounded-xl ring-1 ring-white/10 p-4">
            <p className="text-xs text-primary uppercase tracking-widest font-semibold mb-1">
              Duration
            </p>
            <p className="text-white font-semibold">{project.duration}</p>
          </div>

          {/* Team */}
          <div className="bg-white/5 rounded-xl ring-1 ring-white/10 p-4">
            <p className="text-xs text-primary uppercase tracking-widest font-semibold mb-1">
              Team
            </p>
            <p className="text-white font-semibold">
              {project.teamSize === 1 ? "Solo" : `${project.teamSize} people`}
            </p>
          </div>
        </div>
      </motion.div>

      {/* ── 4. PROBLEM / SOLUTION ── */}
      <motion.div
        {...fadeUp}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {/* Problem */}
        <div className="bg-white/5 rounded-2xl p-6 space-y-3">
          <div className="flex items-center gap-2 text-yellow-400">
            <HiExclamationTriangle size={20} />
            <h2 className="text-lg font-bold text-white">The Problem</h2>
          </div>
          <p className="text-neutral-300 leading-relaxed">{project.problem}</p>
        </div>

        {/* Solution */}
        <div className="bg-white/5 rounded-2xl p-6 space-y-3">
          <div className="flex items-center gap-2 text-blue-400">
            <HiLightBulb size={20} />
            <h2 className="text-lg font-bold text-white">Our Approach</h2>
          </div>
          <p className="text-neutral-300 leading-relaxed">{project.solution}</p>
        </div>
      </motion.div>

      {/* ── 5. OUTCOMES ── */}
      <motion.div {...fadeUp} className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Key Outcomes</h2>
        <motion.ul
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-3"
        >
          {project.outcomes.map((item, i) => (
            <motion.li
              key={i}
              variants={itemVariants}
              className="flex gap-3 items-start"
            >
              <HiCheckCircle
                size={20}
                className="text-green-400 mt-0.5 shrink-0"
              />
              <span className="text-neutral-300">{item}</span>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>

      {/* ── 6. CHALLENGES ── */}
      <motion.div {...fadeUp} className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Challenges Overcome</h2>
        <motion.ul
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-3"
        >
          {project.challenges.map((item, i) => (
            <motion.li
              key={i}
              variants={itemVariants}
              className="flex gap-3 items-start"
            >
              <HiBolt
                size={20}
                className="text-yellow-400 mt-0.5 shrink-0"
              />
              <span className="text-neutral-300">{item}</span>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>

      {/* ── 7. TECH DECISIONS ── */}
      <motion.div {...fadeUp} className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Technical Decisions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {project.techDecisions.map((td, i) => (
            <div
              key={i}
              className="bg-white/5 rounded-xl ring-1 ring-white/10 p-5"
            >
              <p className="text-white font-bold text-base">{td.decision}</p>
              <p className="text-neutral-400 text-sm mt-2 leading-relaxed">
                {td.reason}
              </p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* ── 8. ARCHITECTURE OVERVIEW ── */}
      <motion.div {...fadeUp} className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Architecture Overview</h2>
        <p className="text-neutral-300 leading-relaxed">
          {project.architectureOverview}
        </p>
      </motion.div>

      {/* ── 9. ACTION BUTTONS ── */}
      <motion.div
        {...fadeUp}
        className="flex flex-wrap items-center justify-center gap-4 pt-4"
      >
        {project.live_link && (
          <a
            href={project.live_link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 text-sm font-semibold text-white shadow-sm transition-all hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/25 active:scale-95"
          >
            <HiMiniArrowTopRightOnSquare size={18} />
            Live Demo
          </a>
        )}
        <a
          href={project.gitHub_link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-neutral-700 bg-neutral-800/40 px-6 text-sm font-semibold text-neutral-200 transition-all hover:bg-neutral-800 active:scale-95"
        >
          <span className="material-symbols-outlined text-base">code</span>
          View Code
        </a>
      </motion.div>

    </div>
  );
}
