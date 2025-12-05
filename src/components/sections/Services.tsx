"use client";

import { motion } from 'framer-motion';
import { FaCode, FaServer, FaGlobe } from 'react-icons/fa';

const services = [
    {
        icon: FaGlobe,
        title: "Full Stack Development",
        description: "End-to-end web applications using the MERN stack and modern development practices tailored for scalability and performance.",
        features: [
            "React / Next.js Frontend",
            "Node.js / Express Backend",
            "Database Architecture",
            "REST & GraphQL APIs"
        ],
        color: "from-blue-500 to-cyan-500"
    },
    {
        icon: FaCode,
        title: "Frontend Development",
        description: "Pixel-perfect, responsive, and modern user interfaces built with the latest frameworks and UI libraries.",
        features: [
            "React / Next.js",
            "TypeScript",
            "Tailwind CSS",
            "State Management (Redux, Zustand)"
        ],
        color: "from-purple-500 to-pink-500"
    },
    {
        icon: FaServer,
        title: "Backend Development",
        description: "Secure, scalable, and high-performance server-side applications with proper database integration.",
        features: [
            "Node.js / Express",
            "PostgreSQL & MongoDB",
            "Authentication & Authorization",
            "RESTful & GraphQL APIs"
        ],
        color: "from-green-500 to-emerald-500"
    }
];

export function Services() {
    return (
        <section id="services" className="relative w-full px-4 sm:px-6 lg:px-8 py-16 md:py-24 bg-background-dark overflow-hidden">
            {/* Background gradient effects */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 mx-auto max-w-7xl">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <span className="inline-block px-4 py-2 mb-4 text-sm font-semibold text-primary bg-primary/10 rounded-full border border-primary/20">
                        What I Offer
                    </span>
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                        Services & Expertise
                    </h2>
                    <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
                        Comprehensive web development services to bring your ideas to life with modern technologies
                    </p>
                </motion.div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <ServiceCard key={index} service={service} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function ServiceCard({ service, index }: { service: any; index: number }) {
    const Icon = service.icon;

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative rounded-2xl border border-white/10 bg-gray-900/40 backdrop-blur-sm p-8 transition-all duration-300 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10"
        >
            {/* Gradient glow on hover */}
            <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 -z-10 blur-xl`}></div>

            {/* Icon */}
            <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${service.color} mb-6`}>
                <Icon className="w-8 h-8 text-white" />
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>

            {/* Description */}
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                {service.description}
            </p>

            {/* Features List */}
            <ul className="space-y-3">
                {service.features.map((feature: string, i: number) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                        <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>{feature}</span>
                    </li>
                ))}
            </ul>

            {/* Learn More Link */}
            <div className="mt-6 pt-6 border-t border-white/10">
                <a href="#contact" className={`inline-flex items-center gap-2 text-sm font-semibold bg-gradient-to-r ${service.color} bg-clip-text text-transparent hover:gap-3 transition-all`}>
                    Learn More
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </a>
            </div>
        </motion.div>
    );
}
