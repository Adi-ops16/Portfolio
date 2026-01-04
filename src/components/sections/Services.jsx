"use client";

import { motion } from 'framer-motion';
import { FaCode, FaServer, FaGlobe } from 'react-icons/fa';

const services = [
    {
        icon: FaCode,
        number: "01",
        title: "Frontend Development",
        description: "Crafting pixel-perfect, accessible interfaces with React and Next.js. Every interaction matters, every detail counts.",
        features: [
            "React / Next.js Mastery",
            "Modern JavaScript (ES6+)",
            "Tailwind CSS & Styling",
            "Framer Motion Animations"
        ],
        color: "from-purple-500 via-pink-500 to-purple-600"
    },
    {
        icon: FaServer,
        number: "02",
        title: "Backend Development",
        description: "Building robust, scalable APIs and server architecture. Security and performance are not optional— they're foundational.",
        features: [
            "Node.js / Express.js",
            "MongoDB & Database Design",
            "JWT Authentication",
            "RESTful API Development"
        ],
        color: "from-green-500 via-emerald-500 to-teal-600"
    },
    {
        icon: FaGlobe,
        number: "03",
        title: "Full Stack Development",
        description: "End-to-end solutions from database to deployment. Complete digital experiences that scale with your vision and grow with your needs.",
        features: [
            "MERN Stack Expertise",
            "Full-Cycle Development",
            "Cloud Deployment (Vercel, Netlify)",
            "Performance Optimization"
        ],
        color: "from-blue-500 via-cyan-500 to-blue-600"
    }
];

export function Services() {
    return (
        <section id="services" className="relative w-full px-4 sm:px-6 lg:px-8 py-20 lg:py-32 overflow-hidden">
            {/* Enhanced background effects */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
            </div>

            <div className="relative z-10 mx-auto max-w-7xl">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <motion.span
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="inline-block px-6 py-2 mb-6 text-sm font-semibold text-primary bg-primary/10 rounded-full border border-primary/30 backdrop-blur-sm"
                    >
                        What I Offer
                    </motion.span>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight font-display">
                        Services & <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Expertise</span>
                    </h2>
                    <p className="mt-6 text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        Comprehensive web development services to bring your ideas to life with modern technologies and best practices
                    </p>
                </motion.div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
                    {services.map((service, index) => (
                        <ServiceCard key={index} service={service} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function ServiceCard({ service, index }) {
    const Icon = service.icon;

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            viewport={{ once: true }}
            whileHover={{
                y: -8,
                transition: { duration: 0.3 }
            }}
            className="group relative rounded-3xl border border-white/10 bg-gradient-to-br from-gray-900/50 to-gray-900/30 backdrop-blur-xl p-8 transition-all duration-500 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/10 hover:bg-gradient-to-br hover:from-gray-900/70 hover:to-gray-900/50"
        >
            {/* Subtle animated gradient border (visible on hover) */}
            <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 overflow-hidden pointer-events-none">
                <div className={`absolute inset-[-1px] bg-gradient-to-r ${service.color} opacity-20 rounded-3xl blur-sm`} />
            </div>

            {/* Card content */}
            <div className="relative z-10">
                {/* Number badge */}
                <div className="absolute -top-4 -right-4 w-14 h-14 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 border border-white/10 flex items-center justify-center backdrop-blur-sm group-hover:border-white/20 transition-colors">
                    <span className={`text-xl font-bold bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>
                        {service.number}
                    </span>
                </div>

                {/* Icon with gradient background */}
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${service.color} mb-6 shadow-lg opacity-90 group-hover:opacity-100`}
                >
                    <Icon className="w-8 h-8 text-white" />
                </motion.div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-4 font-display leading-tight group-hover:text-white transition-colors">
                    {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-base mb-6 leading-relaxed group-hover:text-gray-300 transition-colors">
                    {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-3 mb-6">
                    {service.features.map((feature, i) => (
                        <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.15 + i * 0.1 }}
                            viewport={{ once: true }}
                            className="flex items-start gap-3 text-sm text-gray-300 group-hover:text-gray-200"
                        >
                            <div className={`w-5 h-5 flex-shrink-0 mt-0.5 rounded-full bg-gradient-to-r ${service.color} p-0.5 opacity-80 group-hover:opacity-100`}>
                                <svg className="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <span className="leading-relaxed">{feature}</span>
                        </motion.li>
                    ))}
                </ul>

                {/* Hover indicator */}
                <div className="pt-6 border-t border-white/10 group-hover:border-white/20 transition-colors">
                    <a
                        href="#contact"
                        className={`inline-flex items-center gap-2 text-sm font-semibold bg-gradient-to-r ${service.color} bg-clip-text text-transparent group-hover:gap-3 transition-all duration-300`}
                    >
                        Let's Talk
                        <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </div>
            </div>
        </motion.div>
    );
}

// Add this to globals.css for the spin animation
// @keyframes spin-slow {
//   from { transform: rotate(0deg); }
//   to { transform: rotate(360deg); }
// }
