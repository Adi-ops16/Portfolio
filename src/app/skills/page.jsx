"use client"
import { useState, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skillCategories, skills } from '@/data/skillsData';
function SkillsContent() {

    const [activeCategory, setActiveCategory] = useState(skillCategories[0].id);
    const activeSkills = skills.filter(s => s.category === activeCategory);
    const activeCategoryData = skillCategories.find(c => c.id === activeCategory);

    return (
        <div className="min-h-screen bg-background-dark text-white">
            {/* Background glow */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-20 left-1/4 w-80 h-80 bg-primary/15 rounded-full blur-3xl" />
                <div className="absolute top-40 right-1/4 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-50" />
            </div>
            {/* Page Title */}
            <div className="relative pt-32 pb-10 px-4 sm:px-6 lg:px-8 overflow-hidden">
                <div className="relative z-10 max-w-6xl mx-auto text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight font-display"
                    >
                        My <span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">Skills</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto"
                    >
                        Technologies and tools I use to build modern, scalable web applications.
                    </motion.p>
                </div>
            </div>
            {/* Mobile: horizontal scrollable category nav */}
            <div className="relative z-10 md:hidden px-4 pb-6">
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex gap-2.5 overflow-x-auto pb-2 scrollbar-hide snap-x snap-mandatory"
                    style={{ WebkitOverflowScrolling: 'touch' }}
                >
                    {skillCategories.map((category) => {
                        const Icon = category.icon;
                        const isActive = activeCategory === category.id;
                        return (
                            <button
                                key={category.id}
                                onClick={() => setActiveCategory(category.id)}
                                className={`relative shrink-0 snap-start flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer border ${isActive
                                    ? 'bg-primary/15 border-primary/40 text-white shadow-lg shadow-primary/10'
                                    : 'bg-white/3 border-white/6 text-gray-400 hover:text-white hover:bg-white/6 hover:border-white/10'
                                    }`}
                            >
                                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-primary' : ''}`} />
                                {category.label}
                            </button>
                        );
                    })}
                </motion.div>
            </div>
            {/* Main Content: sidebar + skills grid */}
            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
                <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
                    <motion.aside
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="hidden md:block md:w-52 lg:w-60 shrink-0"
                    >
                        <nav className="sticky top-28 space-y-4">
                            <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-6 px-3">
                                Categories
                            </p>
                            {skillCategories.map((category) => {
                                const Icon = category.icon;
                                const isActive = activeCategory === category.id;
                                const count = skills.filter(s => s.category === category.id).length;
                                return (
                                    <button
                                        key={category.id}
                                        onClick={() => setActiveCategory(category.id)}
                                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-300 cursor-pointer border text-left ${isActive
                                            ? 'bg-primary/15 border-primary/40 text-white shadow-lg shadow-primary/10'
                                            : 'bg-white/2 border-white/4 text-gray-400 hover:text-white hover:bg-white/5 hover:border-white/10'
                                            }`}
                                    >
                                        <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-primary' : ''}`} />
                                        <span className="flex-1">{category.label}</span>
                                        <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${isActive
                                            ? 'bg-primary/20 text-primary'
                                            : 'bg-white/4 text-gray-500'
                                            }`}>
                                            {count}
                                        </span>
                                    </button>
                                );
                            })}
                        </nav>
                    </motion.aside>
                    <div className="flex-1 min-w-0">
                        {/* Category heading (desktop) */}
                        <motion.div
                            key={activeCategory + '-heading'}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                            className="hidden md:flex items-center gap-3 mb-6"
                        >
                            {activeCategoryData && (
                                <>
                                    <div className="inline-flex p-2.5 rounded-xl bg-linear-to-br from-primary/20 to-secondary/20 border border-white/6">
                                        <activeCategoryData.icon className="w-5 h-5 text-primary" />
                                    </div>
                                    <div>
                                        <h2 className="text-xl font-bold font-display text-white">
                                            {activeCategoryData.label}
                                        </h2>
                                        <p className="text-sm text-gray-500">
                                            {activeSkills.length} {activeSkills.length === 1 ? 'skill' : 'skills'}
                                        </p>
                                    </div>
                                </>
                            )}
                        </motion.div>
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeCategory}
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.35 }}
                            >
                                {/* Desktop: card grid with logo + name */}
                                <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-4">
                                    {activeSkills.map((skill, index) => {
                                        const Icon = skill.icon;
                                        return (
                                            <motion.div
                                                key={skill.name}
                                                initial={{ opacity: 0, scale: 0.95 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ duration: 0.3, delay: index * 0.05 }}
                                                className="group flex flex-col items-center justify-center gap-4 p-6 rounded-2xl border border-white/6 bg-white/2 backdrop-blur-sm hover:bg-white/4 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 cursor-default"
                                            >
                                                <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-background-dark/60 border border-white/6 text-gray-400 group-hover:text-primary group-hover:border-primary/20 transition-colors duration-300">
                                                    <Icon size={28} />
                                                </div>
                                                <span className="text-sm font-semibold text-white text-center">{skill.name}</span>
                                            </motion.div>
                                        );
                                    })}
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default function SkillsPage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen bg-background-dark flex items-center justify-center">
                <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
            </div>
        }>
            <SkillsContent />
        </Suspense>
    );
}