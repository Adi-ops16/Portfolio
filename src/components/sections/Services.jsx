"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import services from '../../data/ServicesData';

export function Services() {
    return (
        <section id="services" className="relative w-full px-4 sm:px-6 lg:px-8 py-10 lg:py-14 overflow-hidden">
            {/* Static background glow */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-60" />
                <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl opacity-60" />
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

                {/* Services Card Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
                    {services.map((service, index) => (
                        <ServiceCard key={service.slug} service={service} index={index} />
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
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            viewport={{ once: true }}
        >
            <Link
                href={`/services?category=${service.slug}`}
                className="group relative flex flex-col justify-between rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm p-6 md:p-7 h-full transition-all duration-300 hover:border-white/15 hover:bg-white/[0.04] hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-primary/5"
            >
                {/* Gradient glow on hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden pointer-events-none">
                    <div className={`absolute inset-[-1px] bg-gradient-to-br ${service.color} opacity-[0.08] rounded-2xl`} />
                </div>

                <div className="relative z-10">
                    {/* Icon */}
                    <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${service.color} mb-5 shadow-lg shadow-black/20 opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300`}>
                        <Icon className="w-5 h-5 text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-white mb-2.5 font-display leading-snug">
                        {service.title}
                    </h3>

                    {/* Short Description */}
                    <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                        {service.shortDesc}
                    </p>
                </div>

                {/* Arrow Link */}
                <div className="relative z-10 mt-6 pt-4 border-t border-white/[0.06] group-hover:border-white/10 transition-colors flex items-center justify-between">
                    <span className={`text-sm font-semibold bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>
                        Learn More
                    </span>
                    <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300`}>
                        <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}
