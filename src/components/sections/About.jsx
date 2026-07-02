"use client";

import { motion } from "framer-motion";
import { FaReact } from "react-icons/fa";
import { SiPostgresql } from "react-icons/si";
import Image from "next/image";

export function About() {
    return (
        <section
            id="about"
            className="relative flex mt-5 w-full min-h-screen items-center justify-center px-4 sm:px-6 md:px-8 py-16"
        >
            <div className="w-full max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-sm font-bold uppercase tracking-widest text-white/80 mb-4">
                        About Me
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left side - Image with floating icons */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative flex justify-center"
                    >
                        {/* Main image container with gradient border */}
                        <div className="relative">
                            {/* Gradient border effect */}
                            <div className="absolute inset-0 bg-linear-to-br from-primary via-secondary to-primary rounded-3xl blur-xl opacity-50"></div>

                            {/* Image */}
                            <div className="relative rounded-3xl overflow-hidden border-4 border-white/10 w-80 h-96 sm:w-96 sm:h-122">
                                <Image
                                    src="/me.jpeg"
                                    alt="Abdul Hasib - Full Stack Developer"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>

                            {/* Floating React Icon - Top Left */}
                            <motion.div
                                animate={{
                                    y: [0, -20, 0],
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="absolute -top-6 -left-6 bg-linear-to-br from-gray-900 to-gray-800 p-4 rounded-2xl border border-white/10 shadow-2xl"
                            >
                                <div className="relative">
                                    <div className="absolute inset-0 bg-cyan-500/20 blur-xl rounded-full"></div>
                                    <FaReact className="w-12 h-12 text-cyan-400 relative z-10" />
                                </div>
                                <p className="text-xs text-white mt-2 font-semibold">Expert in</p>
                                <p className="text-sm text-white font-bold">React.js</p>
                            </motion.div>

                            {/* Floating Postgresql Icon - Bottom Right */}
                            <motion.div
                                animate={{
                                    y: [0, 20, 0],
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: 1.5
                                }}
                                className="absolute -bottom-6 -right-6 bg-linear-to-br from-gray-900 to-gray-800 p-4 rounded-2xl border border-white/10 shadow-2xl"
                            >
                                <div className="relative">
                                    <div className="absolute inset-0 bg-green-500/20 blur-xl rounded-full"></div>
                                    <SiPostgresql className="w-12 h-12 text-green-500 relative z-10" />
                                </div>
                                <p className="text-xs text-white mt-2 font-semibold">Powered by</p>
                                <p className="text-sm text-white font-bold">PostgreSQL</p>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Right side - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <div>
                            <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                                Hi, I&apos;m <span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">Abdul Hasib</span>
                            </h3>
                            <p className="text-xl text-gray-400 mb-6">Full Stack Developer</p>
                        </div>

                        <p className="text-base text-gray-300 leading-relaxed">
                            I am a passionate Full Stack Developer dedicated to building efficient
                            and scalable web applications. With a strong foundation in modern web techs like Express.js, React, postgreSQL, Node.js, Prisma etc. I enjoy solving complex problems and
                            creating seamless user experiences.
                        </p>

                        <p className="text-base text-gray-300 leading-relaxed">
                            I enjoy exploring new technologies and constantly improving my skills as a developer. My focus is on writing clean, maintainable and industry standard code that ships fast without breaking.
                        </p>

                        <div className="space-y-4">
                            <h4 className="text-xl font-bold text-white">Beyond Coding</h4>
                            <p className="text-base text-gray-300 leading-relaxed">
                                Coding is a big part of my life, but I also enjoy taking breaks and getting outside. I love playing football and badminton whenever I get the chance. It&apos;s a great way to stay active, refresh my mind, and return to the desk with a different problem to solve.
                            </p>
                        </div>

                        {/* Stats or highlights */}
                        <div className="grid grid-cols-2 gap-4 pt-6">
                            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                                <h4 className="text-2xl font-bold text-primary">1+</h4>
                                <p className="text-sm text-gray-400">Years Experience</p>
                            </div>
                            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                                <h4 className="text-2xl font-bold text-secondary">10+</h4>
                                <p className="text-sm text-gray-400">Projects Completed</p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <hr className="mt-16 border-white/10 w-full" />
            </div>
        </section>
    );
}
