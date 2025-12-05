"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';

export function Header() {
    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-white/10 bg-background-dark/80 px-10 py-4 font-display backdrop-blur-md"
        >
            <div className="flex items-center gap-4 text-white">
                <div className="size-6 text-primary">
                    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M44 11.2727C44 14.0109 39.8386 16.3957 33.69 17.6364C39.8386 18.877 44 21.2618 44 24C44 26.7382 39.8386 29.123 33.69 30.3636C39.8386 31.6043 44 33.9891 44 36.7273C44 40.7439 35.0457 44 24 44C12.9543 44 4 40.7439 4 36.7273C4 33.9891 8.16144 31.6043 14.31 30.3636C8.16144 29.123 4 26.7382 4 24C4 21.2618 8.16144 18.877 14.31 17.6364C8.16144 16.3957 4 14.0109 4 11.2727C4 7.25611 12.9543 4 24 4C35.0457 4 44 7.25611 44 11.2727Z"
                            fill="currentColor"
                        ></path>
                    </svg>
                </div>
                <h2 className="text-white text-xl font-bold leading-tight tracking-[-0.015em]">Hasib</h2>
            </div>
            <nav className="flex flex-1 justify-end gap-8">
                <div className="flex items-center gap-9 text-gray-300">
                    <Link href="#about" className="text-sm font-medium leading-normal transition-colors hover:text-primary">
                        About
                    </Link>
                    <Link href="#services" className="text-sm font-medium leading-normal transition-colors hover:text-primary">
                        Services
                    </Link>
                    <Link href="#skills" className="text-sm font-medium leading-normal transition-colors hover:text-primary">
                        Skills
                    </Link>
                    <Link href="#projects" className="text-sm font-medium leading-normal transition-colors hover:text-primary">
                        Projects
                    </Link>
                    <Link href="#contact" className="text-sm font-medium leading-normal transition-colors hover:text-primary">
                        Contact
                    </Link>
                </div>
            </nav>
        </motion.header>
    );
}
