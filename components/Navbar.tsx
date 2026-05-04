"use client";

import { useState } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { ShoppingBag, Menu, X } from "lucide-react";
import Logo from "./Logo";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/shop", label: "Shop" },
    { href: "/contact", label: "Contact" },
];

export default function Navbar() {
    const { totalItems, openCart } = useCart();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-brand-dark/80 backdrop-blur-sm border-b border-white/10">
            <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                <Logo />

                <div className="hidden md:flex items-center gap-6">
                    <nav className="flex items-center gap-6">
                        {navLinks.map((link) => (
                            <Link key={link.href} href={link.href} className="text-brand-gray hover:text-white transition-colors text-sm uppercase tracking-wider font-semibold">
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    <div className="w-px h-6 bg-white/10"></div>

                    <button onClick={openCart} className="relative p-2">
                        <ShoppingBag className="text-white hover:text-[#FF7143] transition-colors" />
                        {totalItems > 0 && (
                            <span className="absolute -top-1 -right-1 bg-[#FF7143] text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                                {totalItems}
                            </span>
                        )}
                    </button>
                </div>

                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2">
                    {isMenuOpen ? <X /> : <Menu />}
                </button>

                {isMenuOpen && (
                    <div className="absolute top-full left-0 w-full bg-brand-dark/95 backdrop-blur-sm md:hidden flex flex-col items-center gap-6 py-8 border-t border-white/10">
                        {navLinks.map((link) => (
                            <Link key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)} className="text-brand-gray hover:text-white transition-colors text-lg uppercase tracking-wider font-semibold">
                                {link.label}
                            </Link>
                        ))}
                        <div className="w-24 h-px bg-white/10 my-2"></div>
                        <button onClick={openCart} className="relative p-2">
                            <ShoppingBag size={28} className="text-white hover:text-[#FF7143] transition-colors" />
                            {totalItems > 0 && (
                                <span className="absolute -top-1 -right-1 bg-[#FF7143] text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
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