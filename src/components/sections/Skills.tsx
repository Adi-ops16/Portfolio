"use client";

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const skills = [
    { name: "HTML", proficiency: 90, category: "Frontend" },
    { name: "CSS", proficiency: 85, category: "Frontend" },
    { name: "Tailwind CSS", proficiency: 90, category: "Frontend" },
    { name: "JavaScript", proficiency: 85, category: "Frontend" },
    { name: "React", proficiency: 80, category: "Frontend" },
    { name: "Next.js", proficiency: 30, category: "Frontend" },
    { name: "DaisyUI", proficiency: 70, category: "Frontend" },
    { name: "Node.js", proficiency: 80, category: "Backend" },
    { name: "Express.js", proficiency: 80, category: "Backend" },
    { name: "MongoDB", proficiency: 60, category: "Backend" },
    { name: "Git", proficiency: 70, category: "Tools" },
    { name: "GitHub", proficiency: 70, category: "Tools" },
];

export function Skills() {
    const frontendSkills = skills.filter(s => s.category === "Frontend");
    const backendSkills = skills.filter(s => s.category === "Backend");
    const toolSkills = skills.filter(s => s.category === "Tools");

    return (
        <section id="skills" className="relative w-full px-4 sm:px-6 lg:px-8 py-16 md:py-24 bg-background-light dark:bg-background-dark overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 right-0 h-1/2 w-1/2 rounded-full bg-[radial-gradient(circle_at_center,_rgba(19,91,236,0.15),_transparent_40%)]"></div>
                <div className="absolute top-0 left-0 h-2/3 w-2/3 rounded-full bg-[radial-gradient(circle_at_center,_rgba(119,82,254,0.1),_transparent_40%)]"></div>
            </div>

            <div className="relative z-10 mx-auto max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">Technologies & Skills</h2>
                    <p className="mt-4 text-lg text-gray-400">My technical expertise and proficiency levels.</p>
                </motion.div>

                <div className="mt-12 md:mt-16">
                    <h3 className="text-lg font-semibold text-primary mb-6">Frontend Development</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {frontendSkills.map((skill, index) => (
                            <SkillCard key={index} skill={skill} index={index} />
                        ))}
                    </div>
                </div>

                <div className="mt-10">
                    <h3 className="text-lg font-semibold text-primary mb-6">Backend & Databases</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {backendSkills.map((skill, index) => (
                            <SkillCard key={index} skill={skill} index={index} />
                        ))}
                    </div>
                </div>

                <div className="mt-10">
                    <h3 className="text-lg font-semibold text-primary mb-6">Tools & Platforms</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {toolSkills.map((skill, index) => (
                            <SkillCard key={index} skill={skill} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function SkillCard({ skill, index }: { skill: { name: string; proficiency: number }; index: number }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20"
            style={{
                boxShadow: '0 0 20px rgba(138, 43, 226, 0.1), 0 0 40px rgba(0, 191, 255, 0.05)'
            }}
        >
            {/* Gradient glow effect */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl"></div>

            <div className="flex items-center justify-between mb-3">
                <h4 className="text-lg font-semibold text-white">{skill.name}</h4>
                <span className="text-sm font-bold text-primary">{skill.proficiency}%</span>
            </div>

            {/* Progress bar background */}
            <div className="relative h-2 bg-white/10 rounded-full overflow-hidden">
                {/* Animated progress bar */}
                <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.proficiency}%` } : { width: 0 }}
                    transition={{ duration: 1, delay: index * 0.1 + 0.3, ease: "easeOut" }}
                    className="absolute top-0 left-0 h-full rounded-full bg-gradient-to-r from-primary to-secondary"
                    style={{
                        boxShadow: '0 0 10px rgba(138, 43, 226, 0.5), 0 0 20px rgba(0, 191, 255, 0.3)'
                    }}
                />
            </div>
        </motion.div>
    );
}
