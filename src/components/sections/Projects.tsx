"use client";

import { motion } from 'framer-motion';

const projects = [
    {
        title: "Krishi-Link",
        description: "A full-featured crops marketplace to connect Cultivators and customers directly",
        image: "https://i.ibb.co.com/qM7Y8z08/Screenshot-2025-12-05-174452.png",
        tags: ["React", "Node.js", "MongoDB"],
        gitHub_link: 'https://github.com/Adi-ops16/Krishi-Link-client',
        live_link: 'https://assignment-10-46c35.web.app/',
        colors: ["blue", "green", "gray"]
    },
    {
        title: "Toy-verse",
        description: "An online toy shop to promote local Toy-shops",
        image: "https://i.ibb.co.com/N2DpqZys/Screenshot-2025-12-05-180706.png",
        gitHub_link: 'https://github.com/Adi-ops16/toy-verse',
        live_link: 'https://my-toy-store-59c1e.web.app/',
        tags: ["React.js", "Firebase", "Tailwind CSS"],
        colors: ["green", "yellow", "sky"]
    },
    {
        title: "Dragon News",
        description: "A Local news portal created with modern javascript and react to ensure authenticated news distribution",
        image: "https://i.ibb.co.com/7xNPkqF6/Screenshot-2025-12-05-181358.png",
        gitHub_link: 'https://github.com/Adi-ops16/Dragon-news',
        live_link: 'https://dragon---news-25.web.app/category/0',
        tags: ["React.js", "Firebase"],
        colors: ["gray", "orange", "purple"]
    }
];

export function Projects() {
    return (
        <section id="projects" className="w-full py-20 lg:py-24 bg-background-dark">
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
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

interface Project {
    title: string;
    description: string;
    image: string;
    gitHub_link: string;
    live_link: string;
    tags: string[];
    colors: string[];
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="flex flex-col gap-4 rounded-xl border border-white/10 bg-gray-900/40 p-5 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10"
        >
            <div className="w-full aspect-video overflow-hidden rounded-lg">
                <div
                    className="w-full h-full bg-center bg-no-repeat bg-cover transition-transform duration-300 hover:scale-105"
                    style={{ backgroundImage: `url("${project.image}")` }}
                ></div>
            </div>
            <div className="flex flex-col gap-2">
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                <p className="text-gray-400 text-sm">{project.description}</p>
            </div>
            <div className="flex flex-wrap gap-2">
                {project.tags.map((tag: string, i: number) => (
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
