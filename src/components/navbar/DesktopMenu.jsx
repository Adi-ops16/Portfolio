import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, LayoutGroup } from "framer-motion";

function isActive(pathname, href) {
    if (href === '/') return pathname === '/';
    return pathname === href || pathname.startsWith(href + '/');
}

const DesktopMenu = ({ links, pathname }) => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <LayoutGroup>
            <div
                className="hidden md:flex gap-4 items-center font-medium"
                onMouseLeave={() => setHoveredIndex(null)}
            >
                {links.map((item, i) => {
                    const active = isActive(pathname, item.href);
                    return (
                        <Link
                            key={i}
                            href={item.href}
                            className="relative z-50 px-5 py-2 cursor-pointer transition-colors"
                            onMouseEnter={() => setHoveredIndex(i)}
                        >
                            <AnimatePresence>
                                {hoveredIndex === i && (
                                    <motion.div
                                        layoutId="nav-pill"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="absolute inset-0 bg-primary/15 rounded-full -z-10 border border-primary/20"
                                        transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                                    />
                                )}
                            </AnimatePresence>

                            {/* main link text */}
                            <motion.span
                                className={`text-sm font-semibold transition-colors duration-200 ${active ? "text-white font-bold" : ""}`}
                                animate={{
                                    color: hoveredIndex === i
                                        ? "var(--color-primary, #8A2BE2)"
                                        : active
                                            ? "#ffffff"
                                            : "#d1d5db"
                                }}
                            >
                                {item.name}
                            </motion.span>

                            {/* persistent active underline indicator */}
                            {active && (
                                <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-primary rounded-full" />
                            )}
                        </Link>
                    );
                })}
            </div>
        </LayoutGroup>
    );
};

export default DesktopMenu;
