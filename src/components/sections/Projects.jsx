"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Button } from '@/components/ui/Button';

const projects = [
    {
        title: "Swift-Tix",
        description: "Swift-Tix is a full‑stack Online Ticket Booking Platform built with the MERN stack. The application enables users to discover, book, and securely pay for travel tickets including Bus, Train, Launch, and Plane services. It features a robust role‑based system (User, Vendor, Admin), real‑world booking workflows, and a modern UI.",
        image: "https://i.ibb.co.com/Mx1sGcm0/Screenshot-2026-01-05-012118.png",
        tags: ["React", "Node.js", "MongoDB", "Stripe"],
        gitHub_link: 'https://github.com/Adi-ops16/Swift-Tix-client',
        live_link: 'https://assignment-11-2501.web.app/',
        colors: ["yellow", "orange", "gray", "green"]
    },
    {
        title: "Krishi-Link",
        description: "KrishiLink is a modern agricultural marketplace built to connect farmers, traders, and consumers directly in a simple, transparent, and efficient way. It empowers farmers to showcase their crops, helps buyers discover fresh local produce, and encourages sustainable farming practices across Bangladesh with features like crop listings in real-time.",
        image: "https://i.ibb.co.com/LhsThgf0/Screenshot-2026-01-05-011409.png",
        tags: ["React", "Node.js", "MongoDB"],
        gitHub_link: 'https://github.com/Adi-ops16/Krishi-Link-client',
        live_link: 'https://assignment-10-46c35.web.app/',
        colors: ["blue", "green", "gray"]
    },
    {
        title: "Toy-verse",
        description: "Toy verse is a modern and responsive Toy Store web application built with React and Tailwind CSS.Here users can explore toys, view featured products, and manage authentication securely with Firebase. The website is designed for a smooth, interactive toy shopping experience.",
        image: "https://i.ibb.co.com/N2DpqZys/Screenshot-2025-12-05-180706.png",
        gitHub_link: 'https://github.com/Adi-ops16/toy-verse',
        live_link: 'https://my-toy-store-59c1e.web.app/',
        tags: ["React.js", "Firebase", "Tailwind CSS"],
        colors: ["green", "yellow", "sky"]
    },
    {
        title: "Dragon News",
        description: "Dragon news is a local news website. Users can read recent news watch headlines and read category wise news. Only authenticated users can see the full detailed news. this is a small project to demonstrate a news application and its features",
        image: "https://i.ibb.co.com/7xNPkqF6/Screenshot-2025-12-05-181358.png",
        gitHub_link: 'https://github.com/Adi-ops16/Dragon-news',
        live_link: 'https://dragon---news-25.web.app/category/0',
        tags: ["React.js", "Firebase"],
        colors: ["gray", "orange", "purple"]
    }
];

export function Projects() {
    const [visibleProjects, setVisibleProjects] = useState(6);
    const totalProjects = projects.length;

    const loadMore = () => {
        setVisibleProjects((prev) => Math.min(prev + 6, totalProjects));
    };

    const showLess = () => {
        setVisibleProjects(6);
    }

    return (
        <section id="projects" className="w-full py-20 lg:py-24">
            <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-10 px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl font-display">
                        <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">My Projects</span>
                    </h2>
                    <p className="mt-4 text-lg text-gray-400">A selection of my recent work.</p>
                </motion.div>

                <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {projects.slice(0, visibleProjects).map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>

                {totalProjects > 6 && (
                    <div className="flex gap-4 mt-8">
                        {visibleProjects < totalProjects && (
                            <Button glow onClick={loadMore}>
                                Load More
                            </Button>
                        )}
                        {visibleProjects > 6 && (
                            <Button variant="outline" onClick={showLess}>
                                Show Less
                            </Button>
                        )}
                    </div>
                )}
            </div>
        </section>
    );
}

function ProjectCard({ project, index }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="flex flex-col gap-4 rounded-xl border border-white/10 bg-gray-900/40 p-5 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 group"
        >
            <div className="w-full aspect-video overflow-hidden rounded-lg relative">
                <div className="w-full h-full bg-center bg-no-repeat bg-cover transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url("${project.image}")` }}></div>
            </div>
            <div className="flex flex-col gap-2">
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                <p className="text-gray-400 text-sm">{project.description}</p>
            </div>
            <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                    <span
                        key={i}
                        className={`inline-flex items-center rounded-full bg-${project.colors[i]}-500/10 px-3 py-1 text-xs font-medium text-${project.colors[i]}-400 ring-1 ring-inset ring-${project.colors[i]}-500/20`}
                    >
                        {tag}
                    </span>
                ))}
            </div>
            <div className="mt-auto flex gap-3 pt-4">
                <a className="inline-flex h-9 flex-1 items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-primary px-4 text-sm font-medium text-white shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background-dark"
                    target='_blank'
                    href={`${project.live_link}`}>
                    Live Demo
                </a>
                <a
                    className="inline-flex h-9 flex-1 items-center justify-center gap-2 whitespace-nowrap rounded-lg border border-white/20 bg-white/5 px-4 text-sm font-medium text-white shadow-sm transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background-dark" href={`${project.gitHub_link}`}>
                    <span className="material-symbols-outlined text-base">code</span>
                    GitHub
                </a>
            </div>
        </motion.div>
    );
}
