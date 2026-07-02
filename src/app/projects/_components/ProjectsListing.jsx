"use client";

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { projects } from '@/data/projectsData';
import { ProjectSlide } from '@/components/sections/ProjectSlide';

export function ProjectsListing() {
    const targetRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end end"],
    });

    const x = useTransform(
        scrollYProgress,
        [0, 1],
        ["0vw", `-${(projects.length - 1) * 100}vw`]
    );

    const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <div
            ref={targetRef}
            className="relative w-full"
            style={{ height: `${projects.length * 150}vh` }}
        >
            <div className="sticky top-0 h-screen overflow-hidden flex flex-col py-12 sm:py-16">

                {/* Heading */}
                <div className="text-center px-4 shrink-0 z-10">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight font-display">
                        <span className="bg-linear-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                            All Projects
                        </span>
                    </h1>
                    <p className="mt-2 text-sm sm:text-base text-neutral-500 dark:text-neutral-400">
                        Every project — start to finish.
                    </p>
                </div>

                {/* Scroll progress bar */}
                <div className="w-full shrink-0 mt-4 bg-white/5">
                    <motion.div
                        style={{ width: progressWidth }}
                        className="h-1 bg-linear-to-r from-primary to-secondary"
                    />
                </div>

                {/* Horizontal slide track */}
                <div className="flex-1 w-full overflow-hidden flex items-center">
                    <motion.div
                        style={{ x, width: `${projects.length * 100}vw` }}
                        className="flex h-[75vh] lg:h-[65vh] items-center will-change-transform"
                    >
                        {projects.map((project, i) => (
                            <ProjectSlide key={i} project={project} index={i} />
                        ))}
                    </motion.div>
                </div>

            </div>
        </div>
    );
}
