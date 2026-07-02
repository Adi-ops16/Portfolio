"use client";

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { projects } from '@/data/projectsData';
import Link from 'next/link';
import { HiArrowRight } from 'react-icons/hi2';
import { ProjectSlide } from './ProjectSlide';
import { ProjectCardMobile } from './ProjectCardMobile';

export function Projects() {
    const targetRef = useRef(null);

    const homeProjects = projects.slice(0, 3);
    const totalSlides = homeProjects.length;

    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end end"],
    });

    const x = useTransform(
        scrollYProgress,
        [0, 1],
        ["0vw", `-${(totalSlides - 1) * 100}vw`]
    );

    return (
        <section id="projects" className="w-full relative">
            {/* Mobile: vertical stack */}
            <div className="block md:hidden py-16 px-4">
                <div className="text-center mb-10">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight font-display text-neutral-900 dark:text-white">
                        <span className="bg-linear-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                            My Projects
                        </span>
                    </h2>
                    <p className="mt-2 text-sm sm:text-base text-neutral-500 dark:text-neutral-400">
                        A selection of my recent work.
                    </p>
                </div>
                <div className="flex flex-col gap-8 max-w-lg mx-auto">
                    {homeProjects.map((project, i) => (
                        <ProjectCardMobile key={i} project={project} index={i} />
                    ))}
                </div>
                <div className="flex justify-center mt-10">
                    <Link
                        href="/projects"
                        className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors duration-200 text-sm sm:text-base group"
                    >
                        View All Projects
                        <HiArrowRight
                            size={16}
                            className="transition-transform duration-200 group-hover:translate-x-1"
                        />
                    </Link>
                </div>
            </div>

            {/* Desktop: horizontal scroll */}
            <div className="hidden md:block">
                <div
                    ref={targetRef}
                    className="relative w-full"
                    style={{ height: `${totalSlides * 150}vh` }}
                >
                    <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-between py-12 sm:py-16">

                        <div className="text-center px-4 shrink-0 z-10">
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight font-display text-neutral-900 dark:text-white">
                                <span className="bg-linear-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                                    My Projects
                                </span>
                            </h2>
                            <p className="mt-2 text-sm sm:text-base text-neutral-500 dark:text-neutral-400">
                                A selection of my recent work.
                            </p>
                        </div>

                        <div className="flex-1 w-full overflow-hidden flex items-center">
                            <motion.div
                                style={{ x, width: `${totalSlides * 100}vw` }}
                                className="flex h-[75vh] lg:h-[65vh] items-center will-change-transform"
                            >
                                {homeProjects.map((project, i) => (
                                    <ProjectSlide key={i} project={project} index={i} />
                                ))}
                            </motion.div>
                        </div>

                    </div>
                </div>

                <div className="flex justify-center py-10">
                    <Link
                        href="/projects"
                        className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors duration-200 text-sm sm:text-base group"
                    >
                        View All Projects
                        <HiArrowRight
                            size={16}
                            className="transition-transform duration-200 group-hover:translate-x-1"
                        />
                    </Link>
                </div>
            </div>
        </section>
    );
}
