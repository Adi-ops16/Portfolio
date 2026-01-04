import { FaXTwitter } from "react-icons/fa6";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full bg-background-dark border-t border-slate-800 text-slate-400">
            <div className="container mx-auto px-6 py-8">
                <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
                    <div className="text-center sm:text-left">
                        <p className="text-sm text-slate-400">© {currentYear} Hasib. All Rights Reserved.</p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
                        <a className="hover:text-blue-400 transition-colors" href="#">Home</a>
                        <a className="hover:text-blue-400 transition-colors" href="#about">About</a>
                        <a className="hover:text-blue-400 transition-colors" href="#projects">Projects</a>
                        <a className="hover:text-blue-400 transition-colors" href="#contact">Contact</a>
                    </div>
                    <div className="flex items-center space-x-6">
                        <a aria-label="GitHub" className="text-slate-400 hover:text-purple-400 transition-colors duration-300"
                            target="_blank" rel="noopener noreferrer" href="https://github.com/Adi-ops16">
                            <svg aria-hidden="true" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                <path clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.165 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.942.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z" fillRule="evenodd"></path>
                            </svg>
                        </a>
                        <a aria-label="LinkedIn" className="text-slate-400 hover:text-primary transition-colors duration-300" target="_blank" rel="noopener noreferrer" href="#">
                            <svg aria-hidden="true" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                            </svg>
                        </a>
                        <a aria-label="Twitter" className="text-slate-400 hover:text-sky-400 transition-colors duration-300"
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://x.com/AbdulHasib95581">
                            <FaXTwitter size={22}></FaXTwitter>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
