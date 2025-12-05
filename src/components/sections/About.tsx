"use client";

import { motion } from "framer-motion";
import { FaReact } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import Image from "next/image";

export function About() {
    return (
        <section
            id="about"
            className="relative flex mt-5 w-full min-h-screen items-center justify-center px-4 sm:px-6 md:px-8 py-16 bg-background-light dark:bg-background-dark"
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
                            <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-primary rounded-3xl blur-xl opacity-50"></div>

                            {/* Image */}
                            <div className="relative rounded-3xl overflow-hidden border-4 border-white/10 w-80 h-96 sm:w-96 sm:h-[28rem]">
                                <Image
                                    src="/me.jpg"
                                    alt="Abdul Hasib - MERN Stack Developer"
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
                                className="absolute -top-6 -left-6 bg-gradient-to-br from-gray-900 to-gray-800 p-4 rounded-2xl border border-white/10 shadow-2xl"
                            >
                                <div className="relative">
                                    <div className="absolute inset-0 bg-cyan-500/20 blur-xl rounded-full"></div>
                                    <FaReact className="w-12 h-12 text-cyan-400 relative z-10" />
                                </div>
                                <p className="text-xs text-white mt-2 font-semibold">Expert in</p>
                                <p className="text-sm text-white font-bold">React.js</p>
                            </motion.div>

                            {/* Floating MongoDB Icon - Bottom Right */}
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
                                className="absolute -bottom-6 -right-6 bg-gradient-to-br from-gray-900 to-gray-800 p-4 rounded-2xl border border-white/10 shadow-2xl"
                            >
                                <div className="relative">
                                    <div className="absolute inset-0 bg-green-500/20 blur-xl rounded-full"></div>
                                    <SiMongodb className="w-12 h-12 text-green-500 relative z-10" />
                                </div>
                                <p className="text-xs text-white mt-2 font-semibold">Powered by</p>
                                <p className="text-sm text-white font-bold">MongoDB</p>
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
                                Hi, I&apos;m <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Abdul Hasib</span>
                            </h3>
                            <p className="text-xl text-gray-400 mb-6">MERN Stack Developer</p>
                        </div>

                        <p className="text-base text-gray-300 leading-relaxed">
                            I am a passionate MERN Stack Developer dedicated to building efficient
                            and scalable web applications. With a strong foundation in MongoDB,
                            Express.js, React, and Node.js, I enjoy solving complex problems and
                            creating seamless user experiences.
                        </p>

                        <p className="text-base text-gray-300 leading-relaxed">
                            My journey in development is driven by curiosity to learn new technologies
                            and a commitment to writing clean, maintainable code. I specialize in
                            creating modern, responsive web applications that provide exceptional
                            user experiences.
                        </p>

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
