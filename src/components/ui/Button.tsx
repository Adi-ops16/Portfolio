import { HTMLMotionProps, motion } from 'framer-motion';
import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends HTMLMotionProps<"button"> {
    children: ReactNode;
    variant?: 'primary' | 'secondary' | 'outline';
    className?: string;
    glow?: boolean;
}

export function Button({
    children,
    variant = 'primary',
    className,
    glow = false,
    ...props
}: ButtonProps) {
    const baseStyles = "flex items-center justify-center overflow-hidden rounded-full h-12 px-8 text-base font-bold leading-normal tracking-[0.015em] transition-all focus:outline-none focus:ring-4";

    const variants = {
        primary: "bg-gradient-to-r from-primary to-primary/80 text-white hover:from-primary/90 hover:to-primary/70 focus:ring-primary/50",
        secondary: "bg-gradient-to-r from-secondary to-secondary/80 text-white hover:from-secondary/90 hover:to-secondary/70 focus:ring-secondary/50",
        outline: "border border-white/20 bg-white/5 text-white hover:bg-white/10 focus:ring-white/50",
    };

    const glowClass = glow ? (variant === 'secondary' ? 'shadow-lg shadow-secondary/50' : 'shadow-lg shadow-primary/50') : '';

    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={twMerge(baseStyles, variants[variant], glowClass, className)}
            {...props}
        >
            <span className="truncate">{children}</span>
        </motion.button>
    );
}
