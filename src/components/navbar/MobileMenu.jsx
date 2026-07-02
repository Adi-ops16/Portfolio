import { motion } from "framer-motion";
import Link from "next/link";
import Logo from "./Logo";

function isActive(pathname, href) {
    if (href === '/') return pathname === '/';
    return pathname === href || pathname.startsWith(href + '/');
}

const MobileMenu = ({ setMobileOpen, mobileOpen, links, pathname }) => {
    return (
        <div>
            {mobileOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xl p-4 md:hidden flex flex-col justify-center"
                >
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 50, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="bg-background-dark/90 border border-white/10 rounded-3xl p-6 h-full flex flex-col justify-between max-w-sm mx-auto w-full shadow-2xl"
                    >
                        {/* Top Section */}
                        <div>
                            <div className="flex justify-between items-center mb-10">
                                <Logo className="scale-100" />
                                <button 
                                    onClick={() => setMobileOpen(false)}
                                    className="text-white hover:text-primary text-2xl p-2 transition-colors focus:outline-none"
                                >
                                    ✕
                                </button>
                            </div>

                            {/* Links Section */}
                            <div className="flex flex-col gap-6 pl-2">
                                {links.map((item, i) => (
                                    <Link
                                        key={i}
                                        href={item.href}
                                        onClick={() => setMobileOpen(false)}
                                        className={`text-3xl font-bold hover:text-primary transition-colors duration-200 ${isActive(pathname, item.href) ? 'text-white font-bold' : 'text-gray-300'}`}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Button Section */}
                        <Link
                            href="/contact"
                            onClick={() => setMobileOpen(false)}
                            className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white py-3 rounded-full text-center font-bold text-lg shadow-lg shadow-primary/30 transition-all duration-200 active:scale-95 block"
                        >
                            Get In Touch
                        </Link>

                    </motion.div>
                </motion.div>
            )}
        </div>
    );
};

export default MobileMenu;
