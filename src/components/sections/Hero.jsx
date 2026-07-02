"use client";

import React from 'react';
import { Button } from '@/components/ui/Button';
import { motion } from 'framer-motion';

export function Hero() {
    return (
        <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden py-24 lg:py-0">
            <div className="absolute inset-0 z-10 bg-linear-to-b from-black/60 via-background-dark/50 to-background-dark"></div>

            <div className="relative z-20 flex flex-col lg:flex-row items-center justify-between gap-16 w-full max-w-6xl px-6 md:px-10">
                {/* Left Column: Animation (Glassmorphic Code Editor & Morphing Glow) */}
                <div className="w-full lg:w-1/2 flex items-center justify-center relative min-h-80 md:min-h-[360px] order-1">
                    {/* Morphing glow backdrop */}
                    <motion.div
                        animate={{
                            borderRadius: [
                                "42% 58% 70% 30% / 45% 45% 55% 55%",
                                "70% 30% 52% 48% / 60% 40% 60% 40%",
                                "42% 58% 70% 30% / 45% 45% 55% 55%"
                            ],
                            rotate: [0, 180, 360],
                        }}
                        transition={{
                            duration: 15,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                        className="absolute w-72 h-72 md:w-80 md:h-80 bg-linear-to-tr from-primary/30 to-secondary/30 blur-3xl z-0"
                    />

                    {/* Floating Terminal Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                        whileHover={{ y: -8, transition: { duration: 0.3 } }}
                        className="relative z-10 w-full max-w-[420px] rounded-2xl bg-background-dark/80 border border-white/10 backdrop-blur-xl p-5 md:p-6 shadow-2xl select-none font-mono text-xs md:text-sm"
                    >
                        {/* Editor window buttons */}
                        <div className="flex items-center gap-1.5 pb-4 border-b border-white/5 mb-4">
                            <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                            <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                            <span className="text-[10px] text-gray-500 pl-2">developer.config.ts</span>
                        </div>

                        {/* Config Code content */}
                        <div className="space-y-2 text-gray-300 leading-relaxed">
                            <div>
                                <span className="text-pink-500 font-semibold">const</span> developer : Developer = &#123;
                            </div>
                            <div className="pl-4">
                                name: <span className="text-green-400">&quot;Hasib&quot;</span>,
                            </div>
                            <div className="pl-4">
                                role: <span className="text-green-400">&quot;Full Stack Developer&quot;</span>,
                            </div>
                            <div className="pl-4">
                                skills: [
                                <span className="text-secondary">&quot;React&quot;</span>,
                                <span className="text-primary font-semibold">&quot;Node&quot;</span>,
                                <span className="text-secondary">&quot;Express&quot;</span>,
                                <span className="text-primary font-semibold">&quot;PostgreSQL&quot;</span>
                                ],
                            </div>
                            <div className="pl-4">
                                passion: <span className="text-green-400">&quot;Building premium web apps&quot;</span>
                            </div>
                            <div>&#125;;</div>
                        </div>
                    </motion.div>
                </div>

                {/* Right Column: Text & Actions */}
                <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left gap-6 order-2">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.15] tracking-tight drop-shadow-2xl font-display"
                    >
                        Hi, I&apos;m{" "}
                        <span className="bg-linear-to-r from-primary via-secondary to-primary bg-clip-text text-transparent inline-block animate-gradient">
                            Hasib
                        </span>
                        <br />
                        <span className="text-3xl md:text-4xl lg:text-5xl text-gray-100 font-extrabold block mt-2">
                            A Full Stack Developer
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="max-w-xl text-base md:text-lg text-gray-300 font-light leading-relaxed"
                    >
                        I transform ideas into reality using modern, <strong className="text-white font-medium">Frontend</strong>  and  <strong className="text-white font-medium">Backend</strong> technologies with scalability and reliability.
                    </motion.p>

                    {/* Tech Badges */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                        className="flex items-center justify-center lg:justify-start gap-2.5 flex-wrap w-full"
                    >
                        {["React.js", "Typescript", "Node.js", "Express.js", "PostgreSQL", "Prisma", "MongoDB", "Next.js", "Tailwind CSS", "Framer Motion"].map((tech, idx) => (
                            <div
                                key={idx}
                                className="px-3.5 py-1 text-xs font-semibold rounded-full bg-background-dark/60 border border-white/5 backdrop-blur-sm text-gray-300 hover:text-white hover:border-primary/45 transition-colors cursor-default"
                            >
                                {tech}
                            </div>
                        ))}
                    </motion.div>

                    {/* Call To Actions */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mt-2 w-full"
                    >
                        <Button glow onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
                            View My Work
                        </Button>
                        <a
                            href="/resume.pdf"
                            download
                            className="group px-7 py-4 text-sm font-bold text-white transition-all duration-300 border border-white/20 hover:border-white/50 rounded-full hover:bg-white/5 hover:scale-105 backdrop-blur-sm flex items-center gap-2 active:scale-95"
                        >
                            <svg className="w-4 h-4 text-gray-300 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            Download Resume
                        </a>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
