import Link from "next/link";

const legalLinks = [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/refund", label: "Refund Policy" },
    { href: "/terms", label: "Terms & Conditions" },
    { href: "/shipping", label: "Shipping & Delivery" },
];

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/shop", label: "Shop Services" },
    { href: "/contact", label: "Contact" },
];

export default function Footer() {
    return (
        <footer className="bg-[#0052CC]/10 border-t border-white/10 py-16 px-6 font-body">
            <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
                <div className="space-y-4">
                    <Link href="/" className="font-display text-2xl font-bold text-white">
                        Marketgrid<span className="text-[#FF7143]">.</span>
                    </Link>
                    <p className="text-brand-gray text-sm max-w-xs">
                        A full-service marketing and design firm dedicated to elevating your brand.
                    </p>
                </div>

                <div>
                    <h3 className="font-bold text-white uppercase tracking-widest mb-4">Quick Links</h3>
                    <ul className="space-y-3">
                        {navLinks.map(link => (
                            <li key={link.href}>
                                <Link href={link.href} className="text-brand-gray hover:text-white hover:underline transition-colors text-sm">
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h3 className="font-bold text-white uppercase tracking-widest mb-4">Legal</h3>
                    <ul className="space-y-3">
                        {legalLinks.map(link => (
                            <li key={link.href}>
                                <Link href={link.href} className="text-brand-gray hover:text-white hover:underline transition-colors text-sm">
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/10 text-center text-brand-gray text-sm">
                <p>&copy; {new Date().getFullYear()} Marketgrid Agency. All Rights Reserved.</p>
            </div>
        </footer>
    );
}