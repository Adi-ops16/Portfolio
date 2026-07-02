"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '../ui/Button';
import { BiDetail } from 'react-icons/bi';
import { HiMiniArrowTopRightOnSquare } from 'react-icons/hi2';

export function ProjectSlide({ project, index }) {
    return (
        <div className="w-screen h-full shrink-0 flex items-center justify-center px-4 sm:px-8 lg:px-16 select-none">
            <motion.div
                initial={{ opacity: 0, scale: 0.92, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                    type: "spring",
                    stiffness: 90,
                    damping: 22,
                    mass: 0.6,
                    delay: 0.1
                }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center bg-neutral-900/95 dark:bg-background-dark/200 backdrop-blur-xl p-6 sm:p-10 lg:p-12 rounded-3xl shadow-xl max-w-5xl w-full mx-4"
            >
                {/* Left Column: Details */}
                <div className="flex flex-col gap-4 order-2 lg:order-1">
                    <span className="text-primary/70 text-xs sm:text-sm font-mono tracking-widest uppercase">
                        Project {String(index + 1).padStart(2, '0')}
                    </span>

                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
                        {project.title}
                    </h3>

                    <p className="text-neutral-400 text-sm sm:text-base leading-relaxed max-w-md">
                        {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 sm:gap-2 my-1">
                        {project.tags.map((tag, i) => (
                            <span
                                key={i}
                                className="inline-flex items-center rounded-md bg-white/5 px-2.5 py-1 text-xs font-medium text-neutral-300 ring-1 ring-inset ring-white/10"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    <div className="flex flex-wrap justify-center gap-4 pt-3">
                        {project.live_link && (
                            <a
                                href={project.live_link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex h-10 items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 text-xs sm:text-sm font-semibold text-white shadow-sm transition-all hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/20 active:scale-95"
                            >
                                <HiMiniArrowTopRightOnSquare size={20} />
                                Live Demo
                            </a>
                        )}
                        {project.slug && (
                            <Link href={`/projects/${project.slug}`}>
                                <Button
                                    className="h-10 rounded-xl flex gap-2"
                                    glow
                                >
                                    <BiDetail />
                                    Details
                                </Button>
                            </Link>
                        )}
                        <a
                            href={project.gitHub_link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex h-10 items-center justify-center gap-2 rounded-xl border border-neutral-700 bg-neutral-800/40 px-5 text-xs sm:text-sm font-semibold text-neutral-200 transition-all hover:bg-neutral-800 active:scale-95"
                        >
                            <span className="material-symbols-outlined text-base">code</span>
                            GitHub
                        </a>
                    </div>
                </div>

                {/* Right Column: Image */}
                <div className="order-1 lg:order-2 w-full">
                    <div className="relative rounded-2xl overflow-hidden border border-neutral-800/80 shadow-xl aspect-4/3 w-full group">
                        <div
                            className="absolute inset-0 bg-center bg-no-repeat bg-cover transition-transform duration-700 ease-out group-hover:scale-105"
                            style={{ backgroundImage: `url("${project.image}")` }}
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-neutral-950/40 via-transparent to-transparent" />
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
