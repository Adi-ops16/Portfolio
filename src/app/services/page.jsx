"use client";

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import services from '@/data/ServicesData';

function ServicesContent() {
    const searchParams = useSearchParams();
    const categoryParam = searchParams.get('category');

    const [activeSlug, setActiveSlug] = useState(services[0].slug);

    useEffect(() => {
        if (categoryParam && services.find(s => s.slug === categoryParam)) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setActiveSlug(categoryParam);
        }
    }, [categoryParam]);

    const activeService = services.find(s => s.slug === activeSlug);
    const ActiveIcon = activeService?.icon;

    return (
        <div className="min-h-screen bg-background-dark text-white">

            {/* Background glow */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-20 left-1/4 w-80 h-80 bg-primary/15 rounded-full blur-3xl" />
                <div className="absolute top-40 right-1/4 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
            </div>

            {/* Hero Header */}
            <div className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
                <div className="relative z-10 max-w-5xl mx-auto text-center">

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight font-display"
                    >
                        My <span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">Services</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto"
                    >
                        Select a category below to explore the full scope of what I offer.
                    </motion.p>
                </div>
            </div>

            {/* Category Selector Tabs */}
            <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-6">
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex flex-wrap justify-center gap-2.5"
                >
                    {services.map((service) => {
                        const Icon = service.icon;
                        const isActive = activeSlug === service.slug;
                        return (
                            <button
                                key={service.slug}
                                onClick={() => setActiveSlug(service.slug)}
                                className={`relative flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer border ${isActive
                                    ? 'bg-primary/15 border-primary/40 text-white shadow-lg shadow-primary/10'
                                    : 'bg-white/3 border-white/6 text-gray-400 hover:text-white hover:bg-white/6 hover:border-white/10'
                                    }`}
                            >
                                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-primary' : ''}`} />
                                <span className="hidden sm:inline">{service.title}</span>
                                <span className="sm:hidden">{service.title.split(' ')[0]}</span>
                            </button>
                        );
                    })}
                </motion.div>
            </div>

            {/* Service Detail Content */}
            <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 pt-6">
                <AnimatePresence mode="wait">
                    {activeService && (
                        <motion.div
                            key={activeService.slug}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.35 }}
                            className="rounded-3xl border border-white/6 bg-white/2 backdrop-blur-sm overflow-hidden"
                        >
                            {/* Top gradient accent bar */}
                            <div className={`h-1 bg-linear-to-r ${activeService.color}`} />

                            <div className="p-6 sm:p-8 lg:p-10">
                                {/* Service Header */}
                                <div className="flex flex-col sm:flex-row items-start gap-5 mb-8">
                                    <div className={`inline-flex p-4 rounded-2xl bg-linear-to-br ${activeService.color} shadow-lg shadow-black/20 shrink-0`}>
                                        <ActiveIcon className="w-7 h-7 text-white" />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl sm:text-3xl font-bold font-display text-white mb-2">
                                            {activeService.title}
                                        </h2>
                                        <p className="text-gray-400 text-base leading-relaxed max-w-2xl">
                                            {activeService.longDesc}
                                        </p>
                                    </div>
                                </div>

                                {/* Two Column: Features + Tech Stack */}
                                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                                    {/* Features */}
                                    <div className="lg:col-span-3">
                                        <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-4">
                                            What&apos;s Included
                                        </h3>
                                        <ul className="space-y-3">
                                            {activeService.features.map((feature, i) => (
                                                <motion.li
                                                    key={i}
                                                    initial={{ opacity: 0, x: -10 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ duration: 0.3, delay: i * 0.05 }}
                                                    className="flex items-start gap-3 text-gray-300"
                                                >
                                                    <div className={`w-5 h-5 shrink-0 mt-0.5 rounded-full bg-linear-to-r ${activeService.color} p-[3px]`}>
                                                        <svg className="w-full h-full text-white" fill="currentColor" viewBox="0 0 20 20">
                                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                        </svg>
                                                    </div>
                                                    <span className="text-sm leading-relaxed">{feature}</span>
                                                </motion.li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Tech Stack */}
                                    <div className="lg:col-span-2">
                                        <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-4">
                                            Tech Stack
                                        </h3>
                                        <div className="flex flex-wrap gap-2.5">
                                            {activeService.techStack.map((tech, i) => (
                                                <motion.span
                                                    key={i}
                                                    initial={{ opacity: 0, scale: 0.9 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    transition={{ duration: 0.25, delay: i * 0.04 }}
                                                    className="px-3.5 py-1.5 text-xs font-semibold rounded-full bg-background-dark/60 border border-white/6 text-gray-300"
                                                >
                                                    {tech}
                                                </motion.span>
                                            ))}
                                        </div>

                                        {/* CTA */}
                                        <div className="mt-8 pt-6 border-t border-white/6">
                                            <Link
                                                href="/contact"
                                                className={`inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-linear-to-r ${activeService.color} text-white text-sm font-bold shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300`}
                                            >
                                                Discuss This Service
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}

export default function ServicesPage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen bg-background-dark flex items-center justify-center">
                <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
            </div>
        }>
            <ServicesContent />
        </Suspense>
    );
}
