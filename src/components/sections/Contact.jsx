"use client";

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { FaXTwitter } from 'react-icons/fa6';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

export function Contact() {
    const formRef = useRef(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState('idle');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            const result = await emailjs.sendForm(
                `${process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID}`,
                `${process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID}`,
                formRef.current,
                `${process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY}`
            );

            setSubmitStatus('success');
            formRef.current?.reset();

            // Reset success message after 5 seconds
            setTimeout(() => setSubmitStatus('idle'), 5000);
        } catch (error) {
            console.error('Email send failed:', error);
            setSubmitStatus('error');

            setTimeout(() => setSubmitStatus('idle'), 5000);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section
            id="contact"
            className="relative w-full min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-background-dark overflow-hidden"
        >
            {/* Animated gradient background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background-dark to-secondary/20"></div>
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>

            <div className="relative z-10 w-full max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center text-center mb-10"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">Get In Touch</h2>
                    <p className="mt-4 max-w-2xl text-lg leading-8 text-gray-300">
                        Have a project in mind or just want to say hello? I&apos;d love to hear from you. Fill out the
                        form below or reach out via my social channels.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="lg:col-span-3 bg-gray-900/50 backdrop-blur-xl p-8 rounded-xl shadow-2xl border border-white/10"
                    >
                        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium leading-6 text-gray-200 pb-2" htmlFor="user_name">Your Name</label>
                                    <input
                                        autoComplete="name"
                                        className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-2 focus:ring-inset focus:ring-primary border border-[#3b4354] bg-[#1c1f27] h-12 placeholder:text-[#9da6b9] p-[15px] text-base font-normal leading-normal transition-all duration-300"
                                        id="user_name"
                                        name="user_name"
                                        placeholder="Enter your name"
                                        type="text"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium leading-6 text-gray-200 pb-2" htmlFor="user_email">Your Email</label>
                                    <input
                                        autoComplete="email"
                                        className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-2 focus:ring-inset focus:ring-primary border border-[#3b4354] bg-[#1c1f27] h-12 placeholder:text-[#9da6b9] p-[15px] text-base font-normal leading-normal transition-all duration-300"
                                        id="user_email"
                                        name="user_email"
                                        placeholder="your.email@example.com"
                                        type="email"
                                        required
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium leading-6 text-gray-200 pb-2" htmlFor="subject">Subject</label>
                                <input
                                    className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-2 focus:ring-inset focus:ring-primary border border-[#3b4354] bg-[#1c1f27] h-12 placeholder:text-[#9da6b9] p-[15px] text-base font-normal leading-normal transition-all duration-300"
                                    id="subject"
                                    name="subject"
                                    placeholder="Project Inquiry"
                                    type="text"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium leading-6 text-gray-200 pb-2" htmlFor="message">Message</label>
                                <textarea
                                    className="flex w-full min-w-0 flex-1 resize-y overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-2 focus:ring-inset focus:ring-primary border border-[#3b4354] bg-[#1c1f27] placeholder:text-[#9da6b9] p-[15px] text-base font-normal leading-normal transition-all duration-300"
                                    id="message"
                                    name="message"
                                    placeholder="Tell me about your project..."
                                    rows={5}
                                    required
                                ></textarea>
                            </div>

                            {/* Status Messages */}
                            {submitStatus === 'success' && (
                                <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                                    <p className="text-green-400 text-sm">✓ Message sent successfully! I&apos;ll get back to you soon.</p>
                                </div>
                            )}
                            {submitStatus === 'error' && (
                                <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                                    <p className="text-red-400 text-sm">✗ Failed to send message. Please try again or email me directly.</p>
                                </div>
                            )}

                            <div>
                                <Button
                                    type="submit"
                                    className="w-full sm:w-auto"
                                    glow
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? 'Sending...' : 'Send Message'}
                                </Button>
                            </div>
                        </form>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="lg:col-span-2 flex flex-col justify-center space-y-8"
                    >
                        <div className="bg-gray-900/50 backdrop-blur-xl p-8 rounded-xl shadow-2xl border border-white/10">
                            <h3 className="text-xl font-semibold text-white mb-4">Contact Information</h3>
                            <ul className="space-y-4 text-gray-300">
                                <li className="flex items-center">
                                    <span className="material-symbols-outlined mr-4 text-primary">mail</span>
                                    <a className="hover:text-white transition-colors duration-300" href="mailto:hasibadi22@gmail.com">hasibadi22@gmail.com</a>
                                </li>
                                <li className="flex items-center">
                                    <span className="material-symbols-outlined mr-4 text-primary">call</span>
                                    <a className="hover:text-white transition-colors duration-300" href="tel:+8801918389189">+880 1918-389-189</a>
                                </li>
                                <li className="flex items-center">
                                    <span className="material-symbols-outlined mr-4 text-primary">chat</span>
                                    <a className="hover:text-white transition-colors duration-300" href="https://wa.me/8801918389189" target="_blank">+880 1918-389-189 (WhatsApp)</a>
                                </li>
                            </ul>
                        </div>
                        <div className="bg-gray-900/50 backdrop-blur-xl p-8 rounded-xl shadow-2xl border border-white/10">
                            <h3 className="text-xl font-semibold text-white mb-4">Follow Me</h3>
                            <div className="flex space-x-6">
                                <a className="text-gray-400 hover:text-white transition-transform duration-300 hover:-translate-y-1"
                                    target='_blank'
                                    href="https://github.com/Adi-ops16">
                                    <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                                        <path clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.168 6.839 9.49.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.03-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.338 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z" fillRule="evenodd"></path>
                                    </svg>
                                </a>
                                <a className="text-gray-400 hover:text-white transition-transform duration-300 hover:-translate-y-1"
                                    target='_blank'
                                    href="#">
                                    <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                                    </svg>
                                </a>
                                <a className="text-gray-400 hover:text-white transition-transform duration-300 hover:-translate-y-1 flex items-center"
                                    target='_blank'
                                    href="https://x.com/AbdulHasib95581">
                                    <FaXTwitter size={25}></FaXTwitter>
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
