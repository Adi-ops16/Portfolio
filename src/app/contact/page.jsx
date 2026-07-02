"use client";

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { FaXTwitter } from 'react-icons/fa6';
import { useState, useRef } from 'react';

function ContactPage() {
    const formRef = useRef(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState('idle');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');

        const formData = new FormData(formRef.current);
        const data = {
            user_name: formData.get('user_name'),
            user_email: formData.get('user_email'),
            subject: formData.get('subject'),
            message: formData.get('message'),
        };

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            if (!res.ok) throw new Error('Failed to send');

            setSubmitStatus('success');
            formRef.current?.reset();
            setTimeout(() => setSubmitStatus('idle'), 5000);
        } catch {
            setSubmitStatus('error');
            setTimeout(() => setSubmitStatus('idle'), 5000);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="relative min-h-screen pt-28 pb-16 px-4 sm:px-6 lg:px-8 bg-background-dark overflow-hidden">
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background-dark to-secondary/10"></div>
                <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-3xl opacity-60"></div>
                <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-secondary/20 rounded-full blur-3xl opacity-60"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-14"
                >
                    <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                        Let&apos;s <span className="text-primary">Work</span> Together
                    </h1>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                        Have a project, a question, or just want to connect? Drop me a message and I&apos;ll get back
                        to you as soon as possible.
                    </p>
                    <div className="flex justify-center gap-2 mt-6">
                        <span className="h-1 w-12 rounded-full bg-primary"></span>
                        <span className="h-1 w-4 rounded-full bg-secondary"></span>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        className="lg:col-span-3"
                    >
                        <div className="bg-gray-900/40 backdrop-blur-xl p-8 sm:p-10 rounded-2xl shadow-2xl border border-white/10">
                            <h2 className="text-2xl font-semibold text-white mb-8">Send a Message</h2>
                            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-300 mb-2" htmlFor="contact_name">
                                            Your Name <span className="text-primary">*</span>
                                        </label>
                                        <input
                                            autoComplete="name"
                                            className="flex w-full rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-primary/60 focus:border-primary/60 border border-[#3b4354] bg-[#1c1f27] h-12 placeholder:text-[#6b7280] px-4 text-base transition-all duration-300"
                                            id="contact_name"
                                            name="user_name"
                                            placeholder="John Doe"
                                            type="text"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-300 mb-2" htmlFor="contact_email">
                                            Your Email <span className="text-primary">*</span>
                                        </label>
                                        <input
                                            autoComplete="email"
                                            className="flex w-full rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-primary/60 focus:border-primary/60 border border-[#3b4354] bg-[#1c1f27] h-12 placeholder:text-[#6b7280] px-4 text-base transition-all duration-300"
                                            id="contact_email"
                                            name="user_email"
                                            placeholder="john@example.com"
                                            type="email"
                                            required
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2" htmlFor="contact_subject">
                                        Subject <span className="text-primary">*</span>
                                    </label>
                                    <input
                                        className="flex w-full rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-primary/60 focus:border-primary/60 border border-[#3b4354] bg-[#1c1f27] h-12 placeholder:text-[#6b7280] px-4 text-base transition-all duration-300"
                                        id="contact_subject"
                                        name="subject"
                                        placeholder="Project Collaboration"
                                        type="text"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2" htmlFor="contact_message">
                                        Message <span className="text-primary">*</span>
                                    </label>
                                    <textarea
                                        className="flex w-full min-h-[140px] rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-primary/60 focus:border-primary/60 border border-[#3b4354] bg-[#1c1f27] placeholder:text-[#6b7280] p-4 text-base transition-all duration-300 resize-y"
                                        id="contact_message"
                                        name="message"
                                        placeholder="Tell me about your project, idea, or just say hello..."
                                        rows={5}
                                        required
                                    ></textarea>
                                </div>

                                {submitStatus === 'success' && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="p-4 bg-green-500/10 border border-green-500/20 rounded-xl"
                                    >
                                        <p className="text-green-400 text-sm flex items-center gap-2">
                                            <span className="text-lg">✓</span> Message sent successfully! I&apos;ll get back to you soon.
                                        </p>
                                    </motion.div>
                                )}
                                {submitStatus === 'error' && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl"
                                    >
                                        <p className="text-red-400 text-sm flex items-center gap-2">
                                            <span className="text-lg">✗</span> Failed to send message. Please try again or email me directly.
                                        </p>
                                    </motion.div>
                                )}

                                <Button
                                    type="submit"
                                    className="w-full h-12 text-base"
                                    glow
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? (
                                        <span className="flex items-center justify-center gap-2">
                                            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                                            </svg>
                                            Sending...
                                        </span>
                                    ) : (
                                        'Send Message'
                                    )}
                                </Button>
                            </form>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="lg:col-span-2 flex flex-col gap-6"
                    >
                        <div className="bg-gray-900/40 backdrop-blur-xl p-8 rounded-2xl border border-white/10">
                            <h3 className="text-lg font-semibold text-white mb-5">Contact Info</h3>
                            <div className="space-y-5">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                                        <span className="material-symbols-outlined text-primary text-xl">mail</span>
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 uppercase tracking-wider">Email</p>
                                        <a className="text-gray-300 hover:text-white transition-colors text-sm" href="mailto:hasibadi22@gmail.com">hasibadi22@gmail.com</a>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center shrink-0">
                                        <span className="material-symbols-outlined text-secondary text-xl">call</span>
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 uppercase tracking-wider">Phone</p>
                                        <a className="text-gray-300 hover:text-white transition-colors text-sm" href="tel:+8801918389189">+880 1918-389-189</a>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                                        <span className="material-symbols-outlined text-primary text-xl">chat</span>
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 uppercase tracking-wider">WhatsApp</p>
                                        <a className="text-gray-300 hover:text-white transition-colors text-sm" href="https://wa.me/8801918389189" target="_blank" rel="noopener noreferrer">+880 1918-389-189</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-900/40 backdrop-blur-xl p-8 rounded-2xl border border-white/10">
                            <h3 className="text-lg font-semibold text-white mb-5">Connect</h3>
                            <div className="flex gap-4">
                                <a className="w-11 h-11 rounded-xl bg-gray-800/80 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                                    target="_blank"
                                    rel="noreferrer"
                                    href="https://github.com/Adi-ops16"
                                    aria-label="GitHub"
                                >
                                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.168 6.839 9.49.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.03-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.338 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z" fillRule="evenodd"></path>
                                    </svg>
                                </a>
                                <a className="w-11 h-11 rounded-xl bg-gray-800/80 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                                    target="_blank"
                                    href="#"
                                    rel="noopener noreferrer"
                                    aria-label="LinkedIn"
                                >
                                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                                    </svg>
                                </a>
                                <a className="w-11 h-11 rounded-xl bg-gray-800/80 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                                    target="_blank"
                                    rel="noreferrer"
                                    href="https://x.com/AbdulHasib95581"
                                    aria-label="Twitter"
                                >
                                    <FaXTwitter size={18} />
                                </a>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-primary/10 to-secondary/10 backdrop-blur-xl p-8 rounded-2xl border border-white/10">
                            <h3 className="text-lg font-semibold text-white mb-2">Availability</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                I&apos;m currently open to freelance projects and full-time opportunities. 
                                Typical response time: within 24 hours.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

export default ContactPage;
