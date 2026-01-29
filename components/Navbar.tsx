"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Cpu } from "lucide-react";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Ana Sayfa", href: "#home" },
        { name: "Hizmetler", href: "#services" },
        { name: "Teknolojiler", href: "#tech" },
        { name: "Süreç", href: "#process" },
        { name: "İletişim", href: "#contact" },
    ];

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "py-4 glass-nav" : "py-6 bg-transparent"
            }`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="bg-primary p-1.5 rounded-lg group-hover:rotate-12 transition-transform duration-300">
                        <Cpu className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-xl font-display font-bold tracking-tighter text-slate-900 dark:text-white">
                        PTAH <span className="text-primary">SYSTEMS</span>
                    </span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link href="/admin" className="text-sm font-semibold bg-primary/10 text-primary px-5 py-2 rounded-full hover:bg-primary hover:text-white transition-all duration-300">
                        Admin Girişi
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-slate-900 dark:text-white"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden glass-nav absolute top-full left-0 right-0 p-6 flex flex-col gap-4 animate-in slide-in-from-top-4 duration-300 shadow-2xl">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-lg font-medium py-2 border-b border-slate-100 dark:border-slate-800"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href="/admin"
                        className="btn-premium text-center mt-2"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Admin Girişi
                    </Link>
                </div>
            )}
        </nav>
    );
}
