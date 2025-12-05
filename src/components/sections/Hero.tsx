"use client";
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
                    alt="Dark, moody clouds with hints of purple and blue light."
                    fill
                    className="object-cover"
                    priority
                />
            </div>
            <div className="absolute inset-0 z-10 bg-black/40"></div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative z-20 flex max-w-4xl flex-col items-center gap-8 p-8 text-center text-white"
            >
                <h1 className="text-6xl font-bold leading-tight tracking-tighter md:text-8xl">
                    Hi, I'm <span className="text-primary">Abdul Hasib</span>.
                    <br />A MERN Stack Developer.
                </h1>
                <p className="max-w-2xl text-lg text-gray-300 md:text-xl">
                    I specialize in building exceptional digital experiences.
                    Currently, I'm focused on building accessible, human-centered products.
                </p>
                <Button glow onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
                    View My Work
                </Button>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1, repeat: Infinity, repeatType: "reverse" }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
            >
                <a href="#about" className="flex flex-col items-center gap-2 text-white/80 hover:text-white transition-colors">
                    <span className="text-sm font-medium">Scroll Down</span>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </a>
            </motion.div>
        </div>
    );
}
