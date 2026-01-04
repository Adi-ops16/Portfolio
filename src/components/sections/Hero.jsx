"use client";

import { Button } from '@/components/ui/Button';
import { motion } from 'framer-motion';
import Image from 'next/image';

export function Hero() {
    return (
        <div className="relative flex h-screen w-full items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0">
                <Image
                    src="/bg.jpg"
                    alt="Atmospheric background with deep purple and blue tones"
                    fill
                    className="object-cover"
                    priority
                />
            </div>
            <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/50 via-black/40 to-background-dark"></div>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-20 flex max-w-6xl flex-col items-center gap-10 p-8 text-center text-white"
            >
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="text-7xl md:text-8xl lg:text-9xl font-bold leading-[1.1] tracking-tight drop-shadow-2xl"
                >
                    Hi, I'm{" "}
                    <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent inline-block animate-gradient">
                        Hasib
                    </span>
                    <br />
                    <span className="text-5xl md:text-6xl lg:text-7xl">
                        A MERN Stack Developer
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    className="max-w-3xl text-xl md:text-2xl text-gray-300 font-light leading-relaxed"
                >
                    I transform ideas into reality using <strong className="text-white font-medium">React</strong>, <strong className="text-white font-medium">Node.js</strong>, <strong className="text-white font-medium">MongoDB</strong>, and <strong className="text-white font-medium">Express</strong>. Building scalable, beautiful web applications is not just my profession—it's my passion.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.9 }}
                    className="flex flex-wrap items-center justify-center gap-5"
                >
                    <Button glow onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
                        View My Work
                    </Button>
                    <a
                        href="/resume.pdf"
                        download
                        className="group px-8 py-4 text-base font-bold text-white transition-all duration-300 border-2 border-white/30 rounded-full hover:bg-white/10 hover:border-white hover:scale-105 backdrop-blur-sm flex items-center gap-2"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        Download Resume
                    </a>
                </motion.div>
            </motion.div>
        </div>
    );
}
