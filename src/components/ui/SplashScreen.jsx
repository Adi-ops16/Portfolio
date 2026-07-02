"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Particles are purely decorative random values. Computed once at module load
// (outside the component) so the React Compiler never sees Math.random() during render.
const PARTICLES = [...Array(20)].map((_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    animateX: [(Math.random() - 0.5) * 200, (Math.random() - 0.5) * 50],
    animateY: [(Math.random() - 0.5) * 200, (Math.random() - 0.5) * 50],
    delay: i * 0.1,
}));

export const SplashScreen = ({ onComplete }) => {
    const [isVisible, setIsVisible] = useState(true);
    const [progress, setProgress] = useState(0);

    // Stabilise the callback so the effect below doesn't re-run when the
    // parent re-renders and passes a new function reference each time.
    const onCompleteRef = useRef(onComplete);
    useEffect(() => {
        onCompleteRef.current = onComplete;
    });

    useEffect(() => {
        // 1. Progress interval loop
        const progressInterval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(progressInterval);
                    return 100;
                }
                return prev + 2;
            });
        }, 30);

        // 3. Lifecycle timer exit
        const timer = setTimeout(() => {
            setIsVisible(false);
            if (onCompleteRef.current) onCompleteRef.current();
        }, 3000);

        return () => {
            clearTimeout(timer);
            clearInterval(progressInterval);
        };
    }, []); // onComplete accessed via ref; particles computed via useMemo — no deps needed

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, filter: "blur(10px)" }}
                    transition={{ duration: 0.5 }}
                    className="fixed inset-0 z-9999 flex flex-col items-center justify-center bg-linear-to-br from-background-dark via-[#0a0e1a] to-background-dark overflow-hidden"
                >
                    {/* Background Orbs */}
                    <motion.div
                        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl"
                    />
                    <motion.div
                        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
                        transition={{ duration: 3, delay: 0.5, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/30 rounded-full blur-3xl"
                    />

                    {/* Floating Particles (No layout shifts or dimension dependencies) */}
                    {PARTICLES.map((p) => (
                        <motion.div
                            key={p.id}
                            style={{ left: p.left, top: p.top }}
                            initial={{ x: 0, y: 0, opacity: 0 }}
                            animate={{
                                x: p.animateX,
                                y: p.animateY,
                                opacity: [0, 1, 0],
                            }}
                            transition={{
                                duration: 2,
                                delay: p.delay,
                                ease: "easeInOut",
                            }}
                            className="absolute w-1 h-1 bg-primary rounded-full"
                        />
                    ))}

                    <motion.div
                        initial={{ scale: 0.5, opacity: 0, filter: "blur(20px)" }}
                        animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="flex flex-col items-center gap-8 relative z-10"
                    >
                        {/* Logo */}
                        <div className="relative">
                            <motion.div
                                animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
                                className="absolute inset-0 rounded-full border-2 border-primary"
                            />
                            <motion.div
                                animate={{ scale: [1, 1.5], opacity: [0.3, 0] }}
                                transition={{ duration: 1.5, delay: 0.5, repeat: Infinity, ease: "easeOut" }}
                                className="absolute inset-0 rounded-full border-2 border-secondary"
                            />

                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                className="relative size-24 md:size-32"
                            >
                                <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                                    <defs>
                                        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                            <stop offset="0%" stopColor="#8A2BE2" />
                                            <stop offset="100%" stopColor="#00BFFF" />
                                        </linearGradient>
                                    </defs>
                                    <motion.path
                                        initial={{ pathLength: 0, opacity: 0 }}
                                        animate={{ pathLength: 1, opacity: 1 }}
                                        transition={{ duration: 1.5, ease: "easeInOut" }}
                                        d="M44 11.2727C44 14.0109 39.8386 16.3957 33.69 17.6364C39.8386 18.877 44 21.2618 44 24C44 26.7382 39.8386 29.123 33.69 30.3636C39.8386 31.6043 44 33.9891 44 36.7273C44 40.7439 35.0457 44 24 44C12.9543 44 4 40.7439 4 36.7273C4 33.9891 8.16144 31.6043 14.31 30.3636C8.16144 29.123 4 26.7382 4 24C4 21.2618 8.16144 18.877 14.31 17.6364C8.16144 16.3957 4 14.0109 4 11.2727C4 7.25611 12.9543 4 24 4C35.0457 4 44 7.25611 44 11.2727Z"
                                        stroke="url(#logoGradient)"
                                        strokeWidth="2"
                                        fill="url(#logoGradient)"
                                        fillOpacity="0.1"
                                    />
                                </svg>
                            </motion.div>
                        </div>

                        {/* Text Content */}
                        <div className="overflow-hidden">
                            <motion.h1
                                initial={{ y: 100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                className="text-5xl md:text-6xl font-bold tracking-wider bg-linear-to-r from-primary via-secondary to-primary bg-clip-text text-transparent"
                            >
                                Abdul Hasib
                            </motion.h1>
                        </div>

                        <motion.p
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.8, duration: 0.6 }}
                            className="text-gray-400 text-sm md:text-base tracking-widest uppercase"
                        >
                            Full Stack Developer
                        </motion.p>

                        {/* Progress bar */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1 }}
                            className="w-64 md:w-80 h-1 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm"
                        >
                            <motion.div
                                style={{ width: `${progress}%` }}
                                className="h-full bg-linear-to-r from-primary to-secondary relative"
                            >
                                <div className="absolute inset-0 bg-white/30 animate-pulse" />
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
