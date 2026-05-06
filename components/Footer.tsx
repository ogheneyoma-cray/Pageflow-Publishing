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
    { href: "/shop", label: "Library" },
    { href: "/contact", label: "Contact" },
];

export default function Footer() {
    return (
        <footer className="bg-slate-900/5 border-t border-slate-900/10 py-16 px-6 font-body">
            <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
                <div className="space-y-4">
                    <Link href="/" className="font-display text-2xl font-bold text-slate-900">
                        Pageflow<span className="text-emerald-500">.</span>
                    </Link>
                    <p className="text-slate-700 text-sm max-w-xs">
                        Discover a curated sanctuary of premium ebooks designed for the modern reader.
                    </p>
                </div>

                <div>
                    <h3 className="font-bold text-slate-900 uppercase tracking-widest mb-4">Quick Links</h3>
                    <ul className="space-y-3">
                        {navLinks.map(link => (
                            <li key={link.href}>
                                <Link href={link.href} className="text-slate-700 hover:text-emerald-500 hover:underline transition-colors text-sm">
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h3 className="font-bold text-slate-900 uppercase tracking-widest mb-4">Legal</h3>
                    <ul className="space-y-3">
                        {legalLinks.map(link => (
                            <li key={link.href}>
                                <Link href={link.href} className="text-slate-700 hover:text-emerald-500 hover:underline transition-colors text-sm">
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-slate-900/10 text-center text-slate-700 text-sm">
                <p>&copy; {new Date().getFullYear()} Pageflow Publishing. All Rights Reserved.</p>
            </div>
        </footer>
    );
}