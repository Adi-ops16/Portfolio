"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useScroll, useMotionValueEvent } from "framer-motion";
import { IoReorderTwoOutline } from "react-icons/io5";
import Logo from "./Logo";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import { Button } from "../ui/Button";

const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [hidden, setHidden] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { scrollY } = useScroll();
    const pathname = usePathname();

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious();
        if (latest > 50) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }

        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }
    });

    const links = [
        { name: "Home", href: "/" },
        { name: "Services", href: "/services" },
        { name: "Skills", href: "/skills" },
        { name: "Projects", href: "/projects" },
        { name: "Contact", href: "/contact" }
    ];

    return (
        <>
            <motion.nav
                variants={{
                    visible: { y: 0 },
                    hidden: { y: "-150%" },
                }}
                animate={hidden ? "hidden" : "visible"}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className={`fixed z-50 flex items-center justify-between transition-all duration-300 ${scrolled
                    ? "top-0 left-0 right-0 md:top-4 md:right-10 md:left-10 md:rounded-full px-8 py-3 bg-background-dark/80 backdrop-blur-md border border-white/5 shadow-xl"
                    : "top-0 left-0 right-0 px-6 py-4 md:px-10 md:py-6 bg-transparent border-transparent rounded-none"
                    }`}
            >
                {/* Logo */}
                <Logo className="scale-100" />

                {/* Mobile Menu Toggle Button */}
                <div
                    className="md:hidden text-white cursor-pointer hover:text-primary transition-colors p-2"
                    onClick={() => setMobileOpen(true)}
                >
                    <IoReorderTwoOutline size={34} />
                </div>

                {/* Desktop Menu Links */}
                <DesktopMenu links={links} pathname={pathname} />

                {/* Get In Touch CTA Button */}
                <div className="hidden md:block">
                    <a href="/contact">
                        <Button
                            variant="primary"
                            className="h-10 px-6 text-sm font-bold"
                        >
                            Get In Touch
                        </Button>
                    </a>
                </div>
            </motion.nav>

            <AnimatePresence>
                {mobileOpen && (
                    <MobileMenu
                        setMobileOpen={setMobileOpen}
                        mobileOpen={mobileOpen}
                        links={links}
                        pathname={pathname}
                    />
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
