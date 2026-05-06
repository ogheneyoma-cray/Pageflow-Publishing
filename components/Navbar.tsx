"use client";

import { useState } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { ShoppingBag, Menu, X } from "lucide-react";
import Logo from "./Logo";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/shop", label: "Library" },
    { href: "/contact", label: "Contact" },
];

export default function Navbar() {
    const { totalItems, openCart } = useCart();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-900/10">
            <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                <Logo />

                <div className="hidden md:flex items-center gap-6">
                    <nav className="flex items-center gap-6">
                        {navLinks.map((link) => (
                            <Link key={link.href} href={link.href} className="text-slate-600 hover:text-emerald-500 transition-colors text-sm uppercase tracking-wider font-semibold">
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    <div className="w-px h-6 bg-slate-900/10"></div>

                    <button onClick={openCart} className="relative p-2">
                        <ShoppingBag className="text-slate-900 hover:text-emerald-500 transition-colors" />
                        {totalItems > 0 && (
                            <span className="absolute -top-1 -right-1 bg-emerald-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                                {totalItems}
                            </span>
                        )}
                    </button>
                </div>

                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 text-slate-900 hover:text-emerald-500">
                    {isMenuOpen ? <X /> : <Menu />}
                </button>

                {isMenuOpen && (
                    <div className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-md md:hidden flex flex-col items-center gap-6 py-8 border-t border-slate-900/10">
                        {navLinks.map((link) => (
                            <Link key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)} className="text-slate-600 hover:text-emerald-500 transition-colors text-lg uppercase tracking-wider font-semibold">
                                {link.label}
                            </Link>
                        ))}
                        <div className="w-24 h-px bg-slate-900/10 my-2"></div>
                        <button onClick={openCart} className="relative p-2">
                            <ShoppingBag size={28} className="text-slate-900 hover:text-emerald-500 transition-colors" />
                            {totalItems > 0 && (
                                <span className="absolute -top-1 -right-1 bg-emerald-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                                    {totalItems}
                                </span>
                            )}
                        </button>
                    </div>
                )}
            </nav>
        </header>
    );
}